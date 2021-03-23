import React, { useState, useEffect } from "react";
import {
  getInventory,
  addItemNbi67,
  removeItemNbi67,
  checkout
} from "./ServicesNbi67/ServicesNbi67";
import InventoryNbi67 from "./ComponentsNbi67/InventoryNbi67/InventoryNbi67";
import CartNbi67 from "./ComponentsNbi67/CartNbi67/CartNbi67";

function App() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [addButtonStatus, setAddButtonStatus] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  function loadData() {
    setLoading(true);
    getInventory()
      .then((json) => {       
        setProducts(json.Inventory);
        setCurrentProducts(json.CurrentCart);
        setTotalPrice(json.totalCartPrice)
        setLoading(false);
        return products;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async function addItemToCart(e) {       
    await addItemNbi67(e.target.value)
      .then((json) => {
        setCurrentProducts(json.CurrentCart);
        setLoading(false);
        setTotalPrice(json.totalPrice);
      })
      .catch((err) => {
        console.error(err);
      });    
  }
  async function deleteItem(e) {
    await removeItemNbi67(e.target.id)
      .then((json) => {
        setCurrentProducts(json.CurrentCart);
        setLoading(false);
        setTotalPrice(json.totalCartPrice);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  async function checkoutCart(){   
    await checkout(currentProduct)
    .then((json)=>{
      setCurrentProducts(json.CurrentCart)
      setLoading(false);
      setProducts(json.Inventory);
    })
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <InventoryNbi67
            productList={products}
            addItemToCart={addItemToCart}
            btnStatus={addButtonStatus}
          />
          <CartNbi67
            CartList={currentProduct}
            totalPrice={totalPrice}
            deleteItem={deleteItem}
            checkout={checkoutCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
