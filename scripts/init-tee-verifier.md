These commands are used to create 
- nitro verifier package
- create and deploy the nitro verifier instance frontend and backend
- all the commands are copied and edited from other script pages and nitro-verifier readme


rustup target add wasm32-unknown-unknown
cargo install wasm-bindgen-cli
cargo build --target wasm32-unknown-unknown --release

wasm-bindgen target/wasm32-unknown-unknown/release/nitro_attestation_verifier.wasm --out-dir ../verifier-js --nodejs

aws ec2 create-key-pair \
  --region ap-south-1 \
  --key-name CliGeneratedPineapplKey \
  --query "KeyMaterial" \
  --output text > CliGeneratedPineapplKey.pem

chmod 400 CliGeneratedPineapplKey.pem

aws ec2 describe-images \
  --region ap-south-1 \
  --owners 099720109477 \
  --filters "Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*" "Name=state,Values=available" \
  --query "sort_by(Images, &CreationDate)[-1].ImageId" \
  --output text

aws ec2 run-instances \
  --region ap-south-1 \
  --image-id ami-0d01904ee0d806ca5 \
  --instance-type t2.micro \
  --key-name CliGeneratedPineapplKey \
  --block-device-mappings "[{\"DeviceName\":\"/dev/sda1\",\"Ebs\":{\"VolumeSize\":20,\"DeleteOnTermination\":true}}]" \
  --count 1

aws ec2 describe-instances \
  --region ap-south-1 \
  --filters "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].[InstanceId,PublicIpAddress,State.Name]" \
  --output table

aws ec2 describe-instances \
  --region ap-south-1 \
  --instance-ids $INSTANCE_ID \
  --query "Reservations[0].Instances[0].SecurityGroups[0].GroupId" \
  --output text

> Automatically got assigned previously configured security group id
> so we dont need to change its rules

aws ec2 allocate-address \
  --region ap-south-1 \
  --domain vpc

aws ec2 associate-address \
  --region ap-south-1 \
  --instance-id $INSTANCE_ID \
  --allocation-id $ALLOCATION_ID

aws ec2 describe-addresses \
  --region ap-south-1

export EC2_DNS="ec2-$(echo $PUBLIC_IP | tr '.' '-').ap-south-1.compute.amazonaws.com"
ssh -i CliGeneratedPineapplKey.pem ubuntu@$EC2_DNS

> install node and pm2

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"


sudo apt-get update
sudo apt-get install nginx -y

sudo ufw allow 'Nginx Full'
sudo ufw enable

sudo apt install certbot python3-certbot-nginx -y

sudo touch /etc/nginx/sites-available/pineappl.xyz
sudo vim /etc/nginx/sites-available/pineappl.xyz

server {
    listen 80;
    server_name pineappl.xyz www.pineappl.xyz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}

sudo ln -s /etc/nginx/sites-available/pineappl.xyz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d pineappl.xyz -d www.pineappl.xyz
sudo systemctl restart nginx

sudo certbot renew --dry-run

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

nvm install node
nvm use node
npm install -g pm2
pm2 startup
sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v23.11.0/bin /home/ubuntu/.nvm/versions/node/v23.11.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

git clone https://github.com/AlwaysHungrie/constella-refactor
cd constella-refactor/nitro-verifier/verifier-frontend
npm install
npm run build

pm2 start npm --name "verifier frontend" -- start -- -p 3000

sudo vim /etc/nginx/sites-available/nitro-verifier.pineappl.xyz

server {
    listen 80;
    server_name nitro-verifier.pineappl.xyz www.nitro-verifier.pineappl.xyz;

    location / {
        proxy_pass http://localhost:4001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}

sudo ln -s /etc/nginx/sites-available/nitro-verifier.pineappl.xyz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d nitro-verifier.pineappl.xyz -d www.nitro-verifier.pineappl.xyz
sudo systemctl restart nginx

sudo certbot renew --dry-run

cd constella-refactor/nitro-verifier/nodejs
npm install

pm2 start npm --name "verifier backend" -- start