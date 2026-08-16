import { Tooltip as Component } from '@base-ui/react/tooltip'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  content: string
}

export function Tooltip({ children, className, content }: Props) {
  return (
    <Component.Root>
      <Component.Trigger className={className}>{children}</Component.Trigger>

      <Component.Portal>
        <Component.Positioner sideOffset={11}>
          <Component.Popup className="data-starting-style:transform-[scale(0.98)] data-ending-style:transform-[scale(0.98)] relative flex origin-(--transform-origin) flex-col rounded bg-accent-400 px-2 py-1 text-black text-sm transition-[transform,opacity] duration-100 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:transition-none">
            <Component.Arrow className="before:transform-[translate(-50%,50%)_rotate(45deg)] relative block h-1.5 w-3 overflow-clip before:absolute before:bottom-0 before:left-1/2 before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))] before:bg-accent-400 before:content-[''] data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=top]:-bottom-1.5 data-[side=right]:-left-2.25 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180" />

            {content}
          </Component.Popup>
        </Component.Positioner>
      </Component.Portal>
    </Component.Root>
  )
}
