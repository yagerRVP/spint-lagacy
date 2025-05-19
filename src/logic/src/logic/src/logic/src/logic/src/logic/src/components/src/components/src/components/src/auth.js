// auth.js
export function hasAccess(userRole, permission) {
  return userRole?[permission] === true;
}
