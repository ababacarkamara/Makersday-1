import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EleveService {

  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getEleves() {
    return this.http.get(`${this.uri}/eleves`);
  }

  getEleveById(id) {
    return this.http.get(`${this.uri}/eleves/${id}`);
  }
  addEleve(civilite, prenom, nom, age) {
const eleve = {
  civilite : civilite,
  prenom : prenom,
  nom : nom,
  age : age
};
return this.http.post(`${this.uri}/eleves/add`, eleve);
  }
  updateEleve(id, civilite, prenom, nom, age) {
    const eleve = {
      civilite : civilite,
      prenom : prenom,
      nom : nom,
      age : age
    };
    return this.http.post(`${this.uri}/eleves/update/${id}`, eleve);
      }
    deleteEleve(id) {
      return this.http.get(`${this.uri}/eleves/delete/${id}`);
    }
}
