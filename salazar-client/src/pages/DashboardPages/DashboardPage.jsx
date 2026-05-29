import React from "react";
import { Box, Typography } from "@mui/material";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";
 
const users = [
  { id: 1, firstName: "Ryzza",   lastName: "Mae",     email: "mae@example.com",    role: "Admin",  status: "Active",   age: 14 },
  { id: 2, firstName: "Lorein",  lastName: "Jose",    email: "lorein@example.com", role: "Editor", status: "Active",   age: 31 },
  { id: 3, firstName: "Cardo",   lastName: "Dalisay", email: "cardo@example.com",  role: "Editor", status: "Inactive", age: 31 },
  { id: 4, firstName: "Brielle", lastName: "Prado",   email: "nia@example.com",    role: "Viewer", status: "Active",   age: 11 },
  { id: 5, firstName: "Dane",    lastName: "Jay",     email: "jay@example.com",    role: "Admin",  status: "Active",   age: 16 },
  { id: 6, firstName: "Sassa",   lastName: "Park",    email: "sassa@example.com",  role: "Viewer", status: "Active",   age: 19 },
  { id: 7, firstName: "John",    lastName: "Doe",     email: "john@example.com",   role: "Editor", status: "Active",   age: 28 },
  { id: 8, firstName: "Jones",   lastName: "Roranes", email: "jones@example.com",  role: "Viewer", status: "Inactive", age: 25 },
  { id: 9, firstName: "Jon",     lastName: "Snow",    email: "jon@example.com",    role: "Viewer", status: "Active",   age: 14 },
];
 
const barData = [
  { name: "Q1", s1: 35, s2: 45 },
  { name: "Q2", s1: 40, s2: 15 },
  { name: "Q3", s1: 30, s2: 45 },
  { name: "Q4", s1: 35, s2: 30 },
];
 
const pieData = [
  { name: "Active",   value: 60, fill: "#EC5A8C" },
  { name: "Inactive", value: 30, fill: "#F48FB1" },
  { name: "Pending",  value: 10, fill: "#F8BBD0" },
];
 
const columns = [
  { field: "id",        headerName: "ID",        width: 60 },
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName",  headerName: "Last Name",  flex: 1 },
  { field: "age",       headerName: "Age",        width: 70, type: "number" },
  {
    field: "fullName",
    headerName: "Full Name",
    flex: 1.5,
    valueGetter: (params) => `${params?.row?.firstName ?? ""} ${params?.row?.lastName ?? ""}`.trim(),
  },
];
 
const card = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px rgba(236,90,140,0.07)",
  border: "1px solid #F0D6E2",
  minWidth: 0,
  overflow: "hidden",
};
 
function PeopleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  );
}
 
function CakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c1.11 0 2-.89 2-2 0-.36-.1-.69-.26-.98L12 0l-1.74 3.02c-.16.29-.26.62-.26.98 0 1.11.89 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM20 8H4c-1.1 0-2 .9-2 2v2.5c0 1.38 1.12 2.5 2.5 2.5.68 0 1.3-.28 1.74-.72l1.79-1.79 1.79 1.79c.45.45 1.06.72 1.68.72.63 0 1.23-.28 1.68-.72l1.79-1.79 1.79 1.79c.44.44 1.06.72 1.74.72 1.38 0 2.5-1.12 2.5-2.5V10c0-1.1-.9-2-2-2z"/>
    </svg>
  );
}
 
function DotIcon({ color }) {
  return <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: color }} />;
}
 
export default function DashboardPage() {
  const totalUsers = users.length;
  const avgAge = (users.reduce((s, u) => s + u.age, 0) / users.length).toFixed(1);
  const activeUsers = users.filter(u => u.status === "Active").length;
  const inactiveUsers = users.filter(u => u.status === "Inactive").length;
 
  const stats = [
    { label: "Total Users", value: totalUsers,   icon: <PeopleIcon />, bg: "#EC5A8C", light: "#FFF0F5" },
    { label: "Average Age", value: avgAge,        icon: <CakeIcon />,   bg: "#F48FB1", light: "#FFF5F8" },
    { label: "Active",      value: activeUsers,   icon: <DotIcon color="#EC5A8C" />, bg: "#C2185B", light: "#FFF0F5" },
    { label: "Inactive",    value: inactiveUsers, icon: <DotIcon color="#F48FB1" />, bg: "#F48FB1", light: "#FFF5F8" },
  ];
 
  return (
    <Box sx={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
 
      {/* PAGE HEADER */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 28, fontWeight: 800, color: "#EC5A8C", lineHeight: 1,
        }}>
          Dashboard
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#9E7A8A", mt: 0.5 }}>
          Welcome back! Here's what's happening today.
        </Typography>
      </Box>
 
      {/* STAT CARDS ROW */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", mb: 3 }}>
        {stats.map((s, i) => (
          <Box key={i} sx={{
            ...card,
            p: "20px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": { transform: "translateY(-3px)", boxShadow: "0 8px 28px rgba(236,90,140,0.15)" },
          }}>
            <Box sx={{
              width: 48, height: 48, borderRadius: "14px",
              background: s.light,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: s.bg, flexShrink: 0,
            }}>
              {s.icon}
            </Box>
            <Box>
              <Typography sx={{ fontSize: 11, color: "#9E7A8A", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500 }}>
                {s.label}
              </Typography>
              <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 800, color: "#2D1B27", lineHeight: 1.1 }}>
                {s.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
 
      {/* CHARTS ROW */}
      <Box sx={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "14px", mb: 3 }}>
 
        {/* Bar Chart */}
        <Box sx={card}>
          <Box sx={{ px: "20px", pt: "18px", pb: "4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#2D1B27" }}>Quarterly Performance</Typography>
              <Typography sx={{ fontSize: 11.5, color: "#9E7A8A", mt: 0.3 }}>Series comparison per quarter</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "12px" }}>
              {[["#EC5A8C","Series 1"],["#F8BBD0","Series 2"]].map(([c,l]) => (
                <Box key={l} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "3px", background: c }} />
                  <Typography sx={{ fontSize: 11, color: "#9E7A8A" }}>{l}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ px: "12px", pb: "16px", pt: "8px", height: 260, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(236,90,140,0.07)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9E7A8A" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9E7A8A" }} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: "1px solid #F0D6E2", fontSize: 12 }}
                  cursor={{ fill: "rgba(236,90,140,0.04)" }}
                />
                <Bar dataKey="s1" name="Series 1" fill="#EC5A8C" radius={[6,6,0,0]} maxBarSize={28} />
                <Bar dataKey="s2" name="Series 2" fill="#F8BBD0" radius={[6,6,0,0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
 
        {/* Pie Chart */}
        <Box sx={{ ...card, display: "flex", flexDirection: "column" }}>
          <Box sx={{ px: "20px", pt: "18px", pb: "4px" }}>
            <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#2D1B27" }}>User Status</Typography>
            <Typography sx={{ fontSize: 11.5, color: "#9E7A8A", mt: 0.3 }}>Active vs inactive breakdown</Typography>
          </Box>
          <Box sx={{ flex: 1, height: 260, px: "8px", pb: "16px", pt: "8px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData} dataKey="value"
                  outerRadius={90} innerRadius={50}
                  paddingAngle={3}
                >
                  {pieData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #F0D6E2", fontSize: 12 }} />
                <Legend
                  iconType="circle" iconSize={8}
                  wrapperStyle={{ fontSize: 12, color: "#9E7A8A" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
 
      {/* USERS TABLE */}
      <Box sx={card}>
        <Box sx={{
          px: "20px", py: "16px",
          borderBottom: "1px solid #F0D6E2",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Box>
            <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#2D1B27" }}>Users Overview</Typography>
            <Typography sx={{ fontSize: 11.5, color: "#9E7A8A", mt: 0.3 }}>{totalUsers} total users</Typography>
          </Box>
          <Box sx={{
            px: "12px", py: "5px", borderRadius: "20px",
            background: "#FFF0F5", color: "#EC5A8C",
            fontSize: 12, fontWeight: 500, border: "1px solid #F8BBD0",
          }}>
            All Users
          </Box>
        </Box>
        <Box sx={{ height: 380 }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": { backgroundColor: "#FFF0F5", borderRadius: 0 },
              "& .MuiDataGrid-columnHeaderTitle": { fontWeight: 600, fontSize: 12, color: "#9E7A8A", textTransform: "uppercase", letterSpacing: "0.5px" },
              "& .MuiDataGrid-row:hover": { backgroundColor: "#FFF8FB" },
              "& .MuiDataGrid-cell": { fontSize: 13, color: "#2D1B27" },
              "& .MuiCheckbox-root": { color: "#EC5A8C" },
              "& .MuiDataGrid-footerContainer": { borderTop: "1px solid #F0D6E2" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}