import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import EventIcon from "@mui/icons-material/Event";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        position: "relative",
        height: { xs: "500px", md: "70vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(/images/bar-hero.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 700,
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          JOCKER BAR
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
            fontWeight: 400,
            mb: 4,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          El mejor lugar para disfrutar en San Bernardo
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<LocalBarIcon />}
            component={Link}
            href="/menu"
            sx={{
              borderRadius: 2,
              py: 1.5,
              px: 3,
              fontSize: "1rem",
            }}
          >
            Ver Menú
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<EventIcon />}
            component={Link}
            href="/eventos"
            sx={{
              borderRadius: 2,
              py: 1.5,
              px: 3,
              fontSize: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: "white",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Próximos Eventos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
