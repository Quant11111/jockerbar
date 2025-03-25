import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Chemin vers le fichier JSON de stockage des emails
const dataPath = path.join(process.cwd(), "data");
const subscribersPath = path.join(dataPath, "subscribers.json");

// Assurer que le dossier data existe
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath, { recursive: true });
}

// Assurer que le fichier subscribers.json existe
if (!fs.existsSync(subscribersPath)) {
  fs.writeFileSync(
    subscribersPath,
    JSON.stringify({ subscribers: [] }),
    "utf-8"
  );
}

// Fonction pour lire les données des abonnés
function getSubscribers() {
  const data = fs.readFileSync(subscribersPath, "utf-8");
  return JSON.parse(data);
}

// Fonction pour écrire les données des abonnés
function writeSubscribers(data: { subscribers: string[] }) {
  fs.writeFileSync(subscribersPath, JSON.stringify(data, null, 2), "utf-8");
}

// POST - Ajouter un nouvel abonné
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Correo electrónico inválido" },
        { status: 400 }
      );
    }

    const data = getSubscribers();

    // Vérifier si l'email existe déjà
    if (data.subscribers.includes(email)) {
      return NextResponse.json(
        { success: false, message: "Ya estás suscrito a nuestra newsletter" },
        { status: 400 }
      );
    }

    // Ajouter le nouvel email
    data.subscribers.push(email);
    writeSubscribers(data);

    return NextResponse.json(
      { success: true, message: "¡Gracias por suscribirte!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

// DELETE - Désabonner un utilisateur
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Correo electrónico no proporcionado" },
        { status: 400 }
      );
    }

    const data = getSubscribers();

    // Filtrer l'email à supprimer
    data.subscribers = data.subscribers.filter((e: string) => e !== email);
    writeSubscribers(data);

    return NextResponse.json(
      { success: true, message: "Te has dado de baja correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing subscriber:", error);
    return NextResponse.json(
      { success: false, message: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
