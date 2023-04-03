import React from 'react';
import { Node } from './node';
import { render } from '@testing-library/react';

const properties = {
  class: 'test',
  style: 'font-weight: bold;',
};

describe('Node', () => {
  test('It displays the full text', () => {
    const { container } = render(
      <>
        <Node name="div" properties={properties} />
        <Node closing name="div" />
      </>
    );
    expect(container.textContent).toStrictEqual(
      '<div class="test" style="font-weight: bold;"></div>'
    );
  });
});
