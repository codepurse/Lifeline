$(document).ready(function () {
    $(".btnRight").click(function () {
        
    });

    $(".btnTagList").click(function () {
        $(this).css('display', 'none');
    });



    $('.btnPaid').click(function () {
        $('table tr td:nth-child(4)').each(function () {
            $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
        });
    });

    $('.btnPending').click(function () {
        $('table tr td:nth-child(4)').each(function () {
            $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'none');
        });
    });

    $('.btnFailed').click(function () {
        $('table tr td:nth-child(4)').each(function () {
            $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'none');
        });
    });


    var rowCount = $('#myTable tr').length;
    $('.pNumber').html(rowCount +" "+"entries");
});