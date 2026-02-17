import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useDarkMode } from "../hooks/useDarkMode";
import PixelBlast from "./ui/PixelBlast";

export const BackgroundDecorations = () => {
  const isDark = useDarkMode();
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;

      const randomX = gsap.utils.random(-30, 30);
      const randomY = gsap.utils.random(-30, 30);
      const randomDuration = gsap.utils.random(8, 15);
      const randomRotationSpeed = gsap.utils.random(5, 10);

      // Floating movement
      gsap.to(icon, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.2
      });

      // Continuous spin
      gsap.to(icon, {
        rotation: 360,
        duration: randomRotationSpeed,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  const icons = [
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-1.svg", className: "absolute h-20 w-20 right-[15%] top-20 opacity-15" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-2.svg", className: "absolute h-28 w-28 left-[8%] top-[40%] opacity-[0.12]" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-3.svg", className: "absolute h-24 w-24 right-[10%] bottom-[30%] opacity-[0.14]" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-4.svg", className: "absolute h-[72px] w-[72px] left-[20%] top-[60%] opacity-[0.12]" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-5.svg", className: "absolute h-20 w-20 left-1/4 top-[15%] opacity-[0.12]" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-6.svg", className: "absolute h-16 w-16 left-[12%] bottom-[15%] opacity-15" },
    { src: "https://c.animaapp.com/mlowuzui4moa6C/assets/icon-7.svg", className: "absolute h-24 w-24 right-1/4 top-1/4 opacity-10" },
  ];

  return (
    <div className="fixed box-border caret-transparent pointer-events-none z-[-20] overflow-hidden inset-0 transition-opacity duration-300 bg-[#f5f1e8] dark:bg-black">
      {isDark && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#B19EEF"
              patternScale={2}
              patternDensity={1.1}
              enableRipples
              rippleSpeed={0.55}
              rippleThickness={0.1}
              rippleIntensityScale={1}
              speed={0.5}
              transparent={false}
              edgeFade={0.3}
            />
          </div>
        </div>
      )}

      {icons.map((icon, i) => (
        <div
          key={i}
          ref={el => { iconRefs.current[i] = el; }}
          className={`${icon.className} flex items-center justify-center`}
        >
          <img
            src={icon.src}
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Static dots */}
      <div className="absolute bg-[oklab(0_0_0_/_0.2)] dark:bg-[oklab(1_0_0_/_0.1)] h-3 w-3 rounded-full right-[40%] top-[45%]"></div>
      <div className="absolute bg-[oklab(0_0_0_/_0.2)] dark:bg-[oklab(1_0_0_/_0.1)] h-2.5 w-2.5 rounded-full right-[60%] top-[70%]"></div>
      <div className="absolute bg-[oklab(0_0_0_/_0.15)] dark:bg-[oklab(1_0_0_/_0.08)] h-2 w-2 rounded-full left-[45%] top-[20%]"></div>
      <div className="absolute bg-[oklab(0_0_0_/_0.15)] dark:bg-[oklab(1_0_0_/_0.08)] h-2 w-2 rounded-full right-[35%] bottom-[40%]"></div>
    </div>
  );
};