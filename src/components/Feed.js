import React from "react";
// import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";

const Feed = () => {
  return (
    <>
      <Box flex={4} p={2}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton arial-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="public/favicon.ico"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.sexondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              doloremque praesentium quisquam beatae amet, necessitatibus ab qui
              ea reiciendis expedita, sunt facilis voluptatibus rerum pariatur
              commodi mollitia iste fugit porro?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton arial-label="add to favourites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton arial-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Feed;
