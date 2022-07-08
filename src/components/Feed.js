import React from "react";
// import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
import Post from "./Post";
const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
        <Post name="Joshi" />
        <Post name="Rashi" />
        <Post name="Kakshi" />
        <Post name="Pakshi" />
        <Post name="Shashi" />
        <Post name="Bushi" />
      </Box>
    </>
  );
};

export default Feed;
