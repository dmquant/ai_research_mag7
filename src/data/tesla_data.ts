import type { GraphElement } from '../components/KnowledgeGraph.astro';

// Tesla company metadata for UI integration
export const teslaMetadata = {
  companyName: 'Tesla, Inc.',
  ticker: 'TSLA',
  exchange: 'NASDAQ',
  marketCap: '$950B',
  latestQuarter: 'Q1 2025',
  keyMetrics: {
    revenue: { value: '$19.34B', change: '-9% YoY', isPositive: false },
    eps: { value: '$0.27', change: '-31% YoY', isPositive: false },
    grossMargin: { value: '16.4%', change: 'Down from 19.3%', isPositive: false },
    deliveries: { value: '337K', change: '-13% YoY', isPositive: false }
  },
  segments: [
    { id: 'automotive_segment', name: 'Automotive', percentage: 72, revenue: '$14.0B' },
    { id: 'energy_segment', name: 'Energy Storage', percentage: 14, revenue: '$2.73B' },
    { id: 'services_segment', name: 'Services & Other', percentage: 9, revenue: '$1.8B' },
    { id: 'supercharging_segment', name: 'Supercharging', percentage: 3, revenue: '$0.6B' },
    { id: 'credits_segment', name: 'Regulatory Credits', percentage: 2, revenue: '$0.6B' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '🚗', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '🤖', priority: 3 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🔋', priority: 4 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📊', priority: 5 },
    { id: 'industry_analysis', name: 'Industry Analysis', icon: '🏭', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return teslaGraphElements.filter(element => 
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
  return teslaGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = teslaGraphElements.filter(el => el.group === 'nodes');
  const edges = teslaGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const teslaGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'tsla', label: 'Tesla, Inc. (TSLA)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Profile
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile', 
    type: 'category', 
    text: 'Founded July 1, 2003 by Martin Eberhard and Marc Tarpenning. CEO: Elon Musk (since 2008). Headquarters: Austin, Texas. ~140,000 employees globally. Market cap: ~$950B (June 2025). Mission: "To accelerate the world\'s transition to sustainable energy." Listed on NASDAQ as TSLA since 2010. Six operational Gigafactories across global markets.'
  } },
  
  // B. Core Business Segments
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // Revenue breakdown with latest Q1 2025 data
  { group: 'nodes', data: { 
    id: 'automotive_segment', 
    label: 'Automotive (72% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $14.0B revenue (~72% of total, down 20% YoY). Global EV market leader by value with 336,681 deliveries (-13% YoY). Model 3/Y dominate sales but facing pressure from BYD and legacy OEMs. Cybertruck production ramping slowly with limited commercial deployment. Margins compressed due to aggressive pricing strategy to maintain market share.'
  } },
  
  { group: 'nodes', data: { 
    id: 'energy_segment', 
    label: 'Energy Storage (14% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $2.73B revenue (+67% YoY, fastest growing segment). Includes Powerwall (residential), Megapack (utility-scale), Solar panels, Solar Roof. Strong demand driven by grid modernization, renewable energy transition, and global energy storage adoption. Megapack deployments accelerating with utility-scale projects worldwide.'
  } },
  
  { group: 'nodes', data: { 
    id: 'services_segment', 
    label: 'Services & Other (9% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $1.8B revenue. Includes vehicle service, parts, used car sales, insurance, and software upgrades. Growing importance of software revenue through FSD subscriptions and premium connectivity. Service network expansion supporting growing global fleet. Insurance business expanding but still nascent.'
  } },
  
  { group: 'nodes', data: { 
    id: 'supercharging_segment', 
    label: 'Supercharging (3% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $0.6B revenue. Largest fast-charging network globally (>50,000 Superchargers). Opening to non-Tesla vehicles with NACS adoption by Ford, GM, and others. Significant competitive moat and potential high-margin revenue growth driver. Infrastructure advantage creating ecosystem lock-in effects.'
  } },
  
  { group: 'nodes', data: { 
    id: 'credits_segment', 
    label: 'Regulatory Credits (2% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $0.6B revenue (+38% YoY). Environmental credits sold to legacy automakers for emissions compliance. High-margin revenue (nearly 100% profit) critical for quarterly profitability. Expected to decline long-term as competitors increase EV production, but remains important near-term buffer.'
  } },

  // C. Geographic Distribution - Updated with latest data
  { group: 'nodes', data: { 
    id: 'geographic_mix', 
    label: 'Geographic Revenue Distribution', 
    type: 'category', 
    text: 'Q1 2025: United States $8.9B (46%), China $3.7B (19%), Other markets $6.7B (35%). Strong U.S. market position but facing headwinds in China due to local competition from BYD. European growth offset by regulatory challenges and political controversies. Expansion planned for India and Mexico markets.'
  } },

  // D. Manufacturing & Operations
  { group: 'nodes', data: { 
    id: 'manufacturing_operations', 
    label: 'Global Manufacturing Operations', 
    type: 'category', 
    text: 'Six operational Gigafactories: Fremont (CA), Shanghai (China), Berlin (Germany), Austin (TX), Nevada (batteries), New York (solar). Annual capacity ~2.35M vehicles but utilization below optimal due to demand challenges. Vertically integrated manufacturing model with "unboxed process" innovation. Mexico and India facilities in planning stages.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q1 2025) - Enhanced with comprehensive data
  { group: 'nodes', data: { 
    id: 'q1_2025_results', 
    label: 'Q1 2025 Financial Results', 
    type: 'category', 
    text: 'Revenue: $19.34B (-9% YoY), missing estimates of $21.3B. EPS: $0.27 (-31% YoY), vs expected $0.35. Operating margin: 2.1% vs 5.7% prior year. Net income: $409M (-71% YoY). Free cash flow: $664M (+126% YoY). Automotive gross margin: 16.4% (excluding credits). Regulatory credits: $595M crucial for profitability.'
  } },
  
  // B. Key Financial Metrics - Comprehensive analysis
  { group: 'nodes', data: { 
    id: 'financial_metrics', 
    label: 'Key Financial Metrics & Ratios', 
    type: 'category', 
    text: 'Market Cap: ~$950B (down from $1.2T peak). P/E Ratio: ~65x (historically volatile 50x-200x). Price-to-Sales: 9.3x (above industry average). Automotive gross margin: 16.4% (pressured by pricing). Cash & Equivalents: $16.9B. Debt-to-Equity: Low with net cash position. Free Cash Flow: Volatile, impacted by CapEx cycles.'
  } },
  
  // C. Historical Performance & Trends
  { group: 'nodes', data: { 
    id: 'historical_performance', 
    label: 'Historical Financial Trends', 
    type: 'category', 
    text: 'Revenue growth from $7B (2016) to $97.7B (2024). Achieved consistent profitability since 2020 after years of losses. Peak margins during 2021-2022 EV supercycle (+25% net margins). 2023-2025: Margin compression phase due to aggressive pricing strategy and increased competition. Stock gained 20,800% since 2010 IPO.'
  } },
  
  // D. Capital Allocation Strategy
  { group: 'nodes', data: { 
    id: 'capital_allocation', 
    label: 'Capital Allocation & Investment Strategy', 
    type: 'category', 
    text: 'High CapEx for factory expansion and R&D (~$7-9B annually). No dividends; reinvesting for growth across multiple verticals. R&D focus: FSD development, 4680 batteries, manufacturing efficiency, Optimus robot, Dojo supercomputer. Strategic Bitcoin holdings (~$1.1B). Heavy investment in AI infrastructure and robotics.'
  } },

  // E. Profitability Analysis
  { group: 'nodes', data: { 
    id: 'profitability_analysis', 
    label: 'Profitability & Margin Analysis', 
    type: 'category', 
    text: 'Automotive gross margin pressured by $2,000+ price cuts on Model 3/Y during 2024-2025. Strategy prioritizes volume over margin to maintain market leadership against growing competition. Energy segment margins improving with scale. Regulatory credits provide critical margin buffer (~100% profit margin) but declining dependency expected long-term.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. Robotaxi & Autonomous Driving - Latest 2025 updates
  { group: 'nodes', data: { 
    id: 'robotaxi_program', 
    label: 'Robotaxi Program Launch', 
    type: 'category', 
    text: 'June 2025: Limited robotaxi service launching in Austin, Texas with 10-20 vehicle fleet, expanding to thousands. Invitation-only initially using consumer Model Y vehicles. CyberCab prototype (purpose-built robotaxi) unveiled with no steering wheel/pedals, wireless charging, $30K target price by 2026. Unsupervised FSD planned for California and Texas.'
  } },
  
  // B. Optimus Robot Development
  { group: 'nodes', data: { 
    id: 'optimus_robot', 
    label: 'Optimus Humanoid Robot Program', 
    type: 'category', 
    text: '2025 Progress: Thousands of Optimus robots expected deployment within Tesla factories this year. Current production: ~1,000 units/month with goal of scaling to millions annually by 2029-2030. Gen 2 prototype showing improved dexterity and human-like movement. Potential $25-30K price point for consumer market. AI training leveraging Dojo supercomputer.'
  } },
  
  // C. Model Y Refresh & Product Updates
  { group: 'nodes', data: { 
    id: 'model_updates', 
    label: 'Product Line Updates & Refreshes', 
    type: 'category', 
    text: 'Model Y refresh underway across all four factories, causing temporary production disruption in Q1 2025. More affordable Model Y variant planned for H1 2025. Cybertruck production ramping slowly with limited commercial availability. Next-generation platform development for sub-$30K vehicles. FSD (Supervised) launched in China, first expansion outside North America.'
  } },
  
  // D. Executive Focus & Leadership
  { group: 'nodes', data: { 
    id: 'leadership_focus', 
    label: 'Executive Leadership & Strategic Focus', 
    type: 'category', 
    text: 'May 2025: Elon Musk committed to dedicating "far more" time to Tesla, reducing involvement with DOGE (Department of Government Efficiency). Addressing investor concerns about divided attention across multiple ventures (SpaceX, X, xAI, Neuralink). Recent political clash with Trump raised questions about government contracts and subsidies.'
  } },

  // E. Technology & Innovation Advances
  { group: 'nodes', data: { 
    id: 'technology_innovation', 
    label: 'Technology & Innovation Pipeline', 
    type: 'category', 
    text: 'Dojo supercomputer scaling for AI training, competing with NVIDIA H100 clusters. 4680 battery cells improving energy density and cost reduction. "Unboxed" manufacturing process reducing production costs. Advanced materials research for next-gen vehicles. AI integration across vehicle software, manufacturing, and energy products.'
  } },

  // --- IV. MARKET LANDSCAPE & ANALYSIS ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'IV. Market Landscape & Analysis', type: 'main_category' } },
  
  // A. EV Market Dynamics
  { group: 'nodes', data: { 
    id: 'ev_market_dynamics', 
    label: 'Electric Vehicle Market Dynamics', 
    type: 'category', 
    text: 'Global EV market growth slowing from 2021-2022 peaks. Tesla market share declining: below 50% in California, facing pressure from BYD globally. EV adoption curve entering mainstream phase with price sensitivity increasing. Government incentives and mandates driving long-term adoption but near-term volatility from policy changes.'
  } },
  
  // B. Geographic Market Analysis
  { group: 'nodes', data: { 
    id: 'geographic_markets', 
    label: 'Geographic Market Performance', 
    type: 'category', 
    text: 'China: Tesla sales declined 8 consecutive months through May 2025, down 15% YoY in May alone. BYD gaining significant market share with localized offerings. Europe: Political controversies affecting brand perception, competition from legacy OEMs. USA: Strong market position but facing pressure from Ford Lightning, GM EVs, and new entrants.'
  } },
  
  // C. Technology Adoption Trends
  { group: 'nodes', data: { 
    id: 'technology_trends', 
    label: 'Technology Adoption & Market Trends', 
    type: 'category', 
    text: 'Autonomous driving: Waymo leading with 10M+ driverless rides, Tesla competing with vision-only approach. Energy storage: Grid-scale deployments accelerating globally, utility partnerships expanding. Charging infrastructure: NACS becoming industry standard with Ford, GM adoption. AI integration driving next-generation features.'
  } },
  
  // D. Regulatory Environment
  { group: 'nodes', data: { 
    id: 'regulatory_environment', 
    label: 'Regulatory Environment & Policy Impact', 
    type: 'category', 
    text: 'Tariff concerns impacting energy storage business sourcing overseas components. Federal EV incentives supporting adoption but political uncertainty. NHTSA investigating FSD incidents and crashes. European regulations on data privacy and autonomous driving. China regulatory environment affecting operations and technology transfer.'
  } },

  // E. Macroeconomic Factors
  { group: 'nodes', data: { 
    id: 'macro_factors', 
    label: 'Macroeconomic Factors & Market Conditions', 
    type: 'category', 
    text: 'High interest rates affecting vehicle financing and consumer demand. Supply chain normalization reducing chip shortages but increasing competition. Commodity price volatility impacting battery costs (lithium, nickel, cobalt). Currency fluctuations affecting international operations and margins. Economic uncertainty influencing luxury vehicle purchases.'
  } },

  // --- V. ANALYST SENTIMENT & WALL STREET VIEWS ---
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'V. Analyst Sentiment & Wall Street Views', type: 'main_category' } },
  
  // A. Current Analyst Ratings & Price Targets
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Current Analyst Ratings & Price Targets', 
    type: 'category', 
    text: 'Consensus rating: "Hold" with mixed sentiment. 41 analysts: 16 Strong Buy, 2 Moderate Buy, 13 Hold, 10 Strong Sell. Average price target: $292.17 (near current levels). Street-high target: $500 (Wedbush). Goldman Sachs lowered target from $295 to $285. Wide range reflects uncertainty about autonomous driving timeline and profitability recovery.'
  } },
  
  // B. Bull Case Arguments
  { group: 'nodes', data: { 
    id: 'bull_case', 
    label: 'Analyst Bull Case Arguments', 
    type: 'category', 
    text: 'Robotaxi potential could unlock trillion-dollar valuation if successful. Energy storage business showing strong growth (+67% YoY). Musk renewed focus on Tesla operations. Optimus robot representing massive TAM opportunity. FSD technology lead over competitors. Supercharger network moats with NACS adoption. Manufacturing efficiency improvements through "unboxed" process.'
  } },
  
  // C. Bear Case Concerns
  { group: 'nodes', data: { 
    id: 'bear_case', 
    label: 'Analyst Bear Case Concerns', 
    type: 'category', 
    text: 'Automotive margin compression due to pricing pressure. BYD and Chinese competition gaining global market share. Autonomous driving timeline uncertainty and regulatory hurdles. High valuation multiples (P/E ~65x) difficult to justify with slowing growth. Execution risk on multiple ambitious projects. Political controversies affecting brand perception and demand.'
  } },
  
  // D. Key Metrics Focus
  { group: 'nodes', data: { 
    id: 'analyst_metrics', 
    label: 'Key Metrics Analysts Are Watching', 
    type: 'category', 
    text: 'Vehicle delivery growth and geographic mix. Automotive gross margins (excluding regulatory credits). Free cash flow generation and CapEx efficiency. FSD subscriber growth and revenue recognition. Energy storage deployment rates and margins. Optimus production milestones. Regulatory credit dependency trends. Market share in key regions.'
  } },

  // E. Earnings Reaction & Sentiment Shifts
  { group: 'nodes', data: { 
    id: 'earnings_sentiment', 
    label: 'Earnings Reactions & Sentiment Evolution', 
    type: 'category', 
    text: 'Q1 2025 earnings beat cash flow expectations but missed revenue/EPS. Stock surged 5%+ after-hours on Musk focus commitment and robotaxi updates. Year-to-date down 41% through April before recent recovery. Analyst downgrades following weak delivery numbers. Positive reactions to robotaxi demonstrations but skepticism about timeline execution.'
  } },

  // --- VI. INDUSTRY ANALYSIS ---
  { group: 'nodes', data: { id: 'industry_analysis', label: 'VI. Industry Analysis', type: 'main_category' } },
  
  // A. Automotive Industry Transformation
  { group: 'nodes', data: { 
    id: 'auto_transformation', 
    label: 'Automotive Industry Transformation', 
    type: 'category', 
    text: 'Industry shifting from ICE to EV with massive CapEx requirements. Legacy OEMs (Ford, GM, Stellantis) struggling with EV profitability and manufacturing scale. New entrants (Rivian, Lucid) facing production and funding challenges. Chinese manufacturers (BYD, NIO, Li Auto) gaining global competitiveness with government support.'
  } },
  
  // B. Technology Convergence Trends
  { group: 'nodes', data: { 
    id: 'tech_convergence', 
    label: 'Technology Convergence & Innovation', 
    type: 'category', 
    text: 'Convergence of automotive, AI, energy, and robotics industries. Software-defined vehicles becoming standard with over-the-air updates. Autonomous driving requiring massive AI compute and data infrastructure. Battery technology improvements driving costs down and energy density up. Manufacturing automation reducing labor content and improving quality.'
  } },
  
  // C. Supply Chain & Manufacturing
  { group: 'nodes', data: { 
    id: 'supply_chain', 
    label: 'Supply Chain & Manufacturing Evolution', 
    type: 'category', 
    text: 'Lithium, nickel, cobalt supply chains critical for battery production. Semiconductor supply normalized after 2021-2022 shortages. Vertical integration trend among EV manufacturers. Regional manufacturing hubs developing to avoid tariffs. Recycling and circular economy approaches emerging for sustainability.'
  } },
  
  // D. Energy & Charging Infrastructure
  { group: 'nodes', data: { 
    id: 'charging_infrastructure', 
    label: 'Charging Infrastructure & Energy Ecosystem', 
    type: 'category', 
    text: 'Charging infrastructure buildout accelerating with government funding. NACS standard emerging as dominant connector in North America. Grid integration challenges requiring energy storage solutions. Renewable energy sources increasingly powering charging networks. Vehicle-to-grid (V2G) technology developing for bidirectional energy flow.'
  } },

  // E. Regulatory & Policy Landscape
  { group: 'nodes', data: { 
    id: 'policy_landscape', 
    label: 'Regulatory & Policy Landscape', 
    type: 'category', 
    text: 'Government EV mandates and ICE phase-out timelines driving adoption. Safety regulations for autonomous vehicles still evolving. Environmental regulations favoring electric powertrains. Trade policies and tariffs affecting global EV competition. Data privacy and cybersecurity requirements for connected vehicles.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  
  // A. Direct EV Competitors
  { group: 'nodes', data: { id: 'ev_competitors', label: 'Direct EV Competitors', type: 'category' } },
  
  // BYD - Major Chinese competitor
  { group: 'nodes', data: { 
    id: 'byd_competitive', 
    label: 'BYD Competition Analysis', 
    type: 'competitor', 
    text: 'BYD overtook Tesla in global BEV sales in Q4 2024. Strengths: Lower pricing, vertical battery integration, strong China market position. Q1 2025: 14.1% YoY growth vs Tesla\'s decline. Blade battery technology and diverse product lineup. Expanding globally but limited brand recognition outside China. Price war strategy pressuring Tesla margins.'
  } },
  
  // Legacy OEMs
  { group: 'nodes', data: { 
    id: 'legacy_oems', 
    label: 'Legacy OEM Competition', 
    type: 'competitor', 
    text: 'Ford (Lightning, Mustang Mach-E), GM (Ultium platform), Stellantis (Ram 1500 REV) ramping EV production. Advantages: Established dealer networks, financing arms, brand loyalty. Challenges: Legacy costs, ICE cannibalization, EV profitability struggles. Mercedes EQS, BMW iX competing in luxury segment. Volkswagen ID series gaining European traction.'
  } },
  
  // Autonomous Driving Competitors
  { group: 'nodes', data: { 
    id: 'autonomy_competitors', 
    label: 'Autonomous Driving Competition', 
    type: 'competitor', 
    text: 'Waymo leading with 10M+ driverless rides, superior safety record, and geofenced operations. Cruise suspended operations after 2023 incident. Chinese companies (Apollo Go, WeRide) advancing rapidly. Tesla\'s vision-only approach vs competitors\' lidar+camera systems. Different strategies: geofenced operations vs generalized AI approach.'
  } },
  
  // B. Technology & Platform Competition
  { group: 'nodes', data: { 
    id: 'platform_competition', 
    label: 'Technology Platform Competition', 
    type: 'category', 
    text: 'Charging networks: Tesla Supercharger vs Electrify America, IONITY. Energy storage: Tesla Megapack vs Fluence, CATL, LG Energy. Software platforms: Tesla OS vs Google Android Automotive, Apple CarPlay. Battery technology: Tesla 4680 vs CATL CTP, BYD Blade, QuantumScape solid-state.'
  } },
  
  // C. Competitive Advantages Analysis
  { group: 'nodes', data: { 
    id: 'competitive_advantages', 
    label: 'Tesla Competitive Advantages', 
    type: 'category', 
    text: 'Supercharger network (>50,000 stations) becoming industry standard. Vertical integration: batteries, chips, software, manufacturing. Brand strength and customer loyalty in premium segments. Software and over-the-air updates capability. Energy ecosystem integration (solar, storage, charging). Manufacturing efficiency and scale economies.'
  } },
  
  // D. Competitive Threats & Vulnerabilities
  { group: 'nodes', data: { 
    id: 'competitive_threats', 
    label: 'Competitive Threats & Vulnerabilities', 
    type: 'category', 
    text: 'Chinese manufacturers with lower cost structures and government support. Legacy OEMs with established relationships and financing capabilities. Technology giants (Apple, Google) potentially entering automotive. Price pressure forcing margin compression. Brand perception risks from political controversies. Autonomous driving timeline lag vs specialized competitors.'
  } },

  // --- VIII. SWOT ANALYSIS & OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Future Outlook', type: 'main_category' } },
  
  // A. Strengths
  { group: 'nodes', data: { id: 'swot_strengths', label: 'Strengths', type: 'category' } },
  
  { group: 'nodes', data: { 
    id: 'strength_technology', 
    label: 'Technology Leadership', 
    type: 'swot_strength', 
    text: 'Leading EV technology with continuous innovation in batteries, software, and manufacturing. Superior charging infrastructure with NACS becoming industry standard. Advanced AI and machine learning capabilities for autonomous driving. Vertical integration providing cost advantages and quality control. Software-first approach enabling new revenue streams.'
  } },
  
  { group: 'nodes', data: { 
    id: 'strength_brand', 
    label: 'Brand & Market Position', 
    type: 'swot_strength', 
    text: 'Strong brand recognition and customer loyalty in premium EV segment. First-mover advantage in mass-market EVs. Visionary leadership with Elon Musk driving innovation culture. Global manufacturing footprint with strategic Gigafactory locations. Energy ecosystem providing diversification beyond automotive.'
  } },
  
  { group: 'nodes', data: { 
    id: 'strength_execution', 
    label: 'Execution & Scale', 
    type: 'swot_strength', 
    text: 'Proven ability to scale manufacturing and achieve production targets. Strong cash generation and balance sheet flexibility. Continuous cost reduction through manufacturing innovation. Ability to attract top engineering talent globally. Track record of disrupting traditional industries.'
  } },
  
  // B. Weaknesses
  { group: 'nodes', data: { id: 'swot_weaknesses', label: 'Weaknesses', type: 'category' } },
  
  { group: 'nodes', data: { 
    id: 'weakness_execution', 
    label: 'Execution & Timeline Risks', 
    type: 'swot_weakness', 
    text: 'History of missed deadlines and overly ambitious targets. Key person risk with heavy dependence on Elon Musk. Execution challenges across multiple complex projects simultaneously. Quality control issues in production ramp periods. Limited model diversity compared to traditional automakers.'
  } },
  
  { group: 'nodes', data: { 
    id: 'weakness_market', 
    label: 'Market & Operational Challenges', 
    type: 'swot_weakness', 
    text: 'Margin pressure from pricing strategy to maintain market share. Limited presence in commercial vehicle and lower-price segments. Regulatory credit dependency for profitability. Service network still developing compared to legacy automakers. Political controversies affecting brand perception.'
  } },
  
  // C. Opportunities
  { group: 'nodes', data: { id: 'swot_opportunities', label: 'Opportunities', type: 'category' } },
  
  { group: 'nodes', data: { 
    id: 'opportunity_autonomy', 
    label: 'Autonomous Driving Revolution', 
    type: 'swot_opportunity', 
    text: 'Robotaxi market potentially worth trillions if technology succeeds. FSD subscription revenue creating high-margin recurring income. Fleet optimization and utilization improvements. Insurance cost reductions from improved safety. Network effects from data collection across vehicle fleet.'
  } },
  
  { group: 'nodes', data: { 
    id: 'opportunity_energy', 
    label: 'Energy & Sustainability Market', 
    type: 'swot_opportunity', 
    text: 'Massive energy storage market driven by renewable adoption. Grid services and virtual power plant opportunities. Vehicle-to-grid integration creating new revenue streams. Global expansion of Supercharger network monetization. Carbon credit markets and sustainability services.'
  } },
  
  { group: 'nodes', data: { 
    id: 'opportunity_ai_robotics', 
    label: 'AI & Robotics Expansion', 
    type: 'swot_opportunity', 
    text: 'Optimus robot market potentially larger than automotive business. AI services and compute infrastructure monetization. Manufacturing automation reducing costs and improving quality. Dojo supercomputer competing with NVIDIA in AI training. Cross-platform AI technology leveraging across businesses.'
  } },
  
  // D. Threats
  { group: 'nodes', data: { id: 'swot_threats', label: 'Threats', type: 'category' } },
  
  { group: 'nodes', data: { 
    id: 'threat_competition', 
    label: 'Intensifying Competition', 
    type: 'swot_threat', 
    text: 'Chinese manufacturers with lower costs and government support. Legacy OEMs with established customer relationships and financing. Technology giants potentially entering automotive market. Price wars compressing margins across industry. Market share erosion in key geographic regions.'
  } },
  
  { group: 'nodes', data: { 
    id: 'threat_regulatory', 
    label: 'Regulatory & Policy Risks', 
    type: 'swot_threat', 
    text: 'Autonomous driving regulations could delay or restrict deployment. Trade wars and tariffs affecting global operations. Safety incidents potentially damaging brand and regulatory approval. Environmental regulations changing competitive landscape. Data privacy and cybersecurity requirements increasing compliance costs.'
  } },
  
  { group: 'nodes', data: { 
    id: 'threat_market', 
    label: 'Market & Economic Risks', 
    type: 'swot_threat', 
    text: 'Economic downturns affecting luxury vehicle demand. Interest rate impacts on vehicle financing. Supply chain disruptions and commodity price volatility. Currency fluctuations affecting international operations. Technology disruption from unexpected innovations.'
  } },
  
  // E. Future Outlook & Strategic Priorities
  { group: 'nodes', data: { 
    id: 'future_outlook', 
    label: 'Future Outlook & Strategic Priorities', 
    type: 'category', 
    text: '2025-2030 Strategic Focus: Robotaxi deployment and scaling, Optimus robot commercialization, affordable vehicle platform ($25-30K price point), energy storage expansion, FSD monetization. Key milestones: Austin robotaxi launch (June 2025), Cybercab production (2026), millions of autonomous vehicles (2026-2027). Success depends on execution across multiple fronts while maintaining profitability.'
  } },

  // EDGES (Relationships)
  // Central connections
  { group: 'edges', data: { source: 'tsla', target: 'company_info' } },
  { group: 'edges', data: { source: 'tsla', target: 'financial_performance' } },
  { group: 'edges', data: { source: 'tsla', target: 'recent_developments' } },
  { group: 'edges', data: { source: 'tsla', target: 'market_landscape' } },
  { group: 'edges', data: { source: 'tsla', target: 'analyst_sentiment' } },
  { group: 'edges', data: { source: 'tsla', target: 'industry_analysis' } },
  { group: 'edges', data: { source: 'tsla', target: 'competitive_analysis' } },
  { group: 'edges', data: { source: 'tsla', target: 'swot_outlook' } },

  // Company Info connections
  { group: 'edges', data: { source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { source: 'company_info', target: 'business_segments' } },
  { group: 'edges', data: { source: 'business_segments', target: 'automotive_segment' } },
  { group: 'edges', data: { source: 'business_segments', target: 'energy_segment' } },
  { group: 'edges', data: { source: 'business_segments', target: 'services_segment' } },
  { group: 'edges', data: { source: 'business_segments', target: 'supercharging_segment' } },
  { group: 'edges', data: { source: 'business_segments', target: 'credits_segment' } },
  { group: 'edges', data: { source: 'company_info', target: 'geographic_mix' } },
  { group: 'edges', data: { source: 'company_info', target: 'manufacturing_operations' } },

  // Financial Performance connections
  { group: 'edges', data: { source: 'financial_performance', target: 'q1_2025_results' } },
  { group: 'edges', data: { source: 'financial_performance', target: 'financial_metrics' } },
  { group: 'edges', data: { source: 'financial_performance', target: 'historical_performance' } },
  { group: 'edges', data: { source: 'financial_performance', target: 'capital_allocation' } },
  { group: 'edges', data: { source: 'financial_performance', target: 'profitability_analysis' } },

  // Recent Developments connections
  { group: 'edges', data: { source: 'recent_developments', target: 'robotaxi_program' } },
  { group: 'edges', data: { source: 'recent_developments', target: 'optimus_robot' } },
  { group: 'edges', data: { source: 'recent_developments', target: 'model_updates' } },
  { group: 'edges', data: { source: 'recent_developments', target: 'leadership_focus' } },
  { group: 'edges', data: { source: 'recent_developments', target: 'technology_innovation' } },

  // Market Landscape connections
  { group: 'edges', data: { source: 'market_landscape', target: 'ev_market_dynamics' } },
  { group: 'edges', data: { source: 'market_landscape', target: 'geographic_markets' } },
  { group: 'edges', data: { source: 'market_landscape', target: 'technology_trends' } },
  { group: 'edges', data: { source: 'market_landscape', target: 'regulatory_environment' } },
  { group: 'edges', data: { source: 'market_landscape', target: 'macro_factors' } },

  // Analyst Sentiment connections
  { group: 'edges', data: { source: 'analyst_sentiment', target: 'analyst_ratings' } },
  { group: 'edges', data: { source: 'analyst_sentiment', target: 'bull_case' } },
  { group: 'edges', data: { source: 'analyst_sentiment', target: 'bear_case' } },
  { group: 'edges', data: { source: 'analyst_sentiment', target: 'analyst_metrics' } },
  { group: 'edges', data: { source: 'analyst_sentiment', target: 'earnings_sentiment' } },

  // Industry Analysis connections
  { group: 'edges', data: { source: 'industry_analysis', target: 'auto_transformation' } },
  { group: 'edges', data: { source: 'industry_analysis', target: 'tech_convergence' } },
  { group: 'edges', data: { source: 'industry_analysis', target: 'supply_chain' } },
  { group: 'edges', data: { source: 'industry_analysis', target: 'charging_infrastructure' } },
  { group: 'edges', data: { source: 'industry_analysis', target: 'policy_landscape' } },

  // Competitive Analysis connections
  { group: 'edges', data: { source: 'competitive_analysis', target: 'ev_competitors' } },
  { group: 'edges', data: { source: 'ev_competitors', target: 'byd_competitive' } },
  { group: 'edges', data: { source: 'ev_competitors', target: 'legacy_oems' } },
  { group: 'edges', data: { source: 'ev_competitors', target: 'autonomy_competitors' } },
  { group: 'edges', data: { source: 'competitive_analysis', target: 'platform_competition' } },
  { group: 'edges', data: { source: 'competitive_analysis', target: 'competitive_advantages' } },
  { group: 'edges', data: { source: 'competitive_analysis', target: 'competitive_threats' } },

  // SWOT connections
  { group: 'edges', data: { source: 'swot_outlook', target: 'swot_strengths' } },
  { group: 'edges', data: { source: 'swot_strengths', target: 'strength_technology' } },
  { group: 'edges', data: { source: 'swot_strengths', target: 'strength_brand' } },
  { group: 'edges', data: { source: 'swot_strengths', target: 'strength_execution' } },
  
  { group: 'edges', data: { source: 'swot_outlook', target: 'swot_weaknesses' } },
  { group: 'edges', data: { source: 'swot_weaknesses', target: 'weakness_execution' } },
  { group: 'edges', data: { source: 'swot_weaknesses', target: 'weakness_market' } },
  
  { group: 'edges', data: { source: 'swot_outlook', target: 'swot_opportunities' } },
  { group: 'edges', data: { source: 'swot_opportunities', target: 'opportunity_autonomy' } },
  { group: 'edges', data: { source: 'swot_opportunities', target: 'opportunity_energy' } },
  { group: 'edges', data: { source: 'swot_opportunities', target: 'opportunity_ai_robotics' } },
  
  { group: 'edges', data: { source: 'swot_outlook', target: 'swot_threats' } },
  { group: 'edges', data: { source: 'swot_threats', target: 'threat_competition' } },
  { group: 'edges', data: { source: 'swot_threats', target: 'threat_regulatory' } },
  { group: 'edges', data: { source: 'swot_threats', target: 'threat_market' } },
  
  { group: 'edges', data: { source: 'swot_outlook', target: 'future_outlook' } },

  // Cross-category relationships
  { group: 'edges', data: { source: 'robotaxi_program', target: 'opportunity_autonomy' } },
  { group: 'edges', data: { source: 'optimus_robot', target: 'opportunity_ai_robotics' } },
  { group: 'edges', data: { source: 'energy_segment', target: 'opportunity_energy' } },
  { group: 'edges', data: { source: 'byd_competitive', target: 'threat_competition' } },
  { group: 'edges', data: { source: 'profitability_analysis', target: 'weakness_market' } },
  { group: 'edges', data: { source: 'supercharging_segment', target: 'strength_technology' } },
  { group: 'edges', data: { source: 'leadership_focus', target: 'weakness_execution' } },
  { group: 'edges', data: { source: 'regulatory_environment', target: 'threat_regulatory' } }
]; 