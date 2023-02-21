import projects from '../database/projects'

const getProjects = () => {
  return projects.reverse();
}

export default getProjects;