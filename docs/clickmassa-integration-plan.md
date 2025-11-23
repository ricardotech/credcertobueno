# Plano de Integração com o Click Massa (leads)

## 1. Estado atual do fluxo de leads
- **Formulário principal**: o único ponto de captura está no componente `CTAContactSection`, renderizado na home (`src/app/page.tsx`). O formulário é client-side, armazena os campos em estado local e, no envio, apenas gera um `console.log` sem chamar nenhum backend ou serviço externo.
- **Campos coletados**: nome, e-mail, telefone/WhatsApp, tipo de crédito (seleção) e mensagem opcional.
- **Lacunas**:
  - Não há endpoint interno para receber o POST do formulário.
  - Não existe integração com o pipeline/CRM (Click Massa) nem persistência local.
  - Ausência de validação estrutural/normalização (telefone, e-mail), rate limiting ou telemetria.

## 2. Metas da integração
1. Enviar cada submissão de formulário para o pipeline atual no Click Massa (ou Pipedrive por trás dele) com mapeamento claro de colunas/campos.
2. Centralizar configuração sensível (API key, IDs de pipeline/estágio, ownerId, URLs) via variáveis de ambiente e, idealmente, uma tela/admin simples para leitura desses valores.
3. Garantir robustez: validação, tratamento de erros, logging e testes automatizados.

## 3. Informação necessária da API do Click Massa
- **Autenticação**: tipo (API key, Bearer token), cabeçalho/param esperado e políticas de expiração/refresh.
- **Recursos**: endpoints para criação de lead/deal, leitura de pipelines e campos (colunas), e como referenciar estágio e owner.
- **Limites**: rate limits, restrições de payload e SLA de resposta/erro.
- **Campos customizados**: IDs/names das colunas obrigatórias para mapear `name`, `email`, `phone`, `creditType`, `message` e origem (ex.: `utm` ou `source=site`).

## 4. Arquitetura proposta
- **API interna** (`src/app/api/leads/route.ts`): handler POST server-side que recebe o JSON do formulário, valida, normaliza telefone, adiciona metadados (origem, timestamp, página) e chama um cliente de SDK fino para o Click Massa.
- **Cliente Click Massa** (`src/lib/clickmassa.ts`): função pura que recebe payload normalizado e monta a requisição HTTP (endpoint, headers com API key, timeout, retry simples em 429/5xx). Inclui mapeamento de campos para colunas do pipeline.
- **Frontend**: o `CTAContactSection` passa a fazer `fetch('/api/leads')`, trata loading/sucesso/erro e bloqueia reenvio duplicado. Mantém CTA de WhatsApp como alternativa.
- **Configuração**: variáveis em `.env.local` (não commitadas) como `CLICKMASSA_API_KEY`, `CLICKMASSA_BASE_URL`, `CLICKMASSA_PIPELINE_ID`, `CLICKMASSA_STAGE_ID`, `CLICKMASSA_OWNER_ID`, `CLICKMASSA_SOURCE`. No futuro, criar página protegida (ex.: `/admin/integrations`) só leitura para exibir quais chaves estão configuradas.
- **Segurança/observabilidade**: rate limiting no endpoint (por IP), logs estruturados de erro/sucesso, captura de status/latência e alerta em caso de falha consecutiva.

## 5. Passo a passo de implementação
1. **Descobrir schema do pipeline**
   - Usar os endpoints de listagem de pipelines/colunas do Click Massa para identificar IDs de campos obrigatórios e tipos (texto, número, select) e documentá-los em `docs/clickmassa-fields.md`.
   - Definir tabela de mapeamento `campo do site -> coluna Click Massa`.
2. **Criar cliente HTTP**
   - Implementar em `src/lib/clickmassa.ts` função `createLead(payload, config)` com fetch/axios nativo do Next e tratamento de erros (429/500 com backoff simples, logs). Adicionar validação de resposta.
3. **API route**
   - Em `src/app/api/leads/route.ts`, validar body (nome, e-mail, telefone, tipo de crédito), normalizar telefone (E.164), adicionar origem (`source: web`), e chamar `createLead`. Retornar status 201/200 ou 502 com mensagem amigável.
4. **Atualizar formulário**
   - No `CTAContactSection`, trocar `console.log` por POST para `/api/leads`, exibir estados de carregamento/erro e bloqueio de envio enquanto processa.
   - Incluir coleta opcional de consentimento LGPD, se aplicável.
5. **Configuração/GUI**
   - Criar seção de leitura em `/admin/integrations` (SSR) que mostra quais variáveis estão setadas (sem revelar segredo) e o pipeline/estágio configurados, para facilitar suporte.
6. **Monitoramento**
   - Centralizar logs de integração (sucesso/erro) e, se possível, enviar métricas para uma ferramenta já usada (ex.: console + futura integração com observabilidade).

## 6. Plano de testes automatizados
- **Cliente Click Massa**
  - Mock de fetch para garantir montagem de headers (`Authorization` ou chave), URL e payload conforme mapeamento.
  - Retentativa em 429/5xx com backoff curto e limite de tentativas.
  - Erro claro quando variáveis de ambiente obrigatórias estão ausentes.
- **API route**
  - Teste de validação: rejeita payload sem `name/email/phone/creditType` com 400.
  - Teste de happy path: retorna 201 quando o cliente responde 200/201.
  - Teste de propagação de erro: responde 502 quando o cliente lança erro, mantendo mensagem sanitizada.
- **Formulário**
  - Teste de integração (React Testing Library) validando que submit chama `/api/leads` com corpo esperado e mostra estado de sucesso/erro.

## 7. Evidências e próximos passos
- Após implementar, registrar exemplos de payload enviado e resposta recebida em `docs/clickmassa-fields.md`.
- Checklist de go-live: chaves configuradas em produção, rate limit ativo, monitoramento de erros ligado e owners/pipeline validados.
