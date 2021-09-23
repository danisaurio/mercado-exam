import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import { searchProducts } from "../services/searchService";

function Results() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  
  useEffect(() => {
    setLoading(true);
    searchProducts(query.get("search")).then((response)=>{
      setResult(response.data.items);
      setLoading(false);
    });
  }, [query.get("search")])


    return (
      <div className="search-results">
        {
          result.length === 0 && !loading? (
            <div>
              Lo sentimos, no encontramos resultados asociados a tu búsqueda
            </div>
          ) : (
            result.map((el) =>{
              console.log(el)
              return(
                <ResultCard item={el}/>
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