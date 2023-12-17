import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTracker from "./OrderTracker";
import { Grid,Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarBorderOutlined } from "@mui/icons-material";


const OrderDetail = () => {
  return (
    <div className="px:5 lg:px:20">
      <div className="ml-10">
        <h1 className="font-bold text-xl py-7">Delivery Adress</h1>

        <AdressCard />
      </div>
      <div className="py-20">
        <OrderTracker acttiveStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "centre", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="ml-6 flex items-centre space-x-4">
                <img
                  className="w-[10rem] h-[10rem] object-cover object-top"
                  src="https://img.freepik.com/free-photo/smiling-beautiful-young-woman-pink-mini-dress-posing-studio_155003-14602.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="space-x-5 text-2xl space-y-6 font-semibold">
                    Pink Dress
                  </p>
                  <p className="space-x-5 opacity-50 text-2xs font-semibold">
                    Color: Pink
                  </p>
                  <p>Seller: ZARA</p>
                  <p>$1000</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderOutlined
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-2xl"
                />
                <span>Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetail;
