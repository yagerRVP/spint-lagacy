const userRoles = {
  admin: {
    canPromoteRVP: true,
    canEditStructure: true,
    canViewAll: true,
  },
  rvp: {
    canPromote: true,
    canViewTeam: true,
    canSetGoals: true,
  },
  coach: {
    canViewTeam: true,
    canAddNotes: true,
    canSetGoals: false,
  },
  rep: {
    canInputActivity: true,
    canViewProgress: true,
    canEditGoals: false,
  },
};

module.exports = userRoles;
