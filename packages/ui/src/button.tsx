"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string; // Made optional with ? so it doesn't break if not provided
  onClick?: () => void; // Added this to allow your App.tsx function to work
}

export const Button = ({ children, className, appName, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        // Run the custom onClick from App.tsx if it exists
        if (onClick) onClick();
        
        // Keep your original alert logic if appName is provided
        if (appName) {
          alert(`Hello from your ${appName} app!`);
        }
      }}
      style={{
        padding: '8px 16px',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      
      {children}
    </button>
  );
};