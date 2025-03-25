import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { Box, Container, Typography, Divider } from "@mui/material";

export default function GaleriaPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero section pour la page galerie */}
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
              Galería de Imágenes
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto" }}>
              Revive los mejores momentos en Jockerbar San Bernardo a través de
              nuestra galería de fotos.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="h5" component="h2" align="center" sx={{ mb: 4 }}>
            Conciertos y Eventos
          </Typography>

          <Gallery limit={6} />

          <Divider sx={{ my: 8 }} />

          <Typography variant="h5" component="h2" align="center" sx={{ mb: 4 }}>
            Noches de Karaoke
          </Typography>

          <Gallery limit={6} />

          <Divider sx={{ my: 8 }} />

          <Typography variant="h5" component="h2" align="center" sx={{ mb: 4 }}>
            Fiestas Temáticas
          </Typography>

          <Gallery limit={6} />

          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#e91e63" }}>
              ¿Tienes fotos de tu visita a Jockerbar?
            </Typography>
            <Typography variant="body1">
              Etiquétanos en Instagram con @jokerbar.sanbernardo y podrías
              aparecer en nuestra galería.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
