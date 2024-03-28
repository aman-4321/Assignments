let count = 0;

function logCount() {
  console.log(++count);
  setTimeout(logCount, 1000);
}

logCount();
