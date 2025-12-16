import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';
import OrbsBackground from '../components/OrbsBackground';

const SafeStreetsArticle: React.FC = () => {
    const handleShare = () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    const handleTweet = () => {
        const url = window.location.href;
        const title = "Safe Streets, Safe Workplaces, Safe India: Protecting Women in a Changing World";
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        // Optional: You could add a toast notification here
    };

    return (
        <div className="bg-brand-dark min-h-screen text-brand-light font-sans relative overflow-hidden">
            <OrbsBackground />
            
            {/* Page Header */}
            <div className="container mx-auto px-4 pt-20 md:pt-28 pb-8 relative z-20">
                <div className="relative flex flex-col md:flex-row items-center justify-center">
                    {/* Back Button */}
                    <div className="md:absolute md:left-0 mb-6 md:mb-0">
                        <Link to="/blog" className="inline-flex items-center px-4 py-2 border border-brand-red/30 rounded-full text-brand-light hover:border-brand-red hover:text-brand-red transition-all duration-300 text-sm group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>

                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            <span className="block font-semibold text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.5em] mb-2">
                                Stories & Insight
                            </span>
                            <span className="block text-brand-red">
                                Blog
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            
            {/* Header / Hero */}
            <div className="relative pb-4 px-4 container mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-4 block">Safety For Women</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Safe Streets, Safe Workplaces, Safe India: Protecting Women in a Changing World
                    </h1>

                    {/* Author & Meta Section */}
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 text-sm text-gray-300 mb-3">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="https://ui-avatars.com/api/?name=Abdul+Shakeeb&background=2D2D2D&color=fff&size=128" 
                                    alt="Abdul Shakeeb" 
                                    className="w-8 h-8 rounded-full border border-white/10 object-cover"
                                />
                                <span className="font-medium text-white">Abdul Shakeeb</span>
                            </div>
                            <span className="text-gray-600">|</span>
                            <span>March 11, 2025</span>
                            <span className="text-gray-600">|</span>
                            <span>5 min read</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={handleShare} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group">
                                <span className="group-hover:text-blue-400 transition-colors"><FaFacebook /></span>
                                Share
                            </button>
                            <button onClick={handleTweet} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group">
                                <span className="group-hover:text-sky-400 transition-colors"><FaTwitter /></span>
                                Tweet
                            </button>
                            <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium hover:bg-white/10 transition-colors text-white group">
                                <span className="group-hover:text-brand-red transition-colors"><FaLink /></span>
                                Copy
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-4 mb-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-red/20 h-[300px] md:h-[450px]"
                >
                    <img 
                        src="https://safetyforwomen.org/wp-content/uploads/2025/03/blog-2.jpg" 
                        alt="Safe Streets" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 pb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-brand-red prose-strong:text-white leading-snug"
                >
                    <p className="lead text-xl text-brand-light-text mb-8">
                        Ensuring women’s safety in India is a pressing concern that demands immediate and sustained attention. Despite legislative reforms and public awareness campaigns, incidents of violence against women continue to surface, underscoring deep-seated societal challenges.
                    </p>

                    <h3 className="text-2xl font-bold text-brand-red mb-4 mt-8">Current Scenario and Statistics</h3>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        In August 2024, the nation was shaken by the brutal rape and murder of a 31-year-old trainee doctor in Kolkata. This heinous act not only led to widespread protests but also highlighted the vulnerabilities women face, even in professional environments. The incident spurred the Supreme Court to establish a national task force aimed at recommending measures to enhance workplace safety for women.
                    </p>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        Such incidents are not isolated. In 2022, India recorded 31,516 cases of rape, marking a 20% increase from the previous year.
                    </p>
                    <blockquote className="border-l-4 border-brand-red pl-6 italic text-white bg-brand-red/10 p-6 rounded-r my-8">
                        This alarming statistic translates to a rape occurring approximately every 16 minutes.
                    </blockquote>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        The pervasive threat of violence significantly impacts women’s participation in the workforce. In 2022, only 30% of Indian women aged 15 to 64 were employed, a stark contrast to the global average of 47%.
                    </p>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        Safety concerns, coupled with societal norms, deter women from seeking employment, thereby hindering the nation’s economic growth. Analysts suggest that enhancing women’s safety and workforce participation is crucial for India to achieve its ambitious economic targets.
                    </p>

                    <h3 className="text-2xl font-bold text-brand-red mb-4 mt-8">Contributing to Women’s Safety</h3>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        Addressing this multifaceted issue requires collective action from individuals, communities, and institutions. Here are some ways we can contribute:
                    </p>

                    <ol className="list-decimal pl-6 space-y-4 marker:text-brand-red text-brand-light-text">
                        <li>
                            <strong className="text-white">Education and Awareness:</strong> Promote gender sensitivity from an early age. Educational institutions should incorporate modules that challenge traditional gender roles and emphasize respect and equality.
                        </li>
                        <li>
                            <strong className="text-white">Strengthening Legal Frameworks:</strong> While laws exist to protect women, their enforcement remains inconsistent. Advocating for swift and stringent legal action against perpetrators can serve as a deterrent.
                        </li>
                        <li>
                            <strong className="text-white">Safe Public Spaces:</strong> Urban planning should prioritize women’s safety by ensuring well-lit streets, accessible public transportation, and surveillance in isolated areas. Community policing and neighbourhood watch programs can also play a pivotal role.
                        </li>
                        <li>
                            <strong className="text-white">Workplace Safety:</strong> Organizations must implement robust policies against sexual harassment and provide secure environments for female employees. Regular training sessions and anonymous reporting mechanisms can empower women to voice their concerns.
                        </li>
                        <li>
                            <strong className="text-white">Support Systems:</strong> Establishing accessible support services, such as helplines, counselling centres, and shelters, is vital for survivors of violence. Community support groups can also offer a platform for women to share experiences and seek assistance.
                        </li>
                        <li>
                            <strong className="text-white">Engaging Men and Boys:</strong> Men play a crucial role in challenging and changing patriarchal norms. Encouraging open dialogues about masculinity and promoting positive role models can foster a culture of respect.
                        </li>
                        <li>
                            <strong className="text-white">Leveraging Technology:</strong> Safety apps that allow women to share their real-time location with trusted contacts can act as preventive tools. Additionally, social media platforms can be utilized to raise awareness and mobilize support for women’s safety initiatives.
                        </li>
                        <li>
                            <strong className="text-white">Community Vigilance:</strong> Communities must remain vigilant and proactive in reporting suspicious activities. Building a culture where violence against women is neither tolerated nor ignored is essential.
                        </li>
                        <li>
                            <strong className="text-white">Economic Empowerment:</strong> Financial independence can provide women with the means to leave abusive situations. Vocational training programs and employment opportunities tailored for women can aid in this empowerment.
                        </li>
                        <li>
                            <strong className="text-white">Policy Advocacy:</strong> Engage with policymakers to push for reforms that prioritize women’s safety and equality. Public participation in governance can ensure that women’s issues remain at the forefront of national agendas.
                        </li>
                    </ol>

                    <h3 className="text-2xl font-bold text-brand-red mb-4 mt-8">Conclusion</h3>
                    <p className="text-brand-light-text mb-4 leading-relaxed">
                        In conclusion, the safety of women in India is not just a women’s issue; it is a societal imperative. By adopting a holistic approach that encompasses legal reforms, societal change, and individual responsibility, we can aspire to create an environment where women feel safe, respected, and empowered. Collective action is the cornerstone of this endeavour, and every effort counts towards building a safer nation for all.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-brand-red/20">
                        {['#WomensSafety', '#SafeIndiaForWomen', '#EndViolenceAgainstWomen', '#StopGenderViolence', '#WomensRights', '#SpeakUp', '#JusticeForWomen', '#EmpowerWomen', '#BreakTheSilence', '#GenderEquality'].map(tag => (
                            <span key={tag} className="text-xs text-brand-red bg-brand-red/10 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>

                    <div className="mt-8 text-sm text-gray-500 italic">
                        About the Author: Abdul Shakeeb | Logistics & Supply chain Veteran | Ex DHL
                    </div>

                    {/* Footer Navigation */}
                    <div className="mt-12 pt-8 border-t border-brand-red/20 flex justify-between items-center">
                        <Link to="/blog" className="text-brand-light-text hover:text-brand-red transition-colors flex items-center gap-2 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            View Other Articles
                        </Link>
                        <Link to="/" className="text-brand-light-text hover:text-brand-red transition-colors">
                            Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SafeStreetsArticle;
