# final-year-project-management
Final Year Project Management System is a web-based app developed during a college Inhouse  internship. It allows students to submit projects and enables guides and reviewers to give structured feedback. The system uses Firebase for authentication and data storage.


# Final Year Project Management System

This is a web-based application developed during an in-house college internship to manage final-year student projects. The system provides separate dashboards for students, guides, and reviewers to submit projects, give feedback, and track performance.


# Project Description

Final Year Project Management System streamlines the academic project evaluation process. Students can submit up to three project titles, guides can provide structured feedback, and reviewers can add preset remarks. The system uses Firebase Authentication and Firestore for secure login and real-time data management.



## Key Features

- Role-based login (Student, Guide, Reviewer)
- Project submission dashboard for students
- Feedback buttons for guides (Good, Moderate, Rejected)
- Preset remark options for reviewers
- Firebase-based user authentication
- Real-time data storage with Firestore
- Responsive and clean UI design

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Cloud Services**: Firebase Authentication, Firebase Firestore
- **Hosting**: Can be deployed on Firebase Hosting 

---

## Getting Started

### Prerequisites
- Firebase project (with Authentication and Firestore enabled)
- Code editor like VS Code
- Python (optional, for quick local hosting)

-> How to Run the Project Locally
** Prerequisites**

  1.  Code editor like VS Code

   2. Basic knowledge of Firebase (project already set up)

   3. Web browser (Chrome recommended)

 # Steps to Run Locally
1. Clone the Repository

git clone https://github.com/Samruddhiwagh-tech/final-year-project-management.git
cd final-year-project-management

2. Add Firebase Configuration

Open the file firebase-config.js and replace the placeholder with your actual Firebase project config:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

3. Open the App in Browser

You can use any of the following options:
 Option A: Use VS Code Live Server

    Open the folder in VS Code

    Open index.html

    Right-click > Open with Live Server

Then go to:

http://127.0.0.1:5500/index.html

 Option B: Use Python HTTP Server (if Python is installed)

python -m http.server 8000

Open this URL in your browser:

http://localhost:8000/index.html

 Option C: Manual

    Go to your project folder

    Double-click on index.html to open in browser

