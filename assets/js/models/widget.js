/**
 * Created by Anushka K R on 9/9/2015.
 * URL : http://www.anushkar.com
 * Elance : http://anushkarajasingha.elance.com
 */
define(
    ['jquery', 'underscore', 'backbone',"helper/appHelper"],
    function ($, _, Backbone,helper) {
        return Backbone.Model.extend({
            widgetTitle : 'Currency Converter',
            widgetTitleClr : 'rgba(60, 118, 61,1)',
            widgetTitleBgClr : 'rgba(223, 240, 216,1)',
            widgetBodyBgClr : 'rgba(255,255,255,1)',
            widgetResultClr : 'rgba(34,34,34,1)',
            widgetResultBgClr : 'rgba(221, 221, 221,1)',
            widgetBaseCurr : 'EUR',
            widgetFooterBgClr : 'rgba(48, 50, 102,1)',
            widgetFooterImg : window.location.origin + requirejs.s.contexts._.config.subDir+'/assets/css/ext/images/pbyhtrip.png',
            widgetFooterUrl : '#',
            widgetSrvUrl : window.location.origin + requirejs.s.contexts._.config.subDir,
            name : 'ccwidget',
            widgetEmbedCode : null ,
            defaults:function(){
                // rates:[]
            },
            initialize: function () {
                //  console.log(this.name + ' model has been rendered.');
                this.setVals();
            },
            setVals:function(){
                var ctrlID = helper.genarateUniqueKey(6);
                this.widgetEmbedCode = '<div id="ccwidget_'+ctrlID+'" data-uniqueid="'+ctrlID+'" ' +
                'data-widget-basecurr="'+this.widgetBaseCurr+'" ' +
                'data-widget-title="'+this.widgetTitle+'" ' +
                'data-widget-titleclr="'+this.widgetTitleClr+'" ' +
                'data-widget-titlebgclr="'+this.widgetTitleBgClr+'" ' +
                'data-widget-resclr="'+this.widgetResultClr+'" ' +
                'data-widget-resbgclr="'+this.widgetResultBgClr+'" ' +
                'data-widget-bodybg="'+this.widgetBodyBgClr+'" ' +
                'data-widget-srv-url="'+this.widgetSrvUrl+'" '+
                '>' +
                '<div style="background-color: '+this.widgetFooterBgClr+'; text-align: right;"><a target="_blank" href="'+this.widgetFooterUrl+'"><img src="'+this.widgetFooterImg+'"></a></div>' +
                '</div><script>var ccwidgetid="'+ctrlID+'";</script> <script src="'+this.widgetSrvUrl+'/assets/js/ext/widget-script.js?ccwidgetid='+ctrlID+'" type="text/javascript"></script>';
            }

        });
    }
);