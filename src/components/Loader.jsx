import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="loader-screen">
      <div className="loader-inner">
        <img className="loader-logo" src={logo} alt="Priyanka Properties" />
        <div className="loader-bar">
          <span></span>
        </div>
        <div className="loader-text">Priyanka Properties</div>
      </div>
    </div>
  );
}
