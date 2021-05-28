const express = require("express");
const exhbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.static("public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
