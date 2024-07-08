import React from "react";
import { RoughNotation } from "react-rough-notation";

interface RainbowHighlightProps {
    color: string;
    children: React.ReactNode;
}

export const RainbowHighlight: React.FC<RainbowHighlightProps> = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children!.toString().length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};