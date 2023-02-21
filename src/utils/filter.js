const filter = (projects, busca, category, date) => {

    // filtro de busca escrita
    const lowerBusca = busca.toLowerCase()
    const filter1 = projects.filter((search) => search.title.toLowerCase().includes(lowerBusca));

    // filtro select por categoria
    const lowerCategory = category.toLowerCase()
    const filter2 = filter1.filter((search) => search.category.includes(lowerCategory));

    // filtro select recente ou antigo

    const filter3 = date === 'antigo'? filter2 : filter2.reverse()  ;

    // retorno pós 3 filtros
    const filtered = filter3
    return filtered;
    // return projects;
};

export default filter