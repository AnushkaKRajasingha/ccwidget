require.config({
    baseUrl: "assets/js/lib",
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery',
            //'css!https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min'
                'css!https://bootswatch.com/cyborg/bootstrap.min' // ../../css/bootstrap/bootstrap.min',
               // 'css!../../css/bootstrap/bootstrap-fix',
                //'css!../../css/bootstrap/bootstrap-reset'
            ],
            exports: 'bootstrap'
        },
        'bootstrapcolorpicker':{
            dep:['jquery','bootstrap'],
            exp:'Color'
        }

    },
    paths: {
        app: '../app',
        models : "../models",
        views  : "../views",
        collections  : "../collections",
        helper : "../helper",
        templates : "../templates",
        plugins : "../../plugins",
        fx : "../lib/money",
        'bootstrapcolorpicker' : "../../plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min"
    },
    subDir : '/ccwidget'
});
require(
    ['jquery','app/routes','bootstrap','css!../../css/font-awesome/4.0.3/css/font-awesome'],
    function ($,routes) {
        routes.initialize();
    },
    function () { 
        console.log('Error app.js');
    }
);