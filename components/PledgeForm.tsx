import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import certificateUrl from '../assets/SFW Certificate.pdf';

const states = [
    { code: 'AN', name: 'Andaman and Nicobar Islands' },
    { code: 'AP', name: 'Andhra Pradesh' },
    { code: 'AR', name: 'Arunachal Pradesh' },
    { code: 'AS', name: 'Assam' },
    { code: 'BR', name: 'Bihar' },
    { code: 'CH', name: 'Chandigarh' },
    { code: 'CG', name: 'Chhattisgarh' },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { code: 'DL', name: 'Delhi' },
    { code: 'GA', name: 'Goa' },
    { code: 'GJ', name: 'Gujarat' },
    { code: 'HR', name: 'Haryana' },
    { code: 'HP', name: 'Himachal Pradesh' },
    { code: 'JK', name: 'Jammu and Kashmir' },
    { code: 'JH', name: 'Jharkhand' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'KL', name: 'Kerala' },
    { code: 'LA', name: 'Ladakh' },
    { code: 'LD', name: 'Lakshadweep' },
    { code: 'MP', name: 'Madhya Pradesh' },
    { code: 'MH', name: 'Maharashtra' },
    { code: 'MN', name: 'Manipur' },
    { code: 'ML', name: 'Meghalaya' },
    { code: 'MZ', name: 'Mizoram' },
    { code: 'NL', name: 'Nagaland' },
    { code: 'OD', name: 'Odisha' },
    { code: 'PY', name: 'Puducherry' },
    { code: 'PB', name: 'Punjab' },
    { code: 'RJ', name: 'Rajasthan' },
    { code: 'SK', name: 'Sikkim' },
    { code: 'TN', name: 'Tamil Nadu' },
    { code: 'TG', name: 'Telangana' },
    { code: 'TR', name: 'Tripura' },
    { code: 'UP', name: 'Uttar Pradesh' },
    { code: 'UK', name: 'Uttarakhand' },
    { code: 'WB', name: 'West Bengal' }
];

export const PledgeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        pinCode: '',
        state: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateCertificate = async (name: string) => {
        try {
            const existingPdfBytes = await fetch(certificateUrl).then(res => res.arrayBuffer());
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const { width, height } = firstPage.getSize();
            
            // Place the participant's name on the horizontal red rule
            const fontSize = 28;
            const textWidth = helveticaFont.widthOfTextAtSize(name, fontSize);
            const yPosition = (height * 0.60) - (fontSize / 2); // nudge closer to the red line
            
            firstPage.drawText(name, {
                x: (width - textWidth) / 2,
                y: yPosition,
                size: fontSize,
                font: helveticaFont,
                color: rgb(1, 1, 1),
            });

            const pdfBytes = await pdfDoc.save();
            // pdf-lib returns a Uint8Array; use its buffer to satisfy BlobPart typing
            const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Safety_Pledge_Certificate.pdf';
            link.click();
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('https://safety-api.prii33.workers.dev/api/pledge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    mobileNumber: parseInt(formData.mobileNumber),
                    pinCode: formData.pinCode,
                    state: formData.state
                }),
            });

            if (response.ok) {
                setMessage('Thank you for taking the pledge!');
                await generateCertificate(formData.name);
                setFormData({ name: '', mobileNumber: '', pinCode: '', state: '' });
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error || 'Something went wrong'}`);
            }
        } catch (error) {
            setMessage('Error submitting pledge. Please try again.');
            console.error("Submission Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-0 bg-transparent rounded-lg shadow-none">
            <h2 className="text-4xl  mb-6 font-bold text-center text-brand-light">Take the Safety Pledge.</h2>
            <h2 className="text-xl  mb-6 text-center text-brand-light">Receive your Certificate of Commitment.</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-red-100">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-[#3f1212] border border-[#5c1c1c] rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red text-white placeholder-red-200/30"
                    />
                </div>
                <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-red-100">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        className="mt-1 block w-full px-3 py-2 bg-[#3f1212] border border-[#5c1c1c] rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red text-white placeholder-red-200/30"
                    />
                </div>
                <div>
                    <label htmlFor="pinCode" className="block text-sm font-medium text-red-100">Pin Code</label>
                    <input
                        type="text"
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{6}"
                        title="Please enter a valid 6-digit Pin Code"
                        className="mt-1 block w-full px-3 py-2 bg-[#3f1212] border border-[#5c1c1c] rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red text-white placeholder-red-200/30"
                    />
                </div>
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-red-100">State</label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-[#3f1212] border border-[#5c1c1c] rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red text-white"
                    >
                        <option value="" className="bg-[#3f1212] text-gray-400 hover:bg-[#FF0440]">Select State</option>
                        {states.map((state) => (
                            <option key={state.code} value={state.code} className="bg-[#3f1212] hover:bg-[#FF0440]">
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF0440] hover:bg-[#d90338] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                    {loading ? 'Submitting...' : 'Pledge'}
                </button>
                {message && (
                    <div className={`mt-4 text-center text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};
