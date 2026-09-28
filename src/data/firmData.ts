import { PracticeArea, Attorney, CaseStudy, BlogPost, TimelineMilestone, FirmValue, FAQItem } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-law',
    name: 'Corporate Law',
    shortDesc: 'Formation, governance and contracts for growing businesses.',
    tagline: 'Strategic counsel for founders, partnerships, and evolving enterprises.',
    heroCopy: 'Whether incorporating your first venture or structuring a cross-border equity buyout, our corporate team delivers unambiguous legal architectures designed for operational clarity.',
    iconType: 'corporate',
    leadAttorneyId: 'william-ashford',
    feeStructure: 'Flat fees for standard entity formation & governance packages; transparent blended hourly rates for transactions and complex negotiations.',
    overview: [
      'We guide founders, private equity investors, and growing enterprises through the critical legal milestones that dictate long-term stability.',
      'Unlike massive corporate firms with bloated associate pyramids, you work directly with experienced partners who examine contracts with an entrepreneur’s sense of practical risk.',
      'From shareholder operating pacts to intellectual property licensing and vendor safeguards, we draft terms in plain language that protect your upside without derailing deal velocity.'
    ],
    capabilities: [
      'Entity formation (LLC, C-Corp, B-Corp) and cross-jurisdictional registration',
      'Founder vesting agreements, equity allocation, and cap-table hygiene',
      'Commercial contract drafting, vendor negotiations, and SaaS licensing',
      'Mergers, asset acquisitions, and growth equity financing counsel',
      'Corporate governance, board resolutions, and fiduciary compliance'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Structural Audit',
        description: 'We examine your company charter, current ownership covenants, and commercial exposure before proposing any drafting changes.'
      },
      {
        number: '02',
        title: 'Plain-Language Drafting',
        description: 'Every covenant is written to be executable by business managers, stripped of Latinate boilerplate and ambiguous dispute clauses.'
      },
      {
        number: '03',
        title: 'Direct Negotiation',
        description: 'Our lead corporate partners represent you at the bargaining table, protecting your core interests while keeping counterparties aligned.'
      },
      {
        number: '04',
        title: 'Ongoing Governance',
        description: 'We set up repeatable compliance cadences, annual board minutes, and filing checklists to ensure regulatory resilience.'
      }
    ],
    relatedCaseStudyIds: ['cs-cross-border-merger', 'cs-saas-vendor-licensing']
  },
  {
    id: 'immigration-law',
    name: 'Immigration Law',
    shortDesc: 'Visas, residency and citizenship handled with patience.',
    tagline: 'Clear, compassionate pathways through complex immigration systems.',
    heroCopy: 'Navigating federal immigration agencies requires meticulous documentary evidence and relentless follow-through. We handle employment visas, family petitions, and naturalization with thorough care.',
    iconType: 'immigration',
    leadAttorneyId: 'priya-nandan',
    feeStructure: '100% transparent flat fees established before filing. No surprise administrative add-ons or billing surprises.',
    overview: [
      'Federal immigration law is notorious for bureaucratic friction and shifting administrative criteria. We provide families and businesses with a calm, orderly path forward.',
      'Our immigration practice specializes in employment-based visas (O-1, H-1B, L-1, EB-1), family reunification petitions, lawful permanent residence, and naturalization.',
      'Every petition packet undergoes a dual-attorney audit prior to submission to eliminate evidentiary deficiencies and avoid costly Requests for Evidence (RFEs).'
    ],
    capabilities: [
      'Employment visas for exceptional talent, tech founders, and specialized executives (O-1, EB-1, EB-2 NIW)',
      'Family-based immigrant petitions, marriage green cards, and adjustment of status',
      'Corporate immigration compliance, PERM labor certifications, and I-9 audit readiness',
      'Citizenship, naturalization hearings, and complex continuous residency exceptions',
      'Consular processing representation and expedited waiver requests'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Documentary Evaluation',
        description: 'We review employment records, publications, family ties, and prior immigration history to identify the strongest statutory route.'
      },
      {
        number: '02',
        title: 'Evidence Architecture',
        description: 'We compile comprehensive, cross-indexed exhibit binders and expert testimonial letters that preempt adjudicator skepticism.'
      },
      {
        number: '03',
        title: 'Expedited Filing & Tracking',
        description: 'Petitions are filed electronically with immediate priority tracking, accompanied by direct attorney receipt notices.'
      },
      {
        number: '04',
        title: 'Interview Preparation',
        description: 'We conduct full simulation interviews with you and family members, ensuring complete confidence before entering USCIS field offices.'
      }
    ],
    relatedCaseStudyIds: ['cs-eb1-extraordinary-ability', 'cs-family-residency-waiver']
  },
  {
    id: 'real-estate-law',
    name: 'Real Estate Law',
    shortDesc: 'Transactions, leases and disputes over property.',
    tagline: 'Protecting capital, titles, and property boundaries with rigorous title oversight.',
    heroCopy: 'Whether negotiating a commercial ground lease, closing a luxury residential acquisition, or resolving a municipal zoning easement, we safeguard your property rights at every closing table.',
    iconType: 'real-estate',
    leadAttorneyId: 'marcus-vance',
    feeStructure: 'Predetermined closing fee packages for acquisitions; transparent hourly rates for land use, boundary disputes, and commercial lease drafting.',
    overview: [
      'Real estate investments represent foundational assets. A single defective title covenant or unexamined environmental easement can tie up capital for years.',
      'We represent commercial developers, commercial tenants, family offices, and private buyers through acquisitions, disposals, financing, and municipal zoning permits.',
      'Our team scrutinizes title insurance commitments, municipal permits, and environmental surveys with meticulous precision so closing day is calm and routine.'
    ],
    capabilities: [
      'Commercial purchase and sale agreements (office, retail, multi-family, industrial)',
      'High-value residential purchases, escrow management, and title curative actions',
      'Commercial lease review, subleases, assignment rights, and landlord-tenant negotiations',
      'Zoning variances, land development entitlements, and municipal planning approvals',
      'Boundary disputes, prescriptive easements, and quiet title litigation'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Title & Survey Examination',
        description: 'We drill into municipal records, encumbrances, setback restrictions, and title commitments before earnest money becomes non-refundable.'
      },
      {
        number: '02',
        title: 'Contract Fortification',
        description: 'We rewrite customary boilerplate contingencies to protect financing outs, environmental inspection timelines, and representations.'
      },
      {
        number: '03',
        title: 'Closing Table Escrow Oversight',
        description: 'Funds and deeds are verified through independent escrow accounts with verified payoffs and title endorsements in place.'
      },
      {
        number: '04',
        title: 'Post-Closing Perfection',
        description: 'We ensure immediate deed recordation, title policy issuance, and tenant estoppel deliveries.'
      }
    ],
    relatedCaseStudyIds: ['cs-mixed-use-zoning-entitlement']
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law',
    shortDesc: 'Defense built carefully on the facts of the record.',
    tagline: 'Disciplined, constitutional defense when your freedom and reputation are on the line.',
    heroCopy: 'In criminal proceedings, the prosecution’s timeline is rarely the whole truth. We deconstruct evidence, challenge illegal searches, and hold the state strictly to its burden of proof.',
    iconType: 'criminal',
    leadAttorneyId: 'daniel-okoye',
    feeStructure: 'Structured tiered flat fees covering pre-charge investigation, preliminary hearings, and trial defense. Written fee clarity from day one.',
    overview: [
      'Being accused of a criminal offense is deeply destabilizing. We bring immediate clarity and fierce advocacy to safeguard your constitutional rights.',
      'We handle white-collar allegations, federal investigations, serious vehicular charges, and state felony matters with relentless evidentiary discipline.',
      'We do not simply negotiate hasty pleas; our reputation with prosecutors rests on our willingness to dismantle faulty police reports and file substantive suppression motions.'
    ],
    capabilities: [
      'White-collar criminal defense, corporate fraud allegations, and regulatory compliance',
      'Fourth Amendment constitutional suppression motions and unlawful search challenges',
      'Pre-indictment government intervention and grand jury representation',
      'Felony and misdemeanor defense in state and federal district courts',
      'Post-conviction record expungement and professional license preservation'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Immediate Evidentiary Preservation',
        description: 'Within hours of retention, we issue formal preservation subpoenas for body camera footage, digital surveillance, and witness testimonies.'
      },
      {
        number: '02',
        title: 'Constitutional Challenge',
        description: 'We systematically scrutinize search warrants and interrogation tactics to file aggressive motions to dismiss tainted evidence.'
      },
      {
        number: '03',
        title: 'Independent Forensic Review',
        description: 'We work with recognized forensic, digital, and financial analysts to counter the state’s forensic narrative.'
      },
      {
        number: '04',
        title: 'Trial-Ready Posture',
        description: 'Every case is prepared as if going to trial before a jury, providing optimal leverage in settlement discussions or courtroom battles.'
      }
    ],
    relatedCaseStudyIds: ['cs-wire-fraud-acquittal']
  },
  {
    id: 'medical-law',
    name: 'Medical Law',
    shortDesc: 'Where clinical fact meets legal obligation.',
    tagline: 'Bridging complex clinical medicine and legal standards of care with integrity.',
    heroCopy: 'Medical disputes demand a rare dual literacy: the ability to dissect dense hospital charting and the courtroom skill to translate clinical negligence into compelling advocacy.',
    iconType: 'medical',
    leadAttorneyId: 'elena-rostova',
    feeStructure: 'Contingency fee basis for serious personal injury and medical negligence (no legal fees unless we recover damages); hourly for provider regulatory defense.',
    overview: [
      'When clinical standards are breached or catastrophic injuries occur, patients and families deserve straightforward answers, not medical jargon or institutional deflection.',
      'Our medical law practice represents individuals suffering from severe surgical errors, misdiagnosis, pharmaceutical harm, as well as healthcare providers facing credentialing inquiries.',
      'We maintain an active network of board-certified physician consultants and life-care planners who verify the validity of every claim before proceeding.'
    ],
    capabilities: [
      'Complex surgical error and hospital negligence investigation',
      'Diagnostic failure and delayed oncology intervention claims',
      'Catastrophic birth injury and neonatal standard-of-care claims',
      'Life-care cost calculation and future medical economic recovery',
      'Medical professional licensing defense before state regulatory boards'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Complete Charting Audit',
        description: 'We obtain and index every page of electronic health records, nursing flow sheets, and telemetry logs, checking for retrospective edits.'
      },
      {
        number: '02',
        title: 'Independent Medical Review',
        description: 'Neutral, board-certified medical specialists review the timeline to determine whether clinical deviation caused tangible harm.'
      },
      {
        number: '03',
        title: 'Actuarial Economic Assessment',
        description: 'We work with forensic economists to project long-term medical care costs, lost earning capacity, and physical rehabilitation expenses.'
      },
      {
        number: '04',
        title: 'Trial Presentation',
        description: 'We utilize state-of-the-art medical animation and timeline exhibits to convey intricate physiological facts clearly to juries.'
      }
    ],
    relatedCaseStudyIds: ['cs-workplace-surgical-settlement']
  },
  {
    id: 'family-law',
    name: 'Family Law',
    shortDesc: 'Custody, support and separation, argued with care.',
    tagline: 'Protecting children and personal balance during life’s most vulnerable transitions.',
    heroCopy: 'Family legal disputes are not merely transactions; they shape how your children grow up and how your future financial independence is structured. We advocate with emotional intelligence and unwavering firmness.',
    iconType: 'family',
    leadAttorneyId: 'sophia-sterling',
    feeStructure: 'Clear initial retainer agreements with itemized monthly accountings down to the minute. No vague block-billing.',
    overview: [
      'We believe family law requires a balanced demeanor: cooperative when resolving marital estates peacefully, yet unyielding when protecting parental rights or hiding marital assets.',
      'We represent clients in high-net-worth divorce, child custody determinations, premarital agreements, and complex asset division involving private businesses and stock options.',
      'Our priority is always shielding children from adversarial trauma while ensuring our clients receive a fair, dignified settlement.'
    ],
    capabilities: [
      'High-net-worth marital dissolution and private business valuation',
      'Child custody arrangements, parenting time schedules, and relocation disputes',
      'Premarital and postmarital asset protection agreements (prenups)',
      'Spousal support calculations, modification petitions, and post-decree enforcement',
      'Collaborative divorce mediation and private dispute resolution'
    ],
    approachSteps: [
      {
        number: '01',
        title: 'Asset & Parenting Blueprint',
        description: 'We conduct a confidential review of marital holdings, real estate, debts, and child developmental needs.'
      },
      {
        number: '02',
        title: 'Collaborative Settlement Framework',
        description: 'We propose realistic, sensible distribution models designed to resolve matters without high-conflict courtroom drama.'
      },
      {
        number: '03',
        title: 'Forensic Accounting',
        description: 'If assets or income streams are concealed, we deploy forensic financial investigators to trace accounts and verify fair valuations.'
      },
      {
        number: '04',
        title: 'Decree Enforcement',
        description: 'We structure finalized court orders with precise enforcement provisions to safeguard your rights well into the future.'
      }
    ],
    relatedCaseStudyIds: ['cs-high-net-worth-dissolution']
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'william-ashford',
    name: 'William Ashford Sr.',
    role: 'Founding Partner — Corporate & Real Estate',
    shortSpecialty: 'Corporate governance, commercial real estate, and strategic advisory.',
    portraitStyle: 'founder',
    credentials: ['Bar Admitted 2009', 'Corporate Law Specialist', 'Chambers Recognized'],
    bio: [
      'William Ashford Sr. founded Jurista Law on the core premise that legal counsel should clarify business reality rather than obscure it behind prohibitive jargon and bloated retainers.',
      'Over sixteen years of practice, William has counseled more than 400 corporate leaders, mid-market founders, and real estate developers through debt-equity reorganizations, commercial acquisitions, and multi-tenant leases.',
      'He serves as outside general counsel to multiple regional tech scale-ups and manufacturing concerns, maintaining an active desk at the intersection of contract architecture and executive governance.'
    ],
    philosophyQuote: 'Clients deserve to understand exactly what’s happening in their case — not just be told to trust us.',
    practices: ['corporate-law', 'real-estate-law'],
    email: 'w.ashford@jurista.com',
    phone: '+2 011 611-4574',
    barAdmissions: ['State Bar of New York (2009)', 'U.S. District Court, Southern District of NY (2011)'],
    education: ['J.D., Columbia Law School, Harlan Fiske Stone Scholar', 'B.A. in Philosophy & Economics, Cornell University']
  },
  {
    id: 'priya-nandan',
    name: 'Priya Nandan',
    role: 'Senior Associate — Immigration Law',
    shortSpecialty: 'Employment visas, extraordinary ability petitions, and family naturalization.',
    portraitStyle: 'associate-priya',
    credentials: ['Bar Admitted 2014', 'Immigration Bar Liaison', 'AILA Member'],
    bio: [
      'Priya Nandan leads Jurista Law’s immigration practice with patience, documentary rigor, and personal empathy. Having guided hundreds of researchers, tech engineers, and separated families through federal bureaucracy, she knows that behind every receipt number is a human life.',
      'She is known among clients for her exhaustive evidentiary compilations that consistently secure first-round approvals for O-1 and EB-1 petitions without burdensome agency requests for evidence.',
      'Priya frequently lectures on international talent mobility and conducts pro bono naturalization clinics for community members across the metropolitan area.'
    ],
    philosophyQuote: 'Immigration is not paperwork — it is the legal architecture of a family’s or a founder’s entire future.',
    practices: ['immigration-law'],
    email: 'p.nandan@jurista.com',
    phone: '+2 011 611-4575',
    barAdmissions: ['State Bar of California (2014)', 'American Immigration Lawyers Association (2015)'],
    education: ['J.D., UC Berkeley School of Law', 'B.S. in International Relations, Georgetown University']
  },
  {
    id: 'daniel-okoye',
    name: 'Daniel Okoye',
    role: 'Senior Associate — Criminal Defense',
    shortSpecialty: 'White-collar investigations, constitutional suppression, and trial advocacy.',
    portraitStyle: 'associate-daniel',
    credentials: ['Bar Admitted 2015', 'Former Federal Defender', 'NACDL Fellow'],
    bio: [
      'Daniel Okoye is a trial attorney who approaches every criminal indictment with quiet, methodical precision. Prior to joining Jurista Law, Daniel served as an assistant federal public defender where he tried twenty-two jury trials to verdict.',
      'Daniel’s work focuses on Fourth Amendment suppression motions, complex financial fraud inquiries, and defending individuals facing serious state and federal prosecutions.',
      'Colleagues and judges respect his candid, fact-focused courtroom presence. Daniel avoids theatrical bluster, choosing instead to systematically dismantle weak prosecution witnesses with the recorded facts.'
    ],
    philosophyQuote: 'A defense is not built on speeches. It is built on preserving evidence that the government overlooked.',
    practices: ['criminal-law'],
    email: 'd.okoye@jurista.com',
    phone: '+2 011 611-4576',
    barAdmissions: ['State Bar of Illinois (2015)', 'U.S. Court of Appeals for the Seventh Circuit (2017)'],
    education: ['J.D., Northwestern University Pritzker School of Law', 'B.A. in Criminology, University of Michigan']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Partner — Medical Law & Complex Healthcare',
    shortSpecialty: 'Clinical standard of care, catastrophic surgical injury, and healthcare licensing.',
    portraitStyle: 'partner-elena',
    credentials: ['Bar Admitted 2012', 'Dual Degree J.D. / M.S.', 'Trial Lawyers Ass’n'],
    bio: [
      'Elena Rostova brings an analytical medical background to her litigation practice, holding a master’s degree in bioethics alongside her law degree. Her practice focuses on representing patients and families affected by major clinical lapses.',
      'She is renowned for her ability to cross-examine hospital risk managers and defense expert physicians on the fine points of electronic medical telemetry and hospital medication administration protocols.',
      'Elena has secured over $42 million in structured settlements and verdicts, ensuring lifelong clinical and rehabilitative security for injured clients.'
    ],
    philosophyQuote: 'The law cannot undo physical harm, but it can ensure that medical realities are acknowledged and long-term care is fully funded.',
    practices: ['medical-law'],
    email: 'e.rostova@jurista.com',
    phone: '+2 011 611-4577',
    barAdmissions: ['State Bar of New York (2012)', 'State Bar of New Jersey (2013)'],
    education: ['J.D. & M.S. in Bioethics, University of Pennsylvania', 'B.S. in Neuroscience, Johns Hopkins University']
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Senior Associate — Real Estate & Land Use',
    shortSpecialty: 'Zoning approvals, commercial transactions, and property title defense.',
    portraitStyle: 'associate-marcus',
    credentials: ['Bar Admitted 2016', 'Urban Land Institute', 'Real Property Section'],
    bio: [
      'Marcus Vance represents commercial property developers, real estate investment trusts, and private owners across mixed-use acquisitions, lease structuring, and municipal variance hearings.',
      'His background in municipal planning prior to law school provides clients with an insider understanding of how regional zoning boards, environmental review agencies, and historical commissions evaluate land entitlements.',
      'Marcus has successfully navigated contentious land-use appeals and negotiated commercial lease packages exceeding two million square feet of retail and light-industrial space.'
    ],
    philosophyQuote: 'Every square foot of real estate comes with legal covenants. Our job is to know every one before you ink the deed.',
    practices: ['real-estate-law'],
    email: 'm.vance@jurista.com',
    phone: '+2 011 611-4578',
    barAdmissions: ['State Bar of Massachusetts (2016)', 'State Bar of New York (2018)'],
    education: ['J.D., Boston College Law School', 'B.S. in Urban Planning, MIT']
  },
  {
    id: 'sophia-sterling',
    name: 'Sophia Sterling',
    role: 'Senior Associate — Family Law & Mediation',
    shortSpecialty: 'High-net-worth divorce, complex asset distribution, and child custody.',
    portraitStyle: 'associate-sophia',
    credentials: ['Bar Admitted 2017', 'Certified Family Mediator', 'AAML Fellow'],
    bio: [
      'Sophia Sterling leads family law and mediation matters with emotional steadiness, strategic discretion, and rigorous financial analysis. She routinely handles marital dissolutions involving family trusts, equity options, and private enterprise holdings.',
      'Sophia believes that family conflicts should not be monetized through needless courtroom warfare. She strives to achieve sensible, enforceable settlements through structured mediation whenever possible.',
      'When high-conflict situations or asset concealment arise, however, Sophia advocates forcefully to protect her client’s financial sovereignty and child custody rights.'
    ],
    philosophyQuote: 'A successful family law outcome leaves clients prepared for their next chapter with dignity and financial stability.',
    practices: ['family-law'],
    email: 's.sterling@jurista.com',
    phone: '+2 011 611-4579',
    barAdmissions: ['State Bar of Texas (2017)', 'Certified Family Law Arbitrator (2020)'],
    education: ['J.D., University of Texas School of Law', 'B.A. in Psychology, Vanderbilt University']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-workplace-surgical-settlement',
    title: 'Securing a Fair Settlement After a Complex Surgical Error',
    practiceSlug: 'medical-law',
    outcomeSummary: 'Overcame hospital liability denial to achieve a $3.4M comprehensive settlement covering lifetime rehabilitative care.',
    summaryStats: {
      timeline: '8 Months',
      outcome: 'Full $3.4M Recovery',
      practice: 'Medical Law'
    },
    clientContext: 'A 42-year-old logistics supervisor suffered nerve damage and respiratory trauma due to unmonitored anesthesia during routine spinal surgery.',
    situation: [
      'The client entered an outpatient surgical center for an elective microdiscectomy. Following the procedure, inadequate recovery room monitoring led to undetected airway constriction and localized neurological impairment.',
      'The regional hospital system’s risk management team immediately denied responsibility, alleging the client had undisclosed pre-existing metabolic vulnerabilities that caused the neurological deficit.'
    ],
    approach: [
      'Elena Rostova initiated an immediate audit of raw hospital telemetry data, discovering an unrecorded seventeen-minute gap in vital sign monitoring by recovery room nursing staff.',
      'We engaged two independent board-certified anesthesiologists who demonstrated that basic hospital monitoring standards had been abandoned during a nursing shift change.',
      'Rather than accepting an initial nominal settlement offer, we drafted an extensive trial mediation brief accompanied by an actuarial life-care model illustrating future medical expenses.'
    ],
    outcome: [
      'Faced with irrefutable telemetry discrepancies and our trial-ready posture, the hospital insurer agreed to mediation without forcing our client through prolonged trial trauma.',
      'The case concluded with a $3,400,000 settlement structured in an annuity trust to cover all ongoing physical therapy, adaptive home equipment, and lost household earnings.'
    ],
    clientQuote: {
      quote: 'From the first call, I understood exactly where I stood — no guesswork, no waiting around. Elena treated my family with genuine respect and fought for what we actually needed.',
      author: 'Jonathan Sterling',
      roleOrTitle: 'Medical Law Client'
    },
    leadAttorneyId: 'elena-rostova'
  },
  {
    id: 'cs-eb1-extraordinary-ability',
    title: 'EB-1 Extraordinary Ability Green Card for Artificial Intelligence Researcher',
    practiceSlug: 'immigration-law',
    outcomeSummary: 'First-round USCIS approval without RFE for a leading machine learning scientist facing tight visa expiration deadlines.',
    summaryStats: {
      timeline: '4 Months',
      outcome: 'Approval (Zero RFEs)',
      practice: 'Immigration Law'
    },
    clientContext: 'A senior computer vision researcher from South America whose existing O-1 visa was nearing its statutory cap.',
    situation: [
      'The client held numerous citations and patents in autonomous neural perception, but their previous firm had assembled disorganized documentation resulting in high agency skepticism.',
      'With less than five months before their authorized stay expired, the researcher needed an airtight EB-1A self-petition to secure permanent residency without relying on corporate sponsor whims.'
    ],
    approach: [
      'Priya Nandan conducted a line-by-line review of the client’s academic citations, peer-review invitations, and contributions to open-source foundation models.',
      'We secured six independent expert letters from global research chairs at Oxford, Stanford, and the Max Planck Institute, each drafted to address USCIS Kazarian evidentiary benchmarks.',
      'The petition was compiled into a structured 380-page exhibit binder with cross-referenced indices clearly proving original contributions of major significance.'
    ],
    outcome: [
      'USCIS approved the EB-1A petition within 12 business days of premium processing receipt without issuing a Request for Evidence.',
      'The client and their spouse received their lawful permanent resident cards three months later, giving them permanent freedom to found their own research lab.'
    ],
    clientQuote: {
      quote: 'They walked me through every option before I had to decide anything. I never felt rushed, and Priya knew the technical nuances of my work as well as my peers did.',
      author: 'Amara Reyes',
      roleOrTitle: 'Immigration Case'
    },
    leadAttorneyId: 'priya-nandan'
  },
  {
    id: 'cs-cross-border-merger',
    title: 'Cross-Border Tech Acquisition and IP Assignment Structure',
    practiceSlug: 'corporate-law',
    outcomeSummary: 'Structured an $18M asset buyout across US and European subsidiaries, preserving enterprise valuation and key employee vesting.',
    summaryStats: {
      timeline: '5 Months',
      outcome: '$18M Asset Buyout',
      practice: 'Corporate Law'
    },
    clientContext: 'A high-growth enterprise software provider acquired by an international communications conglomerate.',
    situation: [
      'The founders had received multiple competing term sheets, but the acquirer’s initial agreement contained onerous indemnity holdbacks and ambiguous non-compete covenants that would have paralyzed the founders from future work.',
      'Additionally, open-source license audits revealed potential contamination in two core algorithmic components that threatened to derail closing.'
    ],
    approach: [
      'William Ashford Sr. stepped in as lead transaction counsel, rewriting the purchase agreement to replace the uncapped indemnity clause with a capped escrow indemnification backed by representation and warranty insurance.',
      'We executed clean IP assignment cure agreements with former contractors across three countries, eliminating the software licensing objection.',
      'Our team structured tax-efficient earnout tranches tied to verifiable ARR metrics rather than subjective management discretion.'
    ],
    outcome: [
      'The deal closed smoothly on schedule at the full $18,000,000 purchase price with zero post-closing escrow disputes.',
      'The founders retained 100% of their equity upside with plain-language vesting acceleration upon change of control.'
    ],
    clientQuote: {
      quote: 'No surprises, no jargon — just a clear plan we could actually execute on. William kept the acquirer’s attorneys from bogging down the entire company in needless legal sand.',
      author: 'Michael Chen',
      roleOrTitle: 'Corporate Client'
    },
    leadAttorneyId: 'william-ashford'
  },
  {
    id: 'cs-mixed-use-zoning-entitlement',
    title: 'Municipal Zoning Variance and Historic Easement Approval',
    practiceSlug: 'real-estate-law',
    outcomeSummary: 'Secured full planning board clearance for a 48-unit residential conversion of a historic mill property.',
    summaryStats: {
      timeline: '7 Months',
      outcome: 'Unanimous Variance Approval',
      practice: 'Real Estate Law'
    },
    clientContext: 'A regional urban revitalization developer encountering neighborhood zoning appeals and historic commission moratoriums.',
    situation: [
      'The developer sought to convert an underutilized 19th-century manufacturing mill into transit-oriented loft housing. Vocal community opposition threatened to trigger an indefinite statutory zoning delay.'
    ],
    approach: [
      'Marcus Vance spearheaded negotiations with the municipal planning council, drafting a binding community benefits agreement that set aside 20% workforce housing while protecting architectural facade integrity.',
      'We conducted detailed traffic impact and stormwater easement surveys that directly rebutted the opposition’s technical complaints.'
    ],
    outcome: [
      'The municipal zoning board of appeals granted unanimous entitlement clearance, enabling the client to break ground on time without appellate court intervention.'
    ],
    leadAttorneyId: 'marcus-vance'
  },
  {
    id: 'cs-wire-fraud-acquittal',
    title: 'Complete Dismissal of Federal Wire Fraud Allegations',
    practiceSlug: 'criminal-law',
    outcomeSummary: 'Conducted forensic audit proving lack of fraudulent intent; prosecution agreed to formal voluntary dismissal.',
    summaryStats: {
      timeline: '9 Months',
      outcome: 'Full Pre-Trial Dismissal',
      practice: 'Criminal Law'
    },
    clientContext: 'A corporate chief financial officer targeted in an interstate supplier invoice overpayment investigation.',
    situation: [
      'Federal prosecutors served target letters alleging our client had knowingly approved falsified vendor billing statements totaling $1.2M.'
    ],
    approach: [
      'Daniel Okoye intervened prior to grand jury indictment, securing complete internal server emails and financial logs that demonstrated our client had in fact flagged the billing anomalies to external auditors months earlier.',
      'We presented a comprehensive defense proffer to the United States Attorney’s Office demonstrating complete lack of scienter and supervisory good faith.'
    ],
    outcome: [
      'The federal prosecutor’s office officially closed the inquiry with zero charges filed against our client, completely protecting their professional reputation.'
    ],
    leadAttorneyId: 'daniel-okoye'
  },
  {
    id: 'cs-high-net-worth-dissolution',
    title: 'Equitable Separation of Multi-Asset Family Trust and Business Holding',
    practiceSlug: 'family-law',
    outcomeSummary: 'Settled complex $14M marital estate via collaborative mediation without contentious trial publicity.',
    summaryStats: {
      timeline: '6 Months',
      outcome: 'Private Mediated Decree',
      practice: 'Family Law'
    },
    clientContext: 'Spouse of a private equity partner negotiating marital division involving illiquid carry allocations and multiple properties.',
    situation: [
      'The opposing counsel initially attempted to value the partnership carry interests at zero, arguing they were purely speculative future expectations.'
    ],
    approach: [
      'Sophia Sterling retained forensic valuation experts to benchmark historical carried interest disbursements and structured a clean deferred sharing mechanism.',
      'Sophia guided the parties through confidential mediation sessions that kept sensitive financial disclosures out of public court dockets.'
    ],
    outcome: [
      'Both parties signed a balanced separation decree ensuring equitable asset distribution, fully funded children’s educational trusts, and mutual non-disparagement agreements.'
    ],
    leadAttorneyId: 'sophia-sterling'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'transparent-fee-structures-law-firm',
    title: 'Why Hourly Billing Incentivizes the Wrong Outcomes in Law',
    excerpt: 'How upfront fee certainty aligns attorney incentives with swift, definitive resolution rather than protracted procedural posturing.',
    date: 'September 18, 2026',
    readTime: '5 min read',
    practiceSlug: 'corporate-law',
    authorId: 'william-ashford',
    isFeatured: true,
    content: [
      {
        heading: 'The Flaw in the Traditional Clock',
        paragraphs: [
          'For nearly a century, the billable hour has been the standard currency of American jurisprudence. On paper, it appears objective: pay for the time an attorney devotes to your matter.',
          'In practice, however, hourly billing creates an unmistakable moral hazard. It rewards inefficiency, encourages thirty-page memos when a three-paragraph email would suffice, and penalizes the experienced partner who solves a crisis in fifteen minutes because they’ve handled it for twenty years.'
        ]
      },
      {
        heading: 'Pricing Outcomes, Not Elapsed Time',
        paragraphs: [
          'When we founded Jurista Law, we deliberately structured our firm to eliminate billing surprises. For defined matters — entity formation, immigration petitions, residential closings, and mediation — we quote flat, all-inclusive fees upfront.',
          'When hourly engagements are strictly necessary, such as active courtroom trials, we provide binding monthly phase caps and plain-English statements of work so you never open an invoice in disbelief.'
        ]
      },
      {
        heading: 'What Clients Should Expect',
        paragraphs: [
          'A modern legal partnership should be grounded in predictability. You should always know who is working on your file, what step is next, and what that step will cost before the work begins.'
        ]
      }
    ],
    keyTakeaways: [
      'Hourly billing intrinsically penalizes speed and technical efficiency.',
      'Flat-fee structures provide budgetary certainty for founders and families.',
      'Clients should always demand itemized phase budgets before signing retainers.'
    ]
  },
  {
    slug: 'eb1a-kazarian-framework-guide',
    title: 'Demystifying the EB-1A Visa: Navigating the Kazarian Two-Step Audit',
    excerpt: 'A practical breakdown of how USCIS adjudicators evaluate extraordinary ability petitions and how to compile irrefutable peer evidence.',
    date: 'September 04, 2026',
    readTime: '7 min read',
    practiceSlug: 'immigration-law',
    authorId: 'priya-nandan',
    content: [
      {
        heading: 'Beyond the Ten Regulatory Criteria',
        paragraphs: [
          'Many applicants believe that satisfying three of the ten regulatory criteria guarantees an EB-1A approval. In reality, under the landmark Kazarian v. USCIS precedent, adjudicators apply a strict two-step determination.',
          'Step one checks the numerical criteria; step two is a subjective "final merits determination" asking whether the petitioner has risen to the very top of their endeavor.'
        ]
      },
      {
        heading: 'Crafting Independent Expert Testimony',
        paragraphs: [
          'Adjudicators discount generic letters of praise from close colleagues. We focus on securing testimonials from recognized global figures who have never met the petitioner but utilize their published methodologies in practice.'
        ]
      }
    ],
    keyTakeaways: [
      'Documentary evidence must demonstrate tangible industry-wide impact.',
      'Independent citations outweigh raw publication counts.',
      'Dual-attorney petition audits reduce RFE issuance rates dramatically.'
    ]
  },
  {
    slug: 'commercial-lease-pitfalls-tenants',
    title: 'Five Hidden Covenants in Commercial Leases That Cost Tenants Thousands',
    excerpt: 'From CAM expense escalations to restoration liabilities, here is what retail and office tenants must negotiate before signing.',
    date: 'August 22, 2026',
    readTime: '6 min read',
    practiceSlug: 'real-estate-law',
    authorId: 'marcus-vance',
    content: [
      {
        heading: 'The Danger of Vague Common Area Maintenance (CAM)',
        paragraphs: [
          'Landlords frequently include capital improvements and structural roof repairs in annual CAM pass-throughs. Commercial tenants should strictly cap annual controllable operating expenses at no more than 3% to 5%.'
        ]
      },
      {
        heading: 'Sublease and Assignment Freedoms',
        paragraphs: [
          'If your business pivots or requires downsizing, your lease should allow reasonable assignment rights without the landlord retaining unreasonable recapture or profit-skimming powers.'
        ]
      }
    ],
    keyTakeaways: [
      'Cap annual CAM escalations to controllable operational line items.',
      'Audit landlord restoration and surrender obligations prior to occupancy.',
      'Negotiate early termination rights tied to co-tenancy thresholds.'
    ]
  },
  {
    slug: 'fourth-amendment-digital-searches',
    title: 'The Constitution and Your Smartphone: Modern Fourth Amendment Limits',
    excerpt: 'Examining recent appellate court precedents on mobile device searches at borders and during routine traffic stops.',
    date: 'August 10, 2026',
    readTime: '5 min read',
    practiceSlug: 'criminal-law',
    authorId: 'daniel-okoye',
    content: [
      {
        heading: 'The Digital Persona',
        paragraphs: [
          'The Supreme Court’s decision in Riley v. California recognized that modern smartphones are not simple physical containers like wallets; they hold the intimate sum of a citizen’s private life.',
          'Law enforcement officers cannot search your phone during an arrest without an independent, particularized search warrant issued by a neutral magistrate.'
        ]
      }
    ],
    keyTakeaways: [
      'Password protections offer stronger legal barriers than biometric unlocks.',
      'Never consent to voluntary device inspection without legal counsel present.',
      'Warrantless digital seizures remain subject to immediate suppression motions.'
    ]
  },
  {
    slug: 'hospital-records-medical-litigation',
    title: 'How Electronic Medical Records (EMRs) Reveal the Truth in Negligence Claims',
    excerpt: 'Audit trails and audit logs frequently tell a very different story than the typed narrative summaries in patient charts.',
    date: 'July 28, 2026',
    readTime: '6 min read',
    practiceSlug: 'medical-law',
    authorId: 'elena-rostova',
    content: [
      {
        heading: 'The Power of the EMR Metadata Audit Trail',
        paragraphs: [
          'When medical mishaps occur, hospital staff sometimes add retrospective entries to justify treatment decisions. Modern hospital software, however, logs every keystroke, view, and modification with microsecond timestamps.'
        ]
      }
    ],
    keyTakeaways: [
      'Demand raw EMR metadata audit trails, not merely printed PDF charts.',
      'Telemetry alarms often provide objective timelines of patient distress.',
      'Life-care plans must be calculated by credentialed medical actuaries.'
    ]
  },
  {
    slug: 'prenuptial-agreements-modern-marriage',
    title: 'Why Modern Prenuptial Agreements Are an Exercise in Financial Transparency',
    excerpt: 'Dispelling the myth that prenups signify distrust. How healthy couples use legal clarity to build stronger partnerships.',
    date: 'July 14, 2026',
    readTime: '4 min read',
    practiceSlug: 'family-law',
    authorId: 'sophia-sterling',
    content: [
      {
        heading: 'Reframing the Marital Contract',
        paragraphs: [
          'Every married couple has a prenuptial agreement — it is either the one they intentionally drafted together, or the default state statutory code imposed upon them by a judge in the event of separation.'
        ]
      }
    ],
    keyTakeaways: [
      'Full, voluntary financial disclosure is essential to enforceability.',
      'Each party must have independent legal representation.',
      'Agreements should be executed well in advance of the wedding date.'
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2011',
    title: 'Firm Founded by William Ashford Sr.',
    description: 'Established as an independent boutique in Manhattan focusing on transparent corporate counsel and plain-language client agreements.'
  },
  {
    year: '2015',
    title: 'Expansion into Immigration & Criminal Defense',
    description: 'Joined by Priya Nandan and Daniel Okoye, adding federal immigration and trial-tested criminal defense to our core practice.'
  },
  {
    year: '2018',
    title: 'Establishment of Healthcare & Medical Law Desk',
    description: 'Elena Rostova brings specialized dual-degree medical litigation expertise, handling complex standard-of-care cases.'
  },
  {
    year: '2021',
    title: 'Launch of Upfront Fixed-Fee Guarantee',
    description: 'Transitioned all standard business formation, estate, and immigration petitions to 100% transparent flat fees.'
  },
  {
    year: '2024',
    title: 'Surpassing 900+ Matters Resolved',
    description: 'Recognized by regional bar associations for maintaining a 98% client satisfaction rate and industry-leading transparency standards.'
  },
  {
    year: '2026',
    title: 'A Unified Multi-Practice Partnership',
    description: 'Six specialized disciplines working under one collaborative roof, providing balanced, plain-language advocacy for clients worldwide.'
  }
];

export const FIRM_VALUES: FirmValue[] = [
  {
    title: 'Transparency',
    description: 'Direct attorney access, written timelines, and upfront pricing wherever a practice area allows.',
    icon: 'check'
  },
  {
    title: 'Accessibility',
    description: 'Plain-language legal counsel without Latinate jargon or condescending theatrics.',
    icon: 'scale'
  },
  {
    title: 'Specialization',
    description: 'Dedicated attorneys who focus on their specific practice area exclusively, not generalists spread thin.',
    icon: 'shield'
  },
  {
    title: 'Accountability',
    description: 'Every recommendation is documented with clear reasoning and a concrete plan to move forward.',
    icon: 'users'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a consultation cost?',
    answer: 'Initial consultations are free for most practice areas, so you can understand your options before committing to anything. For complex corporate transaction reviews, we quote any preliminary audit fee in writing before you spend a single dollar.'
  },
  {
    question: 'How soon will someone review my case?',
    answer: 'Most inquiries receive a written case review within 48 hours of your consultation. Urgent criminal arraignments or active deportation filings receive immediate priority same-day response.'
  },
  {
    question: 'Do you offer flat fees?',
    answer: 'Where the practice area allows it — immigration and real estate matters, for example — we quote flat fees upfront. There are no hidden printing charges, surprise filing fee markups, or vague billing blocks.'
  },
  {
    question: 'What happens after I submit an inquiry?',
    answer: 'An attorney in the relevant practice area reaches out directly to schedule your consultation — no call center, no routing. You speak directly with the lawyer who would handle your file.'
  },
  {
    question: 'Can I consult with an attorney remotely via video conference?',
    answer: 'Yes. We routinely conduct secure, encrypted video consultations and client intake sessions for clients across the country and overseas.'
  },
  {
    question: 'How do you keep clients updated on case progress?',
    answer: 'You receive written progress summaries whenever a milestone or agency filing occurs, along with direct email and phone access to your assigned lead attorney.'
  }
];

export const TRUST_PHRASES = [
  'Free Initial Consultation',
  '48-Hour Case Review',
  '900+ Clients Represented',
  'Board-Certified Attorneys',
  'Transparent Fee Structures',
  '15 Years in Practice'
];
