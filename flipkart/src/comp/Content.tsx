import axios from "axios";
import Filters from "./Filters";
import Main from "./Main";
import React, { useEffect } from "react";
export default function Content() {
  const [value, setValue] = React.useState(1); //sort
  const [brands, setBrands] = React.useState([]);
  const [fassured, setFassured] = React.useState<boolean>();
  const [ratingFilter, setRatingFilter] = React.useState<number[]>([]);
  const [discount, setDiscount] = React.useState([]);
  const [count, setCount] = React.useState(0); //product count
  const [page, setPage] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    let params = {
      page: page,
      rating: Math.min(...ratingFilter),
      discount: Math.min(...discount),
      sortBy: value,
      brands: brands,
      fassured: fassured,
    };
    axios({
      method: "post",
      url: process.env.REACT_APP_API_URL+"/get",
      data: params,
    })
      .then((res) => {
        setProducts(res.data.products);
        setCount(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(params);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page, ratingFilter, fassured, discount, value, brands]);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#e2e2e2",
        justifyContent: "center",
      }}
    >
      <Filters
        brands={brands}
        setBrands={setBrands}
        setPage={setPage}
        fassured={fassured}
        setFassured={setFassured}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        discount={discount}
        setDiscount={setDiscount}
      />
      <Main
        value={value}
        setValue={setValue}
        page={page}
        setPage={setPage}
        count={count}
        products={products}
      />
    </div>
  );
}
