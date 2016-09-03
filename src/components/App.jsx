import React from 'react';
import {connect} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {changedTab} from '../actions';

import PrivacyDataForm from './PrivacyDataForm';

export const App = React.createClass({

  render: function() {
    if (!this.props.ready) return (
      <p className='loader'>Loading...</p>
    );

    const tabs = (
      <Tabs onSelect={this.props.tabChanged} selectedIndex={this.props.selectedTab}>
        <TabList>
          <Tab>Introduction</Tab>
          <Tab>I’m a Journalist</Tab>
          <Tab>I’m not a Journalist</Tab>
        </TabList>

        <TabPanel>
          <div id='introduction'>
            <p>The <a href='https://www.oaic.gov.au/privacy-law/privacy-act/'>Australian Privacy Act</a> allows Australian citizens to access personal information held about themselves by Australian companies and government agencies including the Australian Federal Police. You can request documents such as criminal records, investigation records and other data (with a few exceptions). To access these documents you simply lodge a `Privacy Request` with the Australian Federal Police. This can be done by emailing <a href='mailto:privacy@afp.gov.au'>privacy@afp.gov.au</a> with the following information:</p>
            <PrivacyDataForm />
          </div>
        </TabPanel>

        <TabPanel>
          <div id='a-journalist'>

          </div>
        </TabPanel>

        <TabPanel>
          <div id='not-a-journalist'>

          </div>
        </TabPanel>
      </Tabs>
    )

    return (
      <div>
        {tabs}
      </div>
    );
  }
});

const mapStateToProps = (state, ownProps) => {
  console.log('state', state);
  return {
    ready: !!state.server.connectionCount,
    selectedTab: state.ui.selectedTab || 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tabChanged: (index, prevIndex) => {
      if (index === prevIndex) return;
      dispatch(changedTab(index, prevIndex));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
