const express = require("express");
const { join } = require("path");

const app = express();
app.use(express.static("dist"));

//It is sending html from dist so that on reload page
//Can be done using historyApiFallback = true also if using webpack devserver
//But for server side rendering

app.get("*", function (req, res) {
  res.sendFile(join(__dirname, "./dist/index.html"), function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`Listening to port ${process.env.PORT || 4000}`)
);
