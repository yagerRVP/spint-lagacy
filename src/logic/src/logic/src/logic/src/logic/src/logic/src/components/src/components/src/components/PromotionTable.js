import React from 'react';

function PromotionTable({ reps }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1em' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Level</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Recruits</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Production</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {reps.map((rep, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rep.name}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rep.level}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rep.recruits}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rep.production}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{rep.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PromotionTable;
