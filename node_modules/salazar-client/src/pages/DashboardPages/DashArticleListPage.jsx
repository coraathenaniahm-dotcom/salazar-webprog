import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { fetchArticles, deleteArticle } from "../../services/ArticleService";

const statusBadge = {
  active: { bg: "#EC5A8C", color: "#fff", dot: "#fff" },
  inactive: { bg: "#F8BBD0", color: "#880E4F", dot: "#C2185B" },
};

const categoryColors = {
  Entertainment: { bg: "#F8BBD0", color: "#C2185B" },
  Humor: { bg: "#FCE4EC", color: "#AD1457" },
  Lifestyle: { bg: "#F48FB1", color: "#7B0D3A" },
  Culture: { bg: "#EC407A", color: "#fff" },
  Motivation: { bg: "#F50057", color: "#fff" },
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

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z"/>
    </svg>
  );
}

export default function DashArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);

  // Fetch articles on component mount
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetchArticles();
        setArticles(response.data.articles || response.data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        alert("Failed to load articles");
      }
    };
    loadArticles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteArticle(id);
        setArticles(p => p.filter(a => a._id !== id));
        alert("Article deleted successfully!");
      } catch (error) {
        console.error("Failed to delete article:", error);
        alert(error.response?.data?.message || "Failed to delete article");
      }
    }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return articles.map(a => {
      const displayStatus = a.status === 'active' ? 'Published' : 'Draft';
      const createdDate = a.createdAt ? a.createdAt.split('T')[0] : '';
      return {
        ...a,
        id: a._id,
        status: displayStatus,
        createdDate,
      };
    }).filter(a => {
      const matchSearch = !q || a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q) || a.slug.toLowerCase().includes(q);
      const matchStatus = filterStatus === "All" || a.status === filterStatus;
      const matchCategory = filterCategory === "All" || a.category === filterCategory;
      return matchSearch && matchStatus && matchCategory;
    });
  }, [articles, search, filterStatus, filterCategory]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5, valueGetter: (params) => params.row?._id?.slice(-6) || params.row?.id },
    {
      field: "title",
      headerName: "Title",
      flex: 1.1,
      renderCell: (params) => (
        <Box sx={{ color: "#2D1B27", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {params.value}
        </Box>
      ),
    },
    { field: "author", headerName: "Author", flex: 0.8 },
    {
      field: "category",
      headerName: "Category",
      flex: 0.9,
      renderCell: (params) => {
        const s = categoryColors[params.value] || { bg: "#F8BBD0", color: "#C2185B" };
        return (
          <Box sx={{
            background: s.bg,
            color: s.color,
            px: "10px",
            py: "3px",
            borderRadius: "20px",
            fontSize: 11.5,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            letterSpacing: "0.3px",
          }}>
            {params.value}
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.8,
      renderCell: (params) => {
        const s = statusBadge[params.row.status?.toLowerCase() || 'active'] || statusBadge.inactive;
        return (
          <Box sx={{
            background: s.bg,
            color: s.color,
            px: "10px",
            py: "3px",
            borderRadius: "20px",
            fontSize: 11.5,
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
            {params.value}
          </Box>
        );
      },
    },
    { field: "createdDate", headerName: "Created", flex: 0.85 },
    { field: "paragraphs", headerName: "Paragraphs", flex: 0.75, type: "number" },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.6,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Box
            onClick={() => handleDelete(params.row._id)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "6px",
              background: "#F8BBD0",
              color: "#C2185B",
              cursor: "pointer",
              transition: "background 0.18s",
              "&:hover": { background: "#EC5A8C" },
            }}
          >
            <DeleteIcon />
          </Box>
        </Box>
      ),
    },
  ];

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
          Articles{" "}
          <span style={{ fontSize: 14, color: "#9E7A8A", fontWeight: 400 }}>({filtered.length} of {articles.length})</span>
        </Typography>
      </Box>

      {/* SEARCH & FILTERS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 2, flexWrap: "wrap" }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#fff",
          border: "1px solid #F0D6E2",
          borderRadius: "9px",
          px: "12px",
          py: "8px",
          flex: "1 1 220px",
          minWidth: 0,
          color: "#9E7A8A",
        }}>
          <SearchIcon />
          <input
            placeholder="Search by title, author, or slug..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", color: "#2D1B27", width: "100%", fontFamily: "inherit" }}
          />
        </Box>

        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={filterSelect}>
          <option value="All">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>

        <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={filterSelect}>
          <option value="All">All Categories</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Humor">Humor</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Culture">Culture</option>
          <option value="Motivation">Motivation</option>
        </select>
      </Box>

      {/* TABLE */}
      <Box sx={{
        background: "#fff",
        borderRadius: "14px",
        boxShadow: "0 2px 16px rgba(236,90,140,0.08)",
        border: "1px solid #F0D6E2",
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
    </Box>
  );
}
