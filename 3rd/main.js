(function() {
    let table = document.querySelector('.main');
    let resultTable = document.querySelector('.result');
    let title = document.querySelector('.title');

    let min = +table.rows[1].cells[5].innerText;
    let max = +table.rows[1].cells[3].innerText;
    let imax = 0;
    let imin = 0;

    [table, min, max, imin, imax] = findMinMax(table, min, max, imin, imax);
    resultComputing(resultTable, title, imin, imax, table);
})();

function findMinMax(table, min, max, imin, imax) {
    for(let i = 1; i < table.rows.length; i++) {
            if(+table.rows[i].cells[5].innerText < min) {
                min = +table.rows[i].cells[5].innerText;
                imin = i;
            }

            if(+table.rows[i].cells[3].innerText > max) {
                max = +table.rows[i].cells[3].innerText;
                imax = i;
            }
    }
    return [table, min, max, imin, imax];
}

function resultComputing(resultTable, title, imin, imax, table) {
    resultTable.hidden = false;
    title.hidden = true;

    resultTable.rows[0].cells[0].innerText = 'RESULTS';
    resultTable.rows[1].cells[0].innerText = 'MIN';
    resultTable.rows[2].cells[0].innerText = 'MAX';

    for(let i = 0; i < table.rows[0].cells.length; i++) {
        resultTable.rows[0].cells[i + 1].innerText = table.rows[0].cells[i].innerText;
    }

    for(let i = 0; i < table.rows[0].cells.length; i++) {
        resultTable.rows[1].cells[i + 1].innerText = table.rows[imin].cells[i].innerText;
        resultTable.rows[2].cells[i + 1].innerText = table.rows[imax].cells[i].innerText;
    }
}
