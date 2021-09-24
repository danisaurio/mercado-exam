import '../assets/styles/SearchResult.css';
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import { searchProducts } from "../services/searchService";
import BreadcrumbsML from '../components/BreadcrumbsML';

function Results() {
  const [result, setResult] = useState([]);
  const [mainCategory, setMainCategory] = useState('');
  const [loading, setLoading] = useState(false);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery().get("search");
  
  useEffect(() => {
    setLoading(true);
    searchProducts(query).then((response)=>{
      setMainCategory(response.data.categories[0]);
      localStorage.setItem("mainCategory", response.data.categories[0] )
      let trimResult = response.data.items
      if(trimResult.length > 4){
        trimResult = response.data.items.slice(0,4)
      }
      setResult(trimResult);
      setLoading(false);
    });
  }, [query])


    return (
      <div className="search-results">
        {
          !loading ? (
            <BreadcrumbsML results={mainCategory} details={false} />
          ) : null
        }
        {
          result.length === 0 && !loading? (
            <div>
              Lo sentimos, no encontramos resultados asociados a tu búsqueda
            </div>
          ) : (
            result.map((el, i) =>{
              return(
                <ResultCard item={el} key={i}/>
              )
            })
          )
        }
        {
          loading ? (
            <span>Cargando...</span>
          ) : null
        }
      </div>
    );
  }
  
  export default Results;