import React from 'react';
import {connect} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const App = React.createClass({

  _tabChanged: (index, prevIndex) => {
    if (index === prevIndex) return false;
    console.log('Tab changed to:', index, "from", prevIndex);
  },

  render: function() {
    if (!this.props.ready) return (
      <p className='loader'>Loading...</p>
    );

    const tabs = (
      <Tabs onSelect={this._tabChanged}>
        <TabList>
          <Tab>Introduction</Tab>
          <Tab>I’m a Journalist</Tab>
          <Tab>I’m not a Journalist</Tab>
        </TabList>

        <TabPanel>
          <div id='introduction'>

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
  return {
    ready: !!state.connectionCount
  }
};

module.exports = connect(mapStateToProps)(App);
