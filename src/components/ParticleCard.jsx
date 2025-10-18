import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = '132, 0, 255';

const createParticleElement = (x, y, color) => {
    const el = document.createElement('div');
    el.style.cssText = `
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;
  `;
    return el;
};

export const ParticleCard = ({
    children,
    className = '',
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    enableMagnetism = true,
}) => {
    const cardRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const isHoveredRef = useRef(false);
    const magnetismAnimationRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const shouldDisableAnimations = isMobile;

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();
        particlesRef.current.forEach(particle => {
            if (particle.parentNode) {
                gsap.to(particle, {
                    scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
                    onComplete: () => particle.parentNode.removeChild(particle)
                });
            }
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current || shouldDisableAnimations) return;

        const { width, height } = cardRef.current.getBoundingClientRect();
        const particles = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );

        particles.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;
                const clone = particle.cloneNode(true);
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);
                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(clone, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
                gsap.to(clone, { opacity: 0, duration: 1.5 + Math.random(), ease: 'power2.inOut', repeat: -1, yoyo: true });
            }, index * 100);
            timeoutsRef.current.push(timeoutId);
        });
    }, [particleCount, glowColor, shouldDisableAnimations]);

    useEffect(() => {
        const element = cardRef.current;
        if (!element || shouldDisableAnimations) return;

        const handleMouseEnter = () => { isHoveredRef.current = true; animateParticles(); };
        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();
            if (enableTilt) gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
            if (enableMagnetism) gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
        };

        const handleMouseMove = e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -2;
                const rotateY = ((x - centerX) / centerX) * 2;
                gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
            }

            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.02;
                const magnetY = (y - centerY) * 0.02;
                magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
            }
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, shouldDisableAnimations, enableMagnetism, enableTilt]);

    return (
        <div
            ref={cardRef}
            className={`magic-card relative p-6 md:p-8 rounded-2xl border border-[#392e4e] bg-[#060010] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 ${className}`}
        >
            <div className="relative z-10">{children}</div>
        </div>
    );
};