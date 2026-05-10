import React from 'react';

export const SidePanel = ({ children, title, isOpen }: { children: React.ReactNode, title: string, isOpen: boolean }) => {
  if (!isOpen) return null;
  return (
    <div style={{ width: '320px', backgroundColor: '#f9fafb', borderLeft: '1px solid #e5e7eb', padding: '1.5rem', height: '100vh' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>{title}</h2>
      <div className="ai-content-area">
        {children}
      </div>
    </div>
  );
};