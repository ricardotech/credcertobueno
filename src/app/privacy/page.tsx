import Link from "next/link";
import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Política de Privacidade | CredCertoBueno",
  description:
    "Saiba como a CredCertoBueno coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <GlobalHeader />

      <section className="relative w-full bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#8FDB00] font-semibold text-sm uppercase tracking-widest mb-4">
            Documentos Legais
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-[#1C4200]/70 text-lg">
            Última atualização: 20 de abril de 2026
          </p>
          <p className="text-[#1C4200]/60 text-sm mt-2">
            Em conformidade com a LGPD — Lei nº 13.709/2018
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
        <div className="space-y-10 text-[#1C4200]/80 leading-relaxed">

          {/* Introdução */}
          <section className="bg-[#F9FAFB] rounded-2xl p-6 border-l-4 border-[#8FDB00]">
            <p className="text-sm">
              A <strong>CredCertoBueno Correspondente Bancário Ltda.</strong>{" "}
              (&quot;CredCertoBueno&quot;, &quot;nós&quot; ou &quot;nosso&quot;) está comprometida com a
              proteção da privacidade e dos dados pessoais dos Usuários (&quot;você&quot;).
              Esta Política descreve, de forma transparente, como coletamos, usamos,
              armazenamos, compartilhamos e protegemos seus dados pessoais, em
              conformidade com a{" "}
              <strong>Lei Geral de Proteção de Dados Pessoais (LGPD –
              Lei nº 13.709/2018)</strong>, o{" "}
              <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong> e
              as regulamentações do{" "}
              <strong>Banco Central do Brasil</strong>.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              1. Controladora dos Dados
            </h2>
            <p>
              A controladora dos seus dados pessoais é a{" "}
              <strong>CredCertoBueno Correspondente Bancário Ltda.</strong>, com sede
              em <strong>Anápolis – GO</strong>, Brasil, responsável pelas decisões
              referentes ao tratamento de dados pessoais no âmbito desta plataforma.
            </p>
            <p>
              <strong>Encarregado de Proteção de Dados (DPO):</strong>
            </p>
            <ul className="list-none space-y-1 text-sm bg-[#F9FAFB] rounded-xl p-4 border border-gray-200">
              <li>
                E-mail:{" "}
                <a
                  href="https://w.app/tfkx3w"
                  className="text-[#8FDB00] hover:underline"
                >
                  privacidade@credcertobueno.com.br
                </a>
              </li>
              <li>
                Contato geral:{" "}
                <a
                  href="https://w.app/tfkx3w"
                  className="text-[#8FDB00] hover:underline"
                >
                  contato@credcertobueno.com.br
                </a>
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              2. Dados Pessoais Coletados
            </h2>
            <p>Coletamos os seguintes dados pessoais, dependendo dos serviços utilizados:</p>

            <h3 className="text-lg font-semibold text-[#1C4200] mt-6 mb-3">
              2.1 Dados fornecidos diretamente por você
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Nome completo</li>
              <li>CPF (Cadastro de Pessoas Físicas)</li>
              <li>Data de nascimento</li>
              <li>Endereço completo (logradouro, bairro, cidade, estado, CEP)</li>
              <li>Número de telefone e WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Dados bancários (banco, agência e conta para depósito, quando aplicável)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C4200] mt-6 mb-3">
              2.2 Dados financeiros e de crédito
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Número de benefício INSS, matrícula funcional ou vínculo empregatício</li>
              <li>Margem consignável disponível</li>
              <li>Valor de benefício/salário</li>
              <li>Histórico de crédito e cadastro em bureaus (SPC, Serasa, Cadastro Positivo)</li>
              <li>Dados de propostas e simulações realizadas na plataforma</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C4200] mt-6 mb-3">
              2.3 Dados coletados automaticamente
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Endereço IP e dados de localização aproximada</li>
              <li>Tipo e versão do navegador e sistema operacional</li>
              <li>Páginas visitadas, tempo de navegação e interações na plataforma</li>
              <li>Dados de cookies e tecnologias de rastreamento similares</li>
              <li>Logs de acesso (data, hora e origem)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C4200] mt-6 mb-3">
              2.4 Dados obtidos de terceiros
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Dados de sistemas de correspondentes bancários (ex.: Promosys), conforme
                autorização do Usuário
              </li>
              <li>
                Dados de bureaus de crédito e cadastros públicos, para análise e
                validação cadastral
              </li>
              <li>
                Informações de instituições financeiras parceiras no contexto da
                intermediação de propostas
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              3. Finalidades do Tratamento e Bases Legais (LGPD)
            </h2>
            <p>
              Tratamos seus dados pessoais apenas quando há uma base legal que
              autorize o tratamento, conforme o artigo 7º da LGPD:
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1C4200] text-white">
                    <th className="p-3 text-left rounded-tl-lg">Finalidade</th>
                    <th className="p-3 text-left rounded-tr-lg">Base Legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="p-3">Verificar identidade e validar CPF</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Execução de contrato / Legítimo interesse
                    </td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="p-3">Consultar margem consignável e benefícios</td>
                    <td className="p-3 text-[#1C4200]/70">Consentimento (art. 7º, I)</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="p-3">Encaminhar propostas de crédito às instituições parceiras</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Execução de contrato (art. 7º, V)
                    </td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="p-3">Análise de crédito e prevenção a fraudes</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Legítimo interesse / Proteção ao crédito (art. 7º, IX e X)
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="p-3">Comunicações sobre propostas e serviços contratados</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Execução de contrato / Consentimento
                    </td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="p-3">Marketing, ofertas personalizadas e comunicações promocionais</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Consentimento (revogável a qualquer tempo)
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB]">
                    <td className="p-3">Cumprimento de obrigações legais e regulatórias (BACEN, Receita Federal)</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Cumprimento de obrigação legal (art. 7º, II)
                    </td>
                  </tr>
                  <tr className="bg-[#F9FAFB] hover:bg-white">
                    <td className="p-3">Atendimento de solicitações, reclamações e ouvidoria</td>
                    <td className="p-3 text-[#1C4200]/70">
                      Execução de contrato / Legítimo interesse
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-[#F9FAFB] rounded-b-lg">
                    <td className="p-3 rounded-bl-lg">Melhoria da plataforma e análise de usabilidade</td>
                    <td className="p-3 text-[#1C4200]/70 rounded-br-lg">
                      Legítimo interesse (art. 7º, IX)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados pessoais poderão ser compartilhados com:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Instituições financeiras parceiras</strong> (Banco do Brasil,
                Caixa Econômica Federal, BMG, Pan, C6 Bank, Crefisa e outras), para
                análise, aprovação e formalização das propostas de crédito.
              </li>
              <li>
                <strong>Operadores e parceiros tecnológicos</strong> responsáveis pela
                infraestrutura da plataforma, sistemas de autenticação e processamento
                de dados, sob contratos de confidencialidade e proteção de dados.
              </li>
              <li>
                <strong>Bureaus de crédito</strong> (SPC Brasil, Serasa Experian,
                Boa Vista SCPC) e o Cadastro Positivo, conforme autorização legal.
              </li>
              <li>
                <strong>Autoridades públicas</strong> (Banco Central do Brasil,
                Receita Federal, Ministério Público, Judiciário e outros órgãos),
                quando exigido por lei, ordem judicial ou regulação aplicável.
              </li>
              <li>
                <strong>Prestadores de serviço de comunicação</strong> (e-mail,
                SMS, WhatsApp), para envio de notificações e comunicações
                relacionadas aos seus pedidos.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Não vendemos, alugamos ou cedemos seus dados pessoais</strong>{" "}
              a terceiros para fins publicitários ou comerciais sem seu consentimento
              prévio e expresso.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              5. Retenção e Eliminação de Dados
            </h2>
            <p>
              Os dados pessoais serão mantidos pelo tempo necessário para as
              finalidades que motivaram sua coleta, observando-se os seguintes
              critérios:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Dados de cadastro e propostas: pelo prazo contratual acrescido de{" "}
                <strong>10 (dez) anos</strong>, conforme exigência do Banco Central
                do Brasil e do Código Civil.
              </li>
              <li>
                Dados de consultas e logs de acesso: por até{" "}
                <strong>6 (seis) meses</strong>, conforme Marco Civil da Internet
                (Lei nº 12.965/2014), podendo ser estendidos por determinação judicial.
              </li>
              <li>
                Dados para prevenção a fraudes: pelo período de{" "}
                <strong>5 (cinco) anos</strong> após o encerramento do
                relacionamento, conforme regulações do BACEN.
              </li>
              <li>
                Dados para fins de marketing (com consentimento): até a revogação
                do consentimento ou solicitação de exclusão.
              </li>
            </ul>
            <p>
              Após os prazos aplicáveis, os dados serão excluídos ou anonimizados de
              forma segura, salvo obrigação legal ou regulatória de retenção.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              6. Seus Direitos como Titular dos Dados (LGPD, art. 18)
            </h2>
            <p>
              A LGPD garante a você os seguintes direitos, que podem ser exercidos a
              qualquer momento mediante solicitação ao nosso DPO:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: "Confirmação e Acesso",
                  desc: "Saber se tratamos seus dados e obter uma cópia deles.",
                },
                {
                  title: "Correção",
                  desc: "Solicitar a atualização de dados incompletos, inexatos ou desatualizados.",
                },
                {
                  title: "Anonimização ou Eliminação",
                  desc: "Pedir a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD.",
                },
                {
                  title: "Portabilidade",
                  desc: "Receber seus dados em formato estruturado para transferência a outro fornecedor.",
                },
                {
                  title: "Revogação do Consentimento",
                  desc: "Retirar seu consentimento a qualquer tempo, sem prejuízo dos tratamentos já realizados.",
                },
                {
                  title: "Informação sobre Compartilhamento",
                  desc: "Saber com quais entidades seus dados foram compartilhados.",
                },
                {
                  title: "Oposição",
                  desc: "Opor-se a tratamentos realizados com base em legítimo interesse quando houver violação à LGPD.",
                },
                {
                  title: "Petição à ANPD",
                  desc: "Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
                },
              ].map((right) => (
                <div
                  key={right.title}
                  className="bg-[#F9FAFB] rounded-xl p-4 border border-gray-200"
                >
                  <h4 className="font-semibold text-[#1C4200] mb-1">{right.title}</h4>
                  <p className="text-sm text-[#1C4200]/70">{right.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-6">
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a
                href="https://w.app/tfkx3w"
                className="text-[#8FDB00] hover:underline"
              >
                privacidade@credcertobueno.com.br
              </a>
              . Responderemos em até <strong>15 (quinze) dias úteis</strong>, conforme
              prazo estabelecido pela ANPD.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              7. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares (pixels, localStorage,
              sessionStorage) para:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o funcionamento
                básico da plataforma (sessão de navegação, preferências de idioma).
                Não podem ser desativados.
              </li>
              <li>
                <strong>Cookies de desempenho/analíticos:</strong> coletam informações
                anônimas sobre como os Usuários utilizam a plataforma, para melhorias
                contínuas (ex.: Google Analytics).
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> lembram suas preferências
                e personalizam a experiência de navegação.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> utilizados para exibir
                publicidade relevante em outras plataformas. Dependem de seu
                consentimento.
              </li>
            </ul>
            <p>
              Você pode gerenciar ou bloquear cookies nas configurações do seu
              navegador. A desativação de cookies essenciais pode comprometer o
              funcionamento de algumas funcionalidades.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              8. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas técnicas, administrativas e organizacionais para
              proteger seus dados pessoais contra acesso não autorizado, destruição,
              perda, alteração, comunicação ou qualquer forma de tratamento inadequado,
              incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Criptografia de dados em trânsito (TLS/HTTPS) e em repouso.</li>
              <li>Controle de acesso baseado em funções (RBAC) com autenticação forte.</li>
              <li>Monitoramento contínuo de segurança e detecção de intrusões.</li>
              <li>Procedimentos formais de resposta a incidentes de segurança.</li>
              <li>Treinamento periódico de equipe em proteção de dados e segurança da informação.</li>
              <li>
                Realização de auditorias e testes de vulnerabilidade em
                conformidade com normas como ISO 27001 e PCI-DSS (quando aplicável).
              </li>
            </ul>
            <p>
              Em caso de incidente de segurança com risco relevante ao Usuário,
              comunicaremos você e a ANPD no prazo estabelecido pela LGPD.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              9. Transferência Internacional de Dados
            </h2>
            <p>
              Eventualmente, dados pessoais podem ser transferidos para servidores
              localizados fora do Brasil (ex.: serviços de nuvem como AWS, Google
              Cloud ou Azure). Nesses casos, asseguramos que a transferência ocorra
              apenas para países ou organizações que garantam nível adequado de
              proteção, conforme avaliação da ANPD, ou mediante cláusulas contratuais
              padrão aprovadas pela autoridade competente.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              10. Menores de Idade
            </h2>
            <p>
              Nossa plataforma é destinada exclusivamente a pessoas físicas maiores de
              18 (dezoito) anos. Não coletamos intencionalmente dados de menores de
              idade. Caso identifiquemos que coletamos dados de menor de forma
              inadvertida, excluiremos tais dados imediatamente.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              11. Links para Sites de Terceiros
            </h2>
            <p>
              Nossa plataforma pode conter links para sites de terceiros (instituições
              financeiras parceiras, redes sociais, etc.). Esta Política de
              Privacidade aplica-se exclusivamente à CredCertoBueno. Recomendamos
              que você leia as políticas de privacidade de cada site externo que
              acessar.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              12. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política periodicamente para refletir mudanças
              em nossas práticas, tecnologias ou exigências legais. Sempre que houver
              alterações relevantes, notificaremos você com antecedência mínima de
              15 (quinze) dias, por e-mail ou aviso destacado na plataforma. A
              versão vigente é sempre a disponível nesta página, com data de última
              atualização indicada no topo.
            </p>
          </section>

          {/* Contato */}
          <section className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1C4200] mb-4">
              Canais de Contato — Privacidade
            </h2>
            <p className="mb-4">
              Para dúvidas, solicitações ou exercício dos seus direitos como titular:
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>DPO / Privacidade:</strong>{" "}
                <a
                  href="https://w.app/tfkx3w"
                  className="text-[#8FDB00] hover:underline"
                >
                  privacidade@credcertobueno.com.br
                </a>
              </li>
              <li>
                <strong>Atendimento geral:</strong>{" "}
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
            <p className="text-sm mt-4 text-[#1C4200]/60">
              Consulte também os{" "}
              <Link href="/terms" className="text-[#8FDB00] hover:underline">
                Termos de Uso
              </Link>
              , que fazem parte integrante desta Política.
            </p>
          </section>

        </div>
      </article>

      <Footer />
    </main>
  );
}
