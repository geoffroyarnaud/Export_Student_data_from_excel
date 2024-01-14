import React, { useEffect, useState } from 'react';
import { getStudents, save } from "../lib/utils"

const FormEtudiants = ({ setEtudiants }) => {
    //state
    const [ajouterNom, setAjouterNom] = useState("");
    const [ajouterPrenom, setAjouterPrenom] = useState("");
    const [filiere, setFiliere] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");

    //comportements
    const formatDateForDisplay = (inputDate) => {
        // Convertir la date de 'année-mois-jour' à 'jour-mois-année'
        const [year, month, day] = inputDate.split('-');
        return `${day}-${month}-${year}`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nom = ajouterNom.toLocaleUpperCase();
        const prenom = ajouterPrenom.toLocaleUpperCase();
        const filiereE = filiere.toLocaleUpperCase();
        const date = dateNaissance;

        const studentsList = {
            nom,
            prenom,
            filiereE,
            date: formatDateForDisplay(date)
        }
        save(studentsList)
        setEtudiants(
            (current) => {
                return [...current, studentsList]
            }
        )
        setAjouterNom("");
        setAjouterPrenom("");
        setFiliere("");
        setDateNaissance("");
    }

    const handleNom = (event) => {
        setAjouterNom(event.target.value);
    }
    const handlePrenom = (event) => {
        setAjouterPrenom(event.target.value);
    }
    const handleDateNaissance = (event) => {
        setDateNaissance(event.target.value);
    }
    const handleFiliere = (event) => {
        setFiliere(event.target.value);
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
            <div className='flex gap-3'>
                <input
                    value={dateNaissance}
                    onChange={handleDateNaissance}
                    type="date"
                    placeholder='Date de naissance... Ex.13/01/2024'
                    className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <input
                    value={filiere}
                    onChange={handleFiliere}
                    type="text"
                    placeholder='Filiere...'
                    className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"

                />
            </div>

            <button type="submit" className="self-start py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Ajouter Etudiant</button>
        </form>
    );
};

export default FormEtudiants;

//Gestion de formulaire
//1. creation de formulaire
//2. soumission du formulaire
//3. recuperation des données