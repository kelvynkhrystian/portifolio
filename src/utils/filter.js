const filter = (projects, busca, category, date) => {

    // filtro select por categoria
    const filter1 = projects.filter((search) => search.category.includes(category));

    // filtro select recente ou antigo

    const filter2 = date === 'antigo'? filter1: filter1.reverse();

    // filtro de busca escrita
    const lowerBusca = busca.toLowerCase()
    const filter3 = filter2.filter((search) => search.title.toLowerCase().includes(lowerBusca));

    return filter3;
};

export default filter