
import React, { useState, useRef } from 'react';

export const PledgeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [pledgeTaken, setPledgeTaken] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            setPledgeTaken(true);
        }
    };

    const handleDownload = () => {
        alert("In a real app, this would trigger a download of the pledge certificate image. For now, you can take a screenshot!");
        // Note: Actual image download would require a library like html2canvas
    };

    if (pledgeTaken) {
        return (
            <div className="max-w-2xl mx-auto text-center">
                <div ref={certificateRef} className="bg-gradient-to-br from-brand-purple to-brand-pink text-white p-8 rounded-lg shadow-2xl border-4 border-brand-yellow">
                    <h3 className="text-2xl font-bold text-brand-yellow">Pledge of Safety</h3>
                    <p className="mt-4 text-lg">I, <span className="font-bold text-2xl underline">{name}</span>, solemnly pledge to be an ally in the movement for women's safety. I will speak up against injustice, foster respectful environments, and actively contribute to making my community a safer place for everyone.</p>
                    <p className="mt-6 font-semibold">#SafetyForWomen #OneVoiceOneMission</p>
                </div>
                <button 
                    onClick={handleDownload}
                    className="mt-8 bg-brand-yellow text-brand-purple px-8 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
                    Download My Pledge
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-pink"
            />
            <button 
                type="submit"
                className="w-full sm:w-auto bg-brand-pink text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors shadow-md">
                Take the Pledge
            </button>
        </form>
    );
};
