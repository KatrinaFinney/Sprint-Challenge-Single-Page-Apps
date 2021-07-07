import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header.js";
//import PaginationExamplePagination from "./components/Pagination"
import "./index.css";

function App() {
  return (
    <div className="App" >
      <Header  />
      
      <AppRouter />
      
    </div>
  );
}

export default App;

/*<PaginationExamplePagination />
   */