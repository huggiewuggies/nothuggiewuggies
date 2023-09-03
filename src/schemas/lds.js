const { Schema, model} = require('mongoose');

const lds = new Schema({
    "volume_title": String,
    "book_title": String,
    "book_short_title": String,
    "chapter_number": Number,
    "verse_number": Number,
    "verse_title": String,
    "verse_short_title": String,
    "scripture_text": String,
});

module.exports = model('Verse', lds);