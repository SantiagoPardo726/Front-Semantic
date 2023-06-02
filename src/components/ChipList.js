import React from "react";
import { styled } from "@mui/material/styles";
import {
  Chip,
  Paper,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export default function ChipList(props) {
  function toCamelCase(str) {
    return str
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^(.)/, (match, char) => char.toUpperCase());
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [body, setBody] = useState([]);
  const chipData = props.list;
  const [open, setOpen] = useState(false);
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={toCamelCase(data.term)}
                onClick={() => {
                  setBody(data.link);
                  handleOpen();
                }}
              />
            </ListItem>
          );
        })}
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Enlaces a DBpedia
            </Typography>
            <List>
              {body.map((link, index) => (
                <ListItemButton component="a" href={link}>
                  <ListItemText primary={"Enlace " + index} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
