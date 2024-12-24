import "./Section.scss";

import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  header: string;
  bgColour?: `#${string}`;
};

export default function Section({ children, header, bgColour }: SectionProps) {
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      // @ts-expect-error just works
      return React.cloneElement(child, {
        bgColour: bgColour,
      });
    });
  };

  return (
    <div className="Section">
      <h1>{header}</h1>
      <div className="Section__pills">{renderChildren()}</div>
    </div>
  );
}
