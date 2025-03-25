"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#222", color: "#fff" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            JOCKERBAR
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" component={Link} href="/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} href="/eventos">
              Eventos
            </Button>
            <Button color="inherit" component={Link} href="/galeria">
              Galería
            </Button>
            <Button color="inherit" component={Link} href="/nosotros">
              Nosotros
            </Button>
            <Button color="inherit" component={Link} href="/contacto">
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
