import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      console.log(response.data.results)
      setResult(response.data.results);
      setLoading(false);
    });
  }, [query.get("search")])


    return (
      <div className="App">
        {
          result.length === 0 && !loading? (
            <div>
              Lo sentimos, no encontramos resultados asociados a tu búsqueda
            </div>
          ) : (
            result.map((el) =>{
              return(
                <span>
                  {el.title}<br/>
                </span>
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