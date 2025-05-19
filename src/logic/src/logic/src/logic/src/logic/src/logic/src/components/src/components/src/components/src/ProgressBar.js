// ProgressBar.js
import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div style={{ background: '#eee', borderRadius: '4px', height: '10px' }}>
      <div
        style={{
          width: `${progress}%`,
          background: '#4caf50',
          height: '100%',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

export default ProgressBar;
