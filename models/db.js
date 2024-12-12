import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts"; 

const client = await new Client().connect({
  hostname: "othersapplications.c6kw7hvdb67q.ap-south-1.rds.amazonaws.com", // Replace with your live server's IP or hostname
  username: "external_admin",              // Replace with your MySQL username
  password: "Success#2024_Dexpert",                   // Replace with your MySQL password
  db: "demoplatter",                           // Replace with your live database name
});

export default client;

