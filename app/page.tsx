'use client';

import { useState, useEffect } from 'react';

// TypeScript interfaces
interface CTAButtonProps {
    text: string;
    variant: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
}

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
const CTAButton: React.FC<CTAButtonProps> = ({ text, variant, onClick }) => {
    const baseClasses =
        'px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4';

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300 shadow-lg',
        secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-300 shadow-lg',
        outline:
            'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-300',
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]}`}
            onClick={onClick}
            aria-label={text}
            data-oid="py-cb-o"
        >
            {text}
        </button>
    );
};

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`} data-oid="7vccy_n">
        <div className="max-w-7xl mx-auto" data-oid="8gpj2-s">
            {children}
        </div>
    </section>
);

const TestimonyCard: React.FC<TestimonyCardProps> = ({ name, story, verse }) => (
    <div
        className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
        data-oid="j5pcmkd"
    >
        <blockquote
            className="text-gray-700 mb-6 italic text-lg leading-relaxed"
            data-oid="eofuzs4"
        >
            "{story}"
        </blockquote>
        <div className="border-t pt-4" data-oid="1bk2901">
            <p className="font-semibold text-blue-800 mb-2" data-oid="pcb9k86">
                - {name}
            </p>
            <p className="text-sm text-blue-600 font-medium" data-oid="_n9h7ot">
                "{verse}"
            </p>
        </div>
    </div>
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
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50"
            data-oid="f:x93fr"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-blue-100"
                data-oid="z5v9iek"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9i5xp4p">
                    <div className="flex justify-between items-center py-4" data-oid=":k7r11v">
                        <div className="flex items-center space-x-3" data-oid="5z.dfvg">
                            <div
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center"
                                data-oid="yt:k17g"
                            >
                                <span className="text-white font-bold text-lg" data-oid="i6nj55e">
                                    ✝
                                </span>
                            </div>
                            <h1
                                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent"
                                data-oid="bapu7ew"
                            >
                                The Real Freedom
                            </h1>
                        </div>

                        <div className="hidden lg:flex space-x-8" data-oid="0joqrn.">
                            {navigationItems.slice(0, 5).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                                        activeSection === item.id
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-700'
                                    }`}
                                    data-oid="7ch-8bh"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex space-x-4" data-oid="39qts.r">
                            <CTAButton
                                text="Get Help"
                                variant="primary"
                                onClick={() => scrollToSection('help')}
                                data-oid="58e0qp-"
                            />

                            <CTAButton
                                text="Pray with Us"
                                variant="outline"
                                onClick={() => scrollToSection('contact')}
                                data-oid="rplguw1"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <Section
                id="home"
                className="pt-32 pb-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white"
                data-oid="yb1fm:y"
            >
                <div
                    className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="3weqltx"
                >
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        data-oid="8tjrh_:"
                    >
                        REAL Freedom <br data-oid=".w-1awy" />
                        <span className="text-amber-300" data-oid="cq4vwia">
                            Starts Here
                        </span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl mb-4 text-blue-100 max-w-4xl mx-auto"
                        data-oid="et13k8x"
                    >
                        From Bondage to Breakthrough
                    </p>
                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-white/20"
                        data-oid="7qv19hk"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-amber-300"
                            data-oid="i9l7d4."
                        >
                            You were made for more.
                        </h2>
                        <p className="text-xl md:text-2xl mb-6" data-oid="gk:0:f1">
                            You are not your addiction.
                        </p>
                        <p className="text-lg text-blue-100 leading-relaxed" data-oid="_fgdp6s">
                            We're here to stand with the broken, to love the addicted, and to walk
                            with those who are ready to be free – really free.
                        </p>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        data-oid="lue908-"
                    >
                        <CTAButton
                            text="Get Help"
                            variant="secondary"
                            onClick={() => scrollToSection('help')}
                            data-oid="x2ci:-7"
                        />

                        <CTAButton
                            text="Join the Mission"
                            variant="outline"
                            onClick={() => scrollToSection('get-involved')}
                            data-oid="2xel:sl"
                        />

                        <CTAButton
                            text="Pray with Us"
                            variant="outline"
                            onClick={() => scrollToSection('contact')}
                            data-oid="mm.7rj2"
                        />
                    </div>
                </div>
            </Section>

            {/* About Us Section */}
            <Section id="about" className="bg-white" data-oid="5exowwv">
                <div className="text-center mb-16" data-oid="j3vpg-b">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="jonv0ni"
                    >
                        Our Story: Called to Set the{' '}
                        <span className="text-blue-600" data-oid="zs2.yul">
                            Captives Free
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="pzpuho0">
                    <div data-oid="zwkg04a">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6" data-oid="hgvz:mo">
                            Our Mission
                        </h3>
                        <p
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                            data-oid="goe617-"
                        >
                            We believe that true freedom comes only through Jesus Christ. Our
                            mission is to provide hope, healing, and restoration to those struggling
                            with addiction, while equipping the church to minister with compassion
                            and truth.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-6" data-oid=":-jheiv">
                            Why "Real" Freedom?
                        </h3>
                        <p
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                            data-oid="f1j:pj2"
                        >
                            Because temporary solutions lead to temporary results. Real freedom
                            addresses the heart, not just the habit. It's freedom that lasts because
                            it's rooted in the unchanging love of Christ.
                        </p>
                    </div>

                    <div
                        className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100"
                        data-oid="k6328yq"
                    >
                        <h3 className="text-2xl font-bold text-blue-800 mb-6" data-oid="a82h0f:">
                            Foundational Scripture
                        </h3>
                        <blockquote
                            className="text-lg text-gray-700 mb-6 italic leading-relaxed"
                            data-oid="olhk9gm"
                        >
                            "Look at the birds of the air; they do not sow or reap or store away in
                            barns, and yet your heavenly Father feeds them. Are you not much more
                            valuable than they?"
                        </blockquote>
                        <p className="text-blue-600 font-semibold mb-8" data-oid="gcsgy36">
                            - Matthew 6:26
                        </p>

                        <div className="border-t border-blue-200 pt-6" data-oid="4j5craa">
                            <blockquote
                                className="text-xl font-bold text-blue-800 mb-4"
                                data-oid="ilwj9pc"
                            >
                                "If the Son sets you free, you will be free indeed."
                            </blockquote>
                            <p className="text-blue-600 font-semibold" data-oid="bah-puv">
                                - John 8:36
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Gospel & Addiction Section */}
            <Section
                id="gospel"
                className="bg-gradient-to-r from-gray-50 to-blue-50"
                data-oid="qs8ybe-"
            >
                <div className="text-center mb-16" data-oid="dlqnav8">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="4wnwit1"
                    >
                        The Only Way Out Is{' '}
                        <span className="text-blue-600" data-oid=".803pmr">
                            Through Him
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16" data-oid="n6oclpr">
                    <div
                        className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600"
                        data-oid="9p24o5-"
                    >
                        <h3 className="text-2xl font-bold text-blue-800 mb-4" data-oid="b4a-own">
                            Why Is Addiction So Powerful?
                        </h3>
                        <p className="text-gray-600 leading-relaxed" data-oid="mc_tgku">
                            Addiction hijacks the very systems God designed for good - our reward
                            pathways, our need for connection, our desire for transcendence. It's a
                            spiritual battle that requires spiritual weapons.
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500"
                        data-oid="yo-:6f:"
                    >
                        <h3 className="text-2xl font-bold text-amber-600 mb-4" data-oid="ae-j58t">
                            Biblical Insights
                        </h3>
                        <p className="text-gray-600 leading-relaxed" data-oid="j7l3dc-">
                            God created by His Word and separated by His hands. In the same way, He
                            speaks freedom over our lives and actively works to separate us from
                            what binds us.
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600"
                        data-oid="6il3ndk"
                    >
                        <h3 className="text-2xl font-bold text-green-600 mb-4" data-oid="7z1.x9d">
                            Total Freedom
                        </h3>
                        <p className="text-gray-600 leading-relaxed" data-oid="i-c_kqw">
                            Jesus didn't just die for our sins - He rose again to give us power over
                            them. His resurrection is our guarantee that no addiction is stronger
                            than His love.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100"
                    data-oid="m238v2x"
                >
                    <h3
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                        data-oid="wrr1i41"
                    >
                        Gospel Truths
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="m-4x6ze">
                        <div className="text-center" data-oid="fqdb4q4">
                            <div
                                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                data-oid="u312c49"
                            >
                                <span className="text-white text-2xl font-bold" data-oid="z8kra27">
                                    1
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-blue-800 mb-3" data-oid="9fe4v7r">
                                Jesus is the Way
                            </h4>
                            <p className="text-gray-600" data-oid="qq7gpt9">
                                Not a way, but THE way to freedom and life.
                            </p>
                        </div>

                        <div className="text-center" data-oid="hi.uz3o">
                            <div
                                className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                data-oid="o3na1wl"
                            >
                                <span className="text-white text-2xl font-bold" data-oid="0i0pu:1">
                                    2
                                </span>
                            </div>
                            <h4
                                className="text-xl font-bold text-amber-600 mb-3"
                                data-oid="xoo7vbt"
                            >
                                Jesus is the Door
                            </h4>
                            <p className="text-gray-600" data-oid="p6rcvvt">
                                He opens the way to a new life and closes the door to bondage.
                            </p>
                        </div>

                        <div className="text-center" data-oid="ki7ngqe">
                            <div
                                className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                data-oid="hmggzp:"
                            >
                                <span className="text-white text-2xl font-bold" data-oid="bi1iw8j">
                                    3
                                </span>
                            </div>
                            <h4
                                className="text-xl font-bold text-green-600 mb-3"
                                data-oid="37s:ibo"
                            >
                                Jesus gives us Power
                            </h4>
                            <p className="text-gray-600" data-oid="ccyjul2">
                                The same power that raised Him from the dead lives in us.
                            </p>
                        </div>
                    </div>

                    <div
                        className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl"
                        data-oid="2tk7btw"
                    >
                        <p className="text-2xl font-bold text-gray-800" data-oid=".bs0dmg">
                            Religion gives rules.{' '}
                            <span className="text-blue-600" data-oid="rr4b2_b">
                                Jesus gives restoration.
                            </span>
                        </p>
                    </div>
                </div>
            </Section>

            {/* Help & Hope Section */}
            <Section id="help" className="bg-white" data-oid="r3nlnpj">
                <div className="text-center mb-16" data-oid="kzd361e">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="k8kegmq"
                    >
                        Struggling?{' '}
                        <span className="text-blue-600" data-oid="l0fml6g">
                            You're Not Alone.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="you6b41">
                        Whether you're fighting addiction yourself or supporting someone who is,
                        we're here to walk with you every step of the way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-oid="v1-or0r">
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
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-blue-100"
                            data-oid="-7q.2gs"
                        >
                            <div className="text-4xl mb-4" data-oid="d_iqcdy">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4" data-oid="8uixp8p">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed" data-oid="3p3t.md">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center" data-oid="mjr-nn8">
                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        data-oid="xmeohbl"
                    >
                        <CTAButton
                            text="Talk to Someone Now"
                            variant="primary"
                            data-oid="xbg64nk"
                        />

                        <CTAButton
                            text="Join a Support Group"
                            variant="secondary"
                            data-oid="rxj.sz3"
                        />
                    </div>
                </div>
            </Section>

            {/* Testimonies Section */}
            <Section className="bg-gradient-to-r from-gray-50 to-blue-50" data-oid="xfyb_80">
                <div className="text-center mb-16" data-oid="rz4czo_">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="2q50y40"
                    >
                        Stories of{' '}
                        <span className="text-blue-600" data-oid="fivp3in">
                            Real Freedom
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="34:tevd">
                    <TestimonyCard
                        name="Sarah M."
                        story="I was trapped in addiction for 15 years. Through The Real Freedom ministry, I found not just sobriety, but true freedom in Christ. Today, I'm 3 years clean and helping others find the same hope."
                        verse="He has sent me to bind up the brokenhearted, to proclaim freedom for the captives - Isaiah 61:1"
                        data-oid="lncmt86"
                    />

                    <TestimonyCard
                        name="Michael R."
                        story="As a pastor, I felt ashamed of my struggle with addiction. This ministry showed me that even shepherds need healing. Now I lead with authenticity and help other leaders find freedom."
                        verse="My grace is sufficient for you, for my power is made perfect in weakness - 2 Corinthians 12:9"
                        data-oid="hceloul"
                    />

                    <TestimonyCard
                        name="Jennifer L."
                        story="Watching my husband struggle with addiction nearly destroyed our family. Through their family support program, we learned how to love without enabling and found healing for our entire family."
                        verse="And we know that in all things God works for the good of those who love him - Romans 8:28"
                        data-oid="e9lnhrg"
                    />
                </div>
            </Section>

            {/* Equip the Church Section */}
            <Section id="equip" className="bg-white" data-oid="to8slf4">
                <div className="text-center mb-16" data-oid="nnmormb">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="tpn8qfa"
                    >
                        Training the Shepherds to{' '}
                        <span className="text-blue-600" data-oid="k9t:4gw">
                            Heal the Sheep
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="8bndhic">
                        Equipping pastors and church leaders with the tools, training, and biblical
                        foundation needed to minister effectively to those struggling with
                        addiction.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="t92etl6">
                    <div data-oid="6v19lwr">
                        <div className="space-y-8" data-oid="x60bzd.">
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
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                    data-oid="cya6hot"
                                >
                                    <div
                                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="8sr_fj:"
                                    >
                                        <span
                                            className="text-white text-sm font-bold"
                                            data-oid="u94n8sd"
                                        >
                                            ✓
                                        </span>
                                    </div>
                                    <div data-oid="42iv9ko">
                                        <h3
                                            className="text-xl font-bold text-gray-800 mb-2"
                                            data-oid="flktnpi"
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600" data-oid="bxtyscb">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
                        data-oid="jvsgbuu"
                    >
                        <h3 className="text-2xl font-bold mb-6" data-oid="ujt.swv">
                            Become a Freedom Pastor
                        </h3>
                        <p className="text-blue-100 mb-8 leading-relaxed" data-oid="1c5_qb3">
                            Join a growing network of pastors and leaders who are making a real
                            difference in their communities. Get certified, access exclusive
                            resources, and connect with like-minded ministers.
                        </p>
                        <div className="space-y-4" data-oid="wq5guyw">
                            <div className="flex items-center space-x-3" data-oid="44jytgu">
                                <span className="text-amber-300" data-oid="nu396e7">
                                    📚
                                </span>
                                <span data-oid="7wh38t_">Comprehensive training materials</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid=":dk7qp7">
                                <span className="text-amber-300" data-oid="oi-k1gz">
                                    🤝
                                </span>
                                <span data-oid="ii_tr0m">Ongoing mentorship and support</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid="jke0uio">
                                <span className="text-amber-300" data-oid="7lf1-8d">
                                    🌐
                                </span>
                                <span data-oid="lvcggo_">Access to exclusive pastor network</span>
                            </div>
                            <div className="flex items-center space-x-3" data-oid="h695:3v">
                                <span className="text-amber-300" data-oid="y6mpihn">
                                    📖
                                </span>
                                <span data-oid="5bm3umz">Free downloadable resources</span>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4" data-oid="y:2_z7t">
                            <button
                                className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                                data-oid="9_zv1lv"
                            >
                                Become a Freedom Pastor
                            </button>
                            <button
                                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
                                data-oid="oj3tatf"
                            >
                                Download Materials
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Awareness Campaigns Section */}
            <Section
                id="awareness"
                className="bg-gradient-to-r from-red-50 to-orange-50"
                data-oid="mpvdiva"
            >
                <div className="text-center mb-16" data-oid="hncsace">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="t:7i87t"
                    >
                        Let's Talk About{' '}
                        <span className="text-red-600" data-oid="4sgmtdc">
                            the First Time
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="6rb2r06">
                        Prevention is always better than treatment. Let's educate our communities
                        about the real risks of first-time substance use.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16" data-oid="8kl6bf-">
                    <div
                        className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-600"
                        data-oid="lx6_do0"
                    >
                        <h3 className="text-3xl font-bold text-red-600 mb-6" data-oid="avnzfvz">
                            Shocking Statistics
                        </h3>
                        <div className="space-y-6" data-oid="q0css:c">
                            <div className="flex items-center space-x-4" data-oid="m3t509j">
                                <div
                                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center"
                                    data-oid="_35tio:"
                                >
                                    <span
                                        className="text-2xl font-bold text-red-600"
                                        data-oid="xdoa4ry"
                                    >
                                        75%
                                    </span>
                                </div>
                                <div data-oid="o3wt9j.">
                                    <p className="font-semibold text-gray-800" data-oid="qhtub13">
                                        of first-time users
                                    </p>
                                    <p className="text-gray-600" data-oid="uy7h.p3">
                                        develop addiction patterns
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4" data-oid="cr0tx2c">
                                <div
                                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center"
                                    data-oid="4l4fb7x"
                                >
                                    <span
                                        className="text-2xl font-bold text-orange-600"
                                        data-oid="n56cn_b"
                                    >
                                        1x
                                    </span>
                                </div>
                                <div data-oid="f4okeg_">
                                    <p className="font-semibold text-gray-800" data-oid="ujs-j5j">
                                        One time is all it takes
                                    </p>
                                    <p className="text-gray-600" data-oid="hf2g.u-">
                                        for some substances to create dependency
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4" data-oid="38vburz">
                                <div
                                    className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center"
                                    data-oid="vzpi35u"
                                >
                                    <span
                                        className="text-2xl font-bold text-yellow-600"
                                        data-oid="sua_dgi"
                                    >
                                        90%
                                    </span>
                                </div>
                                <div data-oid="jxx04f:">
                                    <p className="font-semibold text-gray-800" data-oid="btf3y4c">
                                        of addictions begin
                                    </p>
                                    <p className="text-gray-600" data-oid="j.i777_">
                                        before age 18
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-oid="01v1h91">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6" data-oid="c39z2_d">
                            Prevention Tools Available
                        </h3>
                        <div className="grid grid-cols-2 gap-4" data-oid="1ze8.7b">
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
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                                    data-oid="tphd1db"
                                >
                                    <div className="text-2xl mb-2" data-oid="pc5eetm">
                                        {tool.icon}
                                    </div>
                                    <h4
                                        className="font-semibold text-gray-800 mb-1"
                                        data-oid="-qsw.ge"
                                    >
                                        {tool.title}
                                    </h4>
                                    <p className="text-sm text-gray-600" data-oid="29cuoue">
                                        {tool.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Love, Not Shame Section */}
            <Section id="love" className="bg-white" data-oid=".smy6i.">
                <div className="text-center mb-16" data-oid="4d:j9.o">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="n74kgbb"
                    >
                        We Don't Shame the Addicted. <br data-oid="5ou4_da" />
                        <span className="text-green-600" data-oid="1zi5ri1">
                            We Stand With Them.
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="yk6yrt.">
                    <div className="space-y-8" data-oid="q5nyfse">
                        <div
                            className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600"
                            data-oid="iu92q-m"
                        >
                            <h3
                                className="text-xl font-bold text-green-800 mb-3"
                                data-oid="an94_fo"
                            >
                                Addiction = Illness, not Weakness
                            </h3>
                            <p className="text-gray-700" data-oid="2_z4nv2">
                                We recognize addiction as a complex condition that affects the
                                brain, body, and spirit. It's not a moral failing or lack of
                                willpower.
                            </p>
                        </div>

                        <div
                            className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600"
                            data-oid="9xxl:q4"
                        >
                            <h3 className="text-xl font-bold text-blue-800 mb-3" data-oid="umkrdpm">
                                Respect in Conversations
                            </h3>
                            <p className="text-gray-700" data-oid="9-1p094">
                                We choose our words carefully, speaking truth in love and
                                maintaining the dignity of every person we serve.
                            </p>
                        </div>

                        <div
                            className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600"
                            data-oid="zdsc8rv"
                        >
                            <h3
                                className="text-xl font-bold text-purple-800 mb-3"
                                data-oid="8uica:y"
                            >
                                Christlike Compassion
                            </h3>
                            <p className="text-gray-700" data-oid=".322jhe">
                                Following Jesus's example, we meet people where they are with
                                unconditional love and practical support.
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
                        data-oid="15ws.oa"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-amber-300" data-oid="gxb1irx">
                            Accountability for Influencers
                        </h3>
                        <blockquote
                            className="text-lg italic mb-6 text-gray-300"
                            data-oid="rf:ljd2"
                        >
                            "If anyone causes one of these little ones—those who believe in me—to
                            stumble, it would be better for them to have a large millstone hung
                            around their neck and to be drowned in the depths of the sea."
                        </blockquote>
                        <p className="text-amber-300 font-semibold mb-6" data-oid="i.s1dya">
                            - Matthew 18:6
                        </p>
                        <p className="text-gray-300 leading-relaxed" data-oid="k71x7p:">
                            We believe those in positions of influence have a special responsibility
                            to protect the vulnerable. This includes speaking out against the
                            normalization of substance abuse in media, music, and culture.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mental Health & Depression Section */}
            <Section
                id="mental-health"
                className="bg-gradient-to-r from-indigo-50 to-purple-50"
                data-oid="m69s4g5"
            >
                <div className="text-center mb-16" data-oid="7_auxd9">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="4h19rfo"
                    >
                        Into the Light:{' '}
                        <span className="text-indigo-600" data-oid="12nra6b">
                            Understanding Depression
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="klvy:g6">
                        Depression and addiction often go hand in hand. We address both with
                        compassion, understanding, and biblical truth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" data-oid="g4q6atj">
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
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            data-oid="rqullmo"
                        >
                            <div className="text-3xl mb-4" data-oid="_tuu2_k">
                                {item.icon}
                            </div>
                            <h3
                                className={`text-lg font-bold text-${item.color}-600 mb-3`}
                                data-oid="hd957.u"
                            >
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed" data-oid="tmr-cke">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100"
                    data-oid="1w8fmm4"
                >
                    <h3
                        className="text-2xl font-bold text-center text-gray-800 mb-8"
                        data-oid="rvd.1-s"
                    >
                        Expert Network
                    </h3>
                    <p
                        className="text-center text-gray-600 mb-8 max-w-3xl mx-auto"
                        data-oid="hag:5.y"
                    >
                        We partner with licensed Christian therapists, psychiatrists, and counselors
                        who understand both the clinical and spiritual dimensions of mental health.
                    </p>
                    <div className="text-center" data-oid="hxj-rf:">
                        <CTAButton
                            text="Find a Christian Therapist"
                            variant="primary"
                            data-oid="yrgdv:m"
                        />
                    </div>
                </div>
            </Section>

            {/* Get Involved Section */}
            <Section
                id="get-involved"
                className="bg-gradient-to-r from-amber-50 to-orange-50"
                data-oid="1x2l9ar"
            >
                <div className="text-center mb-16" data-oid="2-7-lhj">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                        data-oid="d6y2oyn"
                    >
                        Partner With{' '}
                        <span className="text-amber-600" data-oid="_8f8sum">
                            Purpose
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="cw75iha">
                        There are many ways to join God's work of setting the captives free. Find
                        your place in this mission.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-oid="862v.lx">
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
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            data-oid="u1kuhiv"
                        >
                            <div className="text-4xl mb-4" data-oid="yp65u1y">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4" data-oid="oqtba:5">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed" data-oid="0.acgk_">
                                {item.description}
                            </p>
                            <button
                                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                                data-oid="-4lqvxq"
                            >
                                {item.action}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-white rounded-2xl shadow-xl p-8" data-oid="ao6df3u">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4" data-oid="5d-zn1r">
                        Ready to Make a Difference?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-oid="9_:hrz-">
                        Every person who finds freedom through this ministry is a victory worth
                        celebrating. Your involvement, no matter how big or small, makes an eternal
                        difference.
                    </p>
                    <CTAButton
                        text="Become a Freedom Partner"
                        variant="primary"
                        data-oid="6gtdhc4"
                    />
                </div>
            </Section>

            {/* Contact Section */}
            <Section
                id="contact"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                data-oid="qvs7:.d"
            >
                <div className="text-center mb-16" data-oid="320o6mt">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" data-oid="yzyaqvj">
                        Ready to Take the{' '}
                        <span className="text-amber-300" data-oid="u1cl8hm">
                            Next Step?
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto" data-oid=":g.hc5c">
                        Whether you need help, want to volunteer, or have a testimony to share,
                        we're here for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12" data-oid="al:edwu">
                    <div data-oid=".czu82z">
                        <h3 className="text-2xl font-bold mb-8 text-amber-300" data-oid="4qcavn8">
                            How Can We Help You?
                        </h3>
                        <div className="space-y-4" data-oid=".e97ajw">
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
                                <button
                                    key={index}
                                    className="w-full flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors border border-white/20"
                                    data-oid="l3u2vet"
                                >
                                    <div
                                        className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-xl`}
                                        data-oid=":6mc3tl"
                                    >
                                        {option.icon}
                                    </div>
                                    <span className="text-lg font-medium" data-oid="3h5k1kc">
                                        {option.text}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                        data-oid="q-blc.r"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-amber-300" data-oid="9_sl-ro">
                            Get in Touch
                        </h3>
                        <form className="space-y-6" data-oid="_d5cdgm">
                            <div data-oid="nd_sfor">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="h1h.vrl"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    placeholder="Your full name"
                                    data-oid="u-k1gho"
                                />
                            </div>

                            <div data-oid="_sorl3u">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="jsf7lo1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    placeholder="your.email@example.com"
                                    data-oid="zugvumk"
                                />
                            </div>

                            <div data-oid="wps6bk_">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="c4u7zoj"
                                >
                                    Phone (Optional)
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    placeholder="(555) 123-4567"
                                    data-oid="1ek1lz7"
                                />
                            </div>

                            <div data-oid="yjohd_d">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="2i8cawp"
                                >
                                    How can we help?
                                </label>
                                <select
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    data-oid="nm17ey6"
                                >
                                    <option value="" data-oid="mpdyn7n">
                                        Select an option
                                    </option>
                                    <option value="help" data-oid=".i9wsy7">
                                        I need help
                                    </option>
                                    <option value="volunteer" data-oid="23fxt9l">
                                        I want to volunteer
                                    </option>
                                    <option value="donate" data-oid="h43mh__">
                                        I want to donate
                                    </option>
                                    <option value="testimony" data-oid="d3tu-uz">
                                        I have a testimony
                                    </option>
                                    <option value="church" data-oid="ot9q2:3">
                                        Church partnership
                                    </option>
                                    <option value="prayer" data-oid="5.mncki">
                                        Prayer request
                                    </option>
                                </select>
                            </div>

                            <div data-oid="j:n0bxm">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="8i9p_3p"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    placeholder="Tell us more about how we can help..."
                                    data-oid="mpy45lw"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-4 focus:ring-amber-300"
                                data-oid="dtk5-tp"
                            >
                                Send Message
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/20" data-oid="1etln9_">
                            <h4 className="font-semibold mb-4" data-oid="q_v2fpw">
                                Need Immediate Help?
                            </h4>
                            <div className="space-y-2" data-oid="2.qqyk8">
                                <p className="flex items-center space-x-2" data-oid="bi4:9a5">
                                    <span data-oid="wcz7im4">📞</span>
                                    <span data-oid="r5ifxvt">Crisis Hotline: 1-800-FREEDOM</span>
                                </p>
                                <p className="flex items-center space-x-2" data-oid="s:a59nr">
                                    <span data-oid="-nup1na">💬</span>
                                    <span data-oid="w4u1kk4">Text "HOPE" to 741741</span>
                                </p>
                                <p className="flex items-center space-x-2" data-oid="daejado">
                                    <span data-oid="hi4v_uc">✉️</span>
                                    <span data-oid="i00ubg:">help@therealfreedm.org</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" data-oid="08y50hz">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="j5qnoua">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="zj-zlx2">
                        <div data-oid="21xd2rz">
                            <div className="flex items-center space-x-3 mb-6" data-oid="r19y8rb">
                                <div
                                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center"
                                    data-oid="_jnt-2u"
                                >
                                    <span
                                        className="text-white font-bold text-lg"
                                        data-oid=":-c.5:g"
                                    >
                                        ✝
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold" data-oid="wc9_cfw">
                                    The Real Freedom
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed" data-oid="o9c:trj">
                                Setting the captives free through the power of Jesus Christ. Real
                                freedom for real people facing real struggles.
                            </p>
                        </div>

                        <div data-oid="kbdszz0">
                            <h4 className="text-lg font-semibold mb-4" data-oid="u0zgzbc">
                                Quick Links
                            </h4>
                            <ul className="space-y-2" data-oid="wg9a8hd">
                                {[
                                    'About Us',
                                    'Get Help',
                                    'For Churches',
                                    'Resources',
                                    'Contact',
                                ].map((link) => (
                                    <li key={link} data-oid="rwn9of-">
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            data-oid=":y6duy4"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-oid="zk94h6a">
                            <h4 className="text-lg font-semibold mb-4" data-oid="4zl2sy8">
                                Resources
                            </h4>
                            <ul className="space-y-2" data-oid="ymj54fh">
                                {[
                                    'Crisis Hotline',
                                    'Support Groups',
                                    'Prayer Requests',
                                    'Testimonies',
                                    'Training Materials',
                                ].map((resource) => (
                                    <li key={resource} data-oid="5yyx9o_">
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            data-oid="ozg6i.c"
                                        >
                                            {resource}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div data-oid="8m.g61o">
                            <h4 className="text-lg font-semibold mb-4" data-oid="wmtqpo9">
                                Connect
                            </h4>
                            <div className="space-y-4" data-oid="23fzzpc">
                                <p className="text-gray-400" data-oid="_e:dqxb">
                                    📧 info@therealfreedm.org
                                    <br data-oid="pf0n:q_" />
                                    📞 1-800-FREEDOM
                                    <br data-oid="hbl4v0d" />
                                    💬 Text HOPE to 741741
                                </p>
                                <div className="flex space-x-4" data-oid="ssuczdf">
                                    {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                                        <button
                                            key={index}
                                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                            data-oid="x.u9q5f"
                                        >
                                            {icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center"
                        data-oid="8m4qpcp"
                    >
                        <p className="text-gray-400" data-oid="323mtjq">
                            © 2024 The Real Freedom Ministry. All rights reserved. |
                            <span className="text-amber-300" data-oid="28s1wm_">
                                {' '}
                                "If the Son sets you free, you will be free indeed." - John 8:36
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
