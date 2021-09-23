import { render } from '@testing-library/react';
import Results from '../../pages/Results';
import * as searchService from '../../services/searchService'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    search: ""
  })
}));

test('renders', () => {
  let wrapper = render(<Results />);
  jest.spyOn(searchService, 'searchProducts').mockImplementation(()=>{
    Promise.resolve({ data: {items: [1,2,3]}})
  })
  expect(wrapper.findByText("Cargando...")).not.toBeNull()
});
