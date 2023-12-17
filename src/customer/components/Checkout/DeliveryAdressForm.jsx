import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AdressCard from "../AdressCard/AdressCard";

const DeliveryAdressForm = () => {
    const handelSubmit=(e)=>{
        e.preventDefault();

        const data = new FormData(e.currentTarget)
      const adress = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        streetAdress: data.get("adress"),
        city: data.get("city"),
        state: data.get("state"),
        zipCode: data.get("zip"),
        mobile: data.get("phoneNumber"),
      };
    }
  return (

    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          item
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AdressCard />
            <Button
              sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shodow-md p-5">
            <form onSubmit={handelSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    label="Last Name"
                    name="firstName"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="adress"
                    label="Adress"
                    name="adress"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="PhoneNumber"
                    label="Phone Number"
                    name="phonenumber"
                    fullWidth
                    autoComplete="shipping postal code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{py:1.5, mt: 2, bgcolor: "rgb(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAdressForm;
