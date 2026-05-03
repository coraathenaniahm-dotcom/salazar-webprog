import React, { useState, useMemo } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const initialUsers = [
  { id: 1, firstName: "Ryzza",   lastName: "Mae",     username: "ryzzamae",     email: "mae@example.com",    role: "Admin",  gender: "Female", contact: "09123456789", status: "Active",   age: 14 },
  { id: 2, firstName: "Lorein",  lastName: "Jose",    username: "loreinjose",   email: "lorein@example.com", role: "Editor", gender: "Female", contact: "09234567890", status: "Active",   age: 31 },
  { id: 3, firstName: "Cardo",   lastName: "Dalisay", username: "cardodalisay", email: "cardo@example.com",  role: "Editor", gender: "Male",   contact: "09345678901", status: "Inactive", age: 31 },
  { id: 4, firstName: "Brielle", lastName: "Prado",   username: "brielleprado", email: "nia@example.com",    role: "Viewer", gender: "Female", contact: "09456789012", status: "Active",   age: 11 },
  { id: 5, firstName: "Dane",    lastName: "Jay",     username: "danejay",      email: "jay@example.com",    role: "Admin",  gender: "Male",   contact: "09567890123", status: "Active",   age: 16 },
  { id: 6, firstName: "Sassa",   lastName: "Park",    username: "sassapark",    email: "sassa@example.com",  role: "Viewer", gender: "Female", contact: "09678901234", status: "Active",   age: 19 },
  { id: 7, firstName: "John",    lastName: "Doe",     username: "johndoe",      email: "john@example.com",   role: "Editor", gender: "Male",   contact: "09789012345", status: "Active",   age: 28 },
  { id: 8, firstName: "Jones",   lastName: "Roranes", username: "jonesroranes", email: "jones@example.com",  role: "Viewer", gender: "Male",   contact: "09890123456", status: "Inactive", age: 25 },
];

// ── Pink-family role badges ───────────────────────────────────
const roleBadge = {
  Admin:  { bg: "#C2185B", color: "#fff" },           // deep pink — solid
  Editor: { bg: "#F48FB1", color: "#7B0D3A" },        // medium pink
  Viewer: { bg: "#FCE4EC", color: "#AD1457" },        // blush/light pink
};

// ── Pink-family status badges ─────────────────────────────────
const statusBadge = {
  Active:   { bg: "#EC5A8C", color: "#fff", dot: "#fff" },      // brand pink — solid
  Inactive: { bg: "#F8BBD0", color: "#880E4F", dot: "#C2185B" }, // pale pink
};

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

const emptyForm = {
  firstName: "", lastName: "", username: "", email: "",
  age: "", gender: "Male", contact: "", role: "Viewer",
  status: "Active", password: "",
};

function validate(form) {
  const errors = {};
  if (!form.firstName.trim())                               errors.firstName = "First name is required.";
  if (!form.lastName.trim())                                errors.lastName  = "Last name is required.";
  if (!form.username.trim())                                errors.username  = "Username is required.";
  else if (/\s/.test(form.username))                        errors.username  = "Username must not contain spaces.";
  if (!form.email.trim())                                   errors.email     = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email     = "Enter a valid email.";
  if (!form.age)                                            errors.age       = "Age is required.";
  else if (!/^\d+$/.test(form.age))                         errors.age       = "Age must be a number only.";
  if (!form.contact.trim())                                 errors.contact   = "Contact number is required.";
  else if (!/^\d{11}$/.test(form.contact))                  errors.contact   = "Contact number must be exactly 11 digits.";
  if (!form.password)                                       errors.password  = "Password is required.";
  else if (form.password.length < 8)                        errors.password  = "Password must be at least 8 characters.";
  return errors;
}

export default function UsersPage() {
  const [users,  setUsers]  = useState(initialUsers);
  const [open,   setOpen]   = useState(false);
  const [form,   setForm]   = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const [search,       setSearch]       = useState("");
  const [filterRole,   setFilterRole]   = useState("All");
  const [filterGender, setFilterGender] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setErrors(p => ({ ...p, [e.target.name]: undefined }));
  };

  const handleAdd = () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setUsers(p => [...p, { id: p.length + 1, ...form, age: parseInt(form.age) }]);
    setOpen(false);
    setForm(emptyForm);
    setErrors({});
  };

  const handleClose = () => { setOpen(false); setForm(emptyForm); setErrors({}); };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter(u => {
      const matchSearch =
        !q ||
        u.firstName.toLowerCase().includes(q) ||
        u.lastName.toLowerCase().includes(q)  ||
        u.email.toLowerCase().includes(q)     ||
        u.username.toLowerCase().includes(q);
      const matchRole   = filterRole   === "All" || u.role   === filterRole;
      const matchGender = filterGender === "All" || u.gender === filterGender;
      const matchStatus = filterStatus === "All" || u.status === filterStatus;
      return matchSearch && matchRole && matchGender && matchStatus;
    });
  }, [users, search, filterRole, filterGender, filterStatus]);

  const columns = [
    { field: "id",        headerName: "ID",        width: 60 },
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName",  headerName: "Last Name",  flex: 1 },
    { field: "username",  headerName: "Username",   flex: 1 },
    { field: "email",     headerName: "Email",      flex: 1.5 },
    {
      field: "role", headerName: "Role", width: 100,
      renderCell: (params) => {
        const s = roleBadge[params.value] || { bg: "#F8BBD0", color: "#880E4F" };
        return (
          <Box sx={{
            background: s.bg, color: s.color,
            px: "10px", py: "3px", borderRadius: "20px",
            fontSize: 11.5, fontWeight: 600,
            display: "inline-flex", alignItems: "center",
            letterSpacing: "0.3px",
          }}>
            {params.value}
          </Box>
        );
      },
    },
    { field: "age",    headerName: "Age",    width: 70, type: "number" },
    { field: "gender", headerName: "Gender", width: 90 },
    {
      field: "status", headerName: "Status", width: 110,
      renderCell: (params) => {
        const s = statusBadge[params.value] || statusBadge.Inactive;
        return (
          <Box sx={{
            background: s.bg, color: s.color,
            px: "10px", py: "3px", borderRadius: "20px",
            fontSize: 11.5, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: "5px",
          }}>
            {/* little dot indicator */}
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
            {params.value}
          </Box>
        );
      },
    },
  ];

  const FieldError = ({ name }) =>
    errors[name] ? <span style={{ fontSize: 11, color: "#C2185B", marginTop: 3 }}>{errors[name]}</span> : null;

  const filterSelect = {
    ...inputStyle,
    width: "auto",
    minWidth: 130,
    cursor: "pointer",
  };

  return (
    <Box>
      {/* TOOLBAR */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography sx={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 800, color: "#EC5A8C" }}>
          Users{" "}
          <span style={{ fontSize: 14, color: "#9E7A8A", fontWeight: 400 }}>({filtered.length} of {users.length})</span>
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

      {/* SEARCH & FILTERS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 2, flexWrap: "wrap" }}>
        <Box sx={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "#fff", border: "1px solid #F0D6E2",
          borderRadius: "9px", px: "12px", py: "8px",
          flex: "1 1 220px", minWidth: 0,
        }}>
          <SearchIcon sx={{ fontSize: 15, color: "#9E7A8A", flexShrink: 0 }} />
          <input
            placeholder="Search by name, email, or username..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", color: "#2D1B27", width: "100%", fontFamily: "inherit" }}
          />
        </Box>

        <select value={filterRole}   onChange={e => setFilterRole(e.target.value)}   style={filterSelect}>
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <select value={filterGender} onChange={e => setFilterGender(e.target.value)} style={filterSelect}>
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={filterSelect}>
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </Box>

      {/* TABLE */}
      <Box sx={{
        background: "#fff", borderRadius: "14px",
        boxShadow: "0 2px 16px rgba(236,90,140,0.08)", border: "1px solid #F0D6E2",
        overflow: "hidden",
      }}>
        <Box sx={{ height: 500 }}>
          <DataGrid
            rows={filtered} columns={columns}
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: "14px", p: 1 } }}
      >
        <DialogTitle sx={{ fontFamily: "'Playfair Display',serif", color: "#EC5A8C", fontWeight: 700, fontSize: 20 }}>
          Add New User
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", mt: 1 }}>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>First Name</span>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" style={{ ...inputStyle, borderColor: errors.firstName ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="firstName" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Last Name</span>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" style={{ ...inputStyle, borderColor: errors.lastName ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="lastName" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Username</span>
              <input name="username" value={form.username} onChange={handleChange} placeholder="No spaces allowed" style={{ ...inputStyle, borderColor: errors.username ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="username" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" style={{ ...inputStyle, borderColor: errors.email ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="email" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Age</span>
              <input name="age" value={form.age} onChange={handleChange} placeholder="Numbers only" style={{ ...inputStyle, borderColor: errors.age ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="age" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Gender</span>
              <select name="gender" value={form.gender} onChange={handleChange} style={inputStyle}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Contact Number</span>
              <input name="contact" value={form.contact} onChange={handleChange} placeholder="11-digit number" style={{ ...inputStyle, borderColor: errors.contact ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="contact" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Password</span>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min. 8 characters" style={{ ...inputStyle, borderColor: errors.password ? "#C2185B" : "#F0D6E2" }} />
              <FieldError name="password" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Role</span>
              <select name="role" value={form.role} onChange={handleChange} style={inputStyle}>
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
                <option value="Admin">Admin</option>
              </select>
            </Box>

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
            onClick={handleClose}
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