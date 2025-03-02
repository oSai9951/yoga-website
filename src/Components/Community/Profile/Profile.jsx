import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Profile.module.css';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(
          'https://yoga-website-2a1bc-default-rtdb.firebaseio.com/my-profile.json'
        );
        if (response.data) {
          const profilesArray = Object.entries(response.data).map(
            ([key, value]) => ({
              id: key,
              ...value,
            })
          );
          setProfiles(profilesArray);
        }
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://yoga-website-2a1bc-default-rtdb.firebaseio.com/my-profile/${id}.json`
      );
      // Remove deleted profile from state
      setProfiles((prev) => prev.filter((profile) => profile.id !== id));
    } catch (error) {
      console.error("Error deleting profile:", error);
      alert("Error deleting profile. Please try again.");
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.pageTitle}>Candidate Profiles</h2>
      {profiles.length > 0 ? (
        profiles.map((profile, id) => (
          <div key={profile.id} className={styles.profileCard}>
            <div className={styles.cardHeader}>
              <h3>Pose Registered: {id+1} </h3>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(profile.id)}
              >
                Delete
              </button>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.detailRow}>
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>{profile.email}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Phone:</span>
                <span className={styles.value}>{profile.phone}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Experience:</span>
                <span className={styles.value}>{profile.experienceLevel}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Yoga Pose:</span>
                <span className={styles.value}>{profile.preferredPoses}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Selected Date:</span>
                <span className={styles.value}>{profile.selectedDate}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Routine:</span>
                <span className={styles.value}>{profile.routine}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.label}>Registered On:</span>
                <span className={styles.value}>
                  {new Date(profile.registrationDate).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.noProfiles}>No profiles found.</p>
      )}
    </div>
  );
};

export default Profile;
