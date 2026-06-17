# Informações da API do Click Massa: status atual

## O que temos no repositório
- Nenhum manual, especificação OpenAPI ou exemplo de chamada da API do Click Massa foi encontrado neste repositório ou nos arquivos locais. Não há referências a URLs base, endpoints, formato de autenticação ou schemas de payload/DTO.
- A única documentação relacionada é o plano de integração em `docs/clickmassa-integration-plan.md`, que descreve a arquitetura desejada mas não lista endpoints concretos.

## Limitação do ambiente
- Este ambiente não possui acesso à internet para executar web search, cURL contra serviços externos ou consultar RAGs/remotas (por exemplo, "r jina ai").
- Por conta dessa restrição, não é possível descobrir ou confirmar os endpoints reais da API do Click Massa a partir daqui.

## Próximos passos recomendados para coletar os detalhes da API
Caso você tenha acesso à documentação oficial ou a uma instância autenticada, siga o checklist abaixo para preencher os dados de endpoints, autenticação e DTOs:

1. **Localizar a documentação oficial**
   - Procurar um portal de desenvolvedores, swagger/OpenAPI ou README interno do Click Massa.
   - Se houver um link público, exportar/baixar o JSON/YAML do OpenAPI para versionarmos em `docs/clickmassa-openapi.json|yaml`.

2. **Descobrir autenticação**
   - Identificar se a autenticação é feita via header (por exemplo, `Authorization: Bearer <token>` ou `X-API-KEY: <chave>`).
   - Confirmar se há necessidade de refresh/expiração e políticas de rate limit.

3. **Mapear endpoints e DTOs com cURL**
   - Partindo da URL base fornecida (ex.: `https://api.clickmassa.com`), testar listagem de pipelines/campos para levantar schemas:
     ```bash
     curl -i -X GET "https://<BASE_URL>/pipelines" -H "Authorization: Bearer <TOKEN>"
     curl -i -X GET "https://<BASE_URL>/fields" -H "Authorization: Bearer <TOKEN>"
     ```
   - Testar criação de lead/deal para capturar o DTO enviado e a resposta:
     ```bash
     curl -i -X POST "https://<BASE_URL>/leads" \
       -H "Content-Type: application/json" \
       -H "Authorization: Bearer <TOKEN>" \
       -d '{
         "name": "Nome do contato",
         "email": "contato@example.com",
         "phone": "+55XXXXXXXXXXX",
         "creditType": "consignado",
         "message": "opcional",
         "source": "site"
       }'
     ```
   - Registrar o corpo exato de requisição e resposta (incluindo IDs de campos/pipeline/estágio) em um arquivo `docs/clickmassa-fields.md` para uso pelo cliente HTTP.

4. **Validar colunas/campos obrigatórios**
   - Usar endpoints de descrição de pipeline/campos para identificar IDs e tipos (texto, select, número) exigidos para criação de lead.
   - Preencher a tabela de mapeamento `campo do site -> campo Click Massa` e exemplos de payload.

5. **Automatizar consultas (opcional)**
   - Assim que os endpoints forem conhecidos, criar um script temporário em `scripts/fetch-clickmassa-metadata.ts` para:
     - Listar pipelines/estágios e salvar em JSON versionado.
     - Listar campos customizados e salvar com nome, id e tipo.
   - Esse script deve ler credenciais de variáveis de ambiente e ser usado apenas em ambientes seguros.

## Como proceder até que os dados sejam obtidos
- Sem os detalhes oficiais, a implementação deve permanecer bloqueada para evitar chamadas incorretas ou perda de dados.
- Assim que a documentação/endpoints estiverem disponíveis, atualizar este arquivo com:
  - URL base e endpoints confirmados.
  - Método de autenticação (header, query param) e requisitos de renovação.
  - DTO de requisição e resposta para criação de lead.
  - Exemplos reais de resposta (status code, corpo, erros comuns).
