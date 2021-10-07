const express = require("express");
const path = require("path");

const app = express();

app.use("/js", express.static(path.resolve(__dirname, "js")));
app.use("/css", express.static(path.resolve(__dirname, "css")));


app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 9292, () => console.log("Server running..."));