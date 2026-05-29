const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    slug:       { type: String, required: true, unique: true },
    title:      { type: String, required: true },
    author:     { type: String, required: true },
    category:   { type: String, required: true },
    paragraphs: { type: Number, required: true },
    preview:    { type: String, required: true },
    content:    { type: String, required: true },
    status:     { type: String, enum: ['active', 'inactive'], default: 'active' },
    isActive:   { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model.articleSchema || mongoose.model('Article', articleSchema);