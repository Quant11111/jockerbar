import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import EventsList from "./components/EventsList";
import Gallery from "./components/Gallery";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />

        <Container maxWidth="lg">
          {/* Section Bienvenue */}
          <Box sx={{ py: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Bienvenidos a Jockerbar
            </Typography>

            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
            >
              Jockerbar es el lugar perfecto para disfrutar de buenos momentos
              con amigos, escuchar música en vivo, participar en nuestras noches
              de karaoke y descubrir nuestras fiestas temáticas en San Bernardo.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Conciertos
                  </Typography>
                  <Typography variant="body2">
                    Disfruta de las mejores bandas locales y nacionales en un
                    ambiente íntimo y acogedor.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Karaoke
                  </Typography>
                  <Typography variant="body2">
                    Demuestra tu talento vocal en nuestras noches de karaoke.
                    ¡Diversión garantizada!
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Fiestas Temáticas
                  </Typography>
                  <Typography variant="body2">
                    Cada semana una experiencia diferente con nuestras fiestas
                    temáticas llenas de sorpresas.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Section Événements */}
          <EventsList />

          {/* Section Galerie */}
          <Gallery limit={3} />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
