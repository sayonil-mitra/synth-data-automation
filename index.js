import e from "express";
import router from "./routers/synth-data/router.js";

const app = e();
const PORT = 3000;

app.use(router);

app.get("/test", (req, res) => {
  res.end("Node JS service working fine!");
});

app.listen(PORT, () => {
  console.log("Node JS service started");
});
