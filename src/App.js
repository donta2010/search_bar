import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Table from './Components/Table'
import Search from "./Components/Search"
import users from "./employee_info"

// var MONGO_URI=process.env.MONGO_URI ||"mongodb://"
class App extends React.Component {
  //turned my react function into a react class
  constructor(props) {
      super(props);
      this.state = {
          filtered: [],
        data:[],
        searchValues:"" 
      }
  }
  componentDidMount(){
this.setState({data:users})
//data is now able to be seen by other components if enabled which it has the ability to be a prop
//app is the parent (main/leder file) and data is being passed through App via a prop
//inside a class so use this
//<Table data={}

  }

handleChange=(e)=>{
 this.setState({searchValues:e.target.value.toLowerCase()},()=>{this.filterData()})
}
filterData=()=>{
  console.log("working")
  let newInfo = this.state.data.filter(dataValue=>{
    return dataValue.name.toLowerCase().includes(this.state.searchValues)
  })
  this.setState({filtered:newInfo})

}
  render(){
    //every class component needs a render.
    //never try to setstate in render

      return(
        //whenever you use a render you need to use return
      <div>
    <Header/>



    <form style={style.searchCss} class="form-inline active-pink-3 active-pink-4">
  <i style={style.searchCss}class="fas fa-search" aria-hidden="true"></i>
  <input style={style.searchCss} class="form-control form-control-sm ml-3 w-75" className="input" value={this.state.searchValues} onChange={this.handleChange} name="txt" type="text" placeholder="Search"
    aria-label="Search"/>
</form>
    {/* the line below makes data a global prop */}
    <Table info={this.state.filtered.length>0 && this.state.searchValues !="" ? this.state.filtered : this.state.data}/>



    </div>)}
}
const style ={ searchCss:
  {border:"FF3333",
  color:"FF3333",
  fontWeight:"bold",
  display:"flex", 
  justifyContent:"right",}}
export default App;
//all of this is turning into JS and goes into the DOM and it suses JS to render the JS funcationality and the HTML
//usally the data inside going to be easily accessable- componentDidMount function -