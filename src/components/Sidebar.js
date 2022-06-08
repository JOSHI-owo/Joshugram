import Box from "@mui/material/Box";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <Box
        backgroundColor="blue"
        flex={1}
        p={2}
        sx={{ display: { xs: "none",sm:"block" } }}
      >
        Sidebar
      </Box>
    </>
  );
};

export default Sidebar;
