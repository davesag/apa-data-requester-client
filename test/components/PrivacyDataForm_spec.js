import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {Provider} from 'react-redux';

import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import {PrivacyDataForm} from '../../src/components/PrivacyDataForm';

const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
});

describe('rendering a PrivacyDataForm', () => {
  const fakeUser = {};

  it('renders null if not ready', () => {
    const component = renderIntoDocument(
      <PrivacyDataForm user={fakeUser} ready={false}/>
    );

    const form = scryRenderedDOMComponentsWithTag(component, 'form');

    expect(form).to.be.empty;
  });

  it('renders a form if ready', () => {
    const component = renderIntoDocument(
      <PrivacyDataForm user={fakeUser} ready={true}/>
    );

    const form = scryRenderedDOMComponentsWithTag(component, 'form');

    expect(form.length).to.equal(1);
  });
});
