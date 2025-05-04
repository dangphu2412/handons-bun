import figlet from "figlet";
import { sql } from "bun";
import { Elysia } from 'elysia';
import {loggerPlugin} from "./logger/logger.plugin.ts";
import {authRoutes} from "./users/registration/registration.plugin.ts";

// https://bun.sh/docs/api/sql#database-environment-variables
sql.connect().then(() => {
    console.log("Connected!");
})

const app = new Elysia()
    .use(loggerPlugin)
    .use(authRoutes)
    .listen(3000);
//
// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {
//         const body = figlet.textSync("Bun!");
//         return new Response(body);
//     },
//     routes: {
//         "/api/status": new Response("OK"),
//         // Dynamic routes
//         "/users/:id": async req => {
//             const user = await sql`SELECT * FROM users where users.id = ${req.params.id}`
//
//             if (!user) {
//                 return Response.json({ msg: 'not found '});
//             }
//
//             return Response.json(user)
//         },
//     }
// });

console.log(`🚀 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
