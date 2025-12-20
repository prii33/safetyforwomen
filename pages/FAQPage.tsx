import React from 'react';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import faqBg from '../assets/faq.jpg';
import redmist from '@/assets/redmist2.mov';

const faqItems = [
    {
        number: "01",
        title: "Who are you? Who/Which is the NGO behind Safety for Women?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are a group of citizens who have come together for a common cause, safety for women. We are not aligned to any NGO or any political party. We are in the process of registering ourselves as an independent entity.</p>
            </div>
        )
    },
    {
        number: "02",
        title: "Why Pan India?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Because this issue is not area specific, and affects everyone. Women and men who have women in their lives.</p>
            </div>
        )
    },
    {
        number: "03",
        title: "What are you planning to do?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Work on the initiatives, to change safety for women.</p>
            </div>
        )
    },
    {
        number: "04",
        title: "Is Safety for Women only for safety and protection in personal life?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We plan to bring about change in the society via our initiatives.</p>
            </div>
        )
    },
    {
        number: "05",
        title: "Are you collecting any subscription or joining fees?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>No. We do not collect any subscription or joining fee.</p>
            </div>
        )
    },
    {
        number: "06",
        title: "Is Safety for Women only for Legal and Policy Measures?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Not really. We want to bring about systemic and societal changes.</p>
            </div>
        )
    },
    {
        number: "07",
        title: "Is Safety for Women only for personal safety?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Its for personal and community in general.</p>
            </div>
        )
    },
    {
        number: "08",
        title: "What do you want me to do?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Connect with us, and use your skills to promote our initiatives to bring about change.</p>
            </div>
        )
    },
    {
        number: "09",
        title: "Are you giving jobs?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are a volunteer driven movement. We do not promise or offer to promise any job.</p>
            </div>
        )
    },
    {
        number: "10",
        title: "Are you paying money for tasks?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>All our tasks are volunteer driven. We do not offer any money to conduct any jobs.</p>
            </div>
        )
    },
    {
        number: "11",
        title: "Why should we join you?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We would like you join us to bring about a change in mindsets and be the change we want to see in our lifetimes. Also, we dont want to be just complaining but do something about it.</p>
            </div>
        )
    },
    {
        number: "12",
        title: "What do you plan to achieve by starting this movement?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Bring about change, reduce the rape and abuse of women.</p>
            </div>
        )
    },
    {
        number: "13",
        title: "Is there a bank account we can contribute to?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We will communicate accordingly.</p>
            </div>
        )
    },
    {
        number: "14",
        title: "Why dont you want to be collecting funds?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are in the process of registering ….</p>
            </div>
        )
    },
    {
        number: "15",
        title: "Who can join the movement?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Every individual who wants to make India a safer nation.</p>
            </div>
        )
    },
    {
        number: "16",
        title: "Are men/boys encouraged to join?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>All men and boys are our allies and we encourage them joining us.</p>
            </div>
        )
    },
    {
        number: "17",
        title: "After joining what do you want us to do?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>First, take the pledge and then work on the initiatives.</p>
            </div>
        )
    },
    {
        number: "18",
        title: "Is there any event we can participate in?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>The nine initiatives.</p>
            </div>
        )
    },
    {
        number: "19",
        title: "What initiatives do you undertake for women's safety?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Our initiatives are for women.</p>
            </div>
        )
    },
    {
        number: "20",
        title: "Do you provide support for victims of violence or sexual harrasment?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We direct you to NGOs/people who will provide you the necessary help.</p>
            </div>
        )
    },
    {
        number: "21",
        title: "Are your services/ support given to victims confidential?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>100% Assurity.</p>
            </div>
        )
    },
    {
        number: "22",
        title: "What safety tips do you recommend for women, is there any training in self defence techniques?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Yes its part our awareness programme.</p>
            </div>
        )
    },
    {
        number: "23",
        title: "Has any govt organisation or NGO joined hands or collaborating with you?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Yes. We are collaborating with the Bengaluru Police and the associated NGO Parihar.</p>
            </div>
        )
    },
    {
        number: "24",
        title: "How can I contact your organisation?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>How can I contact your Team <a href="mailto:safetyforwomen@gmail.com" className="text-brand-red hover:underline">safetyforwomen@gmail.com</a></p>
            </div>
        )
    },
    {
        number: "25",
        title: "Will there be any change on ground or it is just another group?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Wait and Watch!!</p>
            </div>
        )
    },
    {
        number: "26",
        title: "Is there any commitment of time limit for my contribution towards the Mission?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Please refer to the form.</p>
            </div>
        )
    },
    {
        number: "27",
        title: "What’s your organization’s mission?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Refer to Q:1</p>
            </div>
        )
    },
    {
        number: "28",
        title: "What’s the specific reason it exists?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>For safety for Women.</p>
            </div>
        )
    },
    {
        number: "29",
        title: "What’s its history?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are here to create history.</p>
            </div>
        )
    },
    {
        number: "30",
        title: "When was it founded?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>September 1st 2024.</p>
            </div>
        )
    },
    {
        number: "31",
        title: "By whom?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>A group of strangers.</p>
            </div>
        )
    },
    {
        number: "32",
        title: "What are the major milestones such as planning, changes etc.?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Refer : Initiatives</p>
            </div>
        )
    },
    {
        number: "33",
        title: "Who’s on the board of directors/management?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Process is ongoing.</p>
            </div>
        )
    },
    {
        number: "34",
        title: "How many core members are there?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Process is ongoing.</p>
            </div>
        )
    },
    {
        number: "35",
        title: "From what backgrounds?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We have students, homemakers people from corporate to business, high-profile to low profile working for the cause.</p>
            </div>
        )
    },
    {
        number: "36",
        title: "In what ways do board members contribute?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>By volunteering their time and effort.</p>
            </div>
        )
    },
    {
        number: "37",
        title: "How big is your team?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We aspire to have a large team spreading across India.</p>
            </div>
        )
    },
    {
        number: "38",
        title: "What’s the service area?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>PAN India.</p>
            </div>
        )
    },
    {
        number: "39",
        title: "Who will be benefited?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>All Indian citizens.</p>
            </div>
        )
    },
    {
        number: "40",
        title: "What programs and services does it provide?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Refer to our website.</p>
            </div>
        )
    },
    {
        number: "41",
        title: "Can you summarize each program?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Safety for Women.</p>
            </div>
        )
    },
    {
        number: "42",
        title: "With whom does it collaborate?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Any one who works for the safety of women.</p>
            </div>
        )
    },
    {
        number: "43",
        title: "Has the organization won awards?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are getting noticed for the work we do, however we have not been awarded yet.</p>
            </div>
        )
    },
    {
        number: "44",
        title: "What’s the organizational structure? Who reports to whom?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We have no corporate structure. Its a round table concept.</p>
            </div>
        )
    },
    {
        number: "45",
        title: "Does your organisation provide help for domestic violence?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We refer victims to the concerned NGOs.</p>
            </div>
        )
    },
    {
        number: "46",
        title: "Do you help missing husband/wife to find them and bring them back home?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We refer to the concerned NGO.</p>
            </div>
        )
    },
    {
        number: "47",
        title: "Do you have couple therapy for bringing about reconciliation in families?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We refer to the concerned NGO.</p>
            </div>
        )
    },
    {
        number: "48",
        title: "Do you help nabbing thieves and chain snatchers if there's a theft?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We refer to the concerned NGO and Police.</p>
            </div>
        )
    },
    {
        number: "49",
        title: "Are you aware of all laws that surround this area before offering support?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We refer them to the concerned NGO.</p>
            </div>
        )
    },
    {
        number: "50",
        title: "What kind of events do you intend to organize?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>Promoting Safety for Women.</p>
            </div>
        )
    },
    {
        number: "51",
        title: "Why did you join this group?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>N/A</p>
            </div>
        )
    },
    {
        number: "52",
        title: "What is the reason for our public spaces becoming unsafe?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>N/A</p>
            </div>
        )
    },
    {
        number: "53",
        title: "Is safety an issue only in the night?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>It is 24/7 x 365.</p>
            </div>
        )
    },
    {
        number: "54",
        title: "Do you think your Safety for Women group can prevent rape and murder of women?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We aspire to bring about change to prevent rape and murder.</p>
            </div>
        )
    },
    {
        number: "55",
        title: "Is your services available in all States of India?",
        content: (
            <div className="space-y-4 text-brand-light-text">
                <p>We are a Pan India movement.</p>
            </div>
        )
    },
];

const FAQPage: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-light min-h-screen">
            <div className="relative z-10">
                <div className="relative">
                    <Hero
                        title="FAQ"
                        subtitle="Frequently Asked Questions"
                        description="Common questions and answers about our movement."
                        videoSrc={redmist}
                        scrollY={0}
                    />

                    <div 
                        className="relative"
                        style={{
                            backgroundImage: `url(${faqBg})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center 100px',
                            backgroundAttachment: 'fixed',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-24 relative z-10">
                            <div className="max-w-7xl mx-auto">
                                <Accordion items={faqItems} />
                                <div className="mt-16 text-center">
                                    <h3 className="text-2xl font-bold mb-6 text-brand-light">Couldn’t find your question? Write to us.</h3>
                                    <div className="flex flex-col items-center gap-4">
                                        <p className="text-lg text-brand-light-text">
                                            Your voice matters. Reach out at
                                        </p>
                                        <a 
                                            href="mailto:safetyforwomen@gmail.com" 
                                            className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                        >
                                            safetyforwomen@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
