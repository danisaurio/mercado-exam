import { render } from '@testing-library/react';
import { Router } from 'express';
import Searchbar from '../../components/Searchbar';

test('renders Searchbar component', () => {
  let wrapper = render(
    <Router>
      <Searchbar />
    </Router>
  );
  expect(wrapper.findByText('Nunca dejes de buscar')).not.toBeNull()
});
