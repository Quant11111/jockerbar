import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";

// Équipe fictive - à remplacer par les vraies personnes
const teamMembers = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Fundador y Gerente",
    image: "/images/team-1.jpg",
    bio: "Carlos fundó Jockerbar con la visión de crear un espacio único para los amantes de la música y las experiencias sociales en San Bernardo.",
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Encargada de Eventos",
    image: "/images/team-2.jpg",
    bio: "Ana se encarga de coordinar todos los eventos y conciertos, asegurando que cada experiencia sea memorable para nuestros clientes.",
  },
  {
    id: 3,
    name: "Diego Fuentes",
    role: "Bartender Principal",
    image: "/images/team-3.jpg",
    bio: "Con más de 10 años de experiencia, Diego es el maestro detrás de nuestros cócteles de autor y la selección de bebidas del bar.",
  },
  {
    id: 4,
    name: "Valentina Soto",
    role: "Relaciones Públicas",
    image: "/images/team-4.jpg",
    bio: "Valentina maneja nuestras redes sociales y relaciones con la comunidad, siempre buscando nuevas formas de conectar con nuestros clientes.",
  },
];

export default function NosotrosPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero section pour la page Nosotros */}
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
              Nuestra Historia
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto" }}>
              Conoce más sobre Jockerbar San Bernardo y las personas que hacen
              posible este espacio único.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg">
          {/* Composant About */}
          <About />

          {/* Section équipe */}
          <Box sx={{ py: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              Nuestro Equipo
            </Typography>

            <Grid container spacing={4}>
              {teamMembers.map((member) => (
                <Grid item key={member.id} xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      textAlign: "center",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "translateY(-8px)" },
                    }}
                  >
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 2,
                        border: "4px solid #e91e63",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ px: 2 }}>
                      {member.bio}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Section valeurs */}
          <Box
            sx={{
              py: 8,
              backgroundColor: "#f5f5f5",
              borderRadius: 4,
              px: 4,
              mb: 8,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: "bold" }}
            >
              Nuestros Valores
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#e91e63" }}
                  >
                    Comunidad
                  </Typography>
                  <Typography variant="body2">
                    Creemos en el poder de unir a las personas a través de
                    experiencias compartidas, creando un sentido de pertenencia
                    y comunidad.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#e91e63" }}
                  >
                    Creatividad
                  </Typography>
                  <Typography variant="body2">
                    Nos apasiona la innovación y la creatividad, siempre
                    buscando nuevas formas de sorprender y emocionar a nuestros
                    clientes.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#e91e63" }}
                  >
                    Calidad
                  </Typography>
                  <Typography variant="body2">
                    Nos comprometemos a ofrecer la más alta calidad en todo lo
                    que hacemos, desde nuestras bebidas hasta nuestros eventos y
                    servicio al cliente.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
