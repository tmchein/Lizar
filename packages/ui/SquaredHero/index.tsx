import { useState, useEffect, useRef } from "react";

const SquaredHero = () => {
  const [containerGrid, setContainerGrid] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef(null);
  return <div ref={containerRef}>SquaredHero</div>;
};

export default SquaredHero;
