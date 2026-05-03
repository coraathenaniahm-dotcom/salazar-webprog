import React, { useState } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const initialUsers = [
  { id: 1, firstName: "Ryzza",   lastName: "Mae",     email: "mae@example.com",    role: "Admin",  status: "Active",   age: 14 },
  { id: 2, firstName: "Lorein",  lastName: "Jose",    email: "lorein@example.com", role: "Editor", status: "Active",   age: 31 },
  { id: 3, firstName: "Cardo",   lastName: "Dalisay", email: "cardo@example.com",  role: "Editor", status: "Inactive", age: 31 },
  { id: 4, firstName: "Brielle", lastName: "Prado",   email: "nia@example.com",    role: "Viewer", status: "Active",   age: 11 },
  { id: 5, firstName: "Dane",    lastName: "Jay",     email: "jay@example.com",    role: "Admin",  status: "Active",   age: 16 },
  { id: 6, firstName: "Sassa",   lastName: "Park",    email: "sassa@example.com",  role: "Viewer", status: "Active",   age: 19 },
  { id: 7, firstName: "John",    lastName: "Doe",     email: "john@example.com",   role: "Editor", status: "Active",   age: 28 },
  { id: 8, firstName: "Jones",   lastName: "Roranes", email: "jones@example.com",  role: "Viewer", status: "Inactive", age: 25 },
];

const roleBadge = {
  Admin:  { bg: "#FDE4EC", color: "#C2185B" },
  Editor: { bg: "#E3F2FD", color: "#1565C0" },
  Viewer: { bg: "#FFF3E0", color: "#E65100" },
};

const columns = [
  { field: "id",        headerName: "ID",        width: 70 },
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName",  headerName: "Last Name",  flex: 1 },
  { field: "email",     headerName: "Email",      flex: 1.5 },
  {
    field: "role", headerName: "Role", width: 110,
    renderCell: (params) => {
      const s = roleBadge[params.value] || { bg: "#eee", color: "#333" };
      return (
        <Box sx={{ background: s.bg, color: s.color, px: "10px", py: "3px", borderRadius: "20px", fontSize: 11.5, fontWeight: 500, display: "inline-flex" }}>
          {params.value}
        </Box>
      );
    },
  },
  { field: "age", headerName: "Age", width: 80, type: "number" },
  {
    field: "status", headerName: "Status", width: 110,
    renderCell: (params) => (
      <Box sx={{
        background: params.value === "Active" ? "#c8e6c9" : "#ffccbc",
        color:      params.value === "Active" ? "#2e7d32" : "#d84315",
        px: "10px", py: "3px", borderRadius: "20px", fontSize: 11.5, fontWeight: 500, display: "inline-flex",
      }}>
        {params.value}
      </Box>
    ),
  },
];

const inputStyle = {
  padding: "9px 12px",
  border: "1px solid #F0D6E2",
  borderRadius: "8px",
  fontFamily: "inherit",
  fontSize: "13.5px",
  color: "#2D1B27",
  background: "#F7F0F3",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const labelStyle = {
  fontSize: "12px",
  color: "#9E7A8A",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  fontWeight: "500",
  marginBottom: "5px",
  display: "block",
};

const fields = [
  { label: "First Name", name: "firstName", type: "text",   placeholder: "First name",        span: false },
  { label: "Last Name",  name: "lastName",  type: "text",   placeholder: "Last name",         span: false },
  { label: "Email",      name: "email",     type: "email",  placeholder: "email@example.com", span: true  },
  { label: "Age",        name: "age",       type: "number", placeholder: "Age",               span: false },
];

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen]   = useState(false);
  const [form, setForm]   = useState({ firstName: "", lastName: "", email: "", role: "Viewer", status: "Active", age: "" });

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleAdd = () => {
    if (!form.firstName || !form.lastName || !form.email) return;
    setUsers(p => [...p, { id: p.length + 1, ...form, age: parseInt(form.age) || 0 }]);
    setOpen(false);
    setForm({ firstName: "", lastName: "", email: "", role: "Viewer", status: "Active", age: "" });
  };

  return (
    <Box>
      {/* TOOLBAR */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#EC5A8C" }}>
          Users{" "}
          <span style={{ fontSize: 14, color: "#9E7A8A", fontWeight: 400 }}>
            ({users.length} total)
          </span>
        </Typography>
        <Box
          onClick={() => setOpen(true)}
          sx={{
            display: "flex", alignItems: "center", gap: "6px",
            px: "14px", py: "7px", background: "#EC5A8C", color: "#fff",
            borderRadius: "9px", fontSize: "13px", fontWeight: 500,
            cursor: "pointer", transition: "background 0.18s",
            "&:hover": { background: "#C2185B" },
          }}
        >
          <AddIcon sx={{ fontSize: 16 }} />
          Add User
        </Box>
      </Box>

      {/* TABLE */}
      <Box sx={{
        background: "#fff", borderRadius: "14px",
        boxShadow: "0 2px 16px rgba(236,90,140,0.08)", border: "1px solid #F0D6E2",
      }}>
        <Box sx={{ height: 520 }}>
          <DataGrid
            rows={users} columns={columns}
            pageSizeOptions={[5, 10]}
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

      {/* ADD USER MODAL */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: "14px", p: 1 } }}
      >
        <DialogTitle sx={{ fontFamily: "'Playfair Display',serif", color: "#EC5A8C", fontWeight: 700, fontSize: 20 }}>
          Add New User
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", mt: 1 }}>

            {/* Text/number fields */}
            {fields.map((f) => (
              <Box key={f.name} sx={{ gridColumn: f.span ? "1/-1" : "auto", display: "flex", flexDirection: "column" }}>
                <span style={labelStyle}>{f.label}</span>
                <input
                  name={f.name} type={f.type}
                  value={form[f.name]} onChange={handleChange}
                  placeholder={f.placeholder} style={inputStyle}
                />
              </Box>
            ))}

            {/* Role */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Role</span>
              <select name="role" value={form.role} onChange={handleChange} style={inputStyle}>
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
                <option value="Admin">Admin</option>
              </select>
            </Box>

            {/* Status */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Status</span>
              <select name="status" value={form.status} onChange={handleChange} style={inputStyle}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </Box>

          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
          <Box
            onClick={() => setOpen(false)}
            sx={{ px: "18px", py: "8px", border: "1px solid #F0D6E2", borderRadius: "9px", fontSize: 13, color: "#9E7A8A", cursor: "pointer", "&:hover": { background: "#F7F0F3" } }}
          >
            Cancel
          </Box>
          <Box
            onClick={handleAdd}
            sx={{ px: "18px", py: "8px", background: "#EC5A8C", color: "#fff", borderRadius: "9px", fontSize: 13, fontWeight: 500, cursor: "pointer", "&:hover": { background: "#C2185B" } }}
          >
            Add User
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}