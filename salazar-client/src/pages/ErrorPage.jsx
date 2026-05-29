import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  console.error("Route Error:", error);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Error Occurred</h1>
      <p><strong>Status:</strong> {error?.status || "Unknown"}</p>
      <p><strong>Status Text:</strong> {error?.statusText || "Unknown"}</p>
      <p><strong>Message:</strong> {error?.message || "No message"}</p>
      {error?.data && <pre style={{ backgroundColor: "#f0f0f0", padding: "1rem", overflow: "auto" }}>{JSON.stringify(error.data, null, 2)}</pre>}
      <details style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <summary>Full Error Details</summary>
        <pre style={{ overflow: "auto" }}>{JSON.stringify(error, null, 2)}</pre>
      </details>
    </div>
  );
}
