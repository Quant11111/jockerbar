"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    // Par exemple, envoyer les données à une API
    console.log("Form submitted:", formState);

    // Pour la démonstration, simulons un envoi réussi
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Contáctanos
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
              {!submitted ? (
                <Box component="form" onSubmit={handleSubmit}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 3 }}
                  >
                    Envíanos un mensaje
                  </Typography>

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Nombre"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Asunto"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: "#e91e63",
                      "&:hover": { backgroundColor: "#c2185b" },
                    }}
                  >
                    Enviar mensaje
                  </Button>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center", py: 6 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#4caf50", fontWeight: "bold" }}
                  >
                    ¡Mensaje enviado con éxito!
                  </Typography>
                  <Typography variant="body1">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ mt: 3, color: "#e91e63" }}
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </Box>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                Información de contacto
              </Typography>

              <Box sx={{ mb: 3, display: "flex", alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ mr: 2, color: "#e91e63" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Dirección
                  </Typography>
                  <Typography variant="body2">
                    Av. Ejemplo 1234, San Bernardo, Región Metropolitana, Chile
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "flex-start" }}>
                <PhoneIcon sx={{ mr: 2, color: "#e91e63" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Teléfono
                  </Typography>
                  <Typography variant="body2">+56 9 1234 5678</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "flex-start" }}>
                <EmailIcon sx={{ mr: 2, color: "#e91e63" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Correo electrónico
                  </Typography>
                  <Typography variant="body2">contacto@jockerbar.cl</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: "flex", alignItems: "flex-start" }}>
                <AccessTimeIcon sx={{ mr: 2, color: "#e91e63" }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Horarios
                  </Typography>
                  <Typography variant="body2">
                    Jueves a Sábado: 19:00 - 03:00
                  </Typography>
                  <Typography variant="body2">
                    Domingo: 19:00 - 00:00
                  </Typography>
                </Box>
              </Box>

              {/* Carte fictive - À remplacer par une vraie carte Google Maps */}
              <Box
                sx={{
                  mt: 4,
                  height: 250,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Mapa interactivo (insertar iframe de Google Maps aquí)
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
