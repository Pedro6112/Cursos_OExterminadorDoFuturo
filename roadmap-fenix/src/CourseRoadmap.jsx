import { useState } from "react";

const courses = [
  // ── BLOCO 1: Harvard CS50
  {
    id: "cs50b",
    code: "CS50B",
    name: "CS50 for Business",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/business/",
    free: true,
    cert: "Gratuito (edX pago ~$200)",
    duration: "~6h",
    when: "Sem 1–2",
    phase: 1,
    langs: ["Sem código"],
    desc: "Vocabulário tecnológico para tomadores de decisão. Cloud, APIs, segurança, escalabilidade. Ponto de partida perfeito antes de qualquer coisa técnica.",
    why: "Cria a base conceitual para absorver tudo que vem depois. Sem isso, os primeiros contatos com Make e n8n são no escuro.",
  },
  {
    id: "cs50x",
    code: "CS50X",
    name: "CS50x — Intro to CS",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/x/",
    free: true,
    cert: "Gratuito (edX pago)",
    duration: "~11 semanas",
    when: "Sem 1 → Mês 8",
    phase: 1,
    langs: ["C", "Python", "SQL", "HTML/JS"],
    desc: "O mais famoso curso de CS do mundo. Algoritmos, estruturas de dados, abstração, C, Python, SQL, web. Consumo seletivo — você pega os módulos no momento certo do plano.",
    why: "Base técnica mais sólida que qualquer bootcamp. Final project = Sistema Fênix completo.",
  },
  {
    id: "cs50p",
    code: "CS50P",
    name: "CS50P — Python",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/python/",
    free: true,
    cert: "Gratuito (edX pago)",
    duration: "~10 semanas",
    when: "Sem 3 → Mês 3",
    phase: 2,
    langs: ["Python"],
    desc: "Python do zero ao avançado. Sintaxe, funções, OOP, arquivos, APIs, bibliotecas. Paralelo ao Módulo A do plano.",
    why: "Certificado Harvard em Python. Final project = Classe FenixAPI (projeto real, não exercício genérico).",
  },
  {
    id: "cs50sql",
    code: "CS50SQL",
    name: "CS50 SQL",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/sql/",
    free: true,
    cert: "Gratuito (edX pago)",
    duration: "~7 semanas",
    when: "Mês 4",
    phase: 3,
    langs: ["SQL", "SQLite", "PostgreSQL"],
    desc: "Bancos de dados do zero ao avançado. CREATE, SELECT, JOIN, índices, views, triggers. SQLite → PostgreSQL.",
    why: "Fundação para Supabase, pgvector e qualquer sistema de produção. Certificado Harvard em databases.",
  },
  {
    id: "cs50w",
    code: "CS50W",
    name: "CS50W — Web Programming",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/web/",
    free: true,
    cert: "Gratuito (edX pago)",
    duration: "~9 semanas",
    when: "Mês 4–8",
    phase: 4,
    langs: ["Python", "JavaScript", "Django", "React"],
    desc: "Web apps completas com Django, React, Bootstrap. APIs, banco, deploy, CI/CD, segurança.",
    why: "Cobre exatamente a stack da Fase 4. Django como backend + React já é o que você vai usar.",
  },
  {
    id: "cs50ai",
    code: "CS50AI",
    name: "CS50 AI — Artificial Intelligence",
    institution: "Harvard",
    tag: "harvard",
    link: "https://cs50.harvard.edu/ai/",
    free: true,
    cert: "Gratuito (edX pago)",
    duration: "~7 semanas",
    when: "Mês 6–10",
    phase: 4,
    langs: ["Python"],
    desc: "Fundamentos reais de IA: busca, otimização, redes neurais, NLP, aprendizado por reforço. Não é usar ChatGPT — é entender como funciona.",
    why: "Paralelo ao Módulo C. Base teórica para RAG, embeddings e agentes não serem caixa preta.",
  },
  // ── BLOCO 2: Princeton
  {
    id: "algs1",
    code: "ALGS I",
    name: "Algorithms Part I",
    institution: "Princeton",
    tag: "princeton",
    link: "https://www.coursera.org/learn/algorithms-part1",
    free: true,
    cert: "Sem certificado (curso gratuito)",
    duration: "~6 semanas",
    when: "Mês 5–8",
    phase: 4,
    langs: ["Java"],
    desc: "Algoritmos e estruturas de dados fundamentais: union-find, listas, filas, sorting (quicksort, mergesort), árvores, tabelas hash.",
    why: "Base para entender pgvector, índices de banco de dados e performance de sistemas. Difícil, mas o melhor curso de algoritmos disponível gratuitamente.",
  },
  // ── BLOCO 3: Anthropic
  {
    id: "anth_claude",
    code: "ANTH 1",
    name: "Claude 101",
    institution: "Anthropic Academy",
    tag: "anthropic",
    link: "https://www.anthropic.com/learn",
    free: true,
    cert: "Sim (gratuito)",
    duration: "~2h",
    when: "Sem 1–2",
    phase: 1,
    langs: ["Sem código"],
    desc: "Como usar Claude de forma efetiva no trabalho real. Workflows, prompts práticos, casos de uso. Oficial da Anthropic.",
    why: "Você já usa Claude. Aprender a usar bem desde o início multiplica a produtividade de todo o plano.",
  },
  {
    id: "anth_api",
    code: "ANTH 2",
    name: "Building with the Claude API",
    institution: "Anthropic / Coursera",
    tag: "anthropic",
    link: "https://www.coursera.org/learn/building-with-claude-api",
    free: true,
    cert: "Sim",
    duration: "~4h",
    when: "Mês 3–4",
    phase: 3,
    langs: ["Python"],
    desc: "Construir aplicações reais com a API do Claude. Lançado diretamente pela Anthropic no Coursera em nov/2025. Ensinado por ex-manager da Anthropic.",
    why: "Quando chegar na Fase 3 (IA aplicada), você vai integrar Claude em automações reais. Esse curso é o caminho oficial.",
  },
  {
    id: "anth_mcp",
    code: "ANTH 3",
    name: "Model Context Protocol (MCP)",
    institution: "Anthropic Academy",
    tag: "anthropic",
    link: "https://www.anthropic.com/learn",
    free: true,
    cert: "Sim (gratuito)",
    duration: "~3h",
    when: "Mês 7–8",
    phase: 4,
    langs: ["Python"],
    desc: "MCP é o protocolo aberto da Anthropic para conectar LLMs a ferramentas externas. Base para construir agentes que interagem com sistemas reais.",
    why: "Mês 7–8 você vai construir agentes. MCP é o padrão de mercado para isso — aprender antes de precisar.",
  },
  // ── BLOCO 4: DeepLearning.AI
  {
    id: "dl_prompt",
    code: "DL 1",
    name: "Prompt Engineering for Developers",
    institution: "DeepLearning.AI",
    tag: "deeplearning",
    link: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    free: true,
    cert: "Não (acesso livre)",
    duration: "~1h",
    when: "Sem 2",
    phase: 1,
    langs: ["Python"],
    desc: "Co-criado com OpenAI. Princípios de prompt engineering, summarization, inferência, transformação de texto. Ensinado por Andrew Ng + Isa Fulford (OpenAI).",
    why: "1 hora. Vai usar prompts durante todo o plano. Melhor base possível antes de tocar na OpenAI API.",
  },
  {
    id: "dl_langchain",
    code: "DL 2",
    name: "LangChain for LLM Apps",
    institution: "DeepLearning.AI",
    tag: "deeplearning",
    link: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/",
    free: true,
    cert: "Não",
    duration: "~1h",
    when: "Mês 6",
    phase: 4,
    langs: ["Python"],
    desc: "Ensinado pelo criador do LangChain. Chains, memória, agentes, parsers. Essencial antes de entrar em RAG.",
    why: "Módulo C começa no Mês 6. LangChain é o framework que você vai usar para RAG e agentes.",
  },
  {
    id: "dl_rag",
    code: "DL 3",
    name: "Building RAG Systems",
    institution: "DeepLearning.AI",
    tag: "deeplearning",
    link: "https://www.deeplearning.ai/short-courses/",
    free: true,
    cert: "Não",
    duration: "~1h",
    when: "Mês 7",
    phase: 4,
    langs: ["Python"],
    desc: "RAG (Retrieval-Augmented Generation) do zero: embeddings, vector stores, recuperação semântica, integração com LLMs.",
    why: "Projeto C2 é o Assistente RAG Fênix — documentos da empresa como base de conhecimento. Esse curso é o prerequisito direto.",
  },
  {
    id: "dl_agents",
    code: "DL 4",
    name: "AI Agents in LangGraph",
    institution: "DeepLearning.AI",
    tag: "deeplearning",
    link: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
    free: true,
    cert: "Não",
    duration: "~4h",
    when: "Mês 9–10",
    phase: 5,
    langs: ["Python"],
    desc: "Construir agentes autônomos do zero com LangGraph. Ensinado pelo fundador do LangChain e fundador do Tavily. Agentic search.",
    why: "Fase 6 é produto SaaS com IA. Agentes autônomos são o diferencial competitivo. Esse curso é co-criado por quem fez o framework.",
  },
];

const tags = {
  harvard: { label: "Harvard", color: "#c41e3a", bg: "#c41e3a15" },
  princeton: { label: "Princeton", color: "#ff8f00", bg: "#ff8f0015" },
  anthropic: { label: "Anthropic", color: "#6b4fbb", bg: "#6b4fbb15" },
  deeplearning: { label: "DeepLearning.AI", color: "#00b4d8", bg: "#00b4d815" },
};

const phaseInfo = {
  1: { label: "Fase 1 — Fundamentos", color: "#64ffda", period: "Sem 1–2" },
  2: { label: "Fase 2 — Automação", color: "#00b4d8", period: "Sem 3–8" },
  3: { label: "Fase 3 — IA Aplicada", color: "#6b4fbb", period: "Mês 3–4" },
  4: { label: "Fase 4 — Web Dev + Infra + IA Avançada", color: "#ff8f00", period: "Mês 4–8" },
  5: { label: "Fase 5–6 — Clientes + Produto", color: "#ff4d6d", period: "Mês 9–18" },
};

export default function CourseRoadmap() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? courses : courses.filter(c => c.tag === filter);
  const grouped = [1, 2, 3, 4, 5].map(p => ({
    phase: p,
    courses: filtered.filter(c => c.phase === p),
  })).filter(g => g.courses.length > 0);

  const sel = courses.find(c => c.id === selected);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#08080f",
      color: "#ddd",
      fontFamily: "'DM Mono', 'Fira Code', monospace",
      fontSize: "13px",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        padding: "24px 32px 16px",
        borderBottom: "1px solid #161625",
      }}>
        <div style={{ color: "#64ffda", fontSize: "10px", letterSpacing: "3px", marginBottom: "6px" }}>
          PEDRO × METALÚRGICA FÊNIX
        </div>
        <div style={{ fontSize: "22px", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
          Roadmap Completo de Cursos — 18 Meses
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[["all", "Todos", "#64ffda"], ...Object.entries(tags).map(([k, v]) => [k, v.label, v.color])].map(([k, label, color]) => (
            <button key={k} onClick={() => setFilter(k)} style={{
              background: filter === k ? color + "20" : "none",
              border: `1px solid ${filter === k ? color : "#222"}`,
              color: filter === k ? color : "#555",
              padding: "5px 14px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "11px",
              letterSpacing: "0.5px",
              transition: "all 0.2s",
            }}>
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Course list */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 32px",
        }}>
          {grouped.map(({ phase, courses: pCourses }) => (
            <div key={phase} style={{ marginBottom: "32px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}>
                <div style={{
                  color: phaseInfo[phase].color,
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  whiteSpace: "nowrap",
                }}>
                  {phaseInfo[phase].label}
                </div>
                <div style={{ flex: 1, height: "1px", background: "#161625" }} />
                <div style={{ color: "#333", fontSize: "10px", whiteSpace: "nowrap" }}>
                  {phaseInfo[phase].period}
                </div>
              </div>

              <div style={{ display: "grid", gap: "8px" }}>
                {pCourses.map(c => {
                  const t = tags[c.tag];
                  const isSelected = selected === c.id;
                  return (
                    <div
                      key={c.id}
                      onClick={() => setSelected(isSelected ? null : c.id)}
                      style={{
                        background: isSelected ? "#0f0f1e" : "#0c0c18",
                        border: `1px solid ${isSelected ? t.color + "50" : "#161625"}`,
                        borderRadius: "8px",
                        padding: "14px 18px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        display: "grid",
                        gridTemplateColumns: "64px 1fr auto auto auto",
                        alignItems: "center",
                        gap: "14px",
                      }}
                    >
                      <div style={{
                        fontSize: "10px",
                        fontWeight: "700",
                        color: t.color,
                        background: t.bg,
                        padding: "3px 7px",
                        borderRadius: "3px",
                        textAlign: "center",
                        letterSpacing: "0.5px",
                      }}>
                        {c.code}
                      </div>

                      <div>
                        <div style={{ color: "#fff", fontWeight: "600", marginBottom: "3px" }}>
                          {c.name}
                        </div>
                        <div style={{ color: "#444", fontSize: "11px" }}>{c.institution}</div>
                      </div>

                      <div style={{ color: "#333", fontSize: "11px", textAlign: "right" }}>
                        {c.when}
                      </div>
                      <div style={{ color: "#333", fontSize: "11px", textAlign: "right" }}>
                        {c.duration}
                      </div>
                      <div style={{
                        fontSize: "10px",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        background: c.free ? "#64ffda15" : "#ff4d6d15",
                        color: c.free ? "#64ffda" : "#ff4d6d",
                        whiteSpace: "nowrap",
                      }}>
                        {c.free ? "GRÁTIS" : "PAGO"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{
          width: sel ? "340px" : "0",
          overflow: "hidden",
          transition: "width 0.3s ease",
          borderLeft: sel ? "1px solid #161625" : "none",
          background: "#0a0a16",
          flexShrink: 0,
        }}>
          {sel && (
            <div style={{ padding: "28px 24px", width: "340px" }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}>
                <div>
                  <div style={{
                    color: tags[sel.tag].color,
                    fontSize: "10px",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}>{sel.institution.toUpperCase()}</div>
                  <div style={{ color: "#fff", fontSize: "16px", fontWeight: "700" }}>
                    {sel.name}
                  </div>
                </div>
                <button onClick={() => setSelected(null)} style={{
                  background: "none", border: "none",
                  color: "#444", cursor: "pointer", fontSize: "18px", marginTop: "4px",
                }}>×</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                {[
                  ["Quando", sel.when],
                  ["Duração", sel.duration],
                  ["Certificado", sel.cert],
                  ["Fase", `Fase ${sel.phase}`],
                ].map(([k, v]) => (
                  <div key={k} style={{
                    background: "#0f0f1e",
                    border: "1px solid #161625",
                    borderRadius: "6px",
                    padding: "10px 12px",
                  }}>
                    <div style={{ color: "#444", fontSize: "10px", marginBottom: "4px" }}>{k.toUpperCase()}</div>
                    <div style={{ color: "#bbb", fontSize: "12px" }}>{v}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ color: "#444", fontSize: "10px", letterSpacing: "1px", marginBottom: "8px" }}>
                  LINGUAGENS / TOOLS
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {sel.langs.map(l => (
                    <span key={l} style={{
                      background: "#161625",
                      color: "#aaa",
                      padding: "3px 10px",
                      borderRadius: "3px",
                      fontSize: "11px",
                    }}>{l}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ color: "#444", fontSize: "10px", letterSpacing: "1px", marginBottom: "8px" }}>
                  SOBRE O CURSO
                </div>
                <div style={{ color: "#999", lineHeight: "1.7", fontSize: "12px" }}>{sel.desc}</div>
              </div>

              <div style={{
                background: tags[sel.tag].bg,
                border: `1px solid ${tags[sel.tag].color}25`,
                borderRadius: "6px",
                padding: "14px",
                marginBottom: "20px",
              }}>
                <div style={{ color: tags[sel.tag].color, fontSize: "10px", letterSpacing: "1px", marginBottom: "6px" }}>
                  ⚡ POR QUE ESTE CURSO AGORA
                </div>
                <div style={{ color: "#bbb", fontSize: "12px", lineHeight: "1.7" }}>{sel.why}</div>
              </div>

              <a
                href={sel.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: tags[sel.tag].color,
                  color: "#000",
                  padding: "12px",
                  borderRadius: "6px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                ACESSAR CURSO →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Footer summary */}
      <div style={{
        borderTop: "1px solid #161625",
        padding: "14px 32px",
        display: "flex",
        gap: "32px",
        background: "#08080f",
      }}>
        {[
          ["Total de cursos", courses.length],
          ["Gratuitos", courses.filter(c => c.free).length],
          ["Certificados disponíveis", courses.filter(c => c.cert && !c.cert.includes("Não")).length],
          ["Instituições", "Harvard · Princeton · Anthropic · DeepLearning.AI"],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ color: "#333", fontSize: "10px", marginBottom: "2px" }}>{k.toUpperCase()}</div>
            <div style={{ color: "#888", fontSize: "12px" }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
