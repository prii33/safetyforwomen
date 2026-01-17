export type KnowledgeDoc = {
  id: string;
  title: string;
  url: string;
  content: string;
};

export const KNOWLEDGE_BASE: KnowledgeDoc[] = [
  {
    id: "home-hero",
    title: "Home Hero: One Voice, One Mission",
    url: "/",
    content:
      "Safety for Women Movement presents a pan-India collaborative mission for a nation where every woman is safe. The homepage headline is 'One Voice, One Mission' with the subtitle 'A Safer India for Women' and a call to join the movement.",
  },
  {
    id: "home-description",
    title: "Home Mission Statement",
    url: "/",
    content:
      "The movement invites people to turn hope into action: join a unified community that builds practical solutions so no woman is left without help.",
  },
  {
    id: "about-story",
    title: "About the Movement",
    url: "/about",
    content:
      "Born from the urgent need for change after tragic gender-based violence incidents, Safety for Women transforms distress into meaningful action. It unites citizens, communities, law enforcement, and policymakers to focus on practical solutions, collaboration, and sustainable impact.",
  },
  {
    id: "about-vision",
    title: "Vision",
    url: "/about",
    content:
      "The vision is to change the narrative that India is unsafe for women by taking everyday, practical steps to make streets, homes, workplaces, and public spaces safer.",
  },
  {
    id: "about-mission",
    title: "Mission",
    url: "/about",
    content:
      "The mission is to turn fear, anger, and frustration into concrete action, focus on what can change today, and work on simple local solutions that can be repeated across India.",
  },
  {
    id: "about-values",
    title: "Values",
    url: "/about",
    content:
      "Values include being non-political, non-religious, and non-partisan. Real change comes from direct action, collaboration, and community ownership.",
  },
  {
    id: "about-your-role",
    title: "Your Role",
    url: "/about",
    content:
      "Everyone has something to offer: time, skills, contacts, or lived experience. Join a team, lead small actions locally, and help rewrite the story of India into a nation that is aware, prepared, and united for safety.",
  },
  {
    id: "about-plan",
    title: "The Plan",
    url: "/about",
    content:
      "The plan is to build teams in every state and union territory, bring together doers who are ready to act, and connect people who can contribute time, skills, networks, or resources to clear initiatives.",
  },
  {
    id: "initiatives-overview",
    title: "Our Initiatives Overview",
    url: "/#initiatives",
    content:
      "The movement runs nine initiatives to empower communities, engage stakeholders, and create safer environments for women across India.",
  },
  {
    id: "initiative-awareness-programs",
    title: "Initiative 1: Safety Awareness Programs",
    url: "/#initiatives",
    content:
      "Workshops in schools, colleges, workplaces, and residential communities. Topics include self-defense, legal rights, and emergency safety protocols. Request form: https://bit.ly/SFW-AwarenessProgramQuestionaire",
  },
  {
    id: "initiative-tech",
    title: "Initiative 2: Tech Solutions for Safety",
    url: "/#initiatives",
    content:
      "Leverages technology for safety through community safety maps, hackathons, and collaboration with tech companies to build safety-focused products. Street safety audit form: https://forms.gle/zgPLDgGwxYYPYavo9",
  },
  {
    id: "initiative-sss",
    title: "Initiative 3: Survivor Support System (SSS) - India",
    url: "/#initiatives",
    content:
      "Builds a unified, verified, collaborative network of NGOs, legal experts, counsellors, shelters, crisis responders, volunteers, and health professionals. Join the network: https://bit.ly/SFW-PanIndia-SurvivorSupportSystem",
  },
  {
    id: "initiative-well-lit",
    title: "Initiative 4: Safe & Well-Lit Communities",
    url: "/#initiatives",
    content:
      "Focuses on safety audits, fixing broken streetlights, installing new lighting, and sustainable funding with CSR partners. Goal: Zero Dark Spots. Audit form: https://docs.google.com/forms/d/e/1FAIpQLSdmdG5Kf2_tsrb8KyGlFHbdhJVnrwUzxzZZFCwq2zhd4nehBg/viewform?usp=preview",
  },
  {
    id: "initiative-citizen-police",
    title: "Initiative 5: Citizen Police Alliance Team",
    url: "/#initiatives",
    content:
      "Transforms passive reporting into active partnership, trains citizens, and offers Command Centre tours to understand modern policing. Tour request form: https://forms.gle/ayvdScjcJLjTCAANA. WhatsApp group: https://chat.whatsapp.com/BVmXh5pO3DuD2LPCwxsncr",
  },
  {
    id: "initiative-safety-squadrons",
    title: "Initiative 6: Network of Street-wise Safety Squadrons",
    url: "/#initiatives",
    content:
      "Future roadmap initiative to create last-mile volunteer squads that assist neighborhoods, respond to safety concerns, and ensure no woman is left helpless.",
  },
  {
    id: "initiative-school-curriculum",
    title: "Initiative 7: Safety Education into School Curriculum",
    url: "/#initiatives",
    content:
      "Future roadmap initiative to integrate safety, laws, respect, and consent into school curricula. Collaborates with education experts and seeks institutional partners.",
  },
  {
    id: "initiative-women-livelihood",
    title: "Initiative 8: Women Empowerment & Livelihood",
    url: "/#initiatives",
    content:
      "Future roadmap initiative to support skill training, financial literacy, and employment. Seeks corporate partners, vocational training institutes, and mentors.",
  },
  {
    id: "initiative-awards",
    title: "Initiative 9: Annual Safety Recognition Awards",
    url: "/#initiatives",
    content:
      "Future roadmap initiative to establish awards that recognize Safety Champions and celebrate best practices across India. Seeks sponsors and patronage.",
  },
  {
    id: "join-section",
    title: "Join the Movement Section",
    url: "/get-involved",
    content:
      "The Join section invites people to take the safety pledge and receive a Certificate of Commitment. The call to action is 'Let's Act for Women's Safety. Together.'",
  },
  {
    id: "get-involved-overview",
    title: "Get Involved: Overview",
    url: "/get-involved",
    content:
      "The Join The Movement page lists six ways to contribute: take the safety pledge, request an awareness program, become a volunteer, partner with the movement, audit street safety, or join the Survivor Support System.",
  },
  {
    id: "get-involved-pledge",
    title: "Get Involved: Take the Safety Pledge",
    url: "/get-involved",
    content:
      "Submit your name, 10-digit mobile number, 6-digit pin code, and state to take the pledge and download a certificate. The pledge submission is stored via the API.",
  },
  {
    id: "get-involved-awareness",
    title: "Get Involved: Request an Awareness Program",
    url: "/get-involved",
    content:
      "Request programs for schools, colleges, organizations, or communities. Form link: https://docs.google.com/forms/d/e/1FAIpQLSe8qqs23o94pBGpib1APpzrNaU9NRhCk4vrzDFHnltjuAKKIQ/viewform",
  },
  {
    id: "get-involved-volunteer",
    title: "Get Involved: Become a Volunteer",
    url: "/get-involved",
    content:
      "Volunteer remotely or on-ground based on your skills and time. Form link: https://docs.google.com/forms/d/e/1FAIpQLSdqzAMP1VKX1S0NbQK24R9EaO7jqOdSbq1DWz_p78ugd_8yKw/viewform",
  },
  {
    id: "get-involved-partner",
    title: "Get Involved: Partner With Us",
    url: "/get-involved",
    content:
      "Partner to amplify impact and create systemic change. Form link: https://docs.google.com/forms/d/e/1FAIpQLSeH9SZu6loQT4irZowzBIHJZl_SFc10JGsD6fFClXJ6cWQXcQ/viewform",
  },
  {
    id: "get-involved-audit",
    title: "Get Involved: Audit Your Street's Safety",
    url: "/get-involved",
    content:
      "Identify and report safety concerns in your neighborhood. Form link: https://docs.google.com/forms/d/e/1FAIpQLScx666YVpXuUUZUUJGqDEfClxmHn9fM48Fmdmbkd_sqD8e_IA/viewform",
  },
  {
    id: "get-involved-sss",
    title: "Get Involved: Join the National Survivor Support System",
    url: "/get-involved",
    content:
      "Join the Survivor Support System (SSS) network for healing, empowerment, and justice. Form link: https://docs.google.com/forms/d/1h0AZLB5OkGn8oBA0aFLJKr4r9gjK56rXCaRPUjZ6_xE/viewform?edit_requested=true",
  },
  {
    id: "impact-stats",
    title: "Impact: Movement by the Numbers",
    url: "/impact",
    content:
      "Impact highlights: 1,375 community members, 139 volunteers, 26 programs held, 4,000 lives touched, 4,500 pledges taken, and 2,240 Karnataka State Police (KSP) app downloads.",
  },
  {
    id: "impact-ksp-app",
    title: "Impact: Karnataka State Police App",
    url: "/impact",
    content:
      "The KSP Mobile App is the official Karnataka State Police app. Android: https://play.google.com/store/apps/details?id=com.capulustech.ksppqrs. iOS: https://apps.apple.com/in/app/karnataka-state-police/id1358964762",
  },
  {
    id: "resources-overview",
    title: "Resources: Knowledge & Support",
    url: "/resources",
    content:
      "Resources provide safety information, skills, and access to support networks, including survivor support, apps, devices, safety tips, and self-defense demos.",
  },
  {
    id: "resources-survivor-support",
    title: "Resources: Survivor Support Network",
    url: "/resources",
    content:
      "Key resources include the National Commission for Women (https://www.ncw.gov.in/), Women's Helpline 181 (tel:181), and a Local NGO Directory entry.",
  },
  {
    id: "resources-safety-apps",
    title: "Resources: Safety Apps",
    url: "/resources",
    content:
      "Recommended apps include Himmat Plus (Delhi Police app), My Safetipin (area safety scores), and SHOUT (emergency responder network).",
  },
  {
    id: "resources-safety-devices",
    title: "Resources: Safety Devices",
    url: "/resources",
    content:
      "Modern safety devices include smart jewelry with SOS buttons, personal alarms, and GPS trackers.",
  },
  {
    id: "resources-safety-tips-teens",
    title: "Resources: Safety Tips for Teens",
    url: "/resources",
    content:
      "Tips for teens: Trust your instincts; share live location with trusted contacts when traveling alone.",
  },
  {
    id: "resources-safety-tips-adults",
    title: "Resources: Safety Tips for Adults",
    url: "/resources",
    content:
      "Tips for adults: Be aware of surroundings and avoid distractions; have keys ready and check your car before entering.",
  },
  {
    id: "resources-safety-tips-seniors",
    title: "Resources: Safety Tips for Seniors",
    url: "/resources",
    content:
      "Tips for seniors: Avoid scams and verify requests for information; keep doors and windows locked and verify visitors.",
  },
  {
    id: "resources-self-defense-demos",
    title: "Resources: Self-Defense Demos",
    url: "/resources",
    content:
      "Self-defense demos include Basic Escape Techniques, Situational Awareness, and Defensive Stance. The section is marked as 'will be available soon.'",
  },
  {
    id: "events-media-overview",
    title: "Events & Media Overview",
    url: "/events-media",
    content:
      "Events & Media highlights safety awareness programs, Safe & Well-Lit Communities work, collaboration events, and photo galleries of programs across institutions and communities.",
  },
  {
    id: "events-media-upcoming",
    title: "Events & Media: Upcoming Event",
    url: "/events-media",
    content:
      "Upcoming event placeholder: Awareness Program. Time 11:00am-12.30pm, venue 'Location', with details to be announced.",
  },
  {
    id: "events-media-collaborations",
    title: "Events & Media: Collaborations",
    url: "/events-media",
    content:
      "Collaborations include Police Departments, State Women Commission, and strategic meetings with institutional partners, civil society, and community leaders.",
  },
  {
    id: "events-media-timeline",
    title: "Events & Media: Awareness Program Timeline",
    url: "/events-media",
    content:
      "Awareness program timeline includes events at Cambridge Institute of Technology (3 Oct 2024), SHVNM Government Girls PU College (19 Oct 2024), St. Joseph's Institute of Management (27 Oct 2024), multiple Sparsh Hospitals (Nov 2024-Feb 2025), Gopalan College (Dec 2024, Sep 2025), National Public School (5 Dec 2024), Ibblur Government School (30 Jan 2025), Vayah Vikas (31 Jan 2025), St. Joseph's University (1 Feb 2025), Arya Vidhya Shala (8 Feb 2025), Rotaract Lakshmibai College (20 Feb 2025), Christ College (1 Mar 2025), TVS Hosur (11 Mar 2025), Keerti Riveria Apartments (15 Mar 2025), a 'Be the Light' panel discussion (23 Mar 2025), Mphasis online (28 Mar 2025), Ashvasan senior citizens (18 Apr 2025), St. Francis PU College (1 Jul 2025), Tata Electronics (24 Jul 2025), and Fortis Hospital programs (6-7 Oct 2025).",
  },
  {
    id: "events-media-panelists",
    title: "Events & Media: Be the Light Panel",
    url: "/events-media",
    content:
      "Panel discussion with Arun Pai (Bangalore Walks), Baishaki (Axis Bank), Vikram Rai (Bangalore Apartment Federation), Priyanka Upendra (cine actor), Snehal (BBMP East), Pushpa S (BESCOM), and Poornima Shetty (Founder, Safety for Women Foundation). Moderator: Nithya Mandhyam (Times of India).",
  },
  {
    id: "blog-overview",
    title: "Blog Overview",
    url: "/blog",
    content:
      "The blog shares stories, insights, and updates on women's safety and empowerment. Contributors can write to teamsafetyforwomen@gmail.com.",
  },
  {
    id: "blog-post-safe-streets",
    title: "Blog: Safe Streets, Safe Workplaces, Safe India",
    url: "/blog/safe-streets-safe-workplaces-safe-india-protecting-women-in-a-changing-world",
    content:
      "Article by Abdul Shakeeb (5 min read) on women's safety in India, with statistics, workplace safety, public space safety, and action steps such as education, legal reform, support systems, and community vigilance.",
  },
  {
    id: "blog-post-finding-my-voice",
    title: "Blog: Finding My Voice",
    url: "/blog/finding-my-voice",
    content:
      "Article by Dr. Varsha Pillai (4 min read) describing a survivor's experience, the importance of speaking up, and the need for education, family conversations, reporting, mentorship, and advocacy.",
  },
  {
    id: "faq-overview",
    title: "FAQ Summary",
    url: "/faq",
    content:
      "FAQ covers who the movement is, why it is pan-India, initiative focus, volunteer-driven model, no subscription fees, and how to contact the team at safetyforwomen@gmail.com. It notes collaboration with Bengaluru Police and Parihar.",
  },
  {
    id: "faq-key-points",
    title: "FAQ Key Points",
    url: "/faq",
    content:
      "Key answers: founded September 1, 2024; open to everyone; men and boys are encouraged to join; services are volunteer-driven with no payment; the movement is pan-India; victims are referred to NGOs and relevant authorities.",
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    url: "/privacy-policy",
    content:
      "Privacy policy for Safety for Women (powered by Iron Feather Foundation) aligns with India's Digital Personal Data Protection Act 2023. It explains data collected (name, phone, email, location, participation), handling of sensitive SSS data, purposes, consent, sharing only with verified partners, data retention, security practices, and grievance contact at reach@safetyforwomen.org.",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    url: "/terms-conditions",
    content:
      "Terms include intellectual property rights, restrictions on reuse, a license for user content, no warranties, limitation of liability, and a contact email for questions at safetyforwomen@gmail.com.",
  },
  {
    id: "un-sdgs",
    title: "UN SDG Alignment",
    url: "/",
    content:
      "Safety for Women aligns with UN SDGs including Goal 3, 4, 5, 11, 16, and 17. Each goal is linked to the official UN SDG page.",
  },
  {
    id: "newsletter",
    title: "Newsletter and Contact Cards",
    url: "/",
    content:
      "Newsletter invites users to subscribe for updates and provides contact email teamsafetyforwomen@gmail.com and social follow options.",
  },
  {
    id: "header-nav",
    title: "Navigation Links",
    url: "/",
    content:
      "Primary navigation includes Home, About Us, Our Initiatives, Our Impact, Resources, Events & Media, Join Us, Blog, and FAQ. A call button is provided to dial 112 on mobile.",
  },
  {
    id: "footer-contact",
    title: "Footer Contacts and Socials",
    url: "/",
    content:
      "Footer provides social links: Facebook, X (Twitter), LinkedIn, YouTube, Instagram, Telegram, WhatsApp, and email teamsafetyforwomen@gmail.com. It includes Privacy Policy and Terms & Conditions links.",
  },
];
