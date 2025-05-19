// aiAssistant.js
export function generateAdvice(rep) {
  if (rep.level === 'Senior Rep') {
    return 'You’re on your way! Focus on consistent apps.';
  }
  if (rep.level === 'District') {
    return 'Train a recruit this week and push for promotion.';
  }
  if (rep.level === 'Division') {
    return 'Multiply your momentum — host a team workshop.';
  }
  if (rep.level === 'RVP') {
    return 'You are the example. Build leaders. Drive depth.';
  }
  return 'Let’s get you started with action today.';
}
