import { render } from '@testing-library/react';
import { Router } from 'express';
import ResultCard from '../../components/ResultCard';

let searchResponse = {
    id: "MLA855468440",
    title: "Chicco Libro Miau Canta Conmigo .. En Magimundo !!!",
    price: {
        currency: "ARS",
        amount: 4200,
        decimals: 0
    },
    picture: "http://http2.mlstatic.com/D_629735-MLA41813745649_052020-I.jpg",
    condition: "new",
    free_shipping: true
}


test('renders ResultCard component', () => {
  let wrapper = render(
    <Router>
      <ResultCard item={searchResponse} />
    </Router>
    );
  expect(wrapper.findByText(searchResponse.title)).not.toBeNull()
  expect(wrapper.findByText(searchResponse.price.amount)).not.toBeNull()
});
