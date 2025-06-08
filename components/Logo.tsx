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
        <div className={`flex items-center space-x-3 ${className}`} data-oid="lrgkwgu">
            {/* Logo Icon */}
            <div className={`relative ${sizeClasses[size]}`} data-oid="4c4hn7y">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    data-oid="9-10ch3"
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
                        data-oid="8lwhkze"
                    />

                    {/* Broken Chains */}
                    <g transform="translate(50,50)" data-oid="su3e134">
                        {/* Left Chain */}
                        <g transform="translate(-15,5)" data-oid="vojf13r">
                            <ellipse
                                cx="0"
                                cy="-8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid="c7c9ohi"
                            />

                            <ellipse
                                cx="0"
                                cy="0"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid="8j1.du5"
                            />

                            <ellipse
                                cx="0"
                                cy="8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid="j83c7:6"
                            />

                            {/* Break lines */}
                            <line
                                x1="-4"
                                y1="-2"
                                x2="-8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="68758l-"
                            />

                            <line
                                x1="4"
                                y1="-2"
                                x2="8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="-5k:pvw"
                            />
                            <line
                                x1="-4"
                                y1="2"
                                x2="-8"
                                y2="6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="yyj4lp9"
                            />
                            <line
                                x1="4"
                                y1="2"
                                x2="8"
                                y2="6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="l0n.om7"
                            />
                        </g>

                        {/* Right Chain */}
                        <g transform="translate(15,5)" data-oid="r3o0y64">
                            <ellipse
                                cx="0"
                                cy="-8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid="kcx4a3-"
                            />

                            <ellipse
                                cx="0"
                                cy="0"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid="_.7y26c"
                            />

                            <ellipse
                                cx="0"
                                cy="8"
                                rx="4"
                                ry="6"
                                fill="none"
                                stroke="#1e3a8a"
                                strokeWidth="3"
                                data-oid=":9r7ccx"
                            />

                            {/* Break lines */}
                            <line
                                x1="-4"
                                y1="-2"
                                x2="-8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="g5nc6f1"
                            />

                            <line
                                x1="4"
                                y1="-2"
                                x2="8"
                                y2="-6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="wutal:3"
                            />
                            <line
                                x1="-4"
                                y1="2"
                                x2="-8"
                                y2="6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="_57s9.i"
                            />
                            <line
                                x1="4"
                                y1="2"
                                x2="8"
                                y2="6"
                                stroke="#1e3a8a"
                                strokeWidth="2"
                                data-oid="pn:st8x"
                            />
                        </g>
                    </g>

                    {/* Dove */}
                    <g transform="translate(50,25)" data-oid="zo27yy-">
                        <path
                            d="M-8,-5 Q-12,-8 -15,-5 Q-18,-2 -15,2 Q-12,5 -8,2 Q-5,0 0,0 Q5,0 8,2 Q12,5 15,2 Q18,-2 15,-5 Q12,-8 8,-5 Q5,-3 0,-3 Q-5,-3 -8,-5 Z"
                            fill="#f59e0b"
                            className="drop-shadow-md"
                            data-oid="d:6p4uu"
                        />

                        {/* Dove body */}
                        <ellipse cx="0" cy="2" rx="6" ry="4" fill="#f59e0b" data-oid="y.h1jsg" />
                        {/* Dove head */}
                        <circle cx="0" cy="-2" r="3" fill="#f59e0b" data-oid="accqlxk" />
                        {/* Beak */}
                        <path d="M0,-4 L2,-6 L0,-5 Z" fill="#ea580c" data-oid="2:5v62z" />
                        {/* Eye */}
                        <circle cx="1" cy="-3" r="0.5" fill="#1e3a8a" data-oid="mnef6d1" />
                    </g>
                </svg>
            </div>

            {/* Logo Text */}
            {showText && (
                <div className={`font-bold ${textSizeClasses[size]}`} data-oid="k.zazl:">
                    <span className="text-amber-500" data-oid="4nm-se4">
                        the
                    </span>
                    <span className="text-slate-800" data-oid="xvl6s-1">
                        Real
                    </span>
                    <br data-oid="m8i2xk_" />
                    <span className="text-slate-800" data-oid="cfxnla3">
                        Freedom
                    </span>
                    <span className="text-amber-500" data-oid="hf1eqtp">
                        .org
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
