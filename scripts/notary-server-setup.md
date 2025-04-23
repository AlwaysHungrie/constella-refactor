> ssh into pineappl

export EC2_DNS="ec2-$(echo $PUBLIC_IP | tr '.' '-').ap-south-1.compute.amazonaws.com"
ssh -i CliGeneratedPineapplKey.pem ubuntu@$EC2_DNS

> install notary server

sudo apt update 
sudo apt install curl build-essential gcc make -y
sudo apt install libssl-dev -y
sudo apt-get install pkg-config -y

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

git clone https://github.com/tlsnotary/tlsn.git
cd tlsn/crates/notary/server/

vim config/config.yaml
> change tls enabled to false, max-sent to 16384, max-recv to 16384

cargo build --release

cp -r config ../../../target/release/
cp -r fixture ../../../target/release/

cd ../../../target/release/

nohup ./notary-server > /dev/null 2>&1 &

curl -I localhost:7047

> configure nginx

sudo vim /etc/nginx/sites-available/notary1.pineappl.xyz

server {
    listen 80;
    server_name notary1.pineappl.xyz;

    location / {
        proxy_pass http://localhost:7047;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support (if needed)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

sudo ln -s /etc/nginx/sites-available/notary1.pineappl.xyz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d notary1.pineappl.xyz
sudo systemctl restart nginx

sudo certbot renew --dry-run

