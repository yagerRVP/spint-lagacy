
export const promotionRules = {
  seniorRep: {
    recruits: 3,
    production: 3000,
  },
  district: {
    recruits: 5,
    licenses: 5,
    teamVolume: 10000,
  },
  division: {
    licensedLeaders: 3,
    teamVolume: 15000,
  },
  rvp: {
    manualApproval: true, // Only James Yager can promote
  },
};


export default promotionRules;
