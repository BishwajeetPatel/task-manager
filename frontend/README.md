# Task Manager - Full Stack Web Application

A modern, scalable task management application with JWT authentication, built with React, Node.js, Express, and MongoDB.

## 🚀 Features

### Frontend
- ✅ React.js with modern hooks
- ✅ TailwindCSS for responsive design
- ✅ Client-side form validation
- ✅ Protected routes (authentication required)
- ✅ Search and filter functionality
- ✅ Real-time UI updates

### Backend
- ✅ Node.js + Express REST API
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ MongoDB database integration
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration

### Security
- ✅ Password hashing (bcrypt)
- ✅ JWT token authentication
- ✅ Protected API routes
- ✅ Input sanitization
- ✅ Error handling middleware

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── TaskModal.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
npm install
```

2. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

3. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
npm install
```

2. Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer {token}

Response: {
  "id": "user_id",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Task Endpoints

#### Get All Tasks
```http
GET /api/tasks
Authorization: Bearer {token}

Response: [
  {
    "id": "task_id",
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "New task",
  "description": "Task description",
  "status": "pending"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated task",
  "description": "Updated description",
  "status": "completed"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer {token}
```

## 🔒 Security Features

1. **Password Security**
   - Passwords hashed using bcrypt (10 salt rounds)
   - Never stored in plain text
   - Minimum 6 characters required

2. **JWT Authentication**
   - Token expires in 30 days
   - Token required for protected routes
   - Stored securely in frontend

3. **Input Validation**
   - Email format validation
   - Password strength requirements
   - SQL injection prevention via Mongoose
   - XSS protection

4. **Error Handling**
   - Comprehensive error messages
   - No sensitive data in error responses
   - Proper HTTP status codes

## 📈 Scalability Considerations

### Frontend
- Component-based architecture for reusability
- Centralized API calls in utils
- State management ready for Redux/Context
- Code splitting for performance
- Lazy loading for routes

### Backend
- Modular route structure
- Middleware for cross-cutting concerns
- Database indexing on frequently queried fields
- Ready for microservices architecture
- Environment-based configuration

### Database
- MongoDB indexes on userId and createdAt
- Pagination ready (add skip/limit params)
- Aggregation pipeline for complex queries

### Production Deployment

1. **Frontend**
   - Build optimized bundle: `npm run build`
   - Deploy to Vercel/Netlify
   - Enable CDN for static assets

2. **Backend**
   - Use PM2 for process management
   - Deploy to AWS/Heroku/DigitalOcean
   - Set up reverse proxy (Nginx)
   - Enable HTTPS with SSL certificates

3. **Database**
   - Use MongoDB Atlas for managed hosting
   - Set up replicas for high availability
   - Enable automatic backups

4. **Environment Variables**
   - Use secure environment variable management
   - Different configs for dev/staging/production
   - Never commit .env files

## 🧪 Testing

Run tests:
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📝 Notes

- This is a demo application for the Frontend Developer Intern assignment
- In production, add rate limiting, HTTPS, and more security measures
- Consider adding features like task priorities, due dates, and categories
- Implement pagination for large datasets
- Add email verification for user registration

## 👨‍💻 Author

Created as part of the Frontend Developer Intern assignment

## 📄 License

MIT License