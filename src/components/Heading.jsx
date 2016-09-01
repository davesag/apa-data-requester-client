import React from 'react';

export default React.createClass({
  getText: function() {
    return this.props.text || "";
  },
  render: function() {
    return <h2>{this.getText()}</h2>;
  }
});
