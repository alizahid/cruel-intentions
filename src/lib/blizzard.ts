import axios, { AxiosRequestConfig } from 'axios'
import kebabCase from 'lodash/kebabCase'
import sortBy from 'lodash/sortBy'

import {
  Guild,
  Member,
  Options,
  PlayableClass,
  PlayableRace,
  PlayableSpec,
  Region
} from '../types'
import { upstash } from './upstash'

export class Blizzard {
  private static token: string
  private static region: Region
  private static realm: string
  private static guild: string
  private static maxRank: number

  static async fetch(
    options: Options,
    maxRank: number
  ): Promise<{
    guild: Guild
    roster: Array<Member>
  }> {
    this.region = options.region
    this.realm = options.realm
    this.guild = options.guild
    this.maxRank = maxRank

    this.token = await this.fetchToken()

    const data = {
      guild: await this.fetchGuild(),
      roster: await this.fetchRoster()
    }

    return data
  }

  private static async fetchToken(): Promise<string> {
    const { data } = await axios.post(
      '/oauth/token',
      'grant_type=client_credentials',
      this.tokenOptions()
    )

    return data.access_token
  }

  private static async fetchGuild(): Promise<Guild> {
    const { data } = await axios.get<{
      id: number
      name: string
      faction: {
        name: string
      }
      realm: {
        name: string
      }
    }>(
      `/guild/${kebabCase(this.realm)}/${kebabCase(this.guild)}`,
      this.apiOptions('data', 'profile')
    )

    return {
      faction: data.faction.name,
      id: data.id,
      name: data.name,
      realm: data.realm.name,
      region: this.region
    }
  }

  private static async fetchRoster(): Promise<Array<Member>> {
    const {
      data: { members }
    } = await axios.get<{
      members: Array<{
        character: {
          name: string
        }
        rank: number
      }>
    }>(
      `/guild/${kebabCase(this.realm)}/${kebabCase(this.guild)}/roster`,
      this.apiOptions('data', 'profile')
    )

    const roster: Array<Member> = []

    for (const { character, rank } of members.filter(
      ({ rank }) => rank <= this.maxRank
    )) {
      const member = await this.fetchCharacter(character.name, rank)

      roster.push(member)
    }

    return sortBy(roster, ['rank', 'name'])
  }

  private static async fetchCharacter(
    name: string,
    rank: number
  ): Promise<Member> {
    const {
      data: { active_spec, character_class, id, race }
    } = await axios.get<{
      id: number
      name: string
      race: {
        id: number
      }
      character_class: {
        id: number
      }
      active_spec: {
        id: number
      }
    }>(
      `/character/${kebabCase(this.realm)}/${name.toLowerCase()}`,
      this.apiOptions('profile', 'profile')
    )

    const {
      data: { assets }
    } = await axios.get<{
      assets: Array<{
        key: string
        value: string
      }>
    }>(
      `/character/${kebabCase(
        this.realm
      )}/${name.toLowerCase()}/character-media`,
      this.apiOptions('profile', 'profile')
    )

    const data: Member = {
      class: await this.fetchClass(character_class.id),
      id,
      image: assets.find(({ key }) => key === 'inset')?.value ?? '',
      name,
      race: await this.fetchRace(race.id),
      rank,
      spec: await this.fetchSpec(active_spec.id)
    }

    return data
  }

  private static async fetchRace(id: number): Promise<PlayableRace> {
    const cached = await upstash.get<PlayableRace>(`race-${id}`)

    if (cached) {
      return cached
    }

    const {
      data: { name }
    } = await axios.get<{
      name: string
    }>(`/playable-race/${id}`, this.apiOptions('data', 'static'))

    const item: PlayableRace = {
      id,
      name
    }

    await upstash.set(`race-${id}`, item)

    return item
  }

  private static async fetchClass(id: number): Promise<PlayableClass> {
    const cached = await upstash.get<PlayableClass>(`class-${id}`)

    if (cached) {
      return cached
    }

    const {
      data: { name }
    } = await axios.get<{
      name: string
    }>(`/playable-class/${id}`, this.apiOptions('data', 'static'))

    const {
      data: {
        assets: [{ value }]
      }
    } = await axios.get<{
      assets: Array<{
        value: string
      }>
    }>(`/media/playable-class/${id}`, this.apiOptions('data', 'static'))

    const item: PlayableClass = {
      id,
      image: value,
      name
    }

    await upstash.set(`class-${id}`, item)

    return item
  }

  private static async fetchSpec(id: number): Promise<PlayableSpec> {
    const cached = await upstash.get<PlayableSpec>(`spec-${id}`)

    if (cached) {
      return cached
    }

    const {
      data: { name, role }
    } = await axios.get<{
      id: number
      name: string
      role: {
        name: string
      }
    }>(`/playable-specialization/${id}`, this.apiOptions('data', 'static'))

    const {
      data: {
        assets: [{ value }]
      }
    } = await axios.get<{
      assets: Array<{
        value: string
      }>
    }>(
      `/media/playable-specialization/${id}`,
      this.apiOptions('data', 'static')
    )

    const item: PlayableSpec = {
      id,
      image: value,
      name,
      role: role.name
    }

    await upstash.set(`spec-${id}`, item)

    return item
  }

  private static tokenOptions(): AxiosRequestConfig {
    return {
      auth: {
        password: process.env.BLIZZARD_CLIENT_SECRET,
        username: process.env.BLIZZARD_CLIENT_ID
      },
      baseURL: `https://${this.region}.battle.net`
    }
  }

  private static apiOptions(
    api: 'data' | 'profile',
    namespace: 'static' | 'profile'
  ): AxiosRequestConfig {
    return {
      baseURL: `https://${this.region}.api.blizzard.com/${api}/wow`,
      params: {
        access_token: this.token,
        locale: 'en_US',
        namespace: `${namespace}-${this.region}`
      }
    }
  }
}
