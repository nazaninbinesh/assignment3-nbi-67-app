import React from "react";

function CartNbi67(props) {  
  if (!props.CartList) return "no data";
  if (!Array.isArray(props.CartList)) return "results are not array";  
  const cartProducts = props.CartList;

  return (
    <div className="col-5">
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
          {cartProducts.map((prod, key) => (
            <tr key={key}>
              <td scope="row">{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>${prod.price}</td>
              <td>
                <button className="btn btn-danger" onClick={props.deleteItem} id={prod.id}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot> 
          <tr>
            <td >
              <button className="btn btn-info mt-1" onClick={props.checkout}>Check Out</button>
            </td>
            <td></td>
            <td></td>
            <td>
              <p className="fw-bold">
                ${props.totalPrice}
              </p>
            </td>         
          </tr>                       
        </tfoot>
      </table>
    </div>
  );
}

export default CartNbi67;
