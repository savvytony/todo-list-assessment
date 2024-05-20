# Todo list assessment

## Prerequisites

- [NodeJS](https://nodejs.org/en) (Recommended LTS version)
- [Docker](https://docs.docker.com/engine/install/)

## Installation

Clone the repo:

```bash
git clone git@github.com:savvytony/todo-list-assessment.git
cd todo-list-assessment
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env
```

## Commands

Run all required services:

```bash
docker compose up -d
```

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
PORT=2610

# MONGO DB
MONGO_URI=mongodb://localhost:27017/database_name

# JWT
JWT_SECRET=jwtSecret
JWT_EXPIRATION=30
```

## API Endpoints

List of available routes:

1. Register

```bash
curl --location 'http://localhost:2610/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
    "username": "test",
    "password": "123456"
}'
```

2. Login

```bash
curl --location 'http://localhost:2610/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "test",
    "password": "123456"
}'
```

3. Logout

```bash
curl --location --request POST 'http://localhost:2610/api/auth/logout' \
--header 'Authorization: Bearer token'
```

4. Create Task

```bash
curl --location 'http://localhost:2610/api/tasks' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token' \
--data '{
    "banner": "https://fakeimg.pl/320x200/",
    "title": "test",
    "description": "test"
}'
```

5. Get List Tasks

```bash
curl --location 'http://localhost:2610/api/tasks?limit=10&page=1&status=todo' \
--header 'Authorization: Bearer token'
```

6. Update Task

```bash
curl --location --request PUT 'http://localhost:2610/api/tasks/:taskId' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token' \
--data '{
    "status": "inProgress"
}'
```

7. Remove Task

```bash
curl --location --request DELETE 'http://localhost:2610/api/tasks/:taskId' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token'
```

8. Create Post

```bash
curl --location 'http://localhost:2610/api/posts' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token' \
--data '{
    "banner": "https://fakeimg.pl/320x200/",
    "title": "test",
    "description": "test"
}'
```

9. Get List Posts

```bash
curl --location 'http://localhost:2610/api/posts?limit=10&page=1' \
--header 'Authorization: Bearer token'
```

10. Update Post

```bash
curl --location --request PUT 'http://localhost:2610/api/posts/:postId' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token' \
--data '{
    "title": "test1"
}'
```

11. Remove Post

```bash
curl --location --request DELETE 'http://localhost:2610/api/posts/:postId' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token'
```