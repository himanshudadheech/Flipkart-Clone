import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")({
  width: "100%",
  height: 280,
});
const SlideBarComponent = ({products}) => {
  return (
    <div>
  <Carousel
        responsive={responsive}
       
        
      >
        {products.map((product) => (
          <Image src={product.url} alt="banner" />
        ))}
      </Carousel>
    </div>
  );
};
 export default SlideBarComponent;