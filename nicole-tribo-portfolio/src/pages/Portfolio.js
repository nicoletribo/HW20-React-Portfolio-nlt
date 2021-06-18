import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import projects from '../projects.json';



class Portfolio extends Component {
  state = {
    projects
  };
  
  
  render() {
    return (
      <div>
      {this.state.projects.map(project =>(
        <PortfolioCard
        id={project.id}
        key={project.key}
        name={project.name}
        image={project.image}
        description={project.description}
        view={project.view}
        repository={project.repository}
      />
      ))}
      </div>
    );
  }
}

export default Portfolio;
