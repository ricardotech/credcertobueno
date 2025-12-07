# Integração WhatsApp - Formulários de Landing Pages

Este projeto inclui formulários integrados em todas as landing pages que enviam automaticamente os dados dos leads para o WhatsApp via API.

## Como Funciona

Quando um visitante preenche o formulário em qualquer landing page:
1. Os dados são enviados para a API route `/api/send-whatsapp`
2. A API formata uma mensagem com os dados do lead
3. A mensagem é enviada para a API do WhatsApp configurada
4. O lead recebe confirmação de envio

## Configuração

### 1. Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

### 2. Configurar a URL da API do WhatsApp

Acesse sua plataforma de WhatsApp e siga os passos:

1. Vá em **Configurações → API/Webhook**
2. Clique em **ADICIONAR**
3. Preencha:
   - **Nome da API**: Nome descritivo (ex: "Leads CredCertoBueno")
   - **Enviar por**: Selecione o canal do WhatsApp
   - **Ação no atendimento após o envio**: Configure conforme necessário
4. Clique em **Salvar**
5. Copie a **URL autenticada** gerada

### 3. Editar o arquivo .env.local

```env
# URL autenticada da API do WhatsApp (obtida no passo anterior)
WHATSAPP_API_URL=https://sua-plataforma.com/api/messages/send/your-token-here

# Número do WhatsApp para onde serão enviadas as mensagens
# Formato: Código do país + DDD + número (ex: 5562933388331)
WHATSAPP_DESTINATION_NUMBER=5562933388331

# OPCIONAL: ID do departamento (queueId)
# Encontrado em Configurações -> Departamentos
WHATSAPP_QUEUE_ID=

# OPCIONAL: ID do usuário/atendente (userId)
# Para direcionar leads para um atendente específico
WHATSAPP_USER_ID=
```

### 4. Reiniciar o servidor

```bash
npm run dev
```

## Formato da Mensagem Enviada

A mensagem enviada via WhatsApp terá o seguinte formato:

```
🆕 *Novo Lead - Nome da Landing Page*

👤 *Nome:* João Silva
📱 *Telefone:* (62) 99999-9999
📧 *Email:* joao@email.com

💬 *Mensagem:*
Gostaria de solicitar crédito consignado

📄 *Origem:* CLT/FGTS - Crédito para Trabalhadores
```

## Landing Pages com Formulários

Os formulários foram adicionados nas seguintes páginas:

1. **Home** (`/`) - Formulário geral de contato
2. **CLT/FGTS** (`/clt-fgts`) - Crédito para trabalhadores CLT
3. **INSS** (`/inss`) - Crédito consignado para aposentados
4. **Seguro Financiamento Veicular** (`/seguro-financiamento-veicular`) - Ressarcimento de seguro
5. **Servidor Estadual** (`/servidor-estadual`) - Crédito para servidores estaduais
6. **Servidor Municipal** (`/servidor-municipal`) - Crédito para servidores municipais
7. **SIAPE** (`/siape`) - Crédito para servidores federais
8. **Simulador** (`/simulador`) - Formulário pós-simulação

## Personalização

O componente `LeadForm` aceita as seguintes props para personalização:

```tsx
<LeadForm
  landingPage="Nome da Página"        // Identificador da origem do lead
  title="Título do Formulário"        // Título exibido
  subtitle="Subtítulo"                 // Subtítulo exibido
  showEmail={true}                     // Mostrar campo de email (padrão: true)
  showMessage={true}                   // Mostrar campo de mensagem (padrão: true)
  buttonText="Texto do Botão"         // Texto do botão de envio
  successMessage="Mensagem de sucesso" // Mensagem após envio bem-sucedido
  className="classes-customizadas"     // Classes CSS adicionais
/>
```

## Estrutura de Arquivos

```
src/
├── app/
│   ├── api/
│   │   └── send-whatsapp/
│   │       └── route.ts           # API route para enviar WhatsApp
│   ├── components/
│   │   └── LeadForm/
│   │       └── index.tsx          # Componente do formulário
│   ├── page.tsx                   # Home com formulário
│   ├── clt-fgts/page.tsx         # Página CLT/FGTS com formulário
│   ├── inss/page.tsx             # Página INSS com formulário
│   └── ... (demais páginas)
├── .env.example                   # Exemplo de variáveis de ambiente
└── .env.local                     # Suas configurações (não comitar!)
```

## Validações

O formulário valida:
- Nome completo (obrigatório)
- Telefone/WhatsApp (obrigatório, formato brasileiro)
- Email (opcional, formato válido)
- Mensagem (opcional)

## Tratamento de Erros

Se houver erro no envio:
- Mensagem de erro é exibida para o usuário
- Detalhes do erro são logados no console do servidor
- Usuário pode tentar novamente

## Segurança

- A URL da API do WhatsApp deve ser mantida em segredo (nunca comitar o .env.local)
- Todas as requisições são validadas
- Dados são sanitizados antes do envio

## Suporte

Para dúvidas ou problemas:
1. Verifique se as variáveis de ambiente estão corretas
2. Confirme que a URL da API do WhatsApp está ativa
3. Verifique os logs do servidor para detalhes de erros
