import { render } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

test('renders NotFound', () => {
  let wrapper = render(<NotFound />);
  expect(wrapper.findByText("lo sentimos, no encontramos la página que buscas :(")).not.toBeNull()
});
