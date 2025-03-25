import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography, Divider, Tabs, Tab } from "@mui/material";
import EventsList from "../components/EventsList";

export default function EventosPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero section plus simple pour la page des événements */}
        <Box
          sx={{
            backgroundColor: "#333",
            color: "white",
            py: 6,
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Nuestros Eventos
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto" }}>
              Descubre todo lo que tenemos preparado para ti: conciertos,
              karaoke, fiestas temáticas y mucho más.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Filtres d'événements */}
          <Box sx={{ mb: 4 }}>
            <Tabs
              value={0}
              centered
              sx={{
                "& .MuiTab-root": {
                  fontWeight: "bold",
                  fontSize: "1rem",
                  px: 4,
                },
              }}
            >
              <Tab label="Todos" />
              <Tab label="Conciertos" />
              <Tab label="Karaoke" />
              <Tab label="Fiestas Temáticas" />
            </Tabs>
          </Box>

          <Divider sx={{ mb: 6 }} />

          {/* Liste complète des événements */}
          <EventsList limit={9} />

          {/* Section promotionnelle */}
          <Box
            sx={{
              mt: 10,
              p: 6,
              backgroundColor: "#f5f5f5",
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              ¿Quieres tocar en Jockerbar?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              Estamos siempre buscando talentos emergentes para presentarse en
              nuestro escenario. Si eres músico o tienes una banda, contáctanos
              para coordinar tu presentación.
            </Typography>
            <Typography
              component="a"
              href="/contacto"
              sx={{
                color: "#e91e63",
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contactar para reservar fecha →
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
