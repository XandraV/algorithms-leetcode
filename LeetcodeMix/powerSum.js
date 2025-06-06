function powerSum(X, N, exponentIncrement = 1) {
  let exponentVal = X - Math.pow(exponentIncrement, N);
  //   console.log(`${X}-${exponentIncrement}^${N}`);
  //   if (exponentVal === 0) {
  //     console.log(exponentVal);
  //   }

  if (exponentVal < 0) return 0;
  else if (exponentVal === 0) return 1;
  else
    return (
      powerSum(exponentVal, N, exponentIncrement + 1) +
      powerSum(X, N, exponentIncrement + 1)
    );
}

console.log(powerSum(100, 2));

//------------------------------------------------------------------
function returnNumbers(numbersList, targetSum, power, numberOfWaysList) {
  const lastNum = numbersList.slice(-1)[0];
  const sqrtOfSum = Math.sqrt(targetSum);

  for (let i = lastNum; i <= sqrtOfSum; i++) {
    const currNumList = [...numbersList];
    const currSum = [...currNumList, i + 1].reduce((acc, curr) => {
      const currToN = Math.pow(curr, power);
      return acc + currToN;
    }, 0);

    if (currSum === targetSum) {
      numberOfWaysList.push(true);
    }
    if (currSum < targetSum) {
      returnNumbers(
        [...currNumList, i + 1],
        targetSum,
        power,
        numberOfWaysList
      );
    }
  }
}

function powerSum(X, N) {
  if (X === 0) {
    return 0;
  }

  const sqrtOfSum = Math.sqrt(X);
  const numberOfWaysList = [];

  for (let i = 1; i <= sqrtOfSum; i++) {
    if (Math.pow(i, N) === X) {
      numberOfWaysList.push(true);
    } else {
      returnNumbers([i], X, N, numberOfWaysList);
    }
  }
  return numberOfWaysList.length;
}

console.log(powerSum(10, 2));
