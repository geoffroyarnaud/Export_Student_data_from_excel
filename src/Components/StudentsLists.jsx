import React from 'react';

const StudentsLists = ({ etudiant, onDelete }) => {
    return (
        <div>
            <div className='text-base flex items-center justify-between'>
                {etudiant.nom} {etudiant.prenom} ( {etudiant.age} ans)
                <button className=" p-4 inline-flex items-center text-sm font-semibold rounded-lg h-9 border border-transparent bg-gray-600 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => onDelete(etudiant.nom)}>Supprimer...</button>
            </div>
            {/* <button className="ml-3 self-start py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg  w-28 h-9 border border-transparent bg-gray-600 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 flex-grow" onClick={() => onDelete(etudiant.nom)}>Modifier...</button> */}

        </div >
    );
};

export default StudentsLists;