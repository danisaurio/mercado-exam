import { render } from '@testing-library/react';
import Details from '../../pages/Details';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  })
}));

test('renders Details', () => {
  let wrapper = render(<Details />);
  expect(wrapper.findByText("Cargando...")).not.toBeNull()
});
