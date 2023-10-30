import React, { useState } from 'react';

function LeadForm() {
  const [formData, setFormData] = useState({
    type_modele: '',
    achat_ou_leasing: '',
    vehicule_actuel: '',
    nom: '',
    prenom: '',
    ville: '',
    telephone: '',
  });
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const leadData = {
      data: formData,
    };

    // Afficher les données dans la console pour vérification
    console.log('Données du prospect :', leadData);
    console.log('Adresse email pour les notifications :', email);
  };

  return (
    <div>
      <aside>
        <img src="/icons/swap-horizontally_gray.svg" alt="/icons/swap-horizontally_gray.svg" width="40px" />
        <h2>Envoie des informations — Envoie du lead</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type de modèle:</label>
            <input
              type="text"
              name="type_modele"
              value={formData.type_modele}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Achat ou Leasing:</label>
            <input
              type="text"
              name="achat_ou_leasing"
              value={formData.achat_ou_leasing}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Véhicule actuel:</label>
            <input
              type="text"
              name="vehicule_actuel"
              value={formData.vehicule_actuel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Prénom:</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Ville:</label>
            <input
              type="text"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Téléphone:</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Adresse Email (pour les notifications):</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </aside>
    </div>
  );
}

export default LeadForm;
