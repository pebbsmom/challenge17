# Social Network API

A full-featured NoSQL API for a social media app, built with TypeScript, Express, and MongoDB.

## 🚀 Features

- Users can:
  - Create/update/delete accounts
  - Add/remove friends
- Thoughts can:
  - Be created, updated, and deleted
  - Include reactions (add/remove)
- Data served in clean JSON format

## 🛠 Tech Stack

- TypeScript
- Express.js
- MongoDB + Mongoose
- RESTful Routing

## ▶️ Walkthrough Video

👉 

https://github.com/user-attachments/assets/043d1ebf-b50e-4cac-b66f-b2dfbe6e1eef



## 📂 API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user + thoughts
- `POST /api/users/:userId/friends/:friendId` - Add friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove friend

### Thoughts

- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get thought by ID
- `POST /api/thoughts` - Create thought
- `PUT /api/thoughts/:id` - Update thought
- `DELETE /api/thoughts/:id` - Delete thought
- `POST /api/thoughts/:thoughtId/reactions` - Add reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete reaction

## 📦 Installation

```bash
git clone https://github.com/your-username/challenge17.git
cd challenge17
npm install
npm run dev
