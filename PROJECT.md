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

### Phase 5 - Admin Dashboard 🔄 NEXT
Current step: Building admin login page
- [ ] Build Admin Login page
- [ ] Build protected Dashboard route
- [ ] Build Dashboard Home
- [ ] Build Member Management page
- [ ] Build Blog Management page

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