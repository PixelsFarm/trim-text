// talla text i afegiec punts suspensius

jQuery(function() {
    (function($) {

        trace('cut-text.js')

        var $w = $(window)

        __ini()

        $w.resize(function(e) {
            __toCut()
        });

        function __ini() {
            __toCut()
        }

        function __toCut() {
            __cut('body.front .home-areas-visor .field-name-description-field')
            //__cut('body.front .home-areas-visor .taxonomy-term-description')
        }

        function __truncate(str, num) {
            return str.split(" ").splice(0, num).join(" ");
        }

        function __cut(el) {
            var $el = $(el)

            if (!$el.length)
                return

            $el.each(function(i, o) {
                var $o = $(o)
                var width = $w.width()

                var regex = /\s+/gi;
                var wordcount = $.trim($o.text()).replace(regex, ' ').split(' ').length
                var limit

                if (width <= 767)
                    limit = 40
                else if (width > 767 && width <= 992)
                    limit = 30
                else if (width > 992 && width <= 1024)
                    limit = 40
                else if (width > 1024 && width <= 1200)
                    limit = 30
                else
                    limit = 75

                trace(limit)

                if (wordcount <= limit)
                    return
                // si el número d eparaules coincideix amb el límit de paraules

                if (!$o.hasClass('short')) {
                    $o.attr('data-long', $o.text())
                }

                $o.attr('data-short', __truncate($o.attr('data-long'), limit)).addClass('short').html('<p>' + $o.attr('data-short') + ' ...' + '</p>')
            });
        }

        function trace(str) {
            console.log ? console.log(str) : null
        }

    }
    )(jQuery);
});