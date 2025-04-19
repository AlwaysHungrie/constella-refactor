These commands are used to ssh into the instance and setup the environment.

> ssh into the instance

export PUBLIC_IP=
export EC2_DNS="ec2-$(echo $PUBLIC_IP | tr '.' '-').ap-south-1.compute.amazonaws.com"
ssh -i CliGeneratedConstellaKey.pem ubuntu@$EC2_DNS


> install nginx and configure with domain docs.constella.one
> requires dns records to be set "A docs.constella.one -> $PUBLIC_IP" and "A www.docs.constella.one -> docs.constella.one"

sudo apt-get update
sudo apt-get install nginx -y

sudo ufw allow 'Nginx Full'
sudo ufw enable

sudo apt install certbot python3-certbot-nginx -y

sudo touch /etc/nginx/sites-available/docs.constella.one

sudo tee /etc/nginx/sites-available/docs.constella.one > /dev/null <<'EOF'
server {
    listen 80;
    server_name docs.constella.one www.docs.constella.one;

    location / {
        proxy_pass http://localhost:3005;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/docs.constella.one /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d docs.constella.one -d www.docs.constella.one
sudo systemctl restart nginx

sudo certbot renew --dry-run

> install node and pm2

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

nvm install node
nvm use node
npm install -g pm2
pm2 startup
sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v23.11.0/bin /home/ubuntu/.nvm/versions/node/v23.11.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

> git clone 

git clone https://github.com/AlwaysHungrie/constella-refactor
cd constella-refactor/docs
npm install
npm run build
npm install -g serve
pm2 start serve --name "docusaurus" -- -s build -p 3005
pm2 save