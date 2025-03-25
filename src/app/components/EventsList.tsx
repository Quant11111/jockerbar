"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import CelebrationIcon from "@mui/icons-material/Celebration";

// Types pour les événements
type EventType = "concierto" | "karaoke" | "tematico";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  type: EventType;
}

// Liste fictive d'événements pour la démonstration
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Noche de Rock Chileno",
    description:
      "Disfruta de las mejores bandas de rock nacional en una noche inolvidable.",
    date: "15 de junio, 2024",
    time: "21:00",
    image: "/images/event-rock.jpg",
    type: "concierto",
  },
  {
    id: 2,
    title: "Karaoke Nights",
    description:
      "Demuestra tu talento y canta tus canciones favoritas. ¡Premios para los mejores!",
    date: "18 de junio, 2024",
    time: "20:00",
    image: "/images/event-karaoke.jpg",
    type: "karaoke",
  },
  {
    id: 3,
    title: "Noche de los 80s",
    description:
      "Revive la mejor música de los 80s en una fiesta temática llena de nostalgia.",
    date: "24 de junio, 2024",
    time: "21:30",
    image: "/images/event-80s.jpg",
    type: "tematico",
  },
];

// Obtenir l'icône en fonction du type d'événement
const getEventIcon = (type: EventType) => {
  switch (type) {
    case "concierto":
      return <MusicNoteIcon />;
    case "karaoke":
      return <MicExternalOnIcon />;
    case "tematico":
      return <CelebrationIcon />;
    default:
      return <CalendarTodayIcon />;
  }
};

// Obtenir la couleur en fonction du type d'événement
const getEventColor = (type: EventType) => {
  switch (type) {
    case "concierto":
      return "#e91e63"; // pink
    case "karaoke":
      return "#673ab7"; // deep purple
    case "tematico":
      return "#2196f3"; // blue
    default:
      return "#9e9e9e"; // grey
  }
};

// Obtenir le libellé en fonction du type d'événement
const getEventLabel = (type: EventType) => {
  switch (type) {
    case "concierto":
      return "Concierto";
    case "karaoke":
      return "Karaoke";
    case "tematico":
      return "Fiesta Temática";
    default:
      return "Evento";
  }
};

export default function EventsList({ limit = 3 }: { limit?: number }) {
  // Limiter le nombre d'événements affichés si nécessaire
  const events = upcomingEvents.slice(0, limit);

  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Próximos Eventos
      </Typography>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Chip
                  icon={getEventIcon(event.type)}
                  label={getEventLabel(event.type)}
                  sx={{
                    backgroundColor: getEventColor(event.type),
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  {event.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    color: "text.secondary",
                  }}
                >
                  <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2">{event.date}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    color: "text.secondary",
                  }}
                >
                  <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2">{event.time} hrs</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    ml: "auto",
                    color: getEventColor(event.type),
                    fontWeight: "bold",
                  }}
                >
                  Ver detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          href="/eventos"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#000" },
            py: 1.5,
            px: 4,
          }}
        >
          Ver Todos los Eventos
        </Button>
      </Box>
    </Box>
  );
}
