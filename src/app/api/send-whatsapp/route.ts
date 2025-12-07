import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message, landingPage } = body;

    // Validações
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios" },
        { status: 400 }
      );
    }

    // Formatar número de telefone (remover caracteres não numéricos)
    const formattedPhone = phone.replace(/\D/g, "");

    // Validar formato do telefone brasileiro
    if (formattedPhone.length < 10 || formattedPhone.length > 11) {
      return NextResponse.json(
        { error: "Número de telefone inválido" },
        { status: 400 }
      );
    }

    // Adicionar código do país se não tiver
    const fullPhone = formattedPhone.startsWith("55")
      ? formattedPhone
      : `55${formattedPhone}`;

    // Configurações da API WhatsApp
    const whatsappApiUrl = process.env.WHATSAPP_API_URL;
    const destinationNumber = process.env.WHATSAPP_DESTINATION_NUMBER;

    if (!whatsappApiUrl) {
      console.error("WHATSAPP_API_URL não configurada");
      return NextResponse.json(
        { error: "Configuração do WhatsApp incompleta" },
        { status: 500 }
      );
    }

    // Montar mensagem personalizada
    let whatsappMessage = `🆕 *Novo Lead - ${landingPage || "Site"}*\n\n`;
    whatsappMessage += `👤 *Nome:* ${name}\n`;
    whatsappMessage += `📱 *Telefone:* ${phone}\n`;
    if (email) {
      whatsappMessage += `📧 *Email:* ${email}\n`;
    }
    if (message) {
      whatsappMessage += `\n💬 *Mensagem:*\n${message}`;
    }
    whatsappMessage += `\n\n📄 *Origem:* ${landingPage || "Landing Page"}`;

    // Preparar payload para a API do WhatsApp
    const whatsappPayload: any = {
      number: destinationNumber || fullPhone,
      body: whatsappMessage,
      externalKey: `lead-${Date.now()}-${name.replace(/\s/g, "-")}`,
    };

    // Adicionar configurações opcionais
    if (process.env.WHATSAPP_QUEUE_ID) {
      whatsappPayload.queueId = process.env.WHATSAPP_QUEUE_ID;
      whatsappPayload.forceTicketToDepartment = true;
    }

    if (process.env.WHATSAPP_USER_ID) {
      whatsappPayload.userId = parseInt(process.env.WHATSAPP_USER_ID);
      whatsappPayload.forceTicketToUser = true;
    }

    // Enviar para a API do WhatsApp
    const whatsappResponse = await fetch(whatsappApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whatsappPayload),
    });

    if (!whatsappResponse.ok) {
      const errorData = await whatsappResponse.text();
      console.error("Erro ao enviar para WhatsApp:", errorData);
      throw new Error(`Erro na API do WhatsApp: ${whatsappResponse.status}`);
    }

    const whatsappData = await whatsappResponse.json();

    // Retornar sucesso
    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso!",
        data: whatsappData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return NextResponse.json(
      {
        error: "Erro ao enviar mensagem. Tente novamente.",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
