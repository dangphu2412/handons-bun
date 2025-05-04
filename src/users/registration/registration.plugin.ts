import { Elysia } from 'elysia';
import { t } from 'elysia';
import {jwt} from "@elysiajs/jwt";

export const authRoutes = new Elysia({ prefix: '/auth' })
    .use(jwt({
        name: 'jwt',
        secret: 'super-secret-key-123', // swap in env var for real use
        exp: '1h',
    }))
    .post('/login', async ({ body, jwt, set }) => {
        const { username, password } = body;

        if (username === 'admin' && password === 'password') {
            const token = await jwt.sign({ username });

            return { token };
        }

        set.status = 401;
        return { error: 'Invalid creds' };
    }, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .get('/me', async ({ jwt, set, headers }) => {
        const token = headers.authorization?.replace('Bearer ', '');

        if (!token) {
            set.status = 401;
            return { error: 'Missing token' };
        }

        const user = await jwt.verify(token);
        if (!user) {
            set.status = 403;
            return { error: 'Invalid token' };
        }

        return { user };
    });
