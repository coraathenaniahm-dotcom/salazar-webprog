import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography, Box } from "@mui/material";

// Sample data for the data grid
const rows = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", role: "Editor", status: "Active" },
  { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, firstName: "Alice", lastName: "Williams", email: "alice@example.com", role: "Editor", status: "Active" },
  { id: 5, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", role: "Viewer", status: "Active" },
  { id: 6, firstName: "Diana", lastName: "Davis", email: "diana@example.com", role: "Admin", status: "Active" },
  { id: 7, firstName: "Eve", lastName: "Miller", email: "eve@example.com", role: "Editor", status: "Inactive" },
  { id: 8, firstName: "Frank", lastName: "Wilson", email: "frank@example.com", role: "Viewer", status: "Active" },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "role", headerName: "Role", width: 110 },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: params.value === "Active" ? "#c8e6c9" : "#ffccbc",
          color: params.value === "Active" ? "#2e7d32" : "#d84315",
          padding: "4px 8px",
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: "500",
          width: "100%",
        }}
      >
        {params.value}
      </Box>
    ),
  },
];

/**
 * Sample DataGrid Component
 * Displays user data in a table format with sorting, pagination, and filtering
 */
export default function SampleDataGrid() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Users Table
      </Typography>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            boxShadow: 0,
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
          }}
        />
      </Box>
    </Paper>
  );
}
