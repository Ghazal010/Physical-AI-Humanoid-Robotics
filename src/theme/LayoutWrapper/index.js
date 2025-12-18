import React from 'react';
import ChatWidget from '@site/src/components/ChatWidget';

// This component wraps the entire app and adds the chat widget
const LayoutWrapper = ({ children }) => {
  return (
    <>
      {children}
      <ChatWidget backendUrl={process.env.BACKEND_URL || 'http://localhost:8000'} />
    </>
  );
};

export default LayoutWrapper;