$(document).ready(function () {
    $(".btnRight").click(function () {

    });




    $('.btnPaid').click(function () {
        if ($(this).attr('data-click-state') == 1) {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'table-cell');
            });
            $(this).attr('data-click-state', 0)
            $(this).css('backgroundColor', '#3b3b66');
            $(this).css('color', 'white');
            $(this).css('border', '2px solid white');
            $(this).css('color', 'white');
        } else {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Paid' && $(this).parent().find('td').css('display', 'none');
            });
            $(this).attr('data-click-state', 1)
            $(this).css('backgroundColor', 'white');
            $(this).css('color', '#3b3b66');
            $(this).css('border', '2px solid #3b3b66');
            $(this).css('color', '#3b3b66');
        }
    });

    $('.btnPending').click(function () {
        if ($(this).attr('data-click-state') == 1) {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'table-cell');
            });
            $(this).attr('data-click-state', 0)
            $(this).css('backgroundColor', '#3b3b66');
            $(this).css('color', 'white');
            $(this).css('border', '2px solid white');
            $(this).css('color', 'white');
        } else {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Pending' && $(this).parent().find('td').css('display', 'none');
            });
            $(this).attr('data-click-state', 1)
            $(this).css('backgroundColor', 'white');
            $(this).css('color', '#3b3b66');
            $(this).css('border', '2px solid #3b3b66');
            $(this).css('color', '#3b3b66');
        }
    }); 

    $('.btnFailed').click(function () {
       if ($(this).attr('data-click-state') == 1) {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'table-cell');
            });
            $(this).attr('data-click-state', 0)
            $(this).css('backgroundColor', '#3b3b66');
            $(this).css('color', 'white');
            $(this).css('border', '2px solid white');
            $(this).css('color', 'white');
        } else {
            $('table tr td:nth-child(4)').each(function () {
                $(this).text() == 'Failed' && $(this).parent().find('td').css('display', 'none');
            });
            $(this).attr('data-click-state', 1)
            $(this).css('backgroundColor', 'white');
            $(this).css('color', '#3b3b66');
            $(this).css('border', '2px solid #3b3b66');
            $(this).css('color', '#3b3b66');
        }
    });




});

$(function () {
    $('#add').on('click', function (e) {
        e.preventDefault();
        $('<div/>').addClass('new-text-div')
            .html($('<input type="textbox"/>').addClass('txtAllergen'))
            .append($('<button/>').addClass('btnRemove').text('Remove'))
            .insertBefore(this);
    });
    $(document).on('click', 'button.remove', function (e) {
        e.preventDefault();
        $(this).closest('div.new-text-div').remove();
    });
});









