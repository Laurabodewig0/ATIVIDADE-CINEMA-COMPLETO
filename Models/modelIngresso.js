import db from "../config/db.js";


const ingressoSchema = new db.Schema({
    data: {
      type: Date,
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    filme_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'Filme',
      required: true,
    },
    user_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
  });

const Ingresso = db.model("Ingresso", ingressoSchema);

export default Ingresso;