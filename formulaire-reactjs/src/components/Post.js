// Post.js

// Crée une fonction pour récupérer le nom de la ville à partir du code postal
export async function fetchCityNameFromPostalCode(codePostal) {
    const apiUrl = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (response.status === 200) {
        const data = await response.json();
        if (data.length > 0) {
          // Récupérer le nom de la première ville (si plusieurs existent)
          const nomVille = data[0].nom;
          return nomVille;
        } else {
          return null; // Aucune ville trouvée pour ce code postal
        }
      } else {
        throw new Error("Échec de la requête");
      }
    } catch (error) {
      throw error;
    }
  }

  
  // Post.js

// Crée une fonction pour envoyer le lead
export async function sendLeadData(formData) {
    const apiUrl = "https://hooks.zapier.com/hooks/catch/6844401/3sjq5ou/";
    const emailAddress = "mouelhi.chainez26@gmail.com"; // Remplacez par votre adresse email
  
    const leadData = {
        data: {
          type_modele: formData.modelType,
          achat_ou_leasing: formData.interestedIn,
          vehicule_actuel: formData.currentVehicle,
          nom: formData.lastName,
          prenom: formData.firstName,
          ville: formData.nomVille,
          telephone: formData.phoneNumber,
        },
      };
      
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    };
  
    try {
      const response = await fetch(`${apiUrl}?em=${emailAddress}`, requestOptions);
  
      if (response.status === 200) {
        console.log("Lead envoyé avec succès");
      } else {
        console.error("Échec de l'envoi du lead");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du lead :", error);
    }
  }
  