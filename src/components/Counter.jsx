import { useRef } from "react";
import { useInView } from "framer-motion";
import useCounter from "../hooks/useCounter";

export default function Counter({ to, suffix = "", prefix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCounter(to, inView);

  return (
    <div className="stat-card glass" ref={ref}>
      <div className="stat-num">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
