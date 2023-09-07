import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const FightCard = ({ details }) => {
  const { name, date, location, note, competitors, odds, broadcasts, links } =
    details;

  return (
    <Card variant="outlined" sx={{ backgroundColor: "fff" }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
            backgroundColor: "#dbbdc4",
            borderRadius: 5,
          }}
        >
          {competitors.map((competitor) => (
            <div
              key={competitor.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 8px",
              }}
            >
              {competitor.headshot && (
                <img
                  src={competitor.headshot}
                  alt={competitor.displayName}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              )}
              {!competitor.headshot && (
                <AccountCircleIcon style={{ fontSize: 80, color: "#757575" }} />
              )}
              <Typography align="center">
                <span>{competitor.displayName}</span>
                {competitor.logo && (
                  <img
                    src={competitor.logo}
                    alt={`${competitor.displayName}'s flag`}
                    style={{ marginLeft: "4px", width: "20px", height: "20px" }}
                  />
                )}
              </Typography>
            </div>
          ))}
        </div>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          })}
        </Typography>
        <Typography variant="body2" component="div">
          <b>Location:</b> {location}
        </Typography>
        <Typography variant="body2" component="div">
          <b>Weight Class:</b> {note}
        </Typography>
        <Typography variant="body2" component="div">
          <b>Broadcast:</b> {broadcasts?.[0]?.name}
        </Typography>
        <Typography variant="body2" component="div">
          <b>Betting Odds:</b> {odds.details}
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#5c0f22",
            color: "white",
            marginTop: 20,
          }}
          href={links?.[0]?.href}
          target="_blank"
          rel="noopener"
        >
          Fight center
        </Button>
      </CardContent>
    </Card>
  );
};

export default FightCard;
