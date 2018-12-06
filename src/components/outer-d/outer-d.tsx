import { Component } from '@stencil/core';

@Component({
  tag: 'outer-d',
  styleUrl: 'outer-d.css',
  shadow: false
})
export class OuterD {
  render() {
    return ([
      <div>Outer D</div>,
      <inner-d>
        <slot />
      </inner-d>
    ]);
  }
}
