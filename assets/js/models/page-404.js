/**
 * Created by Administrator on 6/28/2015.
 */
define(
    ['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        return Backbone.Model.extend({
            Title : 'Page Not Found',
            name : 'page-404',
            initialize: function () {
               // console.log('page 404 model is initialized');
            }
        });
    }
);