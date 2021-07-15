import { createServer } from "http";;
import { parse } from "querystring";

const server = createServer((req, res) => {
  switch (req.url) {
    case "/status": {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write(
        JSON.stringify({
          status: "ok",
          service: {
            name: "My Service",
            version: "1.0.0",
          },
        })
      );
      res.end();
    }

    case "/authenticate": {
      let data = "";

      req.on("data", (chunk) => {
        data += chunk;
      });

      req.on("end", () => {
        const params = parse(data);
        res.end();
      });
      break;
    }

    default: {
      res.writeHead(404, "Service not found");
      res.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on port http://${HOSTNAME}:${PORT}.🔥`);
});
