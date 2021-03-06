import '../assets/styles/ProductDetails.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { getProductInformation } from '../services/searchService';
import BreadcrumbsML from '../components/BreadcrumbsML';

function Details() {
  const [item, setItem] = useState(null);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let productId = useLocation().pathname.replace('/items/','')
  
  useEffect(() => {
      setLoading(true);
      getProductInformation(productId).then((response)=>{
          setItem(response.data.item);
          setCategory(response.data.item.category_name)
          setLoading(false);
      }).catch(()=>{
        setError(true);
      });
  }, [productId])
  return (
    <span>
      {
        item !== null && !loading ? (
          <span>
            <BreadcrumbsML details={category}/>
            <ProductDetail item={item}/>
          </span>
        ) : (
          <span>Cargando...</span>
        )
      }
      {
        error ? (
          <span>Lo sentimos! ha ocurrido un error :(</span>
        ) : null
      }
    </span>
  );
}

export default Details;