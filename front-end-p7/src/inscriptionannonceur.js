import React, { Component } from 'react';
import './inscriptionannonceur.css';


class Inscriptionannonceur extends Component {
  render() {
    return (

<div className= "container-annonce">
  <form>
  <h3 className="titreannonce">Création d'annonce</h3>
    <input type="text" className="nomdelentreprise" name="nom de l'entreprise" placeholder="Nom de l'entreprise"/>
   <p className="titredupostea">
  <input type="text" className="formtitreduposte" name="titre du poste" placeholder="Titre du poste"/></p>
  <input type="text" className="formville" name="ville" placeholder="Ville"/>
  <h4 className="soustitreannonce">Type de contrat</h4>
  <select className="typedecontrat" name="typedecontrat">
    <option value="1">CDD</option>
    <option value="4">CDI</option>
    <option value="5">Stage</option>
      <option value="5">Alternance</option>
  </select>


  <h4 className="soustitreannonce">Description du poste </h4>
    <textarea name="description du poste" className="descriptionposte"></textarea>

  <h4 className="soustitreannonce">Disponibilités </h4>
  <div className="disposa"><input type="text" className="formdispo" name="dispo" placeholder="Du"/>
  <input type="text" className="formdispo" name="dispo" placeholder="Au"/></div>
  <button className="btnannonce" type="submit">Valider</button>

</form>
</div>



    );
  }
}

export default Inscriptionannonceur;
