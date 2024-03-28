const fs = require("fs");

fs.readFile("readfile.txt", "utf8", function (err, data) {
  for (let i = 0; i < 1000000; i++) {}
  if (err) {
    console.error("error reading the file: ", err);
  } else {
    console.log(data);
  }
});
