import { Component } from '@stencil/core';

@Component({
  tag: 'outer-a',
  styleUrl: 'outer-a.css',
  shadow: true
})
export class OuterA {
  render() {
    return (
      <inner-a>
        <slot />
      </inner-a>
    );
  }
}
