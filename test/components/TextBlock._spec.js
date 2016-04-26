import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import TextBlock from '../../src/components/TextBlock';

describe('rendering a TextBlock', () => {
  it('renders two lines of text', () => {
    const component = renderIntoDocument(
      <TextBlock lines={["Hello there", "That's nice dear"]} />
    );
    const paras = scryRenderedDOMComponentsWithTag(component, 'p');

    expect(paras.length).to.equal(2);
    expect(paras[0].textContent).to.equal("Hello there");
    expect(paras[1].textContent).to.equal("That's nice dear");
  });
});
