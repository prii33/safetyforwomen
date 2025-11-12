
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
                <div ref={certificateRef} className="bg-gradient-to-br from-brand-dark to-brand-red text-white p-8 rounded-lg shadow-2xl border-4 border-brand-red">
                    <h3 className="text-2xl font-bold text-brand-red">Pledge of Safety</h3>
                    <p className="mt-4 text-lg">I, <span className="font-bold text-2xl underline">{name}</span>, solemnly pledge to be an ally in the movement for women's safety. I will speak up against injustice, foster respectful environments, and actively contribute to making my community a safer place for everyone.</p>
                    <p className="mt-6 font-semibold">#SafetyForWomen #OneVoiceOneMission</p>
                </div>
                <button 
                    onClick={handleDownload}
                    className="mt-8 bg-brand-red text-white px-8 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
                    Download My Pledge
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex items-stretch gap-0">
            <div className="flex-grow p-[2px] rounded-l-md bg-gradient-to-r from-red-600 to-[#FF0440]">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name to take the pledge"
                    required
                    className="w-full h-full px-6 py-4 text-lg text-black border-0 rounded-l-md focus:outline-none"
                    style={{ backgroundColor: '#e1d5d5' }}
                />
            </div>
            <button
                type="submit"
                className="text-white px-8 py-4 text-lg font-semibold rounded-r-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r from-red-600 to-[#FF0440] hover:from-red-700 hover:to-[#d90338]"
            >
                Pledge
            </button>
        </form>
    );
};
