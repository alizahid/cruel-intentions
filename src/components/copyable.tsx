import { CheckCircledIcon, CopyIcon } from '@radix-ui/react-icons'
import { Flex, IconButton, Text, Tooltip } from '@radix-ui/themes'
import { useCallback, useRef, useState } from 'react'

interface Props {
  label: string
  value: string
}

export function Copyable({ label, value }: Props) {
  const timer = useRef<NodeJS.Timeout>(null)

  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    if (!value) {
      return
    }

    if (timer.current) {
      clearTimeout(timer.current)
    }

    await navigator.clipboard.writeText(value)

    setCopied(true)

    timer.current = setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [value])

  const Icon = copied ? CheckCircledIcon : CopyIcon

  return (
    <Flex align="center" gap="3">
      <Tooltip content={value ? (copied ? 'Copied' : 'Copy') : 'Not available'}>
        <IconButton
          color={copied ? 'green' : undefined}
          disabled={!value}
          onClick={copy}
          variant="ghost"
        >
          <Icon />
        </IconButton>
      </Tooltip>

      <Text>{label}</Text>
    </Flex>
  )
}
