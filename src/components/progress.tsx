import { Flex, Grid, Heading, Section, Text, Tooltip } from '@radix-ui/themes'
import { upperFirst } from 'lodash'
import Image from 'next/image'
import type { Expansion, Progress } from '~/types/wow'
import { Icon } from './icon'

interface Props {
  expansions: Expansion[]
  progress: Progress[]
}

export function ProgressCard({ expansions, progress }: Props) {
  return (
    <Section id="progress" size="3">
      <Flex direction="column" gap="9">
        <Heading align="center" as="h2" color="mint" size="8">
          Progression
        </Heading>

        {expansions.map((expansion) => (
          <Flex direction="column" gap="9" key={expansion.id}>
            <Heading align="center" as="h3" color="amber" size="7">
              {expansion.name}
            </Heading>

            <Grid
              columns={{
                md: '2',
              }}
              gap="9"
            >
              {expansion.raids.map((raid) => (
                <Flex direction="column" gap="6" key={raid.slug}>
                  <Heading align="center" as="h4" color="mint">
                    {raid.name}
                  </Heading>

                  <Flex direction="column" gap="3">
                    {raid.bosses.map((boss) => {
                      const data = progress.find(
                        (item) => item.boss === boss.slug
                      )

                      return (
                        <Flex align="center" gap="3" key={boss.slug}>
                          <Image
                            alt={boss.name}
                            className="rounded bg-(--accent-3)"
                            height={32}
                            src={`https://wow.zamimg.com/images/wow/icons/large/${icons[boss.slug] ?? 'achievement_raid_revendrethraid_siredenathrius'}.jpg`}
                            unoptimized
                            width={32}
                          />

                          <Text className="flex-1" weight="medium">
                            {boss.name}
                          </Text>

                          <Flex gap="3">
                            {(['normal', 'heroic', 'mythic'] as const).map(
                              (difficulty) => (
                                <Tooltip
                                  content={upperFirst(difficulty)}
                                  key={difficulty}
                                >
                                  <Icon
                                    className={
                                      data?.[difficulty]
                                        ? 'text-primary-400'
                                        : 'text-gray-600'
                                    }
                                    name={difficulty}
                                  />
                                </Tooltip>
                              )
                            )}
                          </Flex>
                        </Flex>
                      )
                    })}
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>
        ))}
      </Flex>
    </Section>
  )
}

const icons: Record<string, string> = {
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
  'entombed-sentinels': 'inv_121_raid_achievement_golems',
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
  'nekzali-the-soulcoiler': 'inv_121_raid_achievement_priestess',
  'nexus-princess-kyveza': 'inv_achievement_raidnerubian_etherealassasin',
  'nymrissa-wavecaller': 'achievement_boss_elitenagamale',
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
  sszorak: 'inv_121_raid_achievement_brute',
  'stix-bunkjunker': 'inv_111_raid_achievement_stixbunkjunker',
  terros: 'achievement_raidprimalist_terros',
  'the-amalgamation-chamber': 'inv_achievement_raiddragon_amalgamationchamber',
  'the-bloodbound-horror': 'inv_achievement_raidnerubian_blackblood',
  'the-coiled-altar': 'inv_121_raid_achievement_zuljinmalacrass',
  'the-forgotten-experiments':
    'inv_achievement_raiddragon_forgottenexperiments',
  'the-lost-explorers': 'inv_121_raid_achievement_tortollans',
  'the-primal-council': 'achievement_raidprimalist_council',
  'the-silken-court': 'inv_achievement_raidnerubian_council',
  'the-twin-fangs': 'inv_121_raid_achievement_twins',
  'the-vigilant-steward-zskarn': 'inv_achievement_raiddragon_zskarn',
  'tindral-sageswift-seer-of-the-flame':
    'inv_achievement_raidemeralddream_druidoftheflame',
  ulatek: 'inv_121_raid_achievement_ulatek',
  'ulgrax-the-devourer': 'inv_achievement_raidnerubian_nerubianhulk',
  'vaelgor-ezzorak': 'inv_120_raid_voidspire_dragonduo',
  'vashnik-the-malignant': 'inv_121_raid_achievement_alchemist',
  'vexie-and-the-geargrinders':
    'inv_111_raid_achievement_vexieandthegeargrinders',
  volcoross: 'inv_achievement_raidemeralddream_lavaserpent',
  vorasius: 'inv_120_raid_voidspire_kaiju',
}
