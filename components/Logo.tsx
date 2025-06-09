import React from 'react';
import Image from 'next/image';

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
            {/* Logo Image */}
            <div className={`relative ${sizeClasses[size]}`}>
                <Image
                    src="/images/logo.png"
                    alt="The Real Freedom Logo"
                    width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
                    height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
                    className="object-contain"
                />
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
