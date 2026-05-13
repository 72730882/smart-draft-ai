import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <code 
      className={className}
      style={{
        backgroundColor: "#f1f5f9",
        color: "#0f172a",
        padding: "0.2rem 0.4rem",
        borderRadius: "4px",
        fontFamily: "monospace",
        fontSize: "0.9em",
        border: "1px solid #e2e8f0",
        display: "inline-block"
      }}
    >
      {children}
    </code>
  );
}