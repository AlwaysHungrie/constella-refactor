# Agent Playground Backend

```bash
touch .env
echo "DATABASE_URL=postgresql://agentplayground_user:agentplayground_user_password@localhost:5432/agentplaygrounddb?schema=public" >> .env
echo "SHADOW_DATABASE_URL=postgresql://agentplayground_user:agentplayground_user_password@localhost:5432/shadow_agentplaygrounddb?schema=public" >> .env

psql -U postgres -c "CREATE DATABASE agentplaygrounddb;"
psql -U postgres -c "CREATE DATABASE shadow_agentplaygrounddb;"
psql -U postgres -c "CREATE USER agentplayground_user WITH PASSWORD 'agentplayground_user_password';"

psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE agentplaygrounddb TO agentplayground_user;"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE shadow_agentplaygrounddb TO agentplayground_user;"

psql -U postgres -d agentplaygrounddb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO agentplayground_user;"
psql -U postgres -d shadow_agentplaygrounddb -c "GRANT ALL PRIVILEGES ON SCHEMA public TO agentplayground_user;"
```

---

```
npm install
npm run dev
```
