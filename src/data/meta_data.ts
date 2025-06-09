import type { GraphElement } from '../components/KnowledgeGraph.astro';

// Meta company metadata for UI integration (updated with latest Q1 2025 data)
export const metaMetadata = {
  companyName: 'Meta Platforms, Inc.',
  ticker: 'META',
  exchange: 'NASDAQ',
  marketCap: '$1.3T',
  latestQuarter: 'Q1 2025',
  keyMetrics: {
    revenue: { value: '$42.3B', change: '+16% YoY', isPositive: true },
    eps: { value: '$6.43', change: '+37% YoY', isPositive: true },
    operatingMargin: { value: '41.5%', change: 'Record High', isPositive: true },
    familyDAP: { value: '3.43B', change: '6% YoY Growth', isPositive: true }
  },
  segments: [
    { id: 'family_of_apps', name: 'Family of Apps', percentage: 99, revenue: '$41.9B' },
    { id: 'reality_labs', name: 'Reality Labs', percentage: 1, revenue: '$412M' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '📊', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '🤖', priority: 3 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 4 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📈', priority: 5 },
    { id: 'industry_analysis', name: 'Industry Analysis', icon: '🏭', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return metaGraphElements.filter(element => 
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
  return metaGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = metaGraphElements.filter(el => el.group === 'nodes');
  const edges = metaGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const metaGraphElements: GraphElement[] = [
  // Central node
  { group: 'nodes', data: { id: 'meta', label: 'Meta Platforms, Inc. (META)', type: 'company' } },
  
  // Main categories following comprehensive analysis structure
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  { group: 'nodes', data: { id: 'market_landscape', label: 'IV. Market & Technology Landscape', type: 'main_category' } },
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'V. Analyst Sentiment & Wall Street Views', type: 'main_category' } },
  { group: 'nodes', data: { id: 'industry_analysis', label: 'VI. Industry Analysis', type: 'main_category' } },
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Future Outlook', type: 'main_category' } },

  // === I. COMPANY INFORMATION & BUSINESS MODEL ===
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile & Leadership', 
    type: 'category',
    text: 'Founded 2004 by Mark Zuckerberg. CEO: Mark Zuckerberg (61% voting control, 13% economic interest). COO: Javier Olivan. CTO: Andrew Bosworth. HQ: Menlo Park, CA. 74,067 employees globally. Mission: "Give people the power to build community and bring the world closer together."'
  } },
  
  { group: 'nodes', data: { 
    id: 'family_of_apps', 
    label: 'Family of Apps (99% Revenue)', 
    type: 'segment',
    text: 'Q1 2025: $41.9B revenue (+16% YoY). Facebook: 3.07B MAU. Instagram: 2B+ MAU. WhatsApp: 3B+ MAU. Messenger: 1B+ MAU. Threads: 350M+ MAU (launched July 2023). Total Family DAP: 3.43B (+6% YoY).'
  } },
  
  { group: 'nodes', data: { 
    id: 'reality_labs', 
    label: 'Reality Labs (1% Revenue)', 
    type: 'segment',
    text: 'Q1 2025: $412M revenue (-6% YoY), $4.2B operating loss. Products: Quest 2/3/Pro VR headsets, Ray-Ban Meta smart glasses (2M+ sold), Portal devices. Focus: VR/AR, metaverse experiences, neural interfaces via Reality Labs Research.'
  } },

  { group: 'nodes', data: { 
    id: 'business_model', 
    label: 'Revenue Model & Monetization', 
    type: 'category',
    text: 'Advertising: 98% of revenue ($40.6B Q1). CPM +22%, Impressions +20% YoY. Other Revenue: $1.7B (Reality Labs $412M, others $1.3B). Ad targeting via user data, cross-app advertising network. Exploring subscription models for Meta AI.'
  } },

  // === II. FINANCIAL PERFORMANCE ===
  { group: 'nodes', data: { 
    id: 'q1_2025_results', 
    label: 'Q1 2025 Earnings Highlights', 
    type: 'category',
    text: 'Revenue: $42.3B (+16% YoY) vs $41.3B est. EPS: $6.43 (+37% YoY) vs $6.25 est. Operating Margin: 41.5% (record high). Free Cash Flow: $12.9B. Daily Active People: 3.43B (+6% YoY). Beat all key metrics.'
  } },

  { group: 'nodes', data: { 
    id: 'profitability_metrics', 
    label: 'Profitability & Margins', 
    type: 'category',
    text: 'Operating Margin: 41.5% (Q1 25), up from 25% (Q1 24). Net Margin: 35.7%. ROE: 31.2%. ROA: 23.8%. Family of Apps Operating Margin: 48.9%. Reality Labs Operating Margin: -1,020% ($4.2B loss on $412M revenue).'
  } },

  { group: 'nodes', data: { 
    id: 'balance_sheet', 
    label: 'Balance Sheet Strength', 
    type: 'category',
    text: 'Cash & Equivalents: $70.1B. Total Assets: $274B. Long-term Debt: $29.4B. Net Cash: $40.7B. Debt-to-Equity: 0.21. Current Ratio: 2.1. Strong financial position supporting AI/metaverse investments.'
  } },

  { group: 'nodes', data: { 
    id: 'capex_investments', 
    label: 'Capital Expenditure & Investments', 
    type: 'category',
    text: '2025 CapEx Guidance: $64-72B (vs $38.8B in 2024). Focus: Data centers, AI compute infrastructure, servers. AI training farms: Custom MTIA chips, H100/H200 GPUs. Reality Labs R&D: $6.2B quarterly run rate.'
  } },

  // === III. RECENT NEWS & DEVELOPMENTS ===
  { group: 'nodes', data: { 
    id: 'meta_ai_platform', 
    label: 'Meta AI: 1B Users Milestone', 
    type: 'category',
    text: 'May 2025: Meta AI reaches 1B monthly users. Available across Facebook, Instagram, WhatsApp, Messenger. Standalone app launched. Features: Text generation, image creation, coding assistance. Monetization: Subscription tiers planned for advanced features.'
  } },
  
  { group: 'nodes', data: { 
    id: 'llama_development', 
    label: 'Llama 4 & AI Strategy', 
    type: 'category',
    text: 'Llama 4 in training: Multimodal capabilities (text, image, video, audio). Agentic AI features: Tool use, reasoning, planning. Open-source model. Target: AI engineer agent by end 2025. Training on 100K+ H100 clusters.'
  } },

  { group: 'nodes', data: { 
    id: 'rayban_meta_success', 
    label: 'Ray-Ban Meta Smart Glasses', 
    type: 'category',
    text: '2M+ units sold since launch. Sales tripled in 2024. Partnership with EssilorLuxottica extended. Features: AI assistant, camera, livestreaming. Next-gen: Enhanced AI, improved battery, display integration. Key AR/VR bridge product.'
  } },

  { group: 'nodes', data: { 
    id: 'threads_growth', 
    label: 'Threads Platform Expansion', 
    type: 'category',
    text: 'Launched July 2023. Current: 350M+ MAU. Growth momentum: +60% YoY. Features: Text posts, real-time conversations, creator tools. Monetization: Ad integration planned 2025. Goal: 1B users, challenge Twitter/X dominance.'
  } },

  // === IV. MARKET & TECHNOLOGY LANDSCAPE ===
  { group: 'nodes', data: { 
    id: 'digital_advertising_market', 
    label: 'Global Digital Advertising Market', 
    type: 'category',
    text: '$740B total market (2024). Meta + Google: ~60% share. Growth: +13% annually. Trends: Video ads, AI targeting, privacy-first advertising, e-commerce integration. Meta share: ~22% ($164B addressable).'
  } },

  { group: 'nodes', data: { 
    id: 'ai_technology_trends', 
    label: 'AI Technology Landscape', 
    type: 'category',
    text: 'LLM Market: $50B+ (2025). Key trends: Multimodal AI, agentic AI, edge computing, model efficiency. Meta position: Llama 4 competitive with GPT-5/Gemini. Open-source strategy differentiator. Training cost: $10B+ annually.'
  } },

  { group: 'nodes', data: { 
    id: 'metaverse_vr_market', 
    label: 'Metaverse & VR/AR Market', 
    type: 'category',
    text: 'VR Market: $30B (2024) → $87B (2030). AR Market: $40B → $198B. Meta VR share: ~75% (Quest dominance). Challenges: Adoption rate, content ecosystem, hardware costs. Opportunity: Spatial computing convergence.'
  } },

  { group: 'nodes', data: { 
    id: 'social_media_trends', 
    label: 'Social Media Evolution', 
    type: 'category',
    text: 'Global users: 5.17B (2024). Trends: Short-form video, AI-driven feeds, creator economy, social commerce. Meta platforms: 3.88B unique users across apps. Growth regions: India, Indonesia, Brazil. Challenges: User engagement time, younger demographics.'
  } },

  // === V. ANALYST SENTIMENT & WALL STREET VIEWS ===
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Wall Street Consensus', 
    type: 'category',
    text: 'Average Rating: BUY (Strong). Distribution: Strong Buy 45%, Buy 35%, Hold 20%, Sell 0%. Coverage: 45+ analysts. Confidence high on AI monetization, Reality Labs timeline concerns persist.'
  } },

  { group: 'nodes', data: { 
    id: 'price_targets', 
    label: 'Price Target Analysis', 
    type: 'category',
    text: 'Average Target: $650 (18% upside from $550). Range: $580-$720. Bull case: $800+ (AI monetization success). Bear case: $480 (regulatory/competition risks). Median 12-month target: $640.'
  } },

  { group: 'nodes', data: { 
    id: 'earnings_estimates', 
    label: '2025 Earnings Projections', 
    type: 'category',
    text: '2025E Revenue: $175B (+22% YoY). 2025E EPS: $27.50 (+22% YoY). Q2 2025E: Revenue $43.8B, EPS $6.75. Key drivers: Ad revenue growth, Meta AI monetization, operating leverage. Reality Labs losses: -$18B (2025E).'
  } },

  { group: 'nodes', data: { 
    id: 'institutional_ownership', 
    label: 'Institutional Ownership', 
    type: 'category',
    text: 'Institutional Ownership: 69.4%. Top holders: Vanguard (7.1%), BlackRock (6.8%), State Street (3.2%). Insider Ownership: 13.5% (Zuckerberg family). Hedge fund sentiment: Generally positive on AI opportunity.'
  } },

  // === VI. INDUSTRY ANALYSIS (PORTER'S FIVE FORCES) ===
  { group: 'nodes', data: { 
    id: 'competitive_rivalry', 
    label: 'Competitive Rivalry', 
    type: 'category',
    text: 'HIGH intensity. Social media: TikTok, YouTube, Snapchat, X/Twitter. Digital ads: Google duopoly. AI: OpenAI, Anthropic, Google. VR/AR: Apple (Vision Pro), ByteDance (Pico). Network effects provide defense but innovation pressure intense.'
  } },

  { group: 'nodes', data: { 
    id: 'supplier_power', 
    label: 'Supplier Bargaining Power', 
    type: 'category',
    text: 'MODERATE-HIGH. Key suppliers: NVIDIA (AI chips), TSMC (semiconductors), cloud providers. AI chip shortage increases supplier power. Developing internal MTIA chips to reduce dependence. Content creators have moderate power through Creator Fund programs.'
  } },

  { group: 'nodes', data: { 
    id: 'buyer_power', 
    label: 'Buyer Bargaining Power', 
    type: 'category',
    text: 'LOW-MODERATE. End users: Low switching costs but high network effects. Advertisers: Moderate power, can shift budgets to Google/others. SMB advertisers: Low power. Enterprise buyers: Moderate power due to alternatives.'
  } },

  { group: 'nodes', data: { 
    id: 'entry_barriers', 
    label: 'Barriers to Entry', 
    type: 'category',
    text: 'HIGH barriers. Network effects (3.43B users), data advantages, capital requirements ($64-72B CapEx), talent acquisition, regulatory compliance, established advertiser relationships. New entrants: ByteDance (TikTok), emerging AI companies.'
  } },

  { group: 'nodes', data: { 
    id: 'substitution_threat', 
    label: 'Threat of Substitutes', 
    type: 'category',
    text: 'MODERATE-HIGH. Substitutes: Other social platforms, traditional media, gaming, streaming, in-person activities. AI assistants may reduce social platform usage. Attention economy competition from Netflix, YouTube, gaming platforms.'
  } },

  // === VII. COMPETITIVE ANALYSIS ===
  { group: 'nodes', data: { 
    id: 'google_alphabet', 
    label: 'Google/Alphabet: Ad Duopoly Partner', 
    type: 'competitor',
    text: 'Market Cap: $2.1T. Ad Revenue: $280B (2024). Strengths: Search dominance, YouTube, Android, Gemini AI. Weaknesses: Social media presence. Relationship: Competitors in ads/AI, but complementary in some areas. Combined: ~60% digital ad market.'
  } },

  { group: 'nodes', data: { 
    id: 'tiktok_bytedance', 
    label: 'TikTok/ByteDance: Primary Threat', 
    type: 'competitor',
    text: 'Users: 1B+ globally, 170M US. Revenue: $80B+ (2024). Strengths: Algorithm superiority, young demographics capture, short-form video. Weaknesses: Regulatory uncertainty, monetization efficiency. Meta response: Reels, algorithm improvements.'
  } },

  { group: 'nodes', data: { 
    id: 'apple_ecosystem', 
    label: 'Apple: Platform & Hardware Rival', 
    type: 'competitor',
    text: 'Market Cap: $3.4T. Revenue: $391B. Threats: iOS policy changes, Vision Pro (AR/VR), Apple Intelligence AI. App Store: 30% commission. Privacy policies: ATT impact on Meta ads. Future competition: Spatial computing, AI assistants.'
  } },

  { group: 'nodes', data: { 
    id: 'amazon_ads', 
    label: 'Amazon: E-commerce Advertising', 
    type: 'competitor',
    text: 'Ad Revenue: $50B+ (2024). Strengths: Purchase intent data, Prime ecosystem, AWS cloud. Growth: +20% annually in ads. Threat: E-commerce advertising shift, performance marketing. Meta response: Shopping ads, marketplace integration.'
  } },

  { group: 'nodes', data: { 
    id: 'openai_ai_competition', 
    label: 'OpenAI & AI Competitors', 
    type: 'competitor',
    text: 'OpenAI: ChatGPT 200M+ users, $3.4B revenue run rate. Others: Anthropic (Claude), xAI (Grok), Mistral. Threat: AI assistant adoption, enterprise AI solutions. Meta advantage: Open source strategy, integration across apps.'
  } },

  { group: 'nodes', data: { 
    id: 'traditional_media', 
    label: 'Traditional & Digital Media', 
    type: 'competitor',
    text: 'Competition for attention/ad dollars: Netflix ($33B revenue), Disney ($83B), traditional TV, podcasts, gaming. Streaming: Attention competition. Linear TV: Ad budget competition. Advantage: Targeted advertising, real-time optimization.'
  } },

  // === VIII. SWOT ANALYSIS & FUTURE OUTLOOK ===
  
  // STRENGTHS (Multiple detailed nodes)
  { group: 'nodes', data: { 
    id: 'network_effects_strength', 
    label: 'Unmatched Network Effects', 
    type: 'swot_strength',
    text: '3.43B daily active people across Family of Apps. Cross-platform connectivity: WhatsApp → Instagram → Facebook. Network value increases exponentially with users. Switching costs: Social graphs, content history, messaging networks.'
  } },

  { group: 'nodes', data: { 
    id: 'financial_strength', 
    label: 'Strong Financial Position', 
    type: 'swot_strength',
    text: '$70B cash, 41.5% operating margins, $12.9B quarterly FCF. Debt-to-equity: 0.21. Self-funding AI investments ($64-72B CapEx). Share buybacks: $50B authorization. Dividend: $2.00/share (0.4% yield).'
  } },

  { group: 'nodes', data: { 
    id: 'ai_leadership_strength', 
    label: 'AI Technology Leadership', 
    type: 'swot_strength',
    text: 'Llama 4: State-of-the-art open model. Meta AI: 1B users, fastest AI adoption. Infrastructure: 100K+ H100 equivalent, custom MTIA chips. Research: FAIR, Reality Labs Research. Open source strategy builds ecosystem.'
  } },

  { group: 'nodes', data: { 
    id: 'data_advantage_strength', 
    label: 'Data & Targeting Superiority', 
    type: 'swot_strength',
    text: 'Multi-platform user data across 4 major apps. Behavioral signals: Likes, shares, time spent, purchase intent. Cross-device tracking, lookalike audiences. Privacy-preserving techniques: Conversions API, server-side tracking.'
  } },

  // WEAKNESSES (Multiple detailed nodes)
  { group: 'nodes', data: { 
    id: 'platform_dependency_weakness', 
    label: 'iOS/Android Platform Dependence', 
    type: 'swot_weakness',
    text: 'Apple ATT impact: $10B+ annual revenue loss. iOS policies: 30% App Store fee, API restrictions. Android: Google Play policies, potential restrictions. Solution: Web apps, direct downloads, regulatory pressure.'
  } },

  { group: 'nodes', data: { 
    id: 'reality_labs_losses', 
    label: 'Reality Labs Massive Losses', 
    type: 'swot_weakness',
    text: 'Cumulative losses: $60B+ since 2019. Q1 2025: $4.2B loss on $412M revenue. Investor concerns: ROI timeline, market adoption. High R&D costs, hardware subsidies. Long-term bet with uncertain payoff timeline.'
  } },

  { group: 'nodes', data: { 
    id: 'regulatory_scrutiny_weakness', 
    label: 'Regulatory & Legal Challenges', 
    type: 'swot_weakness',
    text: 'EU DMA compliance costs, interoperability requirements. US antitrust cases, Congressional scrutiny. Privacy regulations: GDPR, state laws. Content moderation costs: $5B+ annually. FTC oversight, potential breakup scenarios.'
  } },

  { group: 'nodes', data: { 
    id: 'demographic_aging_weakness', 
    label: 'Aging User Demographics', 
    type: 'swot_weakness',
    text: 'Facebook users aging: Average age 40+. Gen Z preference: TikTok, BeReal, Discord. Instagram growth slowing in key demographics. Threads: Promising but unproven retention. Challenge: Attracting/retaining young users.'
  } },

  // OPPORTUNITIES (Multiple detailed nodes)
  { group: 'nodes', data: { 
    id: 'ai_monetization_opportunity', 
    label: 'AI Monetization Potential', 
    type: 'swot_opportunity',
    text: 'Meta AI: 1B users, subscription model potential ($10-20/month). Enterprise AI: Workplace integration, developer tools. Ad optimization: AI-driven targeting, creative generation. Revenue potential: $50B+ by 2030.'
  } },

  { group: 'nodes', data: { 
    id: 'metaverse_upside_opportunity', 
    label: 'Metaverse Long-term Upside', 
    type: 'swot_opportunity',
    text: 'VR/AR market: $87B (2030) from $30B (2024). Spatial computing adoption accelerating. Virtual meetings, training, entertainment. Ray-Ban Meta: Bridge to mainstream AR. Timeline: 5-10 years to meaningful revenue.'
  } },

  { group: 'nodes', data: { 
    id: 'ecommerce_integration_opportunity', 
    label: 'E-commerce & Shopping Integration', 
    type: 'swot_opportunity',
    text: 'Social commerce: $2.9T market by 2026. Instagram Shopping, Facebook Marketplace. WhatsApp Business: 200M+ businesses. Live shopping, creator storefronts. Payment integration: Meta Pay expansion.'
  } },

  { group: 'nodes', data: { 
    id: 'global_expansion_opportunity', 
    label: 'Emerging Market Expansion', 
    type: 'swot_opportunity',
    text: 'Growth markets: India (fastest growth), Indonesia, Brazil, Nigeria. Internet penetration increasing, mobile-first users. Local partnerships, language support. Revenue/user gap: Significant upside as economies develop.'
  } },

  // THREATS (Multiple detailed nodes)
  { group: 'nodes', data: { 
    id: 'regulatory_breakup_threat', 
    label: 'Antitrust & Breakup Risk', 
    type: 'swot_threat',
    text: 'FTC lawsuits: Instagram/WhatsApp acquisition challenges. EU DMA: Forced interoperability, reduced data collection. Congressional pressure: Section 230 changes. Breakup scenarios: WhatsApp/Instagram spinoffs.'
  } },

  { group: 'nodes', data: { 
    id: 'competition_threat', 
    label: 'Intensifying Competition', 
    type: 'swot_threat',
    text: 'TikTok: Young user capture, algorithm superiority. YouTube Shorts: Google backing. Apple: Vision Pro, privacy changes. AI competition: OpenAI, Google, Microsoft. New platforms: BeReal, Discord growth.'
  } },

  { group: 'nodes', data: { 
    id: 'economic_sensitivity_threat', 
    label: 'Economic & Ad Spending Sensitivity', 
    type: 'swot_threat',
    text: 'Recession impact: Ad budgets first to cut. SMB vulnerability: Economic pressure on small advertisers. CPM volatility: Economic cycles affect pricing. Geographic exposure: Emerging market currency risks.'
  } },

  { group: 'nodes', data: { 
    id: 'technology_disruption_threat', 
    label: 'Technology Disruption Risk', 
    type: 'swot_threat',
    text: 'AI disruption: Reduced social media usage for information. Voice/AR interfaces: Post-smartphone computing. Privacy tech: Reduced data collection ability. Quantum computing: Encryption/security changes.'
  } },

  // MAIN CATEGORY TO SUBCATEGORY EDGES
  { group: 'edges', data: { id: 'meta-company', source: 'meta', target: 'company_info' } },
  { group: 'edges', data: { id: 'meta-financial', source: 'meta', target: 'financial_performance' } },
  { group: 'edges', data: { id: 'meta-recent', source: 'meta', target: 'recent_developments' } },
  { group: 'edges', data: { id: 'meta-market', source: 'meta', target: 'market_landscape' } },
  { group: 'edges', data: { id: 'meta-analyst', source: 'meta', target: 'analyst_sentiment' } },
  { group: 'edges', data: { id: 'meta-industry', source: 'meta', target: 'industry_analysis' } },
  { group: 'edges', data: { id: 'meta-competitive', source: 'meta', target: 'competitive_analysis' } },
  { group: 'edges', data: { id: 'meta-swot', source: 'meta', target: 'swot_outlook' } },

  // COMPANY INFO CONNECTIONS
  { group: 'edges', data: { id: 'company-profile', source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { id: 'company-foa', source: 'company_info', target: 'family_of_apps' } },
  { group: 'edges', data: { id: 'company-rl', source: 'company_info', target: 'reality_labs' } },
  { group: 'edges', data: { id: 'company-model', source: 'company_info', target: 'business_model' } },

  // FINANCIAL PERFORMANCE CONNECTIONS
  { group: 'edges', data: { id: 'financial-q1', source: 'financial_performance', target: 'q1_2025_results' } },
  { group: 'edges', data: { id: 'financial-profit', source: 'financial_performance', target: 'profitability_metrics' } },
  { group: 'edges', data: { id: 'financial-balance', source: 'financial_performance', target: 'balance_sheet' } },
  { group: 'edges', data: { id: 'financial-capex', source: 'financial_performance', target: 'capex_investments' } },

  // RECENT DEVELOPMENTS CONNECTIONS
  { group: 'edges', data: { id: 'recent-ai', source: 'recent_developments', target: 'meta_ai_platform' } },
  { group: 'edges', data: { id: 'recent-llama', source: 'recent_developments', target: 'llama_development' } },
  { group: 'edges', data: { id: 'recent-rayban', source: 'recent_developments', target: 'rayban_meta_success' } },
  { group: 'edges', data: { id: 'recent-threads', source: 'recent_developments', target: 'threads_growth' } },

  // MARKET LANDSCAPE CONNECTIONS
  { group: 'edges', data: { id: 'market-ads', source: 'market_landscape', target: 'digital_advertising_market' } },
  { group: 'edges', data: { id: 'market-ai', source: 'market_landscape', target: 'ai_technology_trends' } },
  { group: 'edges', data: { id: 'market-metaverse', source: 'market_landscape', target: 'metaverse_vr_market' } },
  { group: 'edges', data: { id: 'market-social', source: 'market_landscape', target: 'social_media_trends' } },

  // ANALYST SENTIMENT CONNECTIONS
  { group: 'edges', data: { id: 'analyst-ratings', source: 'analyst_sentiment', target: 'analyst_ratings' } },
  { group: 'edges', data: { id: 'analyst-targets', source: 'analyst_sentiment', target: 'price_targets' } },
  { group: 'edges', data: { id: 'analyst-estimates', source: 'analyst_sentiment', target: 'earnings_estimates' } },
  { group: 'edges', data: { id: 'analyst-ownership', source: 'analyst_sentiment', target: 'institutional_ownership' } },

  // INDUSTRY ANALYSIS CONNECTIONS
  { group: 'edges', data: { id: 'industry-rivalry', source: 'industry_analysis', target: 'competitive_rivalry' } },
  { group: 'edges', data: { id: 'industry-suppliers', source: 'industry_analysis', target: 'supplier_power' } },
  { group: 'edges', data: { id: 'industry-buyers', source: 'industry_analysis', target: 'buyer_power' } },
  { group: 'edges', data: { id: 'industry-barriers', source: 'industry_analysis', target: 'entry_barriers' } },
  { group: 'edges', data: { id: 'industry-substitutes', source: 'industry_analysis', target: 'substitution_threat' } },

  // COMPETITIVE ANALYSIS CONNECTIONS
  { group: 'edges', data: { id: 'competitive-google', source: 'competitive_analysis', target: 'google_alphabet' } },
  { group: 'edges', data: { id: 'competitive-tiktok', source: 'competitive_analysis', target: 'tiktok_bytedance' } },
  { group: 'edges', data: { id: 'competitive-apple', source: 'competitive_analysis', target: 'apple_ecosystem' } },
  { group: 'edges', data: { id: 'competitive-amazon', source: 'competitive_analysis', target: 'amazon_ads' } },
  { group: 'edges', data: { id: 'competitive-openai', source: 'competitive_analysis', target: 'openai_ai_competition' } },
  { group: 'edges', data: { id: 'competitive-media', source: 'competitive_analysis', target: 'traditional_media' } },

  // SWOT ANALYSIS CONNECTIONS - Detailed strengths
  { group: 'edges', data: { id: 'swot-network-strength', source: 'swot_outlook', target: 'network_effects_strength' } },
  { group: 'edges', data: { id: 'swot-financial-strength', source: 'swot_outlook', target: 'financial_strength' } },
  { group: 'edges', data: { id: 'swot-ai-strength', source: 'swot_outlook', target: 'ai_leadership_strength' } },
  { group: 'edges', data: { id: 'swot-data-strength', source: 'swot_outlook', target: 'data_advantage_strength' } },

  // SWOT ANALYSIS CONNECTIONS - Detailed weaknesses
  { group: 'edges', data: { id: 'swot-platform-weakness', source: 'swot_outlook', target: 'platform_dependency_weakness' } },
  { group: 'edges', data: { id: 'swot-reality-weakness', source: 'swot_outlook', target: 'reality_labs_losses' } },
  { group: 'edges', data: { id: 'swot-regulatory-weakness', source: 'swot_outlook', target: 'regulatory_scrutiny_weakness' } },
  { group: 'edges', data: { id: 'swot-demo-weakness', source: 'swot_outlook', target: 'demographic_aging_weakness' } },

  // SWOT ANALYSIS CONNECTIONS - Detailed opportunities
  { group: 'edges', data: { id: 'swot-ai-opportunity', source: 'swot_outlook', target: 'ai_monetization_opportunity' } },
  { group: 'edges', data: { id: 'swot-metaverse-opportunity', source: 'swot_outlook', target: 'metaverse_upside_opportunity' } },
  { group: 'edges', data: { id: 'swot-ecommerce-opportunity', source: 'swot_outlook', target: 'ecommerce_integration_opportunity' } },
  { group: 'edges', data: { id: 'swot-global-opportunity', source: 'swot_outlook', target: 'global_expansion_opportunity' } },

  // SWOT ANALYSIS CONNECTIONS - Detailed threats
  { group: 'edges', data: { id: 'swot-regulatory-threat', source: 'swot_outlook', target: 'regulatory_breakup_threat' } },
  { group: 'edges', data: { id: 'swot-competition-threat', source: 'swot_outlook', target: 'competition_threat' } },
  { group: 'edges', data: { id: 'swot-economic-threat', source: 'swot_outlook', target: 'economic_sensitivity_threat' } },
  { group: 'edges', data: { id: 'swot-tech-threat', source: 'swot_outlook', target: 'technology_disruption_threat' } },

  // CROSS-SECTIONAL RELATIONSHIPS (Strategic connections between different sections)
  
  // AI connections across sections
  { group: 'edges', data: { id: 'ai-development-to-monetization', source: 'llama_development', target: 'ai_monetization_opportunity' } },
  { group: 'edges', data: { id: 'meta-ai-to-strength', source: 'meta_ai_platform', target: 'ai_leadership_strength' } },
  { group: 'edges', data: { id: 'ai-trends-to-competition', source: 'ai_technology_trends', target: 'openai_ai_competition' } },

  // Financial performance to investment themes
  { group: 'edges', data: { id: 'financial-strength-to-capex', source: 'financial_strength', target: 'capex_investments' } },
  { group: 'edges', data: { id: 'reality-labs-to-metaverse', source: 'reality_labs', target: 'metaverse_upside_opportunity' } },
  { group: 'edges', data: { id: 'profitability-to-analyst', source: 'profitability_metrics', target: 'analyst_ratings' } },

  // Competition relationships
  { group: 'edges', data: { id: 'tiktok-threat-to-demographic', source: 'tiktok_bytedance', target: 'demographic_aging_weakness' } },
  { group: 'edges', data: { id: 'apple-platform-dependency', source: 'apple_ecosystem', target: 'platform_dependency_weakness' } },
  { group: 'edges', data: { id: 'google-ad-market', source: 'google_alphabet', target: 'digital_advertising_market' } },

  // Regulatory and risk connections
  { group: 'edges', data: { id: 'regulatory-weakness-to-threat', source: 'regulatory_scrutiny_weakness', target: 'regulatory_breakup_threat' } },
  { group: 'edges', data: { id: 'competitive-rivalry-to-threat', source: 'competitive_rivalry', target: 'competition_threat' } },

  // Market trends to opportunities
  { group: 'edges', data: { id: 'social-trends-to-ecommerce', source: 'social_media_trends', target: 'ecommerce_integration_opportunity' } },
  { group: 'edges', data: { id: 'vr-market-to-reality-labs', source: 'metaverse_vr_market', target: 'reality_labs' } },

  // Business segments to strategic themes
  { group: 'edges', data: { id: 'family-apps-to-network-effects', source: 'family_of_apps', target: 'network_effects_strength' } },
  { group: 'edges', data: { id: 'threads-to-competition', source: 'threads_growth', target: 'tiktok_bytedance' } },
  { group: 'edges', data: { id: 'rayban-to-ar-opportunity', source: 'rayban_meta_success', target: 'metaverse_upside_opportunity' } }
]; 