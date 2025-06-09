# MAG7 AI Research Portal

An interactive AI-powered research platform providing comprehensive financial analysis and knowledge graphs for the Magnificent Seven (MAG7) technology companies: Apple, Tesla, NVIDIA, Microsoft, Amazon, Google, and Meta.

## 🎯 Overview

This research portal offers in-depth investment analysis through interactive knowledge graphs, combining financial data, market insights, competitive analysis, and strategic outlook for each MAG7 company. Built with Astro and featuring dynamic visualizations powered by Cytoscape.js.

## ✨ Key Features

- **Interactive Knowledge Graphs**: Explore complex relationships between business segments, competitors, market factors, and strategic initiatives
- **Comprehensive Financial Analysis**: Latest quarterly results, key metrics, historical performance, and profitability analysis
- **Multi-dimensional Research**: SWOT analysis, competitive landscape, market positioning, and growth catalysts
- **Real-time Data**: Up-to-date financial metrics, market caps, and recent developments
- **Responsive Design**: Modern, mobile-friendly interface with intuitive navigation

## 🏢 Covered Companies

| Company | Ticker | Market Focus | Key Strengths |
|---------|---------|--------------|---------------|
| **Apple Inc.** | AAPL | Consumer Electronics & Services | Premium ecosystem, Services growth |
| **Tesla, Inc.** | TSLA | Electric Vehicles & Energy | EV leadership, FSD technology |
| **NVIDIA Corp.** | NVDA | AI & Semiconductors | GPU dominance, AI infrastructure |
| **Microsoft Corp.** | MSFT | Cloud & Software | Azure growth, AI integration |
| **Amazon.com, Inc.** | AMZN | E-commerce & Cloud | AWS profitability, market share |
| **Alphabet Inc.** | GOOGL | Search & Cloud | Search monopoly, YouTube, Cloud |
| **Meta Platforms, Inc.** | META | Social Media & VR | Social dominance, AI investments |

## 🚀 Project Structure

```text
/
├── public/                    # Static assets
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   └── KnowledgeGraph.astro  # Interactive graph component
│   ├── data/                 # Company research data
│   │   ├── apple_data.ts     # Apple financial & business data
│   │   ├── tesla_data.ts     # Tesla analysis data
│   │   ├── nvidia_data.ts    # NVIDIA research data
│   │   ├── microsoft_data.ts # Microsoft business data
│   │   ├── amazon_data.ts    # Amazon comprehensive data
│   │   ├── google_data.ts    # Google/Alphabet data
│   │   └── meta_data.ts      # Meta platforms data
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro      # Base layout template
│   └── pages/                # Site pages
│       ├── index.astro       # Homepage with company selector
│       ├── apple.astro       # Apple analysis page
│       ├── tesla.astro       # Tesla research page
│       ├── nvidia.astro      # NVIDIA analysis page
│       ├── microsoft.astro   # Microsoft research page
│       ├── amazon.astro      # Amazon analysis page
│       ├── google.astro      # Google research page
│       └── meta.astro        # Meta analysis page
├── package.json              # Dependencies and scripts
└── astro.config.mjs         # Astro configuration
```

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Visualization**: [Cytoscape.js](https://cytoscape.org) - Interactive graph library
- **Language**: TypeScript - Type-safe development
- **Styling**: CSS3 with modern responsive design
- **Data**: Structured TypeScript interfaces for financial data

## 🧞 Development Commands

All commands are run from the root of the project:

| Command | Action |
| :------ | :----- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🎨 Features & Functionality

### Interactive Knowledge Graphs
- **Node-based Visualization**: Companies, business segments, competitors, and strategic factors
- **Dynamic Filtering**: Filter by categories (segments, competitors, SWOT elements)
- **Search Functionality**: Find specific analysis points quickly
- **Responsive Layout**: Breadthfirst algorithm for optimal node positioning

### Financial Analysis Sections
- **Company Overview**: Corporate profile, business model, target markets
- **Financial Performance**: Quarterly results, key metrics, historical trends
- **Business Segments**: Revenue breakdown with growth analysis
- **Market Analysis**: Geographic distribution, competitive positioning
- **Strategic Outlook**: SWOT analysis, growth catalysts, risk factors

### Data Integration
- **Real-time Metrics**: Latest quarterly earnings and financial ratios
- **Comprehensive Coverage**: 500+ analysis points per company
- **Structured Data**: TypeScript interfaces ensuring data consistency
- **Metadata Integration**: Dynamic content generation from structured data

## 📊 Data Sources & Analysis

The research portal aggregates data from:
- Latest quarterly earnings reports (Q1-Q2 2025)
- SEC filings and investor presentations
- Market research and analyst reports
- Industry benchmarking and competitive analysis
- Strategic initiatives and development updates

## 🔧 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai_research_mag7
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:4321`

## 🤝 Contributing

This research portal is designed for financial analysis and educational purposes. When updating company data:

1. Ensure data accuracy with official sources
2. Follow the existing TypeScript interfaces
3. Update both metadata and graph elements
4. Test interactive features thoroughly
5. Maintain consistent formatting and structure

## 📄 License

This project is for research and educational purposes. Financial data and analysis are provided for informational use only and should not be considered as investment advice.

---

*Built with ❤️ using Astro and modern web technologies*

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
