import React from 'react';
import ExcelJS from 'exceljs';
import { getStudents, save } from '../lib/utils';

const ImportStudentExcel = ({ onImport }) => {

    const formatDateForImport = (inputDate) => {
        // Convertir la date de 'année-mois-jourT00:00:00.000Z' à 'jour-mois-année'
        const formattedDate = new Date(inputDate).toLocaleDateString('fr-FR');
        return formattedDate;
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = async (event) => {
            const data = event.target.result;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(data);

            const worksheet = workbook.getWorksheet(1);

            const students = [];
            const existingStudents = getStudents();

            worksheet.eachRow((row, rowNumber) => {
                // Skip the header row
                if (rowNumber === 1) {
                    return;
                }

                const nom = row.getCell(1).value;
                const prenom = row.getCell(2).value;
                const filiereE = row.getCell(3).value;
                const date = row.getCell(4).value;

                if (nom && prenom && filiereE && date) {
                    const isExisting = existingStudents.some((student) => {
                        return (
                            student.nom.toLowerCase() === nom.toLowerCase() &&
                            student.prenom.toLowerCase() === prenom.toLowerCase() &&
                            student.filiereE === filiereE.toLocaleUpperCase() &&
                            student.date === date
                        );
                    });

                    // Add only if it's not already in the list
                    if (!isExisting) {
                        students.push({
                            nom,
                            prenom,
                            filiereE,
                            date: formatDateForImport(date)
                        });
                    }
                }
            });

            // Save the imported students to localStorage
            students.forEach((student) => {
                save(student);
            });

            // Trigger the onImport callback if provided
            if (onImport) {
                onImport(students);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className='w-80'>
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className=' mb-3 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                 file:border-0
                file:bg-gray-100 file:me-4
                file:py-3 file:px-4
                dark:file:bg-gray-700 dark:file:text-gray-400'
            />
        </div>
    );
};

export default ImportStudentExcel;
