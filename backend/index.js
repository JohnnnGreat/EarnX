const app = require("express")();

//Middlewares

app.use(express.json());

const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json({ message: "working perfectly" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
