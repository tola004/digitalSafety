// answer = index (0-3) of the correct option
const M1 = "digital-threats-awareness";
const M2 = "protect-what-is-important";
const M3 = "always-verify-before-you-share";
const M4 = "digital-health-well-being";

export const questions = [
  // ----- Module 1 -----
  {
    id: "q1",
    moduleId: M1,
    question:
      "Which attack uses automated tools to try reused passwords on many accounts?",
    options: ["Pharming", "Credential stuffing", "DDoS attack", "Adware"],
    answer: 1,
    explanation:
      "Credential stuffing exploits reused passwords. Using a unique password for each account makes it far less effective.",
  },
  {
    id: "q2",
    moduleId: M1,
    question: "What is a Trojan horse?",
    options: [
      "A program that only shows unwanted ads",
      "Software disguised as legitimate that steals or damages data",
      "An attack that floods a website with traffic",
      "A fake Wi-Fi hotspot",
    ],
    answer: 1,
    explanation:
      "A Trojan horse looks like legitimate software but steals or damages data once installed.",
  },
  {
    id: "q3",
    moduleId: M1,
    question:
      "Which threat redirects you to a fraudulent website to steal your data?",
    options: ["Pharming", "Spyware", "DDoS attack", "Zero-day exploit"],
    answer: 0,
    explanation:
      "Pharming redirects users to fake websites. Always verify the URL and look for https and the padlock icon.",
  },
  {
    id: "q4",
    moduleId: M1,
    question: "Why should young people think before they post online?",
    options: [
      "Posts are always removed after 24 hours",
      "Online posts can be permanent, even if deleted, and may affect jobs or college admissions",
      "Only public figures have digital footprints",
      "Privacy settings make posts impossible to copy",
    ],
    answer: 1,
    explanation:
      "A digital footprint is lasting. Posts can resurface later and affect reputations and opportunities.",
  },
  {
    id: "q5",
    moduleId: M1,
    question: "What is a main concern about deep fakes?",
    options: [
      "They make devices slower",
      "They only affect old software",
      "They can spread misinformation and erode trust in online content",
      "They block internet traffic",
    ],
    answer: 2,
    explanation:
      "Deep fakes can spread false information and make people doubt what is real online.",
  },

  // ----- Module 2 -----
  {
    id: "q6",
    moduleId: M2,
    question: "What does two-factor authentication (2FA) provide?",
    options: [
      "A faster internet connection",
      "An extra layer of security with a second verification method",
      "Automatic backups",
      "Protection from all malware",
    ],
    answer: 1,
    explanation:
      "2FA requires a second verification method, making it harder for unauthorized users to access your accounts.",
  },
  {
    id: "q7",
    moduleId: M2,
    question: "Which Wi-Fi encryption should you use?",
    options: [
      "WEP",
      "WPA2 or WPA3",
      "No encryption",
      "Any, they are all the same",
    ],
    answer: 1,
    explanation:
      "WPA2 and WPA3 offer stronger security than outdated protocols like WEP.",
  },
  {
    id: "q8",
    moduleId: M2,
    question: "What is the best practice on public Wi-Fi?",
    options: [
      "Do online banking as normal",
      "Disable your firewall",
      "Avoid sensitive information and use a VPN",
      "Share files with nearby devices",
    ],
    answer: 2,
    explanation:
      "Public Wi-Fi is often unsecured. Avoid sensitive activity and use a VPN to encrypt your traffic.",
  },
  {
    id: "q9",
    moduleId: M2,
    question: "Why should you update your router's firmware?",
    options: [
      "To patch vulnerabilities and improve stability",
      "To change your internet provider",
      "To remove the need for a password",
      "To increase your monthly data",
    ],
    answer: 0,
    explanation:
      "Manufacturers release firmware updates to patch security vulnerabilities and improve performance.",
  },
  {
    id: "q10",
    moduleId: M2,
    question: "Which statement about the dark web is correct?",
    options: [
      "It never affects people who do not use it",
      "Only criminals are affected by it",
      "Data stolen in breaches often ends up there, so non-users can be affected",
      "It is the same as a normal search engine",
    ],
    answer: 2,
    explanation:
      "Stolen emails, passwords, and financial information from breaches often end up on the dark web.",
  },

  // ----- Module 3 -----
  {
    id: "q11",
    moduleId: M3,
    question: "Which is a method websites use to track your activity?",
    options: ["Firmware", "Web beacons", "WPA3 encryption", "Antivirus scans"],
    answer: 1,
    explanation:
      "Websites track users with cookies, web beacons, and fingerprinting.",
  },
  {
    id: "q12",
    moduleId: M3,
    question: "What does private browsing mode do?",
    options: [
      "Makes you completely anonymous online",
      "Stops your device from storing browsing data, but does not make you fully anonymous",
      "Blocks all malware",
      "Hides your activity from every website",
    ],
    answer: 1,
    explanation:
      "Private browsing prevents local storage of browsing data, but it does not make you fully anonymous.",
  },
  {
    id: "q13",
    moduleId: M3,
    question: "Which is a sign that a privacy policy may be exploitative?",
    options: [
      "It offers clear options to delete your account",
      "It requests data that is excessive for the service",
      "It explains how to withdraw consent",
      "It lists the data collected",
    ],
    answer: 1,
    explanation:
      "Excessive data requests, sharing with third parties for profit, and no opt-out options are warning signs.",
  },
  {
    id: "q14",
    moduleId: M3,
    question: "What are Terms & Conditions?",
    options: [
      "Optional suggestions from a company",
      "Legally binding agreements between you and an online service provider",
      "A type of antivirus software",
      "A list of your saved passwords",
    ],
    answer: 1,
    explanation:
      "Terms & Conditions are legally binding and outline how you can use the service and what you give up for access.",
  },
  {
    id: "q15",
    moduleId: M3,
    question: "What happens in the social validation loop?",
    options: [
      "Likes and shares activate the brain's reward center and can lead to impulsive sharing",
      "Platforms stop showing you likes",
      "You automatically verify every post",
      "Your device updates its software",
    ],
    answer: 0,
    explanation:
      "The loop can lead to impulsive sharing driven by emotion. Evaluate content for accuracy before sharing.",
  },

  // ----- Module 4 -----
  {
    id: "q16",
    moduleId: M4,
    question: "Which practice helps reduce eye strain from long screen time?",
    options: [
      "The 20-20-20 rule",
      "Using the screen in the dark",
      "Longer sessions without breaks",
      "Ignoring posture",
    ],
    answer: 0,
    explanation:
      "The 20-20-20 rule, proper ergonomics, and regular breaks help reduce the effects of prolonged screen time.",
  },
  {
    id: "q17",
    moduleId: M4,
    question: "How can evening screen time affect sleep?",
    options: [
      "Blue light interferes with melatonin production",
      "It makes you sleep deeper",
      "It has no effect",
      "It increases melatonin production",
    ],
    answer: 0,
    explanation:
      "Blue light exposure interferes with melatonin production and can disrupt sleep.",
  },
  {
    id: "q18",
    moduleId: M4,
    question: "Which of these is a fact rather than an opinion?",
    options: [
      "The sunset is the most beautiful part of the day",
      "The Earth orbits the sun",
      "Winter is the best season",
      "This is the best app ever",
    ],
    answer: 1,
    explanation:
      "Facts are objective and verifiable. Opinions reflect personal beliefs.",
  },
  {
    id: "q19",
    moduleId: M4,
    question: "What is an echo chamber?",
    options: [
      "A noisy chat room",
      "A feed that mostly shows content reinforcing your beliefs and filters out opposing views",
      "A type of firewall",
      "A kind of password manager",
    ],
    answer: 1,
    explanation:
      "Algorithms prioritize content we engage with, which can create echo chambers.",
  },
  {
    id: "q20",
    moduleId: M4,
    question: "Which is a good strategy for spotting fake news?",
    options: [
      "Share it quickly if it feels shocking",
      "Only read the headline",
      "Cross-reference the information with multiple sources",
      "Trust it if it has many likes",
    ],
    answer: 2,
    explanation:
      "Check the source, read beyond headlines, verify dates and authors, and cross-reference with several sources.",
  },
];
