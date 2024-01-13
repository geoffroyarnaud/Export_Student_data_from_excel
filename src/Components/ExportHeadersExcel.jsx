import React from 'react';
import ExcelJS from 'exceljs';

const ExportHeadersExcel = () => {
    const handleExportHeadersExcel = () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Entetes');

        worksheet.columns = [
            { header: 'Nom', key: 'nom', width: 15 },
            { header: 'Prenom', key: 'prenom', width: 15 },
            { header: 'Filiere', key: 'filiere', width: 15 },
            { header: 'DateNaissance', key: 'dateNaissance', width: 15 },
        ];

        workbook.xlsx.writeBuffer().then(buffer => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'entetes.xlsx';
            a.click();

            URL.revokeObjectURL(url);
        });
    };

    return (
        <div className=''>
            <button className='inline-flex text-center items-center text-sm font-semibold rounded-lg w-32 h-11 border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 flex-grow dark:focus:ring-gray-600 p-2' onClick={handleExportHeadersExcel}>Exporter Entêtes</button>
        </div>
    );
};

export default ExportHeadersExcel;
