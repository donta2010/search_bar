import React from "react";

function Search(){
    return(
<form style={style.searchCss} class="form-inline active-pink-3 active-pink-4">
  <i style={style.searchCss}class="fas fa-search" aria-hidden="true"></i>
  <input style={style.searchCss} class="form-control form-control-sm ml-3 w-75" className="input" name="txt" type="text" placeholder="Search"
    aria-label="Search"/>
</form>

    );
}
const style ={ searchCss:
    {border:"FF3333",
    color:"FF3333",
    fontWeight:"bold",
    display:"flex", 
    justifyContent:"right",}}
    
export default Search