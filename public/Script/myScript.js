$(document).ready(function () {
    $(".btnRight").click(function () {

    });

    $(".btnTagList").click(function () {
        $(this).css('backgroundColor', 'white');
        $(this).css('color', '#3b3b66');
        $(this).css('border', '2px solid #3b3b66');
        $(this).css('color', 'white');
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
    $('.pNumber').html(rowCount + " " + "entries");


});

$(function() {
    $('#add').on('click', function( e ) {
        e.preventDefault();
        $('<div/>').addClass( 'new-text-div' )
        .html( $('<input type="textbox"/>').addClass( 'someclass' ) )
        .append( $('<button/>').addClass( 'remove' ).text( 'Remove' ) )
        .insertBefore( this );
    });
    $(document).on('click', 'button.remove', function( e ) {
        e.preventDefault();
        $(this).closest( 'div.new-text-div' ).remove();
    });
});









