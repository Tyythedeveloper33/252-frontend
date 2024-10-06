import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ts from "./images/ts.png";
import ShopBtn from "../ShopBtn/ShopBtn";
export default function TopThree() {
  return (
    <>
      <ImageList sx={{ width: "100%", height: "auto", gap: 16 }} cols={3}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Hot Picks</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={`Price: $${item.price}`}
              actionIcon={
                <div>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`add ${item.title} to cart`}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </div>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ShopBtn />
    </>
  );
}

// Example item data representing clothing or shoes
const itemData = [
  {
    img: ts,
    title: "Sneakers",
    price: "89.99",
    cols: 1,
  },
  {
    img: ts,
    title: "Leather Boots",
    price: "129.99",
    cols: 1,
  },
  {
    img: ts,
    title: "Casual Shirt",
    price: "49.99",
    cols: 1,
  },
];
