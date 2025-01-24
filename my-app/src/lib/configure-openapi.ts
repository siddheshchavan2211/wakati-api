import type { OpenAPIHono } from "@hono/zod-openapi";
import packageJSON from "../../package.json";
import { apiReference } from "@scalar/hono-api-reference";

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "My API",
    },
  });

  app.get(
    "/reference",

    apiReference({
      theme: "saturn",
      spec: {
        url: "/doc",
      },
    })
  );
}
