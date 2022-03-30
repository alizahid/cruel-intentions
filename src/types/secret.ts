export type Character = {
  name: string
  image: string
  ilvl: number
  legendaries: Array<{
    ilvl: number
    slot: string
  }>
  tier: Array<{
    ilvl: number
    slot: string
  }>
}
