import { getPets, getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

export const RegisteredPets = () => {
    let petHTML = "<ul>";

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
    }

    petHTML += "</ul>";

    return petHTML;
};

document.addEventListener("click", (event) => {
    const petClicked = event.target;
    if (petClicked.id.startsWith("pet")) {
        const [, petId] = petClicked.id.split("--");

        for (const walker of walkers) {
            if (parseInt(petId) === walker.id) {
                let thePet = pets.find((pet) => pet.id === parseInt(petId));
                window.alert(
                    `${thePet.name} is being walked by ${walker.name}`
                );
            }
        }
    }
});
