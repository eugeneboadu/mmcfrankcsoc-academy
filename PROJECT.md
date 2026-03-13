# MmcfraNkcsoc Academy - Project Brief

## What This Project Is
A full-stack web platform for MmcfraNkcsoc Academy, an NGO that teaches AI and IT 
to children in rural and less-endowed communities in Ghana.

## How To Continue In A New Chat
Paste the contents of this file and say:
"I am building this project, please continue from where we left off"

---

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas (free tier)
- Authentication: JWT (JSON Web Tokens)
- Hosting: Vercel (frontend) + Render (backend)
- Version Control: GitHub

## GitHub Repository
https://github.com/eugeneboadu/mmcfrankcsoc-academy

---

## Visual Identity
- Symbol: Nyansapo (wisdom knot - represents wisdom and ingenuity)
- Colors: Deep forest green + warm gold + cream white
- Feeling: Warm and community-driven
- Typography: Clean, modern, professional but warm

## Color Palette
- Primary Green: #2D6A4F
- Warm Gold: #F4A827
- Cream White: #FDFAF5
- Dark Text: #1a1a1a
- Light Gray: #F0EBE3

---

## Database Collections

### Members Collection
- fullName, age, gender, email, phone
- region, occupation, skills[]
- whyJoining, heardFrom
- status (pending/approved/rejected)
- appliedAt, reviewedAt, reviewedBy

### Posts Collection
- title, content, location, date
- photoUrl, author, published (bool)
- createdAt, updatedAt

### Admins Collection
- name, email, passwordHash, role, createdAt

---

## Pages To Build

### Public Pages
- Home Page
- About Page
- Field Stories / Blog Page
- Join Us / Registration Page
- Contact Page

### Admin Panel (protected)
- Admin Login Page
- Dashboard Home
- Member Management (approve/reject)
- Blog Management (create/edit/delete posts)
- Admin Management

---

## Development Phases

### Phase 1 - Project Setup ✅ COMPLETE
- Created project folder structure (client + server)
- Initialized React + Vite frontend
- Initialized Node.js + Express backend
- Installed all dependencies
- Created backend folder structure (controllers, models, routes, middleware)
- Set up .gitignore
- Pushed to GitHub

### Phase 2 - Frontend Public Pages ✅ COMPLETE
- [x] Cleaned up default Vite files
- [x] Installed React Router
- [x] Created src/pages, src/components, src/styles folders
- [x] Created variables.css design system
- [x] Created Navbar component
- [x] Created Footer component
- [x] Built Home page
- [x] Built About page
- [x] Built Field Stories page
- [x] Built Join Us / Registration page
- [x] Built Contact page

### Phase 3 - Backend API ✅ COMPLETE
- [x] Set up Express server in index.js
- [x] Connected to MongoDB Atlas (pending network test)
- [x] Built Member model
- [x] Built Admin model
- [x] Built Post model
- [x] Built member routes
- [x] Built auth routes
- [x] Built post routes
- [x] Built auth middleware
- [x] Built member controller
- [x] Built auth controller
- [x] Built post controller
- [x] Created admin seed script

### Phase 4 - Connect Frontend to Backend ✅ COMPLETE
- [x] Installed axios
- [x] Created src/api.js with all API functions
- [x] Connected Join Us form to backend
- [x] Connected Stories page to backend
- [x] Added loading and error states to forms

### Phase 5 - Admin Dashboard ✅ COMPLETE
- [x] Built Admin Login page
- [x] Built Dashboard Home with stats
- [x] Built Member Management page
- [x] Built Blog Management page
- [x] Connected all dashboard routes in App.jsx

### Phase 6 - Deployment ✅ COMPLETE
- [x] Added start script for deployment
- [x] Deployed backend to Render
- [x] Connected MongoDB Atlas on Render
- [x] Deployed frontend to Vercel
- [x] Fixed React Router on Vercel
- [x] Seeded admin accounts
- [x] Removed seed route for security
- [x] Fixed mobile responsiveness

### Phase 7 - Email Notifications ✅ COMPLETE
- [x] Installed Resend email service
- [x] Created email templates (confirmation, approval, rejection)
- [x] Members receive confirmation email on registration
- [x] Members receive approval email when accepted
- [x] Members receive rejection email when rejected
- [x] Added RESEND_API_KEY to Render environment

### Phase 8 - Photo Upload ✅ COMPLETE
- [x] Installed Cloudinary and Multer
- [x] Created Cloudinary configuration
- [x] Updated post routes to handle photo uploads
- [x] Updated post controller to save photo URLs
- [x] Updated Blog Management to upload real photos
- [x] Updated Stories page to display real photos
- [x] Added Cloudinary credentials to Render

### Phase 9 - Story Detail Page ✅ COMPLETE
- [x] Built individual story detail page
- [x] Shows full story content
- [x] Displays photo as hero image
- [x] Back to stories navigation
- [x] Join CTA at bottom
- [x] Mobile responsive

### Phase 10 - Member Delete ✅ COMPLETE
- [x] Added delete button to member table
- [x] Added delete API route on backend
- [x] Added delete controller function
- [x] Admins can now permanently delete members

## Live URLs
- Frontend: https://mmcfrankcsoc-academy.vercel.app
- Backend: https://mmcfrankcsoc-academy.onrender.com
- Admin Panel: https://mmcfrankcsoc-academy.vercel.app/admin

## Admin Credentials
- Email: eugene@mmcfrankcsoc.org
- Password: Mmcadmin2024
---
