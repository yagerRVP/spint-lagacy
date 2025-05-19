const promotionRules = require('./promotionRules');

function checkPromotion(repData) {
  const results = {};

  Object.keys(promotionRules).forEach(rank => {
    const rules = promotionRules[rank];
    let qualifies = true;

    Object.keys(rules).forEach(key => {
      if ((repData[key] || 0) < rules[key]) {
        qualifies = false;
      }
    });

    results[rank] = qualifies;
  });

  return results;
}

module.exports = checkPromotion;
