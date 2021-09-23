import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";
import HomePage from "../pages/Homepage";
import Results from "../pages/Results.jsx";
import Details from "../pages/Details.jsx";
import NotFound from "../pages/NotFound.jsx";
import BreadcrumbsML from "../components/Breadcrumbs.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header>
                <Searchbar />
            </header>
            <main>
                <div className="App">
                    <BreadcrumbsML />
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/items" component={Results} exact />
                        <Route path="/items/:id" component={Details} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </main>
        </div>
    </BrowserRouter>
);
export default AppRouter;