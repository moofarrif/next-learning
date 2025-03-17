
# Development

steps to run the project locally:


1.  run database
```bash
docker-compose up -d
```

2. Rename the file `.env.template` to `.env` and fill the variables

3. Replace environment variables in `.env` file
4. Execute seed to [populate the database](localhost:3000/api/seed)
```bash

# Prisma comands


```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```a