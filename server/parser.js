//seeding

var fs = require("fs");
fs.readFile("mockup.json", "utf8", function (err, data) {
  if (err) throw err;
  var json = JSON.parse(data);
  var st = new Set();
  for (var i = 0; i < json.length; i++) {
    // initialseeding
    // let discount = Math.floor(Math.random() * 100);
    // json[i].discount = discount;
    // json[i].sp = (json[i].mrp * (100 - discount)) / 100;
    // json[i].sp = Math.round(json[i].sp * 100) / 100;
    //brand set
    // st.add(json[i].brand);
  }
  //   console.log(json);
  fs.writeFile("brands.json", JSON.stringify(st), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
