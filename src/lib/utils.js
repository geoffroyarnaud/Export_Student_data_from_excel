export const save = (data) => {
    const students = getStudents();
    students.push(data);
    localStorage.setItem('students', JSON.stringify(students));
}

export const getStudents = () => {
    const students = JSON.parse(localStorage.getItem('students')) ?? [];
    return students;
}

export const removeStudents = (nom) => {
    const students = getStudents();
    const newStudent = students.filter((students) => students.nom !== nom)
    localStorage.setItem('students', JSON.stringify(newStudent));
    return newStudent;
}

// export const updateStudentsList = (term) => {
//     const filteredStudents = getStudents().filter(etudiant =>
//         etudiant.nom.toLowerCase().includes(term.toLowerCase())
//     );

//     const noResultsFound = term.trim() !== '' && filteredStudents.length === 0;
//     setEtudiants(noResultsFound ? [] : filteredStudents);

//     if (noResultsFound) {
//         console.log("Aucun résultat trouvé pour la recherche :", term);
//     }
// };