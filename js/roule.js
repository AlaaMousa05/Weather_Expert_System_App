
const rules = [
  { conditions: { today: "rain" }, result: { tomorrow: "rain" }, cf: 0.5 },
  { conditions: { today: "dry" }, result: { tomorrow: "dry" }, cf: 0.5 },
  { conditions: { today: "rain", rainfall: "low" }, result: { tomorrow: "dry" }, cf: 0.6 },
  { conditions: { today: "rain", rainfall: "low", temperature: "cold" }, result: { tomorrow: "dry" }, cf: 0.7 },
  { conditions: { today: "dry", temperature: "warm" }, result: { tomorrow: "rain" }, cf: 0.65 },
  { conditions: { today: "dry", temperature: "warm", sky: "overcast" }, result: { tomorrow: "rain" }, cf: 0.55 }
];
function combineCF(cf1, cf2) {
  if (cf1 > 0 && cf2 > 0) {
    return cf1 + cf2 * (1 - cf1);
  } else if (cf1 < 0 && cf2 < 0) {
    return cf1 + cf2 * (1 + cf1);
  } else {
    return (cf1 + cf2) / (1 - Math.min(Math.abs(cf1), Math.abs(cf2)));
  }
}


function Expert(fact) {
  const predictionScores = {};

  for (const rule of rules) {
    let match = true;

    for (const key in rule.conditions) {
      if (rule.conditions[key] !== fact[key]) {
        match = false;
        break;
      }
    }

    if (match) {
      const cfValues = Object.keys(rule.conditions).map((key) => fact.cf[key] ?? 0);
      const minCF = Math.min(...cfValues);

      const totalCF = minCF * rule.cf;
      const resultKey = Object.values(rule.result)[0];

      if (predictionScores[resultKey] !== undefined) {
        predictionScores[resultKey] = combineCF(predictionScores[resultKey], totalCF);
      } else {
        predictionScores[resultKey] = totalCF;
      }

      console.log(`Rule matched: ${JSON.stringify(rule)} | Result: ${resultKey} | CF: ${totalCF.toFixed(2)}`);
    }
  }

  if (Object.keys(predictionScores).length === 0) {
    console.log("⚠️ No matching rules found.");
    return null;
  }

  let finalPrediction = null;
  let highestCF = -Infinity;

  for (const result in predictionScores) {
    if (predictionScores[result] > highestCF) {
      highestCF = predictionScores[result];
      finalPrediction = result;
    }
  }

 
  let expression = "";
  if (highestCF > 0) {
    expression = ` is likely to be ${finalPrediction} `;
  } else if (highestCF < 0) {
    expression = `is Unlikely to be ${finalPrediction} `;
  } else {
    expression = ` Uncertain about tomorrow's weather`;
  }

  console.log(` Final Prediction: ${expression}`);

  return { prediction: finalPrediction, cf: highestCF, expression };
}
