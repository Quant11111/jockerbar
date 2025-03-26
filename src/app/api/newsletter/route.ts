import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "src/app/api/newsletter/subscribers.json"
);

// Assurez-vous que le fichier existe
function ensureFileExists() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ subscribers: [] }), "utf8");
  }
}

// Obtenir les données des abonnés actuels
function getSubscribers() {
  ensureFileExists();
  const data = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(data);
}

// Sauvegarder les données des abonnés
function saveSubscribers(data: { subscribers: string[] }) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
}

// Ajouter un abonné
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const data = getSubscribers();

    // Vérifier si l'email existe déjà
    if (data.subscribers.includes(email)) {
      return NextResponse.json(
        { error: "Email ya está registrado" },
        { status: 409 }
      );
    }

    // Ajouter l'email
    data.subscribers.push(email);
    saveSubscribers(data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Désabonner
export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const data = getSubscribers();

    // Vérifier si l'email existe
    if (!data.subscribers.includes(email)) {
      return NextResponse.json(
        { error: "Email no encontrado" },
        { status: 404 }
      );
    }

    // Supprimer l'email
    data.subscribers = data.subscribers.filter((e: string) => e !== email);
    saveSubscribers(data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error removing subscriber:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
