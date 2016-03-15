'use strict';

$(document).ready(function() {
    /**
     * Attach all event listeners
     * @No parameters
     */
    $('[ui-btn]').on('click', function(e) {
        var target = $(e.target).closest('[ui-card]');
        if ( target.attr('ui-card') === 'active' ) {
            target.attr('ui-card', '');
        } else {
            target.attr('ui-card', 'active');
        }
    });
});