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
    const createUserBody = z.object({
      acess_token: z.string(),
    })
  
    const { acess_token } = createUserBody.parse(request.body)
  
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${acess_token}`,
      }
    })

    const userData = await userResponse.json()

    const userInfoSchema = z.object({
      id: z.string(),
      email: z.string().email(),
      name: z.string(),
      picture: z.string().url(),
    })

    const userInfo = userInfoSchema.parse(userData)

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

    const token =  app.jwt.sign({
      name: user.name,
      avatarUrl: user.avatarUrl,
    }, {
      sub: user.id,
      expiresIn: '7 days'
    })

    return { token }
  })  

  app.post('/create-point', async (request, reply) => {
    const createPointBody = z.object({
      discardObject: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      address: z.string(),
      city: z.string(),
      userId: z.string().uuid(),
    })

    const pointInfo = createPointBody.parse(request.body);

    let point = await prisma.discardPoint.findUnique({
      where: {
        full_localization: {
          localization_lat: pointInfo.latitude,
          localization_long: pointInfo.longitude,
        }
      }
    })

    if (!point) {
      point = await prisma.discardPoint.create({
        data: {
          userId: pointInfo.userId,
          discardObject: pointInfo.discardObject,
          address: pointInfo.address,
          city: pointInfo.city,
          localization_lat: pointInfo.latitude,
          localization_long: pointInfo.longitude,
        }
      })
    }

  })
}

