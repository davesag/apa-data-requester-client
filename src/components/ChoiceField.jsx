import React from 'react';

export default React.createClass({
  getLabel: function() {
    return this.props.label || "";
  },
  getPlaceholder: function() {
    return this.props.placeholder || "Choose…";
  },
  getName: function() {
    return this.props.name;
  },
  render: function() {
    return <div>
      <label for={this.getName()}>{this.getLabel()}</label>
      <select
        name={this.getName()}
        id={this.getName()}
      >
        {
          
          for opt in this.getOptions() {
            
          }
        }
      </select>
    </div>;
  }
});
