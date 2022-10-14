import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Type your e-mail address" />
    ],
    fullWidth: false,
  },
  argTypes: {
    fullWidth: {
      type: 'boolean'
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

export const FullWidth: StoryObj<TextInputRootProps> = {
  args: {
    fullWidth: true
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
