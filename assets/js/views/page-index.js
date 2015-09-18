/**
 * Created by Administrator on 9/6/2015.
 */
define(
    ['jquery', 'underscore', 'backbone',
        'helper/appHelper',
        'models/page-index',
        'text!templates/page-index.html',
        'collections/ExchangeRates',
        'models/widget',
        'text!../../js/data/currency.json',
        'css!../../css/pages/page-index',
        'css!../../css/ext/widget-style',
        'bootstrapcolorpicker',
        'css!../../plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min'
    ],
    function($, _, Backbone,_helper,_model, _itemTemplate,_collection,_widgetModel,_currData){
        return Backbone.View.extend({
            model:new _model(),
            widgetModel : new _widgetModel(),
            currData : $.parseJSON(_currData),
            events : {
                'click #btnWidgetGen' : 'btnWidgetGenClickHandler',
                'click #btnCopyToClipboard' : 'btnCopyToClipboardClickHandler'
            },
            el : _helper.appContainerElement(),
            initialize : function(){
                this.collection = new _collection();
                this.template = _.template(_itemTemplate);
                this.collection.on("add", this.renderItem, this);
                // fired on collection.fetch()
                this.collection.on("reset", this.render, this);
            },
            render :function(){
                _helper.renderView(this);
                $('.color').colorpicker({format: 'rgba',customClass: 'colorpicker-2x'});
                this.collection.each(this.renderItem, this);
                require(['fx'],function(fx){
                    window.fx = fx;
                });
                return;
            },
            renderItem: function(group) {
                $_curr = group.get(0);
                $currDetails = $.grep(this.currData,function(item){if(item[0] == $_curr)return item;});
                $('select#widgetBaseCurr').append($("<option/>", {
                        value: group.get('0'),
                        text: group.get('0')+' - '+$currDetails[0][1],
                        'data-value' : group.get('1')
                })
                );
            },
            btnWidgetGenClickHandler : function(){
                this.widgetModel.widgetTitle = this.$('#widgetTitle').val();
                this.widgetModel.widgetTitleClr = this.$('#widgetTitleClr').val();
                this.widgetModel.widgetTitleBgClr = this.$('#widgetTitleBgClr').val();
                this.widgetModel.widgetBodyBgClr = this.$('#widgetBodyBgClr').val();
                this.widgetModel.widgetResultClr = this.$('#widgetResultClr').val();
                this.widgetModel.widgetResultBgClr = this.$('#widgetResultBgClr').val();
                this.widgetModel.widgetBaseCurr = this.$('#widgetBaseCurr').val();
                this.widgetModel.widgetFooterBgClr = this.$('#widgetFooterBgClr').val();
                this.widgetModel.widgetFooterImg = this.$('#widgetFooterImg').val();
                this.widgetModel.widgetFooterUrl = this.$('#widgetFooterUrl').val();
                this.widgetModel.setVals();
                this.$('#widgetEmbedCode').val(this.widgetModel.widgetEmbedCode);
                $('div#previewPanel').empty().append(this.widgetModel.widgetEmbedCode);
            },
            btnCopyToClipboardClickHandler : function(){
                var text = this.$("textarea#widgetEmbedCode").val();
                console.log(text);

                // first attempt => data is successfully saved to copyEvent
                /*var copyEvent = new ClipboardEvent('copy', { dataType: 'text/plain', data: text } );
                 console.log(copyEvent);
                 document.dispatchEvent(copyEvent);*/

                // ClipboardEvent is not recognized by IE11
                var clip = new ClipboardEvent('copy');
                clip.clipboardData.setData('text/plain', "test");
                clip.preventDefault();
                clip.returnValue = false;

                // *********************************** //
                // data is successfully retrieved here //
                // *********************************** //
                console.log(clip.clipboardData.getData('text/plain'));

                // *** > dispatching not sure how this works. seems not working.
                //e.target.dispatchEvent(clip);
                document.dispatchEvent(clip);


                console.log("finished dispatching event");
            }
        });
    }
);
