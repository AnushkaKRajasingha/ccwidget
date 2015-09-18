/**
 * Created by Administrator on 6/28/2015.
 */
define(
    ['jquery', 'underscore', 'backbone',"helper/appHelper"],
    function ($, _, Backbone,helper) {
        return Backbone.Model.extend({
            Title : 'Currency Converter Widget Designer',
            name : 'page-index',
            widgetEmbedCode : null ,
            defaults:function(){
                   // rates:[]
            },
            initialize: function () {
              //  console.log(this.name + ' model has been rendered.');
                var ctrlID = helper.genarateUniqueKey(6);
               this.widgetEmbedCode = '<div id="ccwidget_'+ctrlID+'" data-uniqueid="'+ctrlID+'" data-basecurr="" data-widget-title=""></div><script>var ccwidgetid="'+ctrlID+'";</script> <script src="'+window.location.origin + requirejs.s.contexts._.config.subDir+'/assets/js/ext/widget-script.js?ccwidgetid='+ctrlID+'" type="text/javascript"></script>';
            }

        });
    }
);