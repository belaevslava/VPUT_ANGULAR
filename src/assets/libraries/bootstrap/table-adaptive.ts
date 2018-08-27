jQuery(document).ready(function($) {
    $('.table-adaptive').each(function(tableIndex, tableElement) {
        $(tableElement).find('>thead>tr>th').each(function(columnIndex, columnElement) {
            let $columnElement = $(columnElement),
                columnName = $columnElement.text();

            $columnElement.closest('table').find('tbody>tr').each(function(rowIndex, rowElement) {
                $(rowElement).find('>td:eq(' + columnIndex + ')').attr('data-column-name', columnName);
            });
        });
    });
});