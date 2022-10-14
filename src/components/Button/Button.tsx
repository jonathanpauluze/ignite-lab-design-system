import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonProps = {
  children: ReactNode
  fullWidth?: boolean
  asChild?: boolean
}

export function Button(props: ButtonProps) {
  const { children, fullWidth, asChild } = props 

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        {
          'w-full': fullWidth
        }
      )}
    >
      {children}
    </Comp>
  )
}