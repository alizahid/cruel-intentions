export type AddonData = {
  data: {
    code: string
    icon: string
    id: string
    name: string
  }[]
  icon: string
  id: string
  name: string
}[]

export function getTalentLoadoutEx(data: AddonData) {
  const parts: string[][] = []

  for (const group of data) {
    const part: string[] = []

    part.push(`# ${group.name}\n`)
    part.push(`# ${group.icon}\n\n`)

    for (const encounter of group.data) {
      if (!encounter.code) {
        continue
      }

      part.push(`# ${encounter.name}\n`)
      part.push(`# ${encounter.icon}\n`)
      part.push(`${encounter.code}\n\n`)
    }

    parts.push(part)
  }

  return parts
    .map((part) => part.join(''))
    .join('')
    .trim()
}
