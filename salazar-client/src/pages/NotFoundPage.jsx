import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        #root {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      <div style={{ padding: '2rem 0 0 2rem', textAlign: 'left' }}>
        <h1 style={{ 
          fontSize: '2.75rem', 
          fontWeight: '800', 
          color: '#000', 
          margin: '0', 
          padding: '0', 
          lineHeight: '1.1' 
        }}>
          Page Not Found
        </h1>
        <p style={{ 
          fontSize: '1rem', 
          color: '#6b7280', 
          margin: '0.75rem 0 0 0', 
          padding: '0' 
        }}>
          The link you followed to get here must be broken...
        </p>
      </div>
    </>
  );
}

export default NotFoundPage;