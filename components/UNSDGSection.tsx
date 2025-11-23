import React from 'react';
import './UNSDGSection.css';
import ungoalslogo from '../assets/ungoalslogo.png';
import goal5logo from '../assets/5logo.png';
import goal11logo from '../assets/11logo.png';
import goal16logo from '../assets/16logo.png';

const UNSDGSection: React.FC = () => {
    return (
        <div className="unsdg-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="unsdg-content">
                    <div className="unsdg-text">
                        <h2 className="text-4xl font-bold">Aligned with UN SDGs</h2>
                        <img src={ungoalslogo} alt="UN Sustainable Development Goals" className="mt-4 un-main-logo" />
                    </div>
                    <div className="unsdg-goals">
                        <div className="goal-card goal-5">
                            <div className="goal-card-content">
                               
                                <img src={goal5logo} alt="Gender Equality" className="goal-icon" />
                            </div>
                        </div>
                        <div className="goal-card goal-11">
                            <div className="goal-card-content">
                               
                                <img src={goal11logo} alt="Sustainable Cities and Communities" className="goal-icon" />
                            </div>
                        </div>
                        <div className="goal-card goal-16">
                            <div className="goal-card-content">
                               
                                <img src={goal16logo} alt="Peace, Justice and Strong Institutions" className="goal-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UNSDGSection;
