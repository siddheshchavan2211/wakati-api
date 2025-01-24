import { pinoLogger } from "hono-pino";

function logger() {
  return pinoLogger({
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
export default logger;
