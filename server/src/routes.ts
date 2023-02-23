import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "./lib/prisma";
import { authenticate } from "./plugins/authenticate";

export async function appRoutes(app: FastifyInstance) {
  app.get('/points', async () => {
    const discardPoint = prisma.discardPoint.findMany()
  
    return discardPoint;
  })
  
  app.get('/user', async () => {
    const user = prisma.user.findMany();
  
    return user;
  })
  
  app.get('/me', {
    onRequest: [authenticate]
  }, async (request) => {
    return { user: request.user };
  });

  app.post('/users', async (request) => {
    // const createUserBody = z.object({
    //   acess_token: z.string(),
    // })
  
    // const { acess_token } = createUserBody.parse(request.body)
  
    // const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${acess_token}`,
    //   }
    // })

    // const userData = await userResponse.json()

    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    })

    const userInfo = userInfoSchema.parse(request.body)

    let user = await prisma.user.findUnique({
      where: {
        googleId: userInfo.id,
      }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          googleId: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          avatarUrl: userInfo.picture,
        }
      })
    }

    // const token =  app.jwt.sign({
    //   name: user.name,
    //   avatarUrl: user.avatarUrl,
    // }, {
    //   sub: user.id,
    //   expiresIn: '7 days'
    // })

    // return { token }
  })  

  app.post('/create-point', async (request, reply) => {
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

