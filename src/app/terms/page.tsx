import Link from "next/link";
import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Termos de Uso | CredCertoBueno",
  description:
    "Leia os Termos de Uso da CredCertoBueno. Saiba seus direitos e obrigações ao utilizar nossa plataforma de intermediação de crédito.",
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <GlobalHeader />

      <section className="relative w-full bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#8FDB00] font-semibold text-sm uppercase tracking-widest mb-4">
            Documentos Legais
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-4">
            Termos de Uso
          </h1>
          <p className="text-[#1C4200]/70 text-lg">
            Última atualização: 20 de abril de 2026
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 py-16 prose prose-lg prose-green">
        <div className="space-y-10 text-[#1C4200]/80 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              1. Das Partes e Aceitação
            </h2>
            <p>
              Estes Termos de Uso (&quot;Termos&quot;) regulam o acesso e a utilização da
              plataforma digital <strong>CredCertoBueno</strong>, de titularidade da{" "}
              <strong>CredCertoBueno Correspondente Bancário Ltda.</strong>, com sede em
              Anápolis – GO, inscrita no CNPJ sob o nº a ser informado (&quot;CredCertoBueno&quot;
              ou &quot;nós&quot;), e o usuário pessoa física (&quot;Usuário&quot; ou &quot;você&quot;) que
              acessa nosso site, aplicativo ou serviços.
            </p>
            <p>
              Ao acessar ou utilizar qualquer funcionalidade da plataforma,{" "}
              <strong>você declara ter lido, compreendido e aceito integralmente</strong>{" "}
              estes Termos, bem como nossa{" "}
              <Link href="/privacy" className="text-[#8FDB00] hover:underline font-medium">
                Política de Privacidade
              </Link>
              . Caso não concorde com qualquer disposição, abstenhase de utilizar os
              serviços.
            </p>
            <p>
              Reservamo-nos o direito de alterar estes Termos a qualquer momento.
              Alterações relevantes serão comunicadas com antecedência mínima de 15 (quinze)
              dias, por meio do site ou do endereço de e-mail cadastrado. O uso continuado
              dos serviços após a vigência das alterações implica sua aceitação.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              2. Natureza Jurídica dos Serviços
            </h2>
            <p>
              A CredCertoBueno atua exclusivamente como{" "}
              <strong>correspondente bancário</strong>, na forma da{" "}
              <strong>Resolução nº 3.954 do Banco Central do Brasil, de 24 de
              fevereiro de 2011</strong>, e suas atualizações. Nossa atividade consiste
              em intermediar, facilitar e encaminhar propostas de produtos e serviços
              financeiros às instituições financeiras parceiras, não sendo nós a parte
              concedente do crédito.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Não somos uma instituição financeira</strong> e não estamos
                autorizados pelo Banco Central do Brasil a captar depósitos ou conceder
                crédito em nome próprio.
              </li>
              <li>
                Todas as análises de crédito, aprovações, concessões e condições
                contratuais finais são de responsabilidade exclusiva da{" "}
                <strong>instituição financeira parceira</strong> eleita pelo Usuário.
              </li>
              <li>
                Os produtos disponíveis incluem, entre outros: crédito consignado (INSS,
                SIAPE, servidor estadual/municipal, CLT/FGTS), antecipação de FGTS,
                empréstimos com garantia de veículo ou imóvel, seguro de financiamento
                veicular e crédito pessoal.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              3. Condições de Acesso e Elegibilidade
            </h2>
            <p>
              Para utilizar os serviços da CredCertoBueno, o Usuário deve:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Ser pessoa física com capacidade civil plena, nos termos dos artigos 3º e
                4º do Código Civil Brasileiro (Lei nº 10.406/2002).
              </li>
              <li>
                Ser residente ou domiciliado no território nacional (Brasil).
              </li>
              <li>
                Possuir CPF (Cadastro de Pessoas Físicas) regular junto à Receita Federal
                do Brasil.
              </li>
              <li>
                Fornecer informações verdadeiras, completas e atualizadas no preenchimento
                de formulários e consultas.
              </li>
            </ul>
            <p>
              É vedada a utilização dos serviços por menores de 18 (dezoito) anos não
              emancipados e por pessoas jurídicas. A plataforma é destinada exclusivamente
              ao uso pessoal e não comercial do Usuário.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              4. Cadastro, Consulta de Margem e Proposta
            </h2>
            <p>
              Para realizar a consulta de margem consignável e solicitar propostas de
              crédito, o Usuário fornecerá seu CPF, que será utilizado para consulta nas
              bases de dados das instituições financeiras parceiras (incluindo o sistema
              Promosys), mediante autorização expressa do Usuário.
            </p>
            <p>
              O Usuário reconhece e autoriza expressamente que a CredCertoBueno realize
              consultas em sistemas de informação de crédito, cadastros de inadimplentes
              (SPC, Serasa e similares) e no Cadastro Positivo, para fins de análise e
              intermediação de propostas de crédito.
            </p>
            <p>
              <strong>Atenção:</strong> a consulta de margem não garante a aprovação do
              crédito, que está sujeita à análise cadastral, de crédito e às políticas
              internas de cada instituição financeira parceira.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              5. Obrigações do Usuário
            </h2>
            <p>Ao utilizar os serviços, o Usuário se compromete a:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Fornecer exclusivamente informações verídicas, precisas e atualizadas,
                respondendo civil e criminalmente por qualquer falsidade.
              </li>
              <li>
                Não utilizar a plataforma para fins fraudulentos, ilícitos ou em
                desacordo com a legislação brasileira.
              </li>
              <li>
                Não tentar acessar sistemas, dados ou áreas da plataforma para as quais
                não possui autorização.
              </li>
              <li>
                Não reproduzir, copiar, distribuir, modificar ou explorar
                comercialmente qualquer conteúdo da plataforma sem autorização expressa.
              </li>
              <li>
                Manter em sigilo suas credenciais de acesso, sendo responsável por toda
                atividade realizada com seu cadastro.
              </li>
              <li>
                Comunicar imediatamente a CredCertoBueno caso identifique uso não
                autorizado de seus dados ou acesso indevido.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              6. Simulações e Informações Financeiras
            </h2>
            <p>
              As simulações de crédito disponíveis na plataforma são meramente
              ilustrativas e informativas, calculadas com base em parâmetros padrão
              (taxa de juros, prazo e valor da parcela), sem considerar variações
              individuais de cada proposta. Os valores finais — incluindo taxa de juros,
              CET (Custo Efetivo Total), prazo e parcelas — serão determinados pela
              instituição financeira parceira no momento da formalização contratual.
            </p>
            <p>
              As taxas de juros mínimas divulgadas (&quot;a partir de 1,65% a.m.&quot;) representam
              as menores taxas praticadas pelas instituições parceiras, podendo variar
              conforme perfil de crédito, produto contratado e políticas da instituição
              financeira.
            </p>
            <p>
              Nenhuma informação contida nesta plataforma deve ser interpretada como
              oferta definitiva, assessoria financeira, recomendação de investimento ou
              aconselhamento jurídico.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              7. Responsabilidades e Limitações
            </h2>
            <p>
              A CredCertoBueno não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Decisões de crédito das instituições financeiras parceiras, sejam
                aprovações ou recusas.
              </li>
              <li>
                Condições contratuais, taxas, encargos e demais obrigações decorrentes
                dos contratos celebrados diretamente entre o Usuário e as instituições
                financeiras.
              </li>
              <li>
                Danos decorrentes de informações incorretas fornecidas pelo Usuário.
              </li>
              <li>
                Interrupções, indisponibilidades ou falhas técnicas da plataforma
                causadas por eventos de força maior, caso fortuito, ataques
                cibernéticos, falhas de terceiros prestadores de serviço ou quedas de
                energia/internet.
              </li>
              <li>
                Uso indevido, acesso não autorizado ou fraude cometida por terceiros
                utilizando os dados do Usuário em razão de negligência ou
                imprudência do próprio Usuário.
              </li>
            </ul>
            <p>
              Em qualquer hipótese, a responsabilidade total da CredCertoBueno
              perante o Usuário ficará limitada ao valor efetivamente pago pelo Usuário
              a título de taxas de serviço, se houver. Não nos responsabilizamos por
              danos indiretos, lucros cessantes, danos morais decorrentes de mero
              desconforto ou danos emergentes não previsíveis.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              8. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponível na plataforma — incluindo, mas não se
              limitando a textos, imagens, logotipos, marcas, design, código-fonte,
              layouts, animações e funcionalidades — é de propriedade exclusiva da
              CredCertoBueno ou de seus licenciadores, protegido pela Lei nº 9.610/1998
              (Lei de Direitos Autorais) e demais normas de propriedade intelectual.
            </p>
            <p>
              Fica concedida ao Usuário uma licença pessoal, não exclusiva,
              intransferível e revogável para acessar e utilizar a plataforma
              exclusivamente para as finalidades previstas nestes Termos. É vedada
              qualquer reprodução, modificação, distribuição ou uso comercial sem
              autorização prévia e expressa por escrito.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              9. Gratuidade e Vedação de Cobranças Antecipadas
            </h2>
            <p>
              Os serviços de consulta, simulação e encaminhamento de propostas
              oferecidos pela CredCertoBueno ao Usuário são <strong>gratuitos</strong>.
              Nossa remuneração provém exclusivamente de comissões pagas pelas
              instituições financeiras parceiras após a efetiva contratação do
              produto pelo Usuário.
            </p>
            <p>
              <strong>
                É expressamente proibido — e constitui prática abusiva —{" "}
                qualquer cobrança de taxas, tarifas ou valores antecipados ao Usuário
                para intermediação, aprovação ou liberação de crédito.
              </strong>{" "}
              Caso você receba qualquer solicitação de pagamento antecipado em nome da
              CredCertoBueno, desconsidere e reporte imediatamente pelo canal{" "}
              <a
                href="https://w.app/tfkx3w"
                className="text-[#8FDB00] hover:underline"
              >
                contato@credcertobueno.com.br
              </a>
              .
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              10. Direito de Desistência e Cancelamento
            </h2>
            <p>
              O Usuário pode desistir de uma consulta ou proposta a qualquer momento,
              antes da formalização do contrato com a instituição financeira.
            </p>
            <p>
              Após a formalização contratual diretamente com a instituição financeira
              parceira, aplicam-se as regras de cancelamento e direito de arrependimento
              previstas no artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990)
              — direito de arrependimento em 7 (sete) dias corridos para contratos
              celebrados fora do estabelecimento — e nas normas específicas do Banco
              Central do Brasil aplicáveis ao produto contratado.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              11. Privacidade e Proteção de Dados
            </h2>
            <p>
              O tratamento de dados pessoais do Usuário é regido pela nossa{" "}
              <Link href="/privacy" className="text-[#8FDB00] hover:underline font-medium">
                Política de Privacidade
              </Link>
              , elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais
              (LGPD – Lei nº 13.709/2018) e demais normas aplicáveis. A Política de
              Privacidade é parte integrante e inseparável destes Termos.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              12. Legislação Aplicável e Foro
            </h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil.
              Fica eleito o foro da Comarca de{" "}
              <strong>Anápolis, Estado de Goiás</strong>, como competente para dirimir
              quaisquer litígios decorrentes destes Termos, com renúncia expressa a
              qualquer outro, por mais privilegiado que seja.
            </p>
            <p>
              Antes de recorrer ao Poder Judiciário, as partes comprometem-se a
              buscar resolução amigável do conflito, inclusive por meio dos canais de
              atendimento da CredCertoBueno ou do{" "}
              <strong>Procon</strong> competente.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              13. Disposições Gerais
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                A invalidade ou inaplicabilidade de qualquer cláusula destes Termos
                não afetará as demais, que permanecerão em pleno vigor.
              </li>
              <li>
                A tolerância ou omissão da CredCertoBueno em exigir o cumprimento
                de qualquer obrigação não constituirá novação ou renúncia de direito.
              </li>
              <li>
                Estes Termos representam o acordo integral entre as partes no que
                se refere ao objeto aqui tratado, substituindo quaisquer entendimentos
                ou negociações anteriores.
              </li>
            </ul>
          </section>

          {/* Contato */}
          <section className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              Fale Conosco
            </h2>
            <p className="mb-4">
              Em caso de dúvidas sobre estes Termos, entre em contato:
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  href="https://w.app/tfkx3w"
                  className="text-[#8FDB00] hover:underline"
                >
                  contato@credcertobueno.com.br
                </a>
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href="https://w.app/tfkx3w" target="_blank" rel="noopener noreferrer" className="text-[#8FDB00] hover:underline">
                  (62) 99410-8686
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://w.app/tfkx3w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8FDB00] hover:underline"
                >
                  (62) 99410-8686
                </a>
              </li>
              <li>
                <strong>Endereço:</strong> Anápolis – GO
              </li>
            </ul>
          </section>

        </div>
      </article>

      <Footer />
    </main>
  );
}
