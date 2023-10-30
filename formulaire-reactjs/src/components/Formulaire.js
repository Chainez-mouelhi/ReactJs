
import React, { useState } from "react";
import FormEtape1 from "./FormEtape1";
import FormEtape2 from "./FormEtape2";
import { fetchCityNameFromPostalCode } from "./Post";
import { sendLeadData } from "./Post"; 


const Formulaire = () => {
 
  const [Etape, setEtape] = useState(1);
  const [formData, setFormData] = useState({
    modelType: "",
    interestedIn: "",
    currentVehicle: "",
    firstName: "",
    lastName: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handleInputChange = async (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });

   
  };

  const EtapeSuivante = () => {
    setEtape(Etape + 1);
  };

  const prevEtape = () => {
    setEtape(Etape - 1);
  };

  const addPost = async () => {
    // Ajoutez la valeur de la ville à formData
    console.log(formData);
    try {
        // Assurez-vous que les données sont correctement extraites du formulaire
        console.log(formData);
    
        const codePostal = formData.postalCode;
        const nomVille = await fetchCityNameFromPostalCode(codePostal);
    
        if (nomVille) {
          // Récupérer le nom de la ville et l'ajouter à formData
          setFormData({ ...formData, nomVille });
    
          // Vous pouvez également vérifier les données mises à jour
          console.log(formData);
    
          // Appeler la fonction sendLeadData avec les données du formulaire
          console.log("Données du formulaire avant l'envoi du lead :", formData);
          await sendLeadData(formData);
          console.log("Données du lead envoyées avec succès.");
        } else {
          console.log("Aucune ville trouvée pour ce code postal");
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi des données du lead :", error);
      }

    

    
  };

  return (
    <div className="container">
      <div className="formcontainer">
        <h1>Réserver votre essai</h1>
        {Etape === 1 && (
          <FormEtape1
            formData={formData}
            handleInputChange={handleInputChange}
            EtapeSuivante={EtapeSuivante}
          />
        )}
        {Etape === 2 && (
          <FormEtape2
            formData={formData}
            handleInputChange={handleInputChange}
            prevEtape={prevEtape}
            addPost={addPost}
          />
        )}
        {/* Affichez la ville ici */}
       
      </div>
    </div>
  );
};

export default Formulaire;
