import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function LogoutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
    </svg>
  );
}
 
const SIDEBAR_W = 230;
const HEADER_H = 60;
 
const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
  },
  {
    label: "Users",
    path: "/dashboard/users",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    label: "Articles",
    path: "/dashboard/articles",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h3.29l4-5.03L21 17h-4.3z"/>
      </svg>
    ),
  },
  {
    label: "Articles List",
    path: "/dashboard/articles-list",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 5H5v14h10V5zm2-2v18H3V3h14zm4 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z"/>
      </svg>
    ),
  },
];
 
export default function DashLayout() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const currentLabel = navItems.find(n =>
    n.path === "/dashboard"
      ? location.pathname === "/dashboard" || location.pathname === "/dashboard/"
      : location.pathname.startsWith(n.path)
  )?.label ?? "Dashboard";
 
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      maxWidth: "100vw",
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0,
      fontFamily: "'DM Sans', sans-serif",
    }}>
 
      {/* SIDEBAR */}
      <div style={{
        width: SIDEBAR_W,
        minWidth: SIDEBAR_W,
        maxWidth: SIDEBAR_W,
        flexShrink: 0,
        height: "100vh",
        background: "linear-gradient(160deg, #3D0B1E 0%, #6A1535 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
 
        {/* LOGO */}
        <div style={{
          height: HEADER_H,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "17px",
            fontWeight: 700,
            color: "#EC5A8C",
            letterSpacing: "0.5px",
            margin: 0,
          }}>
            Fugglers
          </h2>
        </div>
 
        {/* NAV LINKS */}
        <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map(({ label, path, icon }) => {
              const isActive = path === "/dashboard"
                ? location.pathname === "/dashboard" || location.pathname === "/dashboard/"
                : location.pathname.startsWith(path);
 
              return (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "13.5px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                    background: isActive
                      ? "rgba(236,90,140,0.22)"
                      : "transparent",
                    borderLeft: isActive ? "3px solid #EC5A8C" : "3px solid transparent",
                    textAlign: "left",
                    transition: "all 0.15s",
                    width: "100%",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "13.5px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              background: "transparent",
              borderLeft: "3px solid transparent",
              textAlign: "left",
              transition: "all 0.15s",
              width: "100%",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            <LogoutIcon />
            Logout
          </button>
        </nav>
      </div>
 
      {/* RIGHT COLUMN */}
      <div style={{
        flex: 1,
        minWidth: 0,
        width: `calc(100vw - ${SIDEBAR_W}px)`,
        maxWidth: `calc(100vw - ${SIDEBAR_W}px)`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}>
 
        {/* HEADER */}
        <div style={{
          height: HEADER_H,
          flexShrink: 0,
          backgroundColor: "#fff",
          borderBottom: "1px solid #F0D6E2",
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          gap: "14px",
          overflow: "hidden",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "17px",
            fontWeight: 700,
            color: "#EC5A8C",
            whiteSpace: "nowrap",
            flexShrink: 0,
            margin: 0,
          }}>
            {currentLabel}
          </h3>
        </div>
 
        {/* PAGE CONTENT */}
        <div style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "24px",
          paddingBottom: "24px",
          backgroundColor: "#F7F0F3",
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}