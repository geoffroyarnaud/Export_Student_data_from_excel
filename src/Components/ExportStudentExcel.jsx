
import React from 'react';
import ExcelJS from 'exceljs';

const ExportStudentExcel = ({ etudiant }) => {
    const handleExportExcel = () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Etudiants');

        worksheet.columns = [
            { header: 'Nom', key: 'nom', width: 15 },
            { header: 'Prenom', key: 'prenom', width: 15 },
            { header: 'Age', key: 'age', width: 10 },
        ];

        etudiant.forEach(etudiant => {
            worksheet.addRow({
                nom: etudiant.nom,
                prenom: etudiant.prenom,
                age: etudiant.age,
            });
        });

        workbook.xlsx.writeBuffer().then(buffer => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'etudiants.xlsx';
            a.click();

            URL.revokeObjectURL(url);
        });
    };
    return (
        <div className=''>
            <button className='p-1 inline-flex text-center items-center text-sm font-semibold rounded-lg w-32 h-11 border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 flex-grow dark:focus:ring-gray-600' onClick={handleExportExcel}>Exporter vers Excel</button>
        </div>
    );
};

export default ExportStudentExcel;