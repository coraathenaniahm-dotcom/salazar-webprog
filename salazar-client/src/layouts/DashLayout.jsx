import React, { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline, Typography, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

const SIDEBAR_W = 230;
const SIDEBAR_COLLAPSED = 70;
const HEADER_H = 60;

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon sx={{ fontSize: 18 }} />, path: "/dashboard" },
  { label: "Reports",   icon: <AssessmentIcon sx={{ fontSize: 18 }} />, path: "/dashboard/reports" },
  { label: "Users",     icon: <PeopleIcon sx={{ fontSize: 18 }} />,     path: "/dashboard/users" },
];

export default function DashLayout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const sw = open ? SIDEBAR_W : SIDEBAR_COLLAPSED;
  const currentTitle = navItems.find(n => n.path === location.pathname)?.label || "Dashboard";

  return (
    <Box sx={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      maxWidth: "100vw",
      overflow: "hidden",
      position: "fixed",      // ← anchors to viewport, kills page scroll
      top: 0,
      left: 0,
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <CssBaseline />

      {/* SIDEBAR */}
      <Box sx={{
        width: sw,
        minWidth: sw,
        maxWidth: sw,
        flexShrink: 0,
        height: "100vh",
        background: "linear-gradient(160deg, #3D0B1E 0%, #6A1535 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "width 0.2s, min-width 0.2s, max-width 0.2s",
      }}>
        <Box sx={{
          height: HEADER_H,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-end" : "center",
          px: 1,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <IconButton onClick={() => setOpen(!open)} sx={{ color: "rgba(255,255,255,0.6)" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ px: "12px", pt: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {open && (
            <Typography sx={{
              fontSize: "9.5px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              px: "10px",
              pb: "10px",
            }}>
              Main Menu
            </Typography>
          )}

          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Box
                key={i}
                onClick={() => navigate(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  px: "12px",
                  py: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  backgroundColor: isActive ? "#EC5A8C" : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "13.5px",
                  "&:hover": {
                    backgroundColor: isActive ? "#EC5A8C" : "rgba(255,255,255,0.1)",
                    color: "#fff",
                  },
                }}
              >
                <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                  {item.icon}
                </Box>
                {open && <span>{item.label}</span>}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* RIGHT COLUMN */}
      <Box sx={{
        flex: 1,
        minWidth: 0,                                   // ← allows shrinking below content size
        width: `calc(100vw - ${sw}px)`,               // ← explicit width, never exceeds viewport
        maxWidth: `calc(100vw - ${sw}px)`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        transition: "max-width 0.2s, width 0.2s",
      }}>
        {/* HEADER */}
        <Box sx={{
          height: HEADER_H,
          flexShrink: 0,
          backgroundColor: "#fff",
          borderBottom: "1px solid #F0D6E2",
          display: "flex",
          alignItems: "center",
          px: "24px",
          gap: "14px",
          overflow: "hidden",
        }}>
          <Typography sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "17px",
            fontWeight: 700,
            color: "#EC5A8C",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            {currentTitle}
          </Typography>

          <Box sx={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#F7F0F3", border: "1px solid #F0D6E2",
            borderRadius: "9px", px: "12px", py: "7px",
            width: 240, flexShrink: 0,
          }}>
            <SearchIcon sx={{ fontSize: 15, color: "#9E7A8A", flexShrink: 0 }} />
            <input
              placeholder="Search..."
              style={{
                border: "none", background: "transparent", outline: "none",
                fontSize: "13px", color: "#2D1B27", width: "100%", fontFamily: "inherit",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 0 }} />

          <Box sx={{
            width: 36, height: 36, borderRadius: "9px", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", border: "1px solid #F0D6E2",
            color: "#9E7A8A", position: "relative",
            "&:hover": { background: "#FDE4EC", color: "#EC5A8C", borderColor: "#F8BBD0" },
          }}>
            <NotificationsIcon sx={{ fontSize: 17 }} />
            <Box sx={{
              width: 7, height: 7, background: "#EC5A8C", borderRadius: "50%",
              position: "absolute", top: 5, right: 5, border: "1.5px solid #fff",
            }} />
          </Box>

          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex", alignItems: "center", gap: "6px", flexShrink: 0,
              px: "15px", py: "7px", background: "#EC5A8C", color: "#fff",
              borderRadius: "9px", fontSize: "13px", fontWeight: 500,
              cursor: "pointer", transition: "background 0.18s",
              "&:hover": { background: "#C2185B" },
            }}
          >
            <LogoutIcon sx={{ fontSize: 15 }} />
            Logout
          </Box>
        </Box>

        {/* PAGE CONTENT */}
        <Box sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",    // ← vertical scroll inside content area only
          overflowX: "hidden",  // ← no horizontal scroll ever
          px: "24px",
          py: "24px",
          backgroundColor: "#F7F0F3",
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}