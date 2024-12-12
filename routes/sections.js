import client from "../models/db.js";

export async function getSections(req) {
  try {
    const sections = await client.query("SELECT id, title, icon FROM sections");
    return new Response(JSON.stringify(sections), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching sections:", error);
    return new Response("Failed to fetch sections", { status: 500 });
  }
}
