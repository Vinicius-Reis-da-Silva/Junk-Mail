import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { appRoutes } from "./routes";
import { authRoutes } from "./routes/auth";

async function bootstrap() {
  const app = Fastify();
  
  await app.register(cors);

  await app.register(jwt, {
    secret: 'junkmail',
  });

  await app.register(appRoutes);
  await app.register(authRoutes);
  
  app.listen({
    port: 3333,
    host: '0.0.0.0'
  }).then(() => {
    console.log('HTTP Server running...');
  });
}

bootstrap();