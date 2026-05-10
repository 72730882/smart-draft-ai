import React, { useState } from 'react';
// We use relative paths here to bypass the module resolution error for your deadline
// Ensure the case matches your screenshot exactly: Button.tsx -> button, SidePanel.tsx -> SidePanel
import { Button } from '../../../packages/ui/src/button';
import { SidePanel } from '../../../packages/ui/src/SidePanel';

function App() {
  const [draft, setDraft] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleAiDraft = () => {
    if (!draft) {
      setAiResponse("Please enter some text so I can help you draft.");
      return;
    }
    setAiResponse("AI is brainstorming ideas for: " + draft.substring(0, 20) + "...");
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <main style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Smart-Draft AI Workspace</h1>
        <textarea 
          style={{ width: '100%', height: '70%', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          placeholder="Start drafting here..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <Button onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? "Hide AI Sidebar" : "Show AI Sidebar"}
          </Button>
        </div>
      </main>

      <SidePanel title="AI Assistant" isOpen={isSidebarOpen}>
        <div style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
          <strong>Suggestions:</strong>
          <p style={{ marginTop: '10px' }}>{aiResponse || "Your AI insights will appear here."}</p>
        </div>
        <button 
          onClick={handleAiDraft}
          style={{ marginTop: '1rem', width: '100%', padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Generate Smart Draft
        </button>
      </SidePanel>
    </div>
  );
}

export default App;