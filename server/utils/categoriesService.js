const parseAndSortCategories = (categoriesList) => {
    let availableCategories = categoriesList[0].values;
    let sortedCategories = availableCategories.sort((a, b) => b.results - a.results); // descending order
    return sortedCategories.map((cat) => cat.name);
}

module.exports = { parseAndSortCategories }