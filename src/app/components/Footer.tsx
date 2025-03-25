"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error al suscribirse:", error);
    }
  };

  return (
    <Box component="footer" sx={{ bgcolor: "#222", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              JOCKERBAR SAN BERNARDO
            </Typography>
            <Typography variant="body2">
              Tu lugar favorito para compartir momentos inolvidables en San
              Bernardo.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MuiLink
                href="https://www.instagram.com/jokerbar.sanbernardo/"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon />
              </MuiLink>
              <MuiLink href="#" target="_blank" color="inherit">
                <FacebookIcon />
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Suscríbete a nuestra newsletter
            </Typography>
            {!subscribed ? (
              <Box component="form" onSubmit={handleSubscribe}>
                <TextField
                  label="Tu correo electrónico"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 1,
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Suscribirse
                </Button>
              </Box>
            ) : (
              <Typography variant="body2">
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </Typography>
            )}
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Jockerbar San Bernardo. Todos los
          derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
