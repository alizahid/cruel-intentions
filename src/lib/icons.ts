export function getBossIcon(slug: string) {
  const fixed = slug.startsWith('awakened') ? slug.slice(9) : slug

  const icon = bosses[fixed] ?? 'achievement_raid_revendrethraid_siredenathrius'

  return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`
}

const bosses: Record<string, string> = {
  'assault-of-the-zaqali': 'inv_achievement_raiddragon_zaqaliassault',
  'beloren-child-of-alar': 'inv_120_raid_marchonqueldanas_lightvoidphoenix',
  'broodkeeper-diurna': 'achievement_raidprimalist_diurna',
  'broodtwister-ovinax': 'inv_achievement_raidnerubian_swarmmother',
  'cauldron-of-carnage': 'inv_11_arenaboss_colossalclash',
  'chimaerus-the-undreamt-god': 'inv_120_raid_dreamwell_malformedmanifestation',
  'chrome-king-gallywix': 'inv_111_raid_achievement_chromekinggallywix',
  'council-of-dreams': 'inv_achievement_raidemeralddream_dreamcouncil',
  'crown-of-the-cosmos': 'inv_120_raid_voidspire_alleria',
  'dathea-ascended': 'achievement_raidprimalist_windelemental',
  'echo-of-neltharion': 'inv_achievement_raiddragon_neltharion',
  eranog: 'achievement_raidprimalist_eranog',
  'fallenking-salhadaar': 'inv_120_raid_voidspire_salhadaar',
  'fyrakk-the-blazing': 'inv_achievement_raidemeralddream_fyrakk',
  gnarlroot: 'inv_achievement_raidemeralddream_fieryancient',
  'igira-the-cruel': 'inv_achievement_raidemeralddream_igirathecruel',
  'imperator-averzian': 'inv_120_raid_voidspire_hostgeneral',
  'kazzara-the-hellforged': 'inv_achievement_raiddragon_kazzara',
  'kurog-grimtotem': 'achievement_raidprimalist_kurog',
  'larodar-keeper-of-the-flame':
    'inv_achievement_raidemeralddream_keeperoftheflames',
  'lightblinded-vanguard': 'inv_120_raid_voidspire_paladintrio',
  magmorax: 'inv_achievement_raiddragon_magmorax',
  'midnight-falls': 'inv_120_raid_marchonqueldanas_lura',
  'mugzee-heads-of-security': 'inv_111_raid_achievement_mugzeeheadsofsecurity',
  'nexus-princess-kyveza': 'inv_achievement_raidnerubian_etherealassasin',
  'nymue-weaver-of-the-cycle': 'inv_achievement_raidemeralddream_dreamweaver',
  'onearmed-bandit': 'inv_111_raid_achievement_onearmedbandit',
  'queen-ansurek': 'inv_achievement_raidnerubian_queenansurek',
  rashanan: 'inv_achievement_raidnerubian_flyingnerubianevolved',
  'rashok-the-elder': 'inv_achievement_raiddragon_rashok',
  'raszageth-the-stormeater': 'achievement_raidprimalist_raszageth',
  'rik-reverb': 'inv_111_raid_achievement_rikreverb',
  rotmire: 'inv_1207_achievement_raid_fungariangiant_fungalgiant',
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
  'vaelgor-ezzorak': 'inv_120_raid_voidspire_dragonduo',
  'vexie-and-the-geargrinders':
    'inv_111_raid_achievement_vexieandthegeargrinders',
  volcoross: 'inv_achievement_raidemeralddream_lavaserpent',
  vorasius: 'inv_120_raid_voidspire_kaiju',
}
