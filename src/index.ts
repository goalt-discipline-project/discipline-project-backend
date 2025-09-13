import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import FizzBuzzRouter from './fizz-buzz/fizz-buzz.router.ts';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.route('/fizz-buzz', FizzBuzzRouter);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

export default app;
