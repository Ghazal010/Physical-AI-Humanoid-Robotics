import React from 'react';
import Layout from '@theme-original/Layout';
import ChatWidget from '../components/ChatWidget';

export default function LayoutWrapper(props) {
  // For Docusaurus, use a default URL or one that can be configured via site config
  const backendUrl = 'http://localhost:8000'; // This will be replaced in production

  return (
    <>
      <Layout {...props}>
        {props.children}
        <ChatWidget backendUrl={backendUrl} />
      </Layout>
    </>
  );
}