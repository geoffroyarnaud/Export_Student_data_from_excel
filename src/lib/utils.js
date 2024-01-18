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

export const getHeaders = () => {
    const students = JSON.parse(localStorage.getItem('students')) ?? [];
    // Assuming the structure of the student object
    const headers = Object.keys(students[0] || {});
    return headers;
};

