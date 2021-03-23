import React from "react";

function InventoryNbi67(props) {      
  if (!props.productList) return 'no data';
  if (!Array.isArray(props.productList)) return 'results are not array'
  const products = props.productList;
 
  return (
    <div className="col-7">           
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
         {products.map((product, key) => (
          <tr key={key}>
            <td scope="row">{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>${product.price}</td>
            <td>
              {(product.quantity > 0 && props.btnStatus!=true) ?
                <button className="btn btn-success" value={product.id} onClick={props.addItemToCart}>Add</button>                
                :
                <button className="btn btn-secondary" value={product.id}>OUT OF STOCK</button>
              }
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default InventoryNbi67;
