import { Component } from '@stencil/core';

@Component({
  tag: 'inner-a',
  styleUrl: 'inner-a.css',
  shadow: true
})
export class InnerA {
  render() {
    return (
      <slot />
    );
  }
}
