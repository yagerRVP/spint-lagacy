function buildTree(users, currentUserId) {
  const map = {};
  const tree = [];

  // Create map of users
  users.forEach(user => {
    map[user.id] = { ...user, children: [] };
  });

  // Build tree structure
  users.forEach(user => {
    if (user.uplineId && map[user.uplineId]) {
      map[user.uplineId].children.push(map[user.id]);
    } else {
      tree.push(map[user.id]);
    }
  });

  // Optionally return only the current user's team tree
  if (currentUserId) {
    return map[currentUserId] || null;
  }

  return tree;
}

module.exports = buildTree;
