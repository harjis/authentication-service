import createServer from "./server";

const app = createServer();
app.listen(3000, () => {
  console.log("  App is running at http://localhost:%d in %s mode", 3000);
  console.log("  Press CTRL-C to stop\n");
});
