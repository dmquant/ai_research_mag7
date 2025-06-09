import type { GraphElement } from '../components/KnowledgeGraph.astro';

// Microsoft company metadata for UI integration
export const microsoftMetadata = {
  companyName: 'Microsoft Corporation',
  ticker: 'MSFT',
  exchange: 'NASDAQ',
  marketCap: '$3.2T',
  latestQuarter: 'Q3 FY2025',
  keyMetrics: {
    revenue: { value: '$70.1B', change: '+13% YoY', isPositive: true },
    eps: { value: '$3.46', change: '+18% YoY', isPositive: true },
    operatingMargin: { value: '45%', change: 'Industry Leading', isPositive: true },
    cloudRevenue: { value: '$42.4B', change: '+20% YoY', isPositive: true }
  },
  segments: [
    { id: 'intelligent_cloud', name: 'Intelligent Cloud', percentage: 43, revenue: '$30.2B' },
    { id: 'productivity_business', name: 'Productivity & Business', percentage: 32, revenue: '$22.4B' },
    { id: 'personal_computing', name: 'More Personal Computing', percentage: 25, revenue: '$17.5B' }
  ],
  sections: [
    { id: 'company_info', name: 'Business Model', icon: '🏢', priority: 1 },
    { id: 'financial_performance', name: 'Financials', icon: '💰', priority: 2 },
    { id: 'recent_developments', name: 'Latest News', icon: '📰', priority: 3 },
    { id: 'ai_strategy', name: 'AI Strategy', icon: '🤖', priority: 4 },
    { id: 'market_landscape', name: 'Market Analysis', icon: '🌍', priority: 5 },
    { id: 'analyst_sentiment', name: 'Analyst Views', icon: '📈', priority: 6 },
    { id: 'competitive_analysis', name: 'Competition', icon: '⚔️', priority: 7 },
    { id: 'swot_outlook', name: 'SWOT & Outlook', icon: '🎯', priority: 8 }
  ]
};

// Helper functions to extract insights from graph data
export const getNodesByType = (type: string): GraphElement[] => {
  return microsoftGraphElements.filter(element => 
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
  return [
    ...getNodesByType('swot_strength'),
    ...getNodesByType('swot_weakness'),
    ...getNodesByType('swot_opportunity'),
    ...getNodesByType('swot_threat')
  ];
};

// Graph element count for statistics
export const getGraphStats = () => {
  const nodes = microsoftGraphElements.filter(el => el.group === 'nodes');
  const edges = microsoftGraphElements.filter(el => el.group === 'edges');
  
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    mainSections: getMainSections().length,
    businessSegments: getBusinessSegments().length,
    competitors: getCompetitors().length,
    swotElements: getSWOTElements().length
  };
};

export const microsoftGraphElements: GraphElement[] = [
  // --- CENTRAL NODE ---
  { group: 'nodes', data: { id: 'msft', label: 'Microsoft Corporation (MSFT)', type: 'company' } },

  // --- I. BASIC COMPANY INFORMATION & BUSINESS MODEL ---
  { group: 'nodes', data: { id: 'company_info', label: 'I. Company Information & Business Model', type: 'main_category' } },
  
  // A. Corporate Profile
  { group: 'nodes', data: { 
    id: 'corporate_profile', 
    label: 'Corporate Profile', 
    type: 'category', 
    text: 'Founded April 4, 1975 by Bill Gates and Paul Allen. Headquarters: Redmond, Washington. CEO: Satya Nadella (since 2014). ~238,000 employees globally. Market cap: ~$3.2 trillion (2025). Mission: "Empower every person and every organization on the planet to achieve more." Listed on NASDAQ under MSFT ticker.'
  } },
  
  // B. Core Business Segments
  { group: 'nodes', data: { id: 'business_segments', label: 'Core Business Segments', type: 'category' } },
  
  // Revenue breakdown with latest Q3 FY2025 data
  { group: 'nodes', data: { 
    id: 'intelligent_cloud', 
    label: 'Intelligent Cloud (43% of Revenue)', 
    type: 'segment', 
    text: 'Q3 FY2025: $30.2B revenue (43% of total, +20% YoY). Azure and other cloud services grew 33%. #2 cloud provider globally with ~25% market share. Includes Azure, Windows Server, SQL Server, GitHub, Enterprise Services. Operating margin ~45%. Key growth driver for Microsoft.'
  } },
  
  { group: 'nodes', data: { 
    id: 'productivity_business', 
    label: 'Productivity & Business Processes (32% of Revenue)', 
    type: 'segment', 
    text: 'Q3 FY2025: $22.4B revenue (32% of total, +12% YoY). Microsoft 365 Commercial grew 15%, Consumer grew 5%. LinkedIn revenue +10%. Dynamics 365 +19%. Includes Office 365, Teams, Exchange, SharePoint, OneDrive. High-margin recurring revenue model with strong customer retention.'
  } },
  
  { group: 'nodes', data: { 
    id: 'personal_computing', 
    label: 'More Personal Computing (25% of Revenue)', 
    type: 'segment', 
    text: 'Q3 FY2025: $17.5B revenue (25% of total, +17% YoY). Windows Commercial +11%, OEM +11%. Xbox content and services +61% (Activision impact). Search and news advertising +18%. Includes Windows, Devices, Xbox, Search (Bing). Gaming strengthened by Activision Blizzard acquisition.'
  } },

  // C. Geographic Distribution - Updated with latest data
  { group: 'nodes', data: { 
    id: 'geographic_mix', 
    label: 'Geographic Revenue Distribution', 
    type: 'category', 
    text: 'Global presence with strong performance across regions. US remains largest market (~50% revenue). Strong growth in international markets driven by cloud adoption. Azure available in 60+ regions worldwide. Significant presence in Europe, Asia-Pacific. Less China exposure than other tech giants.'
  } },

  // D. Target Customer Base & Business Model
  { group: 'nodes', data: { 
    id: 'business_model', 
    label: 'Business Model & Target Customers', 
    type: 'category', 
    text: 'Enterprise-focused with strong consumer presence. Subscription-based recurring revenue model (SaaS). Cloud-first, mobile-first strategy. Target: Fortune 500 enterprises, SMBs, developers, consumers. Platform approach with ecosystem integration. High switching costs and customer lifetime value.'
  } },

  // --- II. FINANCIAL PERFORMANCE ---
  { group: 'nodes', data: { id: 'financial_performance', label: 'II. Financial Performance', type: 'main_category' } },
  
  // A. Recent Financial Results (Q3 FY2025) - Updated with latest data
  { group: 'nodes', data: { 
    id: 'q3_fy2025_results', 
    label: 'Q3 FY2025 Financial Results', 
    type: 'category', 
    text: 'Revenue: $70.1B (+13% YoY), beating estimates. EPS: $3.46 (+18% YoY). Net income: $25.8B (+18% YoY). Operating margin: 45% (industry-leading). Microsoft Cloud revenue: $42.4B (+20% YoY). Strong performance across all segments with AI driving growth acceleration.'
  } },
  
  // B. Key Financial Metrics - Enhanced with comprehensive data
  { group: 'nodes', data: { 
    id: 'financial_metrics', 
    label: 'Key Financial Metrics & Ratios', 
    type: 'category', 
    text: 'Market Cap: ~$3.2T. P/E Ratio: ~35x (premium valuation). Net Income Margin: ~37% (industry-leading). Operating Margin: 45%. Free Cash Flow: $65B+ annually. Cash & Securities: $75B+. Current Ratio: ~2.5. Strong balance sheet with minimal debt concerns.'
  } },
  
  // C. Historical Performance & Trends
  { group: 'nodes', data: { 
    id: 'historical_performance', 
    label: 'Historical Financial Trends', 
    type: 'category', 
    text: 'Revenue growth from $125.8B (FY2019) to $245.1B (FY2024) - 95% increase in 5 years. Consistent double-digit growth driven by cloud transformation. Operating margins expanded from ~35% to 45%. Successful transition from license-based to subscription model. AI acceleration driving recent outperformance.'
  } },
  
  // D. Capital Return Program - Updated with latest authorization
  { group: 'nodes', data: { 
    id: 'capital_return', 
    label: 'Capital Return Program', 
    type: 'category', 
    text: 'Quarterly dividend: $0.83/share (+10% increase in Q3 FY2025). Annual dividend yield: ~0.7%. Share buyback program: $60B authorization. Balanced approach between dividends and buybacks. Strong cash generation supports consistent capital returns. Focus on sustainable dividend growth.'
  } },

  // E. Profitability Analysis
  { group: 'nodes', data: { 
    id: 'profitability_analysis', 
    label: 'Profitability & Margin Analysis', 
    type: 'category', 
    text: 'Industry-leading profitability with 45% operating margin. Cloud services drive margin expansion. Intelligent Cloud: ~45% operating margin. Productivity: ~50% operating margin. Personal Computing: ~20% operating margin. R&D investment: $31.9B (13% of revenue) driving innovation leadership.'
  } },

  // --- III. RECENT NEWS & DEVELOPMENTS ---
  { group: 'nodes', data: { id: 'recent_developments', label: 'III. Recent News & Developments', type: 'main_category' } },
  
  // A. AI Strategy & Copilot - Major 2025 updates
  { group: 'nodes', data: { 
    id: 'copilot_strategy', 
    label: 'Microsoft Copilot AI Platform', 
    type: 'category', 
    text: 'AI business run rate: $13B (+175% YoY). Copilot integrated across entire product portfolio. Microsoft 365 Copilot, GitHub Copilot, Windows Copilot, Dynamics 365 Copilot. OpenAI partnership driving competitive advantage. Azure AI services powering third-party AI applications.'
  } },
  
  // Latest AI updates - Q3 FY2025
  { group: 'nodes', data: { 
    id: 'ai_latest_updates', 
    label: 'Latest AI Updates (Q3 FY2025)', 
    type: 'subcategory', 
    text: 'Q3 FY2025: AI business reached $13B annual run rate. Copilot for Microsoft 365 expanding rapidly. Azure OpenAI Service driving cloud growth. New Copilot Pro consumer offering. AI-powered Bing gaining market share. GPT-4 Turbo integration across services.'
  } },
  
  // B. Activision Blizzard Integration - Gaming transformation
  { group: 'nodes', data: { 
    id: 'activision_integration', 
    label: 'Activision Blizzard Integration', 
    type: 'category', 
    text: '$69B acquisition completed October 2023. Xbox content and services revenue +61% in Q3 FY2025. Call of Duty, World of Warcraft, Candy Crush franchises. Game Pass subscriber growth acceleration. Mobile gaming expansion. Regulatory approval after extended review process.'
  } },
  
  // C. Cloud Infrastructure Expansion - Critical strategic investment
  { group: 'nodes', data: { 
    id: 'cloud_expansion', 
    label: 'Cloud Infrastructure Investment', 
    type: 'category', 
    text: 'Azure available in 60+ regions globally. $50B+ annual infrastructure investment. AI-optimized data centers with NVIDIA H100 GPUs. Edge computing expansion. Sustainability commitments: carbon negative by 2030. Hybrid cloud capabilities with Azure Arc.'
  } },
  
  // D. Enterprise AI Adoption - Market leadership
  { group: 'nodes', data: { 
    id: 'enterprise_ai', 
    label: 'Enterprise AI Adoption Leadership', 
    type: 'category', 
    text: 'Microsoft 365 Copilot adoption accelerating among Fortune 500. Azure AI services used by 65% of Fortune 100. GitHub Copilot: 1.8M+ paid subscribers. Enterprise AI solutions driving Azure growth. Custom AI models and fine-tuning capabilities. Responsible AI framework and governance tools.'
  } },

  // E. Product Innovation Pipeline
  { group: 'nodes', data: { 
    id: 'product_innovation', 
    label: 'Product Innovation Pipeline', 
    type: 'category', 
    text: 'Windows 11 AI integration with Copilot. Surface devices with AI acceleration. Mixed reality with HoloLens evolution. Quantum computing research and Azure Quantum. Security innovations with Microsoft Defender. Teams platform expansion and AI integration.'
  } },

  // --- IV. AI STRATEGY & COMPETITIVE POSITIONING ---
  { group: 'nodes', data: { id: 'ai_strategy', label: 'IV. AI Strategy & Competitive Positioning', type: 'main_category' } },
  
  // A. OpenAI Partnership - Strategic advantage
  { group: 'nodes', data: { 
    id: 'openai_partnership', 
    label: 'OpenAI Strategic Partnership', 
    type: 'category', 
    text: '$13B+ investment in OpenAI. Exclusive cloud provider for OpenAI. GPT models integrated across Microsoft products. Azure OpenAI Service for enterprise customers. ChatGPT integration in Bing and Edge. Joint development of AGI technologies. Revenue sharing model with OpenAI.'
  } },
  
  // B. AI Platform Strategy - Comprehensive approach
  { group: 'nodes', data: { 
    id: 'ai_platform_strategy', 
    label: 'AI Platform & Infrastructure Strategy', 
    type: 'category', 
    text: 'Azure AI platform serving enterprise customers. Custom AI model training and deployment. AI-optimized infrastructure with specialized chips. Responsible AI principles and governance. Multi-modal AI capabilities (text, image, code). Edge AI deployment options.'
  } },
  
  // C. Copilot Ecosystem - Product integration
  { group: 'nodes', data: { 
    id: 'copilot_ecosystem', 
    label: 'Copilot Ecosystem Integration', 
    type: 'category', 
    text: 'Copilot integrated across 200+ Microsoft products. Microsoft 365 Copilot for productivity. GitHub Copilot for developers. Dynamics 365 Copilot for business processes. Windows Copilot for operating system. Security Copilot for cybersecurity. Consistent user experience across platforms.'
  } },
  
  // D. AI Competitive Advantages
  { group: 'nodes', data: { 
    id: 'ai_competitive_advantages', 
    label: 'AI Competitive Advantages', 
    type: 'category', 
    text: 'First-mover advantage with OpenAI partnership. Enterprise trust and existing relationships. Integrated AI across productivity suite. Azure infrastructure scale and reliability. Responsible AI leadership and governance. Developer ecosystem with GitHub integration.'
  } },

  // --- V. MARKET & TECHNOLOGY LANDSCAPE ---
  { group: 'nodes', data: { id: 'market_landscape', label: 'V. Market & Technology Landscape', type: 'main_category' } },
  
  // A. Cloud Computing Market - Detailed analysis
  { group: 'nodes', data: { 
    id: 'cloud_market', 
    label: 'Cloud Computing Market Position', 
    type: 'category', 
    text: '#2 cloud provider globally with ~25% market share. Azure growing 33% vs AWS 17%. Strong in hybrid cloud and enterprise. IaaS, PaaS, and SaaS offerings. $1T+ total addressable market. Multi-cloud strategies benefiting Microsoft. Edge computing and IoT expansion opportunities.'
  } },
  
  // B. Productivity Software Market - Market leadership
  { group: 'nodes', data: { 
    id: 'productivity_market', 
    label: 'Productivity Software Dominance', 
    type: 'category', 
    text: 'Microsoft 365: 400M+ commercial seats. Teams: 300M+ monthly active users. Dominant in enterprise productivity with 85%+ market share. Google Workspace main competitor. Slack acquisition by Salesforce. AI integration driving differentiation and pricing power.'
  } },
  
  // C. Gaming Market Position
  { group: 'nodes', data: { 
    id: 'gaming_market', 
    label: 'Gaming Market Expansion', 
    type: 'category', 
    text: 'Xbox Game Pass: 34M+ subscribers. Activision Blizzard acquisition transformative. Mobile gaming expansion with King (Candy Crush). Cloud gaming with Xbox Cloud Gaming. PC gaming leadership with Windows. $200B+ global gaming market opportunity.'
  } },
  
  // D. AI and Developer Tools Market
  { group: 'nodes', data: { 
    id: 'developer_market', 
    label: 'Developer Tools & AI Market', 
    type: 'category', 
    text: 'GitHub: 100M+ developers globally. Visual Studio and VS Code leadership. Azure DevOps and GitHub Actions. AI-powered development with Copilot. Open source community engagement. Developer-first approach driving platform adoption.'
  } },

  // E. Enterprise Software Trends
  { group: 'nodes', data: { 
    id: 'enterprise_trends', 
    label: 'Enterprise Software Market Trends', 
    type: 'category', 
    text: 'Digital transformation acceleration post-COVID. Hybrid work driving collaboration tools demand. AI integration becoming table stakes. Security and compliance critical requirements. Subscription model preference. Integration and platform consolidation trends.'
  } },

  // --- VI. ANALYST SENTIMENT & RATINGS ---
  { group: 'nodes', data: { id: 'analyst_sentiment', label: 'VI. Analyst Sentiment & Wall Street Views', type: 'main_category' } },
  
  // A. Current Ratings - Updated with latest targets
  { group: 'nodes', data: { 
    id: 'analyst_ratings', 
    label: 'Analyst Ratings & Price Targets', 
    type: 'category', 
    text: 'Consensus: Strong Buy rating from majority of analysts. Average 12-month price target: $480-500 (~15-20% upside). Range: $420 (conservative) to $550 (bullish). Morgan Stanley, Goldman Sachs, and Wedbush particularly bullish on AI opportunity. Consistent outperform ratings.'
  } },
  
  // B. Key Investment Themes - Comprehensive analysis
  { group: 'nodes', data: { 
    id: 'investment_themes', 
    label: 'Key Investment Themes & Catalysts', 
    type: 'category', 
    text: 'AI Leadership: OpenAI partnership and Copilot ecosystem driving growth. Cloud Growth: Azure gaining market share vs AWS. Recurring Revenue: 95%+ revenue from subscriptions. Gaming Expansion: Activision integration and Game Pass growth. Enterprise Moat: Productivity suite dominance.'
  } },

  // C. Earnings Call Focus Areas
  { group: 'nodes', data: { 
    id: 'earnings_focus', 
    label: 'Analyst Focus Areas & Concerns', 
    type: 'category', 
    text: 'Azure growth trajectory and market share gains. AI monetization and Copilot adoption rates. Gaming integration and Game Pass subscriber growth. Operating margin expansion sustainability. Capital allocation and investment priorities. Competition from Google and Amazon.'
  } },

  // D. Valuation & Multiple Analysis
  { group: 'nodes', data: { 
    id: 'valuation_analysis', 
    label: 'Valuation Analysis & Comparisons', 
    type: 'category', 
    text: 'P/E ~35x (premium to market but justified by growth). EV/EBITDA in high-20s. P/FCF reasonable given cash generation. AI opportunity justifying premium valuation. Compared to FAANG peers, reasonable multiple given fundamentals. Long-term growth prospects support current levels.'
  } },

  // --- VII. COMPETITIVE ANALYSIS ---
  { group: 'nodes', data: { id: 'competitive_analysis', label: 'VII. Competitive Analysis', type: 'main_category' } },
  
  // A. Primary Cloud Competitors
  { group: 'nodes', data: { 
    id: 'aws_competition', 
    label: 'Amazon Web Services: Cloud Leader', 
    type: 'competitor', 
    text: 'Market leader with ~32% cloud market share. Strengths: First-mover advantage, breadth of services, enterprise relationships. Weaknesses: Slower growth (17% vs Azure 33%), limited productivity integration. Microsoft advantages: Hybrid cloud, Office integration, AI partnership.'
  } },
  
  { group: 'nodes', data: { 
    id: 'google_competition', 
    label: 'Google: Cloud & Productivity Rival', 
    type: 'competitor', 
    text: 'Google Cloud Platform #3 with ~10% market share. Google Workspace competes with Microsoft 365. Strengths: AI research, data analytics, consumer reach. Weaknesses: Enterprise relationships, late to cloud. Competition in AI, productivity, and cloud infrastructure.'
  } },

  // B. Productivity & Collaboration Competitors
  { group: 'nodes', data: { 
    id: 'salesforce_competition', 
    label: 'Salesforce: CRM & Platform Competitor', 
    type: 'competitor', 
    text: 'CRM market leader with Slack acquisition. Strengths: CRM dominance, platform ecosystem, customer success focus. Weaknesses: Limited productivity suite, higher costs. Microsoft advantages: Integrated platform, Teams vs Slack, broader enterprise footprint.'
  } },
  
  { group: 'nodes', data: { 
    id: 'meta_competition', 
    label: 'Meta: Workplace & VR Competitor', 
    type: 'competitor', 
    text: 'Workplace by Meta competes in enterprise collaboration. Quest VR platform vs HoloLens/mixed reality. Strengths: Social platform expertise, VR market leadership. Weaknesses: Enterprise trust, limited productivity tools. Different market focus but overlapping in collaboration.'
  } },

  // C. Gaming & Entertainment Competitors
  { group: 'nodes', data: { 
    id: 'sony_competition', 
    label: 'Sony: Gaming Platform Rival', 
    type: 'competitor', 
    text: 'PlayStation market leader in console gaming. Strengths: Exclusive content, brand loyalty, hardware innovation. Weaknesses: Limited cloud gaming, subscription services. Microsoft advantages: Game Pass model, cloud gaming, PC integration, Activision content.'
  } },
  
  { group: 'nodes', data: { 
    id: 'apple_competition', 
    label: 'Apple: Platform & Productivity Competitor', 
    type: 'competitor', 
    text: 'macOS vs Windows, iWork vs Office, iCloud vs OneDrive. Strengths: Consumer brand, ecosystem integration, premium positioning. Weaknesses: Enterprise market share, gaming presence. Different target markets but increasing overlap in productivity and cloud.'
  } },

  // --- VIII. SWOT ANALYSIS & OUTLOOK ---
  { group: 'nodes', data: { id: 'swot_outlook', label: 'VIII. SWOT Analysis & Future Outlook', type: 'main_category' } },
  
  // A. Strengths - Comprehensive analysis
  { group: 'nodes', data: { 
    id: 'strengths', 
    label: 'Key Strengths & Competitive Advantages', 
    type: 'swot_strength', 
    text: 'AI Leadership: OpenAI partnership and Copilot ecosystem. Enterprise Dominance: 85%+ productivity market share. Cloud Growth: #2 provider with 33% growth. Financial Strength: 45% operating margins, $65B+ FCF. Platform Integration: Seamless product ecosystem. Developer Ecosystem: GitHub and Visual Studio leadership.'
  } },
  
  // B. Weaknesses - Critical vulnerabilities
  { group: 'nodes', data: { 
    id: 'weaknesses', 
    label: 'Key Weaknesses & Vulnerabilities', 
    type: 'swot_weakness', 
    text: 'Cloud Market Share: Still #2 behind AWS. Consumer Market: Limited presence vs Apple/Google. Mobile Platform: No significant mobile OS presence. Gaming Hardware: Xbox trailing PlayStation. Search Market: Bing small share vs Google. Regulatory Scrutiny: Antitrust concerns with acquisitions.'
  } },
  
  // C. Opportunities - Growth vectors
  { group: 'nodes', data: { 
    id: 'opportunities', 
    label: 'Growth Opportunities & Catalysts', 
    type: 'swot_opportunity', 
    text: 'AI Monetization: $13B run rate with massive expansion potential. Cloud Migration: Enterprise digital transformation continuing. Gaming Growth: Activision integration and mobile expansion. Emerging Markets: Cloud and productivity adoption. New Categories: Mixed reality, quantum computing, IoT. Subscription Expansion: AI-powered premium tiers.'
  } },
  
  // D. Threats - Risk factors
  { group: 'nodes', data: { 
    id: 'threats', 
    label: 'Key Threats & Risk Factors', 
    type: 'swot_threat', 
    text: 'AI Competition: Google, Amazon, OpenAI potentially challenging leadership. Regulatory Risk: Antitrust scrutiny of market dominance. Economic Downturn: Enterprise spending cuts affecting growth. Cybersecurity: Increasing threats to cloud infrastructure. Open Source: Competition from free alternatives. Geopolitical: China tensions affecting global operations.'
  } },
  
  // E. Future Outlook - Investment thesis
  { group: 'nodes', data: { 
    id: 'future_outlook', 
    label: 'Future Outlook & Investment Thesis', 
    type: 'category', 
    text: 'Investment Thesis: AI-driven growth acceleration with 10-15% revenue growth potential. Cloud market share gains continuing. Subscription model providing predictable cash flows. Key catalysts: Copilot adoption, Azure growth, gaming integration. Long-term: AI platform leadership and enterprise ecosystem expansion.'
  } },

  // F. Key Risk Factors
  { group: 'nodes', data: { 
    id: 'risk_factors', 
    label: 'Principal Risk Factors', 
    type: 'category', 
    text: 'AI competition intensifying from Google and Amazon. Regulatory challenges to acquisition strategy. Economic downturn affecting enterprise IT spending. Cybersecurity threats to cloud operations. OpenAI relationship dependency. Currency headwinds in international markets.'
  } },

  // G. Strategic Initiatives
  { group: 'nodes', data: { 
    id: 'strategic_initiatives', 
    label: 'Key Strategic Initiatives', 
    type: 'category', 
    text: 'AI-first product development across portfolio. Cloud infrastructure expansion globally. Gaming ecosystem integration and expansion. Sustainability commitments and carbon negative goals. Security and compliance leadership. Developer ecosystem growth and engagement.'
  } },

  // --- EDGES (RELATIONSHIPS) ---
  { group: 'edges', data: { id: 'msft-company', source: 'msft', target: 'company_info' } },
  { group: 'edges', data: { id: 'msft-financial', source: 'msft', target: 'financial_performance' } },
  { group: 'edges', data: { id: 'msft-recent', source: 'msft', target: 'recent_developments' } },
  { group: 'edges', data: { id: 'msft-ai', source: 'msft', target: 'ai_strategy' } },
  { group: 'edges', data: { id: 'msft-market', source: 'msft', target: 'market_landscape' } },
  { group: 'edges', data: { id: 'msft-analyst', source: 'msft', target: 'analyst_sentiment' } },
  { group: 'edges', data: { id: 'msft-competitive', source: 'msft', target: 'competitive_analysis' } },
  { group: 'edges', data: { id: 'msft-swot', source: 'msft', target: 'swot_outlook' } },

  // Company Info relationships
  { group: 'edges', data: { id: 'company-profile', source: 'company_info', target: 'corporate_profile' } },
  { group: 'edges', data: { id: 'company-segments', source: 'company_info', target: 'business_segments' } },
  { group: 'edges', data: { id: 'company-geographic', source: 'company_info', target: 'geographic_mix' } },
  { group: 'edges', data: { id: 'company-model', source: 'company_info', target: 'business_model' } },

  // Business Segments relationships
  { group: 'edges', data: { id: 'segments-cloud', source: 'business_segments', target: 'intelligent_cloud' } },
  { group: 'edges', data: { id: 'segments-productivity', source: 'business_segments', target: 'productivity_business' } },
  { group: 'edges', data: { id: 'segments-computing', source: 'business_segments', target: 'personal_computing' } },

  // Financial Performance relationships
  { group: 'edges', data: { id: 'financial-q3', source: 'financial_performance', target: 'q3_fy2025_results' } },
  { group: 'edges', data: { id: 'financial-metrics', source: 'financial_performance', target: 'financial_metrics' } },
  { group: 'edges', data: { id: 'financial-historical', source: 'financial_performance', target: 'historical_performance' } },
  { group: 'edges', data: { id: 'financial-capital', source: 'financial_performance', target: 'capital_return' } },
  { group: 'edges', data: { id: 'financial-profitability', source: 'financial_performance', target: 'profitability_analysis' } },

  // Recent Developments relationships
  { group: 'edges', data: { id: 'recent-copilot', source: 'recent_developments', target: 'copilot_strategy' } },
  { group: 'edges', data: { id: 'copilot-updates', source: 'copilot_strategy', target: 'ai_latest_updates' } },
  { group: 'edges', data: { id: 'recent-activision', source: 'recent_developments', target: 'activision_integration' } },
  { group: 'edges', data: { id: 'recent-cloud', source: 'recent_developments', target: 'cloud_expansion' } },
  { group: 'edges', data: { id: 'recent-enterprise', source: 'recent_developments', target: 'enterprise_ai' } },
  { group: 'edges', data: { id: 'recent-innovation', source: 'recent_developments', target: 'product_innovation' } },

  // AI Strategy relationships
  { group: 'edges', data: { id: 'ai-openai', source: 'ai_strategy', target: 'openai_partnership' } },
  { group: 'edges', data: { id: 'ai-platform', source: 'ai_strategy', target: 'ai_platform_strategy' } },
  { group: 'edges', data: { id: 'ai-copilot', source: 'ai_strategy', target: 'copilot_ecosystem' } },
  { group: 'edges', data: { id: 'ai-advantages', source: 'ai_strategy', target: 'ai_competitive_advantages' } },

  // Market Landscape relationships
  { group: 'edges', data: { id: 'market-cloud', source: 'market_landscape', target: 'cloud_market' } },
  { group: 'edges', data: { id: 'market-productivity', source: 'market_landscape', target: 'productivity_market' } },
  { group: 'edges', data: { id: 'market-gaming', source: 'market_landscape', target: 'gaming_market' } },
  { group: 'edges', data: { id: 'market-developer', source: 'market_landscape', target: 'developer_market' } },
  { group: 'edges', data: { id: 'market-enterprise', source: 'market_landscape', target: 'enterprise_trends' } },

  // Analyst Sentiment relationships
  { group: 'edges', data: { id: 'analyst-ratings', source: 'analyst_sentiment', target: 'analyst_ratings' } },
  { group: 'edges', data: { id: 'analyst-themes', source: 'analyst_sentiment', target: 'investment_themes' } },
  { group: 'edges', data: { id: 'analyst-focus', source: 'analyst_sentiment', target: 'earnings_focus' } },
  { group: 'edges', data: { id: 'analyst-valuation', source: 'analyst_sentiment', target: 'valuation_analysis' } },

  // Competitive Analysis relationships
  { group: 'edges', data: { id: 'competitive-aws', source: 'competitive_analysis', target: 'aws_competition' } },
  { group: 'edges', data: { id: 'competitive-google', source: 'competitive_analysis', target: 'google_competition' } },
  { group: 'edges', data: { id: 'competitive-salesforce', source: 'competitive_analysis', target: 'salesforce_competition' } },
  { group: 'edges', data: { id: 'competitive-meta', source: 'competitive_analysis', target: 'meta_competition' } },
  { group: 'edges', data: { id: 'competitive-sony', source: 'competitive_analysis', target: 'sony_competition' } },
  { group: 'edges', data: { id: 'competitive-apple', source: 'competitive_analysis', target: 'apple_competition' } },

  // SWOT Analysis relationships
  { group: 'edges', data: { id: 'swot-strengths', source: 'swot_outlook', target: 'strengths' } },
  { group: 'edges', data: { id: 'swot-weaknesses', source: 'swot_outlook', target: 'weaknesses' } },
  { group: 'edges', data: { id: 'swot-opportunities', source: 'swot_outlook', target: 'opportunities' } },
  { group: 'edges', data: { id: 'swot-threats', source: 'swot_outlook', target: 'threats' } },
  { group: 'edges', data: { id: 'swot-outlook', source: 'swot_outlook', target: 'future_outlook' } },
  { group: 'edges', data: { id: 'swot-risks', source: 'swot_outlook', target: 'risk_factors' } },
  { group: 'edges', data: { id: 'swot-strategic', source: 'swot_outlook', target: 'strategic_initiatives' } },

  // Cross-category relationships
  { group: 'edges', data: { id: 'copilot-cloud', source: 'copilot_strategy', target: 'intelligent_cloud' } },
  { group: 'edges', data: { id: 'copilot-productivity', source: 'copilot_strategy', target: 'productivity_business' } },
  { group: 'edges', data: { id: 'openai-strengths', source: 'openai_partnership', target: 'strengths' } },
  { group: 'edges', data: { id: 'activision-gaming', source: 'activision_integration', target: 'gaming_market' } },
  { group: 'edges', data: { id: 'azure-cloud', source: 'cloud_expansion', target: 'cloud_market' } },
  { group: 'edges', data: { id: 'ai-opportunities', source: 'ai_strategy', target: 'opportunities' } },
  { group: 'edges', data: { id: 'competition-threats', source: 'competitive_analysis', target: 'threats' } }
];
