import React from "react";
import {
  Breadcrumbs,
  Typography,
  Box,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import Pagination from "./Pagination";
import { NavigateNext } from "@mui/icons-material";
import ProductCard from "./Card";
export default function Main(props: any) {
  const sortKeys = [
    "Popularity",
    "Price -- Low to High",
    "Price -- High to Low",
    "Newest First",
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setValue(newValue);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "0.8",
        minWidth: "500px",
        backgroundColor: "#fff",
        margin: "5px",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        style={{ fontSize: "14px", padding: "5px" }}
      >
        <p>Home</p>
        <p>Gaming</p>
      </Breadcrumbs>
      <Typography variant="body1" style={{ marginLeft: "1rem" }} align="left">
        Gaming
        <span
          style={{
            color: "GrayText",
            fontSize: "12px",
            marginLeft: "1rem",
          }}
        >
          (Showing {(props.page - 1) * 40 + 1}-
          {Math.min(props.page * 40, props.count)} of {props.count} products)
        </span>
      </Typography>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={props.value}
          onChange={handleChange}
          variant="standard"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            disabled
            label="Sort By"
            sx={{
              fontWeight: "500",
              textTransform: "none",
              color: "black !important",
            }}
          />
          {sortKeys.map((sortKey) => (
            <Tab
              sx={{
                textTransform: "none",
                fontWeight: "500",
                color: "black",
                marginLeft: "-20px",
                fontStretch: "semi-condensed",
              }}
              label={sortKey}
            />
          ))}
        </Tabs>
        <Divider />
        <div
          style={{
            minHeight: "300px",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {props.products.map((product: object) => {
            return <ProductCard product={product} />;
          })}
        </div>
        <Divider />
        {props.count > 40 ? (
          <Pagination
            count={props.count}
            page={props.page}
            setPage={props.setPage}
          />
        ) : null}
        <Divider />
      </Box>
    </div>
  );
}
