$(document).ready( function () {
    $('#table-recent').DataTable({
        "aLengthMenu": [[5, 10, 15, 20, 25], [5, 10, 15, 20, 25]],
        "iDisplayLength": 10,
        "sDom": "lfrti",
        language: {
            "lengthMenu": "_MENU_ entries per page",
            "search": "_INPUT_",
            "searchPlaceholder": "Search...",
        }
    });
})
$(document).ready( function () {
    $('#table-topselling').DataTable({
        "paging": false,
        "targets": 'no-sort',
        "searching": false,
        "bSort": false,
        "order": [],
        "bInfo": false,
    });
});
