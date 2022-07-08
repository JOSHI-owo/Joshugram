import "./App.css";
// import Basics from "./components/Basics"; //First file, contains basics
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Add from "./components/Add";
// import Container from "@mui/material/Container";

function App() {
  return (
    <>
      {/* <Basics /> */}
      {/* <Box sx={{ backgroundColor: "Red" }}> */}
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
    </>
  );
}

export default App;
