import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Eleve = new Schema({
    
    civilite: {
        type : String
    },
    prenom: {
        type : String
    },
    nom: {
        type : String
    },
    age: {
        type : String
    }
});

export default mongoose.model('Eleve', Eleve);