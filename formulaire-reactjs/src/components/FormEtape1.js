// FormStep1.js
import React from "react";

const FormEtape1 = ({ formData, handleInputChange, EtapeSuivante }) => {
  return (
    <div>
      <label htmlFor="modelType">Type de modèle à essayer</label>
      <select
        id="modelType"
        onChange={handleInputChange}
        value={formData.modelType}
      >
        <option value="">Sélectionnez un modèle</option>
        <option value="Compacte">Compacte</option>
        <option value="SUV">SUV</option>
        <option value="Electriques & Hybrides">Electriques & Hybrides</option>
        <option value="Sportive">Sportive</option>
      </select>
      <label htmlFor="interestedIn">Intéressé par</label>
      <select
        id="interestedIn"
        onChange={handleInputChange}
        value={formData.interestedIn}
      >
        <option value="">Sélectionnez une option</option>
        <option value="Achat d’un véhicule">Achat d’un véhicule</option>
        <option value="Leasing d’un véhicule">Leasing d’un véhicule</option>
      </select>
      <label htmlFor="currentVehicle">Véhicule actuel</label>
      <input
        type="text"
        id="currentVehicle"
        onChange={handleInputChange}
        value={formData.currentVehicle}
      />
      <button onClick={EtapeSuivante}>Étape suivante</button>
    </div>
  );
};

export default FormEtape1;
