import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import Resolvers from './resolvers'
import {buildSchema, NonEmptyArray} from 'type-graphql'

export async function initServer() {
  const app = express()
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: Resolvers as NonEmptyArray<Function>
    }),
    context: (
      {req, res}
    ) => ({req, res})
  })
  server.applyMiddleware({app, path: '/api'})
  return app
}

