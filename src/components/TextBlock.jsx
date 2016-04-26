import React from 'react';

export default React.createClass({
  getLines: function() {
    return this.props.lines || [];
  },
  render: function() {
    return <div>
      {this.getLines().map(line =>
        <p key={line}>{line}</p>
      )}
    </div>;
  }
});
