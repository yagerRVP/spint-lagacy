import React from 'react';

function UserCard({ name, level, progress }) {
  return (
    <div style={{ border: '1px solid #aaa', borderRadius: '8px', padding: '1em', marginBottom: '1em' }}>
      <h4>{name}</h4>
      <p>Level: {level}</p>
      <p>Progress: {progress}%</p>
    </div>
  );
}

export default UserCard;
