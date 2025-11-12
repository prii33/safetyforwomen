
import React from 'react';
import type { Initiative, ImpactStat, Volunteer, Program, Partner, Resource } from '../types';
import icon1 from '@/assets/icon1.gif';
import icon2 from '@/assets/icon2.gif';
import icon3 from '@/assets/icon3.gif';
import icon4 from '@/assets/icon4.gif';
import icon5 from '@/assets/icon5.gif';
import icon6 from '@/assets/icon6.gif';
import icon7 from '@/assets/icon7.gif';
import icon8 from '@/assets/icon8.gif';
import icon9 from '@/assets/icon9.gif';

// Icons for initiatives
// Fix: Converted all icon components from JSX to React.createElement to be valid in a .ts file.
const AwarenessIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.354a1.76 1.76 0 011.176-2.373l5.573-2.229a1.76 1.76 0 012.215 2z" }));
const TechIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }));
const VolunteerIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }));
const CommunityIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }));
const PoliceIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { d: "M12 14l9-5-9-5-9 5 9 5z" }), React.createElement('path', { d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 10" }));
const SupportIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }));
const EducationIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }));
const AwardIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }));
const EmpowerIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }));

export const initiatives: Initiative[] = [
  // Fix: Converted icon JSX to React.createElement calls to be valid in a .ts file.
  { id: 1, icon: React.createElement('img', { src: icon1, alt: 'Awareness Programs' }), title: "Awareness Programs", description: "Workshops and training in schools, colleges, workplaces, and communities on self-defense, legal rights, and safety protocols." },
  { id: 2, icon: React.createElement('img', { src: icon2, alt: 'Tech Solutions for Safety' }), title: "Tech Solutions for Safety", description: "Developing safety rating apps, running hackathons, and partnering with tech companies to innovate on women’s safety." },
  { id: 3, icon: React.createElement('img', { src: icon3, alt: 'Volunteer Networks' }), title: "Volunteer Networks", description: "Training street-wise safety squadrons to assist communities and serve as last-mile safety responders." },
  { id: 4, icon: React.createElement('img', { src: icon4, alt: 'Safe & Well-Lit Communities' }), title: "Safe & Well-Lit Communities", description: "Addressing dark spots through lighting, CCTV, and public space improvements via CSR and local partnerships." },
  { id: 5, icon: React.createElement('img', { src: icon5, alt: 'Citizen-Police Alliances' }), title: "Citizen-Police Alliances", description: "Fostering collaborative teams for community-police engagement and training citizens to be proactive about safety." },
  { id: 6, icon: React.createElement('img', { src: icon6, alt: 'Victim Support Systems' }), title: "Victim Support Systems", description: "Connecting victims to NGOs, legal, medical, and counseling support for immediate and accessible help." },
  { id: 7, icon: React.createElement('img', { src: icon7, alt: 'Safety Education in Schools' }), title: "Safety Education in Schools", description: "Integrating safety, consent, and respect into curricula and equipping teachers to promote safe practices." },
  { id: 8, icon: React.createElement('img', { src: icon8, alt: 'Annual Safety Recognition Awards' }), title: "Annual Safety Recognition Awards", description: "National awards to honor contributions and best practices in women’s safety, spotlighting changemakers." },
  { id: 9, icon: React.createElement('img', { src: icon9, alt: 'Women Empowerment & Livelihood' }), title: "Women Empowerment & Livelihood", description: "Supporting skill training, employment, and entrepreneurship to empower women with independence." },
];

export const impactStats: ImpactStat[] = [
    { name: 'Volunteers', value: 5000 },
    { name: 'Cities Reached', value: 75 },
    { name: 'Programs Held', value: 26 },
    { name: 'Lives Touched', value: 100000 },
    { name: 'Pledges Taken', value: 25000 },
];

export const volunteers: Volunteer[] = [
    { id: 1, city: 'Delhi', coords: { top: '28.6139', left: '77.2090' } },
    { id: 2, city: 'Mumbai', coords: { top: '19.0760', left: '72.8777' } },
    { id: 3, city: 'Bangalore', coords: { top: '12.9716', left: '77.5946' } },
    { id: 4, city: 'Chennai', coords: { top: '13.0827', left: '80.2707' } },
    { id: 5, city: 'Kolkata', coords: { top: '22.5726', left: '88.3639' } },
    { id: 6, city: 'Hyderabad', coords: { top: '17.3850', left: '78.4867' } },
    { id: 7, city: 'Jaipur', coords: { top: '26.9124', left: '75.7873' } },
    { id: 8, city: 'Ahmedabad', coords: { top: '23.0225', left: '72.5714' } },
    { id: 9, city: 'Guwahati', coords: { top: '26.1445', left: '91.7362' } },
    { id: 10, city: 'Srinagar', coords: { top: '34.0837', left: '74.7973' } },
];

export const pastPrograms: Program[] = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    title: `Awareness Workshop #${i + 1}`,
    location: `City #${(i % 10) + 1}`,
    date: `2023-10-${(i % 30) + 1}`,
    imageUrl: `https://picsum.photos/400/300?random=${i+1}`,
}));


export const safetyTips = {
  teens: [
    { title: "Trust Your Instincts", description: "If a situation feels unsafe, it probably is. Remove yourself from it immediately." },
    { title: "Share Your Location", description: "Use apps to share your live location with trusted family or friends when traveling alone." },
  ],
  adults: [
    { title: "Be Aware of Surroundings", description: "Avoid distractions like being on your phone when walking alone, especially at night." },
    { title: "Parking Lot Safety", description: "Have your keys ready as you approach your car. Check the back seat before getting in." },
  ],
  seniors: [
    { title: "Avoid Scams", description: "Be wary of unsolicited calls or emails asking for personal information. Verify before sharing." },
    { title: "Home Safety", description: "Keep doors and windows locked. Don't open the door to strangers without verification." },
  ],
};

export const partners: Partner[] = [
    { name: "Partner 1", logoUrl: "https://picsum.photos/200/100?grayscale&random=11" },
    { name: "Partner 2", logoUrl: "https://picsum.photos/200/100?grayscale&random=12" },
    { name: "Partner 3", logoUrl: "https://picsum.photos/200/100?grayscale&random=13" },
    { name: "Partner 4", logoUrl: "https://picsum.photos/200/100?grayscale&random=14" },
    { name: "Partner 5", logoUrl: "https://picsum.photos/200/100?grayscale&random=15" },
    { name: "Partner 6", logoUrl: "https://picsum.photos/200/100?grayscale&random=16" },
];

export const survivorSupport: Resource[] = [
    { title: "National Commission for Women", description: "A statutory body for advising the government on all policy matters affecting women.", link: "#" },
    { title: "Women's Helpline (181)", description: "A 24/7 toll-free helpline for women in distress.", link: "tel:181" },
    { title: "Local NGO Directory", description: "Find verified local NGOs providing legal, medical, and counseling support.", link: "#" },
];

export const pressCoverage = [
    { outlet: "The Times of India", title: "Safety for Women Movement Launches Nationwide Campaign", date: "2023-11-01", link: "#" },
    { outlet: "The Hindu", title: "How a Citizen-Led Initiative is Making Streets Safer", date: "2023-10-15", link: "#" },
    { outlet: "YourStory", title: "Tech for Good: The App Rating Safety in Urban Areas", date: "2023-09-28", link: "#" },
];
