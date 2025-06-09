import type { GraphElement } from '../components/KnowledgeGraph.astro';

// Apple company metadata for UI integration
export const appleMetadata = {
  companyName: 'Apple Inc.',
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  marketCap: '$3.4T',
  latestQuarter: 'Q2 2025',
  keyMetrics: {
    revenue: { value: '$95.4B', change: '+5% YoY', isPositive: true },
    eps: { value: '$1.65', change: '+8% YoY', isPositive: true },
    grossMargin: { value: '46.9%', change: 'Record High', isPositive: true },
    activeDevices: { value: '2.35B', change: 'Global Install Base', isPositive: true }
  },
  segments: [
    { id: 'iphone_segment', name: 'iPhone', percentage: 51, revenue: '$69.14B' },
    { id: 'services_segment', name: 'Services', percentage: 25, revenue: '$26.34B' },
    { id: 'wearables_segment', name: 'Wearables', percentage: 9, revenue: '$8.1B' },
    { id: 'mac_segment', name: 'Mac', percentage: 8, revenue: '$7.5B' },
    { id: 'ipad_segment', name: 'iPad', percentage: 7, revenue: '$6.9B' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '📊', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '📱', priority: 3 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 4 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📈', priority: 5 },
    { id: 'industry_analysis', name: 'Industry Analysis', icon: '🏭', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return appleGraphElements.filter(element => 
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
  return appleGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = appleGraphElements.filter(el => el.group === 'nodes');
  const edges = appleGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const appleGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'aapl', label: 'Apple Inc. (AAPL)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Profile
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile', 
    type: 'category', 
    text: 'Founded April 1, 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne. Headquarters: Cupertino, California. CEO: Tim Cook (since 2011). ~164,000 employees globally. Market cap: ~$3.4 trillion (May 2025). Mission: "Leave the world better than we found it" through technology empowerment. Listed on NASDAQ under AAPL ticker.'
  } },
  
  // B. Core Business Segments
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // Revenue breakdown with latest Q2 2025 data
  { group: 'nodes', data: { 
    id: 'iphone_segment', 
    label: 'iPhone (51% of Revenue)', 
    type: 'segment', 
    text: 'Q2 2025: $69.14B revenue (~51% of total, missed estimates). Global smartphone market leader by profit share (~80%+). 2.35B active devices globally. iPhone 16 series with Apple Intelligence, Camera Control. Strong performance in Europe and India markets. Replacement cycles lengthening but loyalty remains high.'
  } },
  
  { group: 'nodes', data: { 
    id: 'services_segment', 
    label: 'Services (25% of Revenue)', 
    type: 'segment', 
    text: 'Q2 2025: $26.34B revenue (record high, +14% YoY). >1 billion paid subscriptions across all services. Includes App Store (~$85B annual revenue), Apple Music (88M+ subscribers), TV+, iCloud, Apple Pay, AppleCare. Gross margin ~75%. Fastest growing segment driving long-term value.'
  } },
  
  { group: 'nodes', data: { 
    id: 'mac_segment', 
    label: 'Mac (8% of Revenue)', 
    type: 'segment', 
    text: 'Q2 2025: $7.5B revenue (+15% YoY). Strong growth driven by M-series Apple Silicon (M1, M2, M3, M4). ~8-9% global PC market share but leads in premium segment. Performance per watt leadership driving professional adoption. M4 chips expected in 2025/26.'
  } },
  
  { group: 'nodes', data: { 
    id: 'ipad_segment', 
    label: 'iPad (7% of Revenue)', 
    type: 'segment', 
    text: 'Q2 2025: $6.9B revenue (+15% YoY). Dominant in tablet market with ~30% global share. Strong in education and enterprise. iPad Pro with M4 chip for professional workflows. New iPad Mini with A17 Pro chip. Upgrade cycles remain long but ecosystem integration drives loyalty.'
  } },
  
  { group: 'nodes', data: { 
    id: 'wearables_segment', 
    label: 'Wearables & Accessories (9% of Revenue)', 
    type: 'segment', 
    text: 'Q2 2025: $8.1B revenue. Apple Watch leads smartwatch market (>30% share, 100M+ users). AirPods dominate true wireless earbuds (>50% premium segment). Vision Pro expanding spatial computing. Strong ecosystem integration and health features driving adoption.'
  } },

  // C. Geographic Distribution - Updated with latest data
  { group: 'nodes', data: { 
    id: 'geographic_mix', 
    label: 'Geographic Revenue Distribution', 
    type: 'category', 
    text: 'Q2 2025: Americas $40.3B (42%), Europe $24.5B (26%), Greater China $16.0B (17%, declined 11.1% YoY), Japan $7.3B (8%), Rest of Asia Pacific $7.3B (8%). China weakness due to local competition offset by strong performance in India and other emerging markets.'
  } },

  // D. Target Customer Base & Business Model
  { group: 'nodes', data: { 
    id: 'business_model', 
    label: 'Business Model & Target Customers', 
    type: 'category', 
    text: 'Premium consumer segment valuing quality, design, and integrated experience. "Walled garden" ecosystem with vertical integration (hardware, software, services). High customer loyalty (>90% iPhone retention). Average revenue per user growing through services. Focus on affluent markets with expansion into emerging markets.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q2 2025) - Updated with latest data
  { group: 'nodes', data: { 
    id: 'q2_2025_results', 
    label: 'Q2 2025 Financial Results', 
    type: 'category', 
    text: 'Revenue: $95.4B (+5% YoY), beating estimates. EPS: $1.65 (+8% YoY). Record March quarter EPS. Gross margin: 46.9% (record levels). Operating cash flow: $24B. Services revenue hit all-time high. iPhone missed estimates but Services exceeded expectations.'
  } },
  
  // B. Key Financial Metrics - Enhanced with comprehensive data
  { group: 'nodes', data: { 
    id: 'financial_metrics', 
    label: 'Key Financial Metrics & Ratios', 
    type: 'category', 
    text: 'Market Cap: ~$3.4T. P/E Ratio: ~30x (vs historical 10x-20x). Net Income Margin: ~24%. Gross Margin: 46.9% (driven by Services mix). Free Cash Flow: $95.8B annually. Cash & Securities: $104.8B. Current Ratio: ~0.9. Debt-to-Equity: Moderate with net cash position.'
  } },
  
  // C. Historical Performance & Trends
  { group: 'nodes', data: { 
    id: 'historical_performance', 
    label: 'Historical Financial Trends', 
    type: 'category', 
    text: 'Revenue doubled from $215.6B (2016) to $391.0B (2024). Net income climbed from ~$45B to $93.7B annually. Super-cycle in FY2021-2022 driven by 5G iPhone upgrade. 2023 decline (-2.8%) followed by 2024 recovery (+2%). Consistent 20-25% net margins maintained.'
  } },
  
  // D. Capital Return Program - Updated with latest authorization
  { group: 'nodes', data: { 
    id: 'capital_return', 
    label: 'Capital Return Program', 
    type: 'category', 
    text: 'Q2 2025: $100B new buyback authorization announced. Dividend increased 4% to $0.26/share. $29B returned to shareholders in Q2. $604B in buybacks over past 10 years, reducing share count by 38%. Low dividend payout ratio (~16%) favoring buybacks over dividends.'
  } },

  // E. Profitability Analysis
  { group: 'nodes', data: { 
    id: 'profitability_analysis', 
    label: 'Profitability & Margin Analysis', 
    type: 'category', 
    text: 'Industry-leading profitability with gross margins hitting record 46.9%. Services segment carries ~75% gross margin vs ~35% for products. Operating expenses well-controlled despite R&D investment of $31.3B (8% of revenue). ROE inflated by buybacks but strong ROIC indicates efficient capital use.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. Apple Intelligence Platform - Major 2025 updates
  { group: 'nodes', data: { 
    id: 'apple_intelligence', 
    label: 'Apple Intelligence AI Platform', 
    type: 'category', 
    text: 'Major AI initiative launched Oct 2024 with iOS 18.1+. Features: Writing Tools, enhanced Siri, Image Playground, Genmoji, Visual Intelligence, Clean Up tool. Privacy-first approach with on-device processing and Private Cloud Compute. ChatGPT integration available. Now supports 10 languages.'
  } },
  
  // Latest Apple Intelligence updates - March 2025
  { group: 'nodes', data: { 
    id: 'ai_latest_updates', 
    label: 'Latest AI Updates (March 2025)', 
    type: 'subcategory', 
    text: 'March 2025: Apple Intelligence launched on Vision Pro with visionOS 2.4. Language expansion: Chinese, French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese. Visual Intelligence via Action Button on iPhone 15 Pro. Anthropic partnership discussions for AI-powered coding tools in Xcode.'
  } },
  
  // B. Vision Pro Progress - Comprehensive 2025 updates
  { group: 'nodes', data: { 
    id: 'vision_pro_updates', 
    label: 'Apple Vision Pro Expansion', 
    type: 'category', 
    text: 'March 2025: visionOS 2.4 brought Apple Intelligence to Vision Pro. New Spatial Gallery app for curated content. Apple Vision Pro iPhone app launched. Guest User enhancements. Available in 12 countries. Immersive content partnerships with Red Bull, Cirque du Soleil, Porsche. Price: $3,499.'
  } },
  
  // C. Supply Chain Diversification - Critical strategic shift
  { group: 'nodes', data: { 
    id: 'supply_chain', 
    label: 'Supply Chain Diversification Strategy', 
    type: 'category', 
    text: 'Strategic shift from China manufacturing: 40M+ iPhones assembled in India in 2024. Target: Majority of US-bound iPhones from India/Vietnam by 2026. Existing tariffs costing ~$900M/quarter. TSMC Arizona fab expected to produce Apple chips by 2025. Reducing geopolitical risk exposure.'
  } },
  
  // D. Regulatory Environment - Complex global landscape
  { group: 'nodes', data: { 
    id: 'regulatory_challenges', 
    label: 'Regulatory & Legal Environment', 
    type: 'category', 
    text: 'EU Digital Markets Act compliance: Third-party app stores, sideloading required in EU. U.S. antitrust lawsuit filed 2024 by DOJ and 15 states. Epic Games case: Must allow external payment links by summer 2025. App Store policy changes under pressure globally.'
  } },

  // E. Product Pipeline & Innovation
  { group: 'nodes', data: { 
    id: 'product_innovation', 
    label: 'Product Innovation Pipeline', 
    type: 'category', 
    text: 'M4 chips expected 2025-26 for next-gen Macs. Foldable iPhone/iPad research ongoing. Apple Car project status uncertain but automotive R&D continues. Health features expansion (non-invasive glucose monitoring research). AR glasses development for future spatial computing evolution.'
  } },

  // --- IV. MARKET & TECHNOLOGY LANDSCAPE ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'IV. Market & Technology Landscape', type: 'main_category' } },
  
  // A. Smartphone Market Position - Detailed analysis
  { group: 'nodes', data: { 
    id: 'smartphone_market', 
    label: 'Smartphone Market Leadership', 
    type: 'category', 
    text: 'Global market share: ~17-20% by volume, >80% of industry profits. Premium segment dominance: ~67% share in $800+ phones. U.S. market: >55% share. Strong in developed markets, growing in India through local manufacturing. Replacement cycles lengthening to 3-4 years.'
  } },
  
  // B. Technology Trends - Comprehensive landscape
  { group: 'nodes', data: { 
    id: 'technology_trends', 
    label: 'Key Technology Trends & Disruptions', 
    type: 'category', 
    text: 'AI Integration: Privacy-first approach vs cloud-heavy competitors. AR/VR: Vision Pro pioneering spatial computing. Custom Silicon: M-series achieving performance leadership. 5G/6G: Advanced connectivity enabling new use cases. Foldable displays: Samsung leading, Apple researching.'
  } },
  
  // C. Digital Services Market
  { group: 'nodes', data: { 
    id: 'digital_services_market', 
    label: 'Digital Services Competitive Landscape', 
    type: 'category', 
    text: 'App Store: Duopoly with Google Play. Music: #2 globally behind Spotify (88M vs 210M subscribers). Video: Apple TV+ small but premium vs Netflix/Disney. Cloud: iCloud integrated but smaller than Google/Microsoft. Payments: Apple Pay leading mobile wallet in US.'
  } },
  
  // D. Emerging Platforms & Opportunities
  { group: 'nodes', data: { 
    id: 'emerging_platforms', 
    label: 'Emerging Platform Opportunities', 
    type: 'category', 
    text: 'Spatial Computing: Vision Pro establishing new category (~$1B+ market by 2030). Health Tech: Apple Watch advancing medical capabilities. Automotive: CarPlay evolution, potential Apple Car. AI Services: Subscription AI services potential. Smart Home: HomeKit competing with Alexa/Google.'
  } },

  // E. Market Structure & Dynamics
  { group: 'nodes', data: { 
    id: 'market_structure', 
    label: 'Industry Structure & Growth Drivers', 
    type: 'category', 
    text: 'Platform economy with ecosystem orchestration. Network effects from 2.35B device installed base. Key drivers: Technology innovation (AI, AR), replacement cycles, emerging market adoption, services attachment rates. Apple positioned as premium ecosystem orchestrator.'
  } },

  // --- V. ANALYST SENTIMENT & RATINGS ---
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'V. Analyst Sentiment & Wall Street Views', type: 'main_category' } },
  
  // A. Current Ratings - Updated with latest targets
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Analyst Ratings & Price Targets', 
    type: 'category', 
    text: 'Consensus: Buy rating from majority of analysts. Average 12-month price target: $230-235 (~8-12% upside). Range: $160 (HSBC) to $300 (Tigress Financial). Morgan Stanley "Top Pick" with $235 PT. Wedbush bullish on ecosystem monetization. Cautiously positive sentiment overall.'
  } },
  
  // B. Key Investment Themes - Comprehensive analysis
  { group: 'nodes', data: { 
    id: 'investment_themes', 
    label: 'Key Investment Themes & Catalysts', 
    type: 'category', 
    text: 'Services Monetization: Growing subscription revenue from 2.35B device installed base. AI Integration: Apple Intelligence driving upgrade cycles. Emerging Markets: India growth opportunity with local manufacturing. Capital Returns: $100B+ annual shareholder returns. AR/VR potential upside.'
  } },

  // C. Earnings Call Focus Areas
  { group: 'nodes', data: { 
    id: 'earnings_focus', 
    label: 'Analyst Focus Areas & Concerns', 
    type: 'category', 
    text: 'iPhone demand trajectory and China performance. Services growth sustainability and margin expansion. Apple Intelligence adoption and monetization potential. Vision Pro market reception and scaling. Regulatory impact on App Store revenues. Supply chain and geopolitical risk management.'
  } },

  // D. Valuation & Multiple Analysis
  { group: 'nodes', data: { 
    id: 'valuation_analysis', 
    label: 'Valuation Analysis & Comparisons', 
    type: 'category', 
    text: 'P/E ~30x (vs historical 10x-20x) reflecting ecosystem premium. EV/EBITDA and P/FCF in high-20s. Treated as "tech staple" given predictable cash flows. Valuation supported by brand strength, ecosystem moat, and consistent capital returns. Some caution on multiple compression risk.'
  } },

  // --- VI. INDUSTRY ANALYSIS (PORTER\'S FIVE FORCES) ---
  { group: 'nodes', data: { id: 'industry_analysis', label: 'VI. Industry Analysis', type: 'main_category' } },
  
  // A. Competitive Dynamics - Detailed analysis
  { group: 'nodes', data: { 
    id: 'competitive_rivalry', 
    label: 'Competitive Rivalry (HIGH)', 
    type: 'category', 
    text: 'Intense competition from Samsung (Android flagship), Chinese OEMs (Xiaomi, Oppo, Vivo), Google (Pixel). Rapid innovation cycles and aggressive pricing in mid/low tiers. Apple differentiates through iOS ecosystem, premium positioning, integrated experience. Brand loyalty reduces direct competition impact.'
  } },
  
  // B. Barriers to Entry - Comprehensive assessment
  { group: 'nodes', data: { 
    id: 'barriers_entry', 
    label: 'Threat of New Entrants (LOW)', 
    type: 'category', 
    text: 'Extremely high barriers: Massive capital requirements for chip design, manufacturing scale, ecosystem development. Apple\'s 2.35B device installed base creates powerful network effects. Brand loyalty and switching costs protect market position. Failed attempts: Microsoft Windows Phone, Amazon Fire Phone.'
  } },
  
  // C. Supplier Power - Complex relationships
  { group: 'nodes', data: { 
    id: 'supplier_power', 
    label: 'Bargaining Power of Suppliers (MODERATE)', 
    type: 'category', 
    text: 'Key dependencies: TSMC (chip manufacturing), Samsung/LG (displays), Sony (cameras). Apple\'s massive scale provides leverage but specialized components limit alternatives. Custom silicon design reduces dependency. Geographic diversification (India, Vietnam) reducing China concentration risk.'
  } },

  // D. Buyer Power
  { group: 'nodes', data: { 
    id: 'buyer_power', 
    label: 'Bargaining Power of Buyers (LOW-MODERATE)', 
    type: 'category', 
    text: 'Individual consumers have no collective bargaining power. Strong brand loyalty and ecosystem lock-in reduce price sensitivity. Customer satisfaction >95% for Apple products. However, price-sensitive segments can choose alternatives. Premium positioning limits addressable market but protects margins.'
  } },

  // E. Substitute Threats
  { group: 'nodes', data: { 
    id: 'substitute_threats', 
    label: 'Threat of Substitutes (MODERATE)', 
    type: 'category', 
    text: 'Potential substitutes: Extended device lifecycles, alternative form factors (AR glasses, smartwatches), cross-platform services. Apple hedges by investing in potential substitutes (Watch, Vision Pro). Ecosystem integration makes switching costly. Future ambient computing paradigms could disrupt smartphone centricity.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  
  // A. Primary Hardware Competitors
  { group: 'nodes', data: { 
    id: 'samsung_competition', 
    label: 'Samsung: Primary Hardware Rival', 
    type: 'competitor', 
    text: 'Market leader by volume (~20% global share). Strengths: Diverse portfolio, component integration, foldable innovation, supply chain control. Weaknesses: Lower profit margins, Android dependence, commoditization pressure. Apple advantages: iOS ecosystem, premium brand, service integration, custom silicon.'
  } },
  
  { group: 'nodes', data: { 
    id: 'chinese_oems', 
    label: 'Chinese OEMs: Volume Competitors', 
    type: 'competitor', 
    text: 'Xiaomi, Oppo, Vivo dominate mid-tier globally and premium in China. Strengths: Aggressive pricing, rapid innovation, local market knowledge. Challenge Apple in emerging markets and China. Apple response: Local manufacturing in India, premium positioning, ecosystem differentiation.'
  } },

  // B. Platform & Software Competitors
  { group: 'nodes', data: { 
    id: 'google_competition', 
    label: 'Google: Platform & AI Competitor', 
    type: 'competitor', 
    text: 'Android OS dominance (71% global share), AI leadership (Gemini), services integration. Pixel hardware minimal threat. Apple differentiates through privacy-first AI approach, on-device processing, premium hardware integration. $18-20B annual payments to Google for Safari default search.'
  } },
  
  { group: 'nodes', data: { 
    id: 'microsoft_competition', 
    label: 'Microsoft: Enterprise & Productivity Rival', 
    type: 'competitor', 
    text: 'Windows PC dominance (75%+ market share), enterprise strength, AI integration (Copilot). Limited mobile presence. Apple advantages: M-series chip performance, consumer focus, ecosystem integration. Competition in productivity software, cloud services, and emerging AR/VR enterprise applications.'
  } },

  // C. Services & Platform Competitors
  { group: 'nodes', data: { 
    id: 'meta_competition', 
    label: 'Meta: AR/VR & Social Platform Rival', 
    type: 'competitor', 
    text: 'Quest VR market leadership (~80% share), social platform dominance (WhatsApp, Instagram), Metaverse vision. Apple Vision Pro targets premium spatial computing vs Meta\'s gaming/social focus. Competition intensifying in AR/VR future platforms and digital services ecosystem.'
  } },

  { group: 'nodes', data: { 
    id: 'amazon_competition', 
    label: 'Amazon: Services & Smart Home Rival', 
    type: 'competitor', 
    text: 'Prime Video vs Apple TV+, Alexa vs Siri, Echo vs HomePod. Strengths: Low-cost devices, retail integration, enterprise cloud (AWS). Apple challenges: Premium pricing, Siri capability gaps. Amazon uses devices as retail funnels vs Apple\'s profit-focused model.'
  } },

  // D. Streaming & Content Competitors
  { group: 'nodes', data: { 
    id: 'streaming_competitors', 
    label: 'Streaming & Content Platform Rivals', 
    type: 'competitor', 
    text: 'Spotify leads music streaming (210M vs Apple\'s 88M subscribers). Netflix dominates video streaming (~230M subscribers vs Apple TV+\'s smaller base). Apple strategy: Integration advantages, premium content, bundling via Apple One. Quality over quantity approach in content investments.'
  } },

  // --- VIII. SWOT ANALYSIS & OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Future Outlook', type: 'main_category' } },
  
  // A. Strengths - Comprehensive analysis
  { group: 'nodes', data: { 
    id: 'strengths', 
    label: 'Key Strengths & Competitive Advantages', 
    type: 'swot_strength', 
    text: 'Brand Power: World\'s most valuable brand (~$300B+ brand value) with exceptional loyalty. Integrated Ecosystem: Seamless hardware-software-services creating high switching costs. Financial Strength: $100B+ annual cash generation, $3.4T market cap. Custom Silicon: M-series/A-series performance leadership. Retail Excellence: 500+ Apple Stores globally.'
  } },
  
  // B. Weaknesses - Critical vulnerabilities
  { group: 'nodes', data: { 
    id: 'weaknesses', 
    label: 'Key Weaknesses & Vulnerabilities', 
    type: 'swot_weakness', 
    text: 'iPhone Dependence: ~51% revenue concentration in single product line. Premium Pricing: Limits addressable market in price-sensitive segments. Ecosystem Lock-in Criticism: Regulatory scrutiny of "walled garden" approach. Late Adopter in Some Services: Siri, Maps initially lagged competitors. China Market Volatility: 11.1% decline in Q2 2025.'
  } },
  
  // C. Opportunities - Growth vectors
  { group: 'nodes', data: { 
    id: 'opportunities', 
    label: 'Growth Opportunities & Catalysts', 
    type: 'swot_opportunity', 
    text: 'AI Integration: Apple Intelligence driving new upgrade cycles and potential subscription services. Emerging Markets: India manufacturing and market expansion. New Categories: AR/VR (Vision Pro), automotive, advanced health services. Services Growth: Monetizing 2.35B device installed base. Financial Services: Expanding beyond Apple Card/Pay.'
  } },
  
  // D. Threats - Risk factors
  { group: 'nodes', data: { 
    id: 'threats', 
    label: 'Key Threats & Risk Factors', 
    type: 'swot_threat', 
    text: 'Regulatory Pressure: EU DMA, US antitrust potentially reducing App Store revenues. Geopolitical Risk: China tensions, supply chain disruption, tariff costs ($900M/quarter). Market Saturation: Smartphone replacement cycles lengthening. AI Competition: Google/Microsoft/OpenAI innovation potentially marginalizing Apple.'
  } },
  
  // E. Future Outlook - Investment thesis
  { group: 'nodes', data: { 
    id: 'future_outlook', 
    label: 'Future Outlook & Investment Thesis', 
    type: 'category', 
    text: 'Investment Thesis: Stable-growth story with mid-single-digit revenue growth, high-single-digit EPS growth (buyback-driven). Transition to "tech staple" with utility-like cash flow stability. Key catalysts: Apple Intelligence adoption, Vision Pro scaling, India expansion, services monetization. Long-term: AR/VR platform leadership potential.'
  } },

  // F. Key Risk Factors
  { group: 'nodes', data: { 
    id: 'risk_factors', 
    label: 'Principal Risk Factors', 
    type: 'category', 
    text: 'iPhone cycle dependency and market saturation. Regulatory changes affecting App Store economics. Geopolitical tensions impacting supply chain and China market. Innovation pressure in AI and emerging technologies. Economic downturns affecting premium product demand. Currency headwinds in international markets.'
  } },

  // G. Strategic Initiatives
  { group: 'nodes', data: { 
    id: 'strategic_initiatives', 
    label: 'Key Strategic Initiatives', 
    type: 'category', 
    text: 'Geographic diversification: India/Vietnam manufacturing expansion. AI development: On-device intelligence and privacy-first approach. Ecosystem expansion: Services penetration and new device categories. Vertical integration: Custom silicon and component development. Sustainability: Carbon neutral goals by 2030.'
  } },

  // --- EDGES (RELATIONSHIPS) ---
  { group: 'edges', data: { id: 'aapl-company', source: 'aapl', target: 'company_info' } },
  { group: 'edges', data: { id: 'aapl-financial', source: 'aapl', target: 'financial_performance' } },
  { group: 'edges', data: { id: 'aapl-recent', source: 'aapl', target: 'recent_developments' } },
  { group: 'edges', data: { id: 'aapl-market', source: 'aapl', target: 'market_landscape' } },
  { group: 'edges', data: { id: 'aapl-analyst', source: 'aapl', target: 'analyst_sentiment' } },
  { group: 'edges', data: { id: 'aapl-industry', source: 'aapl', target: 'industry_analysis' } },
  { group: 'edges', data: { id: 'aapl-competitive', source: 'aapl', target: 'competitive_analysis' } },
  { group: 'edges', data: { id: 'aapl-swot', source: 'aapl', target: 'swot_outlook' } },

  // Company Info relationships
  { group: 'edges', data: { id: 'company-profile', source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { id: 'company-segments', source: 'company_info', target: 'business_segments' } },
  { group: 'edges', data: { id: 'company-geographic', source: 'company_info', target: 'geographic_mix' } },
  { group: 'edges', data: { id: 'company-model', source: 'company_info', target: 'business_model' } },

  // Business Segments relationships
  { group: 'edges', data: { id: 'segments-iphone', source: 'business_segments', target: 'iphone_segment' } },
  { group: 'edges', data: { id: 'segments-services', source: 'business_segments', target: 'services_segment' } },
  { group: 'edges', data: { id: 'segments-mac', source: 'business_segments', target: 'mac_segment' } },
  { group: 'edges', data: { id: 'segments-ipad', source: 'business_segments', target: 'ipad_segment' } },
  { group: 'edges', data: { id: 'segments-wearables', source: 'business_segments', target: 'wearables_segment' } },

  // Financial Performance relationships
  { group: 'edges', data: { id: 'financial-q2', source: 'financial_performance', target: 'q2_2025_results' } },
  { group: 'edges', data: { id: 'financial-metrics', source: 'financial_performance', target: 'financial_metrics' } },
  { group: 'edges', data: { id: 'financial-historical', source: 'financial_performance', target: 'historical_performance' } },
  { group: 'edges', data: { id: 'financial-capital', source: 'financial_performance', target: 'capital_return' } },
  { group: 'edges', data: { id: 'financial-profitability', source: 'financial_performance', target: 'profitability_analysis' } },

  // Recent Developments relationships
  { group: 'edges', data: { id: 'recent-ai', source: 'recent_developments', target: 'apple_intelligence' } },
  { group: 'edges', data: { id: 'ai-updates', source: 'apple_intelligence', target: 'ai_latest_updates' } },
  { group: 'edges', data: { id: 'recent-vision', source: 'recent_developments', target: 'vision_pro_updates' } },
  { group: 'edges', data: { id: 'recent-supply', source: 'recent_developments', target: 'supply_chain' } },
  { group: 'edges', data: { id: 'recent-regulatory', source: 'recent_developments', target: 'regulatory_challenges' } },
  { group: 'edges', data: { id: 'recent-innovation', source: 'recent_developments', target: 'product_innovation' } },

  // Market Landscape relationships
  { group: 'edges', data: { id: 'market-smartphone', source: 'market_landscape', target: 'smartphone_market' } },
  { group: 'edges', data: { id: 'market-tech', source: 'market_landscape', target: 'technology_trends' } },
  { group: 'edges', data: { id: 'market-services', source: 'market_landscape', target: 'digital_services_market' } },
  { group: 'edges', data: { id: 'market-emerging', source: 'market_landscape', target: 'emerging_platforms' } },
  { group: 'edges', data: { id: 'market-structure', source: 'market_landscape', target: 'market_structure' } },

  // Analyst Sentiment relationships
  { group: 'edges', data: { id: 'analyst-ratings', source: 'analyst_sentiment', target: 'analyst_ratings' } },
  { group: 'edges', data: { id: 'analyst-themes', source: 'analyst_sentiment', target: 'investment_themes' } },
  { group: 'edges', data: { id: 'analyst-focus', source: 'analyst_sentiment', target: 'earnings_focus' } },
  { group: 'edges', data: { id: 'analyst-valuation', source: 'analyst_sentiment', target: 'valuation_analysis' } },

  // Industry Analysis relationships
  { group: 'edges', data: { id: 'industry-rivalry', source: 'industry_analysis', target: 'competitive_rivalry' } },
  { group: 'edges', data: { id: 'industry-barriers', source: 'industry_analysis', target: 'barriers_entry' } },
  { group: 'edges', data: { id: 'industry-suppliers', source: 'industry_analysis', target: 'supplier_power' } },
  { group: 'edges', data: { id: 'industry-buyers', source: 'industry_analysis', target: 'buyer_power' } },
  { group: 'edges', data: { id: 'industry-substitutes', source: 'industry_analysis', target: 'substitute_threats' } },

  // Competitive Analysis relationships
  { group: 'edges', data: { id: 'competitive-samsung', source: 'competitive_analysis', target: 'samsung_competition' } },
  { group: 'edges', data: { id: 'competitive-chinese', source: 'competitive_analysis', target: 'chinese_oems' } },
  { group: 'edges', data: { id: 'competitive-google', source: 'competitive_analysis', target: 'google_competition' } },
  { group: 'edges', data: { id: 'competitive-microsoft', source: 'competitive_analysis', target: 'microsoft_competition' } },
  { group: 'edges', data: { id: 'competitive-meta', source: 'competitive_analysis', target: 'meta_competition' } },
  { group: 'edges', data: { id: 'competitive-amazon', source: 'competitive_analysis', target: 'amazon_competition' } },
  { group: 'edges', data: { id: 'competitive-streaming', source: 'competitive_analysis', target: 'streaming_competitors' } },

  // SWOT relationships
  { group: 'edges', data: { id: 'swot-strengths', source: 'swot_outlook', target: 'strengths' } },
  { group: 'edges', data: { id: 'swot-weaknesses', source: 'swot_outlook', target: 'weaknesses' } },
  { group: 'edges', data: { id: 'swot-opportunities', source: 'swot_outlook', target: 'opportunities' } },
  { group: 'edges', data: { id: 'swot-threats', source: 'swot_outlook', target: 'threats' } },
  { group: 'edges', data: { id: 'swot-outlook', source: 'swot_outlook', target: 'future_outlook' } },
  { group: 'edges', data: { id: 'swot-risks', source: 'swot_outlook', target: 'risk_factors' } },
  { group: 'edges', data: { id: 'swot-strategic', source: 'swot_outlook', target: 'strategic_initiatives' } },

  // Cross-category relationships
  { group: 'edges', data: { id: 'ai-services', source: 'apple_intelligence', target: 'services_segment' } },
  { group: 'edges', data: { id: 'vision-emerging', source: 'vision_pro_updates', target: 'emerging_platforms' } },
  { group: 'edges', data: { id: 'supply-threats', source: 'supply_chain', target: 'threats' } },
  { group: 'edges', data: { id: 'regulatory-threats', source: 'regulatory_challenges', target: 'threats' } },
  { group: 'edges', data: { id: 'china-geographic', source: 'threats', target: 'geographic_mix' } },
  { group: 'edges', data: { id: 'services-strengths', source: 'services_segment', target: 'strengths' } },
];
