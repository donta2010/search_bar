import React from "react";
// import users from "../employee_info.js"

function Table(props){
let tableInfo = props.info.map(user=>{
    
   return(<tr><td>{user.image}</td>
    <td>{user.name}</td>
    <td>{user.phone}</td>
    <td>{user.email}</td>
    <td>{user.dob}</td>
    </tr>);
});
    return (<table class="table table-striped">
          <tr>
          <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            </tr>
    <tbody>
        {tableInfo}
        </tbody>
    </table>
    )
        }
export default Table;