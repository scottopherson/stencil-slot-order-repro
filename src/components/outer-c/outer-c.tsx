import { Component } from '@stencil/core';

@Component({
  tag: 'outer-c',
  styleUrl: 'outer-c.css',
  shadow: true
})
export class OuterC {
  render() {
    return ([
      <div>Outer C</div>,
      <inner-c>
        <slot />
      </inner-c>
    ]);
  }
}
