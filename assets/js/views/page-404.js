/**
 * Created by Administrator on 6/28/2015.
 */
define(
  ['jquery', 'underscore', 'backbone','helper/appHelper','models/page-404','text!templates/page-404.html'],
    function($, _, Backbone,_helper,_model, _itemTemplate){
        return Backbone.View.extend({
            model:new _model(),
            el : _helper.appContainerElement(),
            initialize : function(){
                this.template = _.template(_itemTemplate);
            },
            render :function(){
                return _helper.renderView(this);
            }
        });
    }
);
