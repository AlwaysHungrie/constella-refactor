sudo apt update
sudo apt install postgresql postgresql-contrib -y
sudo systemctl status postgresql

sudo -i -u postgres

psql -U postgres -c "CREATE DATABASE constelladb;"
psql -U postgres -c "CREATE DATABASE shadow_constelladb;"
psql -U postgres -c "CREATE USER constella_user WITH PASSWORD 'constella_user_password';"

psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE constelladb TO constella_user;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE shadow_constelladb TO constella_user;"

psql -U postgres -d constelladb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO constella_user;"
psql -U postgres -d shadow_constelladb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO constella_user;"

ctrl + d

npm i

npx prisma migrate dev

npx prisma generate

npm run build

cp .env dist/.env
cp -r src/generated dist

pm2 start npm --name "backend" -- start

sudo vim /etc/nginx/sites-available/api.constella.one

server {
    listen 80;
    server_name api.constella.one;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}

sudo ln -s /etc/nginx/sites-available/api.constella.one /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d api.constella.one
sudo systemctl restart nginx
