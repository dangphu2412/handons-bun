import figlet from "figlet";
import { sql } from "bun";

// https://bun.sh/docs/api/sql#database-environment-variables
await sql.connect();
console.log("Connected!");

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync("Bun!");
        return new Response(body);
    },
    routes: {
        "/api/status": new Response("OK"),
        // Dynamic routes
        "/users/:id": async req => {
            const user = await sql`SELECT * FROM users where users.id = ${req.params.id}`

            if (!user) {
                return Response.json({ msg: 'not found '});
            }

            return Response.json(user)
        },
    }
});

console.log(`Listening on http://localhost:${server.port} ...`);
