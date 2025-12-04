import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icon for User Selection (Red Marker)
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Mock Data for Community Map
const incidentTypes = [
  'Harassment', 'Stalking', 'Catcalling', 'Groping', 'Indecent exposure', 'I felt unsafe', 'Theft', 'Assault'
];

const generateMockIncidents = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
    lat: 20 + (Math.random() * 10 - 5), // Approx India center latitude spread
    lng: 78 + (Math.random() * 10 - 5), // Approx India center longitude spread
    year: 2018 + Math.floor(Math.random() * 7), // 2018-2024
    time: Math.floor(Math.random() * 24), // 0-23 hours
    description: 'Incident reported by anonymous user.'
  }));
};

const mockIncidents = generateMockIncidents(50);

const IncidentReportSection: React.FC = () => {
    // Form State
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [formData, setFormData] = useState({
        experience: '',
        incidentType: [] as string[],
        date: '',
        time: '',
        policeReported: '',
        gender: '',
        environment: [] as string[]
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Map Filter State
    const [selectedTypes, setSelectedTypes] = useState<string[]>(incidentTypes);
    const [yearRange, setYearRange] = useState<[number, number]>([2018, 2024]);
    const [timeRange, setTimeRange] = useState<[number, number]>([0, 23]);

    // Filter Logic
    const filteredIncidents = useMemo(() => {
        return mockIncidents.filter(incident => 
        selectedTypes.includes(incident.type) &&
        incident.year >= yearRange[0] && incident.year <= yearRange[1] &&
        incident.time >= timeRange[0] && incident.time <= timeRange[1]
        );
    }, [selectedTypes, yearRange, timeRange]);

    const handleTypeToggle = (type: string) => {
        setSelectedTypes(prev => 
        prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    // Location Picker Component
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition([e.latlng.lat, e.latlng.lng]);
            },
        });
        return position ? (
            <Marker position={position} icon={redIcon}>
                <Popup>Your Selected Location</Popup>
            </Marker>
        ) : null;
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'incidentType' | 'environment') => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [field]: checked 
                ? [...prev[field], value]
                : prev[field].filter(item => item !== value)
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ ...formData, location: position });
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section className="mt-16 p-8 rounded-2xl shadow-2xl bg-[#000000] border border-brand-maroon backdrop-blur-sm">
                <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 text-green-400 mb-6 border border-green-800">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Report Submitted Successfully</h2>
                    <p className="text-brand-dull-white max-w-md mx-auto">
                        Thank you for your contribution. Your report helps us identify high-risk areas and advocate for better safety measures.
                    </p>
                    <button 
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                                experience: '',
                                incidentType: [],
                                date: '',
                                time: '',
                                policeReported: '',
                                gender: '',
                                environment: []
                            });
                            setPosition(null);
                        }}
                        className="mt-8 px-6 py-2 bg-brand-maroon hover:bg-brand-brown text-white rounded-lg transition-colors border border-brand-brown"
                    >
                        Submit Another Report
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
            {/* Form Section (Left - 4 cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl shadow-2xl bg-[#0d0202] border border-[#5a2301] backdrop-blur-sm h-full overflow-y-auto max-h-[800px]">
                <h2 className="text-2xl font-semibold text-brand-red mb-2">Report an Incident</h2>
                <p className="text-[#d1a5a5] mb-6 text-sm">Click on the map to pin location, then fill details.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-red-100 font-semibold mb-1 text-sm">What did you experience?</label>
                        <textarea 
                            name="experience" 
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full bg-[#2a0a0a] border border-[#4a0a0a] rounded-lg p-2 text-white text-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                            rows={2}
                            placeholder="Describe the incident..."
                        />
                    </div>

                    <div>
                        <label className="block text-red-100 font-semibold mb-2 text-sm">Incident Type *</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Harassment', 'Rape/Assault', 'Stalking', 'Catcalling', 'Groping', 'Indecent exposure', 'I felt unsafe', 'Theft', 'Trespass'].map(type => (
                                <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input 
                                            type="checkbox" 
                                            value={type}
                                            checked={formData.incidentType.includes(type)}
                                            onChange={(e) => handleCheckboxChange(e, 'incidentType')}
                                            className="peer h-3 w-3 appearance-none border border-[#5a2301] rounded bg-[#2a0a0a] checked:bg-brand-red checked:border-brand-red transition-all"
                                        />
                                        <svg className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-[#d1a5a5] group-hover:text-white text-xs">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-red-100 font-semibold mb-1 text-sm">Date *</label>
                            <input 
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#2a0a0a] border border-[#4a0a0a] rounded-lg p-2 text-white text-sm focus:border-brand-red outline-none" 
                            />
                        </div>
                        <div>
                            <label className="block text-red-100 font-semibold mb-1 text-sm">Time *</label>
                            <input 
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#2a0a0a] border border-[#4a0a0a] rounded-lg p-2 text-white text-sm focus:border-brand-red outline-none" 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-red-100 font-semibold mb-2 text-sm">Reported to Police? *</label>
                        <div className="flex space-x-4">
                            {['Yes', 'No', 'Will be'].map(opt => (
                                <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="policeReported" 
                                        value={opt}
                                        checked={formData.policeReported === opt}
                                        onChange={handleChange}
                                        required
                                        className="text-brand-red focus:ring-brand-red bg-[#2a0a0a] border-[#4a0a0a] h-3 w-3"
                                    />
                                    <span className="text-[#d1a5a5] text-xs">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-red-100 font-semibold mb-1 text-sm">Gender *</label>
                        <select 
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#2a0a0a] border border-[#4a0a0a] rounded-lg p-2 text-white text-sm focus:border-brand-red outline-none"
                        >
                            <option value="">Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                    <button 
                        type="submit" 
                        disabled={!position}
                        className="w-full bg-brand-red hover:bg-red-700 disabled:bg-brand-maroon disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg text-sm mt-4"
                    >
                        {position ? 'Submit Incident Report' : 'Select Location on Map to Submit'}
                    </button>
                </form>
            </div>

            {/* Map & Filters Section (Right - 8 cols) */}
            <div className="lg:col-span-8 h-[800px] bg-brand-brown rounded-2xl overflow-hidden border border-brand-maroon shadow-2xl flex flex-col">
                 {/* Filters Panel (Top Horizontal) */}
                <div className="p-4 bg-[#0a0a0a] border-b border-brand-maroon shrink-0">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-brand-red mb-2">Community Safety Map</h3>
                        <div className="text-xs text-brand-dull-white">Showing {filteredIncidents.length} incidents</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        {/* Year Filter */}
                        <div>
                            <label className="block text-brand-dull-white text-xs font-semibold mb-1 flex justify-between">
                                <span>Year Range</span>
                                <span className="text-brand-red">{yearRange[0]} - {yearRange[1]}</span>
                            </label>
                            <input 
                                type="range" 
                                min="2018" 
                                max="2024" 
                                value={yearRange[1]} 
                                onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                                className="w-full accent-brand-red h-1.5 bg-brand-brown-light rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Time Filter */}
                        <div>
                            <label className="block text-brand-dull-white text-xs font-semibold mb-1 flex justify-between">
                                <span>Time of Day</span>
                                <span className="text-brand-red">{timeRange[0]}:00 - {timeRange[1]}:00</span>
                            </label>
                            <div className="flex space-x-1 relative">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="23" 
                                    value={timeRange[0]} 
                                    onChange={(e) => {
                                        const val = parseInt(e.target.value);
                                        if(val <= timeRange[1]) setTimeRange([val, timeRange[1]]);
                                    }}
                                    className="w-full accent-brand-red h-1.5 bg-brand-brown-light rounded-lg appearance-none cursor-pointer z-10"
                                />
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="23" 
                                    value={timeRange[1]} 
                                    onChange={(e) => {
                                        const val = parseInt(e.target.value);
                                        if(val >= timeRange[0]) setTimeRange([timeRange[0], val]);
                                    }}
                                    className="w-full accent-brand-red h-1.5 bg-brand-brown-light rounded-lg appearance-none cursor-pointer z-10 -ml-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Type Filter */}
                    <div className="overflow-x-auto pb-2">
                        <div className="flex space-x-4 min-w-max">
                            {incidentTypes.map(type => (
                            <label key={type} className="flex items-center space-x-2 cursor-pointer group bg-brand-brown px-3 py-1.5 rounded-full border border-brand-maroon hover:border-brand-brown-light transition-colors">
                                <div className="relative flex items-center">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => handleTypeToggle(type)}
                                        className="peer h-3 w-3 appearance-none border border-brand-brown-light rounded bg-brand-brown checked:bg-brand-red checked:border-brand-red transition-all"
                                    />
                                    <svg className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <span className={`text-xs ${selectedTypes.includes(type) ? 'text-white' : 'text-brand-dull-white'} group-hover:text-white transition-colors whitespace-nowrap`}>{type}</span>
                            </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Container */}
                <div className="flex-1 relative w-full">
                    <MapContainer 
                        center={[20.5937, 78.9629]} 
                        zoom={5} 
                        style={{ height: '100%', width: '100%' }}
                        className="z-0"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />
                        {/* Existing Incidents */}
                        {filteredIncidents.map(incident => (
                            <Marker key={incident.id} position={[incident.lat, incident.lng]}>
                                <Popup className="custom-map-tooltip">
                                    <div className="p-2 min-w-[150px]">
                                        <h4 className="font-bold text-brand-red mb-1 text-sm">{incident.type}</h4>
                                        <p className="text-brand-dull-white text-xs mb-1">{incident.description}</p>
                                        <div className="text-[10px] text-brand-dull-white flex justify-between">
                                            <span>{incident.year}</span>
                                            <span>{incident.time}:00</span>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                        {/* User Selection Marker */}
                        <LocationMarker />
                    </MapContainer>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 z-[1000] bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-brand-maroon text-white shadow-xl">
                        <div className="text-xl font-bold text-brand-red leading-none">{filteredIncidents.length}</div>
                        <div className="text-[10px] text-brand-dull-white">Reports Visible</div>
                    </div>

                     {!position && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
                            <div className="bg-brand-red/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-pulse text-xs font-bold border border-white/20">
                                Click map to set incident location
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default IncidentReportSection;
