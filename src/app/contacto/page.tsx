import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Box } from "@mui/material";

export default function ContactoPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Contact />
      </Box>

      <Footer />
    </Box>
  );
}
