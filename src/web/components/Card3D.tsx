import { useRef, useState } from "react";
import type { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function Card3D({ children, className = "", intensity = 12 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -intensity;
    const rotY = ((x - cx) / cx) * intensity;

    setStyle({
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px) scale(1.02)`,
      boxShadow: `${-rotY * 1.5}px ${rotX * 1.5}px 40px rgba(11,110,110,0.18), 0 20px 50px rgba(11,110,110,0.12)`,
      transition: "transform 0.05s ease, box-shadow 0.05s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)",
      boxShadow: "",
      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
