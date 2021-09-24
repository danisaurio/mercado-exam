import { render } from '@testing-library/react';
import BreadcrumbsML from '../../components/BreadcrumbsML';

describe('renders BreadcrumbsML', () => {
  test('component if result', () => {
    let wrapper = render(<BreadcrumbsML results='123' />);
    expect(wrapper.findByText('123')).not.toBeNull();
  });
  
  test('component if detail', () => {
    let wrapper = render(<BreadcrumbsML details='abc' />);
    expect(wrapper.findByText('abc')).not.toBeNull();
  });
})

describe('BreadcrumbML uses localstorage', () => {
  beforeAll(()=>{
    let localStorageMock = (function() {
      let store = {
        mainCategory: 'miau'
      };
      return {
        getItem: function(key) {
          return store[key];
        },
        setItem: function(key, value) {
          store[key] = value.toString();
        },
        clear: function() {
          store = {};
        },
        removeItem: function(key) {
          delete store[key];
        }
      };
    })();
    
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  })
  test('results in localstorage', () => {
    let wrapper = render(<BreadcrumbsML details='abc' />);
    expect(wrapper.findByText('miau')).not.toBeNull();
  });

})

