export const resourceCategories = [
  { id: "ideas", title: "Idea & Problem Validation" },
  { id: "customers", title: "Customers & Market Research" },
  { id: "building", title: "Building Your First Offer" },
  { id: "sales", title: "Sales & Go-to-Market" },
  { id: "finance", title: "Business Models & Finance" },
  { id: "legal", title: "Legal, Operations & Risk" },
] as const;

export type ResourceCategory = (typeof resourceCategories)[number]["id"];
export type ResourceType =
  | "Article"
  | "Practical guide"
  | "Worksheet"
  | "Template"
  | "Video"
  | "Checklist"
  | "Case-based explainer";
export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  type: ResourceType;
  status: "draft" | "published";
  editorialApproved: boolean;
  readingTime: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[]; example?: string }[];
  nextSteps: string[];
  relatedSlugs: string[];
  programLink?: boolean;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  assetUrl?: string;
};

const existingResources: Resource[] = [
  {
    slug: "is-a-business-idea-worth-pursuing",
    title: "How Do You Know If a Business Idea Is Worth Pursuing?",
    summary:
      "A practical framework for assessing a business idea before investing significant time or money.",
    category: "ideas",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction:
      "Most business ideas sound reasonable in conversation. Far fewer survive contact with real customers. The difference between an idea worth pursuing and one worth setting aside is rarely how clever it sounds — it is whether a specific group of people has a problem they care enough about to solve. This article offers a practical way to assess an idea before you commit serious time or money to it.",
    sections: [
      {
        heading: "An interesting idea is not the same as a meaningful problem",
        paragraphs: [
          "Ideas usually start as solutions: an app, a service, a product. Problems start with people. A meaningful customer problem has three qualities: it is specific enough to describe, it affects a group of people you can actually reach, and it costs them something — time, money, effort or frustration — that they would prefer not to lose.",
          'A useful test is to rewrite your idea as a problem statement. Instead of "an app that helps clinics manage appointments", write "reception staff at small clinics lose hours each week rescheduling appointments by phone". The second version can be checked. The first cannot.',
        ],
      },
      {
        heading: "Who experiences the problem?",
        paragraphs: [
          'Name the people who feel the problem most directly. Be as specific as you can: not "small businesses" but "owners of independent dental practices with two to five chairs". The narrower your description, the easier it becomes to find these people, speak with them and recognise whether their experiences match your assumption.',
          "Also note who else is involved. In many purchases the person who experiences the problem is not the person who pays for the solution. A clinic's receptionist feels the scheduling pain; the practice owner signs the cheque. You will need to understand both.",
        ],
      },
      {
        heading: "How do people solve it today?",
        paragraphs: [
          "Every real problem already has a solution, even if that solution is a spreadsheet, a phone call, a workaround or simply putting up with it. These existing alternatives are your true competition — not other startups.",
          "If people have built workarounds, pay for partial solutions or complain regularly, that is encouraging evidence. If they shrug and say the problem rarely comes up, that is evidence too — and it is telling you the problem may not be urgent enough to build a business around.",
        ],
      },
      {
        heading: "Conduct initial customer discovery",
        paragraphs: [
          "Before building anything, speak with ten to fifteen people who match your description of the customer. Ask about their past behaviour rather than their opinions of your idea: how they handled the problem most recently, what it cost them, what they have tried.",
          "Discovery conversations are not sales pitches. The goal is to learn whether the problem is real, frequent and expensive enough to matter — not to collect compliments.",
        ],
      },
      {
        heading: "Evidence that supports or weakens the opportunity",
        paragraphs: [
          "Supporting evidence looks like: people describe the problem without prompting, they have spent money or significant time on alternatives, they ask when they can try your solution, and they introduce you to others with the same problem. Weakening evidence looks like: polite encouragement without specifics, no current spending on the problem, and difficulty finding anyone who experiences it regularly.",
          "Treat both kinds as useful. Weak evidence gathered early is far cheaper than weak evidence gathered after you have built something.",
        ],
      },
      {
        heading: "A practical decision checklist",
        paragraphs: [
          "Before committing to the next stage of work, check whether you can answer yes to most of the following: I can name a specific group of people with this problem. I have spoken to at least ten of them. They describe the problem as frequent or costly. They already spend time or money addressing it. I understand who would pay and why. I can reach these people through channels available to me.",
          "If several answers are no, the honest options are to revise the idea, narrow the customer group, or stop and redirect your energy. Stopping is not failure — it is the framework working as intended.",
        ],
        example:
          "Example: a professional considers building a training platform for warehouse supervisors. After twelve conversations, she learns supervisors do struggle with onboarding — but their companies already pay for a generic course they consider adequate. The problem is real but not urgent. She narrows her focus to safety-certification tracking, where the same interviews reveal genuine spending and frustration, and tests that instead.",
      },
    ],
    nextSteps: [
      "Write your idea as a problem statement naming a specific group of people.",
      "List how those people solve the problem today, including workarounds.",
      "Arrange ten discovery conversations before building anything.",
      "Score the idea against the decision checklist and decide: continue, revise or stop.",
    ],
    relatedSlugs: [
      "interview-potential-customers",
      "test-whether-customers-will-pay",
      "mvp-prototype-or-pilot",
    ],
    programLink: true,
  },
  {
    slug: "interview-potential-customers",
    title: "How to Interview Potential Customers Without Leading Them",
    summary:
      "Learn to run customer discovery conversations that produce evidence rather than polite encouragement.",
    category: "customers",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "8 min read",
    introduction:
      "Customer interviews are the cheapest research tool a founder has — and the easiest to get wrong. Ask the wrong questions and people will tell you what you want to hear. Ask about real past behaviour and they will tell you what you need to know. This guide covers how to find interviewees, what to ask, what to avoid and how to turn conversations into evidence.",
    sections: [
      {
        heading: "Why customer discovery matters",
        paragraphs: [
          "Every new venture rests on assumptions: that a problem exists, that it matters, that people will pay to solve it. Interviews are how you test those assumptions before they become expensive. Twenty honest conversations can save months of building the wrong thing.",
          "Discovery is not market research in the survey sense. You are not measuring how many people like an idea. You are trying to understand how specific people experience a specific problem today.",
        ],
      },
      {
        heading: "Identify relevant interviewees",
        paragraphs: [
          "Start from your problem statement: who experiences this problem most directly? Look for people who match that description, not people who are simply easy to reach. Friends and family are convenient but rarely representative, and they are the most likely to encourage you regardless of the truth.",
          "Professional networks, industry groups, online communities and warm introductions all work. Aim for ten to fifteen conversations to start. If the people you can reach easily do not match your intended customer, that gap is itself important information about how hard the market will be to reach.",
        ],
      },
      {
        heading: "Ask about past behaviour, not future intentions",
        paragraphs: [
          'The single most useful rule in customer discovery: ask about what people have done, not what they say they would do. "Tell me about the last time this happened" produces a story with details. "Would you use a tool that solved this?" produces a guess, usually a polite one.',
          "Good questions include: When did you last run into this problem? What did you do about it? How long did that take? What did it cost? What have you tried before? These questions surface facts. Opinions about hypothetical products do not.",
        ],
      },
      {
        heading: "Questions that reveal workarounds and costs",
        paragraphs: [
          "Workarounds are gold. When someone has built a spreadsheet, hired help or invented a routine to cope with a problem, they are showing you the problem matters enough to act on. Ask: How do you handle this today? What would happen if you just ignored it? Have you ever paid to make this easier?",
          "The cost of the problem — in money, time or frustration — tells you what a solution might be worth. A problem that costs someone twenty minutes a month cannot support an expensive product. A problem that costs a team two days a month might.",
        ],
      },
      {
        heading: "Avoid leading and hypothetical questions",
        paragraphs: [
          'Leading questions smuggle your hopes into the conversation: "Don\'t you think this is frustrating?", "Wouldn\'t it be great if...?". Hypothetical questions invite fantasy: "Would you pay for...?". Both produce answers that feel encouraging and mean very little.',
          "If you catch yourself explaining your idea in the first fifteen minutes, stop. The moment you pitch, the interview becomes a politeness exercise. Save the idea for the end, if you mention it at all, and treat the reaction as a weak signal compared with everything said before it.",
        ],
      },
      {
        heading: "Record findings and separate evidence from assumptions",
        paragraphs: [
          "Write notes immediately after each conversation: the actual words used, the stories told, the numbers mentioned. Then, separately, record your interpretation. Mixing the two is how founders convince themselves that five compliments equal demand.",
          "After ten conversations, look for patterns. Which parts of the problem came up unprompted, again and again? Where did accounts contradict your assumptions? Evidence is what multiple people independently described. Everything else remains an assumption awaiting its own test.",
        ],
      },
      {
        heading: "A sample interview guide",
        paragraphs: [
          'A simple structure for a thirty-minute conversation: open with context ("I\'m researching how small clinics handle appointment scheduling — I\'m not selling anything"), then move through past behaviour ("Tell me about the last time a scheduling problem caused trouble"), current approach ("How do you handle it today?"), costs ("What does that cost you in time or money?"), and close with a referral request ("Who else should I talk to about this?").',
        ],
        example:
          "Sample questions: 1) Tell me about the last time you faced this problem. 2) What did you do about it? 3) How often does it come up? 4) What have you tried before, and how did that go? 5) What does the current approach cost you? 6) If you could wave a wand, what would change? 7) Who else experiences this that I should speak with?",
      },
    ],
    nextSteps: [
      "Write down the three assumptions your idea depends on most.",
      "List ten people who genuinely match your intended customer and request conversations.",
      "Draft your questions around past behaviour using the sample guide above.",
      "After each interview, record what was said separately from what you think it means.",
    ],
    relatedSlugs: ["is-a-business-idea-worth-pursuing", "test-whether-customers-will-pay"],
  },
  {
    slug: "test-whether-customers-will-pay",
    title: "How to Test Whether Customers Will Actually Pay",
    summary: "Understand the difference between positive feedback and evidence of genuine demand.",
    category: "customers",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction:
      "\"I'd definitely use that\" is easy to say and costs nothing. Payment is different: it is the moment a customer's interest becomes a decision with consequences. Testing willingness to pay early — before you build — is the strongest signal you can gather about whether an idea can become a business. This guide explains how to test it honestly.",
    sections: [
      {
        heading: "Positive feedback is not buying intent",
        paragraphs: [
          'People are kind, and enthusiasm is free. Praise for your idea tells you the conversation went well; it does not tell you anyone will pay. The gap between "great idea" and "here is my money" is where most ventures fail.',
          "The only reliable evidence of demand is commitment: money paid, a signed pilot agreement, a deposit, or at minimum time and effort invested that the customer would not have spent otherwise. Design your tests to ask for commitment, not applause.",
        ],
      },
      {
        heading: "Identify the user, the buyer and the decision-maker",
        paragraphs: [
          "In many markets these are different people. A nurse uses the software, the hospital administrator buys it, and a committee approves the budget. Your willingness-to-pay test must reach the person who actually controls the money, not just the person who likes the product.",
          "Map these roles before you test. If you cannot get in front of the real buyer, treat every positive signal from other roles as provisional.",
        ],
      },
      {
        heading: "Understand current spending and alternatives",
        paragraphs: [
          "The strongest predictor of future spending is current spending. If customers already pay for alternatives — competitors, consultants, overtime, workarounds — you know money exists for this problem. Your question becomes whether your offer is better enough to switch.",
          "If nobody spends anything on the problem today, ask why. Sometimes you have found an untouched opportunity. More often, you have found a problem people do not consider worth paying to solve.",
        ],
      },
      {
        heading: "Ways to test willingness to pay",
        paragraphs: [
          'Tests range from weak to strong. Weaker: discussing pricing in interviews ("What do you currently pay? What would this need to do to be worth that?"). Stronger: a pilot offer with a real price, a paid trial, a pre-order or deposit, a letter of intent from a business customer.',
          "A paid pilot is often the best early test for a new venture. It is small enough for a customer to approve, real enough to count as evidence, and it generates the usage feedback you need anyway. Price it honestly — a free pilot proves far less than a modestly priced one.",
        ],
      },
      {
        heading: "Interpreting weak or contradictory evidence",
        paragraphs: [
          "Mixed signals are normal. Some interviewees love the idea but baulk at the price; others pay readily but want changes. Look for the pattern: is hesitation about the price level, the value, or the problem itself? Each points to a different fix — repricing, repositioning or reconsidering the opportunity.",
          'Be suspicious of unanimous enthusiasm; it usually means your sample is too friendly. Be equally careful about a single rejection; one "no" is an anecdote, ten are a finding.',
        ],
      },
      {
        heading: "A simple validation worksheet",
        paragraphs: [
          "For each demand test, record: who you tested with (user, buyer or decision-maker), what commitment you asked for, what they actually did, the price discussed, and what happened next. Then rate the evidence: paid commitment, signed intent, verbal interest, or politeness.",
          'Set your bar in advance. For example: "I will proceed if at least three of ten approached customers agree to a paid pilot." Deciding the threshold before you run the test protects you from moving the goalposts afterwards.',
        ],
        example:
          "Example: a founder testing a compliance-checklist service for small exporters offers a four-week paid pilot at a modest fee to eight businesses she interviewed. Three accept, two ask to revisit next quarter, three decline. Three paying pilots is real demand evidence — and the five non-conversions tell her exactly which objections to work on.",
      },
    ],
    nextSteps: [
      "Map the user, buyer and decision-maker for your offer.",
      "Find out what customers currently spend on the problem, including workarounds.",
      "Design one test that asks for a real commitment — a paid pilot, deposit or signed intent.",
      "Set your pass threshold before you run the test, then follow it.",
    ],
    relatedSlugs: [
      "interview-potential-customers",
      "mvp-prototype-or-pilot",
      "calculate-business-break-even",
    ],
    programLink: true,
  },
  {
    slug: "mvp-prototype-or-pilot",
    title: "MVP, Prototype or Pilot: What Should You Build First?",
    summary: "Choose an appropriate way to test a solution before committing to a larger build.",
    category: "building",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "7 min read",
    introduction:
      "Prototype, MVP and pilot are often used interchangeably, but they answer different questions and cost different amounts of time and money. Choosing the wrong one means either testing too little (building the full product on faith) or testing too slowly (polishing a prototype when customers are waiting). This article explains what each term means and how to choose the smallest useful test for your situation.",
    sections: [
      {
        heading: "What each term actually means",
        paragraphs: [
          'A prototype is a representation of the solution: a mock-up, a clickable design, a manual demonstration. It answers "can people understand and react to this?" A minimum viable product (MVP) is the smallest version that actually delivers the core value to a real user. It answers "will people use this?" A pilot is a time-boxed, real-world trial of your offer with an actual customer, often delivered partly by hand. It answers "will someone pay for this, and does it work in their environment?"',
        ],
      },
      {
        heading: "When each is appropriate",
        paragraphs: [
          "Use a prototype when the main uncertainty is comprehension or desirability — you need reactions before anything exists. Use an MVP when you understand the problem and need to learn whether people will actually use a working version. Use a pilot when the question is commercial or operational: will a customer pay, and can you deliver the value in their real setting?",
          "The sequence is usually prototype, then MVP or pilot — but the order matters less than matching the test to the question. If your biggest risk is demand, a paid pilot beats a polished MVP every time.",
        ],
      },
      {
        heading: "How much effort each should require",
        paragraphs: [
          "A prototype should take days, not months. If it takes longer, you are building a product, not a prototype. An MVP should take weeks and do one thing adequately rather than ten things poorly. A pilot should be scoped to a fixed period — typically four to twelve weeks — with agreed success criteria and a price, even if modest.",
          "A useful rule: each stage should cost roughly an order of magnitude more than the last, and each should only happen because the previous stage produced evidence that justifies it.",
        ],
      },
      {
        heading: "What question each should answer",
        paragraphs: [
          'Before building anything, write down the single question the test must answer. "Will clinic managers understand the dashboard?" suggests a prototype. "Will they log in weekly?" suggests an MVP. "Will the clinic pay for this after a month?" suggests a pilot.',
          'If you cannot name the question, you are not testing — you are just building. And if the question is "will they pay?", no amount of free usage will answer it.',
        ],
      },
      {
        heading: "Examples across software, services and B2B",
        paragraphs: [
          "Software: a founder sketches the three core screens as a clickable mock-up (prototype), then builds a single-feature version using no-code tools (MVP), then runs it with two design partners for six weeks (pilot). Service: a consultant delivers the service manually to one client at a reduced fee before productising anything — the manual delivery is the pilot. B2B product: a hardware-adjacent venture assembles ten units by hand and places them with a friendly customer under a paid trial agreement.",
        ],
        example:
          'Example: a professional wants to build a reporting tool for logistics firms. Instead of developing software, she offers to produce the reports herself for one firm for a month, using spreadsheets. The firm pays a small fee, she learns exactly which reports matter, and only then does she scope what to automate. Her "pilot" was a service; the product came later.',
      },
      {
        heading: "Common mistakes, and choosing the smallest useful test",
        paragraphs: [
          "The most common mistakes: building a full product and calling it an MVP; running free pilots that prove nothing about willingness to pay; polishing prototypes long after the comprehension question is answered; and skipping straight to building because testing feels slow.",
          "To choose, ask three questions. What is my biggest uncertainty — comprehension, usage or payment? What is the cheapest test that could answer it? What evidence would make me proceed to the next stage? Then build exactly that test and no more.",
        ],
      },
    ],
    nextSteps: [
      "Write down the single biggest uncertainty in your venture today.",
      "Choose the cheapest test — prototype, MVP or pilot — that could answer it.",
      "Define in advance what result would justify the next stage of investment.",
      "If the question is about payment, make sure the test involves a real price.",
    ],
    relatedSlugs: [
      "test-whether-customers-will-pay",
      "is-a-business-idea-worth-pursuing",
      "calculate-business-break-even",
    ],
  },
  {
    slug: "calculate-business-break-even",
    title: "How to Calculate the Break-Even Point for a New Business",
    summary:
      "Understand the relationship between pricing, costs and the sales needed to cover expenses.",
    category: "finance",
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: "6 min read",
    introduction:
      "Break-even analysis answers a deceptively simple question: how much do you need to sell before the business stops losing money? It will not tell you whether your idea is good, but it will tell you whether your numbers can work — and it often reveals that a venture needs far more sales, or a very different price, than the founder assumed.",
    sections: [
      {
        heading: "Fixed costs and variable costs",
        paragraphs: [
          "Fixed costs are expenses you pay regardless of how much you sell: rent, salaries, software subscriptions, insurance. Variable costs rise with each sale: materials, delivery, payment processing, commissions.",
          "Classify your costs honestly. Some sit between the two — a support hire is fixed until volume forces another hire — but for a first pass, put each cost in the bucket it behaves most like.",
        ],
      },
      {
        heading: "Price and contribution per sale",
        paragraphs: [
          "The contribution per sale is what remains from the selling price after covering the variable cost of that sale. It is the amount each unit sold contributes towards paying the fixed costs.",
          "If you sell a service package for Rs 10,000 and each delivery costs Rs 4,000 in variable expenses, your contribution per sale is Rs 6,000. Every sale pays down Rs 6,000 of fixed costs.",
        ],
      },
      {
        heading: "The break-even formula",
        paragraphs: [
          "Break-even units = Fixed costs ÷ (Selling price per unit − Variable cost per unit)",
          "The formula assumes a positive contribution per unit — that you sell for more than the variable cost of each sale. If that is not true, no volume will save the business; more sales simply lose money faster. The result must also be interpreted in the context of your business model: break-even units only matter if the market can realistically deliver that volume.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Imagine a small training venture. Monthly fixed costs — platform, part-time support, marketing — come to Rs 1,80,000. Each seat sells for Rs 12,000, with variable costs of Rs 3,000 per seat, giving a contribution of Rs 9,000 per seat.",
          "Break-even units = 1,80,000 ÷ 9,000 = 20 seats per month. Break-even revenue = 20 × 12,000 = Rs 2,40,000 per month. Now the useful question: is selling 20 seats a month realistic for this venture, at this price, through the channels available? The formula gives you the number; judgement tells you whether the number is achievable.",
        ],
        example:
          "Sensitivity check: if the price drops to Rs 10,000, contribution falls to Rs 7,000 and break-even rises to about 26 seats. If variable costs rise to Rs 4,000, break-even rises to about 23 seats. Small changes in price or cost move the break-even point more than most founders expect.",
      },
      {
        heading: "Limitations of break-even analysis",
        paragraphs: [
          "Break-even assumes a single price, stable costs and that everything produced is sold. Real businesses have discounts, cost steps and unsold capacity. It also says nothing about timing: a venture can be past break-even on paper and still run out of cash waiting for customers to pay.",
          "Use break-even as a sanity check, not a forecast. Pair it with cash-flow thinking — when money actually arrives and leaves — before making commitments.",
        ],
      },
      {
        heading: "A simple worksheet for your own venture",
        paragraphs: [
          "On one page, write: your monthly fixed costs; your selling price; your variable cost per sale; your contribution per sale; your break-even units and revenue. Then answer three questions: Can the market plausibly deliver this volume? How long would it take to reach it? What happens to break-even if the price is 15% lower or costs 15% higher?",
          "If break-even requires volume you cannot imagine reaching, the levers are price, variable cost, fixed cost or the model itself. Better to pull those levers on a worksheet than in a running business.",
        ],
      },
    ],
    nextSteps: [
      "List your fixed and variable costs and compute your contribution per sale.",
      "Calculate your break-even units and revenue using the formula above.",
      "Stress-test the result: recompute with a lower price and higher costs.",
      "Ask whether the required volume is realistic, and what you would change if it is not.",
    ],
    relatedSlugs: ["test-whether-customers-will-pay", "mvp-prototype-or-pilot"],
  },
  {
    slug: "build-a-business-alongside-employment",
    title: "How to Build a Business While Keeping Your Full-Time Job",
    summary: "Explore how to structure early validation and venture-building alongside employment.",
    category: "legal",
    type: "Article",
    status: "published",
    editorialApproved: true,
    readingTime: "8 min read",
    introduction:
      "For many experienced professionals, the sensible route into entrepreneurship is not a dramatic resignation — it is testing an idea while employed, and letting evidence decide when (or whether) to make the leap. Done well, this approach reduces financial risk and produces a better-informed decision. Done carelessly, it can create conflicts with your employer. This article covers how to structure the effort responsibly.",
    sections: [
      {
        heading: "Set a realistic weekly time budget",
        paragraphs: [
          "Eight to twelve hours a week is a workable range for most people: a few evenings and part of a weekend. What matters is consistency, not heroics. A sustainable ten hours every week will outproduce an unsustainable thirty-hour burst followed by a month of exhaustion.",
          "Protect the time explicitly. Put venture hours in your calendar like meetings, and agree boundaries with your family so the commitment is understood rather than resented.",
        ],
      },
      {
        heading: "Choose a small, testable problem",
        paragraphs: [
          "Alongside a job, you cannot afford a sprawling idea. Choose a problem narrow enough to test in weeks: one customer group, one painful problem, one simple offer. Your industry knowledge is an advantage here — the problems you already understand deeply are the ones you can test fastest.",
          "A good filter: could you run a meaningful customer interview or a small paid pilot within the next month, using only the hours you have? If not, narrow the scope until the answer is yes.",
        ],
      },
      {
        heading: "Do customer discovery before substantial investment",
        paragraphs: [
          "The biggest financial risk for an employed founder is spending money before learning. Interviews, problem research and simple landing-page tests cost little more than time. Development, incorporation, branding and inventory all cost real money — and none of them answer the question of whether anyone wants what you are building.",
          "Sequence deliberately: conversations first, then a small paid test, then — only if the evidence supports it — larger investment.",
        ],
      },
      {
        heading: "Separate personal and business finances from day one",
        paragraphs: [
          "Even before formal incorporation, track every rupee the venture spends and earns separately from your personal accounts. A dedicated bank account (once you have an entity) and a simple spreadsheet (before then) prevent confusion, make tax time survivable and give you an honest picture of what the experiment costs.",
          "Decide in advance how much personal money you are willing to put at risk in total, and treat that number as a hard limit rather than a starting suggestion.",
        ],
      },
      {
        heading: "Review your employment contract and obligations",
        paragraphs: [
          "Many employment contracts include clauses about outside work, intellectual property, non-competition and confidentiality. Read yours before you begin. What you build in your own time may still be claimed by your employer in some circumstances, depending on your contract, your role and applicable law.",
          "Employment restrictions and legal obligations depend on your individual circumstances and jurisdiction, and this article cannot provide legal advice. If your contract contains IP assignment, moonlighting or non-compete clauses, consider consulting a qualified lawyer before investing significant effort. In some cases, an honest conversation with your employer is the safest path.",
        ],
      },
      {
        heading: "Protect confidential information and intellectual property",
        paragraphs: [
          "Never use your employer's time, equipment, data, documents or contacts for your venture. Keep the separation clean: your own devices, your own hours, your own materials. Build your venture in a domain that does not compete with your employer unless you have explicit clearance.",
          "Document when and how you developed your own ideas. Contemporaneous records — dated notes, personal repositories, emails to yourself — help establish that your work is yours if the question ever arises.",
        ],
      },
      {
        heading: "Avoid premature hiring and unnecessary development",
        paragraphs: [
          "Alongside a job, complexity is your enemy. Every hire, vendor and tool adds management overhead you do not have time for. Use no-code tools, freelancers for defined tasks and your own manual effort before building a team.",
          "The question to ask before any spending: does this help me learn whether the venture works, or does it just make the venture feel more real? Pay for learning. Defer everything else.",
        ],
      },
      {
        heading: "Set evidence-based milestones for the next decision",
        paragraphs: [
          'Decide in advance what evidence would justify each escalation: what would justify spending money, what would justify going part-time, what would justify resigning. For example: "I will consider leaving my job when the venture has five paying customers and three months of personal runway saved."',
          "Written milestones protect you from both directions — from quitting too early on enthusiasm, and from never quitting because the comfortable moment never feels certain. The goal of building alongside employment is not to stay forever; it is to make the leap, when it comes, an informed decision rather than a gamble.",
        ],
        example:
          "Example: a senior manager spends six months testing a compliance-training idea in ten hours a week: twenty customer interviews, then a paid pilot with two firms. The evidence is strong. Only then does she incorporate, and she resigns four months later with eight paying customers and a written transition plan. Each step was triggered by evidence, not impatience.",
      },
    ],
    nextSteps: [
      "Block a realistic weekly time budget in your calendar.",
      "Read your employment contract for IP, moonlighting and non-compete clauses; take legal advice if anything is unclear.",
      "Choose one narrow problem you can test within a month using only your available hours.",
      "Write down the evidence milestones that would justify each next step, up to and including resignation.",
    ],
    relatedSlugs: [
      "is-a-business-idea-worth-pursuing",
      "interview-potential-customers",
      "test-whether-customers-will-pay",
    ],
    programLink: true,
  },
];

type PracticalArticleDraft = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  minutes: number;
  introduction: string;
  focus: string;
  method: string[];
  example: string;
  mistakes: string;
  nextSteps: string[];
};

function createPracticalArticle(draft: PracticalArticleDraft): Resource {
  return {
    slug: draft.slug,
    title: draft.title,
    summary: draft.summary,
    category: draft.category,
    type: "Practical guide",
    status: "published",
    editorialApproved: true,
    readingTime: `${draft.minutes} min read`,
    introduction: draft.introduction,
    sections: [
      { heading: "What to focus on", paragraphs: [draft.focus] },
      { heading: "A practical approach", paragraphs: draft.method },
      { heading: "Illustrative scenario", paragraphs: [draft.example] },
      { heading: "Mistakes to avoid", paragraphs: [draft.mistakes] },
    ],
    nextSteps: draft.nextSteps,
    relatedSlugs: [],
  };
}

const additionalResourceDrafts: PracticalArticleDraft[] = [
  {
    slug: "find-business-ideas-in-problems-you-understand",
    title: "How to Find Business Ideas in Problems You Already Understand",
    summary:
      "Use your professional experience to identify recurring problems, unmet needs and potential business opportunities.",
    category: "ideas",
    minutes: 6,
    introduction:
      "A useful business opportunity can be close to the work you already know. Repeated workarounds, delays and hand-offs often point to needs that outsiders miss. Your experience is a source of hypotheses, but it is not proof that customers will buy.",
    focus:
      "Look for a recurring situation where a defined group loses time, money, quality or confidence. Separate what you have personally observed from what you assume other people experience, and note who feels the cost and who controls a possible purchase.",
    method: [
      "Keep a short log of friction you see in your industry: what happens, who is involved, how often it occurs and what people do instead.",
      "Group repeated observations into problem themes, then choose one narrow customer group you can reach for conversations.",
      "Ask people to describe recent examples and current workarounds before you suggest a solution.",
    ],
    example:
      "Illustrative scenario: a procurement manager repeatedly sees smaller suppliers lose time preparing the same compliance documents for different buyers. She interviews suppliers and buyers to check whether the duplication is costly and whether either side would support a simpler process.",
    mistakes:
      "Do not assume that a problem is widespread because it is common in your own workplace. Avoid treating access to industry contacts as proof of demand, and do not share confidential employer information while researching.",
    nextSteps: [
      "Write down five recurring frustrations you understand firsthand.",
      "Choose one and interview people outside your immediate team about recent examples.",
      "Record what evidence would justify a small next test.",
    ],
  },
  {
    slug: "problem-validation-vs-solution-validation",
    title: "Problem Validation vs. Solution Validation: What’s the Difference?",
    summary:
      "Learn why confirming that a problem exists should come before investing in a particular solution.",
    category: "ideas",
    minutes: 6,
    introduction:
      "Founders often move quickly from noticing a frustration to defending a preferred product. Problem validation and solution validation answer different questions: whether the need matters, and whether a proposed response works for the people who have it.",
    focus:
      "Problem evidence comes from repeated accounts of a costly or urgent situation and the effort people already spend addressing it. Solution evidence comes later, when people react to or use a specific offer under realistic conditions.",
    method: [
      "Describe the customer and problem without naming your proposed product.",
      "Use interviews about the last occurrence, its impact, and the workaround to test whether the problem is real and important.",
      "Only then show a simple concept or prototype and observe comprehension, use, commitment and objections.",
    ],
    example:
      "Illustrative scenario: an idea for a scheduling app starts with interviews about missed appointments. If clinic staff say rescheduling is rare, a polished prototype cannot repair the weak problem case. If the issue is frequent, a clickable sketch can then test whether the proposed workflow makes sense.",
    mistakes:
      "Do not use reactions to a solution as evidence that the underlying problem is frequent. Avoid asking leading questions that invite agreement, and distinguish curiosity from actual effort or purchase commitment.",
    nextSteps: [
      "Write separate problem and solution hypotheses.",
      "Test the problem hypothesis with recent-behaviour questions.",
      "Choose a low-cost solution test only after the problem has credible evidence.",
    ],
  },
  {
    slug: "evaluate-business-opportunity-before-investing-savings",
    title: "How to Evaluate a Business Opportunity Before Investing Your Savings",
    summary:
      "Assess customer evidence, personal financial exposure, uncertainty and the next experiment worth running.",
    category: "ideas",
    minutes: 8,
    introduction:
      "An opportunity can be promising and still be a poor reason to risk a large amount of personal savings today. Evaluation is a sequence of evidence checks and bounded decisions, not a prediction that removes uncertainty.",
    focus:
      "Review four areas together: the customer problem, evidence of willingness to pay, the cost and time needed to test delivery, and your personal ability to absorb a loss. Separate business assumptions from household financial needs.",
    method: [
      "List the riskiest assumptions and rank them by the damage they could cause if wrong.",
      "Design the smallest experiment that tests the highest-risk assumption, with a cost ceiling and a decision date.",
      "Keep an emergency reserve and set a personal loss limit; seek independent financial advice before committing money you cannot afford to lose.",
    ],
    example:
      "Illustrative scenario: a professional considering a food-service venture first interviews buyers, then runs a limited pre-order test with a small batch. The test budget is capped and no lease is signed until repeat demand and delivery costs are better understood.",
    mistakes:
      "Do not treat a business plan, market estimate or enthusiastic feedback as certainty. Avoid borrowing or spending essential savings to make an untested idea look established.",
    nextSteps: [
      "Write the maximum amount you can responsibly risk on learning.",
      "Choose one evidence-gathering experiment within that limit.",
      "Review the result with a trusted, independent adviser before increasing exposure.",
    ],
  },
  {
    slug: "when-to-pivot-persist-or-abandon-business-idea",
    title: "When Should You Pivot, Persist or Abandon a Business Idea?",
    summary:
      "Use evidence, customer behaviour and predefined decision criteria to determine your next move.",
    category: "ideas",
    minutes: 7,
    introduction:
      "A weak result can mean the idea is wrong, the test was poorly designed, or the customer group was too broad. Deciding whether to pivot, persist or stop is easier when you define what each result would mean before running the experiment.",
    focus:
      "Persist when a meaningful problem and credible customer commitment are present and the next uncertainty is testable. Pivot when evidence points to a different customer, problem or offer. Stop when repeated, well-designed tests fail and no affordable next test could change the decision.",
    method: [
      "State the hypothesis, audience, test and success threshold in advance.",
      "After the test, compare observed behaviour with the threshold and record alternative explanations.",
      "Change one major assumption at a time so the next experiment teaches you something interpretable.",
    ],
    example:
      "Illustrative scenario: a founder offers a paid onboarding pilot to ten firms. Few accept the broad offer, but several ask for a narrow compliance workflow. She pivots the offer and tests that specific workflow before deciding whether to invest further.",
    mistakes:
      "Avoid changing the success threshold after seeing results, confusing effort already spent with evidence, or pivoting after every individual rejection. A single test is informative only within its limits.",
    nextSteps: [
      "Set a decision threshold for your next experiment.",
      "Record results and what they do not prove.",
      "Choose one next move and the evidence that would change it.",
    ],
  },
  {
    slug: "estimate-market-size-without-guessing",
    title: "How to Estimate the Size of a Market Without Guessing",
    summary:
      "Build a practical market estimate using customer segments, reachable buyers and realistic assumptions.",
    category: "ideas",
    minutes: 8,
    introduction:
      "Large market statistics can make an opportunity sound attractive while saying little about the customers a new venture can actually reach. A useful early estimate starts with a specific segment and makes every assumption visible.",
    focus:
      "Use a bottom-up estimate: number of reachable potential buyers multiplied by a realistic annual spend or purchase frequency. Keep the total category, the serviceable segment and the near-term obtainable portion separate.",
    method: [
      "Define a buyer narrowly enough to count, such as a type of organisation, location, size and need.",
      "Find a defensible source or build a transparent count from directories, public records or interviews.",
      "Estimate likely spend from current alternatives, then test a low, base and high case rather than presenting one precise forecast.",
    ],
    example:
      "Illustrative scenario: instead of multiplying a national software market by an arbitrary share, a founder counts 400 reachable clinics in two cities, estimates the number with the target workflow, and models adoption at several conservative rates.",
    mistakes:
      "Do not confuse users with paying buyers, use a broad industry total as your reachable market, or report precise-looking numbers built from weak assumptions. Cite where counts came from and label estimates clearly.",
    nextSteps: [
      "Define your first buyer segment in one sentence.",
      "List each input in your estimate and its source.",
      "Validate the biggest uncertain input with customer conversations.",
    ],
  },
  {
    slug: "identify-ideal-first-customer",
    title: "How to Identify Your Ideal First Customer",
    summary:
      "Narrow a broad audience into a specific group whose problem, urgency and ability to pay you can investigate.",
    category: "customers",
    minutes: 6,
    introduction:
      "A first customer profile is a research tool, not a permanent label for everyone who might eventually buy. A focused group helps you learn whether a particular problem is urgent and whether you can reach the people who experience it.",
    focus:
      "Describe the first customer by situation and behaviour: what triggers the problem, how it is handled today, how costly it is, and who can approve a purchase. Demographics alone rarely explain why someone would act now.",
    method: [
      "Start with the people most affected by the problem, not the broadest possible market.",
      "Compare candidate segments on problem frequency, cost, access, buying authority and willingness to test.",
      "Choose one segment for the first experiment and note what evidence would make you broaden or change it.",
    ],
    example:
      "Illustrative scenario: a service for expense reconciliation could target all businesses, but interviews reveal that small firms with frequent field purchases and no dedicated finance team have the clearest recurring pain and are easier to reach.",
    mistakes:
      "Avoid defining the customer as anyone who could use the product. Do not choose only the segment that is easiest to reach if it does not experience the problem, and do not mistake one friendly contact for a representative buyer.",
    nextSteps: [
      "Write two possible first-customer profiles.",
      "Compare them using problem urgency, access and buying authority.",
      "Interview several people in the strongest segment.",
    ],
  },
  {
    slug: "map-competitors-and-existing-alternatives",
    title: "How to Map Your Competitors and Existing Alternatives",
    summary:
      "Understand how customers solve a problem today and where existing products, services or workarounds fall short.",
    category: "customers",
    minutes: 7,
    introduction:
      "A competitor map is most useful when it includes everything customers already do, not only companies with similar websites. Spreadsheets, internal staff, agencies and postponing the problem are all alternatives that shape buying decisions.",
    focus:
      "Compare alternatives around the job customers need done: price, effort, speed, reliability, switching cost and the situations where each option fails. The goal is to understand behaviour, not to claim there is no competition.",
    method: [
      "Ask interviewees what they used the last time the problem occurred and what they paid in money or time.",
      "Group alternatives into direct products, manual workarounds, internal processes and doing nothing.",
      "Look for a specific underserved situation where your proposed offer can be meaningfully better.",
    ],
    example:
      "Illustrative scenario: a founder exploring a vendor-onboarding tool finds that buyers currently rely on email, shared folders and an outsourced compliance check. The map reveals that inconsistent follow-up, rather than document storage, is the strongest pain point.",
    mistakes:
      "Do not dismiss manual workarounds as non-competition or assume an existing tool is inferior because it lacks your planned features. Ask why customers keep using it and what switching would cost.",
    nextSteps: [
      "List the alternatives customers name without prompting.",
      "Compare them on the job, cost and switching effort.",
      "Test whether the gap you noticed matters enough to change behaviour.",
    ],
  },
  {
    slug: "ask-better-customer-discovery-questions",
    title: "How to Ask Better Customer Discovery Questions",
    summary:
      "Design neutral questions that reveal past behaviour, real problems and purchasing decisions instead of hypothetical opinions.",
    category: "customers",
    minutes: 6,
    introduction:
      "A discovery conversation is shaped by its questions. Asking people to imagine using an idea invites guesses and politeness; asking them to reconstruct a recent experience produces detail you can investigate.",
    focus:
      "Use open, neutral prompts about events that already happened. Follow a general question with a request for a specific example, then explore the actions, people, costs and consequences involved.",
    method: [
      "Begin with context and make clear that you are learning, not selling.",
      "Ask: “Tell me about the last time this happened.” Then: “What did you do next?” and “What was difficult about that?”",
      "Explore current spending, workarounds and who participates in the decision; leave your proposed solution until the end.",
    ],
    example:
      "Illustrative scenario: instead of “Would an automated report save you time?”, ask an operations lead to walk through the last report they prepared, the steps involved and what happened when it was late.",
    mistakes:
      "Avoid questions that contain your desired answer, stack multiple questions together, or ask what someone would pay for a hypothetical product. Do not argue when an answer challenges your assumption.",
    nextSteps: [
      "Draft five questions about past behaviour.",
      "Remove leading phrases and hypothetical purchase questions.",
      "After the conversation, separate direct evidence from your interpretation.",
    ],
  },
  {
    slug: "customers-like-idea-but-wont-buy",
    title: "What to Do When Customers Say They Like Your Idea but Won’t Buy",
    summary:
      "Diagnose the gap between positive feedback, urgency, willingness to pay and actual purchase behaviour.",
    category: "customers",
    minutes: 7,
    introduction:
      "Positive feedback paired with no purchase is not a contradiction to ignore. It signals that liking the concept and making a buying decision are different events, and the gap may reveal weak urgency, unclear value, a mismatch with the buyer or a poorly timed offer.",
    focus:
      "Look for observable behaviour: a customer allocates time, introduces a decision-maker, shares data, signs a pilot scope or pays. Praise alone is a low-cost response; commitment has a cost to the customer and therefore carries more evidence.",
    method: [
      "Ask what would need to change for the customer to act, and who else is involved in the decision.",
      "Check whether the problem is happening now, what it currently costs, and what budget or alternative competes for attention.",
      "Offer a small, clearly scoped next step with a real price or explicit commitment, then observe what the buyer does.",
    ],
    example:
      "Illustrative scenario: several owners praise a proposed inventory dashboard but do not schedule a trial. Follow-up shows the issue is seasonal and the budget holder is an accountant. The founder shifts timing and tests a paid month with the actual buyer.",
    mistakes:
      "Do not keep collecting compliments or lower the price automatically. The objection may concern trust, timing, authority, switching effort or insufficient problem severity rather than price alone.",
    nextSteps: [
      "Review what customers actually did after praising the idea.",
      "Identify the decision-maker and the unresolved buying barrier.",
      "Run one specific commitment test and record the outcome.",
    ],
  },
  {
    slug: "turn-customer-interviews-into-business-decisions",
    title: "How to Turn Customer Interviews into Business Decisions",
    summary:
      "Organise interview evidence into recurring problems, unmet needs, buying signals and actionable next steps.",
    category: "customers",
    minutes: 7,
    introduction:
      "Interview notes become useful when they change a decision. Without a consistent way to capture evidence, founders can remember the most enthusiastic comments and overlook repeated contradictions.",
    focus:
      "Separate direct observations from interpretation. Compare accounts by customer segment and look for patterns in problem frequency, impact, current response, buyer role and commitment rather than counting every positive sentence equally.",
    method: [
      "Use the same short note structure after each conversation: context, recent example, current workaround, impact, buying process and exact commitment.",
      "Tag evidence by hypothesis and mark whether it supports, weakens or leaves the assumption unresolved.",
      "Review patterns after several interviews and choose the next question or experiment that could change your decision.",
    ],
    example:
      "Illustrative scenario: after eight conversations, a founder notices that five buyers independently describe duplicate data entry, but only two can approve software purchases. The next round focuses on the buyer process before the team builds a prototype.",
    mistakes:
      "Avoid treating interview counts as statistical proof, merging quotes with your interpretation, or changing the audience halfway through without recording the change. Preserve disconfirming evidence.",
    nextSteps: [
      "Create a one-page interview evidence template.",
      "Review notes by hypothesis, not by how positive the conversation felt.",
      "Write one decision and one open question after each review.",
    ],
  },
  {
    slug: "design-pilot-customers-agree-to-try",
    title: "How to Design a Pilot Customers Will Agree to Try",
    summary:
      "Define a small, measurable test with a clear scope, expected outcome, timeline and customer commitment.",
    category: "building",
    minutes: 7,
    introduction:
      "A pilot is a bounded real-world test, not an open-ended promise to build whatever a customer requests. Clear scope protects both sides and makes the result interpretable.",
    focus:
      "A useful pilot names the customer problem, participating users, work included and excluded, timeline, responsibilities, success measures and commercial terms. It should test an important uncertainty while remaining deliverable with current capacity.",
    method: [
      "Agree on one outcome the customer cares about and establish the current baseline if possible.",
      "Limit the test to a short period and a defined workflow, data set or location.",
      "Record who does what, what is being paid for, how issues are handled and what decision follows the pilot.",
    ],
    example:
      "Illustrative scenario: a small distributor tests a new stock-reconciliation service for one warehouse and four weeks. The pilot tracks time to close discrepancies and defines a review meeting before any wider rollout.",
    mistakes:
      "Do not call free custom work a pilot without a learning question or end date. Avoid success measures you cannot observe and avoid implying that a successful test guarantees a larger contract.",
    nextSteps: [
      "Draft a one-page pilot scope with boundaries and responsibilities.",
      "Choose one or two observable outcomes.",
      "Agree on the review date and decision that follows.",
    ],
  },
  {
    slug: "minimum-viable-offer-before-product",
    title: "How to Create a Minimum Viable Offer Before Building a Product",
    summary:
      "Test whether customers value an outcome through a simple service, manual process or limited offer before developing a full product.",
    category: "building",
    minutes: 7,
    introduction:
      "A product is only one way to deliver value. A minimum viable offer can use manual work, existing tools or a narrow service to test whether a customer wants the outcome before you invest in a complete build.",
    focus:
      "Define the smallest complete promise that solves a meaningful part of the problem. Make the outcome, intended customer, delivery effort, price and limits explicit; keep the behind-the-scenes method simple while learning.",
    method: [
      "Choose one customer and one painful task rather than a broad platform idea.",
      "Deliver the result manually or with existing tools to a small number of customers.",
      "Measure whether they use it, value the outcome, pay or request a repeat, and what delivery effort is required.",
    ],
    example:
      "Illustrative scenario: before building a reporting portal, a founder prepares a weekly report manually for two paying clients. The clients' repeated use helps identify which information matters and whether the service can support its delivery cost.",
    mistakes:
      "Do not confuse a rough internal process with a poor customer experience. Be transparent about what is manual, protect customer data, and avoid promising scale or automation you do not yet have.",
    nextSteps: [
      "Write the customer outcome in one sentence.",
      "Design a limited offer you can deliver safely with current tools.",
      "Ask for a real commitment and track delivery effort.",
    ],
  },
  {
    slug: "ai-no-code-tools-test-business-idea",
    title: "How to Use AI and No-Code Tools to Test a Business Idea",
    summary:
      "Explore practical ways to prototype workflows, automate simple tasks and test assumptions without starting with a custom software build.",
    category: "building",
    minutes: 8,
    introduction:
      "AI and no-code tools can reduce the time needed to create a rough prototype or automate a repetitive step. They do not validate demand by themselves, and they do not remove the need for technical expertise when reliability, security or scale requires it.",
    focus:
      "Start from a test question, then choose the lightest tool that helps answer it. A mock-up can test comprehension; a form and spreadsheet may test a workflow; an AI-assisted draft may test whether a service outcome is useful.",
    method: [
      "Map the workflow and mark which steps need to be real for the test to be credible.",
      "Use approved tools and non-sensitive sample data; review AI-generated output for errors and bias.",
      "Show the test to intended users, observe behaviour and record limitations before deciding whether custom development is justified.",
    ],
    example:
      "Illustrative scenario: a founder tests a document-summary service with synthetic sample files and a simple upload form. The test checks whether users value the summary and which review controls they need before any sensitive data is handled.",
    mistakes:
      "Do not place confidential or personal data into tools without understanding their terms and safeguards. Avoid presenting a prototype as production-ready or treating a technically working demo as proof of customer demand.",
    nextSteps: [
      "Define the assumption your prototype should test.",
      "Select a low-risk tool and use non-sensitive data.",
      "Test with users and document what would require professional development.",
    ],
  },
  {
    slug: "decide-what-to-include-in-first-offer",
    title: "How to Decide What to Include in Your First Offer",
    summary:
      "Focus on the smallest set of features, services or deliverables needed to solve a meaningful customer problem.",
    category: "building",
    minutes: 6,
    introduction:
      "Early offers often become too broad because founders try to satisfy every possible customer request. A narrower offer is easier to explain, deliver and evaluate.",
    focus:
      "Include only what is necessary for the target customer to reach a valued outcome and for you to learn whether the offer works. Distinguish essential steps from preferences, future possibilities and features that mainly make the idea feel complete.",
    method: [
      "List the customer outcome and the minimum steps needed to deliver it.",
      "For each requested feature, ask which customer problem it addresses and what evidence shows it matters now.",
      "Define a clear scope, exclusions and a path for collecting requests without agreeing to all of them.",
    ],
    example:
      "Illustrative scenario: a consultant's first supplier-readiness offer includes a gap review, a prioritised action plan and one follow-up session. A custom portal and ongoing support are deferred until buyers show those additions affect their decision.",
    mistakes:
      "Do not remove elements required for safety, legal compliance or a credible outcome. Avoid adding custom work for one prospect without checking whether the need is shared by the intended segment.",
    nextSteps: [
      "Write the primary outcome your offer promises.",
      "Mark every element as essential, useful later or unsupported.",
      "Test the narrow version with a customer before expanding it.",
    ],
  },
  {
    slug: "measure-whether-pilot-worked",
    title: "How to Measure Whether Your Pilot Actually Worked",
    summary:
      "Define success measures before a pilot and use customer outcomes, usage and buying signals to decide what to improve next.",
    category: "building",
    minutes: 7,
    introduction:
      "A pilot can feel successful because everyone was cooperative, yet leave the core business question unanswered. Measures chosen before launch make it easier to distinguish a useful result from a positive impression.",
    focus:
      "Combine a customer outcome measure with a behaviour or commercial signal. Establish a baseline, define how data will be collected and set a threshold that would justify continuing, changing or stopping.",
    method: [
      "Choose one customer outcome, such as time saved or error rate, that matches the problem being tested.",
      "Track usage, completion and operational effort so you know whether the result is repeatable and deliverable.",
      "At the review, compare results with the baseline and ask the customer for a concrete next commitment.",
    ],
    example:
      "Illustrative scenario: a four-week scheduling pilot tracks missed appointments against the clinic's own prior period, staff time spent on reminders and whether the clinic wants a paid extension. No single measure is treated as conclusive on its own.",
    mistakes:
      "Avoid selecting metrics after seeing the result, relying only on vanity usage numbers, or claiming causation when other changes could explain the outcome. Record missing data and small-sample limits.",
    nextSteps: [
      "Write success and failure thresholds before the pilot starts.",
      "Agree how each measure will be observed.",
      "Hold a review that ends with a specific proceed, revise or stop decision.",
    ],
  },
  {
    slug: "get-first-ten-potential-customers",
    title: "How to Get Your First Ten Potential Customers",
    summary:
      "Build a practical outreach plan using professional networks, referrals, targeted conversations and relevant communities.",
    category: "sales",
    minutes: 7,
    introduction:
      "The first ten potential customers are usually found through focused, respectful research rather than a large advertising campaign. The aim is to reach people who match the problem you are investigating and learn whether they will take a next step.",
    focus:
      "A useful prospect list records why each person fits, how you can contact them appropriately and what you want to learn. A small, well-targeted list makes follow-up and pattern recognition easier.",
    method: [
      "Define the customer profile and identify 20 plausible people or organisations, allowing for some non-responses.",
      "Start with relevant professional connections, warm introductions and communities where research requests are welcome.",
      "Send a personal, concise request for a short conversation; track responses and follow up once politely.",
    ],
    example:
      "Illustrative scenario: a founder testing a workflow service asks three former colleagues for introductions to operations leaders in a specific sector, then joins a professional group discussion before requesting interviews from relevant members.",
    mistakes:
      "Do not scrape or spam contact lists, misrepresent your purpose, or treat friends' support as market validation. Respect confidentiality, community rules and requests not to be contacted again.",
    nextSteps: [
      "Write a narrow prospect profile.",
      "Build a list with a reason each contact is relevant.",
      "Send a small batch of tailored research invitations and learn from response patterns.",
    ],
  },
  {
    slug: "position-business-customer-value",
    title: "How to Position Your Business So Customers Understand Its Value",
    summary:
      "Explain who your offer serves, which problem it solves and why a customer should consider it.",
    category: "sales",
    minutes: 6,
    introduction:
      "Positioning helps the right customer quickly understand whether an offer is relevant. It is more than a slogan: it connects a specific audience, a meaningful problem and a credible difference in the way the outcome is delivered.",
    focus:
      "A clear first positioning statement names who you serve, the situation they face, the result you help achieve and the alternative you improve upon. Use language customers recognise rather than internal product terminology.",
    method: [
      "Choose one audience and one high-priority use case.",
      "Describe the outcome in plain terms and identify the current alternative customers use.",
      "Test two or three concise versions in conversations and note what people repeat, question or misunderstand.",
    ],
    example:
      "Illustrative scenario: rather than “an AI-powered operations platform,” a founder tests “weekly inventory reports for independent retailers who currently reconcile stock by hand.” The narrower wording invites specific questions about the job and buyer.",
    mistakes:
      "Avoid unsupported superlatives, broad claims that fit every customer and technical language that obscures the outcome. Do not claim a competitor comparison you have not verified.",
    nextSteps: [
      "Draft a one-sentence statement using audience, problem and outcome.",
      "Ask target customers to explain it back in their own words.",
      "Revise based on confusion and evidence, not personal preference.",
    ],
  },
  {
    slug: "first-outreach-message-starts-conversation",
    title: "How to Write a First Outreach Message That Starts a Conversation",
    summary:
      "Create concise, relevant outreach that earns attention without relying on generic pitches or aggressive sales tactics.",
    category: "sales",
    minutes: 5,
    introduction:
      "A first message should make it easy for a relevant person to understand why you contacted them and whether they want to respond. It is an invitation to a conversation, not a full product pitch.",
    focus:
      "Good outreach is specific, brief, honest about its purpose and respectful of the recipient's time. A relevant reason for contacting someone is more useful than a long list of features or an exaggerated claim.",
    method: [
      "Open with the context that makes the person relevant, without pretending to know them.",
      "State what you are researching and ask for one modest next step with an estimated time commitment.",
      "Give them an easy way to decline and follow up no more than once unless they invite more contact.",
    ],
    example:
      "Illustrative scenario: “I’m researching how independent clinics manage appointment changes. I saw your clinic serves several locations. Would you be open to a 15-minute conversation about your current process? I’m not selling a product. No problem if now is not a good time.”",
    mistakes:
      "Avoid mass personalisation that is not genuine, attachments in an unsolicited first note, fake urgency or repeated follow-ups. Follow applicable communication and privacy rules for your context.",
    nextSteps: [
      "Write one sentence explaining why this contact is relevant.",
      "Make one clear, low-pressure request.",
      "Review the message for accuracy, brevity and a respectful opt-out.",
    ],
  },
  {
    slug: "turn-successful-pilot-into-paying-customer",
    title: "How to Turn a Successful Pilot into a Paying Customer",
    summary:
      "Connect pilot outcomes to business value, commercial proposals, pricing discussions and clear next steps.",
    category: "sales",
    minutes: 7,
    introduction:
      "A pilot does not automatically become a contract. The transition requires a joint review of outcomes, the customer's remaining needs, the buying process and a commercial offer that both sides can evaluate.",
    focus:
      "Use the evidence collected during the pilot to connect the result to a customer priority. Be clear about what was achieved, what remains uncertain and what scope, price, timing and approvals a next engagement would require.",
    method: [
      "Review agreed measures with the customer and capture their interpretation, not only your own.",
      "Ask what decision they need to make next, who approves it and what procurement or security steps apply.",
      "Present a scoped proposal with deliverables, assumptions, responsibilities, price and a decision date that the customer agrees is realistic.",
    ],
    example:
      "Illustrative scenario: a paid reporting pilot reduces a team’s weekly reconciliation effort in its own tracking. The provider reviews the result, learns the finance lead must approve expansion, and proposes a limited second phase with explicit integration assumptions.",
    mistakes:
      "Do not inflate pilot results, imply that one customer's outcome will generalise, or offer indefinite free support while waiting for a decision. A “successful” pilot can still reveal no budget or no fit.",
    nextSteps: [
      "Prepare a short evidence-based pilot review.",
      "Map the buyer, approver and remaining risks.",
      "Agree on the next commercial decision and owner.",
    ],
  },
  {
    slug: "build-referral-strategy-new-business",
    title: "How to Build a Referral Strategy for a New Business",
    summary:
      "Identify who can introduce you to relevant buyers and create a repeatable process for asking for useful introductions.",
    category: "sales",
    minutes: 6,
    introduction:
      "Referrals can help a new business reach people who are difficult to approach cold, but they work best when the request is specific and the introduction is genuinely useful to both sides.",
    focus:
      "A referral strategy starts with a clear customer profile and a short explanation of the problem you address. Potential connectors may include customers, peers, professional advisers or community members who understand the context.",
    method: [
      "Name the type of person or organisation you hope to meet and why they might care.",
      "Ask a connector for permission to share a concise forwardable note rather than requesting a vague list of contacts.",
      "Thank the connector, report back appropriately and keep track of which introductions lead to relevant conversations.",
    ],
    example:
      "Illustrative scenario: a founder asks a former supplier to introduce her to one finance manager who handles a specific reconciliation task, sharing a short note that the supplier can forward if comfortable.",
    mistakes:
      "Do not pressure contacts, imply that a referral guarantees a sale, or share private information without consent. Avoid asking for introductions before you can explain who is a good fit.",
    nextSteps: [
      "Write a one-sentence customer profile and problem statement.",
      "Identify five potential connectors based on relevant context.",
      "Make a specific, low-pressure introduction request and track outcomes.",
    ],
  },
  {
    slug: "choose-right-pricing-model-business",
    title: "How to Choose the Right Pricing Model for Your Business",
    summary:
      "Compare project-based, subscription, usage-based and other pricing approaches against customer value and delivery costs.",
    category: "finance",
    minutes: 7,
    introduction:
      "A pricing model determines how a customer pays and how revenue relates to the value delivered. The right model should be understandable to buyers, workable for delivery and testable with real conversations.",
    focus:
      "Project pricing can fit defined outcomes, subscriptions recurring access or service, and usage pricing variable consumption. These are starting points, not universal rules; customer purchasing habits, cost variability and value measurement matter.",
    method: [
      "Map when and how customers experience value, and how they currently budget for alternatives.",
      "Estimate delivery and support costs at low, typical and high usage levels.",
      "Compare one or two models with buyers using a concrete offer, then test a real price or paid pilot.",
    ],
    example:
      "Illustrative scenario: a data-cleaning service could charge by project, monthly volume or ongoing access. Interviews reveal that buyers budget for a defined migration, so a fixed-scope project is easier to test before considering recurring support.",
    mistakes:
      "Do not choose a subscription only because it creates predictable revenue for the seller. Avoid pricing below variable costs without a clear, time-bounded learning reason, and do not infer willingness to pay from a hypothetical survey alone.",
    nextSteps: [
      "List customer value moments and current buying practices.",
      "Model delivery cost under each plausible pricing model.",
      "Test a clearly scoped price with the person who controls the budget.",
    ],
  },
  {
    slug: "revenue-profit-cash-flow-founders",
    title: "Revenue, Profit and Cash Flow: What Founders Need to Know",
    summary:
      "Understand why sales, accounting profit and available cash tell different stories about business health.",
    category: "finance",
    minutes: 7,
    introduction:
      "Revenue, profit and cash are related but not interchangeable. A business can make sales and still lack cash to pay near-term bills, or show accounting profit while customer payments are delayed.",
    focus:
      "Revenue records value earned from sales under the applicable accounting approach. Profit subtracts recognised expenses. Cash flow tracks money actually received and paid over time. Exact accounting treatment depends on circumstances and professional standards.",
    method: [
      "Track invoices issued, amounts collected and payment dates separately.",
      "List recurring and one-time costs, noting when cash leaves the business.",
      "Prepare a simple monthly cash forecast and update it when sales timing or expenses change.",
    ],
    example:
      "Illustrative scenario: a consultancy invoices a large project in March but receives payment in May while paying contractors in April. Revenue may be recorded before cash arrives, so a cash view shows the short-term funding gap.",
    mistakes:
      "Do not treat signed proposals as collected cash or confuse a positive margin with enough liquidity. For accounting, tax or reporting decisions, consult a qualified professional familiar with your jurisdiction.",
    nextSteps: [
      "Create a monthly list of expected receipts and payments.",
      "Mark invoices by due date and actual collection date.",
      "Review the forecast regularly with an accountant or adviser as the business grows.",
    ],
  },
  {
    slug: "estimate-startup-costs-before-launching",
    title: "How to Estimate Startup Costs Before Launching",
    summary:
      "Identify initial setup costs, recurring expenses, working-capital needs and financial assumptions to test.",
    category: "finance",
    minutes: 6,
    introduction:
      "Startup cost estimates are useful when they distinguish one-time setup from ongoing operation and make uncertain assumptions visible. A single launch figure can hide the cash needed to reach the next decision point.",
    focus:
      "Include setup, recurring fixed costs, variable delivery costs, working capital and contingency for known uncertainty. Estimate only what is needed for the next evidence-based stage rather than funding a full-scale version by default.",
    method: [
      "List items needed to test and deliver the first offer, with source and timing for each estimate.",
      "Separate required costs from optional polish, and seek quotes where a large item is uncertain.",
      "Model a base case and a conservative case that includes slower collections or lower sales.",
    ],
    example:
      "Illustrative scenario: a small packaged-food venture budgets for compliant test production, packaging, delivery and a limited batch. A large permanent kitchen is deferred until repeat demand and unit costs have been checked.",
    mistakes:
      "Avoid omitting founder time, taxes or payment delays from planning, but do not invent precise costs without quotes. Local rules and registration costs vary, so verify them with appropriate professionals or official sources.",
    nextSteps: [
      "Build a dated list of setup and monthly costs.",
      "Mark assumptions that need a quote or professional review.",
      "Set a spending cap tied to the next decision you need to make.",
    ],
  },
  {
    slug: "calculate-unit-economics-new-venture",
    title: "How to Calculate Unit Economics for a New Venture",
    summary:
      "Assess revenue and variable costs per customer or transaction to understand contribution margin and commercial viability.",
    category: "finance",
    minutes: 8,
    introduction:
      "Unit economics examine the revenue and costs associated with one customer, order, project or other useful unit. They help reveal whether growth could improve the business or simply multiply losses.",
    focus:
      "Choose a unit that matches how the business sells and delivers. Estimate net revenue per unit and the variable costs required to acquire, serve and support it; keep fixed overhead separate and state how uncertain inputs are.",
    method: [
      "Define the unit and period—for example one order or one customer-month.",
      "Estimate revenue after discounts and variable costs such as materials, fulfilment, fees and service time.",
      "Calculate contribution per unit and test sensitivity to lower prices, higher costs or repeat usage assumptions.",
    ],
    example:
      "Illustrative scenario: a subscription service models one customer-month, subtracting payment fees and variable support time from monthly revenue. The team separately checks how long customers stay rather than assuming repeat months continue indefinitely.",
    mistakes:
      "Do not call contribution margin profit: fixed costs, taxes, financing and other obligations remain. Avoid using an average that hides unusually costly customers or ignoring the cost of acquiring them.",
    nextSteps: [
      "Choose and define a unit that fits your sales model.",
      "List every variable cost attached to that unit.",
      "Recalculate under conservative price, cost and retention assumptions.",
    ],
  },
  {
    slug: "how-much-money-business-needs-to-start",
    title: "How Much Money Does Your Business Need to Get Started?",
    summary:
      "Estimate the cash required to validate an idea, deliver an initial offer and operate through the next decision point.",
    category: "finance",
    minutes: 7,
    introduction:
      "The amount needed to start depends on what must be learned and delivered before the next decision, not only on the ideal finished version of the business. A staged estimate can limit exposure while preserving a credible test.",
    focus:
      "Estimate cash for a defined milestone: research, prototype, first delivery or a short operating period. Include timing of receipts and payments, a reasonable contingency and the personal financial boundary you will not cross.",
    method: [
      "Choose the next milestone and identify its required people, tools, materials and time.",
      "Price each item using quotes or clearly labelled estimates; separate essential from deferrable spending.",
      "Forecast when cash is needed, what evidence the milestone should produce and what would trigger another investment decision.",
    ],
    example:
      "Illustrative scenario: a professional tests a service with three customers using existing equipment and a small software budget. The first funding decision covers the test and delivery window, not a full team or long-term office lease.",
    mistakes:
      "Do not copy another company's funding figure or include a vague buffer with no basis. Avoid risking emergency funds; for personal financial decisions, obtain advice suited to your circumstances.",
    nextSteps: [
      "Define the next milestone in observable terms.",
      "Estimate its cash and time requirements item by item.",
      "Set a limit and review evidence before committing to the next stage.",
    ],
  },
  {
    slug: "choose-business-structure-questions-before-register",
    title: "Choosing a Business Structure: Questions to Consider Before You Register",
    summary:
      "Understand the practical factors behind choosing an appropriate business structure and when to seek professional advice.",
    category: "legal",
    minutes: 8,
    introduction:
      "Choosing a business structure can affect responsibility, administration, tax treatment, ownership and the ability to bring in partners. The right choice depends on the venture and jurisdiction; there is no universal best structure.",
    focus:
      "Consider who owns the business, who bears obligations, how decisions are made, what customers or funders require and how much ongoing administration you can manage. Distinguish legal form from the business model itself.",
    method: [
      "List founders, ownership expectations, planned activities and likely contracts.",
      "Identify liability, reporting, tax and licensing questions that apply in your location.",
      "Compare options with a qualified local accountant or lawyer before registering or signing commitments.",
    ],
    example:
      "Illustrative scenario: two consultants plan to jointly deliver projects. Before choosing a form, they clarify ownership, decision rights, client contracting and what happens if one person leaves, then seek professional advice on suitable local options.",
    mistakes:
      "Do not choose a structure solely because it is quick to register or copy another founder's setup. This guide is general education, not legal or tax advice; rules differ by jurisdiction and circumstances.",
    nextSteps: [
      "Write down the ownership and operating questions that matter to your venture.",
      "Check current requirements through official local sources.",
      "Discuss the options with qualified legal and tax professionals before acting.",
    ],
  },
  {
    slug: "intellectual-property-founders-what-to-protect",
    title: "Intellectual Property for Founders: What Should You Protect?",
    summary:
      "Learn the basic differences between trademarks, copyright, patents, trade secrets and confidential information.",
    category: "legal",
    minutes: 7,
    introduction:
      "Founders create names, content, designs, inventions, processes and data, but these are not all protected in the same way. Understanding the basic categories helps identify questions to investigate before sharing or commercialising work.",
    focus:
      "Trademarks generally concern source-identifying signs; copyright covers qualifying original expression; patents may protect eligible inventions through a formal process; trade secrets depend on maintaining secrecy. The details and rights vary by jurisdiction.",
    method: [
      "Inventory the assets your venture creates or uses and who created each one.",
      "Check ownership terms in employment, contractor, supplier and collaboration agreements.",
      "Before public disclosure or filing decisions, seek qualified IP advice in the relevant jurisdiction.",
    ],
    example:
      "Illustrative scenario: a team develops a product name, software code and a mechanical feature. Each may raise a different question, so the founders record authorship, review contractor terms and consult an IP professional before announcing the invention.",
    mistakes:
      "Do not assume an idea alone is protected, that registration guarantees a right, or that a public search proves freedom to operate. This overview is educational and not legal advice.",
    nextSteps: [
      "Create an asset and creator inventory.",
      "Review agreements that could affect ownership or confidentiality.",
      "Ask an IP professional which protections and searches fit the specific asset.",
    ],
  },
  {
    slug: "check-before-business-while-employed",
    title: "What to Check Before Starting a Business While Employed",
    summary:
      "Review employment terms, intellectual property obligations, conflicts of interest and other constraints before proceeding.",
    category: "legal",
    minutes: 7,
    introduction:
      "Building an idea alongside employment can be practical, but employment terms and duties may affect outside work, use of information, inventions and conflicts. A careful review should come before substantial investment or public launch.",
    focus:
      "Check the actual contract and applicable policies for outside work approval, confidentiality, intellectual property, non-solicitation, conflicts and use of employer resources. The impact depends on the wording, role and local law.",
    method: [
      "Gather your employment agreement, current policies and relevant amendments.",
      "Identify clauses that could relate to your planned activity and write down concrete questions.",
      "Keep work time, equipment, accounts, data and confidential information separate; seek qualified legal advice where the boundary is unclear.",
    ],
    example:
      "Illustrative scenario: an engineer plans a product in a related field. Before prototyping, they review invention-assignment and outside-work terms, avoid employer equipment and data, and consult counsel about the proposed scope.",
    mistakes:
      "Do not assume evening work automatically resolves ownership or conflict questions. Avoid copying employer materials or approaching restricted customers; this article is not a substitute for advice on your contract or jurisdiction.",
    nextSteps: [
      "Read the applicable contract and workplace policies.",
      "Document how the proposed venture is distinct and independently developed.",
      "Get qualified advice before proceeding where obligations are uncertain.",
    ],
  },
  {
    slug: "simple-operating-procedures-small-business",
    title: "How to Create Simple Operating Procedures for a Small Business",
    summary:
      "Document repeatable tasks, responsibilities and quality checks so that essential work does not depend on memory alone.",
    category: "legal",
    minutes: 6,
    introduction:
      "Simple procedures make repeat work easier to hand over and improve. They are most valuable for tasks that recur, affect customers or create risk when a step is missed; they need not become a large manual.",
    focus:
      "A useful procedure states its purpose, owner, trigger, required inputs, ordered steps, quality check and escalation path. Keep it short enough that someone doing the work can use it in context.",
    method: [
      "Choose one recurring task with a clear consequence when it is done inconsistently.",
      "Observe a capable person doing it and record decisions, hand-offs and common exceptions.",
      "Have someone else follow the draft, note confusion, then revise and set a review date.",
    ],
    example:
      "Illustrative scenario: a small consultancy documents how a new client is onboarded: confirm scope, collect approved materials, create a project folder, schedule a kickoff and check that access is limited to the right team.",
    mistakes:
      "Avoid documenting an ideal process that no one follows, copying unnecessary detail or leaving ownership unclear. Review procedures when tools, rules or responsibilities change.",
    nextSteps: [
      "Select one repetitive, important task.",
      "Draft a one-page procedure with an owner and exception path.",
      "Ask a colleague to use it and revise based on observed gaps.",
    ],
  },
  {
    slug: "identify-manage-risks-before-launching",
    title: "How to Identify and Manage Risks Before Launching",
    summary:
      "Map important commercial, operational, financial and legal risks, then prioritise practical mitigation measures.",
    category: "legal",
    minutes: 7,
    introduction:
      "Risk planning is not an exercise in predicting every bad outcome. It helps a founder identify what could materially affect customers or the venture, understand early warning signs and decide which precautions are proportionate before launch.",
    focus:
      "Describe each risk as a cause, an event and a consequence. Consider likelihood and impact, but also how quickly you could detect it and whether a low-cost prevention or response is available.",
    method: [
      "Review customer demand, delivery, cash, people, technology, data, legal and supplier dependencies.",
      "Rank risks by likely impact and identify an owner, warning signal and mitigation for the most important few.",
      "Test critical safeguards and revisit the list when assumptions or operating conditions change.",
    ],
    example:
      "Illustrative scenario: a service depends on a single supplier. The founder records the disruption risk, identifies a substitute source, limits the initial customer commitment and sets a signal to review if delivery times rise.",
    mistakes:
      "Do not create a long register with no owners or actions. Avoid claiming a risk is eliminated by a checklist, and seek specialist advice for legal, safety, data or financial exposures beyond your expertise.",
    nextSteps: [
      "List five events that could materially disrupt the first offer.",
      "For each, name an early warning sign and practical response.",
      "Assign owners and review the highest risks before launch.",
    ],
  },
];

export const resources: Resource[] = [
  ...existingResources,
  ...additionalResourceDrafts.map(createPracticalArticle),
];

export function isPublishedResource(resource: Resource) {
  return (
    resource.status === "published" &&
    resource.editorialApproved &&
    resource.introduction.trim().length > 0 &&
    resource.sections.length > 0 &&
    resource.sections.every(
      (section) =>
        section.heading.trim().length > 0 &&
        section.paragraphs.some((paragraph) => paragraph.trim().length > 0),
    ) &&
    resource.nextSteps.some((step) => step.trim().length > 0) &&
    (!["Worksheet", "Template", "Video"].includes(resource.type) || Boolean(resource.assetUrl))
  );
}

export function getPublishedResources(source: Resource[] = resources) {
  return source.filter(isPublishedResource);
}
export function findPublishedResource(slug: string) {
  return getPublishedResources().find((resource) => resource.slug === slug);
}

// Set only to the verified published/custom origin, never the draft preview origin.
export const PUBLIC_SITE_ORIGIN = "";
export function canonicalLinks(path: string) {
  return [{ rel: "canonical", href: PUBLIC_SITE_ORIGIN ? `${PUBLIC_SITE_ORIGIN}${path}` : path }];
}
export function publishedPagePaths() {
  return [
    "/",
    "/about",
    "/programs",
    "/experience-to-enterprise",
    "/contact",
    "/resources",
    ...getPublishedResources().map((resource) => `/resources/${resource.slug}`),
  ];
}

// Real sample asset required before exposing the download action.
export const SAMPLE_DOSSIER_URL = "";
export const SAMPLE_DISCLOSURE =
  "Illustrative example for demonstration purposes. Not an actual participant venture or program outcome.";
