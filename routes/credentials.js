import client from "../models/db.js";

export async function getCredentials(req, sectionId) {
  try {
    const credentials = await client.query(
      `
      SELECT
        c.id,
        c.project_id,
        c.project_name,
        c.category,
        c.url,
        c.username,
        c.password,
        c.notes
      FROM
        credentials c
      WHERE
        c.section_id = ?
      `,
      [sectionId]
    );

    return new Response(JSON.stringify(credentials), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching credentials:", error);
    return new Response("Failed to fetch credentials", { status: 500 });
  }
}
