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

### Phase 2 - Frontend Public Pages 🔄 IN PROGRESS
Current step: Setting up design system and folder structure
- [x] Cleaned up default Vite files
- [x] Installed React Router
- [x] Created src/pages, src/components, src/styles folders
- [ ] Create Navbar component
- [ ] Create Footer component
- [ ] Build Home page
- [ ] Build About page
- [ ] Build Field Stories page
- [ ] Build Join Us / Registration page
- [ ] Build Contact page

### Phase 3 - Backend API (NOT STARTED)
- Express server setup
- MongoDB connection
- Member registration API
- Admin authentication API
- Blog posts API

### Phase 4 - Connect Frontend to Backend (NOT STARTED)
- Registration form submits to database
- Blog posts pulled from database
- Admin login connected

### Phase 5 - Admin Dashboard (NOT STARTED)
- Protected admin routes
- Member management interface
- Blog management interface

### Phase 6 - Deployment (NOT STARTED)
- MongoDB Atlas setup
- Deploy backend to Render
- Deploy frontend to Vercel

---

## Key Decisions Made
- Admin only dashboard (members do not get dashboard access)
- 3 admin accounts maximum, created manually for security
- Member registration status flow: Pending → Approved/Rejected
- Nyansapo symbol chosen as brand identity
- Free hosting stack chosen (NGO budget consideration)

---

## Current Status
Phase 2 in progress - About to build Navbar component