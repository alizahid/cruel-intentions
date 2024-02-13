import { compact } from 'lodash'

import { type Region } from '~/types'

export const REFETCH_SECRET = process.env.REFETCH_SECRET

export const FACTION = process.env.FACTION ?? 'Horde'
export const GUILD = process.env.GUILD ?? 'Cruel Intentions'
export const LEADER_RANK = Number(process.env.LEADER_RANK ?? 1)
export const MAX_RANK = Number(process.env.MAX_RANK ?? 2)
export const REALM = process.env.REALM ?? 'Twisting Nether'
export const REGION = (process.env.REGION ?? 'EU') as Region
export const RECRUITMENT = compact((process.env.RECRUITMENT ?? '').split(','))
