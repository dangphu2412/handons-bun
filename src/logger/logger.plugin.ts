import {Elysia} from "elysia";

export const loggerPlugin = () =>
    new Elysia().onRequest(({ request }) => {
        console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
    });
