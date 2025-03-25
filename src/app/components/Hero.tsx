"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero-background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 10, md: 20 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            mb: 4,
          }}
        >
          JOCKERBAR SAN BERNARDO
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Tu lugar favorito para compartir momentos inolvidables en San
          Bernardo. Conciertos, karaoke, eventos temáticos y mucho más.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/eventos"
            sx={{
              backgroundColor: "#e91e63",
              "&:hover": { backgroundColor: "#c2185b" },
              py: 1.5,
              px: 4,
              fontWeight: "bold",
            }}
          >
            Ver Próximos Eventos
          </Button>

          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/nosotros"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": {
                borderColor: "#e91e63",
                backgroundColor: "rgba(233, 30, 99, 0.1)",
              },
              py: 1.5,
              px: 4,
              fontWeight: "bold",
            }}
          >
            Conocer Más
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
