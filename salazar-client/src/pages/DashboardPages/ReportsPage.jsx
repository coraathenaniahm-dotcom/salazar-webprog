import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
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
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const now = new Date().toLocaleString();

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Report - School</title>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', sans-serif; padding: 40px; color: #2D1B27; background: #fff; }
            h1 { font-size: 26px; font-weight: 800; color: #EC5A8C; margin-bottom: 4px; }
            .subtitle { font-size: 13px; color: #9E7A8A; margin-bottom: 32px; }
            .section { margin-bottom: 40px; }
            .section-title { font-size: 15px; font-weight: 700; color: #2D1B27; margin-bottom: 6px; }
            .section-desc { font-size: 12px; color: #9E7A8A; margin-bottom: 16px; }
            .chart-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
            .chart-box { border: 1px solid #F0D6E2; border-radius: 12px; padding: 20px; }
            canvas { width: 100% !important; }
            @media print {
              body { padding: 20px; }
              .chart-row { page-break-inside: avoid; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between;">
  <div>
    <h1>Reports Summary</h1>
    <p class="subtitle">Analytics overview for generated reports, category breakdown, and completion performance.<br/>Prepared on ${now}</p>
  </div>
  <button onclick="window.close()" style="
    padding: 9px 18px;
    background: #EC5A8C;
    color: #fff;
    border: none;
    border-radius: 9px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Segoe UI', sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
  ">&#8592; Back</button>
</div>
          <p class="subtitle">Analytics overview for generated reports, category breakdown, and completion performance.<br/>Prepared on ${now}</p>

          <div class="chart-row">
            <div class="chart-box">
              <div class="section-title">Monthly Sales Trend</div>
              <div class="section-desc">Sales, revenue, and profit across the last six months.</div>
              <canvas id="lineChart"></canvas>
            </div>
            <div class="chart-box">
              <div class="section-title">Revenue Overview</div>
              <div class="section-desc">Monthly revenue shown as an area chart.</div>
              <canvas id="areaChart"></canvas>
            </div>
          </div>

          <div class="chart-box section">
            <div class="section-title">Product Performance</div>
            <div class="section-desc">Comparison of sales, units, and revenue across all products.</div>
            <canvas id="barChart"></canvas>
          </div>

          <script>
            const salesData = {
              labels: ["Jan","Feb","Mar","Apr","May","Jun"],
              sales:   [4000,3000,2000,2780,1890,2390],
              revenue: [2400,1398,9800,3908,4800,3800],
              profit:  [2400,2210,2290,2000,2181,2500],
            };
            const productData = {
              labels:  ["Product A","Product B","Product C","Product D","Product E"],
              sales:   [120,221,229,200,200],
              units:   [240,229,200,221,229],
              revenue: [221,200,221,250,210],
            };

            new Chart(document.getElementById("lineChart"), {
              type: "line",
              data: {
                labels: salesData.labels,
                datasets: [
                  { label: "Sales",   data: salesData.sales,   borderColor: "#EC5A8C", tension: 0.4, pointRadius: 0, borderWidth: 2 },
                  { label: "Revenue", data: salesData.revenue, borderColor: "#F48FB1", tension: 0.4, pointRadius: 0, borderWidth: 2 },
                  { label: "Profit",  data: salesData.profit,  borderColor: "#C2185B", tension: 0.4, pointRadius: 0, borderWidth: 2 },
                ],
              },
              options: { plugins: { legend: { labels: { font: { size: 11 } } } }, scales: { x: { grid: { display: false } }, y: { grid: { color: "rgba(236,90,140,0.08)" } } } },
            });

            new Chart(document.getElementById("areaChart"), {
              type: "line",
              data: {
                labels: salesData.labels,
                datasets: [{
                  label: "Revenue", data: salesData.revenue,
                  borderColor: "#EC5A8C", backgroundColor: "rgba(236,90,140,0.15)",
                  tension: 0.4, fill: true, pointRadius: 0, borderWidth: 2.5,
                }],
              },
              options: { plugins: { legend: { labels: { font: { size: 11 } } } }, scales: { x: { grid: { display: false } }, y: { grid: { color: "rgba(236,90,140,0.08)" } } } },
            });

            new Chart(document.getElementById("barChart"), {
              type: "bar",
              data: {
                labels: productData.labels,
                datasets: [
                  { label: "Sales",   data: productData.sales,   backgroundColor: "#EC5A8C", borderRadius: 6 },
                  { label: "Units",   data: productData.units,   backgroundColor: "#F48FB1", borderRadius: 6 },
                  { label: "Revenue", data: productData.revenue, backgroundColor: "#F8BBD0", borderRadius: 6 },
                ],
              },
              options: { plugins: { legend: { labels: { font: { size: 11 } } } }, scales: { x: { grid: { display: false } }, y: { grid: { color: "rgba(236,90,140,0.08)" } } } },
            });

            window.onload = () => setTimeout(() => window.print(), 800);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <Box>
      {/* HEADER ROW */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#EC5A8C" }}>
          Reports
        </Typography>
        <Box
          onClick={handlePrint}
          sx={{
            display: "flex", alignItems: "center", gap: "6px",
            px: "14px", py: "8px", background: "#EC5A8C", color: "#fff",
            borderRadius: "9px", fontSize: "13px", fontWeight: 500,
            cursor: "pointer", transition: "background 0.18s",
            "&:hover": { background: "#C2185B" },
          }}
        >
          <PrintIcon sx={{ fontSize: 16 }} />
          Print PDF
        </Box>
      </Box>

      {/* TOP TWO CHARTS */}
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", mb: 3 }}>
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

      {/* PRODUCT PERFORMANCE */}
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