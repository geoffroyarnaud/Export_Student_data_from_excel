import React, { useEffect, useState } from 'react';
import { getStudents, save } from "../lib/utils"

const FormEtudiants = ({ setEtudiants }) => {
    //state
    const [ajouterNom, setAjouterNom] = useState("");
    const [ajouterPrenom, setAjouterPrenom] = useState("");
    const [ajouterAge, setAjouterAge] = useState(0);

    //comportements
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const nom = ajouterNom.toLocaleUpperCase();
        const prenom = ajouterPrenom.toLocaleUpperCase();
        const age = ajouterAge;
     
        const studentsList = {
            nom,
            prenom,
            age,
        }
        save(studentsList)
        setEtudiants(
            (current) => {
                return [...current, studentsList]
            }
        )
        setAjouterAge(0);
        setAjouterNom("");
        setAjouterPrenom("");
    }

    const handleNom = (event) => {
        setAjouterNom(event.target.value);
    }
    const handlePrenom = (event) => {
        setAjouterPrenom(event.target.value);
    }
    const handleAge = (event) => {
        setAjouterAge(event.target.value);
    }

    //render
    return (
        <form action="submit"
            onSubmit={handleSubmit}
            autoComplete='off'
            className="flex flex-col gap-y-3">

            <div className=" flex gap-x-2">
                <input
                    value={ajouterNom}
                    onChange={handleNom}
                    type="text"
                    placeholder='Nom...'
                    className=" py-3 px-4 block w-44 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <input
                    value={ajouterPrenom}
                    onChange={handlePrenom}
                    type="text"
                    placeholder='Prenom Etudiant...'
                    className=" py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
            </div>

            <input
                value={ajouterAge}
                onChange={handleAge}
                type="number"
                placeholder='Age Etudiant...'
                className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"

            />
            <button type="submit" className="self-start py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Ajouter Etudiant</button>
        </form>
    );
};

export default FormEtudiants;

//Gestion de formulaire
//1. creation de formulaire
//2. soumission du formulaire
//3. recuperation des données