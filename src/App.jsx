import React, { useState, useEffect } from 'react';
import FormEtudiants from './Components/FormEtudiants';
import { getStudents, removeStudents } from "./lib/utils";
import StudentsLists from './Components/StudentsLists';
import ExportStudentExcel from './Components/ExportStudentExcel';
import ImportStudentExcel from './Components/ImportStudentExcel';
import ExportHeadersExcel from './Components/ExportHeadersExcel';

const App = () => {
  const [etudiants, setEtudiants] = useState(() => getStudents());
  const [searchTerm, setSearchTerm] = useState('');

  const updateStudentsList = (term) => {
    const filteredStudents = getStudents().filter(etudiant =>
      etudiant.nom.toLowerCase().includes(term.toLowerCase())
    );

    const noResultsFound = term.trim() !== '' && filteredStudents.length === 0;
    setEtudiants(noResultsFound ? [] : filteredStudents);

    if (noResultsFound) {
      console.log("Aucun résultat trouvé pour la recherche :", term);
    }
  };

  useEffect(() => {
    updateStudentsList(searchTerm);
  }, [searchTerm]);

  const handleDelete = (nom) => {
    const result = removeStudents(nom);
    setEtudiants(result);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleImport = (importedStudents) => {
    setEtudiants(importedStudents);
    // Mettez à jour la liste immédiatement après l'importation
    updateStudentsList(searchTerm);
  };

  return (
    <main className="max-w-[600px] min-h-screen mx-auto pt-5 pb-32 shadow-lg px-3">
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-semibold inline-block">Inscription étudiant</h2>
        <FormEtudiants etudiants={etudiants} setEtudiants={setEtudiants} />
      </div>

      <div className="mb-6 flex w-full">
        <h3 className="mt-1 text-xl font-semibold inline-block mr-10">Liste  étudiants</h3>
        <label htmlFor="search" className="mt-2 mr-2 inline-block text-[15px] font-semibold">Rechercher : </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          className="border p-2 flex-grow border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        />
      </div>
      <div className='flex gap-4'>
        <ExportStudentExcel etudiant={etudiants} />
        <ExportHeadersExcel />
        <ImportStudentExcel onImport={handleImport} />
      </div>

      {etudiants && etudiants.length > 0 ? (
        <ul>
          {etudiants.map((etudiant, i) => (
            <li className="pt-2" key={i}>
              <StudentsLists etudiant={etudiant} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun étudiant trouvé.</p>
      )}
    </main>
  );
};

export default App;
