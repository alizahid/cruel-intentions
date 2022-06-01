import { Region } from '../types'

export const REFETCH_SECRET = process.env.REFETCH_SECRET

export const FACTION = process.env.FACTION
export const GUILD = process.env.GUILD
export const LEADER_RANK = Number(process.env.LEADER_RANK ?? 1)
export const MAX_RANK = Number(process.env.MAX_RANK ?? 2)
export const REALM = process.env.REALM
export const REGION = process.env.REGION as Region
export const RECRUITMENT = (process.env.RECRUITMENT ?? '').split(',')
