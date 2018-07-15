import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import Button from './Button';

it('Button renders correctly', () => {
  const tree = TestUtils.renderIntoDocument(<Button>hi!</Button>);
  expect(tree).toMatchSnapshot();
});

