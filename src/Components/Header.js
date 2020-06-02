import React from "react";

function Header(){
    return(
    <div style={style.headerCss} class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 style={style.headerCss}class="display-4">Employee Directory</h1>
    <p style={style.headerCss}class="lead">Say Hello to your team!</p>
  </div>
</div>
    )
}
const style ={ headerCss:
    {background:"#FF3333",
    color:"white",
    fontWeight:"bold",
    display:"flex", 
    justifyContent:"center",}}

export default Header;

