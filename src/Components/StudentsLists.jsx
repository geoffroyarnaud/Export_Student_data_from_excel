import React from 'react';

const StudentsLists = ({ etudiant, onDelete }) => {
    return ( 
        <div>
            <table className=" table-auto w-full">
                <thead>
                    <tr>
                        <th className="w-1/4 text-left">Nom</th>
                        <th className="w-1/4 text-left">Prénom</th>
                        <th className="w-1/4 text-left">Date de Naissance</th>
                        <th className="w-1/4  text-left">Filière</th>
                        <th className="w-1/4 text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {etudiant.map((etudiant, i) => (
                        <tr key={i}>
                            <td className="w-1/4">{etudiant.nom}</td>
                            <td className="w-1/4">{etudiant.prenom}</td>
                            <td className="w-1/4">{etudiant.date}</td>
                            <td className="w-1/4">{etudiant.filiereE}</td>
                            <td className="w-1/4">
                                <button
                                    className=" inline-flex items-center text-sm font-semibold rounded-lg h-9 border border-transparent bg-gray-600 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    onClick={() => onDelete(etudiant.nom)}
                                >
                                    Supprimer...
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    );
};

export default StudentsLists;