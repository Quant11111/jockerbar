import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";

// Types pour les menus
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Données du menu
const pizzaMenu: MenuSection = {
  title: "Pizzas",
  items: [
    {
      name: "Margherita",
      description: "Salsa de tomate, mozzarella y albahaca fresca.",
      price: "$8.500",
    },
    {
      name: "Pepperoni",
      description: "Salsa de tomate, mozzarella y pepperoni.",
      price: "$9.500",
    },
    {
      name: "Vegetariana",
      description:
        "Salsa de tomate, mozzarella, pimientos, champiñones y cebolla.",
      price: "$9.000",
    },
    {
      name: "Especial Jocker",
      description:
        "Salsa de tomate, mozzarella, jamón, champiñones, aceitunas y orégano.",
      price: "$10.500",
    },
    {
      name: "Hawaiana",
      description: "Salsa de tomate, mozzarella, jamón y piña.",
      price: "$9.000",
    },
  ],
};

const sandwichMenu: MenuSection = {
  title: "Sándwiches",
  items: [
    {
      name: "Clásico",
      description:
        "Pan artesanal, jamón, queso, lechuga, tomate y mayonesa casera.",
      price: "$6.500",
    },
    {
      name: "Vegetariano",
      description:
        "Pan integral, aguacate, queso, lechuga, tomate y berenjenas grilladas.",
      price: "$7.000",
    },
    {
      name: "Pollo",
      description:
        "Pan ciabatta, pollo grillado, lechuga, tomate, cebolla caramelizada y salsa especial.",
      price: "$7.500",
    },
    {
      name: "Chacarero",
      description: "Pan frica, carne de res, tomate, ají verde y mayonesa.",
      price: "$8.000",
    },
    {
      name: "Italiano",
      description: "Pan marraqueta, carne de res, tomate, palta y mayonesa.",
      price: "$8.500",
    },
  ],
};

const drinksMenu: MenuSection = {
  title: "Bebidas",
  items: [
    {
      name: "Cerveza Artesanal",
      description: "Variedad de cervezas artesanales locales.",
      price: "Desde $3.500",
    },
    {
      name: "Cerveza Nacional",
      description: "Marcas nacionales.",
      price: "$2.500",
    },
    { name: "Vino por Copa", description: "Tinto o blanco.", price: "$3.000" },
    {
      name: "Pisco Sour",
      description: "Pisco, limón, azúcar y clara de huevo.",
      price: "$4.500",
    },
    {
      name: "Mojito",
      description: "Ron, limón, menta, azúcar y soda.",
      price: "$5.000",
    },
    { name: "Gin Tonic", description: "Gin, tónica y limón.", price: "$5.500" },
    {
      name: "Refrescos",
      description: "Bebidas gaseosas, jugos naturales.",
      price: "Desde $1.500",
    },
  ],
};

// Composant pour une section du menu
const MenuSection: React.FC<{
  section: MenuSection;
  icon: React.ReactNode;
}> = ({ section, icon }) => {
  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          {icon}
          <Typography variant="h4" component="h2" sx={{ ml: 2 }}>
            {section.title}
          </Typography>
        </Box>
        <List>
          {section.items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider sx={{ my: 2 }} />}
              <ListItem sx={{ display: "block", px: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="h6" component="span">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    color="primary.main"
                    fontWeight="bold"
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default function Menu() {
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
            Nuestro Menú
          </Typography>
          <Typography variant="h5">
            Deliciosas pizzas, sándwiches y bebidas preparadas con los mejores
            ingredientes.
          </Typography>
        </Container>
      </Box>

      {/* Menu Sections */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <MenuSection
          section={pizzaMenu}
          icon={<LocalPizzaIcon color="primary" fontSize="large" />}
        />
        <MenuSection
          section={sandwichMenu}
          icon={<RestaurantIcon color="primary" fontSize="large" />}
        />
        <MenuSection
          section={drinksMenu}
          icon={<LocalBarIcon color="primary" fontSize="large" />}
        />

        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            ¿Tienes alguna restricción alimentaria?
          </Typography>
          <Typography>
            Consulta a nuestro personal sobre opciones sin gluten, vegetarianas
            o veganas.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            *Precios sujetos a cambios sin previo aviso.
          </Typography>
        </Box>
      </Container>

      <Footer />
    </main>
  );
}
