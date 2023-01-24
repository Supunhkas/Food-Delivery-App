import React, { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(item.qty);
  const [state, dispatch] = useStateValue();

  // const cartDispatch = () => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   dispatch({
  //     type: actionType.SET_CART,
  //     cartItems: cartItems,
  //   });
  // };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      dispatch({
        type: actionType.SET_CART,
        cartItems: state.cartItems.map((item) => {
          if (item.id === id) {
            item.qty += 1;
          }
          return item;
        }),
      });
    } else {
      if (qty === 1) {
        dispatch({
          type: actionType.SET_CART,
          cartItems: state.cartItems.filter((item) => item.id !== id),
        });
      } else {
        setQty(qty - 1);
        dispatch({
          type: actionType.SET_CART,
          cartItems: state.cartItems.map((item) => {
            if (item.id === id) {
              item.qty -= 1;
            }
            return item;
          }),
        });
      }
    }
  };

  useEffect(() => {
    setQty(item.qty);
  }, [item.qty]);

  return (
    <div className="w-full h-340 md:h-42 px-6 py-5 flex flex-col gap-2 overflow-y-scroll scrollbar-none">
      {/* cart items */}
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img
          src={item?.imageURL}
          alt=""
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        />
        {/* name section */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-50">{item?.title}</p>
          <p className="text-sm block text-gray-300 font-semibold">
            ${(item?.price ? parseFloat(item.price) : 0) * qty}
          </p>
        </div>
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("reomeve", item?.id)}
          >
            <BiMinus className="text-gray-50" />
          </motion.div>

          <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
            {item?.qty}
          </p>

          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => updateQty("add", item?.id)}
          >
            <BiPlus className="text-gray-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
