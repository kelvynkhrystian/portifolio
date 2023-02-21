const filter = (projects, busca) => {

    // filtro de busca escrita
    const lowerBusca = busca.toLowerCase()
    const filtered = projects.filter((search) => search.title.toLowerCase().includes(lowerBusca));

    // filtro select por categoria


    // filtro select recente ou antigo

    // retorno pós 3 filtros
    return filtered;
    // return projects;
};

export default filter