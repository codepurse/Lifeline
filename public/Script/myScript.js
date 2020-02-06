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
        }
        else {
            $('.colSideMenu').css('width', '175px');
            $('.colSideMenu').css('box-shadow', '0 2px 16px -6px #cc292f !important');
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
        }
    });

    $('td').each(function () {
        var $this = $(this)
        if ($this.text() == "Pending") {
            $this.addClass('statusPending');
        }
        else if ($this.text() == "Paid") {
            $this.addClass('statusPaid');
        }
        else if ($this.text() == "Failed") {
            $this.addClass('statusFailed');
        }
    });
});