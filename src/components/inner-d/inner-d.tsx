import { Component } from '@stencil/core';

@Component({
  tag: 'inner-d',
  styleUrl: 'inner-d.css',
  shadow: false
})
export class InnerD {
  render() {
    return ([
      <div>Inner D</div>,
      <slot />
    ]);
  }
}
