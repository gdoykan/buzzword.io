const express = require("express");
const axios = require("axios");
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.get("/", function(req, res) {
  res.render("index", {
    data: "Impress family, friend, co-workers with absolutely meaningless words"
  });
});

app.get("/buzzwords", async (req, res) => {
  try {
    let resp = await axios
      .get("https://corporatebs-generator.sameerkumar.website/")
      .then(result => {
        res.render("index", { data: result.data.phrase });
        result.data;
      });
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, function() {
  console.log("listening on 3000");
});
