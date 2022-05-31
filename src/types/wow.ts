export type GuildDetails = {
  guildDetails: {
    guild: {
      id: number
      name: string
    }
  }
  raidProgress: Array<{
    raid: string
    aotc: string | null
    cuttingEdge: string | null
    encountersDefeated: Record<
      'lfr' | 'normal' | 'heroic' | 'mythic',
      Array<{
        slug: string
      }>
    >
  }>
}
