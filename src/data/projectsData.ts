import { ProjectItem } from '../types';

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Launches' },
  { id: 'mega-gainer', label: 'Mega Gainers (+1000%)' },
  { id: 'high-volume', label: 'High Volume ($1M+)' },
  { id: 'breakout-midcap', label: 'Breakout Mid-Cap' }
] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-apex-63x',
    codeName: 'Project Nova Apex',
    tagline: 'Record-Breaking +6,344% Moonshot with $3.1M Peak Market Cap',
    image: '/assets/aistudio/image_035eae79.png',
    category: 'mega-gainer',
    categoryLabel: 'Mega Gainer (+6,344%)',
    categories: ['mega-gainer', 'high-volume'],
    chain: 'Solana (SPL)',
    dex: 'Raydium / DEX Screener Verified',
    stats: {
      peakGain24h: '+6,344%',
      gainPercentage: 6344,
      marketCap: '$3.1M',
      fdv: '$3.1M',
      volume24h: '$3.3M',
      liquidity: '$153K',
      isLiquidityLocked: true,
      priceUsd: '$0.003118',
      priceSol: '0.00003241 SOL',
      transactions: '158,897',
      buys: '114,188',
      sells: '44,709',
      buyVolume: '$1.6M',
      sellVolume: '$1.6M',
      traders: '15,424',
      buyers: '15,373',
      sellers: '4,007'
    },
    channels: ['Custom Website', 'X (Twitter)', 'Telegram Community'],
    summary: 'A viral meme coin launch supported by our structured branding, liquidity lock verification, and DEX deployment pipeline. Driven by heavy early organic accumulation and 114,000+ buy orders, the token surged over 63x within 24 hours of release, maintaining $153K locked liquidity and exceeding $3.3M in traded volume.',
    highlights: [
      'Delivered +6,344% 24-hour peak gain with sustained liquidity',
      'Attracted over 15,370 individual buyers and 158,800+ total transactions',
      'Achieved peak market cap and fully diluted valuation of $3.1M',
      '100% of initial liquidity permanently locked on-chain'
    ],
    privacyNotice: 'Contract address (CA) and creator wallet details are redacted to honor our non-disclosure agreement and safeguard client security.'
  },
  {
    id: 'project-velocity-775x',
    codeName: 'Project Cyber Runner',
    tagline: 'Heavy-Trading Velocity Reaching $3.3M Volume & 148,000+ Transactions',
    image: '/assets/aistudio/image_67990ab9.png',
    category: 'high-volume',
    categoryLabel: 'High Volume ($3.3M)',
    categories: ['high-volume', 'breakout-midcap'],
    chain: 'Solana (SPL)',
    dex: 'Raydium / DEX Screener Verified',
    stats: {
      peakGain24h: '+775%',
      gainPercentage: 775,
      marketCap: '$388K',
      fdv: '$388K',
      volume24h: '$3.3M',
      liquidity: '$55K',
      isLiquidityLocked: true,
      priceUsd: '$0.0003910',
      priceSol: '0.000004008 SOL',
      transactions: '148,751',
      buys: '99,409',
      sells: '49,342',
      buyVolume: '$1.6M',
      sellVolume: '$1.6M',
      traders: '10,729',
      buyers: '10,667',
      sellers: '8,289'
    },
    channels: ['Custom Website', 'X (Twitter)'],
    summary: 'An ultra high-velocity decentralized market run driven by fast-paced social momentum and algorithmic buying interest. The token generated nearly 150,000 on-chain trades and crossed $3.3M in 24-hour trading volume, scaling market capitalization to $388K with +775% peak return.',
    highlights: [
      'Accumulated $3.3M in 24-hour decentralized volume',
      '99,400+ buy orders out of 148,750+ total transactions',
      'Solid locked liquidity pool of $55K with active maker activity',
      'Engaged over 10,660 unique token buyers'
    ],
    privacyNotice: 'Token ticker, creator address, and social links are anonymized to protect client marketing proprietary strategy and privacy.'
  },
  {
    id: 'project-sol-titan-491x',
    codeName: 'Project Sol Titan',
    tagline: 'Rapid +491% 6-Hour Rally with Balanced Buy-to-Sell Trading Volume',
    image: '/assets/aistudio/image_4781fff2.png',
    category: 'breakout-midcap',
    categoryLabel: 'Breakout Mid-Cap (+491%)',
    categories: ['breakout-midcap'],
    chain: 'Solana (SPL)',
    dex: 'Raydium / DEX Screener Verified',
    stats: {
      peakGain24h: '+491%',
      gainPercentage: 491,
      marketCap: '$231K',
      fdv: '$231K',
      volume24h: '$977K',
      liquidity: '$40K',
      isLiquidityLocked: true,
      priceUsd: '$0.0002391',
      priceSol: '0.000002407 SOL',
      transactions: '24,124',
      buys: '14,437',
      sells: '9,687',
      buyVolume: '$496K',
      sellVolume: '$480K',
      traders: '2,912',
      buyers: '2,608',
      sellers: '2,274'
    },
    channels: ['Custom Website', 'X (Twitter)'],
    summary: 'A clean, calculated stealth launch built on Solana with balanced market making and organic meme appeal. Over a 6-hour burst, the project surged +491%, turning an initial stealth pool into a $231K market cap runner with nearly $1M in traded volume.',
    highlights: [
      '+491% continuous price ascent maintained over initial trading cycles',
      'Approached $1M in trading volume ($977K) with $40K locked liquidity',
      'Healthy 60% buy ratio (14,437 buys vs 9,687 sells)',
      'Smooth graduation and active DEX listing visibility'
    ],
    privacyNotice: 'Client identity and proprietary token parameters are shielded in accordance with client confidentiality agreements.'
  },
  {
    id: 'project-kinetic-surge-211x',
    codeName: 'Project Kinetic Surge',
    tagline: '$1.5M Trading Volume & +211% Rally on Solana DEX',
    image: '/assets/aistudio/image_76cc73e5.png',
    category: 'high-volume',
    categoryLabel: 'High Volume ($1.5M)',
    categories: ['high-volume', 'breakout-midcap'],
    chain: 'Solana (SPL)',
    dex: 'Raydium / DEX Screener Verified',
    stats: {
      peakGain24h: '+211%',
      gainPercentage: 211,
      marketCap: '$114K',
      fdv: '$114K',
      volume24h: '$1.5M',
      liquidity: '$29K',
      isLiquidityLocked: true,
      priceUsd: '$0.0001199',
      priceSol: '0.000001241 SOL',
      transactions: '34,861',
      buys: '20,052',
      sells: '14,809',
      buyVolume: '$761K',
      sellVolume: '$748K',
      traders: '4,916',
      buyers: '4,585',
      sellers: '4,199'
    },
    channels: ['Custom Website', 'X (Twitter)'],
    summary: 'Constructed for rapid liquidity turnover and multi-channel engagement, this project reached $1.5M in DEX volume and a +211% surge on day one. With 34,800+ transactions and nearly 5,000 active traders, it demonstrated strong on-chain liquidity depth.',
    highlights: [
      '$1.5M trading volume achieved within 24 hours',
      'Over 20,000 recorded buy transactions across 4,585+ unique buyers',
      '+211% day-one surge with sustained pool stability ($29K locked liquidity)',
      'Verified DEX listing and on-chain tracking configuration'
    ],
    privacyNotice: 'Full smart contract address and developer wallet information remain strictly private as requested by the project sponsor.'
  }
];
