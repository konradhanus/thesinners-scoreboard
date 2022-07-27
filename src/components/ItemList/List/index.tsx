import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { scoreData } from "../../ScoreBoard/scoreData";

export default function ItemList() {
  const date = new Date().toLocaleTimeString();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "gray",
          padding: "2em",
        }}
      >
        <Typography variant="overline" component="h2">
          Dog Ranking App
        </Typography>
        {scoreData.map((item, key) => {
          return (
            <List
              sx={{ width: "120%", maxWidth: 360, bgcolor: "gray" }}
              key={key}
            >
              <ListItem alignItems="center" sx={{ bgcolor: "white" }}>
                <Typography>{item.title}</Typography>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      marginRight: 2,
                      marginLeft: 2,
                    }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inside",
                          marginRight: 5,
                          marginLeft: 5,
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {date}
                      </Typography>
                      {item.points}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          );
        })}
      </div>
    </div>
  );
}
