import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Contacto() {
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
            Contáctanos
          </Typography>
          <Typography variant="h5">
            Estaremos encantados de atenderte y resolver todas tus dudas.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "-32px",
            marginLeft: "-32px",
          }}
        >
          {/* Información de contacto */}
          <Box
            sx={{
              width: { xs: "100%", md: "41.666%" },
              padding: "32px 0 0 32px",
            }}
          >
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography variant="h4" gutterBottom>
                Información de Contacto
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <LocationOnIcon
                    color="primary"
                    sx={{ fontSize: 28, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">Dirección</Typography>
                    <Typography variant="body1">
                      O&apos;Higgins 279, 8071077 San Bernardo, Región
                      Metropolitana, Chile
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <PhoneIcon color="primary" sx={{ fontSize: 28, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Teléfono</Typography>
                    <Typography variant="body1">+56 9 9837 1618</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <EmailIcon color="primary" sx={{ fontSize: 28, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body1">info@jockerbar.cl</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <AccessTimeIcon
                    color="primary"
                    sx={{ fontSize: 28, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">Horarios</Typography>
                    <Typography variant="body2">
                      Lunes - Jueves: 10:00–23:00
                    </Typography>
                    <Typography variant="body2">
                      Viernes: 10:00–03:00
                    </Typography>
                    <Typography variant="body2">Sábado: 13:00–03:00</Typography>
                    <Typography variant="body2">Domingo: Cerrado</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Formulario de contacto */}
          <Box
            sx={{
              width: { xs: "100%", md: "58.333%" },
              padding: "32px 0 0 32px",
            }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Envíanos un mensaje
              </Typography>
              <Typography variant="body1" paragraph>
                Complete el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </Typography>

              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", mx: -1 }}>
                  <Box sx={{ width: { xs: "100%", sm: "50%" }, p: 1 }}>
                    <TextField
                      required
                      fullWidth
                      label="Nombre"
                      name="nombre"
                      autoComplete="name"
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", sm: "50%" }, p: 1 }}>
                    <TextField
                      required
                      fullWidth
                      label="Apellido"
                      name="apellido"
                      autoComplete="family-name"
                    />
                  </Box>
                  <Box sx={{ width: "100%", p: 1 }}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      autoComplete="email"
                      type="email"
                    />
                  </Box>
                  <Box sx={{ width: "100%", p: 1 }}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      autoComplete="tel"
                    />
                  </Box>
                  <Box sx={{ width: "100%", p: 1 }}>
                    <TextField
                      required
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      multiline
                      rows={4}
                    />
                  </Box>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enviar Mensaje
                </Button>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  * Todos los campos marcados con * son obligatorios.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Mapa */}
        <Paper elevation={3} sx={{ mt: 6, p: 2, height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8117143761146!2d-70.71996802374521!3d-33.56905397405144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d8550cd2de5d%3A0x9e2e7cd60713e1f1!2sO&#39;Higgins%20279%2C%208071077%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1711470265693!5m2!1ses!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>
      </Container>

      <Footer />
    </main>
  );
}
