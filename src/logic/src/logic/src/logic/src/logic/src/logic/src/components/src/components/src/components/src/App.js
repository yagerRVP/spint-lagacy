import React from 'react';
import Dashboard from './components/Dashboard';
import PromotionTable from './components/PromotionTable';

import { checkPromotion } from './logic/promotionChecker';
import { userRoles } from './logic/userRoles';

const reps = [
  { name: 'Alice', level: 'seniorRep', recruits: 3, production: 3000 },
  { name: 'Bob', level: 'district', recruits: 5, licenses: 5, teamVolume: 10000 },
  { name: 'Charlie', level: 'division', licensedLeaders: 3, teamVolume: 15000 },
];

function App() {
  const enrichedReps = reps.map(rep => {
    const result = checkPromotion(rep);
    return { ...rep, status: result[rep.level]?.qualifies ? 'Eligible' : 'Not Eligible' };
  });

  return (
    <div>
      <Dashboard />
      <PromotionTable reps={enrichedReps} />
    </div>
  );
}

export default App;
