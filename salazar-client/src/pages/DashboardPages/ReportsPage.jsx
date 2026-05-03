import React from "react";
import { Box, Typography } from "@mui/material";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, profit: 2400 },
  { month: "Feb", sales: 3000, revenue: 1398, profit: 2210 },
  { month: "Mar", sales: 2000, revenue: 9800, profit: 2290 },
  { month: "Apr", sales: 2780, revenue: 3908, profit: 2000 },
  { month: "May", sales: 1890, revenue: 4800, profit: 2181 },
  { month: "Jun", sales: 2390, revenue: 3800, profit: 2500 },
];

const productData = [
  { name: "Product A", sales: 120, units: 240, revenue: 221 },
  { name: "Product B", sales: 221, units: 229, revenue: 200 },
  { name: "Product C", sales: 229, units: 200, revenue: 221 },
  { name: "Product D", sales: 200, units: 221, revenue: 250 },
  { name: "Product E", sales: 200, units: 229, revenue: 210 },
];

const card = {
  background: "#fff", borderRadius: "14px",
  boxShadow: "0 2px 16px rgba(236,90,140,0.08)",
  border: "1px solid #F0D6E2",
};

export default function ReportsPage() {
  return (
    <Box>
      <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#EC5A8C", mb: 3 }}>
        Reports
      </Typography>

      {/* TOP TWO CHARTS */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", mb: 3 }}>
        {/* Line chart */}
        <Box sx={card}>
          <Box sx={{ px: "20px", pt: "18px", pb: 0 }}>
            <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>Monthly Sales Trend</Typography>
          </Box>
          <Box sx={{ px: "20px", pb: "20px", pt: "14px", height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(236,90,140,0.08)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="sales"   stroke="#EC5A8C" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="revenue" stroke="#F48FB1" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="profit"  stroke="#C2185B" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {/* Area chart */}
        <Box sx={card}>
          <Box sx={{ px: "20px", pt: "18px", pb: 0 }}>
            <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>Revenue Overview</Typography>
          </Box>
          <Box sx={{ px: "20px", pb: "20px", pt: "14px", height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#EC5A8C" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#EC5A8C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(236,90,140,0.08)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#EC5A8C" strokeWidth={2.5} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>

      {/* PRODUCT PERFORMANCE FULL WIDTH */}
      <Box sx={card}>
        <Box sx={{ px: "20px", pt: "18px", pb: 0 }}>
          <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: "#2D1B27" }}>Product Performance</Typography>
        </Box>
        <Box sx={{ px: "20px", pb: "20px", pt: "14px", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(236,90,140,0.08)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="sales"   fill="#EC5A8C" radius={[6,6,0,0]} />
              <Bar dataKey="units"   fill="#F48FB1" radius={[6,6,0,0]} />
              <Bar dataKey="revenue" fill="#F8BBD0" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
}