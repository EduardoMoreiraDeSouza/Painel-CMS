$(function(){
    clickMenu();
    scrollItem();
    function clickMenu() {
        $('#menu-principal a, .list-group-item a').click(function() {
            $('#menu-principal a, .list-group-item a').removeClass('active');
            $('#menu-principal a').parent().removeClass('active');
            $('#menu-principal a[ref_sys='+ $(this).attr('ref_sys') +']').parent().addClass('active');
            $('.list-group-item a[ref_sys='+ $(this).attr('ref_sys') +']').addClass('active');
            return false;
        })
    }

    function scrollItem() {
        $('#menu-principal a, .list-group-item a').click(function() {
            var ref = '#' + $(this).attr('ref_sys') + '_section';
            var offset = $(ref).offset().top;
            $('html, body').animate({'scrollTop': offset}, top-50);
        });
    }

    $('#menu-principal a').click(function() {
        if ($(window).width() < 768) {
            $('.navbar-toggler-icon').click()
        }
    })

    $('button.deletar-membro').click(function() {
        var id_membro = $(this).attr('id_membro');
        $.ajax({
            method: 'POST',
            data: {'id_membro': id_membro},
            url: 'deletar.php'
        })
        $(this).parent().parent().remove();
    });

})