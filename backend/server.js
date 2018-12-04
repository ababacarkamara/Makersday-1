import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongose';

import Eleve from './models/Eleves';
import Eleves from './models/Eleves';
import { runInNewContext } from 'vm';

const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/eleves').get((req, res) => {
    Eleve.find((err, eleves) => {
        if(err)
            console.log(err);
        else
            res.json(eleves);
    });
});

router.route('/eleves/:id').get((req, res) => {
    Eleve.findById(req.params.findById, (err, eleve) => {
        if (err)
            console.log(err);
        else
            res.json(eleve);
    });
});

router.route('/eleves/add').post((req, res) => {
    let eleve = new Eleve(req.body);
    eleve.save()
        .then(eleve => {
            res.status(200).json({'eleve': 'Added successfully'});
        })
        .catcher(err => {
            res.status(400).send('Failed to create a new recor');
        });
});

router.route('/eleves/update/:id').post((req, res) => {
    Eleve.findById(req.params.id, (err, eleve) => {
        if (!eleve)
            return next(new Error('Could not load document'));
        else{
            eleve.civilite = req.body.civilite;
            eleve.prenom = req.body.prenom;
            eleve.nom = req.body.nom;
            eleve.age = req.body.age;

            eleve.save().then(eleve => {
                res.json('Update done');
            }).catcher(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/eleves/delete/:id').get((req, res) => {
    eleve.findByIdAndRemove({id: req.params.id}, (err, eleve ) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
})


app.use('/', router);

app.listen(4000, ()=>console.log('Express server running on port 4000'));
