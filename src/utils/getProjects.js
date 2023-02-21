import projects from '../database/projects'
import filter from './filter';

const getProjects = (busca, category, date) => {

  const filtered = filter(projects, busca, category, date);
  return filtered
  // return projects
}

export default getProjects;