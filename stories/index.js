import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Tag from '../src/components/Tag/Tag';
import Tooltip from '../src/components/Tooltip/Tooltip';

import WithTooltip from '../src/components/hocs/withTooltip';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('Tag', module)
  .add('orange', () => (
    <Tag
      text='HTML'
      color='orange'
    />
  ))
  .add('blue', () => (
    <Tag
      text='CSS'
      color='blue'
    />
  ))
  .add('purple', () => (
    <Tag
      text='JS'
      color='purple'
    />
  ))
  .add('red', () => (
    <Tag
      text='C#'
      color='red'
    />
  ))
  .add('withTooltip', () => {
    const TooltippedTag = WithTooltip(Tag);
    return <TooltippedTag color='blue' text='this is HOC'/>;
  });

storiesOf('Tooltip', module)
  .add('normal', () => (
    <Tooltip />
  ));