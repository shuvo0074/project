import React, { Component } from 'react';
import ProjectItems from './ProjectItems';

class Projects extends Component {
  render() {
    let projItems;
    if(this.props.Projects){
      projItems=this.props.Projects.map()(project => {
        //console.log(project)
        return(
          <ProjectItems key={project.title} project = {project} />
        )
      })
    }
    return (
      <div className="Projects">
        My project
        {projItems}
      </div>
    );
  }
}

export default Projects;
