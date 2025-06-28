import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import '../assets/styles/guideDashboard.css';

function GuideDashboard() {
  const [projects, setProjects] = useState([]);
  const [remarks, setRemarks] = useState({});

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, 'projects'));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProjects(list);
  };

  const handleDecision = async (projectId, ideaKey, decision) => {
    const updatedRemarks = { ...remarks };
    if (decision === 'Partially Accepted' && !remarks[`${projectId}-${ideaKey}`]) {
      alert("Please enter a remark for partial acceptance.");
      return;
    }

    const projectRef = doc(db, 'projects', projectId);
    const project = projects.find(p => p.id === projectId);

    const newReviews = {
      ...project.reviews,
      [ideaKey]: {
        decision,
        remark: decision === 'Partially Accepted' ? remarks[`${projectId}-${ideaKey}`] : ''
      }
    };

    await updateDoc(projectRef, {
      reviews: newReviews
    });

    fetchProjects();
    alert("Review saved!");
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderIdeaBox = (project, ideaKey, idea) => (
    <div className="idea-box" key={ideaKey}>
      <h4>{ideaKey.toUpperCase()}:</h4>
      <p><strong>Title:</strong> {idea?.title || 'N/A'}</p>
      <p><strong>Description:</strong> {idea?.description || 'N/A'}</p>

      <div className="decision-buttons">
        <button onClick={() => handleDecision(project.id, ideaKey, 'Accepted')}>Accept</button>
        <button onClick={() => handleDecision(project.id, ideaKey, 'Rejected')}>Reject</button>
        <button onClick={() => handleDecision(project.id, ideaKey, 'Partially Accepted')}>Partially Accept</button>
      </div>

      <textarea
        placeholder="Remarks for Partial Acceptance"
        className="remark-input"
        value={remarks[`${project.id}-${ideaKey}`] || ''}
        onChange={(e) =>
          setRemarks({
            ...remarks,
            [`${project.id}-${ideaKey}`]: e.target.value
          })
        }
      />
    </div>
  );

  return (
    <div className="guide-dashboard">
      <h2>Guide Dashboard</h2>
      {projects.map((project) => (
        <div className="project-container" key={project.id}>
          <h3>Student: {project.email || 'Unknown Email'}</h3>
          {renderIdeaBox(project, 'idea1', project.idea1)}
          {renderIdeaBox(project, 'idea2', project.idea2)}
          {renderIdeaBox(project, 'idea3', project.idea3)}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default GuideDashboard;
