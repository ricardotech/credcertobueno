import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formatCPF } from "@/lib/cpf";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData, simulationData, clientData } = body;

    const { email, telefone } = formData;
    const { valorEmprestimo, prazo, parcela, taxa, totalPagar } = simulationData;
    const {
      nome,
      cpf,
      idade,
      endereco,
      bairro,
      cidade,
      uf,
      cep,
      beneficioNb,
      beneficioSituacao,
      especie,
      bancoCompleto,
      agencia,
      conta,
      tipoConta,
    } = clientData;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === "true" || true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ==========================================
    // ESTILOS E FUNÇÕES DE TEMPLATE (MINIMALISTA)
    // ==========================================
    const primaryColor = "#8FDB00";
    const darkColor = "#222222";
    const lightGray = "#f7f7f7";
    const borderColor = "#ebebeb";
    const baseFont = "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif";

    // Footer Padrão (Anti-Spam e Profissional)
    const renderFooter = () => `
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid ${borderColor}; text-align: center; color: #717171; font-size: 12px; line-height: 1.5;">
        <p style="margin: 0 0 10px 0;">
          <strong>CredCertoBueno</strong><br>
          Anápolis, GO<br>
          <a href="mailto:contato@credcertobueno.com.br" style="color: #717171; text-decoration: underline;">contato@credcertobueno.com.br</a>
        </p>
        <p style="margin: 0 0 10px 0;">
          <a href="https://credcertobueno.com.br" style="color: ${darkColor}; text-decoration: none; margin: 0 10px;">Acessar Site</a> | 
          <a href="https://w.app/credcertobueno" style="color: ${darkColor}; text-decoration: none; margin: 0 10px;">Falar no WhatsApp</a>
        </p>
        <p style="margin: 0; color: #a0a0a0;">
          Você está recebendo este e-mail porque realizou uma simulação em nosso site.<br>
          Por favor, não responda a esta mensagem automática.
        </p>
      </div>
    `;

    // ==========================================
    // 1. E-MAIL PARA A EQUIPE INTERNA
    // ==========================================
    const teamHtmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Solicitação de Atendimento</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: ${baseFont}; background-color: ${lightGray}; color: ${darkColor};">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${lightGray}; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid ${borderColor}; overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="padding: 32px 32px 24px 32px;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: ${darkColor};">Nova solicitação recebida</h1>
                    <p style="margin: 8px 0 0 0; font-size: 16px; color: #717171;">O cliente <strong>${nome}</strong> realizou uma simulação.</p>
                  </td>
                </tr>
                <!-- Content -->
                <tr>
                  <td style="padding: 0 32px 32px 32px;">
                    <div style="background-color: ${lightGray}; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                      <h2 style="margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #717171;">Contato do Cliente</h2>
                      <p style="margin: 0 0 8px 0; font-size: 16px;"><strong>E-mail:</strong> <a href="mailto:${email}" style="color: ${darkColor}; text-decoration: none;">${email}</a></p>
                      <p style="margin: 0; font-size: 16px;"><strong>Telefone:</strong> <a href="https://wa.me/55${telefone.replace(/\D/g, '')}" style="color: ${darkColor}; text-decoration: none;">${telefone}</a></p>
                    </div>

                    <div style="border-bottom: 1px solid ${borderColor}; padding-bottom: 20px; margin-bottom: 20px;">
                      <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Detalhes da Simulação</h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 16px;">
                        <tr><td style="padding: 4px 0; color: #717171;">Valor Solicitado</td><td align="right" style="padding: 4px 0; font-weight: 600;">R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}</td></tr>
                        <tr><td style="padding: 4px 0; color: #717171;">Prazo</td><td align="right" style="padding: 4px 0; font-weight: 600;">${prazo}x</td></tr>
                        <tr><td style="padding: 4px 0; color: #717171;">Valor da Parcela</td><td align="right" style="padding: 4px 0; font-weight: 600;">R$ ${Number(parcela).toFixed(2).replace('.', ',')}</td></tr>
                      </table>
                    </div>

                    <div style="border-bottom: 1px solid ${borderColor}; padding-bottom: 20px; margin-bottom: 20px;">
                      <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Dados do Benefício</h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 16px;">
                        <tr><td style="padding: 4px 0; color: #717171;">Benefício/Matrícula</td><td align="right" style="padding: 4px 0; font-weight: 600;">${beneficioNb}</td></tr>
                        <tr><td style="padding: 4px 0; color: #717171;">Espécie</td><td align="right" style="padding: 4px 0; font-weight: 600;">${especie}</td></tr>
                        <tr><td style="padding: 4px 0; color: #717171;">Situação</td><td align="right" style="padding: 4px 0; font-weight: 600;">${beneficioSituacao}</td></tr>
                      </table>
                    </div>

                    <div style="margin-bottom: 20px;">
                      <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Dados Cadastrais</h2>
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #717171;"><strong>CPF:</strong> ${formatCPF(cpf)} | <strong>Idade:</strong> ${idade} anos</p>
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #717171;"><strong>Endereço:</strong> ${endereco}, ${bairro} - ${cidade}/${uf} (${cep})</p>
                      <p style="margin: 0; font-size: 14px; color: #717171;"><strong>Banco:</strong> ${bancoCompleto} | <strong>Ag:</strong> ${agencia} <strong>Cc:</strong> ${conta}</p>
                    </div>

                    <div style="text-align: center; margin-top: 32px;">
                      <a href="https://wa.me/55${telefone.replace(/\D/g, '')}" style="display: inline-block; background-color: ${darkColor}; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; padding: 14px 32px; border-radius: 8px;">
                        Iniciar Atendimento no WhatsApp
                      </a>
                    </div>

                    ${renderFooter()}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const teamPlainContent = `Nova solicitação de atendimento.\nCliente: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nValor: R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}\nPrazo: ${prazo}x`;

    // ==========================================
    // 2. E-MAIL PARA O CLIENTE (CONFIRMAÇÃO)
    // ==========================================
    const clientHtmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmação de Simulação - CredCertoBueno</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: ${baseFont}; background-color: ${lightGray}; color: ${darkColor};">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${lightGray}; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; border: 1px solid ${borderColor}; overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 32px 24px 32px; text-align: center;">
                    <div style="display: inline-block; background-color: #E8F5E9; color: #1C4200; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 20px; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;">
                      Solicitação Recebida
                    </div>
                    <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: ${darkColor};">Olá, ${nome.split(' ')[0]}</h1>
                    <p style="margin: 12px 0 0 0; font-size: 18px; color: #717171; line-height: 1.5;">
                      Recebemos sua solicitação de simulação. Nossa equipe de especialistas já está analisando seu perfil e entrará em contato muito em breve.
                    </p>
                  </td>
                </tr>
                <!-- Content -->
                <tr>
                  <td style="padding: 0 32px 32px 32px;">
                    <div style="border: 1px solid ${borderColor}; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                      <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 1px solid ${borderColor}; padding-bottom: 12px;">Resumo da sua solicitação</h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 16px; line-height: 1.8;">
                        <tr><td style="color: #717171;">Valor Solicitado</td><td align="right" style="font-weight: 600;">R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}</td></tr>
                        <tr><td style="color: #717171;">Prazo Escolhido</td><td align="right" style="font-weight: 600;">${prazo} meses</td></tr>
                        <tr><td style="color: #717171;">Valor da Parcela</td><td align="right" style="font-weight: 600;">R$ ${Number(parcela).toFixed(2).replace('.', ',')}</td></tr>
                      </table>
                    </div>

                    <div style="background-color: ${lightGray}; border-radius: 12px; padding: 24px; text-align: center;">
                      <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Próximos Passos</h3>
                      <p style="margin: 0 0 20px 0; font-size: 15px; color: #717171; line-height: 1.5;">
                        Aguarde nosso contato via WhatsApp para darmos andamento à formalização do seu contrato de forma rápida e segura.
                      </p>
                      <a href="https://w.app/credcertobueno" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; padding: 14px 32px; border-radius: 8px;">
                        Falar com Consultor Agora
                      </a>
                    </div>

                    ${renderFooter()}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const clientPlainContent = `Olá ${nome},\nRecebemos sua solicitação de empréstimo no valor de R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}. Nossa equipe entrará em contato em breve via WhatsApp.\nDúvidas? Fale conosco: contato@credcertobueno.com.br`;

    // ==========================================
    // 3. ENVIAR OS E-MAILS
    // ==========================================
    
    // Opções do e-mail para a Equipe
    const teamMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `[Nova Simulação] ${nome} - R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}`,
      text: teamPlainContent,
      html: teamHtmlContent,
    };

    // Opções do e-mail para o Cliente
    const clientMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email, // Envia para o e-mail preenchido no formulário
      subject: `Sua solicitação foi recebida com sucesso!`,
      text: clientPlainContent,
      html: clientHtmlContent,
    };

    // Dispara ambos os e-mails em paralelo
    const [teamInfo, clientInfo] = await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return NextResponse.json(
      { 
        message: "E-mails enviados com sucesso", 
        teamMessageId: teamInfo.messageId,
        clientMessageId: clientInfo.messageId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
