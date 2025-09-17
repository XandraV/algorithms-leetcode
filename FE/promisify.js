function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      // this creates a “bridge” callback
      // in order to decide whether to resolve or reject
      // Without this, the promise would never settle,
      // because the resolve/reject functions would never be called.
      const bridgeCallback = (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      };
      // call the function we wanted to promisify with callback we created above
      func.call(this, ...args, bridgeCallback);
    });
  };
}

// example
// Fake async function with callback(err, result)
function getData(x, callback) {
  setTimeout(() => {
    if (x < 0) callback(new Error("Negative!"));
    else callback(null, x * 2);
  }, 500);
}

const getDataPromise = promisify(getData);
// .then() runs after our bridge callback resolves the promise, resolve(result) triggers .then()
getDataPromise(5)
  .then((result) => console.log(result)) // 10
  .catch((err) => console.error(err));

getDataPromise(-5)
  .then((result) => console.log(result))
  .catch((err) => console.error(err)); // Negative! + error object

// or simply
//getDataPromise(5).then(console.log).catch(console.error);
