import type { GraphElement } from '../components/KnowledgeGraph.astro';

// NVIDIA company metadata for UI integration
export const nvidiaMetadata = {
  companyName: 'NVIDIA Corporation',
  ticker: 'NVDA',
  exchange: 'NASDAQ',
  marketCap: '$3.3T',
  latestQuarter: 'Q1 FY2026',
  keyMetrics: {
    revenue: { value: '$44.1B', change: '+69% YoY', isPositive: true },
    eps: { value: '$0.96', change: 'Ex-H20 charges', isPositive: true },
    grossMargin: { value: '71.3%', change: 'Ex-H20 charges', isPositive: true },
    datacenterRevenue: { value: '$39.1B', change: '+73% YoY', isPositive: true }
  },
  segments: [
    { id: 'datacenter_segment', name: 'Data Center', percentage: 88, revenue: '$39.1B' },
    { id: 'gaming_segment', name: 'Gaming', percentage: 9, revenue: '$3.8B' },
    { id: 'provis_segment', name: 'Professional Visualization', percentage: 1, revenue: '$509M' },
    { id: 'automotive_segment', name: 'Automotive', percentage: 1, revenue: '$567M' },
    { id: 'oem_segment', name: 'OEM & Other', percentage: 1, revenue: '$126M' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '🏢', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '🚀', priority: 3 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 4 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📈', priority: 5 },
    { id: 'industry_analysis', name: 'Industry Analysis', icon: '🏭', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return nvidiaGraphElements.filter(element => 
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
  return nvidiaGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = nvidiaGraphElements.filter(el => el.group === 'nodes');
  const edges = nvidiaGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const nvidiaGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'nvda', label: 'NVIDIA Corp. (NVDA)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Profile
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile', 
    type: 'category', 
    text: 'Founded 1993 by Jensen Huang, Chris Malachowsky, and Curtis Priem. Headquarters: Santa Clara, California. CEO: Jensen Huang (since founding). ~36,000 employees globally. Market cap: ~$3.3 trillion (May 2025). Mission: "To solve problems that ordinary computers cannot." Listed on NASDAQ under NVDA ticker.'
  } },
  
  // B. Core Business Segments
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // Revenue breakdown with latest Q1 FY2026 data
  { group: 'nodes', data: { 
    id: 'datacenter_segment', 
    label: 'Data Center (88% of Revenue)', 
    type: 'segment', 
    text: 'Q1 FY2026: $39.1B revenue (88% of total, +73% YoY). AI accelerators including Hopper H100 and new Blackwell architecture (B100, B200, GB200). $11B from Blackwell in first quarter. DGX systems and SuperPODs for enterprise AI. Networking products ($5B) including Mellanox InfiniBand, NVLink, BlueField DPUs. Grace CPU for CPU-GPU supercomputing.'
  } },
  
  { group: 'nodes', data: { 
    id: 'gaming_segment', 
    label: 'Gaming (9% of Revenue)', 
    type: 'segment', 
    text: 'Q1 FY2026: $3.8B revenue (record high, +42% YoY). GeForce RTX GPUs dominating discrete graphics (~90% market share). RTX 40-series (Ada Lovelace) transitioning to RTX 50-series (Blackwell). Features: Ray tracing, DLSS AI upscaling, Frame Generation. GeForce NOW cloud gaming service. Nintendo Switch 2 partnership announced.'
  } },
  
  { group: 'nodes', data: { 
    id: 'provis_segment', 
    label: 'Professional Visualization (1% of Revenue)', 
    type: 'segment', 
    text: 'Q1 FY2026: $509M revenue (+19% YoY). RTX Pro GPUs for workstations replacing Quadro brand. Omniverse platform for 3D collaboration and digital twins. AI-powered design, simulation, and engineering workloads. Strong adoption in media, architecture, manufacturing. DGX Spark and DGX Station for AI workstations.'
  } },
  
  { group: 'nodes', data: { 
    id: 'automotive_segment', 
    label: 'Automotive & Robotics (1% of Revenue)', 
    type: 'segment', 
    text: 'Q1 FY2026: $567M revenue (+72% YoY). NVIDIA DRIVE platform for autonomous vehicles including DRIVE Orin and upcoming Thor. Partnerships with Toyota, GM, and other automakers. Jetson modules for robotics and edge AI. Isaac GR00T humanoid robot foundation models. Over $11B design-win pipeline through 2028.'
  } },

  { group: 'nodes', data: { 
    id: 'oem_segment', 
    label: 'OEM & Other (1% of Revenue)', 
    type: 'segment', 
    text: 'Q1 FY2026: $126M revenue (+40% YoY). GeForce MX mobile GPUs, Nintendo Switch components, and other OEM partnerships. Legacy crypto-mining sales and embedded GPU IP licensing. Smallest segment but growing due to expanding partnerships and platform integrations.'
  } },

  // C. Geographic Distribution
  { group: 'nodes', data: { 
    id: 'geographic_mix', 
    label: 'Geographic Revenue Distribution', 
    type: 'category', 
    text: 'Q1 FY2026: US dominates revenue (~60%), Singapore billing hub (18% of revenue), with products shipped globally. China market "effectively closed" per CEO due to H20 export restrictions costing $8B+ in Q2 guidance. Strong growth in Europe, Japan, and other Asia-Pacific markets. US AI factory buildouts driving domestic revenue growth.'
  } },

  // D. Business Model & Technology Platform
  { group: 'nodes', data: { 
    id: 'business_model', 
    label: 'Full-Stack AI Computing Platform', 
    type: 'category', 
    text: 'Vertically integrated platform combining hardware (GPUs, CPUs, DPUs), software (CUDA, AI Enterprise), and services. CUDA software ecosystem with high switching costs creates durable moat. Hardware design with fabless manufacturing model (TSMC). Transition from gaming-focused to AI-first company. Revenue increasingly recurring through software and cloud services.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q1 FY2026)
  { group: 'nodes', data: { 
    id: 'q1_fy2026_results', 
    label: 'Q1 FY2026 Financial Results', 
    type: 'category', 
    text: 'Revenue: $44.1B (+69% YoY), beating estimates of $43.3B. EPS: $0.96 adjusted (ex-H20 charges) vs $0.93 expected. GAAP EPS: $0.76 including $4.5B H20 inventory charge. Gross margin: 71.3% (ex-H20) vs 61% GAAP. Operating income: $21.6B. Record quarter despite China restrictions. 10th consecutive quarter of growth.'
  } },
  
  // B. Key Financial Metrics
  { group: 'nodes', data: { 
    id: 'financial_metrics', 
    label: 'Key Financial Metrics & Ratios', 
    type: 'category', 
    text: 'Market Cap: ~$3.3T (peak). Revenue run-rate: ~$176B annually. Gross margins: 70%+ (industry-leading). Free cash flow: $26.1B in Q1. Cash & securities: $53.7B. P/E ratio: ~30-45x. ROE: >100%. ROIC: ~175% (exceptional capital efficiency). Operating margins: 50%+ reflecting AI premium pricing and scale.'
  } },
  
  // C. Historical Performance & Growth
  { group: 'nodes', data: { 
    id: 'historical_performance', 
    label: 'Explosive Historical Growth', 
    type: 'category', 
    text: 'FY2025 revenue: $130.5B (+114% YoY) vs FY2024 $60.9B vs FY2023 $27B. Net income FY2025: $72.9B (+145% YoY). Data Center revenue grew from $15B (FY2023) to $115B (FY2025) - 9x in 2 years. Market cap grew from ~$300B to $3.3T peak. Fastest company to reach $1T and $2T valuations. Gaming now <10% vs historically >50% of revenue.'
  } },
  
  // D. Capital Return Program
  { group: 'nodes', data: { 
    id: 'capital_return', 
    label: 'Capital Return Program', 
    type: 'category', 
    text: 'Q1 FY2026: $14.1B in share repurchases. Quarterly dividend: $0.01/share ($244M total). Strong balance sheet enables aggressive buybacks. Focus on repurchases over dividends given growth opportunities. 10-for-1 stock split completed June 2024 to improve accessibility. Free cash flow of $100B+ annually supports substantial returns.'
  } },

  // E. Segment Performance Analysis
  { group: 'nodes', data: { 
    id: 'segment_performance', 
    label: 'Business Segment Performance', 
    type: 'category', 
    text: 'Data Center dominance at 88% of revenue with 73% YoY growth. Gaming recovery with record $3.8B (+42% YoY) despite supply constraints. Professional Visualization steady at 19% growth. Automotive accelerating at 72% growth from design-win ramp. Strong momentum across all segments despite China headwinds.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. Blackwell Architecture Launch
  { group: 'nodes', data: { 
    id: 'blackwell_launch', 
    label: 'Blackwell Architecture Revolution', 
    type: 'category', 
    text: 'March 2024: Unveiled Blackwell GPU architecture for AI reasoning. Q1 FY2026: $11B Blackwell revenue in first quarter - fastest product ramp in company history. Products: B100, B200, GB200 superchips. Blackwell NVL72 "thinking machines" in production. 30x performance improvement in MLPerf inference results. Full-year production pre-sold to customers.'
  } },
  
  // Latest Blackwell developments
  { group: 'nodes', data: { 
    id: 'blackwell_updates', 
    label: 'Latest Blackwell Developments (Q1 2026)', 
    type: 'subcategory', 
    text: 'Blackwell Ultra announced for enhanced AI reasoning. Available on AWS, Google Cloud, Microsoft Azure, Oracle Cloud. Microsoft deploying "tens of thousands" scaling to "hundreds of thousands" of GB200s. Blackwell for gaming: RTX 5070 and RTX 5060 announced starting $299. DLSS 4 available in 125+ games.'
  } },
  
  // B. Geopolitical & China Impact
  { group: 'nodes', data: { 
    id: 'china_restrictions', 
    label: 'China Export Restrictions Impact', 
    type: 'category', 
    text: 'April 2025: US government required export license for H20 chips to China. $4.5B inventory charge in Q1, $8B revenue loss expected in Q2. CEO: "$50B China AI market effectively closed to US industry." H20 sales were $4.6B in Q1 before restrictions. Company pivoting to other markets and domestic US production.'
  } },
  
  // C. AI Infrastructure Expansion
  { group: 'nodes', data: { 
    id: 'ai_infrastructure', 
    label: 'Global AI Infrastructure Expansion', 
    type: 'category', 
    text: 'Building AI factories in US with partners. Announced partnerships: Saudi Arabia with HUMAIN, UAE Stargate with G42/OpenAI, Taiwan with Foxconn. RTX PRO servers for enterprise AI transition. NVLink Fusion for custom AI infrastructure. Spectrum-X and Quantum-X networking for million-GPU scale. DGX Cloud Lepton global compute ecosystem.'
  } },
  
  // D. Product Innovation Pipeline
  { group: 'nodes', data: { 
    id: 'product_innovation', 
    label: 'Product Innovation & Roadmap', 
    type: 'category', 
    text: 'Announced roadmap beyond Blackwell: Vera Rubin (next-gen) and future architectures. NVIDIA Cosmos for robotics and physical AI. Isaac GR00T humanoid robot models. Nintendo Switch 2 partnership with custom Tegra. DGX Spark and DGX Station AI workstations. Open-source Llama Nemotron model family for reasoning AI.'
  } },

  // --- IV. MARKET & TECHNOLOGY LANDSCAPE ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'IV. Market & Technology Landscape', type: 'main_category' } },
  
  // A. AI Accelerator Market Leadership
  { group: 'nodes', data: { 
    id: 'ai_accelerator_market', 
    label: 'AI Accelerator Market Dominance', 
    type: 'category', 
    text: 'NVIDIA holds ~80-95% share of AI accelerator market. Total addressable market (TAM) projected $400B by 2027 (~70% CAGR). AI training dominated by H100/B200, inference growing with optimized chips. Competition from Google TPU (~internal), Amazon Trainium/Inferentia, custom ASICs. CUDA software ecosystem creates high switching costs for developers.'
  } },
  
  // B. Data Center AI Market
  { group: 'nodes', data: { 
    id: 'datacenter_ai_market', 
    label: 'Data Center AI Market Dynamics', 
    type: 'category', 
    text: 'Hyperscale cloud providers (AWS, Google, Microsoft, Oracle) major customers. Enterprise AI adoption accelerating with AI factories concept. Inference token generation up 10x in one year per CEO. AI agents driving next wave of compute demand. Networking becoming critical with multi-GPU clusters. Edge AI emerging market for inference deployment.'
  } },
  
  // C. Gaming Market Position
  { group: 'nodes', data: { 
    id: 'gaming_market_position', 
    label: 'Gaming Market Leadership', 
    type: 'category', 
    text: 'Discrete GPU market: ~90% market share vs AMD. Gaming revenue rebounding to record $3.8B after crypto crash recovery. RTX ecosystem with ray tracing and DLSS AI becoming standard. AI PC integration with RTX for local AI workloads. Nintendo Switch 2 partnership securing handheld gaming future. GeForce NOW cloud gaming expanding globally.'
  } },
  
  // D. Emerging Technology Platforms
  { group: 'nodes', data: { 
    id: 'emerging_platforms', 
    label: 'Emerging Technology Opportunities', 
    type: 'category', 
    text: 'Autonomous vehicles: DRIVE platform in Toyota, GM partnerships. Robotics: Isaac platform and GR00T models for humanoids. Digital twins: Omniverse for industrial simulation. Quantum computing: Supporting quantum research centers. Healthcare AI: MONAI medical imaging, drug discovery. Climate modeling: Earth-2 digital twin project.'
  } },

  // E. Industry Technology Trends
  { group: 'nodes', data: { 
    id: 'technology_trends', 
    label: 'Key Technology Trends', 
    type: 'category', 
    text: 'Generative AI mainstream adoption driving compute demand. Model training moving to inference at scale. Multimodal AI (text, image, video) requiring more compute. Edge AI deployment for real-time applications. Custom silicon development by cloud providers. Software-defined infrastructure becoming standard. Physical AI for robotics and autonomous systems emerging.'
  } },

  // --- V. ANALYST SENTIMENT & RATINGS ---
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'V. Analyst Sentiment & Wall Street Views', type: 'main_category' } },
  
  // A. Current Ratings & Price Targets
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Analyst Ratings & Price Targets', 
    type: 'category', 
    text: 'Consensus: Strong Buy rating from majority of analysts. Average price targets: $150-200+ range. Morgan Stanley "Top Pick" after DeepSeek selloff. Post-earnings: Stock up 6% in extended trading. P/E ratio: 30-45x considered reasonable for growth profile. Most analysts view recent China restrictions as manageable headwind.'
  } },
  
  // B. Investment Themes & Catalysts
  { group: 'nodes', data: { 
    id: 'investment_themes', 
    label: 'Key Investment Themes', 
    type: 'category', 
    text: 'AI Infrastructure Buildout: Multi-year capex cycle by cloud providers. Software Monetization: CUDA ecosystem and AI Enterprise recurring revenue. Platform Expansion: CPU (Grace), networking (Mellanox), robotics opportunities. Geographic Diversification: Reducing China dependency, growing US/Europe. Blackwell Ramp: Fastest product launch driving 2025-2026 growth.'
  } },

  // C. Valuation & Risk Assessment
  { group: 'nodes', data: { 
    id: 'valuation_analysis', 
    label: 'Valuation Analysis & Risks', 
    type: 'category', 
    text: 'Valuation: P/E ~35x forward vs 15x historical average reflecting AI premium. PEG ratio reasonable given 50%+ growth rates. Key risks: China restrictions ($8B+ impact), competition from custom chips, cyclical demand patterns. DeepSeek concerns proved overblown with continued strong demand. Free cash flow yield supports current valuation levels.'
  } },

  // D. Earnings Forecast & Guidance
  { group: 'nodes', data: { 
    id: 'earnings_forecast', 
    label: 'Earnings Forecast & Company Guidance', 
    type: 'category', 
    text: 'Q2 FY2026 guidance: $45B revenue (+/-2%), would be 10th consecutive growth quarter. Full-year FY2026: Expecting continued strong growth despite China headwinds. Gross margins recovering to mid-70s by late 2025. Operating expense growth ~35% annually to support expansion. Analysts raising estimates post-earnings beat.'
  } },

  // --- VI. INDUSTRY ANALYSIS (PORTER\'S FIVE FORCES) ---
  { group: 'nodes', data: { id: 'industry_analysis', label: 'VI. Industry Analysis', type: 'main_category' } },
  
  // A. Competitive Rivalry
  { group: 'nodes', data: { 
    id: 'competitive_rivalry', 
    label: 'Competitive Rivalry (MODERATE-HIGH)', 
    type: 'category', 
    text: 'Intense competition emerging but NVIDIA currently dominates. GPU competition from AMD (ROCm ecosystem lagging CUDA). Intel attempting GPU entry with limited success. Cloud providers developing custom silicon (Google TPU, Amazon Trainium). Startups in specialized niches (Cerebras, Graphcore, SambaNova). NVIDIA\'s CUDA moat and performance leadership maintain advantage.'
  } },
  
  // B. Barriers to Entry
  { group: 'nodes', data: { 
    id: 'barriers_entry', 
    label: 'Threat of New Entrants (LOW)', 
    type: 'category', 
    text: 'Extremely high barriers: $10B+ R&D to develop competitive GPU architecture. CUDA software ecosystem built over 15+ years with massive developer investment. Access to advanced TSMC manufacturing nodes limited. AI chip design requires specialized talent and IP. Hardware-software integration complexity. Scale economics in procurement and manufacturing create cost advantages.'
  } },
  
  // C. Supplier Power
  { group: 'nodes', data: { 
    id: 'supplier_power', 
    label: 'Bargaining Power of Suppliers (MODERATE-HIGH)', 
    type: 'category', 
    text: 'High dependence on TSMC for advanced manufacturing (5nm, 4nm, 3nm processes). TSMC is essentially only supplier for cutting-edge chips. HBM memory suppliers (Samsung, SK Hynix) have pricing power in tight market. NVIDIA\'s scale provides some leverage but strategic suppliers retain significant power. Geographic concentration in Taiwan creates supply chain risk.'
  } },

  // D. Buyer Power
  { group: 'nodes', data: { 
    id: 'buyer_power', 
    label: 'Bargaining Power of Buyers (MODERATE)', 
    type: 'category', 
    text: 'Large cloud customers (Microsoft, Google, Amazon) have significant negotiating power on volume purchases. Demand currently exceeds supply limiting buyer leverage. Enterprise customers have fewer alternatives due to CUDA ecosystem lock-in. Consumer gaming market fragmented with limited buyer power. Automotive customers negotiate on long-term design cycles.'
  } },

  // E. Substitute Threats
  { group: 'nodes', data: { 
    id: 'substitute_threats', 
    label: 'Threat of Substitutes (MODERATE)', 
    type: 'category', 
    text: 'Custom ASICs for specific AI workloads (Google TPUs for internal use). FPGAs for certain inference applications. CPUs with AI acceleration features. Quantum computing for specific problem sets (long-term). More efficient AI algorithms reducing compute requirements (DeepSeek impact limited). Edge computing reducing data center demand for some applications.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  
  // A. Direct GPU Competitors
  { group: 'nodes', data: { 
    id: 'amd_competition', 
    label: 'AMD: Primary GPU Competitor', 
    type: 'competitor', 
    text: 'Market share: ~10-15% discrete GPUs, minimal in AI accelerators. Strengths: Radeon RX 7000 series competitive in gaming price/performance, MI300X targeting AI market. Weaknesses: ROCm software ecosystem significantly behind CUDA, limited AI market penetration. NVIDIA advantages: Software ecosystem, performance leadership, brand strength, developer mindshare.'
  } },
  
  { group: 'nodes', data: { 
    id: 'intel_competition', 
    label: 'Intel: Multi-Front Competitor', 
    type: 'competitor', 
    text: 'GPU efforts: Arc discrete GPUs gaining minimal share, data center GPU Max struggling. CPU competition: Xeon vs Grace ARM. Automotive: Mobileye dominates ADAS vs NVIDIA DRIVE. Strengths: Established CPU relationships, Mobileye automotive position. Weaknesses: GPU execution issues, foundry challenges, limited AI software ecosystem.'
  } },

  // B. Cloud Provider Custom Silicon
  { group: 'nodes', data: { 
    id: 'cloud_custom_silicon', 
    label: 'Cloud Provider In-House Silicon', 
    type: 'competitor', 
    text: 'Google TPU: Largest internal deployment, offered on Google Cloud. Amazon Trainium/Inferentia: Cost-optimized for AWS workloads. Meta AI chips: Internal development for massive scale. Microsoft: Rumored custom silicon projects. Threat: Reduces dependency on NVIDIA for largest customers. NVIDIA counter: Superior performance, software ecosystem, time-to-market advantages.'
  } },
  
  // C. AI Chip Startups
  { group: 'nodes', data: { 
    id: 'ai_chip_startups', 
    label: 'AI Chip Startup Ecosystem', 
    type: 'competitor', 
    text: 'Cerebras: Wafer-scale engines for large model training. Graphcore: IPU architecture for graph processing. SambaNova: DataScale systems for enterprise AI. Groq: LPU inference processors. Chinese competitors: Biren, Cambricon despite export restrictions. Generally niche players with limited ecosystem development vs NVIDIA\'s platform approach.'
  } },

  // D. Traditional Semiconductor Companies
  { group: 'nodes', data: { 
    id: 'traditional_semis', 
    label: 'Traditional Semiconductor Competitors', 
    type: 'competitor', 
    text: 'Qualcomm: Snapdragon automotive and edge AI. Broadcom: Custom ASIC design services. Marvell: Data center acceleration chips. MediaTek: Edge AI and mobile processors. These companies targeting specific niches rather than NVIDIA\'s general-purpose parallel computing platform. Limited threat to core GPU business but compete in adjacent markets.'
  } },

  // --- VIII. SWOT ANALYSIS & OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Future Outlook', type: 'main_category' } },
  
  // A. Strengths
  { group: 'nodes', data: { 
    id: 'strengths', 
    label: 'Key Strengths & Competitive Advantages', 
    type: 'swot_strength', 
    text: 'Technology Leadership: Blackwell architecture setting new performance standards. CUDA Software Moat: 15+ year ecosystem with high switching costs and 4M+ developers. Financial Strength: $100B+ annual revenue, $50B+ cash, industry-leading margins. Visionary Leadership: Jensen Huang recognized as top tech CEO. Market Position: 80-95% AI accelerator market share. Full-Stack Platform: Hardware + software + services integration.'
  } },
  
  // B. Weaknesses
  { group: 'nodes', data: { 
    id: 'weaknesses', 
    label: 'Key Weaknesses & Vulnerabilities', 
    type: 'swot_weakness', 
    text: 'Manufacturing Dependence: 100% reliant on TSMC for advanced chips. Geographic Concentration: Taiwan manufacturing creates geopolitical risk. China Market Loss: $50B market "effectively closed" due to export restrictions. Customer Concentration: Large cloud providers developing alternatives. Cyclical History: Semiconductor industry prone to boom-bust cycles. High Valuation: Premium multiple vulnerable to growth disappointments.'
  } },
  
  // C. Opportunities
  { group: 'nodes', data: { 
    id: 'opportunities', 
    label: 'Growth Opportunities & Catalysts', 
    type: 'swot_opportunity', 
    text: 'AI Inference Scaling: Inference market potentially larger than training. Software Monetization: Recurring revenue from AI Enterprise, Omniverse subscriptions. Robotics Revolution: Isaac platform for humanoid and industrial robots. Autonomous Vehicles: DRIVE platform in mass-market adoption. Edge AI Deployment: Bringing AI compute to edge devices. Digital Twins: Omniverse for industrial simulation and collaboration.'
  } },
  
  // D. Threats
  { group: 'nodes', data: { 
    id: 'threats', 
    label: 'Key Threats & Risk Factors', 
    type: 'swot_threat', 
    text: 'Geopolitical Tensions: China restrictions expanding, Taiwan invasion risk. Custom Silicon Competition: Cloud providers reducing NVIDIA dependency. Algorithm Efficiency: AI breakthroughs reducing compute requirements (DeepSeek-style). Cyclical Downturn: Historical semiconductor boom-bust patterns. Regulatory Scrutiny: Antitrust concerns over market dominance. Supply Chain Disruption: Natural disasters, geopolitical events affecting TSMC.'
  } },
  
  // E. Future Outlook & Investment Thesis
  { group: 'nodes', data: { 
    id: 'future_outlook', 
    label: 'Future Outlook & Investment Thesis', 
    type: 'category', 
    text: 'Long-term Investment Thesis: AI infrastructure buildout multi-year megatrend with NVIDIA at center. Near-term catalysts: Blackwell ramp, software monetization, automotive/robotics growth. Risk management: Geographic diversification, platform expansion beyond GPUs. Conservative estimate: 20-30% annual growth sustainable through 2027. Optimistic scenario: AI agent revolution drives 50%+ growth continuation.'
  } },

  // F. Strategic Initiatives
  { group: 'nodes', data: { 
    id: 'strategic_initiatives', 
    label: 'Key Strategic Initiatives', 
    type: 'category', 
    text: 'Geographic Diversification: Building US AI factories, reducing China exposure. Platform Expansion: Grace CPU, BlueField DPU, networking portfolio. Software Strategy: CUDA ecosystem expansion, AI Enterprise, Omniverse cloud services. Vertical Integration: Full-stack AI solutions from chips to applications. Partnership Strategy: OEM relationships, cloud provider collaboration, automotive design wins.'
  } },

  // G. Technology Roadmap
  { group: 'nodes', data: { 
    id: 'technology_roadmap', 
    label: 'Technology Development Roadmap', 
    type: 'category', 
    text: 'Immediate: Blackwell Ultra for enhanced reasoning. 2025-2026: Vera Rubin next-generation architecture. Long-term: Post-silicon technologies, photonics integration, quantum-AI hybrid systems. Software evolution: Autonomous AI agents, foundation models, physical AI platforms. Manufacturing: Exploring alternative foundries, advanced packaging technologies.'
  } },

  // --- EDGES (RELATIONSHIPS) ---
  { group: 'edges', data: { id: 'nvda-company', source: 'nvda', target: 'company_info' } },
  { group: 'edges', data: { id: 'nvda-financial', source: 'nvda', target: 'financial_performance' } },
  { group: 'edges', data: { id: 'nvda-recent', source: 'nvda', target: 'recent_developments' } },
  { group: 'edges', data: { id: 'nvda-market', source: 'nvda', target: 'market_landscape' } },
  { group: 'edges', data: { id: 'nvda-analyst', source: 'nvda', target: 'analyst_sentiment' } },
  { group: 'edges', data: { id: 'nvda-industry', source: 'nvda', target: 'industry_analysis' } },
  { group: 'edges', data: { id: 'nvda-competitive', source: 'nvda', target: 'competitive_analysis' } },
  { group: 'edges', data: { id: 'nvda-swot', source: 'nvda', target: 'swot_outlook' } },

  // Company Info relationships
  { group: 'edges', data: { id: 'company-profile', source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { id: 'company-segments', source: 'company_info', target: 'business_segments' } },
  { group: 'edges', data: { id: 'company-geographic', source: 'company_info', target: 'geographic_mix' } },
  { group: 'edges', data: { id: 'company-model', source: 'company_info', target: 'business_model' } },

  // Business Segments relationships
  { group: 'edges', data: { id: 'segments-datacenter', source: 'business_segments', target: 'datacenter_segment' } },
  { group: 'edges', data: { id: 'segments-gaming', source: 'business_segments', target: 'gaming_segment' } },
  { group: 'edges', data: { id: 'segments-provis', source: 'business_segments', target: 'provis_segment' } },
  { group: 'edges', data: { id: 'segments-automotive', source: 'business_segments', target: 'automotive_segment' } },
  { group: 'edges', data: { id: 'segments-oem', source: 'business_segments', target: 'oem_segment' } },

  // Financial Performance relationships
  { group: 'edges', data: { id: 'financial-q1', source: 'financial_performance', target: 'q1_fy2026_results' } },
  { group: 'edges', data: { id: 'financial-metrics', source: 'financial_performance', target: 'financial_metrics' } },
  { group: 'edges', data: { id: 'financial-historical', source: 'financial_performance', target: 'historical_performance' } },
  { group: 'edges', data: { id: 'financial-capital', source: 'financial_performance', target: 'capital_return' } },
  { group: 'edges', data: { id: 'financial-segment', source: 'financial_performance', target: 'segment_performance' } },

  // Recent Developments relationships
  { group: 'edges', data: { id: 'recent-blackwell', source: 'recent_developments', target: 'blackwell_launch' } },
  { group: 'edges', data: { id: 'blackwell-updates', source: 'blackwell_launch', target: 'blackwell_updates' } },
  { group: 'edges', data: { id: 'recent-china', source: 'recent_developments', target: 'china_restrictions' } },
  { group: 'edges', data: { id: 'recent-ai', source: 'recent_developments', target: 'ai_infrastructure' } },
  { group: 'edges', data: { id: 'recent-innovation', source: 'recent_developments', target: 'product_innovation' } },

  // Market Landscape relationships
  { group: 'edges', data: { id: 'market-ai', source: 'market_landscape', target: 'ai_accelerator_market' } },
  { group: 'edges', data: { id: 'market-datacenter', source: 'market_landscape', target: 'datacenter_ai_market' } },
  { group: 'edges', data: { id: 'market-gaming', source: 'market_landscape', target: 'gaming_market_position' } },
  { group: 'edges', data: { id: 'market-emerging', source: 'market_landscape', target: 'emerging_platforms' } },
  { group: 'edges', data: { id: 'market-trends', source: 'market_landscape', target: 'technology_trends' } },

  // Analyst Sentiment relationships
  { group: 'edges', data: { id: 'analyst-ratings', source: 'analyst_sentiment', target: 'analyst_ratings' } },
  { group: 'edges', data: { id: 'analyst-themes', source: 'analyst_sentiment', target: 'investment_themes' } },
  { group: 'edges', data: { id: 'analyst-valuation', source: 'analyst_sentiment', target: 'valuation_analysis' } },
  { group: 'edges', data: { id: 'analyst-forecast', source: 'analyst_sentiment', target: 'earnings_forecast' } },

  // Industry Analysis relationships
  { group: 'edges', data: { id: 'industry-rivalry', source: 'industry_analysis', target: 'competitive_rivalry' } },
  { group: 'edges', data: { id: 'industry-barriers', source: 'industry_analysis', target: 'barriers_entry' } },
  { group: 'edges', data: { id: 'industry-suppliers', source: 'industry_analysis', target: 'supplier_power' } },
  { group: 'edges', data: { id: 'industry-buyers', source: 'industry_analysis', target: 'buyer_power' } },
  { group: 'edges', data: { id: 'industry-substitutes', source: 'industry_analysis', target: 'substitute_threats' } },

  // Competitive Analysis relationships
  { group: 'edges', data: { id: 'competitive-amd', source: 'competitive_analysis', target: 'amd_competition' } },
  { group: 'edges', data: { id: 'competitive-intel', source: 'competitive_analysis', target: 'intel_competition' } },
  { group: 'edges', data: { id: 'competitive-cloud', source: 'competitive_analysis', target: 'cloud_custom_silicon' } },
  { group: 'edges', data: { id: 'competitive-startups', source: 'competitive_analysis', target: 'ai_chip_startups' } },
  { group: 'edges', data: { id: 'competitive-traditional', source: 'competitive_analysis', target: 'traditional_semis' } },

  // SWOT relationships
  { group: 'edges', data: { id: 'swot-strengths', source: 'swot_outlook', target: 'strengths' } },
  { group: 'edges', data: { id: 'swot-weaknesses', source: 'swot_outlook', target: 'weaknesses' } },
  { group: 'edges', data: { id: 'swot-opportunities', source: 'swot_outlook', target: 'opportunities' } },
  { group: 'edges', data: { id: 'swot-threats', source: 'swot_outlook', target: 'threats' } },
  { group: 'edges', data: { id: 'swot-outlook', source: 'swot_outlook', target: 'future_outlook' } },
  { group: 'edges', data: { id: 'swot-strategic', source: 'swot_outlook', target: 'strategic_initiatives' } },
  { group: 'edges', data: { id: 'swot-roadmap', source: 'swot_outlook', target: 'technology_roadmap' } },

  // Cross-category relationships
  { group: 'edges', data: { id: 'blackwell-datacenter', source: 'blackwell_launch', target: 'datacenter_segment' } },
  { group: 'edges', data: { id: 'china-threats', source: 'china_restrictions', target: 'threats' } },
  { group: 'edges', data: { id: 'cuda-strengths', source: 'business_model', target: 'strengths' } },
  { group: 'edges', data: { id: 'tsmc-suppliers', source: 'supplier_power', target: 'weaknesses' } },
  { group: 'edges', data: { id: 'ai-opportunities', source: 'ai_accelerator_market', target: 'opportunities' } },
  { group: 'edges', data: { id: 'custom-silicon-threats', source: 'cloud_custom_silicon', target: 'threats' } },
]; 