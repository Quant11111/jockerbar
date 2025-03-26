"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "¡Te has suscrito con éxito! Pronto recibirás nuestras novedades."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.error || "Ha ocurrido un error. Inténtalo de nuevo más tarde."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Ha ocurrido un error. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <EmailIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="h5" component="h2">
          Suscríbete a nuestra newsletter
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Mantente informado de nuestros eventos, promociones y novedades.
      </Typography>

      {status === "success" && (
        <Alert severity="success" sx={{ mb: 3 }}>
          <AlertTitle>¡Éxito!</AlertTitle>
          {message}
        </Alert>
      )}

      {status === "error" && (
        <Alert severity="error" sx={{ mb: 3 }}>
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          <TextField
            required
            fullWidth
            type="email"
            label="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            error={status === "error"}
            sx={{ flexGrow: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={status === "loading"}
            sx={{
              height: { sm: "56px" },
              minWidth: { xs: "100%", sm: "120px" },
            }}
          >
            Suscribirse
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewsletterForm;
