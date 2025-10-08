import React from "react";
import { motion, AnimatePresence, scale } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/InputField";
import { Textarea } from "../components/ui/TextArea";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { AnimatedLink } from "../components/ui/AnimatedLink";
import { AnimatedCard } from "../components/ui/AnimatedCard";
import { NumberCounter } from "../components/ui/NumberCounter";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { ScrollVideoBanner } from "../components/ui/ScrollVideoBanner";
import { FloatingElements } from "../components/ui/FloatingElements";
import { SectionReveal } from "../components/ui/SectionReveal";
import { useTheme } from "../context/UseTheme";
import {
    Menu,
    X,
    Download,
    Mail,
    ExternalLink,
    Facebook,
    Linkedin,
    Github,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const statsData = [
    {
        icon: "./browser-logo.png",
        number: 30,
        label: "Websites Built",
        suffix: "+",
    },
    {
        icon: "./hourglass-time-logo.svg",
        number: 3,
        label: "Years of Experience",
        suffix: "+",
    },
    {
        icon: "./networking-group-logo.svg",
        number: 5,
        label: "Clients Served",
        suffix: "+",
    },
    {
        icon: "./megaphone-logo.svg",
        number: 5,
        label: "Client Feedback",
        hasStar: true,
    },
];

const servicesData = [
    {
        icon: "./responsive-logo.png",
        title: "Website Development",
        description:
            "I build custom websites from the ground up, focusing on performance, responsiveness, and user experience. From concept to launch, I transform ideas and mockups into functional, visually appealing websites that align with your brand and goals.",
        bgColor: "bg-neutral-900",
    },
    {
        icon: "./web-development-logo.png",
        title: "Website Redesign/Rebuild",
        description:
            "When your website no longer represents your business, I give it a complete makeover. By modernizing layouts, improving responsiveness, and adding new features, I ensure your site not only looks better but also performs more effectively.",
        bgColor: "bg-neutral-900",
    },
    {
        icon: "./world-map-logo.svg",
        title: "Web Support & Maintenance",
        description:
            "Keeping your website secure and up to date is essential. I provide ongoing support, updates, fixes, and performance optimizations to ensure your site remains fast, reliable, and hassle-free long after it’s launched.",
        bgColor: "bg-neutral-900",
    },
];

const toolsData = [
    { src: "./wordpress-logo.png", alt: "WordPress Logo" },
    { src: "./elementor-logo.png", alt: "Elementor Logo" },
    { src: "./wix-logo.png", alt: "Wix logo edited" },
    { src: "./figma-logo.png", alt: "Figma Logo" },
    { src: "./adobe-xd-logo.png", alt: "Adobe XD Logo" },
    { src: "./photoshop-logo.png", alt: "Photoshop Logo" },
    { src: "./html-logo.png", alt: "Html logo edited" },
    { src: "./css-logo.png", alt: "Css logo edited" },
    { src: "./javascript-logo.png", alt: "Javascript logo" },
    { src: "./php-logo.png", alt: "Php logo" },
    { src: "./mysql-logo.png", alt: "Mysql logo edited" },
    { src: ".cpanel-logo.png", alt: "Cpanel logo" },
];

const projectsData = [
    {
        image: "./build-learn-thrive-website.webp",
        title: "Build Learn Thrive",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "Build Learn Thrive provides child-focused occupational, speech, and physical therapy with a caring team and family-centered values.",
        link: "Visit Site",
    },
    {
        image: "./spirit-journeys-worldwide-website.webp",
        title: "Spirit Journeys Worldwide ",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "Spirit Journeys Worldwide offers customized tours and travel experiences across the globe, from gorilla trekking to scenic adventures.",
        link: "https://spiritjourneysworldwide.com/",
    },
    {
        image: "./event-hire-professionals-website.webp",
        title: "Event Hire Professionals",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "Event Hire Professionals delivers creative event production and equipment rentals, showcasing past projects and a diverse client list.",
        link: "https://www.eventhireprofessionals.com/",
    },
    {
        image: "./fitness-website.webp",
        title: "Fitness",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "A sleek fitness website promoting classes, expert trainers, and flexible membership plans, designed to inspire workouts and showcase gym facilities.",
        link: "https://projects.lawrencesebelina.com/fitness/",
    },
    {
        image: "./viszila-website.webp",
        title: "Viszila",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "Viszila is a stylish sunglasses brand site featuring trendy eyewear, customer testimonials, and easy shopping with warranty registration.",
        link: "https://projects.lawrencesebelina.com/viszila/",
    },
    {
        image: "./pinnacle-law-website.webp",
        title: "Pinnacle Law",
        category: "WEB DEVELPOMENT",
        // client: "Simplicity",
        // date: "January 2024",
        description:
            "Pinnacle Law offers full-service legal representation, highlighting expertise in personal injury, criminal defense, business, and family law, with easy access to free consultations.",
        link: "https://projects.lawrencesebelina.com/pinnacle-law/",
    },
];

const testimonialsData = [
    {
        text: "I specialize in bringing ideas to life by turning Figma or Adobe XD mockups into live, pixel-perfect websites. My focus is not just on design accuracy but also on building websites that are fast-loading, fully responsive, and easy to navigate.",
        avatar: "/ellipse-16.svg",
    },
    {
        text: "I specialize in bringing ideas to life by turning Figma or Adobe XD mockups into live, pixel-perfect websites. My focus is not just on design accuracy but also on building websites that are fast-loading, fully responsive, and easy to navigate.",
        avatar: "/ellipse-16.svg",
    },
    {
        text: "I specialize in bringing ideas to life by turning Figma or Adobe XD mockups into live, pixel-perfect websites. My focus is not just on design accuracy but also on building websites that are fast-loading, fully responsive, and easy to navigate.",
        avatar: "/ellipse-16.svg",
    },
];

const contactInfo = [
    {
        icon: Facebook,
        href: "mailto:hello@portfolio.com",
    },
    {
        icon: Mail,
        href: "tel:+15551234567",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/lawrence-sebelina-75304a253/",
    },
    {
        icon: Github,
        href: "https://github.com/LawrenceSebelina",
    },
];

export const App = (): JSX.Element => {
    // const { theme } = useTheme();
    const { theme, toggleTheme } = useThemeContext();
    // console.log("Theme from context:", theme);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const scrolled = scrollY > 50;

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen w-full transition-colors duration-300">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <FloatingElements />
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background:
                            theme === "dark"
                                ? "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.1) 0%, transparent 50%)"
                                : "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.05) 0%, transparent 50%)",
                    }}
                    animate={{
                        background:
                            theme === "dark"
                                ? [
                                      "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.1) 0%, transparent 50%)",
                                      "radial-gradient(circle at 80% 50%, rgba(232, 87, 41, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 77, 5, 0.1) 0%, transparent 50%)",
                                      "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.1) 0%, transparent 50%)",
                                  ]
                                : [
                                      "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.05) 0%, transparent 50%)",
                                      "radial-gradient(circle at 80% 50%, rgba(232, 87, 41, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 77, 5, 0.05) 0%, transparent 50%)",
                                      "radial-gradient(circle at 20% 50%, rgba(232, 87, 41, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 77, 5, 0.05) 0%, transparent 50%)",
                                  ],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Header */}
            <motion.header
                // sticky instead of relative for real “sticky header”
                className={`sticky top-0 z-50 max-w-full px-4 md:px-8  transition-all duration-500 ease-in-out
                    ${
                        scrolled
                            ? "backdrop-blur-md shadow-md py-4" //bg-background/40
                            : "backdrop-blur-0 shadow-none py-4 md:py-6"
                    }
                `}
                style={{
                    backgroundColor: scrolled
                        ? theme === "dark"
                            ? "rgba(28,29,31,0.85)"
                            : "rgba(255,255,255,0.85)"
                        : "transparent",
                }}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-[1140px] flex items-center justify-between mx-auto">
                    {/* Logo */}
                    <motion.img
                        // src="/group-21-2.png"
                        src={
                            theme === "dark" ? "./logo.png" : "./logo-black.png"
                        }
                        alt="Logo"
                        className="w-[120px] md:w-[153px] h-10 md:h-14 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                        }}
                    />

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigationItems.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                className="font-bold text-lg text-foreground hover:text-primary relative group transition-colors [font-family:'Nunito_Sans',Helvetica]"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        <AnimatedButton className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px]">
                            <span className="font-bold text-sm md:text-lg">
                                Get Started
                            </span>
                        </AnimatedButton>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-background/95 backdrop-blur-md"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.nav
                            className="absolute top-20 left-4 right-4 bg-card border border-border rounded-lg p-6 shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {navigationItems.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    className="block py-3 text-lg font-bold text-foreground hover:text-primary transition-colors [font-family:'Nunito_Sans',Helvetica]"
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div
                                className="mt-4 pt-4 border-t border-border"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <AnimatedButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Get Started
                                </AnimatedButton>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col items-center text-center py-12 md:py-20 max-w-full mx-auto min-h-[60vh] md:min-h-screen justify-center px-4 md:px-8">
                <ScrollVideoBanner />

                <div className="mb-8">
                    <motion.p
                        className="[font-family:'Nunito_Sans',Helvetica] font-bold italic text-xl md:text-[28px] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-foreground">Hi, I am </span>
                        <motion.span
                            className="text-primary"
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(232, 87, 41, 0)",
                                    "0 0 10px rgba(232, 87, 41, 0.5)",
                                    "0 0 0px rgba(232, 87, 41, 0)",
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Lawrence
                        </motion.span>
                    </motion.p>

                    <motion.h1
                        className="[font-family:'Exo_2',Helvetica] font-bold text-foreground text-4xl md:text-6xl lg:text-[80px] leading-tight md:leading-normal mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100,
                        }}
                    >
                        <motion.span
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{
                                background:
                                    "linear-gradient(90deg, currentColor 0%, #e85729 50%, currentColor 100%)",
                                backgroundSize: "200% 100%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Web Developer
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground/80 text-base md:text-lg leading-6 max-w-[782px] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Hi, I'm Lawrence Sebelina, a Web Developer specializing
                        in creating modern, responsive, and high-performing
                        websites tailored for businesses and entrepreneurs.
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 md:gap-[30px] mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px] w-full sm:w-auto">
                        <Download className="w-4 h-4 mr-2" />
                        <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-sm md:text-lg">
                            Download Resume
                        </span>
                    </AnimatedButton>
                    <AnimatedButton
                        variant="outline"
                        className="bg-transparent border-primary text-foreground hover:bg-transparent hover:text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px] w-full sm:w-auto"
                    >
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-sm md:text-lg text-primary">
                            Contact Me
                        </span>
                    </AnimatedButton>
                </motion.div>
            </section>

            {/* About Section */}
            <SectionReveal>
                <section className="relative z-10 bg-muted/30 pt-12 pb-20 lg:pb-0 md:pt-20 px-4 md:px-8">
                    <div className="flex flex-col items-center text-center mb-12">
                        {/* Stats Section */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 w-full max-w-[1140px]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            {statsData.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.img
                                        className="w-12 md:w-[66px] h-10 md:h-[53px] mb-4"
                                        alt={stat.label}
                                        src={stat.icon}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    />
                                    <div className="flex items-center gap-2 mb-2">
                                        <motion.span
                                            className="[font-family:'Exo_2',Helvetica] font-bold text-primary text-2xl md:text-[50px] leading-tight md:leading-[1.5em]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                delay: 1.4 + index * 0.1,
                                            }}
                                        >
                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: 1.6 + index * 0.1,
                                                    type: "spring",
                                                    stiffness: 200,
                                                }}
                                            >
                                                <NumberCounter
                                                    value={stat.number}
                                                    delay={1.5}
                                                    duration={2}
                                                    suffix={stat.suffix}
                                                />
                                            </motion.span>
                                        </motion.span>
                                        {stat.hasStar && (
                                            <motion.img
                                                className="w-6 h-6"
                                                alt="Star"
                                                src="./star-svgrepo-com-23.svg"
                                                animate={{ rotate: 0 }}
                                                transition={{
                                                    duration: 0,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />
                                        )}
                                    </div>
                                    <p className="[font-family:'Nunito_Sans',Helvetica] font-bold text-foreground text-sm md:text-lg text-center leading-tight md:leading-[1.5em]">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="order-1 lg:order-1">
                            <motion.img
                                className="w-full max-w-[100%] h-auto mx-auto"
                                alt="Lawrence Sebelina"
                                src="./lawrence-sebelina.png"
                                // whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <Badge
                                variant="secondary"
                                className="mb-4 bg-primary/10 text-primary text-base"
                            >
                                WHO I AM
                            </Badge>
                            <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-6">
                                <span className="text-foreground">Meet </span>
                                <span className="text-primary">Lawrence</span>
                            </h2>
                            <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground/80 text-base md:text-lg leading-6 mb-6">
                                I'm a passionate web developer with over two
                                years of hands-on experience helping businesses
                                establish a strong digital presence. From
                                concept to deployment, I handle every stage of
                                the process — turning design ideas into fully
                                functional websites that are fast, secure, and
                                user-friendly. My approach focuses not only on
                                creating visually appealing designs but also on
                                ensuring that each site performs well, is easy
                                to navigate, and provides a smooth experience
                                across all devices.
                            </p>
                            <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground/80 text-base md:text-lg leading-6 mb-8">
                                I have worked on projects ranging from simple
                                landing pages to complex, multi-page platforms,
                                always tailoring the build to meet the client's
                                unique goals. Whether it's a startup launching
                                its first site or an established company needing
                                a redesign, I build websites that elevate
                                brands, engage audiences, and drive measurable
                                results.
                            </p>
                            <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px]">
                                <Download className="w-4 h-4 mr-2" />
                                <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-sm md:text-lg">
                                    Download my Resume
                                </span>
                            </AnimatedButton>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Services Section */}
            <SectionReveal>
                <section className="relative z-10 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto">
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary text-base"
                        >
                            WHAT I DO
                        </Badge>
                        <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-8 md:mb-16">
                            <span className="text-foreground">How I Can </span>
                            <span className="text-primary">Help You</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {servicesData.map((service, index) => (
                                <AnimatedCard
                                    key={index}
                                    className="bg-card border h-auto md:h-[443px] rounded-[5px]"
                                    delay={index * 0.2}
                                    hoverScale={1.05}
                                >
                                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                        <motion.img
                                            className="w-16 md:w-[95px] h-16 md:h-[95px] mb-6"
                                            alt={service.title}
                                            src={service.icon}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        />
                                        <h3 className="[font-family:'Exo_2',Helvetica] font-bold text-primary text-lg md:text-[22px] mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground/80 text-sm md:text-lg leading-6">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Tools Section */}
            <SectionReveal>
                <section className="relative z-10 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto text-center">
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary text-base"
                        >
                            MY TOOLS
                        </Badge>
                        <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-8 md:mb-16">
                            <span className="text-foreground">What I </span>
                            <span className="text-primary">Work With</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Experience Card */}

                            <AnimatedCard
                                className="md:col-span-1 bg-[url(/man-browsing-using-his-computer.png)] bg-cover bg-center max-w-[100%] h-full mx-auto rounded-[5px] border"
                                hoverScale={1}
                            >
                                <CardContent className="bg-primary/75 rounded-[5px] h-full flex flex-col items-center justify-center text-center p-6 md:p-8">
                                    <motion.span
                                        className="[font-family:'Exo_2',Helvetica] font-bold text-primary-foreground text-6xl md:text-[100px] leading-normal"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            delay: 0.2,
                                        }}
                                    >
                                        3+
                                    </motion.span>
                                    <p className="[font-family:'Nunito_Sans',Helvetica] font-bold text-primary-foreground text-xl md:text-[28px] text-center">
                                        Years of Experience
                                    </p>
                                </CardContent>
                            </AnimatedCard>

                            <div className="md:col-span-1 lg:col-span-2">
                                {/* Tools Grid */}
                                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                                    {toolsData.map((tool, index) => (
                                        <AnimatedCard
                                            key={index}
                                            className="bg-card border w-full aspect-square max-w-[100%] rounded-[5px] mx-auto"
                                            delay={index * 0.1}
                                            hoverScale={1.1}
                                        >
                                            <CardContent className="p-6 md:p-8 flex items-center justify-center h-full">
                                                <motion.img
                                                    className="w-full h-full object-contain"
                                                    alt={tool.alt}
                                                    src={tool.src}
                                                    whileHover={{
                                                        scale: 1.2,
                                                        rotate: 5,
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                    }}
                                                />
                                            </CardContent>
                                        </AnimatedCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* Projects Section */}
            <SectionReveal>
                <section className="relative z-10 bg-muted/30 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto">
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary text-base"
                        >
                            MY PROJECTS
                        </Badge>
                        <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-8 md:mb-16">
                            <span className="text-foreground">Featured </span>
                            <span className="text-primary">Works</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {projectsData.map((project, index) => (
                                <AnimatedCard
                                    key={index}
                                    className="bg-card border rounded-[5px] overflow-hidden group relative"
                                    delay={index * 0.2}
                                    hoverScale={1.03}
                                >
                                    {/* Image */}
                                    <div className="relative">
                                        <motion.img
                                            className="w-full h-[500px] object-cover rounded-t-[5px]"
                                            alt={project.title}
                                            src={project.image}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Sliding content */}
                                    <CardContent
                                        shine
                                        className="absolute bottom-0 left-0 w-full bg-card/80 p-4 md:p-6 translate-y-[66%] lg:translate-y-[62%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="mb-2 bg-primary/40 text-card-foreground text-xs"
                                        >
                                            {project.category}
                                        </Badge>
                                        <h3 className="[font-family:'Exo_2',Helvetica] font-bold text-primary text-lg md:text-[22px] mb-4">
                                            {project.title}
                                        </h3>

                                        <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground/80 text-sm md:text-base leading-6 mb-6 h-[100px]">
                                            {project.description}
                                        </p>

                                        {/* <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <p className="[font-family:'Exo_2',Helvetica] font-bold text-primary text-sm md:text-base">
                                                    CLIENT
                                                </p>
                                                <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground text-sm md:text-base">
                                                    {project.client}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="[font-family:'Exo_2',Helvetica] font-bold text-primary text-sm md:text-base">
                                                    DATE
                                                </p>
                                                <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground text-sm md:text-base">
                                                    {project.date}
                                                </p>
                                            </div>
                                        </div> */}

                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            className="[font-family:'Nunito_Sans',Helvetica] font-bold text-primary text-sm md:text-lg hover:underline inline-flex items-center gap-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            Visit Website
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>
                                    </CardContent>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionReveal>

            {/* CTA Section */}
            <SectionReveal>
                <section className="relative z-10 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto">
                        <AnimatedCard
                            className="bg-card border rounded-[10px] p-6 md:p-16"
                            border={false}
                            hoverScale={1}
                        >
                            <CardContent className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                                <div className="flex-1">
                                    <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-2xl md:text-[50px] leading-tight md:leading-normal mb-6">
                                        <span className="text-foreground">
                                            Let's Build{" "}
                                        </span>
                                        <span className="text-primary">
                                            Something Great Together
                                        </span>
                                    </h2>
                                    <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground/80 text-base md:text-lg leading-6">
                                        Looking for a developer who can turn
                                        your vision into a website that works?
                                        Whether you need a brand-new build, a
                                        redesign, or ongoing support — I'd love
                                        to help.
                                    </p>
                                </div>
                                <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px] w-full lg:w-auto">
                                    <Download className="w-4 h-4 mr-2" />
                                    <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-sm md:text-lg">
                                        Download my Resume
                                    </span>
                                </AnimatedButton>
                            </CardContent>
                        </AnimatedCard>
                    </div>
                </section>
            </SectionReveal>

            {/* Testimonials Section */}
            {/*  <SectionReveal>
                <section className="relative z-10 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto text-center">
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary text-base"
                        >
                            TESTIMONIALS
                        </Badge>
                        <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-8 md:mb-16">
                            <span className="text-foreground">
                                What Clients{" "}
                            </span>
                            <span className="text-primary">Say</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {testimonialsData.map((testimonial, index) => (
                                <AnimatedCard
                                    key={index}
                                    className="bg-card/80 backdrop-blur-sm border rounded-[5px] relative"
                                    delay={index * 0.2}
                                    hoverScale={1.05}
                                >
                                    <CardContent className="p-6 md:p-8 text-center">
                                        <motion.img
                                            className="w-12 md:w-[61px] h-12 md:h-[61px] mx-auto mb-6"
                                            alt="Star"
                                            src="./star-svgrepo-com-23.svg"
                                            animate={{ rotate: 0 }}
                                            transition={{
                                                duration: 0,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                        <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-card-foreground/80 text-sm md:text-lg text-center leading-6 mb-8">
                                            {testimonial.text}
                                        </p>
                                        <div className="flex justify-center gap-1 mb-8">
                                            {[...Array(5)].map(
                                                (_, starIndex) => (
                                                    <motion.img
                                                        key={starIndex}
                                                        className="w-6 h-6"
                                                        alt="Star"
                                                        src="./star-svgrepo-com-23.svg"
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                starIndex * 0.1,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.2,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <motion.img
                                            className="w-20 md:w-[120px] h-20 md:h-[120px] mx-auto rounded-full"
                                            alt="Avatar"
                                            src={testimonial.avatar}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        />
                                    </CardContent>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>
                </section>
            </SectionReveal>  */}

            {/* Contact Section */}
            <SectionReveal>
                <section className="relative z-10 py-12 md:py-20 px-4 md:px-8">
                    <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                        <div className="flex flex-col justify-center align-middle">
                            <div>
                                <Badge
                                    variant="secondary"
                                    className="mb-4 bg-primary/10 text-primary text-base"
                                >
                                    LET'S CONNECT
                                </Badge>
                                <h2 className="[font-family:'Exo_2',Helvetica] font-bold text-3xl md:text-[50px] leading-tight md:leading-normal mb-6">
                                    <span className="text-foreground">
                                        Get{" "}
                                    </span>
                                    <span className="text-primary">
                                        In Touch
                                    </span>
                                </h2>
                                <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground/80 text-base md:text-lg leading-6 mb-8">
                                    I'd love to hear about your project or
                                    ideas—whether it's a new website, a
                                    redesign, or ongoing support, let's make it
                                    happen together.
                                </p>

                                <div className="mb-4">
                                    <p className="[font-family:'Nunito_Sans',Helvetica] font-bold text-foreground text-base md:text-lg mb-2">
                                        Check Me On:
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {contactInfo.map(
                                            ({ icon: Icon, href }, i) => (
                                                <AnimatedLink
                                                    key={i}
                                                    href={href}
                                                    className="flex items-center"
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </AnimatedLink>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AnimatedCard
                            className="bg-card border rounded-[5px]"
                            hoverScale={1}
                            shine={false}
                            border={false}
                        >
                            <CardContent className="p-6 md:p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground text-sm md:text-lg block mb-2">
                                                First Name
                                            </label>
                                            <Input className="bg-background border-border rounded-[5px] h-[49px] transition-all duration-300 hover:ring-1 hover:ring-primary focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                        <div>
                                            <label className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground text-sm md:text-lg block mb-2">
                                                Last Name
                                            </label>
                                            <Input className="bg-background border-border rounded-[5px] h-[49px] transition-all duration-300 hover:ring-1 hover:ring-primary focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground text-sm md:text-lg block mb-2">
                                                Email
                                            </label>
                                            <Input className="bg-background border-border rounded-[5px] h-[49px] transition-all duration-300 hover:ring-1 hover:ring-primary focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                        <div>
                                            <label className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground text-sm md:text-lg block mb-2">
                                                Subject
                                            </label>
                                            <Input className="bg-background border-border rounded-[5px] h-[49px] transition-all duration-300 hover:ring-1 hover:ring-primary focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="[font-family:'Nunito_Sans',Helvetica] font-normal text-foreground text-sm md:text-lg block mb-2">
                                            Message
                                        </label>
                                        <Textarea className="bg-background border-border rounded-[5px] h-[162px] resize-none transition-all duration-300 hover:ring-1 hover:ring-primary focus:ring-2 focus:ring-primary/20" />
                                    </div>

                                    <AnimatedButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-3 md:py-4 h-auto rounded-[5px] w-full">
                                        <Mail className="w-4 h-4 mr-2" />
                                        <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-sm md:text-lg">
                                            Send Message
                                        </span>
                                    </AnimatedButton>
                                </form>
                            </CardContent>
                        </AnimatedCard>
                    </div>
                </section>
            </SectionReveal>

            {/* Footer */}
            {/* <footer className="relative z-10 mt-12 md:mt-20">
                <AnimatedCard className="bg-card border rounded-[10px] mx-4 mb-4">
                    <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 md:p-11 gap-4">
                        <motion.img
                            className="w-[120px] md:w-[153px] h-10 md:h-14 object-cover"
                            alt="Logo"
                            src="./group-21-2.png"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        />
                        <motion.img
                            className="w-[100px] md:w-[121px] h-6 md:h-[27px]"
                            alt="Social Links"
                            src="./frame-544.svg"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        />
                    </CardContent>
                </AnimatedCard>
            </footer> */}

            <footer className="relative z-10">
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-col items-center text-center">
                        {/* Back to Top Button */}

                        {/* Logo/Brand */}
                        <div className="mb-8">
                            <motion.img
                                // src="/group-21-2.png"
                                src={
                                    theme === "dark"
                                        ? "./logo.png"
                                        : "./logo-black.png"
                                }
                                alt="Logo"
                                className="w-[120px] md:w-[153px] h-10 md:h-14 object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            />
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-8 mb-8">
                            {navigationItems.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    className="font-bold text-lg text-foreground hover:text-primary relative group transition-colors [font-family:'Nunito_Sans',Helvetica]"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </motion.a>
                            ))}
                        </nav>

                        {/* Social Links */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            {contactInfo.map(({ icon: Icon, href }, i) => (
                                <AnimatedLink
                                    key={i}
                                    href={href}
                                    className="flex items-center"
                                >
                                    <Icon className="w-5 h-5" />
                                </AnimatedLink>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="border-t border-black-800 pt-8 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <p className="text-foreground [font-family:'Nunito_Sans',Helvetica]">
                                    © 2025 LS Dev. All rights reserved.
                                </p>
                                <p className="text-foreground flex items-center [font-family:'Nunito_Sans',Helvetica]">
                                    Made with ❤️ by Lawrence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
