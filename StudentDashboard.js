import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ProjectSubmission from './ProjectSubmission';
import '../assets/styles/studentDashboard.css';

function StudentDashboard() {
  const [myProject, setMyProject] = useState(null);
  const [loading, setLoading] = useState(true); // optional for better UX
  const navigate = useNavigate(); // needed for redirect

  useEffect(() => {
    const fetchMyProject = async () => {
      if (auth.currentUser) {
        const q = query(
          collection(db, 'projects'),
          where('studentId', '==', auth.currentUser.uid)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setMyProject(snapshot.docs[0].data());
        }
        setLoading(false);
      } else {
        setLoading(false);
        navigate('/login'); // redirect if not logged in
      }
    };

    fetchMyProject();
  }, [navigate]); // 👈 dependency list

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : myProject ? (
        <div className="project-box">
          <h4>Status: <span className="status-text">{myProject.status}</span></h4>
          <h4>Selected Idea:</h4>
          <p className="idea-text">{myProject.selectedIdea || 'Not selected yet by Guide'}</p>

          {myProject.remarks && (
            <div className="remarks-box">
              <h4>Remarks from Guide:</h4>
              <p>{myProject.remarks}</p>
            </div>
          )}
        </div>
      ) : (
        <ProjectSubmission />
      )}
    </div>
  );
}

export default StudentDashboard;
