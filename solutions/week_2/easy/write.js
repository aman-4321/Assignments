const fs = require("fs");

let data = "hello this is written file";

fs.writeFile("writefile.txt", data, function (err, data) {
  if (err) {
    console.log("not valid");
  } else {
    console.log(data);
  }
});
