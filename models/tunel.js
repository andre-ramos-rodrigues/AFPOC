import mongoose from 'mongoose'

const TunelSchema = new mongoose.Schema(
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
    data: { 
      ano: {type: String},
      mes: {type: String},
      dia: {type: String}
     }
  },
  { timestamps: true },
);

export default mongoose.models.Tunel || mongoose.model('Tunel', TunelSchema)