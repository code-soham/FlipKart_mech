import {
  Typography,
  Divider,
  Checkbox,
  ListItem,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Chip,
} from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { Search, ExpandMore, CloseRounded } from "@mui/icons-material";
export default function Filters(props: any) {
  const [brands, setBrands] = React.useState<string[]>([]);

  useEffect(() => {
    axios({
      method: "post",
      url: process.env.REACT_APP_API_URL + "/brands",
    })
      .then((res) => {
        setBrands(res.data.brands);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const rating = ["4★ & above", "3★ & above", "2★ & above", "1★ & above"];
  const discount = ["50% & above", "40% & above", "25% & above", "10% & above"];
  const [searchBrand, setSearchBrand] = React.useState("");
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "0.2",
          maxWidth: "330px",
          minHeight: "100vh",
          minWidth: "270px",
          backgroundColor: "#fff",
          margin: "5px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            margin: "0.5rem",
          }}
          align="left"
        >
          Filters
        </Typography>
        <Divider />
        {/* <Typography
          variant="body2"
          style={{ margin: "0.7rem", fontWeight: "500", color: "GrayText" }}
          align="left"
        >
          CATEGORIES
        </Typography>
        <Divider /> */}
        <form
          style={{
            display: "flex",
            justifyContent: "flex-start",
            verticalAlign: "middle",
          }}
        >
          <Checkbox
            size="small"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              props.setFassured(event.target.checked);
              props.setPage(1);
            }}
          />
          <img
            style={{ marginTop: "9px" }}
            alt="assured"
            height="20px"
            src="https://i.imgur.com/BPkSSgX.png"
          />
        </form>
        <Divider />
        <Accordion
          defaultExpanded={true}
          sx={{
            margin: "0",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              variant="body2"
              style={{ fontSize: "13px", fontWeight: "600", color: "black" }}
              align="left"
            >
              BRAND
            </Typography>
            {props.brands.length === 0 ? null : (
              <Chip
                sx={{
                  borderRadius: "3px",
                  fontSize: "13px",
                  backgroundColor: "#fff",
                  marginTop: "-7px",
                  float: "left",
                }}
                icon={
                  <CloseRounded htmlColor="#f4f" sx={{ fontSize: "14px" }} />
                }
                onClick={() => {
                  props.setPage(1);
                  props.setBrands([]);
                }}
                label="Clear All"
              />
            )}
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            <TextField
              placeholder="Search Brand"
              sx={{
                width: "80%",
                margin: "0 auto",
                marginBottom: "0.7rem",
                marginTop: "-1rem",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              size="small"
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
            />
            <div
              style={{
                maxHeight: "200px",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              {brands
                .filter((brand) =>
                  brand.toLowerCase().includes(searchBrand.toLowerCase())
                )
                .map((brand, index) => (
                  <ListItem
                    sx={{
                      marginLeft: "1rem",
                    }}
                    key={brand}
                    disablePadding
                  >
                    <input
                      type="checkbox"
                      checked={props.brands.includes(brand)}
                      id={brand}
                      onChange={(e) => {
                        props.setPage(1);
                        if (e.target.checked) {
                          props.setBrands([...props.brands, brand]);
                        } else {
                          props.setBrands(
                            props.brands.filter((b: string) => b !== brand)
                          );
                        }
                      }}
                    />
                    <label htmlFor={brand}>{brand}</label>
                  </ListItem>
                ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true} sx={{}}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              variant="body2"
              style={{ fontSize: "13px", fontWeight: "600", color: "black" }}
              align="left"
            >
              CUSTOMER RATING
            </Typography>
            {props.ratingFilter.length === 0 ? null : (
              <Chip
                sx={{
                  borderRadius: "3px",
                  fontSize: "13px",
                  backgroundColor: "#fff",
                  marginTop: "-7px",
                  float: "left",
                }}
                icon={
                  <CloseRounded htmlColor="#f4f" sx={{ fontSize: "14px" }} />
                }
                onClick={() => {
                  props.setPage(1);
                  props.setRatingFilter([]);
                }}
                label="Clear All"
              />
            )}
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            {rating.map((rating, index) => (
              <ListItem
                sx={{
                  marginLeft: "1rem",
                }}
                key={rating}
                disablePadding
              >
                <input
                  type="checkbox"
                  checked={props.ratingFilter.includes(rating[0])}
                  id={rating}
                  onChange={(e) => {
                    props.setPage(1);
                    if (e.target.checked) {
                      props.setRatingFilter([...props.ratingFilter, rating[0]]);
                    } else {
                      props.setRatingFilter(
                        props.ratingFilter.filter(
                          (b: string) => b !== rating[0]
                        )
                      );
                    }
                  }}
                />
                <label htmlFor={rating}>{rating}</label>
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true} sx={{}}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              variant="body2"
              style={{ fontSize: "13px", fontWeight: "600", color: "black" }}
              align="left"
            >
              DISCOUNTS
            </Typography>
            {props.discount.length === 0 ? null : (
              <Chip
                sx={{
                  borderRadius: "3px",
                  fontSize: "13px",
                  backgroundColor: "#fff",
                  marginTop: "-7px",
                  float: "left",
                }}
                icon={
                  <CloseRounded htmlColor="#f4f" sx={{ fontSize: "14px" }} />
                }
                onClick={() => {
                  props.setPage(1);
                  props.setDiscount([]);
                }}
                label="Clear All"
              />
            )}
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            {discount.map((dis, index) => (
              <ListItem
                sx={{
                  marginLeft: "1rem",
                }}
                key={dis}
                disablePadding
              >
                <input
                  type="checkbox"
                  id={dis}
                  checked={props.discount.includes(dis.substring(0, 2))}
                  onChange={(e) => {
                    props.setPage(1);
                    if (e.target.checked) {
                      props.setDiscount([
                        ...props.discount,
                        dis.substring(0, 2),
                      ]);
                    } else {
                      props.setDiscount(
                        props.discount.filter(
                          (b: string) => b !== dis.substring(0, 2)
                        )
                      );
                    }
                  }}
                />
                <label htmlFor={dis}>{dis}</label>
              </ListItem>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </React.Fragment>
  );
}
