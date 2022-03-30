import { Region } from '../types'

export const REFETCH_SECRET = process.env.REFETCH_SECRET

export const REGION = process.env.REGION as Region
export const REALM = process.env.REALM
export const GUILD = process.env.GUILD
export const MAX_RANK = Number(process.env.MAX_RANK ?? 2)
