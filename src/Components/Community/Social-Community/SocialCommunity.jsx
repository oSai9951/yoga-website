import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SocialCommunity.module.css';

const SocialCommunity = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://yoga-website-2a1bc-default-rtdb.firebaseio.com/users.json'
        );
        const data = response.data;
        // Transform the returned object into an array by taking the second element ([key, value]) of each entry.
        const usersArray = Object.entries(data).map(([key, value]) => value);
        setUsers(usersArray);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  // This function returns the experience level rating as a row of 3 boxes.
  const renderExperienceLevel = (experienceLevel) => {
    let colors = [];
    if (experienceLevel === 'Beginner') {
      colors = ['lightgreen', 'white', 'white'];
    } else if (experienceLevel === 'Intermediate') {
      colors = ['lightgreen', 'orange', 'white'];
    } else if (experienceLevel === 'Advanced') {
      colors = ['lightgreen', 'orange', 'red'];
    } else {
      colors = ['white', 'white', 'white'];
    }

    return (
      <div className={styles.experienceContainer}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles.experienceBox}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h2>Social Community</h2>
      {users.map((user, index) => (
        <div key={index} className={styles.userCard}>
          <h3>{user.fullName}</h3>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Yoga pose:</strong> {user.preferredPoses}
          </p>
          <p>
            <strong>Date:</strong> {user.selectedDate}
          </p>
          <p>
            <strong>Routine:</strong> {user.routine}
          </p>
          <div style={{display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <strong>Difficulty: {user.experienceLevel}</strong>
            {renderExperienceLevel(user.experienceLevel)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialCommunity;
