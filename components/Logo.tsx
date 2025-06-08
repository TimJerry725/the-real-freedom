import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
    };

    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            {/* Logo Icon */}
            <div className={`relative ${sizeClasses[size]}`}>
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Circle Background */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#1e3a8a"
                        strokeWidth="6"
                        className="drop-shadow-lg"
                    />

                    {/* Broken Chains */}
                    <g transform="translate(50,50)">
                        {/* Left Chain */}
                        <g transform="translate(-15,5)">
                            <ellipse
                                cx="0"
                                cy="-8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            <ellipse
                                cx="0"
                                cy="0"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            <ellipse
                                cx="0"
                                cy="8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            {/* Break lines */}
                            <line
                                x1="-4"
                                y1="-2"
                                x2="-8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                            />

                            <line x1="4" y1="-2" x2="8" y2="-6" stroke="#1e3a8a" strokeWidth="2" />
                            <line x1="-4" y1="2" x2="-8" y2="6" stroke="#1e3a8a" strokeWidth="2" />
                            <line x1="4" y1="2" x2="8" y2="6" stroke="#1e3a8a" strokeWidth="2" />
                        </g>

                        {/* Right Chain */}
                        <g transform="translate(15,5)">
                            <ellipse
                                cx="0"
                                cy="-8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            <ellipse
                                cx="0"
                                cy="0"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            <ellipse
                                cx="0"
                                cy="8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                            />

                            {/* Break lines */}
                            <line
                                x1="-4"
                                y1="-2"
                                x2="-8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                            />

                            <line x1="4" y1="-2" x2="8" y2="-6" stroke="#1e3a8a" strokeWidth="2" />
                            <line x1="-4" y1="2" x2="-8" y2="6" stroke="#1e3a8a" strokeWidth="2" />
                            <line x1="4" y1="2" x2="8" y2="6" stroke="#1e3a8a" strokeWidth="2" />
                        </g>
                    </g>

                    {/* Dove */}
                    <g transform="translate(50,25)">
                        <path
                            d="M-8,-5 Q-12,-8 -15,-5 Q-18,-2 -15,2 Q-12,5 -8,2 Q-5,0 0,0 Q5,0 8,2 Q12,5 15,2 Q18,-2 15,-5 Q12,-8 8,-5 Q5,-3 0,-3 Q-5,-3 -8,-5 Z"
                            fill="#f59e0b"
                            className="drop-shadow-md"
                        />

                        {/* Dove body */}
                        <ellipse cx="0" cy="2" rx="6" ry="4" fill="#f59e0b" />
                        {/* Dove head */}
                        <circle cx="0" cy="-2" r="3" fill="#f59e0b" />
                        {/* Beak */}
                        <path d="M0,-4 L2,-6 L0,-5 Z" fill="#ea580c" />
                        {/* Eye */}
                        <circle cx="1" cy="-3" r="0.5" fill="#1e3a8a" />
                    </g>
                </svg>
            </div>

            {/* Logo Text */}
            {showText && (
                <div className={`font-bold ${textSizeClasses[size]}`}>
                    <span className="text-amber-500">the</span>
                    <span className="text-slate-800">Real</span>
                    <br />
                    <span className="text-slate-800">Freedom</span>
                    <span className="text-amber-500">.org</span>
                </div>
            )}
        </div>
    );
};

export default Logo;
