import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { InputSong } from '../types/input-song'
import { Song, SongModel } from '../entity/Song'

@Resolver()
export class SongResolver {
  @Mutation(returns => Song)
  async createSong(
    @Arg('inputSong') inputSong: InputSong
  ): Promise<Song> {
    const song = new SongModel({
      ...inputSong
    } as Song)
    return await song.save()
  }
}
