import { PracticeArea, Attorney, CaseStudy, BlogPost, TimelineMilestone, FirmValue, FAQItem } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-law',
    name: 'Corporate Law',
    shortDesc: 'Company setup, equity arrangements, and commercial contracts.',
    tagline: 'Clean legal structures and contracts that protect you when circumstances change.',
    heroCopy: 'Starting a company or bringing on investors involves terms that can limit you years down the line if written carelessly. We write founder vesting agreements, clean up cap tables, and draft contracts in plain English so you know what you are agreeing to before you sign.',
    iconType: 'corporate',
    leadAttorneyId: 'william-ashford',
    feeStructure: 'Fixed fees for routine entity formation and contract packages. Transparent hourly billing with written phase budgets for acquisitions and negotiations.',
    overview: [
      'Most contract disputes happen because two people thought they agreed on something, but neither one put the details in writing. We help business owners put solid ground rules in place before problems start.',
      'You deal directly with the partner handling your file. We look at your business the way an operator does, weighing the practical risk of each term instead of burying you in twenty pages of standard legal text that nobody reads.',
      'We write founder agreements, customer contracts, vendor agreements, and licensing terms that protect your business without slowing down your day-to-day operations.'
    ],
    capabilities: [
      'Entity formation (LLC, C-Corp, B-Corp) and state registration',
      'Founder vesting agreements and equity allocation (cap tables)',
      'Commercial contracts, vendor terms, and software licensing',
      'Asset purchases, business sales, and equity financing',
      'Shareholder agreements and corporate governance records'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Review existing documents',
        description: 'We read your formation papers, current agreements, and ownership records to spot terms that could cause trouble later.'
      },
      {
        number: '02',
        title: 'Draft in plain language',
        description: 'Every clause is written so managers and investors can understand it without translating Latin terms.'
      },
      {
        number: '03',
        title: 'Negotiate the terms',
        description: 'We negotiate directly with the other side’s counsel, keeping the deal moving while protecting your position.'
      },
      {
        number: '04',
        title: 'Ongoing compliance',
        description: 'We give you a simple calendar for annual filings, board consents, and corporate record updates.'
      }
    ],
    relatedCaseStudyIds: ['cs-cross-border-merger']
  },
  {
    id: 'immigration-law',
    name: 'Immigration Law',
    shortDesc: 'Work visas, family green cards, and naturalization.',
    tagline: 'Careful paperwork and thorough preparation for federal immigration filings.',
    heroCopy: 'Immigration agencies deny petitions over minor documentary gaps. We review every requirement before filing, organize your supporting evidence, and prepare you personally for agency interviews.',
    iconType: 'immigration',
    leadAttorneyId: 'priya-nandan',
    feeStructure: 'Fixed fees quoted upfront before we start on your petition. No surprise administrative add-ons or billing surprises.',
    overview: [
      'Federal immigration rules are strict, and processing times are long. A missing document or an unclear job description can delay your case by months or trigger a formal request for evidence.',
      'We handle employment visas (including O-1 for individuals with extraordinary ability and H-1B specialty occupation visas), family-based immigrant petitions, and citizenship applications.',
      'Two attorneys review every petition before it leaves our office. That extra check catches missing exhibits and inconsistencies that cause delays.'
    ],
    capabilities: [
      'Employment visas for researchers, founders, and specialized talent (O-1, EB-1, EB-2 NIW)',
      'Family green cards, marriage petitions, and adjustment of status',
      'Employer immigration compliance and labor certifications',
      'Citizenship hearings and naturalization applications',
      'Consular processing and expedited travel waivers'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Case assessment',
        description: 'We examine your employment history, publications, or family relationships to pick the visa category with the highest likelihood of approval.'
      },
      {
        number: '02',
        title: 'Evidence collection',
        description: 'We help you gather specific letters and work records that meet federal agency standards, organizing them into a clear exhibit packet.'
      },
      {
        number: '03',
        title: 'Filing and tracking',
        description: 'We file your petition electronically where permitted and send you the official receipt notice as soon as it arrives.'
      },
      {
        number: '04',
        title: 'Interview preparation',
        description: 'We run a practice interview with you and your family so you know what questions to expect at the field office.'
      }
    ],
    relatedCaseStudyIds: ['cs-eb1-extraordinary-ability']
  },
  {
    id: 'real-estate-law',
    name: 'Real Estate Law',
    shortDesc: 'Property purchases, commercial leases, and title issues.',
    tagline: 'Examining titles, contracts, and boundary rights before your money is locked in.',
    heroCopy: 'Buying property or signing a commercial lease means taking on obligations that affect your money for years. We review title commitments, flag unrecorded easements, and correct contract terms before your deposit becomes non-refundable.',
    iconType: 'real-estate',
    leadAttorneyId: 'marcus-vance',
    feeStructure: 'Flat closing packages for standard property acquisitions. Hourly rates with estimates for lease negotiations and zoning matters.',
    overview: [
      'A title defect or an overlooked municipal permit can tie up real estate capital indefinitely. Our role is to find those issues before closing, when you still have the leverage to fix them or walk away.',
      'We represent buyers, commercial tenants, developers, and property owners across purchases, commercial leases, and local zoning hearings.',
      'We examine the title commitment — the title company’s formal promise to insure your ownership — and survey maps line by line so you do not inherit someone else’s property disputes.'
    ],
    capabilities: [
      'Commercial purchase and sale agreements for retail, office, and industrial properties',
      'Residential purchases, escrow oversight, and title curative actions',
      'Commercial lease reviews, sublease clauses, and tenant negotiations',
      'Zoning variances and municipal land-use permits',
      'Boundary disputes, easements, and quiet title actions'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Title and survey review',
        description: 'We search town records, deed restrictions, and easements — legal rights that let neighbors or utilities cross your land — before your deposit is locked in.'
      },
      {
        number: '02',
        title: 'Contract negotiation',
        description: 'We rewrite standard purchase agreements to make sure inspection deadlines and mortgage contingencies protect you.'
      },
      {
        number: '03',
        title: 'Closing preparation',
        description: 'We verify payoffs, deeds, and escrow funds through independent escrow accounts before anyone signs.'
      },
      {
        number: '04',
        title: 'Post-closing perfection',
        description: 'We make sure your deed is recorded with the registry and your final title insurance policy is issued without delay.'
      }
    ],
    relatedCaseStudyIds: ['cs-mixed-use-zoning-entitlement']
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law',
    shortDesc: 'Defense built on physical evidence, police reports, and trial preparation.',
    tagline: 'Direct, constitutional defense when your freedom and record are on the line.',
    heroCopy: 'When the police charge you with a crime, the incident report is only one version of events. We obtain the radio dispatch records, 911 recordings, and camera footage ourselves, look for unconstitutional searches, and hold prosecutors to their legal burden of proof.',
    iconType: 'criminal',
    leadAttorneyId: 'daniel-okoye',
    feeStructure: 'Clear flat fees covering defined stages: investigation, preliminary hearings, and trial defense. Written fee agreement before any work begins.',
    overview: [
      'Being charged with a criminal offense is frightening and disorienting. You need an attorney who tells you where your case actually stands, not someone who makes wild promises or pressures you into a fast plea.',
      'We represent clients facing white-collar financial allegations, state felonies, serious driving charges, and federal investigations.',
      'We prepare every case as though it will be tried before a jury. When prosecutors know an attorney is ready to examine witnesses in court, settlement talks happen on better terms.'
    ],
    capabilities: [
      'White-collar defense, corporate allegations, and government subpoenas',
      'Motions to suppress evidence obtained through unlawful stops or searches',
      'Pre-indictment defense and grand jury representation',
      'Trial defense in state and federal court',
      'Record expungement and professional license protection'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Secure the evidence',
        description: 'We request body camera video, cruiser footage, and witness statements right away before municipal servers overwrite them.'
      },
      {
        number: '02',
        title: 'Check police conduct',
        description: 'We review how the stop, search, and questioning were handled. If officers violated your Fourth Amendment rights, we ask the judge to throw out that evidence.'
      },
      {
        number: '03',
        title: 'Independent investigation',
        description: 'We interview defense witnesses and work with technical specialists to test the prosecution’s theory of what happened.'
      },
      {
        number: '04',
        title: 'Courtroom readiness',
        description: 'We prepare your defense for trial, giving you the information you need to decide whether to negotiate or take the case to a jury.'
      }
    ],
    relatedCaseStudyIds: ['cs-wire-fraud-acquittal']
  },
  {
    id: 'medical-law',
    name: 'Medical Law',
    shortDesc: 'Clinical malpractice claims and healthcare regulatory defense.',
    tagline: 'Holding hospitals and medical providers accountable to proper care standards.',
    heroCopy: 'A disappointing medical outcome is not always malpractice. But when a surgeon or hospital ignores clear treatment standards, the harm to a patient can be permanent. We read the electronic health records and bedside monitoring data to determine what actually took place.',
    iconType: 'medical',
    leadAttorneyId: 'elena-rostova',
    feeStructure: 'Contingency fees for injury and negligence claims: you pay no legal fee unless we recover money for you. Hourly rates for clinician licensing defense.',
    overview: [
      'When clinical mistakes happen, hospitals rarely volunteer the full story. Families are often left with medical bills and conflicting explanations.',
      'We represent patients injured by surgical mistakes, missed diagnoses, and medication errors, as well as doctors and nurses facing state licensing board complaints.',
      'Every malpractice case we take is reviewed by independent, practicing physicians. We do not file speculative claims. If the medical record does not show a clear violation of the standard of care, we tell you directly.'
    ],
    capabilities: [
      'Surgical error and operating room negligence claims',
      'Delayed diagnosis of cancer and acute medical conditions',
      'Hospital monitoring failures and post-operative complications',
      'Calculation of lifetime medical care costs and lost earnings',
      'Medical provider licensing defense before state disciplinary boards'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Audit the hospital records',
        description: 'We order your complete medical file, including the electronic metadata that logs when nursing notes and vital signs were entered.'
      },
      {
        number: '02',
        title: 'Physician review',
        description: 'Independent board-certified specialists examine the timeline to determine whether the care fell below accepted medical standards.'
      },
      {
        number: '03',
        title: 'Calculate real expenses',
        description: 'We work with economic analysts to calculate the cost of your future medical care, adaptive equipment, and lost income.'
      },
      {
        number: '04',
        title: 'Settlement or trial',
        description: 'We present the clinical facts clearly to insurance adjusters or a jury, focusing on objective medical evidence rather than rhetoric.'
      }
    ],
    relatedCaseStudyIds: ['cs-workplace-surgical-settlement']
  },
  {
    id: 'family-law',
    name: 'Family Law',
    shortDesc: 'Divorce, custody arrangements, and marital property division.',
    tagline: 'Protecting children and personal stability through difficult domestic transitions.',
    heroCopy: 'Family law matters decide where your children sleep, how parenting decisions get made, and how your savings are divided. We keep negotiations grounded, avoid unnecessary court fights, and stand firm when your parental rights or financial assets are threatened.',
    iconType: 'family',
    leadAttorneyId: 'sophia-sterling',
    feeStructure: 'Clear initial retainers with detailed monthly billing statements down to the tenth of an hour. No lump-sum guesswork.',
    overview: [
      'Family disputes do not need to be dragged out in court to be resolved fairly. Prolonged litigation burns through marital savings and hurts children.',
      'We represent clients in divorce, custody arrangements, prenuptial agreements, and asset division involving family businesses or retirement accounts.',
      'We work toward fair agreements through mediation whenever possible. But if the other side hides assets or refuses to negotiate in good faith, we take the matter to court without hesitation.'
    ],
    capabilities: [
      'Divorce involving family businesses, real estate, and stock options',
      'Child custody agreements and parenting schedules',
      'Prenuptial and postnuptial agreements',
      'Child support and spousal maintenance calculations',
      'Collaborative mediation and separation agreements'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Financial review',
        description: 'We assemble a complete picture of your marital assets, debts, real estate, and parenting schedules.'
      },
      {
        number: '02',
        title: 'Settlement proposals',
        description: 'We draft realistic, enforceable separation terms aimed at resolving the dispute without the stress of an open trial.'
      },
      {
        number: '03',
        title: 'Asset investigation',
        description: 'If you suspect accounts or business revenues are being concealed, we work with financial analysts to trace the funds.'
      },
      {
        number: '04',
        title: 'Court order enforcement',
        description: 'We write clear, specific court orders so there is no ambiguity about custody schedules or property transfers later.'
      }
    ],
    relatedCaseStudyIds: ['cs-high-net-worth-dissolution']
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'william-ashford',
    name: 'William Ashford Sr.',
    role: 'Partner — Corporate & Real Estate',
    shortSpecialty: 'Corporate agreements, commercial transactions, and business governance.',
    portraitStyle: 'founder',
    credentials: ['Bar Admitted 2009', 'Columbia Law School', 'Commercial Counsel'],
    bio: [
      'William Ashford Sr. started Jurista Law in 2011 because he noticed clients were paying large bills for advice they could barely understand. He wanted a firm where business owners could talk directly to their lawyer and get straight answers.',
      'Over sixteen years in practice, William has advised more than four hundred company founders, commercial tenants, and real estate owners on contracts, equity sales, and leases.',
      'He acts as outside general counsel to several regional companies, helping them negotiate vendor contracts, hire executives, and handle shareholder votes without unnecessary friction.'
    ],
    philosophyQuote: 'A client should understand what is happening in their case at every step, not just be told to trust us.',
    practices: ['corporate-law', 'real-estate-law'],
    email: 'w.ashford@jurista.com',
    phone: '+2 011 611-4574',
    barAdmissions: ['New York State Bar (2009)', 'U.S. District Court, Southern District of NY (2011)'],
    education: ['J.D., Columbia Law School', 'B.A. in Philosophy & Economics, Cornell University']
  },
  {
    id: 'priya-nandan',
    name: 'Priya Nandan',
    role: 'Senior Associate — Immigration Law',
    shortSpecialty: 'Employment visas, extraordinary ability petitions, and green cards.',
    portraitStyle: 'associate-priya',
    credentials: ['Bar Admitted 2014', 'UC Berkeley Law', 'AILA Member'],
    bio: [
      'Priya Nandan leads our immigration practice. She has helped hundreds of software engineers, university researchers, and families obtain visas and lawful permanent residence in the United States.',
      'Her focus is on employment-based petitions (O-1, EB-1, and EB-2 National Interest Waivers). She is known for compiling organized evidence binders that satisfy federal adjudicators on the first review.',
      'Priya also conducts volunteer citizenship workshops in the local community to help lawful permanent residents navigate naturalization exams.'
    ],
    philosophyQuote: 'Immigration is not just forms. It is the legal permission for a family or a founder to build their life here.',
    practices: ['immigration-law'],
    email: 'p.nandan@jurista.com',
    phone: '+2 011 611-4575',
    barAdmissions: ['California State Bar (2014)', 'American Immigration Lawyers Association (2015)'],
    education: ['J.D., UC Berkeley School of Law', 'B.S. in International Relations, Georgetown University']
  },
  {
    id: 'daniel-okoye',
    name: 'Daniel Okoye',
    role: 'Senior Associate — Criminal Defense',
    shortSpecialty: 'Constitutional suppression motions, financial fraud investigations, and jury trials.',
    portraitStyle: 'associate-daniel',
    credentials: ['Bar Admitted 2015', 'Former Federal Defender', 'Northwestern Law'],
    bio: [
      'Daniel Okoye is a trial lawyer who approaches criminal defense through the evidence on record. Before joining Jurista Law, he served as an assistant federal public defender, taking twenty-two jury cases to verdict.',
      'Daniel represents clients in state and federal court facing white-collar allegations, serious driving offenses, and felony charges.',
      'Judges and opposing counsel know Daniel for his factual preparation. He spends his time examining police logs, surveillance audio, and search warrant affidavits rather than relying on courtroom speeches.'
    ],
    philosophyQuote: 'A defense is not built on speeches. It is built on preserving the physical evidence that investigators missed.',
    practices: ['criminal-law'],
    email: 'd.okoye@jurista.com',
    phone: '+2 011 611-4576',
    barAdmissions: ['Illinois State Bar (2015)', 'U.S. Court of Appeals for the Seventh Circuit (2017)'],
    education: ['J.D., Northwestern University Pritzker School of Law', 'B.A. in Criminology, University of Michigan']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Partner — Medical Law & Healthcare',
    shortSpecialty: 'Clinical malpractice claims, hospital standards, and healthcare licensing.',
    portraitStyle: 'partner-elena',
    credentials: ['Bar Admitted 2012', 'Penn Law & Bioethics M.S.', 'Trial Practice'],
    bio: [
      'Elena Rostova brings an analytical medical background to her litigation practice. She earned a master’s degree in bioethics alongside her law degree, giving her the ability to evaluate hospital electronic health records and nursing charts directly.',
      'Elena focuses on claims involving surgical mistakes, delayed diagnosis, and medication errors. She also defends doctors and nurses in state licensing board proceedings.',
      'She works closely with practicing clinical consultants to verify the facts of every claim before taking it to settlement talks or trial.'
    ],
    philosophyQuote: 'The law cannot undo physical injury, but it can make sure families receive the care and financial support they need.',
    practices: ['medical-law'],
    email: 'e.rostova@jurista.com',
    phone: '+2 011 611-4577',
    barAdmissions: ['New York State Bar (2012)', 'New Jersey State Bar (2013)'],
    education: ['J.D. & M.S. in Bioethics, University of Pennsylvania', 'B.S. in Neuroscience, Johns Hopkins University']
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Senior Associate — Real Estate & Land Use',
    shortSpecialty: 'Commercial acquisitions, zoning variances, and lease negotiations.',
    portraitStyle: 'associate-marcus',
    credentials: ['Bar Admitted 2016', 'Boston College Law', 'MIT Urban Planning'],
    bio: [
      'Marcus Vance represents property owners, tenants, and small developers in real estate transactions, boundary disputes, and zoning board hearings.',
      'Before law school, Marcus worked in city planning. That experience gives his clients practical insight into how planning boards, building inspectors, and conservation commissions evaluate development applications.',
      'He reviews commercial leases, easements, and title commitments to make sure clients understand their long-term property rights.'
    ],
    philosophyQuote: 'Every parcel of land comes with legal restrictions. Our job is to know every one before you sign the deed.',
    practices: ['real-estate-law'],
    email: 'm.vance@jurista.com',
    phone: '+2 011 611-4578',
    barAdmissions: ['Massachusetts State Bar (2016)', 'New York State Bar (2018)'],
    education: ['J.D., Boston College Law School', 'B.S. in Urban Planning, MIT']
  },
  {
    id: 'sophia-sterling',
    name: 'Sophia Sterling',
    role: 'Senior Associate — Family Law & Mediation',
    shortSpecialty: 'Divorce, marital asset division, and custody arrangements.',
    portraitStyle: 'associate-sophia',
    credentials: ['Bar Admitted 2017', 'Certified Mediator', 'UT Austin Law'],
    bio: [
      'Sophia Sterling handles divorce, child custody, and marital property matters with steady judgment and careful financial analysis.',
      'She encourages mediation whenever both spouses are willing to negotiate in good faith, saving clients time and money while keeping sensitive family matters out of public court records.',
      'When an amicable resolution is not possible, Sophia advocates firmly in court to protect her client’s parenting time and financial independence.'
    ],
    philosophyQuote: 'A good family law outcome lets both sides move forward with their dignity and financial stability intact.',
    practices: ['family-law'],
    email: 's.sterling@jurista.com',
    phone: '+2 011 611-4579',
    barAdmissions: ['Texas State Bar (2017)', 'Certified Family Law Mediator (2020)'],
    education: ['J.D., University of Texas School of Law', 'B.A. in Psychology, Vanderbilt University']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-workplace-surgical-settlement',
    title: 'Resolving a surgical error claim after a post-operative complication',
    practiceSlug: 'medical-law',
    outcomeSummary: 'Recovered a $3.4M settlement covering ongoing physical therapy and lost household earnings.',
    summaryStats: {
      timeline: '8 months',
      outcome: '$3.4M settlement',
      practice: 'Medical Law'
    },
    clientContext: 'A 42-year-old logistics supervisor suffered nerve damage and respiratory trauma due to unmonitored anesthesia during routine spinal surgery.',
    situation: [
      'The client entered an outpatient surgical center for an elective microdiscectomy. Following the procedure, inadequate recovery room monitoring led to airway constriction and localized neurological impairment.',
      'The hospital insurer denied the claim, asserting that the complication stemmed from pre-existing metabolic vulnerabilities rather than post-operative monitoring failures.'
    ],
    approach: [
      'Elena Rostova reviewed the raw electronic medical telemetry, discovering an unrecorded seventeen-minute gap in vital sign monitoring during a nursing shift transition.',
      'We consulted two board-certified anesthesiologists who testified that standard post-anesthesia protocols had been interrupted.',
      'We presented a detailed economic breakdown of future medical equipment and physical therapy costs rather than accepting an early nominal offer.'
    ],
    outcome: [
      'Presented with the telemetry records, the hospital insurer agreed to formal mediation.',
      'The claim resolved with a $3,400,000 settlement structured in an annuity trust to cover ongoing medical expenses, adaptive home equipment, and lost household wages.'
    ],
    clientQuote: {
      quote: 'From the first call, I understood where I stood. Elena explained the medical records clearly, treated my family with respect, and focused on our actual long-term needs.',
      author: 'Jonathan Sterling',
      roleOrTitle: 'Client'
    },
    leadAttorneyId: 'elena-rostova'
  },
  {
    id: 'cs-eb1-extraordinary-ability',
    title: 'Securing an EB-1A extraordinary ability green card for an AI researcher',
    practiceSlug: 'immigration-law',
    outcomeSummary: 'First-round approval from USCIS without a request for additional evidence.',
    summaryStats: {
      timeline: '4 months',
      outcome: 'Approved without RFE',
      practice: 'Immigration Law'
    },
    clientContext: 'A computer vision scientist whose temporary work visa was nearing its statutory cap.',
    situation: [
      'The researcher held numerous peer citations and patents, but a previous petition filed by another representative was disorganized and rejected by the agency.',
      'With under five months remaining on authorized status, the client needed a properly documented self-petition that did not rely on an employer sponsor.'
    ],
    approach: [
      'Priya Nandan audited the client’s academic citations, peer reviews, and open-source contributions.',
      'We gathered six independent expert letters from senior university department chairs, drafted to address regulatory criteria directly.',
      'We indexed each piece of evidence clearly so the agency examiner could verify every claim without searching through loose papers.'
    ],
    outcome: [
      'USCIS approved the EB-1A petition within twelve business days under premium processing with zero requests for additional evidence.',
      'The client and their spouse received lawful permanent resident cards shortly after, giving them the freedom to conduct research independently.'
    ],
    clientQuote: {
      quote: 'Priya walked me through every option before I had to decide anything. She knew the technical aspects of my work and made sure the petition was organized properly.',
      author: 'Amara Reyes',
      roleOrTitle: 'Client'
    },
    leadAttorneyId: 'priya-nandan'
  },
  {
    id: 'cs-cross-border-merger',
    title: 'Structuring an asset sale and intellectual property transfer',
    practiceSlug: 'corporate-law',
    outcomeSummary: 'Structured an $18M asset sale across two corporate subsidiaries, protecting founder equity and key employee vesting.',
    summaryStats: {
      timeline: '5 months',
      outcome: '$18M transaction closed',
      practice: 'Corporate Law'
    },
    clientContext: 'A software company acquired by an international communications group.',
    situation: [
      'The founders received a purchase agreement containing uncapped indemnity clauses, meaning they could be held personally liable for unexpected liabilities well after closing.',
      'An open-source code audit also raised questions about third-party software licenses that needed immediate resolution.'
    ],
    approach: [
      'William Ashford Sr. replaced the uncapped indemnity clause with a capped escrow holdback backed by representation and warranty insurance.',
      'We resolved the software licensing questions by executing clean assignment agreements with former contractors across three countries.',
      'We tied earnout milestones to objective revenue targets rather than discretionary buyer assessments.'
    ],
    outcome: [
      'The transaction closed on schedule at the full purchase price without post-closing escrow disputes.',
      'The founders retained their equity rights under clear acceleration terms if control of the combined company changed.'
    ],
    clientQuote: {
      quote: 'William kept the buyer’s lawyers from tying up our sale in endless legal arguments. We got straight answers and closed on schedule.',
      author: 'Michael Chen',
      roleOrTitle: 'Client'
    },
    leadAttorneyId: 'william-ashford'
  },
  {
    id: 'cs-mixed-use-zoning-entitlement',
    title: 'Obtaining zoning variances for a residential property conversion',
    practiceSlug: 'real-estate-law',
    outcomeSummary: 'Secured unanimous planning board approval for a 48-unit residential conversion of a historic mill building.',
    summaryStats: {
      timeline: '7 months',
      outcome: 'Unanimous approval',
      practice: 'Real Estate Law'
    },
    clientContext: 'A regional developer facing neighborhood zoning objections and historical commission requirements.',
    situation: [
      'The owner wanted to convert an underused 19th-century mill building into apartments, but local zoning rules restricted multi-family residential density.'
    ],
    approach: [
      'Marcus Vance negotiated with the municipal planning council, proposing a community agreement that preserved the historic brick facade while dedicating units for workforce housing.',
      'We conducted traffic and stormwater impact assessments to address neighbors’ specific concerns before the formal public hearing.'
    ],
    outcome: [
      'The municipal zoning board granted unanimous variance approval, allowing construction to begin without appellate litigation.'
    ],
    leadAttorneyId: 'marcus-vance'
  },
  {
    id: 'cs-wire-fraud-acquittal',
    title: 'Pre-indictment dismissal of corporate accounting allegations',
    practiceSlug: 'criminal-law',
    outcomeSummary: 'Conducted an independent financial audit showing absence of criminal intent; federal prosecutors closed the inquiry with zero charges filed.',
    summaryStats: {
      timeline: '9 months',
      outcome: 'Case closed with zero charges',
      practice: 'Criminal Law'
    },
    clientContext: 'A company finance officer received a target letter alleging approval of irregular vendor payments.',
    situation: [
      'Federal investigators sent formal inquiry notices regarding vendor payment discrepancies totaling $1.2M.'
    ],
    approach: [
      'Daniel Okoye intervened before the grand jury met, obtaining server email archives and internal memos showing our client had flagged the billing anomalies to external auditors months before the government investigation began.',
      'We presented a written defense proffer to prosecutors showing good-faith compliance with internal accounting standards.'
    ],
    outcome: [
      'Federal prosecutors officially closed the file without issuing an indictment, preserving our client’s professional license and reputation.'
    ],
    leadAttorneyId: 'daniel-okoye'
  },
  {
    id: 'cs-high-net-worth-dissolution',
    title: 'Resolving complex marital property division through mediation',
    practiceSlug: 'family-law',
    outcomeSummary: 'Settled an estate division through structured mediation without public court litigation.',
    summaryStats: {
      timeline: '6 months',
      outcome: 'Private mediated agreement',
      practice: 'Family Law'
    },
    clientContext: 'A spouse negotiating division of real estate holdings and private business equity interests.',
    situation: [
      'Opposing counsel initially claimed private partnership interests had zero value, arguing future returns were purely speculative.'
    ],
    approach: [
      'Sophia Sterling worked with valuation analysts to benchmark historical distributions and proposed a deferred payment structure tied to actual returns.',
      'We kept negotiations in private mediation sessions, preventing confidential business financials from entering public court filings.'
    ],
    outcome: [
      'Both parties signed a balanced separation agreement that resolved property division and established funded college educational accounts for the children.'
    ],
    leadAttorneyId: 'sophia-sterling'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'transparent-fee-structures-law-firm',
    title: 'Why hourly billing causes problems for clients',
    excerpt: 'How fixed fees align attorney incentives with fast, clear answers instead of prolonged paperwork.',
    date: 'September 18, 2026',
    readTime: '4 min read',
    practiceSlug: 'corporate-law',
    authorId: 'william-ashford',
    isFeatured: true,
    content: [
      {
        heading: 'The problem with billing by the minute',
        paragraphs: [
          'For decades, most law firms have billed by the hour. On paper, it sounds reasonable: you pay for the time a lawyer spends on your case.',
          'In practice, it creates the wrong incentives. An attorney who solves your problem in twenty minutes makes less money than one who spends three weeks researching standard law and writing thirty pages of memos. That penalizes experience and rewards slowness.'
        ]
      },
      {
        heading: 'Pricing outcomes instead of elapsed time',
        paragraphs: [
          'For standard matters like company formations, trademark filings, real estate closings, and visa petitions, we quote a flat fee upfront. You know the exact number before we start.',
          'When litigation or trial work requires hourly billing, we give you written phase budgets with monthly estimates. You should never open a legal bill and be surprised by what is on it.'
        ]
      },
      {
        heading: 'What clients should expect',
        paragraphs: [
          'A working relationship with your attorney should be predictable. You should always know who is working on your file, what step comes next, and what that step will cost.'
        ]
      }
    ],
    keyTakeaways: [
      'Hourly billing rewards slow work and penalizes efficiency.',
      'Flat fees give business owners and families budgetary certainty.',
      'Always ask for a written phase estimate before signing a retainer agreement.'
    ]
  },
  {
    slug: 'eb1a-kazarian-framework-guide',
    title: 'What immigration examiners actually look for in an EB-1A petition',
    excerpt: 'Meeting three regulatory criteria is not enough on its own. How the two-step evaluation works in practice.',
    date: 'September 04, 2026',
    readTime: '6 min read',
    practiceSlug: 'immigration-law',
    authorId: 'priya-nandan',
    content: [
      {
        heading: 'The two-step review',
        paragraphs: [
          'Many applicants believe that checking off three out of ten regulatory criteria guarantees an EB-1A extraordinary ability approval. It does not.',
          'Under immigration agency precedent, examiners use a two-step test. First, they count whether your evidence meets at least three formal categories. Second, they make a subjective final merits evaluation to decide whether your record shows sustained national or international acclaim.'
        ]
      },
      {
        heading: 'Independent recommendation letters',
        paragraphs: [
          'Examiners give little weight to letters written by close colleagues and direct managers. They look for testimonials from senior peers in your field who know your work solely through its practical impact on the industry.'
        ]
      }
    ],
    keyTakeaways: [
      'Documentary evidence must show direct industry or academic impact.',
      'Independent citations and real adoption carry more weight than publication count alone.',
      'Thorough exhibit indexing reduces the likelihood of requests for evidence.'
    ]
  },
  {
    slug: 'commercial-lease-pitfalls-tenants',
    title: 'Commercial lease terms that catch business tenants by surprise',
    excerpt: 'From operating expense pass-throughs to restoration clauses, what you should review before signing.',
    date: 'August 22, 2026',
    readTime: '5 min read',
    practiceSlug: 'real-estate-law',
    authorId: 'marcus-vance',
    content: [
      {
        heading: 'Common area maintenance charges',
        paragraphs: [
          'Commercial leases often pass property operating expenses through to tenants under common area maintenance clauses. Landlords sometimes tuck roof repairs, structural work, or capital improvements into these annual bills.',
          'Tenants should negotiate a specific cap on annual controllable operating expenses, generally between three and five percent.'
        ]
      },
      {
        heading: 'Sublease and assignment rights',
        paragraphs: [
          'If your business grows quickly or needs to downsize, you need the right to assign the lease or sublet unused space to a qualified tenant without unreasonable landlord resistance.'
        ]
      }
    ],
    keyTakeaways: [
      'Cap annual operating expense pass-throughs to controllable line items.',
      'Review surrender conditions so you are not forced to remove standard improvements when moving out.',
      'Negotiate reasonable sublease permissions early in the process.'
    ]
  },
  {
    slug: 'fourth-amendment-digital-searches',
    title: 'Can police search your phone during a traffic stop?',
    excerpt: 'Constitutional limits on warrantless digital searches and what the courts require.',
    date: 'August 10, 2026',
    readTime: '5 min read',
    practiceSlug: 'criminal-law',
    authorId: 'daniel-okoye',
    content: [
      {
        heading: 'Your phone is not an ordinary container',
        paragraphs: [
          'The Supreme Court confirmed years ago that smartphones are not like wallets or backpacks. They hold photos, banking records, private correspondence, and location history.',
          'Police officers cannot search your phone during an arrest without a specific search warrant signed by a judge, unless there is an immediate emergency involving imminent harm.'
        ]
      }
    ],
    keyTakeaways: [
      'Passcode locks provide stronger legal and physical protection than facial recognition.',
      'Never consent to a voluntary phone search without speaking to a lawyer.',
      'Evidence found during an unlawful search can be suppressed in court.'
    ]
  },
  {
    slug: 'hospital-records-medical-litigation',
    title: 'What electronic medical records show in a negligence claim',
    excerpt: 'How timestamped audit trails help verify what actually happened in the hospital.',
    date: 'July 28, 2026',
    readTime: '5 min read',
    practiceSlug: 'medical-law',
    authorId: 'elena-rostova',
    content: [
      {
        heading: 'The electronic audit trail',
        paragraphs: [
          'When something goes wrong during surgery or intensive care, typed nursing summaries do not always tell the whole story. Fortunately, modern hospital software records an audit trail.',
          'The audit log tracks the exact second a nurse opened a chart, viewed lab values, or altered a note after the fact. That data creates an objective timeline of patient care.'
        ]
      }
    ],
    keyTakeaways: [
      'Always request the complete electronic audit trail, not just a printed chart summary.',
      'Vital sign monitoring logs show how staff responded to signs of distress.',
      'Consult credentialed medical specialists to evaluate standard of care.'
    ]
  },
  {
    slug: 'prenuptial-agreements-modern-marriage',
    title: 'How prenuptial agreements work and why couples use them',
    excerpt: 'Dispelling myths about premarital agreements and how they protect both partners.',
    date: 'July 14, 2026',
    readTime: '4 min read',
    practiceSlug: 'family-law',
    authorId: 'sophia-sterling',
    content: [
      {
        heading: 'Clarifying expectations early',
        paragraphs: [
          'Every married couple has a prenuptial agreement. It is either the one you wrote together, or the default state statutory rules applied to you by a judge if you ever divorce.',
          'A prenuptial agreement allows both partners to identify pre-existing assets, protect family businesses, and agree on fair spousal support terms while they are on good terms.'
        ]
      }
    ],
    keyTakeaways: [
      'Full financial disclosure by both partners is required for the agreement to hold up in court.',
      'Each person must have their own independent attorney.',
      'Sign the agreement well before the wedding day to avoid claims of duress.'
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2011',
    title: 'Firm founded by William Ashford Sr.',
    description: 'Started as an independent corporate practice in New York focused on plain-language contracts and upfront fee estimates.'
  },
  {
    year: '2015',
    title: 'Immigration and criminal defense practice added',
    description: 'Priya Nandan and Daniel Okoye joined the firm, adding federal visa filings and trial defense.'
  },
  {
    year: '2018',
    title: 'Medical law and healthcare practice established',
    description: 'Elena Rostova brought dual-degree clinical and bioethics litigation experience to handle negligence claims.'
  },
  {
    year: '2021',
    title: 'Fixed fees adopted across routine filings',
    description: 'Shifted standard business setup, visa petitions, and residential closings to transparent flat rates.'
  },
  {
    year: '2024',
    title: 'Over 900 client matters resolved',
    description: 'Recognized for client communication and practical advocacy across our core disciplines.'
  },
  {
    year: '2026',
    title: 'A unified six-discipline partnership',
    description: 'Six practice groups working together to give clients straightforward, accessible legal advice.'
  }
];

export const FIRM_VALUES: FirmValue[] = [
  {
    title: 'Upfront pricing',
    description: 'Direct fee quotes and written phase budgets so you never receive an invoice you did not expect.',
    icon: 'check'
  },
  {
    title: 'Plain language',
    description: 'Every recommendation is explained in words you understand, without Latin phrases or legal theatre.',
    icon: 'scale'
  },
  {
    title: 'Focused attorneys',
    description: 'You work with a lawyer who focuses exclusively on their discipline, not a generalist trying to cover everything.',
    icon: 'shield'
  },
  {
    title: 'Written plans',
    description: 'We put timelines and strategy in writing after your first consultation so you know what happens next.',
    icon: 'users'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a consultation cost?',
    answer: 'Initial consultations are free for most practice areas so you can understand your options before spending money. For complex corporate transaction reviews, we quote any audit fee in writing before we begin.'
  },
  {
    question: 'How soon will an attorney review my case?',
    answer: 'We review most inquiries and send a written assessment within two business days. Urgent criminal arraignments or active deportation hearings receive same-day priority.'
  },
  {
    question: 'Do you offer flat fees?',
    answer: 'Yes, wherever the work allows it. We use flat fees for company formations, visa filings, and property closings. You get an all-inclusive number with no hidden copy costs or administrative markups.'
  },
  {
    question: 'What happens after I send a message?',
    answer: 'An attorney who practices in that specific area reads your note and contacts you directly to set up a call. You do not get routed through a call center or intake screener.'
  },
  {
    question: 'Can we meet by video call?',
    answer: 'Yes. We routinely conduct secure video consultations for clients across the country and abroad.'
  },
  {
    question: 'How do you keep me updated on my case?',
    answer: 'We send written updates whenever a court deadline, agency filing, or milestone occurs, and you have direct email and phone access to the attorney handling your file.'
  }
];

export const TRUST_PHRASES = [
  'Free initial consultation',
  '48-hour case review',
  '900+ clients represented',
  'Six dedicated practice areas',
  'Upfront fee agreements',
  '15 years in practice'
];
