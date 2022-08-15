import { Button } from "@mui/material";

const data = [
  "Electronics",
  "TVs and Appliances",
  "Men",
  "Women",
  "Baby & Kids",
  "Home & Furniture",
  "Sports, Books & More",
  "Flights",
  "offer Zone",
];
export default function Menubar() {
  return (
    <div
      style={{
        marginTop: "64px",
        border: "1px solid #ccc",
        boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-evenly",
          minWidth: "70%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {data.map((item, index) => (
          <Button
            sx={{
              lineHeight: "1",
              textTransform: "none",
              color: "#000",
              fontWeight: "500",
              margin: "5px",
            }}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
