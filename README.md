# ICC Command Center vNext

Interactive operational intelligence prototype for ICC/NOC.

## Deploy to GitHub Pages

1. Upload all files in this folder to your GitHub repo root
2. Go to **Settings → Pages** in your repo
3. Set source to **Deploy from branch → main → / (root)**
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Full interactive prototype — all 7 tabs |
| `.nojekyll` | Tells GitHub Pages to skip Jekyll processing |
| `README.md` | This file |

## Tab Structure

| Tab | Goal |
|-----|------|
| Command Center | Real-time landing page — risk map, swarms, KPIs |
| FCR & Resolution | Goal 1 — FCR scorecard, likely/missed candidates, escalation flow |
| Incident Reduction | Goal 2 — YoY trend, conversion rate, repeat offenders |
| Automation | Goal 4 — Opportunities, playbooks, health, executions |
| P-Cards | Operational queue, long-running cards, lifecycle timeline |
| Analytics / MTTA | Goal 3 — MTTA/MTTR trends, escalation delay, comment gaps |
| Reports | Goal progress, exportable report list |

## Libraries used (all CDN — no install needed)

| Library | Version | Use |
|---------|---------|-----|
| Apache ECharts | 5.x | Risk map graph, gauge, sankey, bar/line/pie charts |
| Google Fonts | — | JetBrains Mono (data/mono) + Syne (UI text) |

No build step. No npm. No backend. Open `index.html` directly or via GitHub Pages.
