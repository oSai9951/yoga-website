import React, { useState } from 'react';
import axios from 'axios';
import styles from './CandidateForm.module.css';
import { useNavigate } from 'react-router';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'Beginner',
    preferredPoses: '',
    selectedDate: '',  
    routine: 'Morning',    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const candidate = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experienceLevel: formData.experienceLevel,
      preferredPoses: formData.preferredPoses,
      selectedDate: formData.selectedDate,  
      routine: formData.routine,             
      registrationDate: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        'https://yoga-website-2a1bc-default-rtdb.firebaseio.com/my-profile.json',
        candidate,
      );
      console.log('Candidate added:', response.data);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experienceLevel: 'Beginner',
        preferredPoses: '',
        selectedDate: '',
        routine: 'Morning',
      });
      alert('Candidate added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding candidate. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Yoga Candidate Registration</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="experienceLevel">Experience Level</label>
          <select 
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="preferredPoses">Preferred Pose (Enter pose ID)</label>
          <input 
            type="text" 
            id="preferredPoses" 
            name="preferredPoses"
            value={formData.preferredPoses}
            onChange={handleChange}
            placeholder="e.g., 1" 
          />
        </div>
        {/* New Input Field for Date */}
        <div className={styles.formGroup}>
          <label htmlFor="selectedDate">Select Date</label>
          <input 
            type="date" 
            id="selectedDate" 
            name="selectedDate"
            value={formData.selectedDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* New Input Field for Routine */}
        <div className={styles.formGroup}>
          <label htmlFor="routine">Select Routine</label>
          <select 
            id="routine"
            name="routine"
            value={formData.routine}
            onChange={handleChange}
            required
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      <button className={styles.backHome} onClick={() => navigate("/")}>
        Go Back to Home
      </button>
      
    </div>
  );
};

export default CandidateForm;
