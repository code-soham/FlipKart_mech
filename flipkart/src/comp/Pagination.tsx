import React, { useEffect } from "react";
import { Button } from "@mui/material";
export default function Pagination(props: any) {
  const [pages, setPages] = React.useState(props.count / 40);
  const [start, setStart] = React.useState(1);
  const [end, setEnd] = React.useState(pages);
  useEffect(() => {
    setPages(Math.ceil(props.count / 40));
    setStart(1);
    setStart(props.page - 4 < 1 ? 1 : props.page - 4);
    setEnd(props.page + 5 > pages ? pages : props.page + 5);
    console.log(start, end, props.page, pages);
  }, [props.count, props.page, pages]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <div style={{}}>Page {props.page} of {pages}</div>
      <div>
        <Button
          sx={{
            display: `${props.page === 1 ? "none" : "visible"}`,
          }}
          onClick={() => props.setPage(props.page - 1)}
        >
          Previous
        </Button>
        {Array.from({ length: end - start + 1 }, (v, k) => k + start).map(
          (item) => {
            return (
              <Button
                key={item}
                onClick={() => props.setPage(item)}
                size="small"
                disableRipple={true}
                disableFocusRipple={true}
                variant="text"
                disableTouchRipple={true}
                sx={{
                  color: `${props.page === item ? "white" : "black"}`,
                  zoom: "0.55",
                  height: "70px",
                  fontSize: "20px",
                  fontWeight: "500",
                  borderRadius: `${item === props.page ? "50%" : "0"}`,
                  border: `${item === props.page ? "1px" : "none"}`,
                  backgroundColor: `${
                    item === props.page ? "#1976d2" : "#fff"
                  }`,
                }}
              >
                {item}
              </Button>
            );
          }
        )}
        <Button
          sx={{
            display: `${props.page === pages ? "none" : "visible"}`,
          }}
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </Button>
      </div>
      <div></div>
    </div>
  );
}
