/**
 * Created by Administrator on 9/6/2015.
 */
define(
    ['jquery', 'underscore', 'backbone','models/page-index'],
    function ($, _, Backbone,_model) {
        return Backbone.Collection.extend({
            initialize:function(){
                this.fetch();
            },
            model: _model,
            url: "http://api.fixer.io/latest",
            parse: function(json){
                return _.pairs( json['rates']);
            }

        });
    }
);