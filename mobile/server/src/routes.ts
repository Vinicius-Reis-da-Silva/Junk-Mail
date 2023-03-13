import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
  app.get('/points', async () => {
    const discardPoint = prisma.discardPoint.findMany()
  
    return discardPoint;
  })
  
  app.get('/users', async () => {
    const user = prisma.user.findMany();
  
    return user;
  })

  app.post('/users/create-point', async (request, reply) => {
    // Data Validation
    const createPointBody = z.object({
      userId: z.string().uuid(),
      discardObject: z.string(),
      street: z.string(),
      city: z.string(),
      latitude: z.number(),
      longitude: z.number(),
    })

    const pointInfo = createPointBody.parse(request.body);

    // Data Verification
    let point = await prisma.discardPoint.findUnique({
      where: {
        coord_latitude_coord_longitude: {
          coord_latitude: pointInfo.latitude,
          coord_longitude: pointInfo.longitude,
        }
      }
    })

    // create new point
    if (!point) {
      point = await prisma.discardPoint.create({
        data: {
          userId: pointInfo.userId,
          discard_object: pointInfo.discardObject,
          address_city: pointInfo.city,
          address_street: pointInfo.street,
          coord_latitude: pointInfo.latitude,
          coord_longitude: pointInfo.longitude
        }
      })
    } else {
      return reply.code(200).send('ERROR: Ponto já existente!');
    }
  })
}

