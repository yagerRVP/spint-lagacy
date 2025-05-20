import { promotionRules } from './promotionRules';

export function checkPromotion(rep) {
  if (rep.recruits >= promotionRules.seniorRep.recruits &&
      rep.production >= promotionRules.seniorRep.production) {
    return 'Senior Rep';
  }

  if (rep.recruits >= promotionRules.district.recruits &&
      rep.licenses >= promotionRules.district.licenses &&
      rep.teamVolume >= promotionRules.district.teamVolume) {
    return 'District';
  }

  if (rep.licensedLeaders >= promotionRules.division.licensedLeaders &&
      rep.teamVolume >= promotionRules.division.teamVolume) {
    return 'Division';
  }

  if (promotionRules.rvp.manualApproval) {
    return 'Pending RVP Approval';
  }

  return 'No Promotion Yet';
}
