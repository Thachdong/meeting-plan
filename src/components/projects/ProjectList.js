import React from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';

function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {
        projects && projects.map(project => {
          return (
            <ProjectSummary project={project} key={project.id} />
          )
        })
      }
    </div> 
  )
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(ProjectList);