import projects from '../database/projects'
import filter from './filter';

const getProjects = (busca) => {

  const filtered = filter(projects, busca);
  return filtered
  // return projects
}

export default getProjects;