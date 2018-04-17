import React, { Component } from 'react';

class ProjectItems extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="ProjectItems">
        My projects
      </li>
    );
  }
}

export default ProjectItems;
