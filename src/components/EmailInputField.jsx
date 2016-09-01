import React from 'react';

export default React.createClass({
  getLabel: function() {
    return this.props.label || "";
  },
  getPlaceholder: function() {
    return this.props.placeholder || "";
  },
  getName: function() {
    return this.props.name || "email";
  },
  render: function() {
    return <div>
      <label for={this.getName()}>{this.getLabel()}</label>
      <input
        type="email"
        name={this.getName()}
        id={this.getName()}
        placeholder={this.getPlaceholder()}
      />
    </div>;
  }
});
