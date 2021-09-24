const parseAndSortCategories = (response) => {
    let searchInFilters = response.filters.filter((filter) => filter.id === "category");
    let searchInAvailableFilters = response.available_filters.filter((filter) => filter.id === "category");
    let categoriesList = searchInFilters.length > 0 ? searchInFilters : searchInAvailableFilters;
    let availableCategories = categoriesList[0].values;
    let sortedCategories = availableCategories.sort((a, b) => b.results - a.results); // descending order
    return sortedCategories.map((cat) => cat.name);
}

module.exports = { parseAndSortCategories }