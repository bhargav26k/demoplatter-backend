import client from "../models/db.js";

export async function getAttachments(req, projectId) {
  try {
    const attachments = await client.query(
      `
      SELECT
        a.id,
        a.attachment_url AS url,
        at.name AS attachment_type_name,
        at.icon AS attachment_type_icon
      FROM
        attachments a
      LEFT JOIN
        attachment_types at
      ON
        a.attachment_type_id = at.id
      WHERE
        a.project_id = ?
      `,
      [projectId]
    );

    return new Response(JSON.stringify(attachments), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching attachments:", error);
    return new Response("Failed to fetch attachments", { status: 500 });
  }
}
