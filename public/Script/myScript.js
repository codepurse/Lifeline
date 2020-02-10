$(document).ready(function () {
    $(".btnRight").click(function () {
        if ($('.colSideMenu').width() >= 65) {
            $('.colSideMenu').css('width', '65px');
            $('.btnProfile').css('width', '45px');
            $('.btnProfile > span').css('display', 'none');
            $('.btnMembership').css('width', '45px');
            $('.btnMembership > span').css('display', 'none');
            $('.btnPayment').css('width', '45px');
            $('.btnPayment > span').css('display', 'none');
            $('.btnServices').css('width', '45px');
            $('.btnServices > span').css('display', 'none');
            $('.btnExit').css('width', '45px');
            $('.btnExit > span').css('display', 'none');
            $('.btnRight').css('left', '50px');
            $('.btnRight').css('transform', 'none');
            $('.btnDashboard').css('left', '50px');
            $('.btnDashboard').css('width', '45px');
            $('.btnDashboard > span').css('display', 'none');
            $('.btnNotes').css('left', '50px');
            $('.btnNotes').css('width', '45px');
            $('.btnNotes > span').css('display', 'none');
        }
        else {
            $('.colSideMenu').css('width', '175px');
            $('.colSideMenu').css('box-shadow', '0 2px 20px -6px #cc292f !important');
            $('.btnProfile').css('width', '150px');
            $('.btnProfile > span').css('display', 'inline');
            $('.btnMembership > span').css('display', 'inline');
            $('.btnMembership').css('width', '150px');
            $('.btnPayment > span').css('display', 'inline');
            $('.btnPayment').css('width', '150px');
            $('.btnServices > span').css('display', 'inline');
            $('.btnServices').css('width', '150px');
            $('.btnExit > span').css('display', 'inline');
            $('.btnExit').css('width', '150px');
            $('.btnRight').css('left', '160px');
            $('.btnRight').css('transform', 'rotate(180deg)');
            $('.btnDashboard').css('width', '150px');
            $('.btnDashboard > span').css('display', 'inline');
            $('.btnNotes').css('width', '150px');
            $('.btnNotes > span').css('display', 'inline');
        }
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

    $('.btnMembershipCard').click(function () {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == 'Membership' && $(this).closest('.card').remove();
        });
    });

    $('.btnServicesCard').click(function () {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == 'Services' && $(this).closest('.card').remove();
        });
    });

    $('.btnPaymentsCard').click(function () {
        $('.card-deck > .card > .card-body > .pCardTag').each(function () {
            $(this).text() == 'Payments' && $(this).closest('.card').remove();
        });
    });


    var rowCount = $('#myTable tr').length;
    $('.pNumber').html(rowCount +" "+"entries");
});