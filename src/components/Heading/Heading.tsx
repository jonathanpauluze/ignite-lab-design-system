import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Heading(props: HeadingProps) {
  const { size = 'md', children, asChild } = props 

  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
      )}
    >
      {children}
    </Comp>
  )
}