import { PingResolver } from './ping'
import { SongResolver } from './SongResolver'
import { buildSchema } from 'type-graphql'

export async function buildResolversSchema() {
  return await buildSchema({
    resolvers: [
      PingResolver,
      SongResolver
    ]
  })
}

