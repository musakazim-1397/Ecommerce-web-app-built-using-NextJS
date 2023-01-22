import { createContext, useState } from "react";

const CartContext = createContext({
  totalItems: 0,
  totalPrice: 0,
  allItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
});
export default CartContext;

export const CartContextProvider = (props) => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [allItems, setAllItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItem = allItems.find((i) => i.id === item.id);
    if (existingItem) {
      const newArray = [...allItems];
      const existingItemIndex = newArray.findIndex((i) => i.id === item.id);
      const updateIndex = newArray[existingItemIndex];
      const newIndex = {
        ...updateIndex,
        quantity: updateIndex.quantity+=1,
        totalPricePerItem: +updateIndex.quantity * +updateIndex.price,
      };
      newArray[existingItemIndex] = newIndex;
      setAllItems(newArray);
      setTotalItems((prevTotalItems) => prevTotalItems + 1);
      
      newArray.map(i=>i.totalPricePerItem+totalPrice);
      setTotalPrice(prevTotalPrice=>{
        let totPrice=0;
        for(let i=0; i<newArray.length; i++){
            totPrice=newArray[i].totalPricePerItem+totPrice;
        }
        return Math.round(totPrice);
      });
    } else {
      setAllItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1, totalPricePerItem: item.price },
      ]);
      setTotalItems((prevTotalItems) => prevTotalItems + 1);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + +item.price
      );
    }
  };

  const removeItemFromCart = (id) => {
    const newArray = [...allItems];
    const itemRemoved = newArray.filter((i) => i.id !== id);
    setAllItems(itemRemoved);
  };

  const clearCart = () => {
    setAllItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        totalItems: totalItems,
        totalPrice: totalPrice,
        allItems: allItems,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
