import { render } from '@testing-library/react';
import ProductDetail from '../../components/ProductDetail';

let itemDetailResponse = {
    author: {
      name: "Daniela",
      lastname: "Vidal"
    },
    item: {
      id: "MLC584783942",
      title: "Polera Gato Gatito Cat Hombre Mujer Calidad Algodón",
      price: {
        currency: "CLP",
        amount: 8990,
        decimals: 0
      },
      picture: "http://http2.mlstatic.com/D_650952-MLC44989520764_022021-I.jpg",
      condition: "new",
      free_shipping: false,
      sold_quantity: 17,
      description: "Polera unisex regular, fabricación europea.\n\n- Tela cómoda y de excelente calidad.\n- Material de algodón.\n\n-Importante: Antes de comprar asegurar la talla a través de la tabla de medidas.\n-Desde 3 poleras el envió es gratis (puede combinar diseños).\n\nRealiza tus consultas sin compromiso, serán respondidas a la brevedad.\nPago y envió asegurados por Mercado Libre."
    }
}

test('renders ProductDetail component', () => {
  let wrapper = render(<ProductDetail item={itemDetailResponse} />);
  expect(wrapper.findByText(itemDetailResponse.item.title)).not.toBeNull()
  expect(wrapper.findByText(itemDetailResponse.item.description)).not.toBeNull()
});
