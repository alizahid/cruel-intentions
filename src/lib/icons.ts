export function getBossIcon(slug: string) {
  const icon =
    bossIcons[slug] ?? 'achievement_raid_revendrethraid_siredenathrius'

  return `https://cdn.raiderio.net/images/wow/icons/large/${icon}.jpg`
}

const bossIcons: Record<string, string> = {
  'assault-of-the-zaqali': 'inv_achievement_raiddragon_zaqaliassault',
  'broodkeeper-diurna': 'achievement_raidprimalist_diurna',
  'council-of-dreams': 'inv_achievement_raidemeralddream_dreamcouncil',
  'dathea-ascended': 'achievement_raidprimalist_windelemental',
  'echo-of-neltharion': 'inv_achievement_raiddragon_neltharion',
  eranog: 'achievement_raidprimalist_eranog',
  'fyrakk-the-blazing': 'inv_achievement_raidemeralddream_fyrakk',
  gnarlroot: 'inv_achievement_raidemeralddream_fieryancient',
  'igira-the-cruel': 'inv_achievement_raidemeralddream_igirathecruel',
  'kazzara-the-hellforged': 'inv_achievement_raiddragon_kazzara',
  'kurog-grimtotem': 'achievement_raidprimalist_kurog',
  'larodar-keeper-of-the-flame':
    'inv_achievement_raidemeralddream_keeperoftheflames',
  magmorax: 'inv_achievement_raiddragon_magmorax',
  'nymue-weaver-of-the-cycle': 'inv_achievement_raidemeralddream_dreamweaver',
  'rashok-the-elder': 'inv_achievement_raiddragon_rashok',
  'raszageth-the-stormeater': 'achievement_raidprimalist_raszageth',
  'scalecommander-sarkareth': 'inv_achievement_raiddragon_sarkareth',
  'sennarth-the-cold-breath': 'achievement_raidprimalist_sennarth',
  smolderon: 'inv_achievement_raidemeralddream_smolderon',
  terros: 'achievement_raidprimalist_terros',
  'the-amalgamation-chamber': 'inv_achievement_raiddragon_amalgamationchamber',
  'the-forgotten-experiments':
    'inv_achievement_raiddragon_forgottenexperiments',
  'the-primal-council': 'achievement_raidprimalist_council',
  'the-vigilant-steward-zskarn': 'inv_achievement_raiddragon_zskarn',
  'tindral-sageswift-seer-of-the-flame':
    'inv_achievement_raidemeralddream_druidoftheflame',
  volcoross: 'inv_achievement_raidemeralddream_lavaserpent',
}
