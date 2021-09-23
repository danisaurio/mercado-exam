import { render } from '@testing-library/react';
import Homepage from '../../pages/Homepage';


test('renders Homepage', () => {
  let wrapper = render(<Homepage />);
  expect(wrapper.findByText("Bienvenido!")).not.toBeNull()
});
