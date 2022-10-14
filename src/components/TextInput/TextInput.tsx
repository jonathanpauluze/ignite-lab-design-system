import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type TextInputRootProps = {
  children: ReactNode
  fullWidth?: boolean
}

function TextInputRoot(props: TextInputRootProps) {
  const { fullWidth, children } = props

  return (
    <div
      className={clsx(
        'flex items-center gap-3 h-12 py-4 px-3 rounded  bg-gray-800 focus-within:ring-2 ring-cyan-300',
        {
          'w-full': fullWidth,
          'w-fit': !fullWidth,
        },
      )}>
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

export type TextInputIconProps = {
  children: ReactNode
}

function TextInpuIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}
TextInpuIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400',
      )}
      {...props}
    />
  )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInpuIcon,
}