# 😻 My Favourite Albums

[![Build Status](https://travis-ci.com/KRRISH96/my-favourite-albums.svg?branch=main)](https://travis-ci.com/KRRISH96/my-favourite-albums)

A [TypeScript](https://www.typescriptlang.org/) Flavoured [Express](https://expressjs.com/) + [React](https://reactjs.org/) + [Prisma](https://prisma.io/) + [PostgreSQL](https://www.postgresql.org/) FullStack App to Create and Store Your Favourite Albums.
<br></br>

## 🔗 Live

<hr></hr>

[Deployed on Heroku](https://my-favourite-albums.herokuapp.com/)
<br></br>

## 🛠 API

<hr></hr>

Base URL - `https://my-favourite-albums.herokuapp.com/`

### GET `/api`

Root Endpoint - returns albums JSON

Request

```
curl --location --request GET 'https://my-favourite-albums.herokuapp.com/api'
```

Response

```
[
  {id: 1, title: "Title of Album", ...},
  ...,
  ....
]
```

### GET `/api/artists`

Returns artists JSON

Request

```
curl --location --request GET 'https://my-favourite-albums.herokuapp.com/api/artists'
```

Response

```
[
  {id: 1, name: "Artist Name", ...},
  ...,
  ....
]
```

### POST `/api/new_album`

Create a New Album

Request

```
curl --location --request POST 'https://my-favourite-albums.herokuapp.com/api' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "New Album Title",
"artistId": 100
}'
```

Response

```
# On Status 200
{ id: 112, title: "New Album Title", ... }
```

```
# On Status 400
{ error: "Error Message" }
```

<br></br>

## ✨ Frontend

### 🏠 Home Page

<hr></hr>

- Displays All Albums in a Tabular Format

<br></br>

### 📋 New Album Page

<hr></hr>

- Form to Create New Album

<br></br>

## 🗂 Directories

<hr></hr>

- server `/`
- frontend `/client`

<br></br>

## 💻 Development Setup

<hr></hr>

1. Fork and clone the repo
2. Install Dependencies

```

# Server

yarn install

# Client

cd client && yarn install

```

3. Add Postgres URL to `.env`

```

DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

```

4. Run Migrations - `npx prisma migrate dev`
5. Seed DB - `npx prisma db seed --preview-feature`
6. Run `yarn start:app` on root to start server and client concurrently.
   <br></br>

### 🙏 Thank You
