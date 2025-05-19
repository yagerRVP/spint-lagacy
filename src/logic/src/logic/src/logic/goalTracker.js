function trackGoals(repData, goals) {
  return {
    recruits: {
      current: repData.recruits || 0,
      target: goals.recruits,
      complete: (repData.recruits || 0) >= goals.recruits,
    },
    apps: {
      current: repData.apps || 0,
      target: goals.apps,
      complete: (repData.apps || 0) >= goals.apps,
    },
    licenses: {
      current: repData.licenses || 0,
      target: goals.licenses,
      complete: (repData.licenses || 0) >= goals.licenses,
    },
  };
}

module.exports = trackGoals;
