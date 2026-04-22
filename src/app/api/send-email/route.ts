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

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1C4200; border-bottom: 2px solid #8FDB00; padding-bottom: 10px;">Nova Solicitação de Empréstimo</h2>
        
        <p>Olá equipe,</p>
        <p>Temos um novo cliente que acabou de preencher a simulação de empréstimo. Abaixo estão todos os dados detalhados para dar andamento ao atendimento.</p>
        
        <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #E5E7EB;">
          <h3 style="color: #1C4200; margin-top: 0;">📋 Contato do Cliente</h3>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
        </div>

        <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #E5E7EB;">
          <h3 style="color: #1C4200; margin-top: 0;">💰 Dados da Simulação</h3>
          <p><strong>Valor Solicitado (Empréstimo):</strong> R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}</p>
          <p><strong>Prazo:</strong> ${prazo}x (meses)</p>
          <p><strong>Valor da Parcela:</strong> R$ ${Number(parcela).toFixed(2).replace('.', ',')}</p>
          <p><strong>Taxa de Juros:</strong> ${taxa}% a.m.</p>
          <p><strong>Total a Pagar (Final):</strong> R$ ${Number(totalPagar).toFixed(2).replace('.', ',')}</p>
        </div>

        <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #E5E7EB;">
          <h3 style="color: #1C4200; margin-top: 0;">👤 Dados Pessoais</h3>
          <p><strong>CPF:</strong> ${formatCPF(cpf)}</p>
          <p><strong>Idade:</strong> ${idade} anos</p>
          <p><strong>Endereço:</strong> ${endereco}, Bairro: ${bairro}</p>
          <p><strong>Cidade/UF:</strong> ${cidade}/${uf} - <strong>CEP:</strong> ${cep}</p>
        </div>

        <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #E5E7EB;">
          <h3 style="color: #1C4200; margin-top: 0;">📝 Dados do Benefício</h3>
          <p><strong>Número do Benefício / Matrícula:</strong> ${beneficioNb}</p>
          <p><strong>Espécie:</strong> ${especie}</p>
          <p><strong>Situação:</strong> ${beneficioSituacao}</p>
        </div>

        <div style="background-color: #F9FAFB; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #E5E7EB;">
          <h3 style="color: #1C4200; margin-top: 0;">🏦 Dados Bancários</h3>
          <p><strong>Banco:</strong> ${bancoCompleto}</p>
          <p><strong>Agência:</strong> ${agencia}</p>
          <p><strong>Conta:</strong> ${conta} (${tipoConta})</p>
        </div>

        <p style="font-size: 12px; color: #777; border-top: 1px solid #E5E7EB; padding-top: 10px;">
          Esta mensagem foi enviada automaticamente pelo sistema da CredCertoBueno após a simulação na página de consulta online.
        </p>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `[Nova Simulação] ${nome} - Empréstimo de R$ ${Number(valorEmprestimo).toFixed(2).replace('.', ',')}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado com sucesso", messageId: info.messageId },
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
