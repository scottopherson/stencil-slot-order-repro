import { Component } from '@stencil/core';

@Component({
  tag: 'outer-b',
  styleUrl: 'outer-b.css',
  shadow: false
})
export class OuterB {
  render() {
    return (
      <inner-b>
        <slot />
      </inner-b>
    );
  }
}
