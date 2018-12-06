import { Component } from '@stencil/core';

@Component({
  tag: 'inner-b',
  styleUrl: 'inner-b.css',
  shadow: false
})
export class InnerB {
  render() {
    return (
      <slot />
    );
  }
}
