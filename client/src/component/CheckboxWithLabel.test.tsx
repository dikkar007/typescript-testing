import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from './CheckboxWithLabel';


it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox:any = TestUtils.renderIntoDocument(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  const checkboxNode:any = ReactDOM.findDOMNode(checkbox);

  // Verify that it's Off by default
  expect(checkboxNode.textContent).toEqual('Off');

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(
    TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
  );
  expect(checkboxNode.textContent).toEqual('On');
});
