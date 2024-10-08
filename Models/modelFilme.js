import db from "../config/db.js";


const filmeSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  ingresso: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Filme = db.model("Filme", filmeSchema);

export default Filme;
