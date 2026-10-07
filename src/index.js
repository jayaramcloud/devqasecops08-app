// Your first Cloudflare Worker web app.
// Edit this file (or ask Hermes to), commit, push -> your site updates automatically.

const page = (user) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${user}'s app</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 640px; margin: 4rem auto; padding: 0 1rem; line-height: 1.5; }
    h1 { color: #f6821f; }
    code { background: #f2f2f2; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Hello from ${user}!</h1>
  <p>This page is served by a Cloudflare Worker, deployed from GitHub.</p>
  <p>Next step: open <code>src/index.js</code>, change this text, and push.</p>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/hello") {
      return Response.json({ message: "Hello from the API", time: new Date().toISOString() });
    }
    return new Response(page("devqasecops08"), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
