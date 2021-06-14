import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { InputSong } from '../types/input-song'
import { Song, SongModel } from '../entity/Song'

@Resolver()
export class SongResolver {

  @Query(() => [Song])
  async getSongs() {
    return SongModel.find();
  }

  @Query(() => Song)
  async getSongById(
    @Arg('id', () => String) id: string
  ) {
    return SongModel.findById(id)
  }

  @Query(() =>[Song])
  async getSongByAttr(
    @Arg('attr', () => String) attr: string
  ) {
    const searchQuery = {
      $or: [
        {title: { $regex: attr, $options: 'i' }},
        {author: { $regex: attr, $options: 'i' }},
        {gender: { $regex: attr, $options: 'i' }}
      ]
    }
    return SongModel.find(searchQuery).lean()
  }

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
