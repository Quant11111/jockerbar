"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Instagram,
  Facebook,
  WhatsApp,
  Phone,
  LocationOn,
  AccessTime,
  Favorite,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
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
              width: { xs: "100%", sm: "33.333%" },
              padding: "32px 0 0 32px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                O&apos;Higgins 279, 8071077 San Bernardo, Región Metropolitana,
                Chile
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">
                <Link href="tel:+56998371618" color="inherit" underline="hover">
                  +56 9 9837 1618
                </Link>
              </Typography>
            </Box>
          </Box>

          {/* Horarios */}
          <Box
            sx={{
              width: { xs: "100%", sm: "33.333%" },
              padding: "32px 0 0 32px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Horarios
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
              <AccessTime sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="body2">
                  Lunes - Jueves: 10:00–23:00
                </Typography>
                <Typography variant="body2">Viernes: 10:00–03:00</Typography>
                <Typography variant="body2">Sábado: 13:00–03:00</Typography>
                <Typography variant="body2">Domingo: Cerrado</Typography>
              </Box>
            </Box>
          </Box>

          {/* Redes sociales */}
          <Box
            sx={{
              width: { xs: "100%", sm: "33.333%" },
              padding: "32px 0 0 32px",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <Link
                href="https://www.instagram.com/jokerbar.sanbernardo/"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <Instagram fontSize="large" />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>
                <Facebook fontSize="large" />
              </Link>
              <Link href="https://wa.me/56998371618" color="inherit">
                <WhatsApp fontSize="large" />
              </Link>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Bar, sandwichería y pizzería en San Bernardo
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Jocker Bar San Bernardo. Todos los
          derechos reservados.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ display: "flex", alignItems: "center" }}
          >
            Hecho con{" "}
            <Favorite color="error" fontSize="small" sx={{ mx: 0.5 }} /> por
          </Typography>
          <Link
            href="tel:+33635402450"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", ml: 1 }}
          >
            Quentin LAMAGNERE +33635402450
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
