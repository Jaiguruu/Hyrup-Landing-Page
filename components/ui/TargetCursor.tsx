import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

interface TargetCursorProps {
    targetSelector?: string;
    spinDuration?: number;
    hideDefaultCursor?: boolean;
    hoverDuration?: number;
    parallaxOn?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
    targetSelector = '.cursor-target',
    spinDuration = 3.6,
    hideDefaultCursor = true,
    hoverDuration = 0.3,
    parallaxOn = true
}) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
    const spinTl = useRef<gsap.core.Timeline | null>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const isActiveRef = useRef(false);
    const targetCornerPositionsRef = useRef<Array<{ x: number, y: number }> | null>(null);
    const tickerFnRef = useRef<(() => void) | null>(null);
    const activeStrengthRef = useRef(0);

    const isMobile = useMemo(() => {
        if (typeof window === 'undefined') return false;
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isSmall = window.innerWidth <= 768;
        return hasTouch && isSmall;
    }, []);

    const constants = useMemo(() => ({
        borderWidth: 3,
        cornerSize: 12
    }), []);

    const moveCursor = useCallback((x: number, y: number) => {
        if (!cursorRef.current) return;
        gsap.to(cursorRef.current, {
            x,
            y,
            duration: 0.1,
            ease: 'power3.out'
        });
    }, []);

    useEffect(() => {
        if (isMobile || !cursorRef.current) return;

        const originalCursor = document.body.style.cursor;
        if (hideDefaultCursor) {
            document.body.style.cursor = 'none';
        }

        const cursor = cursorRef.current;
        cornersRef.current = cursor.querySelectorAll<HTMLDivElement>('.target-cursor-corner');

        let activeTarget: HTMLElement | null = null;
        let currentLeaveHandler: (() => void) | null = null;
        let resumeTimeout: any = null;

        const cleanupTarget = (target: HTMLElement) => {
            if (currentLeaveHandler) {
                target.removeEventListener('mouseleave', currentLeaveHandler);
            }
            currentLeaveHandler = null;
        };

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        const createSpinTimeline = () => {
            if (spinTl.current) spinTl.current.kill();
            spinTl.current = gsap.timeline({ repeat: -1 })
                .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' });
        };
        createSpinTimeline();

        const tickerFn = () => {
            if (!targetCornerPositionsRef.current || !cursorRef.current || !cornersRef.current) return;

            const strength = activeStrengthRef.current;
            if (strength === 0) return;

            const cursorX = gsap.getProperty(cursorRef.current, 'x') as number;
            const cursorY = gsap.getProperty(cursorRef.current, 'y') as number;

            const corners = Array.from(cornersRef.current);
            corners.forEach((corner, i) => {
                const currentX = gsap.getProperty(corner, 'x') as number;
                const currentY = gsap.getProperty(corner, 'y') as number;

                const targetX = targetCornerPositionsRef.current![i].x - cursorX;
                const targetY = targetCornerPositionsRef.current![i].y - cursorY;

                const finalX = currentX + (targetX - currentX) * strength;
                const finalY = currentY + (targetY - currentY) * strength;

                const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;

                gsap.to(corner, {
                    x: finalX,
                    y: finalY,
                    duration: duration,
                    ease: duration === 0 ? 'none' : 'power1.out',
                    overwrite: 'auto'
                });
            });
        };
        tickerFnRef.current = tickerFn;

        const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
        window.addEventListener('mousemove', moveHandler);

        const scrollHandler = () => {
            if (!activeTarget || !cursorRef.current) return;
            const mouseX = gsap.getProperty(cursorRef.current, 'x') as number;
            const mouseY = gsap.getProperty(cursorRef.current, 'y') as number;
            const el = document.elementFromPoint(mouseX, mouseY);
            if (!el || (el !== activeTarget && !el.closest(targetSelector))) {
                if (currentLeaveHandler) currentLeaveHandler();
            }
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });

        const enterHandler = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            const target = el.closest(targetSelector) as HTMLElement;
            if (!target || activeTarget === target) return;

            if (activeTarget) cleanupTarget(activeTarget);
            if (resumeTimeout) clearTimeout(resumeTimeout);

            activeTarget = target;
            const corners = Array.from(cornersRef.current!);
            corners.forEach(c => gsap.killTweensOf(c));
            spinTl.current?.pause();
            gsap.set(cursor, { rotation: 0 });

            const rect = target.getBoundingClientRect();
            const { borderWidth, cornerSize } = constants;
            const cursorX = gsap.getProperty(cursor, 'x') as number;
            const cursorY = gsap.getProperty(cursor, 'y') as number;

            targetCornerPositionsRef.current = [
                { x: rect.left - borderWidth, y: rect.top - borderWidth },
                { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
                { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
                { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize }
            ];

            isActiveRef.current = true;
            target.classList.add('cursor-active');
            gsap.ticker.add(tickerFnRef.current!);
            gsap.to(activeStrengthRef, { current: 1, duration: hoverDuration, ease: 'power2.out' });

            const leaveHandler = () => {
                gsap.ticker.remove(tickerFnRef.current!);
                if (target) target.classList.remove('cursor-active');
                isActiveRef.current = false;
                targetCornerPositionsRef.current = null;
                gsap.set(activeStrengthRef, { current: 0, overwrite: true });
                activeTarget = null;

                if (cornersRef.current) {
                    const corners = Array.from(cornersRef.current);
                    const size = constants.cornerSize;
                    const pos = [
                        { x: -size * 1.5, y: -size * 1.5 },
                        { x: size * 0.5, y: -size * 1.5 },
                        { x: size * 0.5, y: size * 0.5 },
                        { x: -size * 1.5, y: size * 0.5 }
                    ];
                    corners.forEach((c, i) => {
                        gsap.to(c, { x: pos[i].x, y: pos[i].y, duration: 0.3, ease: 'power3.out' });
                    });
                }

                resumeTimeout = setTimeout(() => {
                    if (!activeTarget && spinTl.current) {
                        const rot = (gsap.getProperty(cursor, 'rotation') as number) % 360;
                        spinTl.current.restart().play();
                    }
                }, 50);
                cleanupTarget(target);
            };
            currentLeaveHandler = leaveHandler;
            target.addEventListener('mouseleave', leaveHandler);
        };

        window.addEventListener('mouseover', enterHandler, { passive: true });

        return () => {
            if (tickerFnRef.current) gsap.ticker.remove(tickerFnRef.current);
            window.removeEventListener('mousemove', moveHandler);
            window.removeEventListener('mouseover', enterHandler);
            window.removeEventListener('scroll', scrollHandler);
            if (activeTarget) cleanupTarget(activeTarget);
            spinTl.current?.kill();
            document.body.style.cursor = originalCursor;
        };
    }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, isMobile, hoverDuration, parallaxOn]);

    if (isMobile) return null;

    return (
        <div ref={cursorRef} className="target-cursor-wrapper">
            <div ref={dotRef} className="target-cursor-dot" />
            <div className="target-cursor-corner corner-tl" />
            <div className="target-cursor-corner corner-tr" />
            <div className="target-cursor-corner corner-br" />
            <div className="target-cursor-corner corner-bl" />
        </div>
    );
};

export default TargetCursor;
