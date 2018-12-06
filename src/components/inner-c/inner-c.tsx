import { Component } from '@stencil/core';

@Component({
  tag: 'inner-c',
  styleUrl: 'inner-c.css',
  shadow: true
})
export class InnerC {
  render() {
    return ([
      <div>Inner C</div>,
      <slot />
    ]);
  }
}
