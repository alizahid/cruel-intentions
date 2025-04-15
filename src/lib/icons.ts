export function getBossIcon(slug: string) {
  const fixed = slug.startsWith('awakened') ? slug.slice(9) : slug

  const icon =
    bossIcons[fixed] ?? 'achievement_raid_revendrethraid_siredenathrius'

  return `https://cdn.raiderio.net/images/wow/icons/large/${icon}.jpg`
}

const bossIcons: Record<string, string> = {
  'assault-of-the-zaqali': 'inv_achievement_raiddragon_zaqaliassault',
  'broodkeeper-diurna': 'achievement_raidprimalist_diurna',
  'broodtwister-ovinax': 'inv_achievement_raidnerubian_swarmmother',
  'cauldron-of-carnage': 'inv_11_arenaboss_colossalclash',
  'chrome-king-gallywix': 'inv_111_raid_achievement_chromekinggallywix',
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
  'mugzee-heads-of-security': 'inv_111_raid_achievement_mugzeeheadsofsecurity',
  'nexus-princess-kyveza': 'inv_achievement_raidnerubian_etherealassasin',
  'nymue-weaver-of-the-cycle': 'inv_achievement_raidemeralddream_dreamweaver',
  'onearmed-bandit': 'inv_111_raid_achievement_onearmedbandit',
  'queen-ansurek': 'inv_achievement_raidnerubian_queenansurek',
  rashanan: 'inv_achievement_raidnerubian_flyingnerubianevolved',
  'rashok-the-elder': 'inv_achievement_raiddragon_rashok',
  'raszageth-the-stormeater': 'achievement_raidprimalist_raszageth',
  'rik-reverb': 'inv_111_raid_achievement_rikreverb',
  'scalecommander-sarkareth': 'inv_achievement_raiddragon_sarkareth',
  'sennarth-the-cold-breath': 'achievement_raidprimalist_sennarth',
  sikran: 'inv_achievement_raidnerubian_nerubianevolved',
  smolderon: 'inv_achievement_raidemeralddream_smolderon',
  'sprocketmonger-lockenstock':
    'inv_111_raid_achievement_sprocketmongerlocknstock',
  'stix-bunkjunker': 'inv_111_raid_achievement_stixbunkjunker',
  terros: 'achievement_raidprimalist_terros',
  'the-amalgamation-chamber': 'inv_achievement_raiddragon_amalgamationchamber',
  'the-bloodbound-horror': 'inv_achievement_raidnerubian_blackblood',
  'the-forgotten-experiments':
    'inv_achievement_raiddragon_forgottenexperiments',
  'the-primal-council': 'achievement_raidprimalist_council',
  'the-silken-court': 'inv_achievement_raidnerubian_council',
  'the-vigilant-steward-zskarn': 'inv_achievement_raiddragon_zskarn',
  'tindral-sageswift-seer-of-the-flame':
    'inv_achievement_raidemeralddream_druidoftheflame',
  'ulgrax-the-devourer': 'inv_achievement_raidnerubian_nerubianhulk',
  'vexie-and-the-geargrinders':
    'inv_111_raid_achievement_vexieandthegeargrinders',
  volcoross: 'inv_achievement_raidemeralddream_lavaserpent',
}
