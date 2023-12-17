import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate= useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-2 lg:px-16 relative">
        <div className="cols-span-2 w-auto h-auto">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="mt-6">
            <div className="space-y-3 font-semibold">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$4566</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className=" text-green-600">$466</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className=" text-green-600">FREE</span>
              </div>
              <div className="flex justify-between pt-3 mb-10 text-green-600 font-bold">
                <span>Total Amount</span>
                <span>$3456</span>
              </div>
            </div>
            <Button
            onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
