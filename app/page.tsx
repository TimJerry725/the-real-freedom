'use client';

import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '@/components/ui/select';
import { Logo } from '@/components/Logo';

// TypeScript interfaces
interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

interface TestimonyCardProps {
    name: string;
    story: string;
    verse: string;
}

// Reusable Components
const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="max-w-7xl mx-auto">{children}</div>
    </section>
);

const TestimonyCard: React.FC<TestimonyCardProps> = ({ name, story, verse }) => (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
        <CardContent className="p-6">
            <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                &ldquo;{story}&rdquo;
            </blockquote>
            <div className="border-t pt-4">
                <p className="font-semibold text-blue-800 mb-2">- {name}</p>
                <p className="text-sm text-blue-600 font-medium">&ldquo;{verse}&rdquo;</p>
            </div>
        </CardContent>
    </Card>
);

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        setIsVisible(true);

        // Intersection Observer for active section tracking
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 },
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navigationItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'gospel', label: 'Gospel & Addiction' },
        { id: 'help', label: 'Help & Hope' },
        { id: 'equip', label: 'Equip Church' },
        { id: 'awareness', label: 'Awareness' },
        { id: 'love', label: 'Love, Not Shame' },
        { id: 'mental-health', label: 'Mental Health' },
        { id: 'get-involved', label: 'Get Involved' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-sky-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Logo size="md" showText={true} />

                        <div className="hidden lg:flex space-x-8">
                            {navigationItems.slice(0, 5).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                                        activeSection === item.id
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex space-x-4">
                            <Button
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                                onClick={() => scrollToSection('help')}
                            >
                                Get Help
                            </Button>

                            <Button
                                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2 rounded-full font-medium transition-all duration-300"
                                onClick={() => scrollToSection('contact')}
                            >
                                Pray with Us
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <Section id="home" className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-rose-50"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(240, 249, 255, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23e0f2fe"/><stop offset="100%" stop-color="%23f0f9ff"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/><g opacity="0.1"><circle cx="200" cy="200" r="100" fill="%23bfdbfe"/><circle cx="800" cy="300" r="150" fill="%23ddd6fe"/><circle cx="300" cy="700" r="120" fill="%23fecaca"/><circle cx="700" cy="800" r="80" fill="%23fed7aa"/></g></svg>')`,
                    }}
                />

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full opacity-40 animate-bounce"></div>
                    <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-35 animate-pulse"></div>
                    <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-violet-200 to-indigo-200 rounded-full opacity-25 animate-bounce"></div>
                </div>

                <div
                    className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Main Hero Image */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl">
                                <span className="text-white text-6xl md:text-7xl font-light">
                                    ✝
                                </span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full animate-bounce"></div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        REAL Freedom{' '}
                        <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                            Starts Here
                        </span>{' '}
                        – From Bondage to Breakthrough
                    </h1>
                    {/* Content Section Below Hero */}
                    <div className="mt-16">
                        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 mb-12 max-w-4xl mx-auto border border-white/40 shadow-xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                You were made for more.
                            </h2>
                            <p className="text-xl md:text-2xl mb-6 text-slate-700 font-medium">
                                You are not your addiction.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We&apos;re here to stand with the broken, to love the addicted, and to
                                walk with those who are ready to be free – really free.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                onClick={() => scrollToSection('help')}
                            >
                                Get Help Now
                            </Button>

                            <Button
                                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                onClick={() => scrollToSection('get-involved')}
                            >
                                Join the Mission
                            </Button>

                            <Button
                                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                onClick={() => scrollToSection('contact')}
                            >
                                Pray with Us
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* About Us Section */}
            <Section id="about" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Story: Called to Set the{' '}
                        <span className="text-blue-600">Captives Free</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We believe that true freedom comes only through Jesus Christ. Our
                            mission is to provide hope, healing, and restoration to those struggling
                            with addiction, while equipping the church to minister with compassion
                            and truth.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Why "Real" Freedom?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Because temporary solutions lead to temporary results. Real freedom
                            addresses the heart, not just the habit. It&apos;s freedom that lasts because
                            it&apos;s rooted in the unchanging love of Christ.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-800 mb-6">
                            Foundational Scripture
                        </h3>
                        <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                            &ldquo;Look at the birds of the air; they do not sow or reap or store away in
                            barns, and yet your heavenly Father feeds them. Are you not much more
                            valuable than they?&rdquo;
                        </blockquote>
                        <p className="text-blue-600 font-semibold mb-8">- Matthew 6:26</p>

                        <div className="border-t border-blue-200 pt-6">
                            <blockquote className="text-xl font-bold text-blue-800 mb-4">
                                &ldquo;If the Son sets you free, you will be free indeed.&rdquo;
                            </blockquote>
                            <p className="text-blue-600 font-semibold">- John 8:36</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Gospel & Addiction Section */}
            <Section id="gospel" className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        The Only Way Out Is <span className="text-blue-600">Through Him</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-blue-800 mb-4">
                            Why Is Addiction So Powerful?
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Addiction hijacks the very systems God designed for good - our reward
                            pathways, our need for connection, our desire for transcendence. It&apos;s a
                            spiritual battle that requires spiritual weapons.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
                        <h3 className="text-2xl font-bold text-amber-600 mb-4">
                            Biblical Insights
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            God created by His Word and separated by His hands. In the same way, He
                            speaks freedom over our lives and actively works to separate us from
                            what binds us.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">Total Freedom</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Jesus didn&apos;t just die for our sins - He rose again to give us power over
                            them. His resurrection is our guarantee that no addiction is stronger
                            than His love.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Gospel Truths
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">1</span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-800 mb-3">
                                Jesus is the Way
                            </h4>
                            <p className="text-gray-600">
                                Not a way, but THE way to freedom and life.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <h4 className="text-xl font-bold text-amber-600 mb-3">
                                Jesus is the Door
                            </h4>
                            <p className="text-gray-600">
                                He opens the way to a new life and closes the door to bondage.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">3</span>
                            </div>
                            <h4 className="text-xl font-bold text-green-600 mb-3">
                                Jesus gives us Power
                            </h4>
                            <p className="text-gray-600">
                                The same power that raised Him from the dead lives in us.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl">
                        <p className="text-2xl font-bold text-gray-800">
                            Religion gives rules.{' '}
                            <span className="text-blue-600">Jesus gives restoration.</span>
                        </p>
                    </div>
                </div>
            </Section>

            {/* Help & Hope Section */}
            <Section id="help" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Struggling? <span className="text-blue-600">You're Not Alone.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Whether you&apos;re fighting addiction yourself or supporting someone who is,
                        we&apos;re here to walk with you every step of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            title: "What to do if you're addicted",
                            description:
                                'Practical steps to begin your journey to freedom, starting today.',
                            icon: '🤝',
                        },
                        {
                            title: 'How to say no the first time',
                            description:
                                'Prevention strategies and tools for those facing temptation.',
                            icon: '🛡️',
                        },
                        {
                            title: 'Transformation Stories',
                            description:
                                'Real testimonies from people who found freedom through Christ.',
                            icon: '✨',
                        },
                        {
                            title: 'Support for Families & Spouses',
                            description: 'Resources for loved ones affected by addiction.',
                            icon: '❤️',
                        },
                        {
                            title: 'Certified Counselors',
                            description:
                                'Connect with trained Christian counselors who understand addiction.',
                            icon: '👥',
                        },
                        {
                            title: '24/7 Prayer Support',
                            description: 'Someone is always available to pray with you.',
                            icon: '🙏',
                        },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardHeader>
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <CardTitle className="text-xl font-bold text-gray-800">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button variant="default">Talk to Someone Now</Button>

                        <Button variant="secondary">Join a Support Group</Button>
                    </div>
                </div>
            </Section>

            {/* Testimonies Section */}
            <Section className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Stories of <span className="text-blue-600">Real Freedom</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonyCard
                        name="Sarah M."
                        story="I was trapped in addiction for 15 years. Through The Real Freedom ministry, I found not just sobriety, but true freedom in Christ. Today, I'm 3 years clean and helping others find the same hope."
                        verse="He has sent me to bind up the brokenhearted, to proclaim freedom for the captives - Isaiah 61:1"
                    />

                    <TestimonyCard
                        name="Michael R."
                        story="As a pastor, I felt ashamed of my struggle with addiction. This ministry showed me that even shepherds need healing. Now I lead with authenticity and help other leaders find freedom."
                        verse="My grace is sufficient for you, for my power is made perfect in weakness - 2 Corinthians 12:9"
                    />

                    <TestimonyCard
                        name="Jennifer L."
                        story="Watching my husband struggle with addiction nearly destroyed our family. Through their family support program, we learned how to love without enabling and found healing for our entire family."
                        verse="And we know that in all things God works for the good of those who love him - Romans 8:28"
                    />
                </div>
            </Section>

            {/* Equip the Church Section */}
            <Section id="equip" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Training the Shepherds to{' '}
                        <span className="text-blue-600">Heal the Sheep</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Equipping pastors and church leaders with the tools, training, and biblical
                        foundation needed to minister effectively to those struggling with
                        addiction.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="space-y-8">
                            {[
                                {
                                    title: 'Certification Programs',
                                    description:
                                        'Comprehensive training in biblical addiction recovery methods',
                                },
                                {
                                    title: 'Prayer Ministry Models',
                                    description:
                                        'Proven frameworks for establishing effective prayer ministries',
                                },
                                {
                                    title: 'Biblical Rehab Approaches',
                                    description:
                                        'Scripture-based recovery programs that address the whole person',
                                },
                                {
                                    title: 'Creative Materials',
                                    description:
                                        'Skits, songs, gospel plays, and other engaging resources',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6">Become a Freedom Pastor</h3>
                        <p className="text-blue-100 mb-8 leading-relaxed">
                            Join a growing network of pastors and leaders who are making a real
                            difference in their communities. Get certified, access exclusive
                            resources, and connect with like-minded ministers.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <span className="text-amber-300">📚</span>
                                <span>Comprehensive training materials</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-amber-300">🤝</span>
                                <span>Ongoing mentorship and support</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-amber-300">🌐</span>
                                <span>Access to exclusive pastor network</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-amber-300">📖</span>
                                <span>Free downloadable resources</span>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                                Become a Freedom Pastor
                            </Button>
                            <Button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                                Download Materials
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Awareness Campaigns Section */}
            <Section id="awareness" className="bg-gradient-to-r from-red-50 to-orange-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Let's Talk About <span className="text-red-600">the First Time</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Prevention is always better than treatment. Let's educate our communities
                        about the real risks of first-time substance use.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <Card className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-600">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-red-600">
                                Shocking Statistics
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-red-600">75%</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            of first-time users
                                        </p>
                                        <p className="text-gray-600">develop addiction patterns</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-orange-600">
                                            1x
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            One time is all it takes
                                        </p>
                                        <p className="text-gray-600">
                                            for some substances to create dependency
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-yellow-600">
                                            90%
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            of addictions begin
                                        </p>
                                        <p className="text-gray-600">before age 18</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Prevention Tools Available
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: '🎭',
                                    title: 'Skit Scripts',
                                    desc: 'Ready-to-perform educational skits',
                                },
                                {
                                    icon: '📋',
                                    title: 'Posters',
                                    desc: 'Eye-catching awareness materials',
                                },
                                {
                                    icon: '🎥',
                                    title: 'Testimony Videos',
                                    desc: 'Real stories of prevention success',
                                },
                                {
                                    icon: '🛠️',
                                    title: 'Workshop Kits',
                                    desc: 'Complete educational packages',
                                },
                            ].map((tool, index) => (
                                <Card
                                    key={index}
                                    className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <CardHeader>
                                        <div className="text-2xl mb-2">{tool.icon}</div>
                                        <CardTitle className="font-semibold text-gray-800">
                                            {tool.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">{tool.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Love, Not Shame Section */}
            <Section id="love" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        We Don't Shame the Addicted. <br />
                        <span className="text-green-600">We Stand With Them.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                            <h3 className="text-xl font-bold text-green-800 mb-3">
                                Addiction = Illness, not Weakness
                            </h3>
                            <p className="text-gray-700">
                                We recognize addiction as a complex condition that affects the
                                brain, body, and spirit. It's not a moral failing or lack of
                                willpower.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                            <h3 className="text-xl font-bold text-blue-800 mb-3">
                                Respect in Conversations
                            </h3>
                            <p className="text-gray-700">
                                We choose our words carefully, speaking truth in love and
                                maintaining the dignity of every person we serve.
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                            <h3 className="text-xl font-bold text-purple-800 mb-3">
                                Christlike Compassion
                            </h3>
                            <p className="text-gray-700">
                                Following Jesus's example, we meet people where they are with
                                unconditional love and practical support.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 text-amber-300">
                            Accountability for Influencers
                        </h3>
                        <blockquote className="text-lg italic mb-6 text-gray-300">
                            &ldquo;If anyone causes one of these little ones—those who believe in me—to
                            stumble, it would be better for them to have a large millstone hung
                            around their neck and to be drowned in the depths of the sea.&rdquo;
                        </blockquote>
                        <p className="text-amber-300 font-semibold mb-6">- Matthew 18:6</p>
                        <p className="text-gray-300 leading-relaxed">
                            We believe those in positions of influence have a special responsibility
                            to protect the vulnerable. This includes speaking out against the
                            normalization of substance abuse in media, music, and culture.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mental Health & Depression Section */}
            <Section id="mental-health" className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Into the Light:{' '}
                        <span className="text-indigo-600">Understanding Depression</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Depression and addiction often go hand in hand. We address both with
                        compassion, understanding, and biblical truth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            title: 'Defining Depression',
                            description:
                                'Understanding the clinical and spiritual aspects of depression',
                            icon: '🧠',
                            color: 'indigo',
                        },
                        {
                            title: 'Link to Addiction',
                            description: 'How depression and substance abuse feed into each other',
                            icon: '🔗',
                            color: 'purple',
                        },
                        {
                            title: 'Support Strategies',
                            description:
                                'Practical ways to support those struggling with depression',
                            icon: '🤝',
                            color: 'blue',
                        },
                        {
                            title: 'Professional Resources',
                            description:
                                'Connecting with qualified Christian therapists and counselors',
                            icon: '👨‍⚕️',
                            color: 'green',
                        },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <CardHeader>
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <CardTitle
                                    className={`text-lg font-bold text-${item.color}-600 mb-3`}
                                >
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                        Expert Network
                    </h3>
                    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                        We partner with licensed Christian therapists, psychiatrists, and counselors
                        who understand both the clinical and spiritual dimensions of mental health.
                    </p>
                    <div className="text-center">
                        <Button variant="default">Find a Christian Therapist</Button>
                    </div>
                </div>
            </Section>

            {/* Get Involved Section */}
            <Section id="get-involved" className="bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Partner With <span className="text-amber-600">Purpose</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        There are many ways to join God's work of setting the captives free. Find
                        your place in this mission.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            title: 'Volunteer',
                            description:
                                'Serve directly with those in recovery through mentoring, support groups, and outreach',
                            icon: '🙋‍♀️',
                            action: 'Start Volunteering',
                        },
                        {
                            title: 'Partner Church',
                            description:
                                'Bring The Real Freedom ministry to your congregation and community',
                            icon: '⛪',
                            action: 'Become a Partner',
                        },
                        {
                            title: 'Weekly Prayer',
                            description:
                                'Join our prayer team and intercede for those struggling with addiction',
                            icon: '🙏',
                            action: 'Join Prayer Team',
                        },
                        {
                            title: 'Support a Recovery Center',
                            description:
                                'Help fund and support local recovery centers and halfway houses',
                            icon: '🏠',
                            action: 'Support Centers',
                        },
                        {
                            title: 'Sponsor a Freedom Certificate',
                            description:
                                'Fund certification training for pastors and ministry leaders',
                            icon: '📜',
                            action: 'Sponsor Training',
                        },
                        {
                            title: 'Monthly Giving',
                            description:
                                'Provide ongoing support for our ministry operations and outreach',
                            icon: '💝',
                            action: 'Give Monthly',
                        },
                    ].map((item, index) => (
                        <Card
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <CardHeader>
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <CardTitle className="text-xl font-bold text-gray-800">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                                <Button variant="default">{item.action}</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Make a Difference?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Every person who finds freedom through this ministry is a victory worth
                        celebrating. Your involvement, no matter how big or small, makes an eternal
                        difference.
                    </p>
                    <Button variant="default">Become a Freedom Partner</Button>
                </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Take the <span className="text-amber-300">Next Step?</span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Whether you need help, want to volunteer, or have a testimony to share,
                        we&apos;re here for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-amber-300">
                            How Can We Help You?
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: '🆘',
                                    text: 'I need help with addiction',
                                    color: 'bg-red-500',
                                },
                                { icon: '🤝', text: 'I want to volunteer', color: 'bg-green-500' },
                                { icon: '💝', text: 'I want to donate', color: 'bg-amber-500' },
                                {
                                    icon: '✨',
                                    text: 'I have a testimony to share',
                                    color: 'bg-purple-500',
                                },
                                {
                                    icon: '⛪',
                                    text: 'I represent a church',
                                    color: 'bg-indigo-500',
                                },
                                { icon: '🙏', text: 'I need prayer', color: 'bg-pink-500' },
                            ].map((option, index) => (
                                <Button
                                    key={index}
                                    className={`w-full flex items-center space-x-4 ${option.color} rounded-lg p-4 hover:bg-white/20 transition-colors border border-white/20`}
                                >
                                    <div
                                        className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-xl`}
                                    >
                                        {option.icon}
                                    </div>
                                    <span className="text-lg font-medium">{option.text}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Card className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold mb-6 text-amber-300">
                                Get in Touch
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Phone (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        How can we help?
                                    </label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="help">I need help</SelectItem>
                                            <SelectItem value="volunteer">
                                                I want to volunteer
                                            </SelectItem>
                                            <SelectItem value="donate">I want to donate</SelectItem>
                                            <SelectItem value="testimony">
                                                I have a testimony
                                            </SelectItem>
                                            <SelectItem value="church">
                                                Church partnership
                                            </SelectItem>
                                            <SelectItem value="prayer">Prayer request</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                        placeholder="Tell us more about how we can help..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-4 focus:ring-amber-300"
                                >
                                    Send Message
                                </Button>
                            </form>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <h4 className="font-semibold mb-4">Need Immediate Help?</h4>
                                <div className="space-y-2">
                                    <p className="flex items-center space-x-2">
                                        <span>📞</span>
                                        <span>Crisis Hotline: 1-800-FREEDOM</span>
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <span>💬</span>
                                        <span>Text "HOPE" to 741741</span>
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <span>✉️</span>
                                        <span>help@therealfreedm.org</span>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">✝</span>
                                </div>
                                <h3 className="text-xl font-bold">The Real Freedom</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Setting the captives free through the power of Jesus Christ. Real
                                freedom for real people facing real struggles.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {[
                                    'About Us',
                                    'Get Help',
                                    'For Churches',
                                    'Resources',
                                    'Contact',
                                ].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {[
                                    'Crisis Hotline',
                                    'Support Groups',
                                    'Prayer Requests',
                                    'Testimonies',
                                    'Training Materials',
                                ].map((resource) => (
                                    <li key={resource}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {resource}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <div className="space-y-4">
                                <p className="text-gray-400">
                                    📧 info@therealfreedm.org
                                    <br />
                                    📞 1-800-FREEDOM
                                    <br />
                                    💬 Text HOPE to 741741
                                </p>
                                <div className="flex space-x-4">
                                    {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                                        <Button
                                            key={index}
                                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        >
                                            {icon}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 The Real Freedom Ministry. All rights reserved. |
                            <span className="text-amber-300">
                                {' '}
                                &ldquo;If the Son sets you free, you will be free indeed.&rdquo; - John 8:36
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
