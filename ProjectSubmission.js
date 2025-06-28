import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../assets/styles/projectSubmission.css';

function ProjectSubmission() {
  const [idea1Title, setIdea1Title] = useState('');
  const [idea1, setIdea1] = useState('');
  const [idea2Title, setIdea2Title] = useState('');
  const [idea2, setIdea2] = useState('');
  const [idea3Title, setIdea3Title] = useState('');
  const [idea3, setIdea3] = useState('');

  const handleSubmit = async () => {
    if (!idea1Title || !idea1 || !idea2Title || !idea2 || !idea3Title || !idea3) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'projects'), {
        studentId: auth.currentUser.uid,
        idea1Title,
        idea1,
        idea2Title,
        idea2,
        idea3Title,
        idea3,
        status: 'Pending',
      });
      alert('Project ideas submitted successfully!');
      window.location.reload();
    } catch (error) {
      alert('Submission failed: ' + error.message);
    }
  };

  return (
    <div className="submission-container">
      <h3 className="submission-title">Submit Your Project Ideas</h3>

      <div className="idea-group">
        <label>Idea 1 Title</label>
        <input
          type="text"
          placeholder="Enter title for Idea 1"
          value={idea1Title}
          onChange={(e) => setIdea1Title(e.target.value)}
        />
      </div>

      <div className="idea-group">
        <label>Idea 1 Description</label>
        <textarea
          placeholder="Describe your first idea..."
          value={idea1}
          onChange={(e) => setIdea1(e.target.value)}
        />
      </div>

      <div className="idea-group">
        <label>Idea 2 Title</label>
        <input
          type="text"
          placeholder="Enter title for Idea 2"
          value={idea2Title}
          onChange={(e) => setIdea2Title(e.target.value)}
        />
      </div>

      <div className="idea-group">
        <label>Idea 2 Description</label>
        <textarea
          placeholder="Describe your second idea..."
          value={idea2}
          onChange={(e) => setIdea2(e.target.value)}
        />
      </div>

      <div className="idea-group">
        <label>Idea 3 Title</label>
        <input
          type="text"
          placeholder="Enter title for Idea 3"
          value={idea3Title}
          onChange={(e) => setIdea3Title(e.target.value)}
        />
      </div>

      <div className="idea-group">
        <label>Idea 3 Description</label>
        <textarea
          placeholder="Describe your third idea..."
          value={idea3}
          onChange={(e) => setIdea3(e.target.value)}
        />
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit Ideas
      </button>
    </div>
  );
}

export default ProjectSubmission;
