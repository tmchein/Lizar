import React, { useState, useRef } from "react";
import { NavBarProps, Option } from "./NavBar";

export const NavBar = ({
  options,
  highLightColor = "#ababab",
}: NavBarProps) => {
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [highlightedTab, setHighlightedTab] = useState<Option | null>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLUListElement>(null);

  const repositionHighlight = (e: React.MouseEvent, tab: Option) => {
    const target = e.target as HTMLLIElement;
    setTabBoundingBox(target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current!.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  return (
    <nav
      className="relative flex flex-row w-max"
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
    >
      <div
        style={{
          transitionDuration: isHoveredFromNull ? "0ms" : "150ms",
          backgroundColor: highlightedTab ? `${highLightColor}` : "transparent",
          width: tabBoundingBox?.width,
          transform: `translateX(${
            tabBoundingBox &&
            wrapperBoundingBox &&
            tabBoundingBox?.left - wrapperBoundingBox?.left
          }px)`,
        }}
        ref={highlightRef}
        className={`absolute top-[10px] left-0 rounded-md h-8 transition-all ease-linear`}
      />
      <ul>
        {options.map((option, index) => (
          <li
            className="py-4 px-3 inline-block text-white/60
            cursor-pointer relative transition-colors duration-200 hover:text-white/90"
            key={`${option.label}-${index}`}
            onMouseOver={(e) => repositionHighlight(e, option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
