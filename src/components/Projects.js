import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.Projects){
      projectItems= this.props.Projects.map(project =>
      )
    }
    console.log(this.props)
    return (
      <div className="Projects">
        My projects
      </div>
    );
  }
}

export default Projects;
