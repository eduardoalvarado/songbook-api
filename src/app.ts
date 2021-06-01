import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildResolversSchema } from './resolvers'

export async function initServer() {
  const app = express()
  const server = new ApolloServer({
    schema: await buildResolversSchema(),
    context: (
      {req, res}
    ) => ({req, res})
  })
  server.applyMiddleware({app, path: '/api'})
  return app
}

