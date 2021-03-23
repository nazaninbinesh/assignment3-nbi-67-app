import React, { useState } from "react";
import InventoryNbi67 from "./ComponentsNbi67/InventoryNbi67/InventoryNbi67";
import CartNbi67 from "./ComponentsNbi67/CartNbi67/CartNbi67"

function App() {
  return (
    <div className="App">
      <div className="container">
        <InventoryNbi67 />
        <CartNbi67 />
      </div>
    </div>
  );
}

export default App;
