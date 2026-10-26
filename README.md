# Rotta — landing page (Astro)

Landing page da Rotta, plataforma de gestão de frotas e entregas. Sistema visual derivado da referência inversa.com (`design/DESIGN.md` e `design/tokens.json`).

## Rodar

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/ estático
```

Requer Node 22.12+. O projeto está fixado no Astro 6.4.8; para Astro 7 é preciso Node 22.23.4+.

## Estrutura

```
src/
  layouts/Base.astro        meta, fontes, skip link
  pages/index.astro         ordem das seções
  styles/tokens.css         tokens (cores, tipo, espaçamento, raio)
  styles/global.css         base, botões, tags, foco, reduced motion
  data/operation.ts         rotas e motoristas do painel de demonstração
  data/plans.ts             planos e preços
  components/
    Nav.astro               nav fixa + menu mobile
    Hero.astro              mapa ao vivo (SVG gerado no build) + painel "Entregas de hoje"
    DayLog.astro            benefícios operacionais como linha do tempo de um dia
    Routing.astro           roteirização interativa (vizinho mais próximo + 2-opt no build)
    Proof.astro             comprovante com foto, assinatura e coordenadas
    DriverApp.astro         app do motorista clicável, com simulação offline
    Tracking.astro          link de rastreamento do cliente final
    Tech.astro              stack: React Native, PostGIS/TimescaleDB, OR-Tools/OSRM
    Pricing.astro           planos + calculadora por número de veículos
    Contact.astro           formulário de demonstração (validação no cliente)
    Footer.astro
```

## Decisões de design

- **Status no mapa por forma, além da cor**: em rota = círculo lime, parado = quadrado vazado, atrasado = triângulo com pulso. Mantém a regra de acento único e funciona para daltonismo.
- **CTA primário em Bone Vellum**: o `tokens.json` pede para não promover o lime a cor de CTA. O lime ficou para sinais "ao vivo": veículos em movimento, progresso, horários.
- **Token corrigido**: `surface.obsidian-loam` vinha como `#13140` (inválido). Usado `#13140e`.
- **Fonte**: NB International Pro é comercial. A pilha tenta carregá-la primeiro; sem licença, cai em Inter Tight (substituta indicada no DESIGN.md). Para usar a original, adicione os arquivos em `public/fonts` e um `@font-face` em `global.css`.
- **Tracking do corpo**: -0.01em no texto corrido (Inter Tight já é condensada); -0.03em mantido em títulos.

## Integrações pendentes

- `Contact.astro`: conectar o submit ao endpoint de leads (Supabase, n8n ou CRM). Ponto marcado no script.
- `/privacidade`: página referenciada no rodapé.
