import { Flex, Link, Tooltip } from '@radix-ui/themes'
import { upperFirst } from 'lodash'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import type { Member } from '~/types/wow'
import { Icon, type IconName } from './icon'

interface Props {
  character: Member
}

export function CharacterCard({ character }: Props) {
  return (
    <Flex align="center" gap="4">
      <figure className="relative">
        <Image
          alt={character.name}
          className="rounded-lg bg-primary-900"
          height={64}
          src={character.image}
          unoptimized
          width={64}
        />

        {character.rank === 0 ? (
          <Icon
            className="absolute -top-2 -left-2 -rotate-20 text-primary-400"
            name="crown"
          />
        ) : null}

        {character.name === 'Wazzuli' ? (
          <Icon
            className="absolute -top-2 -left-2 -rotate-20 text-rose-600"
            name="heart"
          />
        ) : null}

        <Tooltip
          content={upperFirst(
            character.spec.role === 'dps'
              ? character.spec.melee
                ? 'melee'
                : 'ranged'
              : character.spec.role
          )}
        >
          <Flex
            bottom="-8px"
            className="rounded-full bg-black"
            p="1"
            position="absolute"
            right="-8px"
          >
            <Icon
              className={twMerge(
                'size-4',
                character.spec.role === 'tank' && 'text-(--blue-9)',
                character.spec.role === 'healer' && 'text-(--green-9)',
                character.spec.role === 'dps' && 'text-(--red-9)'
              )}
              name={
                character.spec.role === 'dps'
                  ? icons[character.spec.melee ? 'melee' : 'ranged']
                  : icons[character.spec.role]
              }
            />
          </Flex>
        </Tooltip>
      </figure>

      <Flex align="start" direction="column" gap="1" justify="between">
        <Link
          href={`https://raider.io/characters/eu/${character.realm.slug}/${character.name}`}
          size="6"
          target="_blank"
          underline="none"
          weight="medium"
        >
          {character.name}
        </Link>

        <Flex gap="3">
          <Tooltip content={character.race.name}>
            <Image
              alt={character.race.name}
              className="size-(--space-5) rounded"
              height={56}
              src={`https://wow.zamimg.com/images/wow/icons/large/${races[character.race.id]?.[character.gender]}.jpg`}
              unoptimized
              width={56}
            />
          </Tooltip>

          <Tooltip content={character.class.name}>
            <Image
              alt={character.class.name}
              className="size-(--space-5) rounded"
              height={56}
              src={`https://wow.zamimg.com/images/wow/icons/large/${classes[character.class.id]}.jpg`}
              unoptimized
              width={56}
            />
          </Tooltip>

          <Tooltip content={character.spec.name}>
            <Image
              alt={character.spec.name}
              className="size-(--space-5) rounded"
              height={56}
              src={`https://wow.zamimg.com/images/wow/icons/large/${specs[character.spec.id]}.jpg`}
              unoptimized
              width={56}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  )
}

const icons = {
  healer: 'healer',
  melee: 'melee',
  ranged: 'ranged',
  tank: 'tank',
} as const satisfies Record<string, IconName>

export const classes: Record<number, string> = {
  1: 'classicon_warrior',
  2: 'classicon_paladin',
  3: 'classicon_hunter',
  4: 'classicon_rogue',
  5: 'classicon_priest',
  6: 'spell_deathknight_classicon',
  7: 'classicon_shaman',
  8: 'classicon_mage',
  9: 'classicon_warlock',
  10: 'classicon_monk',
  11: 'classicon_druid',
  12: 'classicon_demonhunter',
  13: 'classicon_evoker',
}

export const specs: Record<number, string> = {
  62: 'spell_holy_magicalsentry',
  63: 'spell_fire_firebolt02',
  64: 'spell_frost_frostbolt02',
  65: 'spell_holy_holybolt',
  66: 'ability_paladin_shieldofthetemplar',
  70: 'spell_holy_auraoflight',
  71: 'ability_warrior_savageblow',
  72: 'ability_warrior_innerrage',
  73: 'ability_warrior_defensivestance',
  102: 'spell_nature_starfall',
  103: 'ability_druid_catform',
  104: 'ability_racial_bearform',
  105: 'spell_nature_healingtouch',
  250: 'spell_deathknight_bloodpresence',
  251: 'spell_deathknight_frostpresence',
  252: 'spell_deathknight_unholypresence',
  253: 'ability_hunter_bestialdiscipline',
  254: 'ability_hunter_focusedaim',
  255: 'ability_hunter_camouflage',
  256: 'spell_holy_powerwordshield',
  257: 'spell_holy_guardianspirit',
  258: 'spell_shadow_shadowwordpain',
  259: 'ability_rogue_deadlybrew',
  260: 'ability_rogue_waylay',
  261: 'ability_stealth',
  262: 'spell_nature_lightning',
  263: 'spell_shaman_improvedstormstrike',
  264: 'spell_nature_magicimmunity',
  265: 'spell_shadow_deathcoil',
  266: 'spell_shadow_metamorphosis',
  267: 'spell_shadow_rainoffire',
  268: 'spell_monk_brewmaster_spec',
  269: 'spell_monk_windwalker_spec',
  270: 'spell_monk_mistweaver_spec',
  577: 'ability_demonhunter_specdps',
  581: 'ability_demonhunter_spectank',
  1467: 'classicon_evoker_devastation',
  1468: 'classicon_evoker_preservation',
  1473: 'classicon_evoker_augmentation',
  1480: 'classicon_demonhunter_void',
}

export const races: Record<number, Record<'female' | 'male', string>> = {
  1: {
    female: 'race_human_female',
    male: 'race_human_male',
  },
  2: {
    female: 'race_orc_female',
    male: 'race_orc_male',
  },
  3: {
    female: 'race_dwarf_female',
    male: 'race_dwarf_male',
  },
  4: {
    female: 'race_nightelf_female',
    male: 'race_nightelf_male',
  },
  5: {
    female: 'race_scourge_female',
    male: 'race_scourge_male',
  },
  6: {
    female: 'race_tauren_female',
    male: 'race_tauren_male',
  },
  7: {
    female: 'race_gnome_female',
    male: 'race_gnome_male',
  },
  8: {
    female: 'race_troll_female',
    male: 'race_troll_male',
  },
  9: {
    female: 'race_goblin_female',
    male: 'race_goblin_male',
  },
  10: {
    female: 'race_bloodelf_female',
    male: 'race_bloodelf_male',
  },
  11: {
    female: 'race_draenei_female',
    male: 'race_draenei_male',
  },
  22: {
    female: 'race_worgen_female',
    male: 'race_worgen_male',
  },
  24: {
    female: 'race_pandaren_female',
    male: 'race_pandaren_male',
  },
  25: {
    female: 'race_pandaren_female',
    male: 'race_pandaren_male',
  },
  26: {
    female: 'race_pandaren_female',
    male: 'race_pandaren_male',
  },
  27: {
    female: 'race_nightborne_female',
    male: 'race_nightborne_male',
  },
  28: {
    female: 'race_highmountaintauren_female',
    male: 'race_highmountaintauren_male',
  },
  29: {
    female: 'race_voidelf_female',
    male: 'race_voidelf_male',
  },
  30: {
    female: 'race_lightforgeddraenei_female',
    male: 'race_lightforgeddraenei_male',
  },
  31: {
    female: 'race_zandalaritroll_female',
    male: 'race_zandalaritroll_male',
  },
  32: {
    female: 'race_kultiran_female',
    male: 'race_kultiran_male',
  },
  34: {
    female: 'race_darkirondwarf_female',
    male: 'race_darkirondwarf_male',
  },
  35: {
    female: 'race_vulpera_female',
    male: 'race_vulpera_male',
  },
  36: {
    female: 'race_magharorc_female',
    male: 'race_magharorc_male',
  },
  37: {
    female: 'race_mechagnome_female',
    male: 'race_mechagnome_male',
  },
  52: {
    female: 'race_dracthyr_female',
    male: 'race_dracthyr_male',
  },
  70: {
    female: 'race_dracthyr_female',
    male: 'race_dracthyr_male',
  },
  84: {
    female: 'race_earthendwarf_female',
    male: 'race_earthendwarf_male',
  },
  85: {
    female: 'race_earthendwarf_female',
    male: 'race_earthendwarf_male',
  },
  86: {
    female: 'race_harronir_female',
    male: 'race_harronir_male',
  },
  91: {
    female: 'race_harronir_female',
    male: 'race_harronir_male',
  },
}
