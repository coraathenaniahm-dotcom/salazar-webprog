import React, { useState, useMemo, useEffect } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { createUser, fetchUsers, deleteUser } from "../../services/UserService";
 
const initialUsers = [
  { id: 1, firstName: "Ryzza",   lastName: "Mae",     username: "ryzzamae",     email: "mae@example.com",    role: "Admin",  gender: "Female", contact: "09123456789", status: "Active",   age: 14, address: "123 Quezon Ave, Quezon City" },
  { id: 2, firstName: "Lorein",  lastName: "Jose",    username: "loreinjose",   email: "lorein@example.com", role: "Editor", gender: "Female", contact: "09234567890", status: "Active",   age: 31, address: "456 Rizal St, Makati" },
  { id: 3, firstName: "Cardo",   lastName: "Dalisay", username: "cardodalisay", email: "cardo@example.com",  role: "Editor", gender: "Male",   contact: "09345678901", status: "Inactive", age: 31, address: "789 Mabini Blvd, Manila" },
  { id: 4, firstName: "Brielle", lastName: "Prado",   username: "brielleprado", email: "nia@example.com",    role: "Viewer", gender: "Female", contact: "09456789012", status: "Active",   age: 11, address: "321 Bonifacio St, Taguig" },
  { id: 5, firstName: "Dane",    lastName: "Jay",     username: "danejay",      email: "jay@example.com",    role: "Admin",  gender: "Male",   contact: "09567890123", status: "Active",   age: 16, address: "654 Aguinaldo Rd, Cavite" },
  { id: 6, firstName: "Sassa",   lastName: "Park",    username: "sassapark",    email: "sassa@example.com",  role: "Viewer", gender: "Female", contact: "09678901234", status: "Active",   age: 19, address: "987 Luna St, Pasig" },
  { id: 7, firstName: "John",    lastName: "Doe",     username: "johndoe",      email: "john@example.com",   role: "Editor", gender: "Male",   contact: "09789012345", status: "Active",   age: 28, address: "111 Del Pilar Ave, Caloocan" },
  { id: 8, firstName: "Jones",   lastName: "Roranes", username: "jonesroranes", email: "jones@example.com",  role: "Viewer", gender: "Male",   contact: "09890123456", status: "Inactive", age: 25, address: "222 Lapu-lapu St, Cebu" },
];
 
const roleBadge = {
  Admin:  { bg: "#C2185B", color: "#fff" },
  admin:  { bg: "#C2185B", color: "#fff" },
  Editor: { bg: "#F48FB1", color: "#7B0D3A" },
  editor: { bg: "#F48FB1", color: "#7B0D3A" },
  Viewer: { bg: "#FCE4EC", color: "#AD1457" },
  viewer: { bg: "#FCE4EC", color: "#AD1457" },
};
 
const statusBadge = {
  Active:   { bg: "#EC5A8C", color: "#fff", dot: "#fff" },
  Inactive: { bg: "#F8BBD0", color: "#880E4F", dot: "#C2185B" },
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
  status: "Active", password: "", address: "",
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
  if (!form.address.trim())                                 errors.address   = "Address is required.";
  return errors;
}
 
function AddIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  );
}
 
function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );
}
 
function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  );
}
 
function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
    </svg>
  );
}
 
export default function UsersPage() {
  const [users,   setUsers]   = useState([]);
  const [open,    setOpen]    = useState(false);
  const [form,    setForm]    = useState(emptyForm);
  const [errors,  setErrors]  = useState({});
  const [showPw,  setShowPw]  = useState(false);
  const [loading, setLoading] = useState(true);

  const [search,       setSearch]       = useState("");
  const [filterRole,   setFilterRole]   = useState("All");
  const [filterGender, setFilterGender] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Fetch users from API on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data.users || []);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        alert('Failed to load users');
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);
  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setErrors(p => ({ ...p, [e.target.name]: undefined }));
  };
 
  const handleAdd = async () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    try {
      const response = await createUser({
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
        age: parseInt(form.age),
        gender: form.gender,
        contactNumber: form.contact,
        address: form.address,
        type: form.role.toLowerCase(),
        isActive: form.status === "Active",
      });
      
      // Add the newly created user to the state
      setUsers(p => [...p, { 
        _id: response.data.user._id || response.data.user.id, 
        id: response.data.user._id || response.data.user.id,
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        age: form.age,
        gender: form.gender,
        contactNumber: form.contact,
        address: form.address,
        type: form.role.toLowerCase(),
        isActive: form.status === "Active",
        createdAt: new Date().toISOString()
      }]);
      setOpen(false);
      setForm(emptyForm);
      setErrors({});
      alert('User added successfully!');
    } catch (error) {
      console.error('Failed to add user:', error);
      alert(error.response?.data?.message || 'Failed to add user');
    }
  };
 
  const handleClose = () => {
    setOpen(false);
    setForm(emptyForm);
    setErrors({});
    setShowPw(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(p => p.filter(u => u._id !== id && u.id !== id));
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Failed to delete user:', error);
        alert(error.response?.data?.message || 'Failed to delete user');
      }
    }
  };
 
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter(u => {
      const matchSearch =
        !q ||
        u.firstName.toLowerCase().includes(q) ||
        u.lastName.toLowerCase().includes(q)  ||
        u.email.toLowerCase().includes(q)     ||
        u.username.toLowerCase().includes(q);
      const userRole = (u.type || u.role || "viewer").toLowerCase();
      const filterRoleLower = filterRole.toLowerCase();
      const matchRole   = filterRole === "All" || userRole === filterRoleLower;
      const matchGender = filterGender === "All" || u.gender === filterGender;
      const userStatus = u.isActive !== false ? "Active" : "Inactive";
      const matchStatus = filterStatus === "All" || userStatus === filterStatus;
      return matchSearch && matchRole && matchGender && matchStatus;
    });
  }, [users, search, filterRole, filterGender, filterStatus]);
 
  const columns = [
    { field: "_id",        headerName: "ID",        flex: 0.5, valueGetter: (params) => params.row?._id?.slice(-6) || params.row?.id },
    {
      field: "fullName", headerName: "Full Name", flex: 0.9,
      valueGetter: (params) => {
        const row = params.row || params;
        return `${row.firstName} ${row.lastName}`;
      },
    },
    { field: "username",  headerName: "Username",   flex: 0.9 },
    { field: "email",     headerName: "Email",      flex: 1 },
    {
      field: "type", headerName: "Role", flex: 0.8,
      renderCell: (params) => {
        const value = params.value || params.row?.role || "viewer";
        const roleKey = value.charAt(0).toUpperCase() + value.slice(1);
        const s = roleBadge[roleKey] || roleBadge[value] || { bg: "#F8BBD0", color: "#880E4F" };
        return (
          <Box sx={{
            background: s.bg, color: s.color,
            px: "10px", py: "3px", borderRadius: "20px",
            fontSize: 11.5, fontWeight: 600,
            display: "inline-flex", alignItems: "center",
            letterSpacing: "0.3px",
          }}>
            {roleKey}
          </Box>
        );
      },
    },
    { field: "age",     headerName: "Age",     flex: 0.4, type: "number" },
    { field: "gender",  headerName: "Gender",  flex: 0.8 },
    {
      field: "isActive", headerName: "Status", flex: 0.8,
      renderCell: (params) => {
        const isActive = params.value !== false;
        const s = isActive ? statusBadge.Active : statusBadge.Inactive;
        return (
          <Box sx={{
            background: s.bg, color: s.color,
            px: "10px", py: "3px", borderRadius: "20px",
            fontSize: 11.5, fontWeight: 600,
            display: "inline-flex", alignItems: "center", gap: "5px",
          }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
            {isActive ? "Active" : "Inactive"}
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
          <AddIcon />
          Add User
        </Box>
      </Box>
 
      {/* SEARCH & FILTERS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 2, flexWrap: "wrap" }}>
        <Box sx={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "#fff", border: "1px solid #F0D6E2",
          borderRadius: "9px", px: "12px", py: "8px",
          flex: "1 1 220px", minWidth: 0, color: "#9E7A8A",
        }}>
          <SearchIcon />
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
            rows={filtered} 
            columns={columns}
            getRowId={(row) => row._id || row.id}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": { backgroundColor: "#FFF0F5" },
              "& .MuiDataGrid-row:hover": { backgroundColor: "#FFF0F5" },
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
 
            {/* PASSWORD WITH TOGGLE */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={labelStyle}>Password</span>
              <Box sx={{ position: "relative" }}>
                <input
                  name="password"
                  type={showPw ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  style={{ ...inputStyle, paddingRight: "36px", borderColor: errors.password ? "#C2185B" : "#F0D6E2" }}
                />
                <Box
                  onClick={() => setShowPw(p => !p)}
                  sx={{
                    position: "absolute", right: "9px", top: "50%",
                    transform: "translateY(-50%)", cursor: "pointer",
                    color: "#9E7A8A", display: "flex", alignItems: "center",
                    "&:hover": { color: "#EC5A8C" },
                  }}
                >
                  {showPw ? <EyeOffIcon /> : <EyeIcon />}
                </Box>
              </Box>
              <FieldError name="password" />
            </Box>
 
            {/* ADDRESS — full width */}
            <Box sx={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
              <span style={labelStyle}>Address</span>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Street, city, province…"
                style={{ ...inputStyle, borderColor: errors.address ? "#C2185B" : "#F0D6E2" }}
              />
              <FieldError name="address" />
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