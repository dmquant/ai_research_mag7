import type { GraphElement } from '../components/KnowledgeGraph.astro';

// Amazon company metadata for UI integration
export const amazonMetadata = {
  companyName: 'Amazon.com, Inc.',
  ticker: 'AMZN',
  exchange: 'NASDAQ',
  marketCap: '$2.1T',
  latestQuarter: 'Q1 2025',
  keyMetrics: {
    revenue: { value: '$155.7B', change: '+9% YoY', isPositive: true },
    eps: { value: '$1.59', change: '+62% YoY', isPositive: true },
    operatingMargin: { value: '11.8%', change: 'Record High', isPositive: true },
    awsGrowth: { value: '17%', change: 'AWS Growth', isPositive: true }
  },
  segments: [
    { id: 'north_america_segment', name: 'North America', percentage: 60, revenue: '$92.9B' },
    { id: 'international_segment', name: 'International', percentage: 21, revenue: '$33.5B' },
    { id: 'aws_segment', name: 'AWS', percentage: 19, revenue: '$29.3B' },
    { id: 'advertising_segment', name: 'Advertising', percentage: 9, revenue: '$13.9B' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '📊', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '📰', priority: 3 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 4 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📈', priority: 5 },
    { id: 'industry_analysis', name: 'Industry Analysis', icon: '🏭', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return amazonGraphElements.filter(element => 
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
  return amazonGraphElements.filter(element => 
    element.group === 'nodes' && 
    element.data.type && 
    element.data.type.startsWith('swot_')
  );
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = amazonGraphElements.filter(el => el.group === 'nodes');
  const edges = amazonGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const amazonGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'amzn', label: 'Amazon.com, Inc. (AMZN)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Profile
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile', 
    type: 'category', 
    text: 'Founded July 1994 by Jeff Bezos as online bookstore in Bellevue, Washington. Headquarters: Seattle, Washington. CEO: Andy Jassy (since July 2021). ~1.56M employees globally. Market cap: ~$2.1 trillion (June 2025). Mission: "Earth\'s Most Customer-Centric Company, Earth\'s Best Employer, Earth\'s Safest Place to Work". Listed on NASDAQ under AMZN ticker.'
  } },

  // Corporate History & Evolution
  { group: 'nodes', data: { 
    id: 'corporate_history', 
    label: 'Corporate History & Evolution', 
    type: 'subcategory', 
    text: '1994: Founded as Cadabra by Jeff Bezos, renamed Amazon after Amazon River. 1995: First book sale. 1997: IPO at $18/share, raised $54M. 2000s: Expanded to electronics, cloud services. 2007: Kindle launched. 2013: Same-day delivery. 2017: Whole Foods acquisition $13.7B. 2021: Bezos steps down as CEO, focus on space exploration with Blue Origin.'
  } },

  // Amazon Culture & Leadership Principles
  { group: 'nodes', data: { 
    id: 'leadership_principles', 
    label: 'Leadership Principles & Culture', 
    type: 'subcategory', 
    text: '16 Leadership Principles drive decision-making: Customer Obsession, Ownership, Invent & Simplify, Learn & Be Curious, Hire & Develop Best, Insist on Highest Standards, Think Big, Bias for Action, Frugality, Earn Trust, Dive Deep, Have Backbone, Deliver Results, Strive to be Earth\'s Best Employer, Success & Scale Bring Broad Responsibility, Invent & Simplify.'
  } },

  // Global Presence & Operations
  { group: 'nodes', data: { 
    id: 'global_presence', 
    label: 'Global Presence & Operations', 
    type: 'subcategory', 
    text: 'Operations in 200+ countries and territories. 185+ fulfillment centers globally. 110+ countries served by Prime. 12 countries with local Amazon stores. 400+ delivery stations. 50+ sortation centers. 80+ aircraft fleet (Prime Air). 1M+ delivery drivers worldwide. Regional offices in Seattle, Arlington VA, Dublin, Luxembourg, Singapore, Tokyo.'
  } },
  
  // B. Core Business Segments - Enhanced Detail
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // North America Segment - Detailed Breakdown
  { group: 'nodes', data: { 
    id: 'north_america_segment', 
    label: 'North America (60% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $92.9B revenue (~60% of total, +8% YoY). Includes online stores, third-party seller services, physical stores, subscriptions, and advertising. Operating income $5.8B (+17% YoY) with 6.3% margin. Dominant U.S. e-commerce platform with fast delivery through Prime membership and extensive fulfillment network.'
  } },

  // Prime Ecosystem Detail
  { group: 'nodes', data: { 
    id: 'prime_ecosystem', 
    label: 'Prime Membership Ecosystem', 
    type: 'subcategory', 
    text: '200M+ global Prime members (167M+ in US). $139/year, $14.98/month pricing. Benefits: Free 2-day shipping, same-day/1-day delivery in major cities, Prime Video, Prime Music, Prime Reading, Prime Gaming, Whole Foods discounts, Amazon Fresh, unlimited photo storage. 90%+ retention rate. Average Prime member spends $1,400+ annually vs $600 for non-Prime.'
  } },

  // Third-party Marketplace
  { group: 'nodes', data: { 
    id: 'marketplace_sellers', 
    label: 'Third-party Marketplace', 
    type: 'subcategory', 
    text: '60% of units sold by third-party sellers. 2M+ active sellers worldwide. 12M+ products available. Fulfillment by Amazon (FBA) used by 75% of sellers. Seller fees: 8-45% commission + FBA fees. $200B+ annual GMV. Seller Services revenue $32.3B (Q1 2025). International expansion helping small businesses reach global customers.'
  } },

  // Physical Stores & Logistics
  { group: 'nodes', data: { 
    id: 'physical_retail', 
    label: 'Physical Stores & Logistics', 
    type: 'subcategory', 
    text: 'Whole Foods: 500+ stores, $20B+ annual revenue. Amazon Fresh: 50+ stores with Just Walk Out technology. Amazon Go: 30+ cashierless convenience stores. Amazon Books, 4-star stores (mostly closed). Last-mile delivery: Amazon Logistics (AMZL), 200+ delivery stations, 40+ sortation centers, Amazon Air cargo fleet.'
  } },
  
  // International Segment - Enhanced
  { group: 'nodes', data: { 
    id: 'international_segment', 
    label: 'International (21% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $33.5B revenue (~21% of total, +5% YoY, +8% FX-neutral). Operating income $1.0B with 3.0% margin. Key markets: Europe (UK, Germany, France), Japan, India. Faces local competition but improving profitability through cost optimization and Prime expansion in international markets.'
  } },

  // International Market Details
  { group: 'nodes', data: { 
    id: 'europe_operations', 
    label: 'European Operations', 
    type: 'subcategory', 
    text: 'UK: Largest international market, £20B+ revenue. Germany: Strong logistics hub, fulfillment centers in 7+ cities. France: Growing Prime membership, local content investments. Italy, Spain: Expanding rapidly. Netherlands, Poland: Recent market entries. EU regulations: Digital Services Act compliance, GDPR. Brexit impact managed through Dublin operations.'
  } },

  { group: 'nodes', data: { 
    id: 'asia_pacific', 
    label: 'Asia Pacific Operations', 
    type: 'subcategory', 
    text: 'Japan: $15B+ revenue, strong Prime adoption, local partnerships. India: Fastest growing market, $6.5B invested, 1M+ sellers, localized products. Australia: Recent expansion, competition with local players. Singapore: Regional headquarters, Prime Video content hub. China: Focused on cross-border e-commerce after marketplace exit.'
  } },
  
  // AWS Segment - Deep Dive
  { group: 'nodes', data: { 
    id: 'aws_segment', 
    label: 'AWS (19% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $29.3B revenue (~19% of total, +17% YoY). Operating income $11.5B (+23% YoY) with 39.5% margin. Global cloud leader with ~30% market share. Driving 63% of Amazon\'s operating profit despite being only 19% of revenue. Strong AI adoption with triple-digit YoY growth in AI business. $189B backlog with 4.1 year weighted average life.'
  } },

  // AWS Service Categories
  { group: 'nodes', data: { 
    id: 'aws_compute', 
    label: 'AWS Compute Services', 
    type: 'subcategory', 
    text: 'EC2: Virtual servers, 500+ instance types. Lambda: Serverless computing, 15B+ invocations/month. Fargate: Container hosting. Graviton processors: 40% better price/performance. Nitro System: Custom silicon for networking and storage. Global infrastructure: 32 regions, 102 availability zones, 450+ edge locations.'
  } },

  { group: 'nodes', data: { 
    id: 'aws_ai_ml', 
    label: 'AWS AI/ML Services', 
    type: 'subcategory', 
    text: 'Bedrock: Foundation models from Anthropic, Cohere, Meta, Stability AI. SageMaker: ML platform, 100K+ customers. CodeWhisperer: AI coding assistant. Trainium/Inferentia: Custom AI chips, 50% cost savings vs GPUs. Amazon Q: AI assistant for developers. Computer Vision, Natural Language Processing, Speech services. $10B+ AI revenue run rate.'
  } },

  { group: 'nodes', data: { 
    id: 'aws_enterprise', 
    label: 'AWS Enterprise Services', 
    type: 'subcategory', 
    text: 'Million+ customers including 100+ Fortune 500. Government: $7.8B in contracts including Pentagon JEDI alternatives. Financial Services: 8 of 10 largest US banks. Healthcare: HIPAA compliance, 10K+ healthcare customers. Media: Disney, Netflix content delivery. Automotive: GM, BMW IoT solutions. Manufacturing: Siemens, GE digital twins.'
  } },

  // Advertising Segment - Detailed
  { group: 'nodes', data: { 
    id: 'advertising_segment', 
    label: 'Advertising (9% of Revenue)', 
    type: 'segment', 
    text: 'Q1 2025: $13.9B revenue (+19% YoY). High-margin business (~75% gross margin) leveraging first-party shopping data. Third-largest digital advertiser globally after Google and Meta. Includes sponsored products, display ads, video ads on Prime Video, and retail media networks. Reached 275M+ ad-supported users in U.S.'
  } },

  // Advertising Breakdown
  { group: 'nodes', data: { 
    id: 'retail_media', 
    label: 'Retail Media Network', 
    type: 'subcategory', 
    text: 'Sponsored Products: Search result ads, 85% of ad revenue. Sponsored Brands: Brand awareness campaigns. Sponsored Display: Retargeting off-Amazon. Amazon DSP: Programmatic advertising. Over 1M+ advertisers. 70%+ incremental sales for advertisers. CPM rates: $3-12, higher intent than social media. Integration with Amazon Marketing Cloud for analytics.'
  } },

  { group: 'nodes', data: { 
    id: 'video_advertising', 
    label: 'Video Advertising (Prime Video)', 
    type: 'subcategory', 
    text: 'Prime Video: 200M+ monthly viewers globally. Thursday Night Football: 15M+ average viewership. Original content: $8.5B annual investment. Ad-supported tier: $3/month discount, 275M+ US users. Interactive ads, shoppable content. Connected TV advertising growing 30%+ YoY. Competition with Netflix, Disney+ for premium inventory.'
  } },

  // C. Leadership & Governance - Enhanced
  { group: 'nodes', data: { 
    id: 'leadership_governance', 
    label: 'Leadership & Governance', 
    type: 'category', 
    text: 'CEO Andy Jassy (former AWS CEO, took over July 2021). Jeff Bezos Executive Chairman (largest individual shareholder). CFO Brian Olsavsky (since 2015). New AWS CEO Matt Garman (effective June 2025, replacing Adam Selipsky). Doug Herrington leads Worldwide Amazon Stores. Board includes majority independent directors with diverse backgrounds.'
  } },

  // Executive Leadership Detail
  { group: 'nodes', data: { 
    id: 'executive_team', 
    label: 'Executive Leadership Team', 
    type: 'subcategory', 
    text: 'Andy Jassy (CEO): AWS founder, joined 1997, Harvard MBA. Dave Clark (Consumer CEO): Operations expert, 23 years at Amazon. Brian Olsavsky (CFO): Finance background, joined 2002. Dave Limp (Devices): Echo, Alexa, Ring leader. Adam Selipsky: AWS CEO until 2025. Jay Carney: Global Affairs. Beth Galetti: HR, People Operations. Jeff Wilke: Former Worldwide Consumer CEO (retired 2021).'
  } },

  // Board & Governance
  { group: 'nodes', data: { 
    id: 'board_governance', 
    label: 'Board of Directors & Governance', 
    type: 'subcategory', 
    text: '10-member board: Jeff Bezos (Executive Chairman), Andy Jassy (CEO). Independent directors: Jamie Gorelick (lawyer), Alain Monié (former CEO), Indra Nooyi (former PepsiCo CEO), Jon Rubinstein (former Apple executive), Tom Ryder (former Reader\'s Digest CEO), Patricia Stonesifer (philanthropist), Wendell Weeks (Corning CEO). Compensation: Performance-based, long-term incentives.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q1 2025)
  { group: 'nodes', data: { 
    id: 'q1_2025_results', 
    label: 'Q1 2025 Financial Results', 
    type: 'category', 
    text: 'Revenue: $155.7B (+9% YoY, +10% FX-neutral), meeting estimates. EPS: $1.59 (+62% YoY), beating estimates by 16.7%. Operating income: $18.4B (+20% YoY) with record 11.8% margin. Net income: $17.1B (+64% YoY). Operating cash flow TTM: $113.9B (+15% YoY). Strong performance across all segments.'
  } },

  // Revenue Trend Analysis
  { group: 'nodes', data: { 
    id: 'revenue_trends', 
    label: 'Revenue Growth Trends', 
    type: 'subcategory', 
    text: '5-year CAGR: 22% (2019-2024). Q1 2025: $155.7B vs Q1 2024: $143.3B (+9%). AWS leading growth at 17%, Advertising at 19%. North America retail growth slowing (8% vs historic 15%+). International improving with FX-neutral growth 8%. Prime member growth plateauing in mature markets, expanding internationally.'
  } },

  // Profitability Analysis
  { group: 'nodes', data: { 
    id: 'profitability_metrics', 
    label: 'Profitability & Margin Analysis', 
    type: 'subcategory', 
    text: 'Operating Margin: 11.8% (Q1 2025), up from 7.4% (Q1 2024). AWS margin: 39.5% (industry-leading). Advertising margin: ~75% (high-margin business). Retail margins: 3-6% (low due to scale/competition). Net margin: 11.0% vs 3.8% prior year. EBITDA margin: ~15%. Gross margin: ~43% improving with services mix.'
  } },

  // Cash Flow & Capital Allocation
  { group: 'nodes', data: { 
    id: 'cash_flow', 
    label: 'Cash Flow & Capital Allocation', 
    type: 'subcategory', 
    text: 'Operating Cash Flow TTM: $113.9B (+15% YoY). Free Cash Flow: $25.9B (down from $50.1B due to capex). Capex TTM: $88B (highest ever), focused on AWS infrastructure, fulfillment centers, content. Share buybacks: $10B program announced. Dividends: None (reinvests in growth). Debt: $75B total, mostly long-term, AAA credit rating.'
  } },
  
  // B. Key Financial Metrics - Enhanced
  { group: 'nodes', data: { 
    id: 'financial_metrics', 
    label: 'Key Financial Metrics & Ratios', 
    type: 'category', 
    text: 'Market Cap: ~$2.1T. P/E Ratio: ~37x (trailing). Operating Margin: 11.8% (Q1 2025, record high). Net Income Margin: ~11%. Free Cash Flow TTM: $25.9B (down from $50.1B due to high capex). Gross Margin: ~40%. Current Ratio: ~1.0. Debt-to-Equity: ~0.3 (conservative leverage).'
  } },

  // Valuation Metrics
  { group: 'nodes', data: { 
    id: 'valuation_analysis', 
    label: 'Valuation & Stock Metrics', 
    type: 'subcategory', 
    text: 'Stock Price: $185+ (June 2025), +26% YTD, +11% May alone. Market Cap: $2.1T (4th largest globally). P/E: 37x (vs 28x S&P 500). P/S: 3.2x. EV/EBITDA: 25x. Price/Book: 8.2x. Price/Free Cash Flow: 81x (elevated due to capex). Revenue per employee: $562K. 52-week range: $118-$191.'
  } },

  // Balance Sheet Strength
  { group: 'nodes', data: { 
    id: 'balance_sheet', 
    label: 'Balance Sheet & Financial Health', 
    type: 'subcategory', 
    text: 'Total Assets: $615B. Cash & Equivalents: $73B. Total Debt: $75B (1.2x EBITDA, very manageable). Current Ratio: 1.03 (adequate liquidity). Debt/Equity: 0.35 (conservative). Working Capital: $20B positive. Inventory: $35B (45-day turnover). Accounts Payable: $87B (good supplier terms). Credit Rating: AA+ (S&P), Aa1 (Moody\'s).'
  } },

  // Investor Returns & Dividends
  { group: 'nodes', data: { 
    id: 'investor_returns', 
    label: 'Investor Returns & Capital Policy', 
    type: 'subcategory', 
    text: 'No dividends (growth reinvestment strategy). Share buybacks: $10B program (first significant buyback). Historical returns: 20%+ CAGR since IPO (1997). Beta: 1.1 (slightly more volatile than market). Insider ownership: Bezos 9.9%, institutions 60%+. Analyst targets: $200-250 (average $225). 35+ Buy ratings, 5 Hold, 1 Sell.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. AI & Technology Developments
  { group: 'nodes', data: { 
    id: 'ai_technology', 
    label: 'AI & Technology Developments', 
    type: 'category', 
    text: 'Alexa+ launched: next-gen AI assistant with enhanced capabilities. AWS AI business growing triple-digit YoY. Trainium2 and Inferentia2 chips for AI workloads. Amazon Nova foundation models expanding globally. Bedrock platform with Anthropic Claude integration. Project Kuiper satellites successfully launched (Oct 2024). Quantum computing chip Ocelot announced.'
  } },

  // AI Innovation Details
  { group: 'nodes', data: { 
    id: 'alexa_ai_evolution', 
    label: 'Alexa+ AI Revolution', 
    type: 'subcategory', 
    text: 'Alexa+ (June 2025): Conversational AI, natural language understanding, multi-modal interactions. Integration with Amazon Nova LLMs. Voice shopping optimization. Smart home control with 100K+ compatible devices. 200M+ monthly active users. Developer APIs for third-party integrations. Competition with Google Assistant, Apple Siri.'
  } },

  { group: 'nodes', data: { 
    id: 'aws_ai_innovations', 
    label: 'AWS AI Platform Expansion', 
    type: 'subcategory', 
    text: 'Amazon Nova foundation models: Text, image, video generation. Anthropic Claude partnership: $4B investment. CodeWhisperer AI coding: 50M+ developers. SageMaker usage: 300K+ ML models deployed. Trainium/Inferentia chips: 50% cost savings vs Nvidia. AI revenue: $10B+ run rate, triple-digit growth.'
  } },

  // B. Strategic Acquisitions & Partnerships
  { group: 'nodes', data: { 
    id: 'acquisitions_partnerships', 
    label: 'Strategic Acquisitions & Partnerships', 
    type: 'category', 
    text: 'Recent M&A activity focused on AI, healthcare, logistics. One Medical acquisition: $3.9B (2022), expanding healthcare. MGM Studios: $8.5B (2021), content for Prime Video. Zoox (autonomous vehicles): $1.3B (2020). iRobot deal cancelled due to regulatory concerns. Key partnerships: Toyota (logistics), BMW (cloud), Anthropic (AI).'
  } },

  // C. Product & Service Launches
  { group: 'nodes', data: { 
    id: 'product_launches', 
    label: 'New Product & Service Launches', 
    type: 'category', 
    text: 'Project Kuiper: First satellite launches successful, 3,236 satellite constellation planned. Amazon Pharmacy: Prescription delivery expansion. Amazon Fresh: Cashierless stores with Just Walk Out. Ring Car Cam: Vehicle security. Echo Studio: Premium smart speaker. Fire TV Omni QLED: Premium TV line. Amazon Astro: Home robot (invite-only).'
  } },

  // --- IV. MARKET LANDSCAPE & POSITIONING ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'IV. Market Analysis', type: 'main_category' } },

  // Market Size & Growth
  { group: 'nodes', data: { 
    id: 'market_sizing', 
    label: 'Total Addressable Market', 
    type: 'category', 
    text: 'Global e-commerce: $6.2T market, growing 8%+ annually. Cloud computing: $500B market, AWS 30% share. Digital advertising: $750B market, Amazon 10%+ share. Global retail: $29T total market. Smart speakers: Amazon 25% global share. Video streaming: Prime Video #3 globally after Netflix, Disney+.'
  } },

  // Geographic Markets
  { group: 'nodes', data: { 
    id: 'geographic_analysis', 
    label: 'Geographic Market Analysis', 
    type: 'subcategory', 
    text: 'US: 38% of total revenue, mature market, Prime penetration 65%+. Europe: 25% of revenue, growing 12% YoY. Asia-Pacific: 15% of revenue, fastest growth 20%+. Latin America: 5% of revenue, early expansion. Middle East/Africa: 2% of revenue, untapped potential. Regulatory challenges: EU (DMA, DSA), India (foreign investment), China (data security).'
  } },

  // --- V. ANALYST SENTIMENT & RESEARCH ---
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'V. Analyst Views', type: 'main_category' } },

  // Wall Street Consensus
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Wall Street Analyst Consensus', 
    type: 'category', 
    text: 'Overall Rating: Buy (35 analysts). Price Targets: $200-250 range, average $225. Recent upgrades: Morgan Stanley, Goldman Sachs. Key bullish factors: AWS dominance, AI leadership, margin expansion. Bear case: Competition, regulation, high valuation. Earnings estimates: $2.75 EPS (2025E), $3.50 EPS (2026E).'
  } },

  // Research Reports
  { group: 'nodes', data: { 
    id: 'research_highlights', 
    label: 'Key Research & Analysis', 
    type: 'subcategory', 
    text: 'Morgan Stanley: "Top Pick 2025", $240 target, AI monetization thesis. Goldman Sachs: $230 target, cloud leadership sustainable. JPMorgan: $220 target, advertising growth acceleration. Wedbush: $250 target, "best-in-class" AI positioning. McKinsey: Estimates $100B+ AI opportunity for Amazon by 2030.'
  } },

  // --- VI. INDUSTRY ANALYSIS & TRENDS ---
  { group: 'nodes', data: { id: 'industry_analysis', label: 'VI. Industry Analysis', type: 'main_category' } },

  // E-commerce Trends
  { group: 'nodes', data: { 
    id: 'ecommerce_trends', 
    label: 'E-commerce Industry Trends', 
    type: 'category', 
    text: 'Global e-commerce penetration: 20% of total retail, growing to 25% by 2027. Mobile commerce: 75% of transactions. Social commerce growth: TikTok Shop, Instagram Shopping. B2B e-commerce: $18T market, Amazon Business growing 25%+. Sustainability focus: Carbon-neutral delivery, packaging reduction. Voice commerce: Alexa enabling $1B+ in purchases.'
  } },

  // Cloud Computing Evolution
  { group: 'nodes', data: { 
    id: 'cloud_industry_trends', 
    label: 'Cloud Computing Industry Evolution', 
    type: 'category', 
    text: 'Multi-cloud adoption: 87% of enterprises use multiple clouds. Edge computing growth: 30%+ annually, AWS Wavelength, Local Zones. Hybrid cloud demand: AWS Outposts, VMware partnership. Serverless computing: Lambda usage growing 40%+ YoY. Container adoption: EKS, Fargate driving growth. AI/ML workloads: 60% of cloud spending by 2027.'
  } },

  // Digital Advertising Evolution
  { group: 'nodes', data: { 
    id: 'advertising_trends', 
    label: 'Digital Advertising Trends', 
    type: 'subcategory', 
    text: 'Retail media networks: Fastest growing ad segment, 25%+ annual growth. Connected TV advertising: Amazon Prime Video, Thursday Night Football. First-party data advantage: Privacy regulations favoring Amazon. Performance advertising: Attribution, measurement capabilities. Programmatic growth: Amazon DSP expansion. Global retail media: $100B+ market by 2027.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competition', type: 'main_category' } },
  
  // Key Competitors - Enhanced
  { group: 'nodes', data: { 
    id: 'microsoft_azure', 
    label: 'Microsoft (Azure Cloud)', 
    type: 'competitor', 
    text: 'Azure growing 29% vs AWS 17%. Strong in enterprise with Office/Teams integration. OpenAI partnership driving AI advantage. Hybrid cloud strength. Azure revenue ~$75B annually but lower margins than AWS. Microsoft market cap ~$3.2T competing for AI leadership.'
  } },

  // Microsoft Competitive Analysis
  { group: 'nodes', data: { 
    id: 'microsoft_analysis', 
    label: 'Microsoft Competitive Dynamics', 
    type: 'subcategory', 
    text: 'Strengths: Enterprise relationships, productivity suite lock-in, OpenAI partnership (ChatGPT integration), hybrid cloud. Weaknesses: Lower cloud margins, later to market, consumer weakness. Battle areas: AI services, enterprise cloud, productivity tools. Microsoft\'s advantage: Existing enterprise contracts, bundling strategy.'
  } },
  
  { group: 'nodes', data: { 
    id: 'google_cloud', 
    label: 'Google (Cloud & Advertising)', 
    type: 'competitor', 
    text: 'Google Cloud Platform 3rd largest cloud provider growing ~25%. AI capabilities with Bard/Gemini. Search advertising dominance with $280B+ annual revenue. Workplace/productivity suite competition. YouTube advertising competes with Prime Video. Strong in data analytics and machine learning.'
  } },

  // Google Competitive Analysis
  { group: 'nodes', data: { 
    id: 'google_analysis', 
    label: 'Google Competitive Positioning', 
    type: 'subcategory', 
    text: 'Strengths: Search dominance, AI research leadership, data analytics, YouTube scale. Weaknesses: Enterprise relationships, cloud margins, regulatory scrutiny. Competition areas: Digital advertising, cloud AI, consumer devices, video streaming. Google\'s edge: Search data, AI research, consumer reach.'
  } },
  
  { group: 'nodes', data: { 
    id: 'walmart_ecommerce', 
    label: 'Walmart (E-commerce & Retail)', 
    type: 'competitor', 
    text: 'E-commerce growing 27% (2024) vs Amazon single-digit. $650B+ total revenue, largest retailer globally. Walmart+ membership competing with Prime. Strong omnichannel with 4,700+ U.S. stores. Price leadership in groceries. Walmart Connect advertising network growing rapidly.'
  } },

  // Walmart Competitive Analysis
  { group: 'nodes', data: { 
    id: 'walmart_analysis', 
    label: 'Walmart Retail Competition', 
    type: 'subcategory', 
    text: 'Strengths: Physical store network, grocery leadership, price positioning, omnichannel fulfillment. Weaknesses: Technology lag, Prime ecosystem, profitability. Key battlegrounds: Grocery delivery, retail media, membership programs. Walmart\'s advantage: Local presence, grocery scale, everyday low prices.'
  } },

  { group: 'nodes', data: { 
    id: 'chinese_ecommerce', 
    label: 'Chinese E-commerce (Shein/Temu/Alibaba)', 
    type: 'competitor', 
    text: 'Shein/Temu disrupting with ultra-low prices and direct-from-China shipping. Alibaba dominates Chinese market with $72B+ revenue. Fast international expansion. Regulatory tensions limiting U.S. access. Amazon responding with low-price initiatives and seller recruitment.'
  } },

  // Chinese Competition Analysis
  { group: 'nodes', data: { 
    id: 'chinese_competition', 
    label: 'Chinese Platform Competition', 
    type: 'subcategory', 
    text: 'Temu: 100M+ US users, ultra-low prices, 15-day shipping. Shein: Fast fashion dominance, younger demographics, social commerce. Alibaba: B2B leadership, cloud presence in Asia. TikTok Shop: Social commerce growth, Gen Z appeal. Amazon\'s response: Haul app, low-price sellers, logistics partnerships.'
  } },

  // Other Key Competitors
  { group: 'nodes', data: { 
    id: 'other_competitors', 
    label: 'Other Key Competitors', 
    type: 'category', 
    text: 'Apple: Services competition, App Store policies, iCloud vs AWS. Meta: Advertising dollars, WhatsApp Business, VR/AR. Netflix: Content competition, streaming dominance. Shopify: E-commerce platform, small business focus. Adobe: Creative cloud, marketing automation. Salesforce: CRM, enterprise software.'
  } },

  // Competitive Positioning
  { group: 'nodes', data: { 
    id: 'competitive_positioning', 
    label: 'Amazon\'s Competitive Advantages', 
    type: 'category', 
    text: 'Scale economies: Prime ecosystem, fulfillment network, data advantages. First-mover advantage: AWS, e-commerce, voice assistants. Customer obsession: Net Promoter Score leadership. Innovation culture: Long-term thinking, experimental approach. Financial resources: $73B cash, reinvestment capability. Brand trust: Most trusted brand surveys.'
  } },

  // --- VIII. SWOT & STRATEGIC OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT & Outlook', type: 'main_category' } },
  
  // SWOT Analysis - Detailed Strengths
  { group: 'nodes', data: { 
    id: 'strengths', 
    label: 'Strengths', 
    type: 'swot_strength', 
    text: 'AWS cash cow funding innovation. Prime membership loyalty. Logistics infrastructure moat. Data and AI capabilities. Customer obsession culture. Scale economies. Brand trust. Financial strength for long-term investments.'
  } },

  // Detailed Strength Analysis
  { group: 'nodes', data: { 
    id: 'aws_cash_generation', 
    label: 'AWS: High-Margin Cash Generator', 
    type: 'subcategory', 
    text: 'AWS generates 63% of operating profit on 19% of revenue. 39.5% operating margin vs 6.3% retail. $11.5B quarterly operating income funds R&D, international expansion, price competition. Recurring revenue model with enterprise contracts. Technology leadership in cloud infrastructure, AI/ML services.'
  } },

  { group: 'nodes', data: { 
    id: 'prime_ecosystem_loyalty', 
    label: 'Prime Ecosystem & Customer Loyalty', 
    type: 'subcategory', 
    text: '200M+ global Prime members with 90%+ retention. Average spend $1,400+ vs $600 non-Prime. Bundled services: shipping, video, music, gaming, reading. Network effects: more members = better deals = more sellers. Prime Video original content creates stickiness. Global expansion opportunity in developing markets.'
  } },

  { group: 'nodes', data: { 
    id: 'logistics_infrastructure', 
    label: 'Logistics & Fulfillment Moat', 
    type: 'subcategory', 
    text: '185+ fulfillment centers globally, 400+ delivery stations. Amazon Logistics (AMZL): 40% of packages self-delivered. Same-day delivery in 90+ metro areas. Last-mile innovation: drones, robots, electric vehicles. $88B annual capex building competitive moat. Supply chain optimization through data analytics.'
  } },

  { group: 'nodes', data: { 
    id: 'data_ai_capabilities', 
    label: 'Data & AI Competitive Advantage', 
    type: 'subcategory', 
    text: 'Massive customer data: 300M+ active accounts, shopping behavior, preferences. Recommendation engine drives 35% of sales. AWS AI/ML services: Bedrock, SageMaker, CodeWhisperer. Alexa voice data: 200M+ users, natural language processing. Predictive analytics: demand forecasting, inventory optimization, personalization.'
  } },
  
  // SWOT Weaknesses - Detailed
  { group: 'nodes', data: { 
    id: 'weaknesses', 
    label: 'Weaknesses', 
    type: 'swot_weakness', 
    text: 'Low retail margins. Massive capex requirements. Regulatory target due to size. Dependence on AWS profitability. International losses. Labor relations challenges. Chinese market exclusion. Complex business model evaluation.'
  } },

  // Detailed Weakness Analysis
  { group: 'nodes', data: { 
    id: 'retail_margin_pressure', 
    label: 'Low Retail Margins & Price Competition', 
    type: 'subcategory', 
    text: 'E-commerce margins 3-6% vs traditional retail 20%+. Price competition with Walmart, Temu, Chinese platforms. Customer expectation of low prices limits pricing power. High logistics costs: shipping, warehousing, last-mile delivery. Promotional spending to acquire/retain customers.'
  } },

  { group: 'nodes', data: { 
    id: 'capital_intensity', 
    label: 'Massive Capital Requirements', 
    type: 'subcategory', 
    text: '$88B annual capex (highest in corporate history). AWS infrastructure: data centers, servers, networking. Fulfillment network expansion: warehouses, delivery vehicles. Content investment: $8.5B for Prime Video originals. R&D spending: $85B annually. Free cash flow pressure from high capex.'
  } },

  { group: 'nodes', data: { 
    id: 'regulatory_scrutiny', 
    label: 'Regulatory & Antitrust Risks', 
    type: 'subcategory', 
    text: 'FTC antitrust lawsuit targeting e-commerce dominance. EU Digital Markets Act (DMA): platform regulations, data sharing. Congressional hearings on market power, seller policies. Labor regulations: union efforts, worker safety. Tax policy changes: international tax rates, digital services taxes.'
  } },

  { group: 'nodes', data: { 
    id: 'aws_dependency', 
    label: 'Profitability Dependence on AWS', 
    type: 'subcategory', 
    text: 'AWS provides 63% of operating profit despite 19% of revenue. Retail business low/break-even margins without AWS subsidy. AWS growth slowdown would impact investment capacity. Competition from Microsoft Azure, Google Cloud intensifying. Cloud market maturation could pressure AWS growth rates.'
  } },
  
  // SWOT Opportunities - Detailed
  { group: 'nodes', data: { 
    id: 'opportunities', 
    label: 'Opportunities', 
    type: 'swot_opportunity', 
    text: 'AI transformation across all segments. International e-commerce expansion. Healthcare (One Medical). Satellite internet (Project Kuiper). Autonomous delivery (Zoox). Advertising growth. Enterprise SaaS expansion. Climate technology investments.'
  } },

  // Detailed Opportunity Analysis
  { group: 'nodes', data: { 
    id: 'ai_monetization', 
    label: 'AI Transformation & Monetization', 
    type: 'subcategory', 
    text: 'AI revenue growing triple-digit YoY, $10B+ run rate. Alexa+ conversational commerce. AWS AI services: Bedrock, SageMaker expansion. CodeWhisperer enterprise adoption. Advertising optimization through AI. Supply chain automation. Generative AI for content creation, customer service.'
  } },

  { group: 'nodes', data: { 
    id: 'international_expansion', 
    label: 'International Market Expansion', 
    type: 'subcategory', 
    text: 'E-commerce penetration <10% in most developing markets. India: 1.4B population, growing middle class, $6.5B invested. Southeast Asia: 650M population, young demographics. Latin America: Spanish/Portuguese localization. Prime Video international content. Cross-border trade facilitation.'
  } },

  { group: 'nodes', data: { 
    id: 'healthcare_opportunity', 
    label: 'Healthcare Market Entry', 
    type: 'subcategory', 
    text: 'One Medical acquisition: primary care, telehealth expansion. Amazon Pharmacy: prescription delivery, insurance partnerships. Healthcare AI: drug discovery, medical imaging. AWS for Healthcare: HIPAA compliance, 10K+ customers. $4T US healthcare market digitization opportunity.'
  } },

  { group: 'nodes', data: { 
    id: 'advertising_growth', 
    label: 'Advertising Business Expansion', 
    type: 'subcategory', 
    text: 'Retail media fastest growing ad segment, 25%+ annual growth. Prime Video ad tier: 275M+ users, premium inventory. Sports content: Thursday Night Football, live events. Global expansion: Europe, Asia advertising markets. First-party data advantage in privacy-focused world.'
  } },
  
  // SWOT Threats - Detailed
  { group: 'nodes', data: { 
    id: 'threats', 
    label: 'Threats', 
    type: 'swot_threat', 
    text: 'Antitrust breakup risk. Tariff wars impacting costs. Chinese competition intensifying. Cloud competition from Microsoft. Economic recession affecting consumer spending. Talent retention challenges. Cybersecurity risks. Environmental regulations.'
  } },

  // Detailed Threat Analysis
  { group: 'nodes', data: { 
    id: 'antitrust_breakup', 
    label: 'Antitrust & Regulatory Breakup Risk', 
    type: 'subcategory', 
    text: 'FTC lawsuit could force business unit separation. Congress considering platform regulation bills. EU DMA requiring interoperability, data sharing. Potential AWS/retail separation discussions. State-level regulations: California privacy, Texas content moderation. International regulatory divergence.'
  } },

  { group: 'nodes', data: { 
    id: 'competitive_threats', 
    label: 'Intensifying Competition', 
    type: 'subcategory', 
    text: 'Microsoft Azure growing faster than AWS (29% vs 17%). Walmart e-commerce acceleration (+27%). Chinese platforms: Temu 100M+ US users, Shein fast fashion. TikTok Shop social commerce. Apple services expansion. Google cloud AI capabilities.'
  } },

  { group: 'nodes', data: { 
    id: 'economic_risks', 
    label: 'Economic & Market Risks', 
    type: 'subcategory', 
    text: 'Consumer spending vulnerable to recession. High-income Prime members economically sensitive. AWS enterprise spending cuts during downturns. Supply chain disruptions: China tensions, shipping costs. Interest rate impact on high-capex business model. Currency fluctuations affecting international revenue.'
  } },

  { group: 'nodes', data: { 
    id: 'operational_risks', 
    label: 'Operational & Execution Risks', 
    type: 'subcategory', 
    text: 'Cybersecurity threats: data breaches, AWS outages. Labor relations: union organizing, worker safety regulations. Climate change: extreme weather affecting operations. Talent retention: Big Tech competition for engineers. Technology disruption: quantum computing, new AI paradigms.'
  } },

  // Strategic Outlook
  { group: 'nodes', data: { 
    id: 'strategic_outlook', 
    label: 'Strategic Outlook & Future Vision', 
    type: 'category', 
    text: '2030 Vision: AI-first company across all segments. Sustainable operations: net-zero carbon by 2040. Global expansion: 20 countries with local operations. Space economy: Project Kuiper, Blue Origin synergies. Healthcare transformation: digital-first care. Autonomous logistics: drone delivery, robotics.'
  } },

  // --- EDGES ---

  // Level 1 Edges (Main Categories)
  { group: 'edges', data: { id: 'edge-amzn-company', source: 'amzn', target: 'company_info', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-financial', source: 'amzn', target: 'financial_performance', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-recent', source: 'amzn', target: 'recent_developments', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-market', source: 'amzn', target: 'market_landscape', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-analyst', source: 'amzn', target: 'analyst_sentiment', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-industry', source: 'amzn', target: 'industry_analysis', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-competitive', source: 'amzn', target: 'competitive_analysis', label: '' } },
  { group: 'edges', data: { id: 'edge-amzn-swot', source: 'amzn', target: 'swot_outlook', label: '' } },

  // Company Info Edges
  { group: 'edges', data: { id: 'edge-company-profile', source: 'company_info', target: 'corporate_profile', label: '' } },
  { group: 'edges', data: { id: 'edge-profile-history', source: 'corporate_profile', target: 'corporate_history', label: '' } },
  { group: 'edges', data: { id: 'edge-profile-principles', source: 'corporate_profile', target: 'leadership_principles', label: '' } },
  { group: 'edges', data: { id: 'edge-profile-global', source: 'corporate_profile', target: 'global_presence', label: '' } },
  
  { group: 'edges', data: { id: 'edge-company-segments', source: 'company_info', target: 'business_segments', label: '' } },
  { group: 'edges', data: { id: 'edge-segments-na', source: 'business_segments', target: 'north_america_segment', label: '' } },
  { group: 'edges', data: { id: 'edge-na-prime', source: 'north_america_segment', target: 'prime_ecosystem', label: '' } },
  { group: 'edges', data: { id: 'edge-na-marketplace', source: 'north_america_segment', target: 'marketplace_sellers', label: '' } },
  { group: 'edges', data: { id: 'edge-na-physical', source: 'north_america_segment', target: 'physical_retail', label: '' } },
  
  { group: 'edges', data: { id: 'edge-segments-intl', source: 'business_segments', target: 'international_segment', label: '' } },
  { group: 'edges', data: { id: 'edge-intl-europe', source: 'international_segment', target: 'europe_operations', label: '' } },
  { group: 'edges', data: { id: 'edge-intl-asia', source: 'international_segment', target: 'asia_pacific', label: '' } },
  
  { group: 'edges', data: { id: 'edge-segments-aws', source: 'business_segments', target: 'aws_segment', label: '' } },
  { group: 'edges', data: { id: 'edge-aws-compute', source: 'aws_segment', target: 'aws_compute', label: '' } },
  { group: 'edges', data: { id: 'edge-aws-ai', source: 'aws_segment', target: 'aws_ai_ml', label: '' } },
  { group: 'edges', data: { id: 'edge-aws-enterprise', source: 'aws_segment', target: 'aws_enterprise', label: '' } },
  
  { group: 'edges', data: { id: 'edge-segments-ads', source: 'business_segments', target: 'advertising_segment', label: '' } },
  { group: 'edges', data: { id: 'edge-ads-retail', source: 'advertising_segment', target: 'retail_media', label: '' } },
  { group: 'edges', data: { id: 'edge-ads-video', source: 'advertising_segment', target: 'video_advertising', label: '' } },

  { group: 'edges', data: { id: 'edge-company-leadership', source: 'company_info', target: 'leadership_governance', label: '' } },
  { group: 'edges', data: { id: 'edge-leadership-exec', source: 'leadership_governance', target: 'executive_team', label: '' } },
  { group: 'edges', data: { id: 'edge-leadership-board', source: 'leadership_governance', target: 'board_governance', label: '' } },

  // Financial Performance Edges - Enhanced
  { group: 'edges', data: { id: 'edge-financial-q1', source: 'financial_performance', target: 'q1_2025_results', label: '' } },
  { group: 'edges', data: { id: 'edge-q1-trends', source: 'q1_2025_results', target: 'revenue_trends', label: '' } },
  { group: 'edges', data: { id: 'edge-q1-profitability', source: 'q1_2025_results', target: 'profitability_metrics', label: '' } },
  { group: 'edges', data: { id: 'edge-q1-cashflow', source: 'q1_2025_results', target: 'cash_flow', label: '' } },
  
  { group: 'edges', data: { id: 'edge-financial-metrics', source: 'financial_performance', target: 'financial_metrics', label: '' } },
  { group: 'edges', data: { id: 'edge-metrics-valuation', source: 'financial_metrics', target: 'valuation_analysis', label: '' } },
  { group: 'edges', data: { id: 'edge-metrics-balance', source: 'financial_metrics', target: 'balance_sheet', label: '' } },
  { group: 'edges', data: { id: 'edge-metrics-returns', source: 'financial_metrics', target: 'investor_returns', label: '' } },

  // Recent Developments Edges - Enhanced
  { group: 'edges', data: { id: 'edge-recent-ai', source: 'recent_developments', target: 'ai_technology', label: '' } },
  { group: 'edges', data: { id: 'edge-ai-alexa', source: 'ai_technology', target: 'alexa_ai_evolution', label: '' } },
  { group: 'edges', data: { id: 'edge-ai-aws-innovations', source: 'ai_technology', target: 'aws_ai_innovations', label: '' } },
  
  { group: 'edges', data: { id: 'edge-recent-acquisitions', source: 'recent_developments', target: 'acquisitions_partnerships', label: '' } },
  { group: 'edges', data: { id: 'edge-recent-products', source: 'recent_developments', target: 'product_launches', label: '' } },

  // Market Analysis Edges
  { group: 'edges', data: { id: 'edge-market-sizing', source: 'market_landscape', target: 'market_sizing', label: '' } },
  { group: 'edges', data: { id: 'edge-market-geography', source: 'market_landscape', target: 'geographic_analysis', label: '' } },

  // Analyst Sentiment Edges
  { group: 'edges', data: { id: 'edge-analyst-ratings', source: 'analyst_sentiment', target: 'analyst_ratings', label: '' } },
  { group: 'edges', data: { id: 'edge-analyst-research', source: 'analyst_sentiment', target: 'research_highlights', label: '' } },

  // Industry Analysis Edges
  { group: 'edges', data: { id: 'edge-industry-ecommerce', source: 'industry_analysis', target: 'ecommerce_trends', label: '' } },
  { group: 'edges', data: { id: 'edge-industry-cloud', source: 'industry_analysis', target: 'cloud_industry_trends', label: '' } },
  { group: 'edges', data: { id: 'edge-industry-ads', source: 'industry_analysis', target: 'advertising_trends', label: '' } },

  // Competitive Analysis Edges - Enhanced
  { group: 'edges', data: { id: 'edge-competitive-microsoft', source: 'competitive_analysis', target: 'microsoft_azure', label: '' } },
  { group: 'edges', data: { id: 'edge-microsoft-analysis', source: 'microsoft_azure', target: 'microsoft_analysis', label: '' } },
  
  { group: 'edges', data: { id: 'edge-competitive-google', source: 'competitive_analysis', target: 'google_cloud', label: '' } },
  { group: 'edges', data: { id: 'edge-google-analysis', source: 'google_cloud', target: 'google_analysis', label: '' } },
  
  { group: 'edges', data: { id: 'edge-competitive-walmart', source: 'competitive_analysis', target: 'walmart_ecommerce', label: '' } },
  { group: 'edges', data: { id: 'edge-walmart-analysis', source: 'walmart_ecommerce', target: 'walmart_analysis', label: '' } },
  
  { group: 'edges', data: { id: 'edge-competitive-chinese', source: 'competitive_analysis', target: 'chinese_ecommerce', label: '' } },
  { group: 'edges', data: { id: 'edge-chinese-analysis', source: 'chinese_ecommerce', target: 'chinese_competition', label: '' } },
  
  { group: 'edges', data: { id: 'edge-competitive-others', source: 'competitive_analysis', target: 'other_competitors', label: '' } },
  { group: 'edges', data: { id: 'edge-competitive-positioning', source: 'competitive_analysis', target: 'competitive_positioning', label: '' } },

  // SWOT Edges - Enhanced
  { group: 'edges', data: { id: 'edge-swot-strengths', source: 'swot_outlook', target: 'strengths', label: '' } },
  { group: 'edges', data: { id: 'edge-strengths-aws', source: 'strengths', target: 'aws_cash_generation', label: '' } },
  { group: 'edges', data: { id: 'edge-strengths-prime', source: 'strengths', target: 'prime_ecosystem_loyalty', label: '' } },
  { group: 'edges', data: { id: 'edge-strengths-logistics', source: 'strengths', target: 'logistics_infrastructure', label: '' } },
  { group: 'edges', data: { id: 'edge-strengths-data', source: 'strengths', target: 'data_ai_capabilities', label: '' } },
  
  { group: 'edges', data: { id: 'edge-swot-weaknesses', source: 'swot_outlook', target: 'weaknesses', label: '' } },
  { group: 'edges', data: { id: 'edge-weaknesses-margins', source: 'weaknesses', target: 'retail_margin_pressure', label: '' } },
  { group: 'edges', data: { id: 'edge-weaknesses-capex', source: 'weaknesses', target: 'capital_intensity', label: '' } },
  { group: 'edges', data: { id: 'edge-weaknesses-regulatory', source: 'weaknesses', target: 'regulatory_scrutiny', label: '' } },
  { group: 'edges', data: { id: 'edge-weaknesses-dependency', source: 'weaknesses', target: 'aws_dependency', label: '' } },
  
  { group: 'edges', data: { id: 'edge-swot-opportunities', source: 'swot_outlook', target: 'opportunities', label: '' } },
  { group: 'edges', data: { id: 'edge-opportunities-ai', source: 'opportunities', target: 'ai_monetization', label: '' } },
  { group: 'edges', data: { id: 'edge-opportunities-international', source: 'opportunities', target: 'international_expansion', label: '' } },
  { group: 'edges', data: { id: 'edge-opportunities-healthcare', source: 'opportunities', target: 'healthcare_opportunity', label: '' } },
  { group: 'edges', data: { id: 'edge-opportunities-advertising', source: 'opportunities', target: 'advertising_growth', label: '' } },
  
  { group: 'edges', data: { id: 'edge-swot-threats', source: 'swot_outlook', target: 'threats', label: '' } },
  { group: 'edges', data: { id: 'edge-threats-antitrust', source: 'threats', target: 'antitrust_breakup', label: '' } },
  { group: 'edges', data: { id: 'edge-threats-competitive', source: 'threats', target: 'competitive_threats', label: '' } },
  { group: 'edges', data: { id: 'edge-threats-economic', source: 'threats', target: 'economic_risks', label: '' } },
  { group: 'edges', data: { id: 'edge-threats-operational', source: 'threats', target: 'operational_risks', label: '' } },

  { group: 'edges', data: { id: 'edge-swot-outlook', source: 'swot_outlook', target: 'strategic_outlook', label: '' } },

  // Cross-segment relationships
  { group: 'edges', data: { id: 'edge-aws-funding', source: 'aws_segment', target: 'financial_performance', label: 'Drives profitability' } },
  { group: 'edges', data: { id: 'edge-ai-aws', source: 'ai_technology', target: 'aws_segment', label: 'Drives growth' } },
  { group: 'edges', data: { id: 'edge-prime-na', source: 'prime_ecosystem', target: 'north_america_segment', label: 'Revenue driver' } },
  { group: 'edges', data: { id: 'edge-advertising-data', source: 'advertising_segment', target: 'data_ai_capabilities', label: 'Leverages data' } },
]; 