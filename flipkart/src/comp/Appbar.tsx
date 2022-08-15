import { ArrowDropDown, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
export default function Appbar() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            minWidth: "70%",
            margin: "0 auto",
          }}
        >
          <img
            alt={"Flipkart Branding"}
            style={{ height: "30px" }}
            src="https://i.imgur.com/BE2pe8S.png"
          />
          <form
            style={{
              padding: "0px 10px",
            }}
          >
            <input
              style={{
                border: "none",
                padding: "10px",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.4)",
                minWidth: "300px",
              }}
              type="text"
              placeholder="Search for products, brands and more"
            />
            <Search
              style={{
                color: "#1976d2",
                position: "absolute",
                marginLeft: "-30px",
                paddingTop: "6px",
              }}
            />
          </form>
          <Button
            style={{
              color: "#1976d2",
              backgroundColor: "white",
              borderRadius: "0px",
              fontWeight: "bold",
              textTransform: "none",
              width: "80px",
            }}
          >
            Login
          </Button>
          <Button
            style={{
              whiteSpace: "nowrap",
              textTransform: "none",
              width: "100px",
              margin: "0px 10px",
            }}
            variant="text"
            color="inherit"
          >
            Become a Seller
          </Button>
          <Button
            style={{
              textTransform: "none",
            }}
            variant="text"
            color="inherit"
          >
            More
            <ArrowDropDown />
          </Button>
          <Button
            style={{
              textTransform: "none",
            }}
            color="inherit"
          >
            <ShoppingCart />
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
