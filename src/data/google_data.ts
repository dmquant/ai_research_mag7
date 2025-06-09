import type { GraphElement } from "../components/KnowledgeGraph.astro";

// Alphabet/Google company metadata for UI integration
export const googleMetadata = {
  companyName: 'Alphabet Inc.',
  ticker: 'GOOGL',
  exchange: 'NASDAQ',
  marketCap: '$2.0T',
  latestQuarter: 'Q1 2025',
  keyMetrics: {
    revenue: { value: '$90.2B', change: '+12% YoY', isPositive: true },
    eps: { value: '$2.81', change: '+40% vs Est', isPositive: true },
    operatingMargin: { value: '32%', change: '+5pp YoY', isPositive: true },
    cloudRevenue: { value: '$12.26B', change: '+28% YoY', isPositive: true }
  },
  segments: [
    { id: 'google_services', name: 'Google Services', percentage: 86, revenue: '$77.5B' },
    { id: 'google_cloud', name: 'Google Cloud', percentage: 10, revenue: '$12.26B' },
    { id: 'other_bets', name: 'Other Bets', percentage: 1, revenue: '$0.4B' },
    { id: 'other_revenues', name: 'Other Revenues', percentage: 3, revenue: '$2.9B' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '🏢', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '📰', priority: 3 },
    { id: 'ai_strategy', name: 'AI Strategy', icon: '🤖', priority: 4 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 5 },
    { id: 'regulatory_challenges', name: 'Regulatory Issues', icon: '⚖️', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return googleGraphElements.filter(element => 
    element.group === 'nodes' && element.data.type === type
  );
};

export const getMainSections = (): GraphElement[] => {
  return getNodesByType('main_category');
};

export const getBusinessSegments = (): GraphElement[] => {
  return getNodesByType('segment');
};

export const getCompetitors = (): GraphElement[] => {
  return getNodesByType('competitor');
};

export const getSWOTElements = (): GraphElement[] => {
  return googleGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = googleGraphElements.filter(el => el.group === 'nodes');
  const edges = googleGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const googleGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'googl', label: 'Alphabet Inc. (GOOGL)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Structure & History
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile & History', 
    type: 'category', 
    text: 'Founded September 4, 1998 by Larry Page and Sergey Brin at Stanford University. Restructured as Alphabet Inc. in October 2015. Headquarters: Mountain View, California (Googleplex). CEO: Sundar Pichai (Google & Alphabet since 2019). ~180,000 employees globally. Market cap: ~$2.0 trillion (May 2025). Mission: "Organize the world\'s information and make it universally accessible and useful".'
  } },
  
  // B. Leadership & Governance
  { group: 'nodes', data: { 
    id: 'leadership_governance', 
    label: 'Leadership & Governance', 
    type: 'category', 
    text: 'CEO: Sundar Pichai (both Alphabet & Google). CFO: Anat Ashkenazi (joined 2024 from Eli Lilly). Founders Larry Page & Sergey Brin retain majority voting control via Class B shares (10x voting power). Chairman: John L. Hennessy. Dual-class structure insulates from short-term pressures but limits shareholder influence.'
  } },
  
  // C. Core Business Segments
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // Google Services (86% of revenue)
  { group: 'nodes', data: { 
    id: 'google_services_segment', 
    label: 'Google Services (86% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $77.5B revenue (+12% YoY). Includes Google Search (>90% market share), YouTube (2.5B+ users), Android (~70% smartphone OS), Google Ads platform, Chrome browser, Gmail, Maps, Play Store. Search advertising remains core revenue driver with ~$50.7B in Q1. YouTube ads: $8.93B.'
  } },
  
  // Google Cloud (10% of revenue)
  { group: 'nodes', data: { 
    id: 'google_cloud_segment', 
    label: 'Google Cloud (10% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $12.26B revenue (+28% YoY). Third-largest cloud provider globally after AWS and Azure. Includes Google Cloud Platform (GCP), Google Workspace, AI/ML services. Reached profitability in 2023, operating margin ~17.8% in Q1 2025. Strong growth in AI infrastructure and enterprise adoption.'
  } },
  
  // Other Bets (<1% of revenue)
  { group: 'nodes', data: { 
    id: 'other_bets_segment', 
    label: 'Other Bets (<1% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $0.4B revenue. Includes Waymo (autonomous driving), Verily (life sciences), Calico (longevity), Wing (drone delivery), Google Fiber. Operating loss of several billion annually. Waymo leads in robotaxi services (Phoenix, SF, LA). DeepMind merged into Google AI in 2023.'
  } },

  // D. Geographic Distribution
  { group: 'nodes', data: { 
    id: 'geographic_distribution', 
    label: 'Geographic Revenue Distribution', 
    type: 'category', 
    text: 'Q1 2025: United States ~49% of revenue, EMEA ~29%, Asia-Pacific ~17%, Other Americas ~5%. Global reach with billions of users: Google Search >90% market share globally (except China), Android powers ~70% of smartphones worldwide, YouTube has 2.5B+ monthly active users across all regions.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q1 2025)
  { group: 'nodes', data: { 
    id: 'q1_2025_results', 
    label: 'Q1 2025 Financial Results', 
    type: 'category', 
    text: 'Revenue: $90.2B (+12% YoY), beating estimates. EPS: $2.81 (+40% vs estimates). Operating income: $25.5B with 32% margin (+5pp YoY). Net income: $23.7B. Strong performance across Search (+9.8% to $50.7B), Cloud (+28% to $12.26B), and YouTube ads recovery. Free cash flow remains robust.'
  } },
  
  // B. Annual Performance (FY 2024)
  { group: 'nodes', data: { 
    id: 'fy2024_performance', 
    label: 'FY 2024 Annual Performance', 
    type: 'category', 
    text: 'Revenue: $350.0B (+13.9% YoY). Net income: $100.1B (+35% YoY, record high). Operating margin: 32% (expanded significantly). Google Services: $264.6B. Google Cloud: $37B (+28% YoY, reached profitability). Advertising revenue: ~$264.6B (~86% of total). Strong margin expansion from cost controls and efficiency measures.'
  } },
  
  // C. Balance Sheet Strength
  { group: 'nodes', data: { 
    id: 'balance_sheet_strength', 
    label: 'Fortress Balance Sheet', 
    type: 'category', 
    text: 'Total assets: $450.3B. Cash & securities: ~$118B. Net cash positive: ~$125B (highest among tech peers). Minimal debt: $10.9B long-term debt. Current ratio: ~1.8. AAA credit rating. Strong liquidity provides strategic flexibility for AI investments, acquisitions (e.g., $32B Wiz deal), and shareholder returns.'
  } },
  
  // D. Capital Return Program
  { group: 'nodes', data: { 
    id: 'capital_return_program', 
    label: 'Capital Return Program', 
    type: 'category', 
    text: 'Q1 2025: $70B new share buyback authorization announced. Quarterly dividend: $0.21/share (+5% increase). Started paying dividends in 2024 (historically paid none). $604B+ in buybacks over past decade. Low dividend yield (~0.5%) with buybacks as primary return method. Strong cash generation supports returns.'
  } },

  // E. Valuation Metrics
  { group: 'nodes', data: { 
    id: 'valuation_metrics', 
    label: 'Valuation & Key Ratios', 
    type: 'category', 
    text: 'P/E ratio: ~19x (below peers Microsoft ~35x, Apple ~34x). Forward P/E: ~17x. ROE: ~34.5% (exceptionally high). ROA: ~21%. Price-to-sales: ~5.5-6.0x. EV/EBITDA: ~13-14x. Trades at discount to peers, attributed to regulatory overhang. Many analysts consider undervalued given growth prospects.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. Major Acquisitions
  { group: 'nodes', data: { 
    id: 'major_acquisitions', 
    label: 'Major Acquisitions & Investments', 
    type: 'category', 
    text: 'March 2025: Announced $32B acquisition of Wiz (cybersecurity) - largest acquisition ever. Strengthens Google Cloud security offerings. 2024: $2B investment in Anthropic (Claude AI) for partnership. Massive AI infrastructure investment: $75B capex planned for 2025 vs $58.8B expected. Focus on strategic cloud and AI capabilities.'
  } },
  
  // B. Leadership Changes
  { group: 'nodes', data: { 
    id: 'leadership_changes', 
    label: 'Leadership Transitions', 
    type: 'category', 
    text: 'CFO transition: Ruth Porat moved to President & Chief Investment Officer role (2023), focusing on Other Bets oversight. Anat Ashkenazi became new CFO (2024) from Eli Lilly. Sundar Pichai remains CEO of both Alphabet and Google. Page/Brin remain controlling shareholders but stepped back from day-to-day operations.'
  } },

  // --- IV. AI STRATEGY & PRODUCTS ---
  { group: 'nodes', data: { id: 'ai_strategy', label: 'IV. AI Strategy & Products', type: 'main_category' } },
  
  // A. Gemini AI Platform
  { group: 'nodes', data: { 
    id: 'gemini_ai_platform', 
    label: 'Gemini AI Platform', 
    type: 'category', 
    text: 'Gemini 2.5 Pro launched Q1 2025 - state-of-the-art performance on coding, reasoning, science benchmarks. Debuted #1 on Chatbot Arena. Active users in AI Studio and Gemini API grew 200%+ since start of 2025. Gemini 2.5 Flash for cost optimization. Powers AI Overviews (1.5B monthly users), AI Mode in Search.'
  } },
  
  // B. AI Product Integration
  { group: 'nodes', data: { 
    id: 'ai_product_integration', 
    label: 'AI Product Integration', 
    type: 'category', 
    text: 'All 15 Google products with 500M+ users now use Gemini models. AI Overviews in Search: 1.5B monthly users. Circle to Search on 250M+ devices (+40% usage growth). Lens visual searches up 5B since October. Gemini Live rolling out to all Android devices. Assistant upgrade to Gemini across mobile, tablets, cars.'
  } },
  
  // C. AI Infrastructure
  { group: 'nodes', data: { 
    id: 'ai_infrastructure', 
    label: 'AI Infrastructure Leadership', 
    type: 'category', 
    text: 'Ironwood (7th-gen TPU): 10x compute improvement, 2x power efficiency. First cloud provider offering NVIDIA B200/GB200 Blackwell GPUs. Next-gen Vera Rubin GPUs coming. Global network: 2M+ miles fiber, 33 subsea cables. $75B capex investment for AI infrastructure through 2025.'
  } },

  // D. Open Source AI
  { group: 'nodes', data: { 
    id: 'open_source_ai', 
    label: 'Open Source AI Models', 
    type: 'category', 
    text: 'Gemma 3 launched with state-of-the-art performance for size. Gemma models downloaded 140M+ times. New specialized models: Gemini Robotics for industrial applications. AlphaFold used by 2.5M+ researchers. AI Co-Scientist multi-agent research system for healthcare breakthroughs.'
  } },

  // --- V. MARKET LANDSCAPE & INDUSTRY ANALYSIS ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'V. Market Landscape & Industry Analysis', type: 'main_category' } },
  
  // A. Digital Advertising Market
  { group: 'nodes', data: { 
    id: 'digital_advertising_market', 
    label: 'Digital Advertising Market Position', 
    type: 'category', 
    text: 'Global digital ad market: ~$790B (2024). Google holds ~39% worldwide market share, ~27% in US. Search ads: ~$300B+ globally (Google dominates). YouTube would be 4th largest ad platform independently. Mobile ads: 70% of digital spend. Privacy changes (iOS ATT, cookie deprecation) favor first-party data leaders like Google.'
  } },
  
  // B. Cloud Computing Market
  { group: 'nodes', data: { 
    id: 'cloud_computing_market', 
    label: 'Cloud Computing Market Position', 
    type: 'category', 
    text: 'Global cloud market: ~$600B+ (2024). Google Cloud #3 provider (after AWS ~32%, Azure ~23%). GCP market share ~10-11%. Strong in AI/ML services, data analytics. Enterprise adoption accelerating. Multi-cloud strategies favor Google\'s differentiated AI offerings. Vertex AI platform offers 200+ foundation models.'
  } },
  
  // C. AI Market Dynamics
  { group: 'nodes', data: { 
    id: 'ai_market_dynamics', 
    label: 'AI Market Leadership', 
    type: 'category', 
    text: 'AI market size: $200B+ (2024), growing 25%+ annually. Google leads in AI research (DeepMind, Google AI). Gemini competes with GPT-4, Claude. Enterprise AI agents emerging opportunity. Google Agent Development Kit for multi-agent systems. 2B+ AI assists monthly in Workspace. Strong position in AI infrastructure (TPUs).'
  } },

  // --- VI. REGULATORY CHALLENGES ---
  { group: 'nodes', data: { id: 'regulatory_challenges', label: 'VI. Regulatory Challenges', type: 'main_category' } },
  
  // A. DOJ Antitrust Cases
  { group: 'nodes', data: { 
    id: 'doj_antitrust_cases', 
    label: 'DOJ Antitrust Cases', 
    type: 'category', 
    text: 'April 2025: DOJ won ad tech monopolization case - potential forced divestiture of DoubleClick/ad exchange. Search monopoly case pending ruling (default search deals with Apple, others). Potential remedies: breakup of ad business, end to exclusive search agreements. Appeals process could take years.'
  } },
  
  // B. EU Regulatory Pressure
  { group: 'nodes', data: { 
    id: 'eu_regulatory_pressure', 
    label: 'EU Regulatory Compliance', 
    type: 'category', 
    text: 'Digital Markets Act (DMA) implementation: third-party app stores on Android, reduced self-preferencing. EU antitrust case on ad business parallels DOJ case. GDPR compliance ongoing. Data transfer framework challenges. Google offered AdX divestiture but deemed insufficient by EU regulators.'
  } },
  
  // C. Global Privacy Regulations
  { group: 'nodes', data: { 
    id: 'global_privacy_regulations', 
    label: 'Privacy & Data Regulations', 
    type: 'category', 
    text: 'Privacy Sandbox initiative: phasing out third-party cookies by 2024-25. Topics API replacing FLoC for ad targeting. iOS App Tracking Transparency impact manageable vs competitors. State privacy laws (CCPA, etc.) require ongoing compliance. First-party data advantage in privacy-first world.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  
  // A. Search & AI Competition
  { group: 'nodes', data: { 
    id: 'microsoft_openai_competition', 
    label: 'Microsoft + OpenAI Competition', 
    type: 'competitor', 
    text: 'Microsoft invested $13B+ in OpenAI. Bing Chat with GPT-4 integration. Copilot across Office 365. Azure OpenAI services for enterprises. Bing market share gains minimal (~3% vs Google\'s 93%). Google\'s Gemini response competitive. Search remains Google\'s moat but AI chat interfaces pose long-term threat.'
  } },
  
  // B. Cloud Competition
  { group: 'nodes', data: { 
    id: 'aws_azure_competition', 
    label: 'AWS & Azure Cloud Competition', 
    type: 'competitor', 
    text: 'AWS: ~32% market share, $100B+ revenue. Azure: ~23% share, tight Office 365 integration. Google Cloud: ~10% but fastest growth in AI services. Differentiation: Google\'s AI/ML capabilities, data analytics (BigQuery), competitive pricing. Multi-cloud adoption helps Google compete against incumbents.'
  } },
  
  // C. Social Media & Video
  { group: 'nodes', data: { 
    id: 'meta_tiktok_competition', 
    label: 'Meta & TikTok Competition', 
    type: 'competitor', 
    text: 'Meta: Facebook/Instagram Reels vs YouTube Shorts. TikTok: fastest-growing video platform, especially Gen Z. YouTube maintains lead in long-form, monetization. YouTube Shorts monetization launched 2023. Connected TV (CTV) growth favors YouTube. Creator economy competition intensifying.'
  } },
  
  // D. Apple Ecosystem Threat
  { group: 'nodes', data: { 
    id: 'apple_ecosystem_threat', 
    label: 'Apple Ecosystem Competition', 
    type: 'competitor', 
    text: 'iOS App Tracking Transparency reduced ad targeting precision. Apple Search potential threat (Siri, Spotlight). App Store policies limit Google\'s Android advantages on iOS. $20B+ annual payments to Apple for Safari default search. Apple\'s privacy positioning challenges Google\'s data-driven model.'
  } },

  // --- VIII. SWOT ANALYSIS & OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Outlook', type: 'main_category' } },
  
  // Strengths
  { group: 'nodes', data: { 
    id: 'search_dominance', 
    label: 'Search Market Dominance', 
    type: 'swot_strength', 
    text: '>90% global search market share outside China. Billions of daily queries generate massive data advantage. Network effects: more users → better results → more users. High-intent advertising with superior ROI for advertisers. Moat strengthened by AI integration (AI Overviews, etc.).'
  } },
  
  { group: 'nodes', data: { 
    id: 'ai_research_leadership', 
    label: 'AI Research Leadership', 
    type: 'swot_strength', 
    text: 'DeepMind breakthroughs: AlphaGo, AlphaFold, Gemini. Google AI advances in LLMs, computer vision, robotics. Massive compute infrastructure (TPUs, data centers). Talent concentration in AI research. First-mover advantage in AI applications across products.'
  } },
  
  { group: 'nodes', data: { 
    id: 'financial_fortress', 
    label: 'Financial Fortress', 
    type: 'swot_strength', 
    text: '$125B+ net cash position. $100B+ annual free cash flow generation. Minimal debt, AAA credit rating. Ability to invest heavily in R&D ($49B+ annually) and acquisitions ($32B Wiz deal). Shareholder returns: $70B buyback authorization, dividend initiation.'
  } },
  
  { group: 'nodes', data: { 
    id: 'ecosystem_integration', 
    label: 'Integrated Ecosystem', 
    type: 'swot_strength', 
    text: 'Android (~70% smartphone OS) drives mobile search, Play Store revenue. Chrome browser (~65% market share) controls web experience. YouTube (2.5B users) dominates video. Gmail, Maps, Drive create user stickiness. Cross-product data sharing enhances targeting and personalization.'
  } },

  // Weaknesses
  { group: 'nodes', data: { 
    id: 'regulatory_vulnerability', 
    label: 'Regulatory Vulnerability', 
    type: 'swot_weakness', 
    text: 'DOJ antitrust cases threaten core business model. Potential forced divestiture of ad tech business. EU DMA compliance costs and restrictions. Global privacy regulations limit data collection. Dual-class share structure reduces shareholder influence on governance.'
  } },
  
  { group: 'nodes', data: { 
    id: 'advertising_dependence', 
    label: 'Advertising Revenue Dependence', 
    type: 'swot_weakness', 
    text: '~79% of revenue from advertising (2024). Economic downturns directly impact ad spending. Privacy changes (iOS ATT, cookie deprecation) threaten targeting precision. Competition from TikTok, Amazon, retail media. Advertiser concentration risk in economic sectors.'
  } },
  
  { group: 'nodes', data: { 
    id: 'cloud_market_position', 
    label: 'Cloud Market Position', 
    type: 'swot_weakness', 
    text: 'Third place in cloud (~10% share) behind AWS (~32%) and Azure (~23%). Late entry to enterprise market. Limited enterprise sales force vs competitors. Azure benefits from Office 365 bundling. AWS has first-mover advantage and broader service portfolio.'
  } },

  // Opportunities
  { group: 'nodes', data: { 
    id: 'ai_monetization', 
    label: 'AI Monetization Opportunities', 
    type: 'swot_opportunity', 
    text: 'Enterprise AI services through Google Cloud. Gemini API and AI Studio revenue potential. AI-powered advertising optimization and new ad formats. Autonomous agents and workflow automation. Healthcare AI applications through DeepMind and Verily partnerships.'
  } },
  
  { group: 'nodes', data: { 
    id: 'emerging_markets', 
    label: 'Emerging Market Expansion', 
    type: 'swot_opportunity', 
    text: 'India, Southeast Asia, Latin America growth markets. Increasing internet penetration and smartphone adoption. Local language AI models and services. Digital payment systems (Google Pay expansion). Cloud infrastructure investment in emerging regions.'
  } },
  
  { group: 'nodes', data: { 
    id: 'autonomous_vehicles', 
    label: 'Autonomous Vehicle Leadership', 
    type: 'swot_opportunity', 
    text: 'Waymo leads in robotaxi technology and safety metrics. Expansion to new cities (Austin, Atlanta, DC, Miami). Partnership with Uber for ride-hailing. Toyota partnership for vehicle integration. Potential trillion-dollar market opportunity in transportation.'
  } },
  
  { group: 'nodes', data: { 
    id: 'quantum_computing', 
    label: 'Quantum Computing Potential', 
    type: 'swot_opportunity', 
    text: 'Google achieved quantum supremacy (2019). Quantum AI research advancing. Potential applications in drug discovery, cryptography, optimization. Partnership opportunities with enterprises and governments. Long-term competitive advantage in complex problem solving.'
  } },

  // Threats
  { group: 'nodes', data: { 
    id: 'antitrust_breakup', 
    label: 'Antitrust Breakup Risk', 
    type: 'swot_threat', 
    text: 'DOJ cases could force divestiture of ad tech business or search restrictions. EU parallel proceedings increase regulatory pressure. Potential end to default search agreements (Apple, others). Congressional scrutiny and potential new antitrust legislation.'
  } },
  
  { group: 'nodes', data: { 
    id: 'ai_competition_intensification', 
    label: 'AI Competition Intensification', 
    type: 'swot_threat', 
    text: 'OpenAI/Microsoft ChatGPT and Copilot gaining enterprise traction. Meta\'s open-source AI models (Llama). Apple\'s on-device AI capabilities. Chinese AI companies (Baidu, Alibaba) in local markets. Potential disruption of search through conversational AI.'
  } },
  
  { group: 'nodes', data: { 
    id: 'privacy_advertising_changes', 
    label: 'Privacy & Advertising Evolution', 
    type: 'swot_threat', 
    text: 'Third-party cookie deprecation reduces targeting precision. iOS App Tracking Transparency impact on mobile ads. Increasing consumer privacy awareness and ad blocking. Shift to first-party data advantages competitors with direct customer relationships.'
  } },
  
  { group: 'nodes', data: { 
    id: 'geopolitical_risks', 
    label: 'Geopolitical & Market Risks', 
    type: 'swot_threat', 
    text: 'China market restrictions limit growth opportunities. US-China tech tensions affect supply chains and partnerships. European data sovereignty requirements. Currency fluctuations impact international revenue. Economic recession reducing advertising spending.'
  } },

  // --- RELATIONSHIPS/EDGES ---
  // Central company connections
  { group: 'edges', data: { id: 'edge-googl-company', source: 'googl', target: 'company_info' } },
  { group: 'edges', data: { id: 'edge-googl-financial', source: 'googl', target: 'financial_performance' } },
  { group: 'edges', data: { id: 'edge-googl-recent', source: 'googl', target: 'recent_developments' } },
  { group: 'edges', data: { id: 'edge-googl-ai', source: 'googl', target: 'ai_strategy' } },
  { group: 'edges', data: { id: 'edge-googl-market', source: 'googl', target: 'market_landscape' } },
  { group: 'edges', data: { id: 'edge-googl-regulatory', source: 'googl', target: 'regulatory_challenges' } },
  { group: 'edges', data: { id: 'edge-googl-competitive', source: 'googl', target: 'competitive_analysis' } },
  { group: 'edges', data: { id: 'edge-googl-swot', source: 'googl', target: 'swot_outlook' } },

  // Company info connections
  { group: 'edges', data: { id: 'edge-company-profile', source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { id: 'edge-company-leadership', source: 'company_info', target: 'leadership_governance' } },
  { group: 'edges', data: { id: 'edge-company-segments', source: 'company_info', target: 'business_segments' } },
  { group: 'edges', data: { id: 'edge-company-geographic', source: 'company_info', target: 'geographic_distribution' } },
  
  // Business segments connections
  { group: 'edges', data: { id: 'edge-segments-services', source: 'business_segments', target: 'google_services_segment' } },
  { group: 'edges', data: { id: 'edge-segments-cloud', source: 'business_segments', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-segments-bets', source: 'business_segments', target: 'other_bets_segment' } },

  // Financial performance connections
  { group: 'edges', data: { id: 'edge-financial-q1', source: 'financial_performance', target: 'q1_2025_results' } },
  { group: 'edges', data: { id: 'edge-financial-fy2024', source: 'financial_performance', target: 'fy2024_performance' } },
  { group: 'edges', data: { id: 'edge-financial-balance', source: 'financial_performance', target: 'balance_sheet_strength' } },
  { group: 'edges', data: { id: 'edge-financial-returns', source: 'financial_performance', target: 'capital_return_program' } },
  { group: 'edges', data: { id: 'edge-financial-valuation', source: 'financial_performance', target: 'valuation_metrics' } },

  // Recent developments connections
  { group: 'edges', data: { id: 'edge-recent-acquisitions', source: 'recent_developments', target: 'major_acquisitions' } },
  { group: 'edges', data: { id: 'edge-recent-leadership', source: 'recent_developments', target: 'leadership_changes' } },

  // AI strategy connections
  { group: 'edges', data: { id: 'edge-ai-gemini', source: 'ai_strategy', target: 'gemini_ai_platform' } },
  { group: 'edges', data: { id: 'edge-ai-integration', source: 'ai_strategy', target: 'ai_product_integration' } },
  { group: 'edges', data: { id: 'edge-ai-infrastructure', source: 'ai_strategy', target: 'ai_infrastructure' } },
  { group: 'edges', data: { id: 'edge-ai-opensource', source: 'ai_strategy', target: 'open_source_ai' } },

  // Market landscape connections
  { group: 'edges', data: { id: 'edge-market-advertising', source: 'market_landscape', target: 'digital_advertising_market' } },
  { group: 'edges', data: { id: 'edge-market-cloud', source: 'market_landscape', target: 'cloud_computing_market' } },
  { group: 'edges', data: { id: 'edge-market-ai', source: 'market_landscape', target: 'ai_market_dynamics' } },

  // Regulatory challenges connections
  { group: 'edges', data: { id: 'edge-regulatory-doj', source: 'regulatory_challenges', target: 'doj_antitrust_cases' } },
  { group: 'edges', data: { id: 'edge-regulatory-eu', source: 'regulatory_challenges', target: 'eu_regulatory_pressure' } },
  { group: 'edges', data: { id: 'edge-regulatory-privacy', source: 'regulatory_challenges', target: 'global_privacy_regulations' } },

  // Competitive analysis connections
  { group: 'edges', data: { id: 'edge-competitive-microsoft', source: 'competitive_analysis', target: 'microsoft_openai_competition' } },
  { group: 'edges', data: { id: 'edge-competitive-cloud', source: 'competitive_analysis', target: 'aws_azure_competition' } },
  { group: 'edges', data: { id: 'edge-competitive-social', source: 'competitive_analysis', target: 'meta_tiktok_competition' } },
  { group: 'edges', data: { id: 'edge-competitive-apple', source: 'competitive_analysis', target: 'apple_ecosystem_threat' } },

  // SWOT connections
  { group: 'edges', data: { id: 'edge-swot-search', source: 'swot_outlook', target: 'search_dominance' } },
  { group: 'edges', data: { id: 'edge-swot-ai-leadership', source: 'swot_outlook', target: 'ai_research_leadership' } },
  { group: 'edges', data: { id: 'edge-swot-financial', source: 'swot_outlook', target: 'financial_fortress' } },
  { group: 'edges', data: { id: 'edge-swot-ecosystem', source: 'swot_outlook', target: 'ecosystem_integration' } },
  { group: 'edges', data: { id: 'edge-swot-regulatory-weak', source: 'swot_outlook', target: 'regulatory_vulnerability' } },
  { group: 'edges', data: { id: 'edge-swot-ad-dependence', source: 'swot_outlook', target: 'advertising_dependence' } },
  { group: 'edges', data: { id: 'edge-swot-cloud-position', source: 'swot_outlook', target: 'cloud_market_position' } },
  { group: 'edges', data: { id: 'edge-swot-ai-opportunity', source: 'swot_outlook', target: 'ai_monetization' } },
  { group: 'edges', data: { id: 'edge-swot-emerging', source: 'swot_outlook', target: 'emerging_markets' } },
  { group: 'edges', data: { id: 'edge-swot-autonomous', source: 'swot_outlook', target: 'autonomous_vehicles' } },
  { group: 'edges', data: { id: 'edge-swot-quantum', source: 'swot_outlook', target: 'quantum_computing' } },
  { group: 'edges', data: { id: 'edge-swot-antitrust', source: 'swot_outlook', target: 'antitrust_breakup' } },
  { group: 'edges', data: { id: 'edge-swot-ai-threat', source: 'swot_outlook', target: 'ai_competition_intensification' } },
  { group: 'edges', data: { id: 'edge-swot-privacy', source: 'swot_outlook', target: 'privacy_advertising_changes' } },
  { group: 'edges', data: { id: 'edge-swot-geopolitical', source: 'swot_outlook', target: 'geopolitical_risks' } },

  // Cross-category strategic connections
  { group: 'edges', data: { id: 'edge-cross-gemini-services', source: 'gemini_ai_platform', target: 'google_services_segment' } },
  { group: 'edges', data: { id: 'edge-cross-gemini-cloud', source: 'gemini_ai_platform', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-cross-infrastructure-cloud', source: 'ai_infrastructure', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-cross-acquisitions-cloud', source: 'major_acquisitions', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-cross-doj-services', source: 'doj_antitrust_cases', target: 'google_services_segment' } },
  { group: 'edges', data: { id: 'edge-cross-microsoft-gemini', source: 'microsoft_openai_competition', target: 'gemini_ai_platform' } },
  { group: 'edges', data: { id: 'edge-cross-aws-cloud', source: 'aws_azure_competition', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-cross-search-services', source: 'search_dominance', target: 'google_services_segment' } },
  { group: 'edges', data: { id: 'edge-cross-ai-research-gemini', source: 'ai_research_leadership', target: 'gemini_ai_platform' } },
  { group: 'edges', data: { id: 'edge-cross-financial-balance', source: 'financial_fortress', target: 'balance_sheet_strength' } },
  { group: 'edges', data: { id: 'edge-cross-regulatory-doj', source: 'regulatory_vulnerability', target: 'doj_antitrust_cases' } },
  { group: 'edges', data: { id: 'edge-cross-advertising-services', source: 'advertising_dependence', target: 'google_services_segment' } },
  { group: 'edges', data: { id: 'edge-cross-ai-monetization-cloud', source: 'ai_monetization', target: 'google_cloud_segment' } },
  { group: 'edges', data: { id: 'edge-cross-autonomous-bets', source: 'autonomous_vehicles', target: 'other_bets_segment' } }
];
