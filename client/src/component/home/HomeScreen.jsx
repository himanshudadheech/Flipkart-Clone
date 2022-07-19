import { React } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, styled } from "@mui/material";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
export default function HomeScreen() {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}
