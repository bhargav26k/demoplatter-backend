import client from "../models/db.js";

export async function getProjects(req) {
  try {
    const projects = await client.query(`
      SELECT id, name FROM projects
    `);

    return new Response(JSON.stringify(projects), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response("Failed to fetch projects", { status: 500 });
  }
}
