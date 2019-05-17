import express from "express";
import next from "next";
import bodyParser from "body-parser";
import routes from "./server/routes";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/telecomms", routes);

app
  .prepare()
  .then(() => {
    server.get("*", (req, res) => {
        return handle(req, res);
      });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

export default server;
