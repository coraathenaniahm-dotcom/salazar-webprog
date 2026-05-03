import React from "react";
import { Box, Typography, Paper } from "@mui/material";
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
  { field: "id",        headerName: "ID",         width: 70 },
  { field: "firstName", headerName: "First Name",  flex: 1 },
  { field: "lastName",  headerName: "Last Name",   flex: 1 },
  { field: "age",       headerName: "Age",         width: 80, type: "number" },
  {
    field: "fullName", headerName: "Full Name", flex: 1.5,
    valueGetter: (value, row) => `${row.firstName} ${row.lastName}`,
  },
];

const card = {
  background: "#fff", borderRadius: "14px",
  boxShadow: "0 2px 16px rgba(236,90,140,0.08)",
  border: "1px solid #F0D6E2",
  minWidth: 0,         // ← prevents card from overflowing flex parent
  overflow: "hidden",
};

export default function DashboardPage() {
  const totalUsers = users.length;
  const avgAge = (users.reduce((s, u) => s + u.age, 0) / users.length).toFixed(1);

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
      <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#EC5A8C", mb: 3 }}>
        Dashboard
      </Typography>

      {/* STAT CARDS */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", mb: 3 }}>
        {[
          { label: "Total Users", value: totalUsers, bg: "linear-gradient(135deg,#EC5A8C,#C2185B)" },
          { label: "Average Age",  value: avgAge,      bg: "linear-gradient(135deg,#F48FB1,#EC5A8C)" },
        ].map((s, i) => (
          <Box key={i} sx={{
            background: s.bg, borderRadius: "14px", height: 130, color: "#fff",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(236,90,140,0.25)",
            transition: "transform 0.22s, box-shadow 0.22s",
            "&:hover": { transform: "translateY(-4px)", boxShadow: "0 8px 32px rgba(236,90,140,0.35)" },
          }}>
            <Typography sx={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", opacity: 0.85, mb: 0.5 }}>
              {s.label}
            </Typography>
            <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 800, lineHeight: 1 }}>
              {s.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CHARTS ROW — minmax(0,1fr) prevents column from blowing past container */}
      <Box sx={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 320px", gap: "16px", mb: 3 }}>
        {/* Bar chart */}
        <Box sx={card}>
          <Box sx={{ px: "20px", pt: "18px", pb: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>Quarterly Performance</Typography>
            <Box sx={{ display: "flex", gap: "14px" }}>
              {[["#EC5A8C","Series 1"],["#F8BBD0","Series 2"]].map(([c,l]) => (
                <Box key={l} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Box sx={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                  <Typography sx={{ fontSize: 11.5, color: "#9E7A8A" }}>{l}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ px: "20px", pb: "20px", pt: "14px", height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(236,90,140,0.08)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="s1" name="Series 1" fill="#EC5A8C" radius={[6,6,0,0]} />
                <Bar dataKey="s2" name="Series 2" fill="#F8BBD0" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {/* Pie chart */}
        <Box sx={{ ...card, display: "flex", flexDirection: "column" }}>
          <Box sx={{ px: "20px", pt: "18px", pb: 0 }}>
            <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>User Status</Typography>
          </Box>
          <Box sx={{ px: "20px", pb: "20px", pt: "14px", flex: 1, height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" outerRadius={100} innerRadius={45}>
                  {pieData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Pie>
                <Tooltip />
                <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>

      {/* USERS OVERVIEW TABLE */}
      <Box sx={card}>
        <Box sx={{ px: "20px", py: "16px", borderBottom: "1px solid #F0D6E2" }}>
          <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>Users Overview</Typography>
        </Box>
        <Box sx={{ height: 400 }}>
          <DataGrid
            rows={users} columns={columns}
            pageSizeOptions={[5]}
            checkboxSelection disableRowSelectionOnClick
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": { backgroundColor: "#FFF0F5" },
              "& .MuiDataGrid-row:hover": { backgroundColor: "#FFF0F5" },
              "& .MuiCheckbox-root": { color: "#EC5A8C" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}