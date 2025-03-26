import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsletterForm from "./components/NewsletterForm";
import EventCard, { EventProps } from "./components/EventCard";

// Exemples d'événements à afficher
const upcomingEvents: EventProps[] = [
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
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Section Bienvenida */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Bienvenidos a Jocker Bar
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}
          >
            Un espacio único en San Bernardo donde puedes disfrutar de buena
            música, excelente comida y la mejor compañía.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "-32px",
            marginLeft: "-32px",
            mb: 8,
          }}
        >
          <Box
            sx={{ width: { xs: "100%", md: "50%" }, padding: "32px 0 0 32px" }}
          >
            <Box
              component="img"
              src="/images/bar-interior.jpg"
              alt="Interior del Jocker Bar"
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Box>
          <Box
            sx={{ width: { xs: "100%", md: "50%" }, padding: "32px 0 0 32px" }}
          >
            <Typography variant="h4" gutterBottom>
              Más que un bar, una experiencia
            </Typography>
            <Typography paragraph>
              En Jocker Bar no solo ofrecemos bebidas de calidad, sino también
              una excelente selección de sándwiches y pizzas preparadas con
              ingredientes frescos y recetas únicas.
            </Typography>
            <Typography paragraph>
              Nuestro ambiente acogedor es perfecto para reunirte con amigos,
              celebrar ocasiones especiales o simplemente disfrutar de un
              momento de relax después del trabajo.
            </Typography>
            <Typography>
              Organizamos regularmente eventos como conciertos con artistas
              locales, noches de karaoke y fiestas temáticas para que cada
              visita sea una experiencia única.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Section Eventos */}
      <Box sx={{ bgcolor: "background.default", py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Próximos Eventos
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "text.secondary", maxWidth: "800px", mx: "auto" }}
            >
              No te pierdas nuestros eventos especiales. ¡Siempre hay algo
              interesante sucediendo en Jocker Bar!
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "-32px",
              marginLeft: "-32px",
            }}
          >
            {upcomingEvents.map((event, index) => (
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
      </Box>

      {/* Section Newsletter */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <NewsletterForm />
      </Container>

      <Footer />
    </main>
  );
}
