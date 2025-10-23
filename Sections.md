# Landing Page Sections Plan - CredCertoBueno

## 📊 Business Model Analysis

### Core Business

**CredCertoBueno** operates as a **credit correspondent platform** (correspondente bancário), not a direct financial institution. The business model includes:

- **Service**: Financial intermediation and credit facilitation
- **Products**: Personal loans, FGTS advancement, consigned credit, vehicle/property-backed loans
- **Revenue**: Commission-based on successful loan placements with partner banks
- **Target Audience**: Individuals seeking personal credit solutions, CLT workers, public servants, property/vehicle owners
- **Value Proposition**: Lower interest rates, flexible terms, simplified online process, personalized service

### Existing Services (from ServicesSection)

1. **Empréstimo com garantia de veículo** - Vehicle-backed loans up to R$ 150k
2. **Empréstimo com garantia de imóvel** - Property-backed loans up to R$ 3M
3. **Empréstimo consignado privado** - Private consigned credit for employees
4. **Antecipação do FGTS** - FGTS advancement
5. **Crédito Consignado** - General consigned credit
6. **Consignado para CLT** - Consigned credit for CLT workers

---

## 🎨 Design System & Visual Identity

### Color Palette

**Primary Colors:**

- `#1C4200` - Deep forest green (headings, primary text)
- `#8FDB00` - Bright lime green (CTAs, accents, active states)
- `#7BC700` - Darker lime (hover states)

**Secondary Colors:**

- `#FFFFFF` - White (backgrounds, cards)
- `#1C4200/70` - Green at 70% opacity (body text)
- `#1C4200/30` - Green at 30% opacity (borders on hover)

**Neutral Colors:**

- `#F9FAFB` - Light gray (alternate backgrounds)
- `#E5E7EB` - Border gray
- `#9CA3AF` - Muted text
- `#6B7280` - Secondary text

### Typography Principles

```
Headings (H1-H2): text-5xl lg:text-7xl, font-semibold
Subheadings (H3): text-2xl lg:text-4xl, font-semibold
Body Large: text-xl lg:text-2xl
Body Regular: text-base, leading-relaxed
```

### Spacing System

- Section padding: `py-16 lg:py-24`
- Container max-width: `max-w-7xl`
- Container padding: `px-4 lg:px-8`
- Card spacing: `p-8`
- Element spacing: `mb-4, mb-6, mb-8, mb-16`

### Design Principles

#### 1. **Minimalism & White Space**

- Generous padding around all elements
- Clean, uncluttered layouts
- Focus on one message per section
- Breathing room between components

#### 2. **Subtle Animations**

- Framer Motion for scroll-triggered animations
- Fade-in with slight Y-offset: `initial={{ opacity: 0, y: 50 }}`
- Staggered delays for card grids: `delay: index * 0.2`
- Smooth easing: `ease: [0.25, 0.1, 0.25, 1]`
- Hover states with scale/shadow transitions

#### 3. **Card Design Pattern**

```tsx
- Base: bg-white, rounded-2xl, shadow-sm, border border-gray-100
- Hover: shadow-xl, border-[#8FDB00]/30
- Gradient overlay on hover: from-[#8FDB00]/5 to-[#1C4200]/5
- Transition: transition-all duration-300
```

#### 4. **CTA Button Pattern**

```tsx
Primary: bg-[#8FDB00] hover:bg-[#7BC700] text-black
- Rounded corners: rounded-lg or rounded-full
- Font weight: font-semibold
- Icon support with arrow or chevron
- Smooth transitions: transition-all duration-300
```

#### 5. **Image Treatment**

- Rounded corners: `rounded-xl or rounded-2xl`
- Aspect ratio maintained with Next.js Image
- Object-fit: cover for consistency
- High-quality Unsplash images with financial/business themes

#### 6. **Responsive Grid System**

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap consistency: `gap-6 lg:gap-8`

---

## 📑 Additional Sections to Implement

### 1. **Statistics/Trust Bar Section**

**Purpose:** Build immediate credibility and trust

**Content:**

```
- 250,000+ clients served monthly
- 150+ qualified consultants
- 4.9/5.0 average rating
- Since 2010 in the market
```

**Design Notes:**

- 4-column grid on desktop, 2x2 on mobile
- Large numbers with animated count-up
- Icons from lucide-react (Users, Briefcase, Star, Calendar)
- Light background: `bg-[#F9FAFB]`

**Images:** None required (icon-based)

---

### 2. **About Us / Company Story Section**

**Purpose:** Establish brand identity and values

**Content:**

```
Headline: "Transformando sonhos em conquistas desde 2010"

Body:
"Com mais de uma década de experiência, a CredCertoBueno se consolidou como referência em soluções de crédito personalizadas. Nossa missão é democratizar o acesso ao crédito com transparência, agilidade e as melhores condições do mercado."

Three pillars with icons:
1. Eficiência - "Processos ágeis e digitais"
2. Transparência - "Sem taxas ocultas ou surpresas"
3. Excelência - "Atendimento personalizado e consultoria especializada"
```

**Design Notes:**

- Split layout: 40% image, 60% content on desktop
- Stack on mobile
- Animated fade-in on scroll
- Accent border on the left side: `border-l-4 border-[#8FDB00]`

**Images:**

- Team/office photo or handshake (professional, warm)
- URL: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80`

---

### 3. **Value Propositions / Differentials Grid**

**Purpose:** Highlight competitive advantages

**Content:**

```
Headline: "Por que escolher a CredCertoBueno?"

6 Cards:
1. Taxas Competitivas
   Icon: TrendingDown
   "As menores taxas do mercado com condições flexíveis"

2. Aprovação Rápida
   Icon: Zap
   "Análise em até 24h e crédito liberado rapidamente"

3. 100% Online
   Icon: Smartphone
   "Todo o processo digital, sem burocracia"

4. Consultoria Gratuita
   Icon: UserCheck
   "Especialistas dedicados para encontrar a melhor solução"

5. Segurança Garantida
   Icon: Shield
   "Dados protegidos e parceria com instituições regulamentadas"

6. Flexibilidade
   Icon: Settings
   "Prazos e parcelas ajustados ao seu orçamento"
```

**Design Notes:**

- 3-column grid on desktop, 1-column on mobile
- Card pattern with icon at top
- Hover lift effect: `hover:-translate-y-2`
- Background: white cards on light gray section

**Images:** Icon-based, no photos needed

---

### 4. **How It Works / Process Section**

**Purpose:** Simplify the customer journey

**Content:**

```
Headline: "Como funciona? Simples assim:"

4 Steps (Timeline/Stepper format):
1. Simule Online
   "Escolha o tipo de crédito e simule em segundos"

2. Envie Documentos
   "Upload rápido e seguro dos documentos necessários"

3. Análise Rápida
   "Nossa equipe analisa e encontra a melhor opção para você"

4. Receba o Crédito
   "Aprovado! O valor cai na sua conta em até 24h"
```

**Design Notes:**

- Horizontal stepper on desktop, vertical on mobile
- Connected dots/lines between steps
- Number badges with gradient background
- Illustrative icons for each step

**Images:**

- Step 1: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80`
- Step 2: `https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80`
- Step 3: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80`
- Step 4: `https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=80`

---

### 5. **Use Cases / Solutions Section**

**Purpose:** Show real-world applications

**Content:**

```
Headline: "O crédito certo para cada momento da sua vida"

6 Use Cases (Icon + Text):
1. Realizar sonhos - "Viagem, casamento, festa"
2. Organizar finanças - "Consolidar dívidas, pagar boletos"
3. Investir no futuro - "Educação, qualificação profissional"
4. Reformar a casa - "Melhorias, decoração, ampliação"
5. Cuidar da saúde - "Tratamentos, cirurgias, bem-estar"
6. Empreender - "Abrir negócio, capital de giro"
```

**Design Notes:**

- Gradient background: `bg-gradient-to-br from-[#1C4200] to-[#2D6600]`
- White text for contrast
- 3x2 grid on desktop, single column on mobile
- Glassmorphism cards: `bg-white/10 backdrop-blur-sm`

**Images:** Icon-based with emoji or lucide-react icons

---

### 6. **Testimonials / Social Proof Section**

**Purpose:** Build trust through customer reviews

**Content:**

```
Headline: "O que nossos clientes dizem"

3-5 Testimonials (Swiper carousel):
1. Maria Silva, 42 anos
   "Consegui realizar o sonho da reforma da minha casa com taxas justas e um atendimento excepcional. Recomendo!"
   Rating: 5/5

2. João Oliveira, 35 anos
   "Processo super rápido e transparente. Em menos de 24h o crédito estava na minha conta. Equipe muito atenciosa!"
   Rating: 5/5

3. Ana Costa, 28 anos
   "Melhor decisão financeira que tomei. Consegui consolidar minhas dívidas com uma taxa muito menor."
   Rating: 5/5

4. Carlos Santos, 51 anos
   "A consultoria foi fundamental. Me ajudaram a escolher o melhor produto para minha situação."
   Rating: 5/5

5. Paula Ferreira, 39 anos
   "Transparência do início ao fim. Sem surpresas, sem taxas escondidas. Exatamente o que prometeram!"
   Rating: 5/5
```

**Design Notes:**

- Swiper carousel similar to services section
- Quote icon or quotation marks
- Star rating display
- Customer avatar placeholders
- Card design with subtle shadow

**Images:**

- Avatar placeholders:
  - `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80`
  - `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80`
  - `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80`
  - `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80`
  - `https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80`

---

### 7. **Partners / Financial Institutions Section**

**Purpose:** Show credibility through partnerships

**Content:**

```
Headline: "Parceiros que garantem segurança e credibilidade"

Subheading: "Trabalhamos com as principais instituições financeiras do país"

Partners (Logo grid):
- Banco BMG
- Banco C6
- Facta Financeira
- Crefisa
- UY3
- Socinal S.A.
```

**Design Notes:**

- Grayscale logos on hover: full color
- 3-column grid on mobile, 6-column on desktop
- Even spacing with logo containment
- Light background section

**Images:**

- Use placeholder logos:
  - `https://placehold.co/200x100/e5e7eb/6b7280?text=Partner+Logo`
  - Repeat for each partner

---

### 8. **FAQ Section**

**Purpose:** Address common questions and reduce support burden

**Content:**

```
Headline: "Perguntas Frequentes"

10 Questions:
1. Q: "Quanto tempo leva para aprovar meu crédito?"
   A: "A análise é feita em até 24 horas úteis. Após a aprovação, o valor é depositado na sua conta em até 1 dia útil."

2. Q: "Preciso ter conta no banco parceiro?"
   A: "Não necessariamente. Podemos trabalhar com transferência para sua conta em qualquer banco."

3. Q: "Qual a taxa de juros?"
   A: "As taxas variam conforme o tipo de crédito e perfil do cliente. Faça uma simulação para ver as condições personalizadas."

4. Q: "Posso antecipar o pagamento?"
   A: "Sim! Você pode quitar antecipadamente com desconto proporcional dos juros."

5. Q: "Quais documentos preciso enviar?"
   A: "RG, CPF, comprovante de residência e renda. Documentos específicos variam por tipo de crédito."

6. Q: "Meu nome está negativado. Posso conseguir crédito?"
   A: "Sim! Algumas modalidades como consignado aceitam pessoas com restrições no CPF."

7. Q: "Como funciona o crédito com garantia?"
   A: "Você oferece um bem (veículo ou imóvel) como garantia, o que permite taxas menores. Você continua usando o bem normalmente."

8. Q: "Há cobrança de taxa de abertura?"
   A: "Todas as taxas são informadas claramente antes da contratação. Não há taxas escondidas."

9. Q: "Posso simular sem compromisso?"
   A: "Sim! A simulação é gratuita e não gera nenhum compromisso ou consulta ao CPF."

10. Q: "Como funciona a consultoria gratuita?"
    A: "Nossa equipe analisa seu perfil e necessidades para indicar a melhor solução de crédito, sem custo algum."
```

**Design Notes:**

- Accordion component (expand/collapse)
- Plus/minus icon animation
- Max 2 items open at once
- Subtle border between items
- Search/filter functionality (optional)

**Images:** None required

---

### 9. **CTA Section / Contact Form**

**Purpose:** Convert visitors into leads

**Content:**

```
Headline: "Pronto para dar o próximo passo?"

Subheading: "Fale com um especialista e descubra a melhor solução para você"

Form Fields:
- Nome completo
- E-mail
- Telefone (WhatsApp)
- Tipo de crédito (dropdown)
- Mensagem (opcional)

CTA Button: "Solicitar Contato"

Alternative CTA: "Falar no WhatsApp" (with WhatsApp icon)
```

**Design Notes:**

- Split layout: form 50%, motivational content 50%
- Form validation with error states
- Success message after submission
- Floating labels or placeholder text
- Gradient background or accent color block

**Images:**

- Right side: `https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80`

---

### 10. **Footer**

**Purpose:** Navigation, legal info, contact details

**Content:**

```
4 Column Layout:

Column 1 - Institucional:
- Home
- Sobre Nós
- Serviços
- Depoimentos
- FAQ
- Blog (optional)

Column 2 - Soluções:
- Crédito Consignado
- Antecipação FGTS
- Empréstimo com Garantia
- Crédito Pessoal

Column 3 - Contato:
- Email: contato@credcertobueno.com.br
- Telefone: (XX) XXXX-XXXX
- WhatsApp: (XX) XXXXX-XXXX
- Endereço: [City, State]

Column 4 - Redes Sociais:
- Instagram
- Facebook
- LinkedIn
- YouTube (optional)

Bottom Bar:
- Copyright © 2025 CredCertoBueno
- Políticas de Privacidade
- Termos de Uso
- Legal disclaimer about being a credit correspondent
```

**Design Notes:**

- Dark background: `bg-[#1C4200]`
- White text with opacity variations
- Social icons with hover color change
- Mobile: stack columns
- Subtle top border or gradient

**Images:** None required (icon links)

---

## 🔄 Section Order (Top to Bottom)

1. Header (Navigation)
2. Hero Section
3. Statistics/Trust Bar
4. About Us / Company Story
5. Services Section (existing - already implemented)
6. Value Propositions / Differentials Grid
7. How It Works / Process
8. Use Cases / Solutions
9. Testimonials / Social Proof
10. Partners / Financial Institutions
11. FAQ Section
12. CTA / Contact Form
13. Footer

---

## 🎯 Key Design Concepts to Maintain

### Visual Consistency

✅ **Color Discipline:** Stick to the green palette - no random colors  
✅ **Typography Scale:** Use defined text sizes consistently  
✅ **Spacing Rhythm:** Maintain 4px/8px base unit system  
✅ **Card Pattern:** Reuse the established card design system

### Animation Guidelines

✅ **Entrance Animations:** Fade + Y-offset on scroll into view  
✅ **Stagger Effect:** Delay based on index for grid items  
✅ **Hover States:** Subtle scale, shadow, or border changes  
✅ **Performance:** Use `once: true` for scroll triggers

### Accessibility

✅ **Color Contrast:** Ensure WCAG AA compliance  
✅ **Focus States:** Visible focus indicators on interactive elements  
✅ **Alt Text:** Meaningful descriptions for all images  
✅ **Semantic HTML:** Proper heading hierarchy (h1, h2, h3)

### Responsiveness

✅ **Mobile-First:** Design for mobile, enhance for desktop  
✅ **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)  
✅ **Touch Targets:** Minimum 44x44px for buttons on mobile  
✅ **Readable Line Length:** Max-width on text containers

### Performance

✅ **Image Optimization:** Use Next.js Image with proper sizing  
✅ **Lazy Loading:** Load sections as user scrolls  
✅ **Code Splitting:** Component-based architecture  
✅ **Minimal Dependencies:** Only essential libraries

---

## 📐 Component Patterns to Reuse

### 1. Section Container

```tsx
<section className="relative w-full flex items-center justify-center bg-[#FFF] py-16 lg:py-24">
  <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### 2. Section Header

```tsx
<div className="text-left mb-16">
  <motion.h2 className="text-5xl lg:text-7xl font-semibold text-[#1C4200] mb-6">
    {/* Headline */}
  </motion.h2>
  <motion.p className="text-xl lg:text-2xl text-[#1C4200]/70 max-w-3xl">
    {/* Subheadline */}
  </motion.p>
</div>
```

### 3. Feature Card

```tsx
<motion.div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8FDB00]/30">
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-300 -z-10"></div>
  {/* Content */}
</motion.div>
```

### 4. CTA Button

```tsx
<Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold transition-all duration-300">
  {/* Text */}
  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
    {/* Arrow icon */}
  </svg>
</Button>
```

---

## 🚀 Implementation Priority

**Phase 1 (MVP - Core Conversion):**

1. Statistics/Trust Bar
2. About Us
3. Value Propositions
4. CTA/Contact Form
5. Footer

**Phase 2 (Enhanced Credibility):** 6. How It Works 7. Testimonials 8. Partners 9. FAQ

**Phase 3 (Content Marketing):** 10. Use Cases/Solutions 11. Blog integration (future) 12. Resource library (future)

---

## 📝 Content Writing Guidelines

### Tone of Voice

- **Professional yet approachable:** Financial expertise without jargon
- **Empowering:** Focus on customer's goals and dreams
- **Transparent:** Clear about process, rates, and requirements
- **Conversational:** Use "você" instead of corporate language

### Messaging Principles

1. **Lead with benefits, not features:** "Realize seu sonho" > "Taxa de 1.5%"
2. **Build trust through specifics:** Include numbers, timelines, guarantees
3. **Address pain points:** Acknowledge financial stress, offer solutions
4. **Clear CTAs:** Tell users exactly what to do next
5. **Avoid hyperbole:** Don't oversell - be honest and realistic

### Keywords to Include (SEO)

- Crédito consignado
- Empréstimo com garantia
- Antecipação FGTS
- Taxas baixas
- Aprovação rápida
- Crédito online
- Empréstimo pessoal
- [City/State name]

---

## 🔐 Legal & Compliance

### Required Disclaimers

```
"A CredCertoBueno é uma plataforma digital que atua como correspondente
bancário para facilitar o processo de contratação de produtos financeiros.
Como correspondente bancário, seguimos as diretrizes do Banco Central do
Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011.
Toda avaliação de crédito será realizada conforme a política de crédito
da Instituição Financeira escolhida pelo usuário."
```

### Privacy & Data

- Privacy policy link in footer
- Terms of use link in footer
- LGPD compliance statement
- Cookie consent banner (future implementation)

---

## ✅ Checklist for Each New Section

- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Animations trigger on scroll (useInView)
- [ ] Color palette matches brand guidelines
- [ ] Typography uses defined scale
- [ ] Images are optimized and use Next.js Image
- [ ] Hover states are smooth and purposeful
- [ ] Spacing follows 16px/24px rhythm
- [ ] Content is original and on-brand
- [ ] Accessibility: focus states, alt text, semantic HTML
- [ ] Component is added to main page.tsx in correct order

---

## 📦 Assets Needed

### Images (via Unsplash)

All images referenced in this document use Unsplash URLs with financial/business themes:

- Professional settings
- Diverse people
- Clean, minimalist compositions
- Natural lighting
- Aligned with brand colors when possible

### Icons (lucide-react)

Recommended icons:

- Shield (security)
- Zap (speed)
- TrendingDown (low rates)
- UserCheck (consultation)
- Smartphone (digital)
- Settings (flexibility)
- Star (ratings)
- Users (clients)
- Calendar (experience)
- CheckCircle (approval)

---

**End of Document**

_This plan provides a complete roadmap for transforming CredCertoBueno into a high-converting, professional landing page that maintains a clean, minimalistic design while building trust and driving customer action._
