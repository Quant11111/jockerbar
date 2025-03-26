"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import {
  CalendarMonth,
  AccessTime,
  MusicNote,
  Mic,
  Celebration,
} from "@mui/icons-material";

export interface EventProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  type: "concert" | "karaoke" | "theme" | "other";
}

const getEventIcon = (type: EventProps["type"]) => {
  switch (type) {
    case "concert":
      return <MusicNote />;
    case "karaoke":
      return <Mic />;
    case "theme":
      return <Celebration />;
    default:
      return <CalendarMonth />;
  }
};

const getEventColor = (
  type: EventProps["type"]
): "primary" | "secondary" | "info" | "default" => {
  switch (type) {
    case "concert":
      return "primary";
    case "karaoke":
      return "secondary";
    case "theme":
      return "info";
    default:
      return "default";
  }
};

const getEventLabel = (type: EventProps["type"]) => {
  switch (type) {
    case "concert":
      return "Concierto";
    case "karaoke":
      return "Karaoke";
    case "theme":
      return "Fiesta temática";
    default:
      return "Evento";
  }
};

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  time,
  description,
  image,
  type,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        minHeight: "450px",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Chip
            icon={getEventIcon(type)}
            label={getEventLabel(type)}
            color={getEventColor(type)}
            size="small"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CalendarMonth
            fontSize="small"
            sx={{ mr: 1, color: "text.secondary" }}
          />
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <AccessTime
            fontSize="small"
            sx={{ mr: 1, color: "text.secondary" }}
          />
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "hidden", height: "80px" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
