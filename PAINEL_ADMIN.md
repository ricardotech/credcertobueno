# Painel Administrativo - CredCertoBueno

## 📋 Visão Geral

Painel administrativo completo para gerenciar consultas de CPF com interface moderna e intuitiva, baseada no design do sistema de consulta online.

## 🔐 Acesso

### Credenciais de Demonstração
- **Usuário**: `admin`
- **Senha**: `admin`

### URL de Acesso
- Login: `/admin`
- Dashboard: `/admin/dashboard`

## ✨ Funcionalidades

### 1. **Tela de Login** (`/admin`)
- Design responsivo e moderno
- Validação de credenciais fake (admin/admin)
- Animações suaves com Framer Motion
- Feedback visual de erros
- Autenticação com localStorage

### 2. **Dashboard Principal** (`/admin/dashboard`)

#### 📊 Cards de Estatísticas
- **Total de CPFs**: Quantidade total de CPFs cadastrados
- **CPFs com Margem**: CPFs que possuem margem disponível
- **CPFs sem Margem**: CPFs sem margem disponível
- **Margem Total**: Valor total disponível e ticket médio

#### 🔍 Busca e Filtros
- Busca por CPF, nome ou cidade
- Filtros por status:
  - Todos os CPFs
  - Com margem disponível
  - Sem margem disponível

#### 📋 Tabela de CPFs
Exibe 50 CPFs mocados com as seguintes informações:
- CPF formatado
- Nome completo
- Idade
- Cidade/UF
- Margem disponível
- Status (Disponível/Indisponível)
- Data da consulta
- Ação para ver detalhes

#### 👁️ Visualização de Detalhes
Modal completo com:
- Dados pessoais do beneficiário
- Margem disponível detalhada
- Valor do benefício
- Valor consignado atual
- Lista de contratos ativos
- Informações bancárias

#### 📤 Importação de CPFs
- Interface para importar múltiplos CPFs
- Aceita formato de lista separada por:
  - Linha
  - Vírgula
  - Ponto e vírgula
- Validação automática de CPFs

## 🎨 Design

### Cores Principais
- Verde escuro: `#1C4200`
- Verde claro: `#8FDB00`
- Fundo: Gradiente de `#E8F5E9` a `#F1F8E9`

### Componentes UI
Utiliza shadcn/ui com estilo "New York":
- Button
- Input
- Label
- Card
- Badge
- Table
- Dialog

## 📦 Dados Mocados

### Estrutura
O painel utiliza 50 CPFs válidos pré-gerados com dados completos:
- Nome fictício
- Idade (60-75 anos)
- Endereço brasileiro
- Dados de benefício INSS
- Margem disponível calculada
- Contratos ativos (2-6 por CPF)
- Dados bancários

### Arquivo de Dados
`/src/lib/adminMockData.ts` contém:
- Lista de 50 CPFs válidos
- Função para gerar lista completa
- Função para buscar dados de um CPF específico
- Cálculo de estatísticas do dashboard

## 🔧 Tecnologias Utilizadas

- **Next.js 15.5.9** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **shadcn/ui** - Componentes de UI
- **Radix UI** - Primitivos acessíveis
- **Lucide Icons** - Ícones

## 🚀 Como Usar

### 1. Acesse o Login
```
http://localhost:3000/admin
```

### 2. Faça Login
- Digite: `admin` (usuário)
- Digite: `admin` (senha)
- Clique em "Entrar no Painel"

### 3. Explore o Dashboard
- Veja as estatísticas gerais nos cards
- Use a busca para encontrar CPFs específicos
- Filtre por status de margem
- Clique em "Ver" para detalhes completos

### 4. Importe CPFs
- Clique em "Importar CPFs"
- Cole uma lista de CPFs
- Confirme a importação

### 5. Sair do Sistema
- Clique em "Sair" no header
- Você será redirecionado para o login

## 📝 Estrutura de Arquivos

```
src/
├── app/
│   └── admin/
│       ├── page.tsx              # Página de login
│       └── dashboard/
│           └── page.tsx          # Dashboard principal
├── components/
│   └── ui/                       # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── table.tsx
│       └── dialog.tsx
└── lib/
    ├── adminMockData.ts          # Dados mocados admin
    ├── mockDataGenerator.ts      # Gerador de dados
    └── utils.ts                  # Utilitários
```

## 🎯 Casos de Uso

### Para Apresentação ao CEO
1. **Demonstração Visual**: Interface limpa e profissional
2. **Dados Realistas**: 50 CPFs com informações completas
3. **Funcionalidade Completa**: Busca, filtros, detalhes e importação
4. **Performance**: Carregamento rápido com dados mocados

### Para Desenvolvimento
1. **Base Sólida**: Estrutura pronta para integração com API real
2. **Componentização**: Componentes reutilizáveis
3. **Tipagem**: TypeScript com interfaces bem definidas
4. **Escalabilidade**: Fácil adicionar novas funcionalidades

## 🔒 Segurança

⚠️ **IMPORTANTE**: Este é um painel de demonstração com:
- Autenticação fake (localStorage)
- Dados mocados (não reais)
- Sem proteção de rotas no servidor

Para produção, implemente:
- Autenticação real (JWT, OAuth, etc.)
- Proteção de rotas no middleware
- API segura para dados
- Criptografia de dados sensíveis

## 📊 Estatísticas Mocadas

- **Total de CPFs**: 50
- **CPFs com Margem**: ~35-40 (variável)
- **CPFs sem Margem**: ~10-15 (variável)
- **Margem Total**: ~R$ 50.000 - R$ 80.000
- **Ticket Médio**: ~R$ 1.500 - R$ 2.500

## 🎨 Melhorias Futuras

1. **Funcionalidades**
   - Exportar dados para Excel/CSV
   - Gráficos e relatórios
   - Histórico de consultas
   - Notificações em tempo real

2. **UX/UI**
   - Modo escuro
   - Temas personalizáveis
   - Acessibilidade aprimorada
   - Responsividade mobile otimizada

3. **Integração**
   - API REST real
   - Banco de dados
   - Sistema de autenticação robusto
   - Logs e auditoria

---

**Desenvolvido para CredCertoBueno**
Painel administrativo para gestão de consultas de crédito consignado.
