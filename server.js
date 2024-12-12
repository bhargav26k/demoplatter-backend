import { serve } from "https://deno.land/std@0.170.0/http/server.ts";
import { getSections } from "./routes/sections.js";
import { getCredentials } from "./routes/credentials.js";
import { getAttachments } from "./routes/attachments.js";
import { getProjects } from "./routes/projects.js";

console.log("Server running on http://localhost:8000");

serve(async (req) => {
  const url = new URL(req.url);

  try {
    if (url.pathname === "/api/sections" && req.method === "GET") {
      return await getSections(req);
    }

    if (url.pathname.startsWith("/api/credentials/") && req.method === "GET") {
      const sectionId = url.pathname.split("/").pop();
      return await getCredentials(req, sectionId);
    }

    if (url.pathname.startsWith("/api/attachments/") && req.method === "GET") {
      const projectId = url.pathname.split("/").pop();
      return await getAttachments(req, projectId);
    }

    if (url.pathname === "/api/projects" && req.method === "GET") {
      return await getProjects(req);
    }

    return new Response("Not Found", { status: 404 });
  } catch (error) {
    console.error("Unhandled error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
