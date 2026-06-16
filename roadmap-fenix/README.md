# Roadmap de Cursos — O Exterminador do Futuro

Aplicação React (Vite) com o roadmap interativo dos 14 cursos do plano.
Pronta para subir no Vercel ou Netlify e embedar no Notion.

---

## Caminho mais rápido: deploy no Vercel via GitHub

### Passo 1 — Subir o código para o GitHub
1. Crie um repositório novo no GitHub (ex: `roadmap-fenix`)
2. Faça upload de TODOS os arquivos desta pasta — MENOS a pasta `node_modules` e a pasta `dist` (se existirem)
   - Pelo site do GitHub: "Add file" → "Upload files" → arraste os arquivos
   - Ou via git, se você já usa:
     ```
     git init
     git add .
     git commit -m "Roadmap de cursos"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/roadmap-fenix.git
     git push -u origin main
     ```

### Passo 2 — Conectar ao Vercel
1. Acesse https://vercel.com e crie conta (pode logar com o GitHub)
2. Clique em "Add New..." → "Project"
3. Selecione o repositório `roadmap-fenix`
4. O Vercel detecta automaticamente que é Vite. Não precisa mudar nada.
5. Clique em "Deploy"
6. Em ~1 minuto você recebe uma URL pública, ex: `roadmap-fenix.vercel.app`

### Passo 3 — Embedar no Notion
1. Abra a página do Notion onde quer o roadmap
2. Digite `/embed` e pressione Enter
3. Cole a URL do Vercel (`https://roadmap-fenix.vercel.app`)
4. Clique em "Embed link"
5. A interface aparece interativa dentro do Notion — clicável, filtrável, com painel de detalhes

Pronto. Toda vez que você atualizar o código no GitHub, o Vercel reconstrói e o Notion mostra a versão nova automaticamente.

---

## Alternativa: deploy no Netlify (drag and drop, sem GitHub)

Se preferir não usar GitHub:

1. Rode o build localmente (precisa de Node.js instalado):
   ```
   npm install
   npm run build
   ```
   Isso gera uma pasta `dist/`
2. Acesse https://app.netlify.com/drop
3. Arraste a pasta `dist/` inteira para a página
4. O Netlify te dá uma URL pública na hora
5. Use essa URL no `/embed` do Notion (passo 3 acima)

Desvantagem: para atualizar, você precisa refazer o build e arrastar de novo.

---

## Rodar localmente (opcional, para testar antes)

Requer Node.js 18+ instalado.

```
npm install
npm run dev
```

Abre em `http://localhost:5173`

---

## Estrutura do projeto

```
roadmap-fenix/
├── index.html              → ponto de entrada HTML
├── package.json            → dependências e scripts
├── vite.config.js          → configuração do Vite
└── src/
    ├── main.jsx            → inicializa o React
    └── CourseRoadmap.jsx   → o componente do roadmap (todo o conteúdo)
```

Para editar os cursos, mexa apenas no array `courses` dentro de `src/CourseRoadmap.jsx`.

---

## Notas

- Tudo gratuito: Vercel, Netlify e GitHub têm planos free suficientes.
- O embed do Notion funciona melhor em telas largas. No mobile do Notion, role horizontalmente.
- Se o embed ficar com altura pequena no Notion, arraste a borda inferior do bloco de embed para aumentar.
