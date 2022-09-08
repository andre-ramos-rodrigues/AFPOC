import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    autor: { type: String, required: true },
    titulo: { type: String, required: true },
    resumo: { type: String, required: true },
    texto: { type: String, required: true },
    img:
    {
        type: String,
        required: true
    },
    data: { type: String }
  },
  { timestamps: true },
);

export default mongoose.model('Post', PostSchema);