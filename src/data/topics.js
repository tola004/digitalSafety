// Field order for T(): moduleId, id, title, description, introduction,
// explanation, points[], examples[], tips[], takeaways[]
const M1 = "digital-threats-awareness";
const M2 = "protect-what-is-important";
const M3 = "always-verify-before-you-share";
const M4 = "digital-health-well-being";

const T = (
  moduleId,
  id,
  title,
  description,
  introduction,
  explanation,
  points,
  examples,
  tips,
  takeaways,
) => ({
  id,
  moduleId,
  title,
  description,
  introduction,
  explanation,
  points,
  examples,
  tips,
  takeaways,
});

export const topics = [
  // ================= MODULE 1 =================
  T(
    M1,
    "threats-damage",
    "Threats & Damage",
    "How digital threats cause data loss, identity theft, financial loss, and reputation damage.",
    "Digital security threats can seriously affect both individuals and businesses. This topic looks at the four main kinds of damage they can cause.",
    "Hacking, malware, and even accidental deletion can destroy or expose sensitive information. When criminals steal personal data, they can use it to commit fraud, and the damage often lasts long after the attack. Businesses may lose money and customer trust, while individuals may lose precious files and face stress and social stigma.",
    [
      "Data Loss: hacking, malware, or accidental deletion can wipe out important documents or irreplaceable items like family photos.",
      "Identity Theft: criminals steal data such as Social Security numbers or credit card details to commit fraud.",
      "Financial Loss: unauthorized transactions for individuals; stolen funds, legal fees, and higher security costs for businesses.",
      "Reputation Damage: businesses lose customer trust, and identity theft victims may suffer social stigma.",
    ],
    [
      "A student's laptop is infected with malware and every family photo on it is lost because there was no backup.",
      "A criminal uses stolen card details to make purchases, and the victim must spend a long time proving the purchases were not theirs.",
    ],
    [
      "Back up important files regularly.",
      "Keep sensitive details such as ID and card numbers private.",
      "Check your bank statements often for transactions you do not recognize.",
    ],
    [
      "Digital threats can cause lasting damage, not just short-term trouble.",
      "Prevention is far easier than recovery.",
    ],
  ),

  T(
    M1,
    "potential-impacts",
    "Potential Impacts",
    "Common threats such as malware, phishing, social engineering, DDoS, and credential stuffing, and what they lead to.",
    "Knowing the most common digital threats and what they can cause is the first step toward preventing them.",
    "Attackers use many methods. Some infect your devices, some trick you into giving information away, and some overload services or exploit weak habits like reusing passwords. Even people inside an organization can cause a breach, on purpose or through carelessness.",
    [
      "Malware: viruses, worms, trojans, and ransomware disrupt systems, steal data, or demand payment. Ransomware can seriously harm individuals, businesses, hospitals, and even governments.",
      "Phishing: attackers pose as legitimate entities to trick you into revealing login or financial details.",
      "Social Engineering: psychological manipulation, including pretexting and baiting, that exploits human behavior.",
      "DDoS Attacks: networks or websites are overwhelmed with traffic, causing downtime, lost revenue, and reputational damage.",
      "Credential Stuffing: automated tools try reused passwords on many accounts.",
      "Zero-Day Exploits: attacks on unknown software weaknesses before they are fixed.",
      "Insider Threats: employees or associates cause breaches intentionally or through negligence.",
    ],
    [
      "An email that looks like it is from your bank asks you to confirm your password. This is phishing.",
      "An attacker tries a password leaked from one website on many other websites, hoping you reused it. This is credential stuffing.",
    ],
    [
      "Use a different password for every account.",
      "Do not enter login details after clicking a link in an unexpected message.",
      "Keep your software updated so known weaknesses are fixed.",
    ],
    [
      "Threats range from technical attacks to psychological tricks.",
      "Awareness of each type helps you prevent it.",
    ],
  ),

  T(
    M1,
    "spotting-the-signs",
    "Spotting the Signs",
    "A guide to recognizing spyware, adware, trojans, pharming, Wi-Fi eavesdropping, and other threats.",
    "Many threats leave warning signs. Learning to notice them early can protect your data and your devices.",
    "Each threat behaves differently, but common clues include a slow device, unexpected pop-ups, strange program behavior, and unusual account activity. For each threat there is a simple protective habit, such as updating software, verifying website addresses, and avoiding risky networks.",
    [
      "Spyware: secretly monitors your device. Signs: slow performance, odd account activity, pop-ups. Use anti-spyware tools and avoid suspicious links or downloads.",
      "Adware: bundled with free software and shows unwanted ads. Use ad-blockers and download from trusted sources.",
      "Trojan Horse: disguised as legitimate software to steal or damage data. Be careful with free downloads.",
      "Zero-Day Exploits: target unknown weaknesses. Keep your system and software updated.",
      "Drive-By Downloads: unintentional downloads from compromised websites. Update browsers and plugins and use antivirus software.",
      "Pharming: redirects you to fraudulent websites to steal data. Verify the URL and look for https and the padlock icon.",
      "Wi-Fi Eavesdropping: attackers intercept data on unsecured Wi-Fi. Avoid sensitive transactions on public Wi-Fi and use a VPN.",
      "Deep Fakes: fake media used to deceive. Be skeptical of unusual video or audio messages.",
    ],
    [
      "After installing a free app, your phone becomes slow and keeps showing pop-ups. These can be signs of adware or spyware.",
      "A website looks like your bank, but the address is slightly different. It could be a pharming attempt.",
    ],
    [
      "Always check the web address before entering a password.",
      "Download software only from trusted sources.",
      "Install updates for your system, browser, and plugins.",
    ],
    [
      "Unusual behavior on a device is a warning worth investigating.",
      "Simple habits defend against many threats at once.",
    ],
  ),

  T(
    M1,
    "protecting-young-users",
    "Protecting Young Users",
    "How parents and carers can keep children safe online through preparation, communication, and vigilance.",
    "Children today are surrounded by technology and use devices for both learning and entertainment. The internet also exposes them to risks such as inappropriate content, cyberbullying, and online predators.",
    "Parents and carers can help by combining technology, open discussion, and regular involvement in a child's online activities. The goal is to give children the knowledge to navigate the internet safely, not only to restrict them.",
    [
      "Understanding the Risks: harmful behavior can appear on social media, chat rooms, and gaming platforms. Internet anonymity can embolden negative behavior.",
      "Parental Controls: block inappropriate content, set screen time limits, and monitor activity. Tools like Qustodio or Net Nanny can restrict unsafe sites and apps.",
      "Open Communication: teach children about privacy, encourage them to report anything uncomfortable, and explain why sharing their full name or school is risky.",
      "Addressing Cyberbullying: discuss it, encourage reporting, and reinforce kindness online.",
      "Screen Time: set clear rules and encourage breaks and offline activities.",
      "Stay Informed: keep up with the apps children use. Common Sense Media can help check apps, games, and movies.",
    ],
    [
      "A child is upset by mean messages in a game chat. Because they have been told to speak up, they show a parent right away.",
      "A parent sets screen time limits and talks with their child about why they should never share their school name online.",
    ],
    [
      "Turn on parental controls on children's devices.",
      "Talk regularly about what children see and do online.",
      "Agree on clear rules for device use.",
    ],
    [
      "Technology, conversation, and regular involvement work best together.",
      "Children who feel safe to report problems are better protected.",
    ],
  ),

  T(
    M1,
    "footprints-consequences",
    "Footprints & Consequences",
    "Why everything you do online leaves a lasting digital footprint.",
    "A digital footprint is the lasting record of everything you do online. It is important to understand this early, because it can affect your future.",
    "Online posts and actions are often permanent, even if deleted, and can resurface later. They can affect reputations and opportunities such as jobs or college admissions. Public figures have faced backlash for old posts, and young users are also vulnerable to scrutiny.",
    [
      "Posts can be copied or saved, so deleting does not always remove them.",
      "Old posts can resurface and affect jobs or college admissions.",
      "Young people can face scrutiny just like public figures.",
      "Think before posting, use privacy settings, and focus on positive contributions.",
    ],
    [
      "A person applies for a job and the employer finds an old, careless post from years earlier.",
      "A student shares only positive projects and achievements online, building a favorable reputation.",
    ],
    [
      "Pause and think before you post.",
      "Use privacy settings to control who sees your content.",
      "Share things that reflect the person you want to be.",
    ],
    [
      "Online actions can last much longer than you expect.",
      "Responsible posting protects your future.",
    ],
  ),

  T(
    M1,
    "deep-fakes",
    "Deep Fakes",
    "Highly convincing fake videos, images, and audio made with artificial intelligence.",
    "Deep fakes are highly convincing but fabricated videos, images, or audio created using artificial intelligence, particularly generative adversarial networks (GANs).",
    "Deep fake technology can have positive uses, such as in entertainment, but it also poses significant risks. As fakes become more convincing, it becomes harder to know what is real, which can harm individuals and society.",
    [
      "Misinformation: deep fakes can spread false information about public figures or individuals, leading to identity theft, harassment, or blackmail.",
      "Misleading videos can cause damage before the truth is revealed.",
      "Erosion of Trust: people may begin to doubt the authenticity of everything they see online.",
      "Staying informed and developing detection and prevention methods helps maintain trust.",
    ],
    [
      "A video appears to show a well-known person saying something shocking. It spreads quickly before anyone checks if it is real.",
      "A fake audio message imitates a family member's voice to deceive someone.",
    ],
    [
      "Be skeptical of unusual or shocking videos and audio.",
      "Check whether trusted sources report the same story.",
      "Do not share content until you have verified it.",
    ],
    [
      "Seeing is no longer always believing.",
      "Verification is the best defense against deep fakes.",
    ],
  ),

  T(
    M1,
    "behind-the-filters",
    "Behind the Filters",
    "How curated and filtered social media content can create unrealistic expectations.",
    "Social media, particularly Instagram, shapes how we see ourselves and others. It offers inspiration, creativity, and community, but it can be hard to tell curated content from real life.",
    "Influencers shape trends with carefully edited and filtered content. Posts can inspire, but they can also create pressure to match idealized standards, especially for young users, without showing the challenges and setbacks behind the image.",
    [
      "Influencers and Curated Content: edited, filtered posts can create unrealistic expectations about beauty and lifestyle.",
      "Unrealistic Expectations: young users may feel pressure to conform to idealized standards.",
      "Positive Aspects: social media also promotes diversity and body positivity and lets people share their stories.",
      "Critical Consumption: what you see online is only a small part of someone's life.",
    ],
    [
      "A photo looks perfect, but it was edited and filtered, and the difficult moments were left out.",
      "A creator shares an honest story that challenges traditional beauty standards and inspires others.",
    ],
    [
      "Remember that posts are curated highlights.",
      "Follow content that improves your well-being.",
      "Take a break if social media feels overwhelming.",
    ],
    [
      "Online images are not the full reality.",
      "Mindful use keeps you grounded.",
    ],
  ),

  T(
    M1,
    "eco-influence",
    "Eco-Influence",
    "Digital literacy meets environmental awareness: spotting misinformation and greenwashing.",
    "This topic connects digital literacy and environmental awareness, with five tips for responsible online behavior.",
    "The internet is full of environmental claims, some accurate and some misleading. Digital literacy helps you check sources, question company claims, and understand the environmental cost of our own digital habits.",
    [
      "Spot Environmental Misinformation: verify sources and cross-reference information.",
      "See Through Greenwashing: look for third-party certifications and dig deeper into company practices.",
      "Engage in Digital Activism Responsibly: research organizations and understand their goals before supporting them.",
      "Understand the Environmental Impact of Digital Technology: manage data, recycle devices, and support sustainable companies.",
      "Integrate Environmental Education into Digital Literacy to make informed, sustainable choices.",
    ],
    [
      'A company advertises itself as "eco-friendly" on social media. You check whether an independent certification supports the claim.',
      "You see a viral post about an environmental cause and research the organization before sharing it.",
    ],
    [
      "Cross-check environmental claims with more than one source.",
      "Delete unused files and recycle old electronics.",
      "Support organizations you have researched.",
    ],
    [
      "Digital literacy and environmental responsibility go together.",
      "Small digital habits can reduce your footprint.",
    ],
  ),

  // ================= MODULE 2 =================
  T(
    M2,
    "protect-your-devices",
    "Protect Your Devices",
    "Security software, updates, strong passwords, and two-factor authentication.",
    "Protecting your devices and digital content starts with a few basic but powerful habits.",
    "Make sure your computers, smartphones, and tablets run up-to-date security software. Keep systems and apps updated, manage passwords well, and add two-factor authentication for extra safety. Combining these habits greatly improves your digital security.",
    [
      "Use up-to-date antivirus, firewalls, and anti-malware tools.",
      "Regularly update operating systems and applications to patch vulnerabilities.",
      "Avoid downloading software from unknown sources.",
      "Use strong, unique passwords for each account and consider a password manager.",
      "Two-factor authentication (2FA) requires a second verification method.",
      "Be careful what personal information you share and reset passwords immediately if you suspect a breach.",
    ],
    [
      "You turn on automatic updates, so a security fix is installed without you having to remember.",
      "Someone learns your password, but cannot log in because your account also needs a verification code.",
    ],
    [
      "Enable 2FA on important accounts.",
      "Use a password manager to store unique passwords.",
      "Change passwords right away after a suspected breach.",
    ],
    [
      "Updated software, strong passwords, and 2FA work together.",
      "Cautious behavior is part of security.",
    ],
  ),

  T(
    M2,
    "your-options",
    "Your Options",
    "How to secure computers and mobile devices, and how they differ.",
    "Computers and mobile devices need protection, but the tools differ between them.",
    "Computers rely on antivirus programs and firewalls. Mobile devices rely more on built-in iOS and Android security, secure app stores, and carrier-managed network security. Both need regular updates and good locking habits.",
    [
      "Antivirus: essential on computers; mobile devices rely mostly on built-in security features.",
      "Firewalls: computers use them to block suspicious network traffic; mobile devices usually do not.",
      "Updates: both device types need regular updates. Enable automatic updates.",
      "Locking: use passwords, PINs, or biometrics such as fingerprint or face recognition.",
      "Mobile-Specific Threats: SIM swapping and physical theft. Use remote-wipe features such as Find My Device on Android.",
    ],
    [
      "A phone is lost on a bus. Because it is locked and has remote wipe enabled, the owner can protect the data.",
      "A laptop has a firewall and antivirus enabled, which helps block suspicious activity.",
    ],
    [
      "Lock every device with a PIN, password, or biometric method.",
      "Turn on automatic updates.",
      "Enable device-finding and remote-wipe features on your phone.",
    ],
    [
      "Different devices need different protections.",
      "Locking and updating are essential for all of them.",
    ],
  ),

  T(
    M2,
    "is-it-secure",
    "Is it Secure?",
    "Securing home and public networks with encryption, router settings, and VPNs.",
    "A secure network connection is essential for protecting your personal information, at home and in public.",
    "Use strong Wi-Fi encryption at home and be extra careful on public networks, which are often unsecured. A VPN encrypts your traffic and adds protection, especially in public places.",
    [
      "Use WPA2 or WPA3 encryption, which is stronger than outdated WEP.",
      "Home network: change the router's default password, update firmware, use WPA3, consider disabling remote management, and create a guest network.",
      "Public Wi-Fi: avoid sensitive information, use a VPN, and make sure you are connected to the correct network to avoid fake hotspots.",
      "Public computers may have malware or keyloggers. Avoid logging into personal accounts, clear history, and log out.",
      "On public Wi-Fi, use HTTPS sites, enable firewall and antivirus, and disable file sharing.",
    ],
    [
      "At a cafe, you check the exact network name with staff to avoid connecting to a fake hotspot.",
      "You change your home router's default password so strangers cannot guess it.",
    ],
    [
      "Never do banking on public Wi-Fi without a VPN.",
      "Always log out of public computers.",
      "Set up a guest network for visitors.",
    ],
    [
      "Encryption, unique passwords, updates, and VPNs protect your connection.",
      "Be extra cautious on public networks.",
    ],
  ),

  T(
    M2,
    "digital-privacy",
    "Digital Privacy",
    "Why privacy matters in an age of surveillance and how to protect it.",
    "Governments and corporations increasingly collect and analyze personal data, which makes privacy a critical concern.",
    "Data may be collected for security or marketing, but it also raises ethical questions about misuse, such as monitoring or controlling populations and influencing public opinion. Understanding these risks is part of digital literacy.",
    [
      "Use encrypted communication tools.",
      "Use a Virtual Private Network (VPN).",
      "Manage your digital footprint by limiting what you share.",
      "Update privacy settings regularly and use strong passwords.",
      "Unchecked mass data collection can threaten democracy, free speech, and the integrity of elections.",
    ],
    [
      "You review the privacy settings of an app and turn off sharing you do not need.",
      "You choose an encrypted messaging tool for private conversations.",
    ],
    [
      "Share only the information that is necessary.",
      "Review privacy settings on a regular schedule.",
      "Learn about privacy and support better privacy protections.",
    ],
    [
      "Privacy protects personal freedom and societal values.",
      "Digital literacy helps you make informed choices.",
    ],
  ),

  T(
    M2,
    "the-dark-web",
    "The Dark Web",
    "Why the dark web can affect you even if you never visit it.",
    "The dark web may seem distant, but it can still affect everyday internet users.",
    "Stolen personal data from breaches, such as email addresses, passwords, and financial information, often ends up on the dark web, where cybercriminals can access it. This is why protecting your information matters even if you never visit.",
    [
      "Misconception: the dark web is only for criminals.",
      "Misconception: it does not affect people who do not use it.",
      "Anyone can be affected by a data breach that exposes their information.",
      "Protect yourself with strong unique passwords, 2FA, monitoring financial accounts, and updated privacy settings.",
    ],
    [
      "A website you used suffers a breach and your email and password are exposed, even though you never visit the dark web.",
      "You notice an unknown transaction on your account because you check your statements regularly.",
    ],
    [
      "Never reuse passwords between accounts.",
      "Enable 2FA wherever possible.",
      "Check your financial accounts regularly.",
    ],
    [
      "Data breaches can put your information in criminal hands.",
      "Good habits reduce the damage.",
    ],
  ),

  T(
    M2,
    "firmware-update",
    "Firmware Update",
    "How to update your router's firmware for security and performance.",
    "Updating your router's firmware is important for both security and performance. Manufacturers release updates to patch vulnerabilities and improve stability.",
    "Firmware is the software that runs your router. Outdated firmware may contain known weaknesses. Checking and updating it takes a few steps.",
    [
      'Find your model and version: log into the router by entering its IP address in a browser and look under settings such as "System" or "Administration".',
      "Check for updates: visit the manufacturer's website (for example Netgear or TP-Link), search your model, and compare firmware versions.",
      "Download and install: download the firmware file from the manufacturer, upload it through the router settings page, and follow the on-screen instructions.",
      "Verify and test: confirm the new version and test your network.",
    ],
    [
      "You discover your router has an older firmware version than the manufacturer's latest release, so you update it.",
      "After updating, you test that your devices still connect properly.",
    ],
    [
      "Only download firmware from the manufacturer's official website.",
      "Check for updates regularly.",
      "Test your network after each update.",
    ],
    [
      "Firmware updates fix weaknesses and improve stability.",
      "Regular checks keep your network secure.",
    ],
  ),

  T(
    M2,
    "maintaining-security-efficiency",
    "Maintaining Security & Efficiency",
    "Applying security best practices in everyday situations.",
    "Good security depends on making the right decisions in real situations, not just knowing the tools.",
    "Security best practices apply at home, in public, and at work. Prioritizing security over convenience helps keep both personal and organizational data protected.",
    [
      "Use multi-factor authentication (MFA).",
      "Verify suspicious emails before acting on them.",
      "Install software updates promptly.",
      "Secure sensitive data when using public Wi-Fi.",
      "Manage data access responsibly and protect sensitive information in the workplace.",
      "Take part in cybersecurity training.",
    ],
    [
      "You receive an unexpected email asking for urgent action and you verify it through an official channel before replying.",
      "At work, you only access the data you need and keep sensitive files protected.",
    ],
    [
      "Choose security over convenience.",
      "Install updates as soon as they are available.",
      "Join training offered by your school or workplace.",
    ],
    [
      "Consistent habits matter more than one-time actions.",
      "Security protects both personal and organizational data.",
    ],
  ),

  // ================= MODULE 3 =================
  T(
    M3,
    "safe-navigation",
    "Safe Navigation",
    "How websites track you and how to protect your privacy while browsing.",
    "Navigation tracking means websites and services monitor your online activities.",
    "Tracking uses cookies, web beacons, and fingerprinting. It can improve your experience, but it can also build detailed profiles of your behavior that are used for targeted ads or sold to third parties. Data breaches can also expose personal information and lead to identity theft.",
    [
      "Tracking methods: cookies, web beacons, and fingerprinting.",
      "Private browsing mode prevents your device from storing browsing data, but does not make you fully anonymous.",
      "Ad blockers and tracker blockers help limit tracking.",
      "Regularly clear cookies and cache.",
    ],
    [
      "After viewing a product online, you keep seeing ads for it on other sites. This is tracking in action.",
      "You use a tracker blocker to reduce how much data websites collect.",
    ],
    [
      "Use private browsing on shared devices.",
      "Install a reputable ad or tracker blocker.",
      "Clear cookies and cache regularly.",
    ],
    [
      "Tracking builds detailed profiles of your behavior.",
      "Private browsing helps, but it is not full anonymity.",
    ],
  ),

  T(
    M3,
    "clearing-browser-settings",
    "Clearing Your Browser Settings",
    "Why and how to clear history, cookies, saved passwords, and cached data.",
    "Clearing your browser data regularly is important for online privacy and security.",
    "Browsers such as Google Chrome, Mozilla Firefox, and Microsoft Edge store history, cookies, saved passwords, and cached data. This is convenient, but risky if your device is lost, stolen, or accessed by someone else.",
    [
      "Browsers store history, cookies, saved passwords, and cache.",
      "Stored data is risky if your device is lost, stolen, or accessed by unauthorized people.",
      "Clearing it reduces unauthorized access and limits third-party tracking.",
      "Privacy tools like ad blockers help prevent unnecessary data storage.",
    ],
    [
      "You use a shared computer at school and clear your browsing data before leaving.",
      "You remove saved passwords from a browser on a device you are about to give away.",
    ],
    [
      "Open your browser settings and clear browsing data regularly.",
      "Avoid saving passwords on shared or public computers.",
      "Use ad blockers to reduce stored data.",
    ],
    [
      "Convenience stored in a browser can become a risk.",
      "Regular clearing protects your privacy.",
    ],
  ),

  T(
    M3,
    "online-services-apps",
    "Online Services & Apps",
    "Protecting personal data when using apps and online services.",
    "Apps and online services often collect personal data, so you need to be careful about what you share.",
    "Three habits keep you in control: avoid sharing sensitive financial information, understand privacy policies, and manage your data and accounts.",
    [
      "Never send scans of credit cards or share PIN codes online. Legitimate services will not ask for them by email or chat.",
      "Review privacy policies to learn what data is collected and whether it is shared.",
      "Delete unused accounts and manage privacy settings to limit data collection.",
      "Use password managers and privacy-focused browsers.",
    ],
    [
      "A message asks you to email a photo of your card and PIN. You recognize it as a scam and do not reply.",
      "You delete an old account you no longer use so less of your data is stored.",
    ],
    [
      "Never share PIN codes or card scans online.",
      "Delete accounts you no longer use.",
      "Check an app's privacy settings after installing it.",
    ],
    [
      "Stay informed and proactive.",
      "You can control how much data services collect.",
    ],
  ),

  T(
    M3,
    "privacy-policies",
    "Privacy Policies",
    "What privacy policies say and how to judge whether they are fair.",
    "Privacy policies explain how companies collect, use, and share your personal data.",
    "Many people skip them, but they are the key to understanding how your information is managed. A policy may ask for basic details like your name or more sensitive data like your location and browsing habits.",
    [
      "Is the requested data excessive for the service?",
      "Is your information shared with third parties for profit?",
      "Are there clear options to opt out or control your data?",
      "Look for account deletion and consent withdrawal options.",
    ],
    [
      "A simple flashlight app asks for access to your contacts and location. That may be excessive for its purpose.",
      "A service clearly explains how to delete your account and data. This is a good sign.",
    ],
    [
      "Read the sections on data collection and sharing.",
      "Think about whether the data requested matches the service.",
      "Choose services that let you opt out.",
    ],
    [
      "Privacy policies are worth reading.",
      "Knowing what you agree to helps protect your information.",
    ],
  ),

  T(
    M3,
    "terms-conditions",
    "Terms & Conditions",
    "Understanding the legally binding agreements behind online services.",
    "Terms & Conditions are legally binding agreements between you and an online service provider.",
    "They outline how you can use the service, what happens in disputes, and what you give up in exchange for access. Skipping them can lead to unexpected surprises.",
    [
      "Check whether the company can change the rules without notice.",
      "Look for clauses that limit the company's liability.",
      "Look for mandatory arbitration.",
      "Look for options to opt out of features, manage data sharing, or cancel the service.",
    ],
    [
      "You notice a clause allowing the company to change the terms without notifying you, and decide to think twice before signing up.",
      "You find clear instructions for canceling the service, which makes the terms fairer.",
    ],
    [
      "Skim for key sections before agreeing.",
      "Check how to cancel a service.",
      "Review changes when you are notified of updates.",
    ],
    [
      "Terms & Conditions set the foundation of your relationship with a provider.",
      "Reviewing key sections prevents unexpected issues.",
    ],
  ),

  T(
    M3,
    "think-first",
    "Think First",
    "Why we should verify information before sharing it.",
    "It is easy to share information without checking whether it is true, but doing so can lead to misinformation and real-world consequences.",
    "Sharing unverified content also adds to the environmental impact of data traffic, which uses energy and increases the global carbon footprint. Responsible sharing helps reduce both misinformation and energy use.",
    [
      "Pause and verify accuracy before sharing.",
      "Be mindful of the environmental cost of unnecessary digital actions.",
      "Encourage fact-checking and digital literacy.",
      "Limit excessive sharing.",
      "Use tools like Snopes or FactCheck.org to verify information.",
    ],
    [
      "A dramatic post is spreading fast. You search it on a fact-checking site and find it is false, so you do not share it.",
      "A friend shares an unverified claim and you politely suggest checking it first.",
    ],
    [
      "Pause before pressing Share.",
      "Check the source and look for other reports.",
      "Use fact-checking websites.",
    ],
    [
      "Verify first, share second.",
      "Responsible sharing creates a healthier online environment.",
    ],
  ),

  T(
    M3,
    "social-validation",
    "Social Validation",
    "How likes and shares influence our sharing habits.",
    "The social validation loop is where likes and shares activate the brain's reward center and influence what we share online.",
    "This cycle can lead to impulsive sharing driven by emotion instead of careful thought. Understanding it helps us recognize how platforms are designed to encourage engagement.",
    [
      "Likes and shares trigger the brain's reward center.",
      "Emotional triggers can lead to impulsive sharing.",
      "Platforms are designed to encourage engagement.",
      "Evaluate content for accuracy and reliability before sharing.",
    ],
    [
      "You feel tempted to share an exciting post to get many likes, but pause and check whether it is accurate first.",
      "You share a well-researched article instead of a trending rumor.",
    ],
    [
      "Ask yourself why you want to share something.",
      "Focus on quality and accuracy instead of quick validation.",
      "Take a moment before reacting to emotional content.",
    ],
    [
      "Likes can influence behavior without us noticing.",
      "Thoughtful sharing builds a more informed online community.",
    ],
  ),

  // ================= MODULE 4 =================
  T(
    M4,
    "healthy-users-healthy-world",
    "Healthy Users, Healthy World",
    "Balancing the benefits of digital tools with risks to mental, physical, and environmental health.",
    "Digital tools bring many benefits, but they also affect our mental health, physical health, and the environment.",
    "Constant social media exposure can lead to anxiety, stress, and digital burnout. Long screen time can cause eye strain and poor posture. Our digital habits also contribute to energy use and e-waste.",
    [
      "Mental health: set time limits, curate your feeds, and take regular tech breaks.",
      "Physical health: prolonged screen time can cause eye strain, poor posture, and musculoskeletal problems. Try the 20-20-20 rule, proper ergonomics, and regular breaks.",
      "Environmental health: reduce energy use, choose energy-efficient devices, and recycle electronics.",
    ],
    [
      "After hours of scrolling, you feel anxious, so you set a daily time limit for social media.",
      "You recycle an old phone instead of throwing it away.",
    ],
    [
      "Take regular breaks from screens.",
      "Sit with good posture and a proper desk setup.",
      "Recycle old electronics.",
    ],
    [
      "Healthy habits protect your mind, body, and the planet.",
      "Balance is the goal, not avoiding technology.",
    ],
  ),

  T(
    M4,
    "overloaded-and-overwhelmed",
    "Overloaded and Overwhelmed",
    "Information overload, sleep problems, and how to set healthy digital boundaries.",
    "Information overload happens when we are given more data than we can process, causing stress, anxiety, and decision fatigue.",
    "A constant flow of news, social media posts, and emails can make it hard to focus and decide. Excessive screen time in the evening can also disturb sleep because blue light interferes with melatonin production, creating a cycle of stress and poor sleep.",
    [
      "Too much information leads to stress, anxiety, and decision fatigue.",
      "Evening screen time exposes you to blue light, which interferes with melatonin production.",
      "Poor sleep can increase fatigue and burnout.",
      "Set boundaries: limit screens before bed, schedule time for email and social media, and manage your information intake.",
    ],
    [
      "You check notifications until midnight and struggle to sleep. You decide to stop using screens an hour before bed.",
      "You check email at set times instead of all day.",
    ],
    [
      "Avoid screens before bedtime.",
      "Schedule specific times for email and social media.",
      "Reduce the number of news sources you follow.",
    ],
    [
      "Too much information harms focus and well-being.",
      "Boundaries with devices support better sleep and less stress.",
    ],
  ),

  T(
    M4,
    "fake-news-misinformation",
    "Fake News & Misinformation",
    "How to spot fake news and avoid spreading it.",
    "Fake news and misinformation can distort our understanding of events, harm public health, and deepen divisions in society.",
    "Misinformation often plays on emotions, so it is important to examine content that makes you react strongly. Building the skills to spot fake news helps you and others stay informed.",
    [
      "Check the reliability of the source.",
      "Read beyond sensational headlines.",
      "Examine the author's credentials and verify dates.",
      "Cross-reference with multiple sources.",
      "Use fact-checking websites like Snopes and FactCheck.org.",
    ],
    [
      "A shocking headline spreads online. Reading the full article shows it does not support the headline.",
      "You notice an article is several years old and being shared as current news.",
    ],
    [
      "Read the whole article, not only the headline.",
      "Check who wrote it and when.",
      "Compare with other reliable sources before sharing.",
    ],
    [
      "Strong emotional reactions are a cue to double-check.",
      "Taking a moment to verify prevents the spread of misinformation.",
    ],
  ),

  T(
    M4,
    "truth-check",
    "Truth Check",
    "Telling facts and opinions apart.",
    "Distinguishing between fact and opinion is a key part of digital literacy, especially when the two are often blended together.",
    "Facts are objective statements that can be verified. Opinions reflect personal beliefs and cannot be universally proven. Both can be valuable, but we should not confuse them.",
    [
      'Fact example: "The Earth orbits the sun."',
      'Opinion example: "The sunset is the most beautiful part of the day."',
      "Ask whether content is supported by evidence or driven by personal feelings.",
      "Critical thinking means analyzing the source, evidence, and context.",
    ],
    [
      'A post says a product is "the best ever". That is an opinion. A post saying a product has a certain measurable feature is something you can verify.',
      "A news article mixes facts with the writer's opinion, so you separate the two.",
    ],
    [
      "Ask: what evidence supports this?",
      "Identify who is speaking and why.",
      "Appreciate different perspectives while staying grounded in verifiable facts.",
    ],
    [
      "Facts can be verified; opinions cannot be universally proven.",
      "Critical thinking makes you a more discerning digital citizen.",
    ],
  ),

  T(
    M4,
    "algorithms",
    "Algorithms",
    "How algorithms shape what you see online.",
    "Algorithms tailor online content based on our digital behavior, so they play a central role in what we see.",
    "Every click, like, or interaction is recorded and used to predict and prioritize content we will engage with. This is convenient, but it can create echo chambers that reinforce our beliefs and hide other views. Even engaging with false content out of curiosity can lead to more of the same.",
    [
      "Algorithms record clicks, likes, and interactions.",
      "Echo chambers show content that reinforces existing beliefs.",
      "Engaging with false content can cause algorithms to show more of it.",
      "Mindful interaction and reputable sources can influence algorithms toward balanced content.",
    ],
    [
      "You watch a few videos about one topic and your feed soon shows mostly the same viewpoint.",
      "You follow reputable sources and your feed becomes more balanced.",
    ],
    [
      "Be mindful of what you click and engage with.",
      "Follow reputable sources with different viewpoints.",
      "Use critical thinking about why content appears in your feed.",
    ],
    [
      "Your behavior trains the algorithm.",
      "Understanding algorithms is crucial for digital literacy.",
    ],
  ),

  T(
    M4,
    "better-health-well-being",
    "Better Health & Well-Being",
    "Balancing online and offline life and using technology to support health.",
    "In a fast-paced, tech-driven world, balancing online and offline life is essential for well-being.",
    "Excessive screen time can lead to stress, anxiety, and physical problems, but digital tools can also improve health when used mindfully.",
    [
      "Find a balance between digital and non-digital activities.",
      "Practice mindfulness to avoid excessive digital use.",
      "Health apps like Fitbit or MyFitnessPal can track activity and sleep.",
      "Wellness apps like Headspace or Calm support meditation and stress management.",
      "Online resources like WebMD and Healthline provide guidance for fitness, nutrition, and well-being.",
    ],
    [
      "You use a sleep-tracking app and notice you sleep better when you avoid screens at night.",
      "You schedule offline time with friends or outdoor activities each week.",
    ],
    [
      "Plan regular offline activities.",
      "Use technology to support your health goals.",
      "Keep technology from overwhelming your daily life.",
    ],
    [
      "Balance is the key to digital well-being.",
      "Technology can enhance health when used thoughtfully.",
    ],
  ),
];
