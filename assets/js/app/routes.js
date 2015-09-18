/**
 * Created by Administrator on 6/13/2015.
 */
define(
    ["jquery", "underscore", "backbone","helper/appHelper"],
    function ($, _, Backbone,helper) {
        return {
            initialize: function () {
                var myRouter = Backbone.Router.extend({
                    viewCollection : [],
                    routes: {
                        '' : 'indexPageHandler',
                        'action': 'actionHandler',
                        'process': 'processHandler',
                        'post/id/:id' : 'postHandler',
                        '*notFound': 'pageNotFoundHandler'
                    },
                    indexPageHandler : function(){
                        console.log('indexPage handler triggered');
                        require(
                            ['views/page-index'],
                            function(_pageindex){
                                var args = {
                                    fragment : Backbone.history.getFragment()
                                };
                             //   helper.dump(window.location,'body');
                             // helper.dump(this.router,'body');
                                return this.router.setCurrentView('_pageindex',_pageindex,args);
                            }
                        );
                    },
                    /* pageNotFound Handler method
                     * To handle request state 404
                     * */
                    pageNotFoundHandler : function(){
                        //console.log('Page not found handler triggered');
                        require(
                            ['views/page-404'],
                            function(_page404){
                                var args = {
                                    fragment : Backbone.history.getFragment()
                                };
                                return this.router.setCurrentView('_page404',_page404,args);
                            }
                        );

                    },
                    /* pageNotFound Handler method -ends*/
                    actionHandler: function () {
                        console.log('action handler triggered');
                    },
                    processHandler: function () {
                        console.log('process handler triggered');
                    },
                    postHandler : function(postid){
                        console.log('Post id:'+postid);
                    },
                    setCurrentView : function(viewName,view){
                        if(!_.isUndefined(this.viewCollection[viewName])){
                            view = this.viewCollection[viewName];
                        }
                        else{
                            view = new view();
                            console.log(view.model.name + ' has been initialized.');
                        }
                        if(!_.isUndefined(arguments[2])){
                            return this.viewCollection[viewName] = helper.createNewView(view,arguments[2]);
                        }
                        return this.viewCollection[viewName] = helper.createNewView(view);
                    }

                });
                router = new myRouter();
                Backbone.history.start();
               // return router;
            }
        };
    }
);
