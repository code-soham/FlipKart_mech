import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
export default function ProductCard(props: any) {
  const data = {
    // _id: ObjectId("62f944ca48236a149fc2a42b"),
    product_name: "Club Wagon",
    date_listed: new Date("2002-08-13T06:56:30.000Z"),
    user_rating: 2.7,
    mrp: 39810.67,
    sp: 20000.67,
    discount: null,
    brand: "Ford",
    free_del: true,
    assured: true,
  };
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "25%",
          maxHeight: "400px",
          borderRadius: "0px",
          border: "none",
          boxShadow: "none",
          "&:hover": {
            zIndex: "1",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "200px",
            }}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://picsum.photos/200/300/?random"
            title={props.product.product_name}
          />
          <CardContent>
            <Typography align="left" gutterBottom variant="body1" component="p">
              {props.product.product_name}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "5px",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color="success"
                label={props.product.user_rating + "★"}
                size="small"
                sx={{
                  borderRadius: "3px",
                  fontSize: "10px",
                  marginRight: "5px",
                }}
              />
              <Typography variant="body1" color="text.secondary">
                ({200})
              </Typography>
              {props.product.assured ? (
                <img
                  alt="flipkartAssured"
                  style={{ height: "15px", margin: "5px" }}
                  src="https://i.imgur.com/BPkSSgX.png"
                />
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "5px",
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="body1"
                color="text.primary"
              >
                ${props.product.sp}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "line-through",
                }}
                variant="body1"
                color="text.secpndary"
              >
                ${props.product.mrp}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                }}
                variant="body1"
                color="green"
              >
                ${props.product.discount}% off
              </Typography>
            </div>
            {props.product.free_del ? (
              <Typography variant="body2" align="left">
                Free Delivery
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
