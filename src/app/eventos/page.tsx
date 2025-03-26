import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard, { EventProps } from "../components/EventCard";

// Événements à afficher
const events: EventProps[] = [
  {
    title: "Noche de Rock Chileno",
    date: "15 de Abril, 2023",
    time: "21:00",
    description:
      "Una noche dedicada a las mejores bandas de rock chileno con música en vivo.",
    image: "/images/event1.jpg",
    type: "concert",
  },
  {
    title: "Karaoke Night",
    date: "20 de Abril, 2023",
    time: "20:00",
    description:
      "Ven a cantar tus canciones favoritas y disfruta de una noche de diversión.",
    image: "/images/event2.jpg",
    type: "karaoke",
  },
  {
    title: "Fiesta de los 80s",
    date: "28 de Abril, 2023",
    time: "22:00",
    description:
      "Revive la época dorada con música, decoración y tragos temáticos de los años 80.",
    image: "/images/event3.jpg",
    type: "theme",
  },
  {
    title: "Jam Session",
    date: "5 de Mayo, 2023",
    time: "21:30",
    description:
      "Una noche para músicos y amantes de la música. Trae tu instrumento y únete a la jam.",
    image: "/images/event4.jpg",
    type: "concert",
  },
  {
    title: "Noche Latina",
    date: "12 de Mayo, 2023",
    time: "22:00",
    description:
      "Salsa, bachata, reggaeton y más. Una noche llena de ritmos latinos y baile.",
    image: "/images/event5.jpg",
    type: "theme",
  },
  {
    title: "Tributo a Queen",
    date: "19 de Mayo, 2023",
    time: "21:00",
    description:
      "Disfruta de las mejores canciones de Queen interpretadas por una banda tributo local.",
    image: "/images/event6.jpg",
    type: "concert",
  },
];

export default function Eventos() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Eventos
          </Typography>
          <Typography variant="h5">
            Descubre todas las actividades y eventos especiales que tenemos
            preparados para ti.
          </Typography>
        </Container>
      </Box>

      {/* Eventos */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "-32px",
            marginLeft: "-32px",
          }}
        >
          {events.map((event, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "50%", md: "33.333%" },
                padding: "32px 0 0 32px",
                display: "flex",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <EventCard {...event} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Información Adicional */}
      <Box sx={{ bgcolor: "background.default", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom textAlign="center">
            ¿Quieres organizar un evento en Jocker Bar?
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Si estás interesado en organizar un evento privado, una celebración
            especial o presentar tu música en nuestro local, no dudes en
            contactarnos.
          </Typography>
          <Typography variant="body1" textAlign="center">
            Llámanos al +56 9 9837 1618 o escríbenos a info@jockerbar.cl para
            más información.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </main>
  );
}
