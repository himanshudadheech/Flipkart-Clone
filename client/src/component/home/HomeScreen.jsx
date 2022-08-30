import { React } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
export default function HomeScreen() {
  // useSelector help krega data fetch krne k liye reducer se
  /*
  or jo use selector hai vo chrome vli state ka getPRoducts use kr ra hai don't be confuse name can be different 
  */
  const getProproductsductsFromRedux = useSelector(
    (state) => state.getProducts
  );
  console.log(getProproductsductsFromRedux);

  // disptach imp hai otherwise error aaegi
  const disptach = useDispatch();
  useEffect(() => {
    // ye getProducts API hai
    disptach(getProducts());
  }, [disptach]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}
