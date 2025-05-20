import React from 'react';
import { checkPromotion } from '../../logic/checkPromotion';

import Dashboard from './components/Dashboard';
import PromotionTable from './components/PromotionTable';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Footer from './components/Footer';

import { checkPromotion } from './logic/promotion';
import { promotionRules } from './logic/promotionRules';
import { userRoles } from './logic/userRoles';
import { LEVELS } from './constants';
import { hasAccess } from './auth';
import repData from './repData';
import { generateAdvice } from './aiAssistant';
const reps = repData.map(rep => {
  const promotionStatus = checkPromotion(rep);
  const advice = generateAdvice(rep);
return { ...rep, ...promotionStatus, advice };
function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <PromotionTable reps={reps} />
      <Footer />
    </div>
  );
}

export default App;
