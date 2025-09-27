### If running without Docker you can use NVM or download the Node 24 version directly

```bash
nvm install
nvm use
```

### And then run this set of commands

```bash
npm i -g yarn
yarn
yarn lefthook install
yarn dev
sudo docker build . -t goalt && docker run -p 3000:3000 goalt
```

```
open http://localhost:3000
```

### You can create a quick Postgres database with

```bash
docker run --name meu-postgres \
        -e POSTGRES_USER=admin \
        -e POSTGRES_PASSWORD=admin123 \
        -e POSTGRES_DB=meubanco \
        -p 5431:5432 \
        -d postgres:16

export DATABASE_URL="postgresql://admin:admin123@localhost:5431/meubanco"

yarn migration:generate
yarn migration:run

psql postgresql://admin:admin123@localhost:5431/meubanco

SELECT * FROM users;
```

### For future use you can just run this

```bash
sudo docker start meu-postgres
```

## Tech Stack

- **Runtime**: NodeJs V24
- **Web Framework**: Hono
- **ORM/Query Builder**: Drizzle ORM
- **Database**: PostgreSQL with Supabase
- **Authentication**: Firebase
- **Storage**: AWS S3
- **Hosting Server**: AWS EC2
- **Container Register**: AWS ECR
- **CI/CD Platform**: Github Actions (maybe will try Jenkins)
