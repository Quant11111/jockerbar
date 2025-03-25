"use client";

import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import Image from "next/image";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import PeopleIcon from "@mui/icons-material/People";

export default function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Sobre Jockerbar
            </Typography>

            <Typography variant="body1" paragraph>
              En el corazón de San Bernardo, Jockerbar nació con la misión de
              crear un espacio donde la música, las bebidas de calidad y la
              buena compañía se combinan para ofrecer momentos inolvidables.
            </Typography>

            <Typography variant="body1" paragraph>
              Desde nuestros inicios, nos hemos convertido en el punto de
              encuentro preferido para quienes buscan disfrutar de conciertos de
              artistas locales, noches de karaoke y fiestas temáticas en un
              ambiente acogedor y con personalidad única.
            </Typography>

            <Typography variant="body1">
              En Jockerbar creemos que cada noche puede ser especial cuando
              estás rodeado de buena gente, buena música y buenos tragos. ¡Te
              esperamos para que formes parte de nuestra historia!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: 400,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/about-bar.jpg"
                alt="Interior de Jockerbar"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          component="h3"
          align="center"
          sx={{ mt: 12, mb: 6, fontWeight: "bold" }}
        >
          ¿Por qué elegir Jockerbar?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <MusicNoteIcon sx={{ fontSize: 60, color: "#e91e63", mb: 2 }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Música en Vivo
                </Typography>
                <Typography variant="body2">
                  Disfrutarás de los mejores conciertos de artistas locales y
                  nacionales en un ambiente íntimo y con excelente sonido. Cada
                  semana tenemos propuestas musicales diferentes.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <LocalBarIcon sx={{ fontSize: 60, color: "#e91e63", mb: 2 }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Cocteles de Autor
                </Typography>
                <Typography variant="body2">
                  Nuestra barra ofrece bebidas clásicas y creaciones originales
                  preparadas por bartenders experimentados. Tenemos opciones
                  para todos los gustos, desde cervezas artesanales hasta
                  cócteles únicos.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <PeopleIcon sx={{ fontSize: 60, color: "#e91e63", mb: 2 }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Ambiente Único
                </Typography>
                <Typography variant="body2">
                  En Jockerbar encontrarás un espacio diseñado para socializar y
                  pasarlo bien. Nuestra decoración, iluminación y atención están
                  pensadas para crear la mejor experiencia posible para nuestros
                  clientes.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
