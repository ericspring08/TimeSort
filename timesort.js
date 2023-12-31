const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

const threads = new Set();

let array = [2, 4, 1, 5, 2, 5, 6];

function sortArray(array) {
  if (!isMainThread) {
    setTimeout(() => {
      console.log(workerData);
    }, 1000 * workerData);
    parentPort.postMessage(workerData);
  } else {
    for (const element of array) {
      threads.add(new Worker(__filename, { workerData: element }));
    }
    for (let worker of threads) {
      worker.on("error", (err) => {
        throw err;
      });
      worker.on("exit", () => {
        threads.delete(worker);
      });
    }
  }
}

sortArray(array);
