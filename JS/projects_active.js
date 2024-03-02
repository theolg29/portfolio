$(document).ready(function () {
    $('.projets_categories_info').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.projets_mesprojets_infos').show();
        }
        else {
            $('.projets_mesprojets_infos').not('.' + value).hide();
            $('.projets_mesprojets_infos').filter('.' + value).show();
        }
    })

    $('.projets_categories_info').click(function () {
        $(this).addClass('projets_categories_active').siblings().removeClass('projets_categories_active');
    })
})


