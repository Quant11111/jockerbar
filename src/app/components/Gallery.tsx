"use client";

import { useState } from "react";
import { Box, Typography, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";

// Liste des images pour la galerie (à remplacer par les vraies images du Instagram du bar)
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Ambiente nocturno en Jockerbar",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Concierto en vivo",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Barra de tragos",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Noche de karaoke",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Fiesta temática",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Clientes disfrutando",
  },
];

export default function Gallery({ limit = 6 }: { limit?: number }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Limiter le nombre d'images affichées si nécessaire
  const images = galleryImages.slice(0, limit);

  const handleOpen = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Momentos Inolvidables
      </Typography>

      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                position: "relative",
                height: 250,
                overflow: "hidden",
                borderRadius: 2,
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  "& .overlay": {
                    opacity: 1,
                  },
                },
              }}
              onClick={() => handleOpen(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                    fontWeight: "bold",
                  }}
                >
                  Ver imagen
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography
          component="a"
          href="https://www.instagram.com/jokerbar.sanbernardo/"
          target="_blank"
          sx={{
            color: "#e91e63",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Síguenos en Instagram para ver más fotos
        </Typography>
      </Box>

      {/* Modal de visualisation d'image */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
            p: 1,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              zIndex: 10,
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              width: { xs: "90vw", sm: "80vw", md: "70vw" },
              height: { xs: "60vh", sm: "70vh", md: "80vh" },
            }}
          >
            {images[currentImage] && (
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </Box>

          <IconButton
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handlePrev}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
            onClick={handleNext}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
