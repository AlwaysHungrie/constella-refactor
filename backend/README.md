# Constella Backend

Wallet backend for Constella. This does not run inside a nitro enclave.

## Setup Postgres DB for Prisma

```bash
touch .env
echo "DATABASE_URL=postgresql://constella_user:constella_user_password@localhost:5432/constelladb?schema=public" >> .env
echo "SHADOW_DATABASE_URL=postgresql://constella_user:constella_user_password@localhost:5432/shadow_constelladb?schema=public" >> .env

psql -U postgres -c "CREATE DATABASE constelladb;"
psql -U postgres -c "CREATE DATABASE shadow_constelladb;"
psql -U postgres -c "CREATE USER constella_user WITH PASSWORD 'constella_user_password';"

psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE constelladb TO constella_user;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE shadow_constelladb TO constella_user;"

psql -U postgres -d constelladb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO constella_user;"
psql -U postgres -d shadow_constelladb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO constella_user;"
```

---

```
npm install
npm run dev
```
