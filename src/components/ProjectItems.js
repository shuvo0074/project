import React, { Component } from 'react';

class Projectitems extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="Items">
        My projects
      </li>
    );
  }
}

export default ProjectItems;
