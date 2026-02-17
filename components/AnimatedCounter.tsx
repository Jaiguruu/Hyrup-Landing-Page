import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  className?: string;
};

export const AnimatedCounter = ({ end, suffix = '', className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const count = useCountUp(end, 2000, isInView);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};