import { parseAndSortCategories } from '../utils/categoriesService';

describe('CategoriesService', () => {
    test('returns sortedInformation', () => {
        let unsortedList = [
            {
                results: 10,
                name: 'a'
            },
            {
                results: 1,
                name: 'b'
            },
            {
                results: 0,
                name: 'c'
            },
            {
                results: 5,
                name: 'd'
            }
        ]
        let expectedResult = ['a', 'd', 'b', 'c'];

        let result = parseAndSortCategories([{values: unsortedList}]);
        expect(result).toEqual(expectedResult);
    })
})