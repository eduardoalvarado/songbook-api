import { PingResolver } from './ping'
import { SongResolver } from './SongResolver'

const Resolvers = [
  PingResolver,
  SongResolver
] as const

export default Resolvers
