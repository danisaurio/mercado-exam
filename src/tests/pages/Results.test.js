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
  jest.spyOn(searchService, 'searchProducts').mockImplementation(()=>Promise.resolve({ data: {items: [1,2,3]}}))
  let wrapper = render(<Results />);
  expect(wrapper.findByText("Cargando...")).not.toBeNull()
});

test('renders if error', () => {
  jest.spyOn(searchService, 'searchProducts').mockImplementation(()=>Promise.reject('Error'))
  let wrapper = render(<Results />);
  expect(wrapper.findByText("Lo sentimos! ha ocurrido un error :(")).not.toBeNull()
});
