import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

app.get("/demo", async (s) => {
  const body = await s.req.json();
  const result = await s.env.AI.run("@cf/mistral/mistral-7b-instruct-v0.1", {
    messages: [
      {
        role: "user",
        content: body.text,
      },
    ],
  });
  return s.json({ message: "demo", result });
});

export default app;
