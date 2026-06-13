import { useInView } from "react-intersection-observer";
import "./FadeIn.css";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`fadein fadein-${direction} ${inView ? "fadein-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
