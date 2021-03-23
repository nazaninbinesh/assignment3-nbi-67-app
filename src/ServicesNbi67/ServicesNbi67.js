export async function addItemNbi67(product) {
  const productObj = {
    id: product,
  };
  const addedProduct = JSON.stringify(productObj);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}cartNbi67`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: addedProduct,
  })
    .then((response) => response.json())
    .then((response) => {     
      return {
        CurrentCart: response.CurrentCart,
        totalPrice: response.totalCartPrice,
      };
    });
}

export async function removeItemNbi67(product) {
  const productObj = {
    id: product,
  };
  const selectedProduct = JSON.stringify(productObj);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}cartNbi67`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: selectedProduct,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}
export async function checkout(cart) {
    const formattedCart = JSON.stringify(cart);        
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cartNbi67/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formattedCart,
      })
        .then((response) => response.json())
        .then((response) => {
          return response;
        });
}
export async function getInventory() {
  return fetch(
    `${process.env.REACT_APP_API_BASE_URL}inventoryNbi67`
  ).then((response) => response.json());
}
