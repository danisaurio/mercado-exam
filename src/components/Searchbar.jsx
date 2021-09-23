import { Grid } from "@mui/material";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/images/logo.png";
import searchIcon from "../assets/images/searchicon.png";


function SearchBar() {
  const history = useHistory();
  const [searchText, setSearchText] = useState(null);

  const onSubmit = async (e) =>{
    e.preventDefault();
    if(searchText !== null) {
      history.push(`/items?search=${searchText}`)
    }
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item md={1} textAlign="right">
        <Link to='/' aria-label="Volver a la página principal">
          <img src={logo} className="mercado-logo" alt=""/>
        </Link>
      </Grid>
      <Grid item md={5} textAlign="center">
        <form onSubmit={onSubmit}>
          <Grid container justifyContent="center" alignItems="center">
              <Grid item md={11} className="searchbar-input">
                <input
                  type="search"
                  className="searchbar"
                  placeholder="Nunca dejes de buscar"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  autoComplete="off"
                  onChange={ (e) => setSearchText(e.target.value) }
                />
              </Grid>
              <Grid item md={1} className="searchbar-button">
                <button type="submit" aria-label="buscar" alt="">
                  <img src={searchIcon} alt=""/>
                </button>
              </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
