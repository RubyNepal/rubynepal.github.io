/*
 * jQTemplate - fast and light template engine - jQuery plugin
 *  Version 0.2
 * Author: Jim Palmer
 * Released under MIT license.
 */
(function($) {
        $.fn.jQTemplate = function (data, mod, template) {
                // clone the template and clobber the target
                $(this).empty().append($(template).clone().html().replace(/>\s+</g, '><'));
                // detect iterative or non-iterative root
                var tbody=$('tbody:first,.itr:first', this).length ? $('tbody:first,.itr:first', this) : this,
                        tbodyTemplate=$(tbody).html().replace(/>\s+</g, '><'),
                        repHtml=[];
                // build iterated pre-dom-insertion
                if (typeof data.length != 'undefined') {
                        for (var d=0, de=data.length; d < de; d++)
                                repHtml.push(tbodyTemplate);
                        // insert iterative HTML to tbody target all at once
                        $(tbody).html(repHtml.join(''));
                } else { // otherwise we're not iterating
                        data=[data];
                }
                // apply modifiers on data with prepend and append support
                for (var col in $.extend({}, data[0], mod))
                        $('.' + col, tbody).each(function (i) {
                                var cellVal=(typeof data == 'object' && i < data.length && typeof data[i][col] != 'undefined') ? data[i][col] : '';
                                $(this).html(
                                        (typeof mod['+' + col] == 'function' ? mod['+' + col](i, cellVal) : '') +
                                        (typeof mod[col] == 'function' ? mod[col](i, cellVal) : cellVal) +
                                        (typeof mod[col + '+'] == 'function' ? mod[col + '+'](i, cellVal) : '')
                                );
                        });
                return this; // chainable
        }
})(jQuery);