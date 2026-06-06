import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography, Paper } from "@mui/material";

// Sample data for the chart
const sampleData = [
  { name: "Jan", revenue: 4000, users: 2400, articles: 2210 },
  { name: "Feb", revenue: 3000, users: 1398, articles: 2210 },
  { name: "Mar", revenue: 2000, users: 9800, articles: 2290 },
  { name: "Apr", revenue: 2780, users: 3908, articles: 2000 },
  { name: "May", revenue: 1890, users: 4800, articles: 2181 },
  { name: "Jun", revenue: 2390, users: 3800, articles: 2500 },
];

/**
 * Sample Chart Component
 * Displays monthly analytics data with revenue, users, and articles metrics
 */
export default function SampleChart() {
  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Monthly Analytics
      </Typography>
      <Box sx={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="users" fill="#82ca9d" />
            <Bar dataKey="articles" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
