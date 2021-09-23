import * as searchService from '../../services/searchService';

describe('Requests', () => {
    test('searchProducts', () => {
        let getSpy = jest.spyOn(searchService, 'getRequest').mockImplementation(() => Promise.resolve({}));
        searchService.searchProducts('miau').then(()=>{
            expect(getSpy).toHaveBeenLastCalledWith("tems?q=miau");
        });
    })
    test('getProductInformation', () => {
        let getSpy = jest.spyOn(searchService, 'getRequest').mockImplementation(() => Promise.resolve({}));
        searchService.getProductInformation('miau').then(()=>{
            expect(getSpy).toHaveBeenLastCalledWith("items/miau");
        });
    })
})