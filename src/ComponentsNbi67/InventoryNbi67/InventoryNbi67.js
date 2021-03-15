import React from "react";

function InventoryNbi67() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">SKU</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>3</td>
          <td>$2.99</td>
          <td>
              <button className="btn btn-success">Add</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>0</td>
          <td>$27.32</td>
          <td>
              <button className="btn btn btn-secondary">OUT OF STOCK</button>

          </td>
        </tr>      
      </tbody>
    </table>
  );
}

export default InventoryNbi67;
