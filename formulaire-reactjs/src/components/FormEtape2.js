// FormEtape2.js

import React from "react";

const FormEtape2 = ({ formData, handleInputChange, prevEtape, addPost }) => {
  return (
    <div>
      <label htmlFor="firstName">Nom</label>
      <input
        type="text"
        id="firstName"
        onChange={handleInputChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Prénom</label>
      <input
        type="text"
        id="lastName"
        onChange={handleInputChange}
        value={formData.lastName}
      />
      <label htmlFor="postalCode">Code Postal</label>
      <input
        type="text"
        id="postalCode"
        pattern="[0-9]{5}"
        onChange={handleInputChange}
        value={formData.postalCode}
        required
      />

      <label htmlFor="phoneNumber">Numéro de téléphone</label>
      <input
        type="tel"
        id="phoneNumber"
        pattern="^[0-9+ ]{9}"
        onChange={handleInputChange}
        value={formData.phoneNumber}
        required
        title="Veuillez saisir un numéro de téléphone valide (chiffres et + autorisés)"
      />

      <button onClick={prevEtape}>Étape précédente</button>
      <button onClick={addPost}>Envoyer</button>
    </div>
  );
};

export default FormEtape2;
