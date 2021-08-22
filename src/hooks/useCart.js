import { useContext } from "react"
import AppContext from "../context"

export const useCart = () => {
  const {cartSneakers, setCartSneakers} = useContext(AppContext);
  const totalPrice = cartSneakers.reduce((sum, obj) => Number(obj.price) + sum, 0);

  return {cartSneakers, setCartSneakers, totalPrice};
}
