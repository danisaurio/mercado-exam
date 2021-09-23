import '../assets/styles/ProductDetails.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { getProductInformation } from '../services/searchService';

function Details() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  let productId = useLocation().pathname.replace('/items/','')
  
  useEffect(() => {
      setLoading(true);
      getProductInformation(productId).then((response)=>{
          setItem(response.data.item);
          setLoading(false);
      });
  }, [productId])
  return (
    <span>
      {
        item !== null && !loading ? (
          <div className="App">
            <ProductDetail item={item}/>
          </div>
        ) : (
          <span>Cargando...</span>
        )
      }
    </span>
  );
}

export default Details;