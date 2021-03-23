import React from "react";

function CartNbi67() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Item</th>          
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td scope="row">Mark</td>
          <td>3</td>
          <td>$2.99</td>
          <td>
              <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>          
          <td scope="row">Jacob</td>
          <td>5</td>
          <td>$27.32</td>
          <td>
              <button className="btn btn-danger">Delete</button>
          </td>
        </tr>      
      </tbody>
    </table>
  );
}

export default CartNbi67;
