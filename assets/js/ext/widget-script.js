/**
 * Created by Anushka K R on 9/9/2015.
 * URL : http://www.anushkar.com
 * Elance : http://anushkarajasingha.elance.com
 */
function widgetscript() {
   $(document).ready(function(){
       console.log('widgetscript running../ ccwidgetid - '+ccwidgetid);
       $cssurl = $('div#ccwidget_'+ccwidgetid).data('widget-srv-url')+'/assets/css/ext/widget-style.css?ccwidgetid='+ccwidgetid;
       if (!$("link[href='"+$cssurl+"']").length)
           $('head').append($('<link/>').attr({
               href: $cssurl,
               type: 'text/css',
               media: 'all',
               rel: 'stylesheet'
           }));
       $panel = $('<div/>').attr({
           id:'pnl_ccwidget_'+ccwidgetid
       }).addClass('widget-panel widget-panel-success');
       $heading = $('<div/>').html($('div#ccwidget_'+ccwidgetid).data('widget-title')).addClass('widget-panel-heading')
           .css({
               'color':$('div#ccwidget_'+ccwidgetid).data('widget-titleclr'),
               'background-color':$('div#ccwidget_'+ccwidgetid).data('widget-titlebgclr')
           });
       $body = $('<div/>').addClass('widget-panel-body')
           .css({
               'background-color':$('div#ccwidget_'+ccwidgetid).data('widget-bodybg')
           });
       $formElm = $('<form/>').attr({
           role:'form',
           id:'widget_form_'+ccwidgetid
       }).addClass('form-horizontal');
       $formgroup = $('<div/>').addClass('widget-form-group');
       $inputVal = $('<input/>').attr({
           type:'text',
           placeholder:'0.00',
           id:'widget_input_'+ccwidgetid
       }).addClass('widget-input-lg widget-form-control');
       $inputFromCurr = $('<select/>').attr({
           id:'widget_selfrom_'+ccwidgetid
       }).addClass('currency selectpicker show-tick widget-form-control').append($('<option/>').attr({value:'0'}).html('From'));
       $inputToCurr = $('<select/>').attr({
           id:'widget_selto_'+ccwidgetid
       }).addClass('currency selectpicker show-tick widget-form-control').append($('<option/>').attr({value:'0'}).html('To'));
       $footer = $('<div/>').addClass('widget-panel-footer')
           .css({
               'background-color':$('div#ccwidget_'+ccwidgetid).data('widget-resbgclr')
           });
       $result = $('<div/>').addClass('row-span widget-text-center').append(
           $('<h2/>').attr({
               id:'widget_result_'+ccwidgetid
           }).html('0.00')
       )
           .css({
               'color':$('div#ccwidget_'+ccwidgetid).data('widget-resclr')
           });
       $footer.append($result);
       $formElm.append($formgroup.clone().append($inputVal));
       $formElm.append($formgroup.clone().append($inputFromCurr));
       $formElm.append($formgroup.clone().append($inputToCurr));
       $body.append($formElm);
       $panel.append($heading).append($body).append($footer);
       $('div#ccwidget_'+ccwidgetid).prepend($panel);
       $('select#widget_selfrom_'+ccwidgetid+'.selectpicker').change(selfromchange);
       $('select#widget_selto_'+ccwidgetid+'.selectpicker').change(seltochange);
       $inputVal.change(seltochange);
       loadRates();
   });
}

function loadRates(){
    $basecurr = $('div#ccwidget_'+ccwidgetid).data('widget-basecurr');
    $basecurr = $basecurr != '0' ? "?base="+$basecurr : '';
    $currData = $.parseJSON('[["ALL","Albania Lek","Lek","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol76-101-107.gif"],["AFN","Afghanistan Afghani","؋","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1547.gif"],["ARS","Argentina Peso","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["AWG","Aruba Guilder","ƒ","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol402.gif"],["AUD","Australia Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["AZN","Azerbaijan New Manat","ман","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1084-1072-1085.gif"],["BSD","Bahamas Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["BBD","Barbados Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["BYR","Belarus Ruble","p.","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol112-46.gif"],["BZD","Belize Dollar","BZ$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol66-90-36.gif"],["BMD","Bermuda Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["BOB","Bolivia Boliviano","$b","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36-98.gif"],["BAM","Bosnia and Herzegovina Convertible Marka","KM","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol75-77.gif"],["BWP","Botswana Pula","P","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol80.gif"],["BGN","Bulgaria Lev","лв","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1083-1074.gif"],["BRL","Brazil Real","R$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol82-36.gif"],["BND","Brunei Darussalam Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["KHR","Cambodia Riel","៛","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol6107.gif"],["CAD","Canada Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["KYD","Cayman Islands Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["CLP","Chile Peso","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["CNY","China Yuan Renminbi","¥","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol165.gif"],["COP","Colombia Peso","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["CRC","Costa Rica Colon","₡","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8353.gif"],["HRK","Croatia Kuna","kn","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-110.gif"],["CUP","Cuba Peso","₱","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8369.gif"],["CZK","Czech Republic Koruna","Kč","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol75-269.gif"],["DKK","Denmark Krone","kr","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-114.gif"],["DOP","Dominican Republic Peso","RD$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol82-68-36.gif"],["XCD","East Caribbean Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["EGP","Egypt Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["SVC","El Salvador Colon","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["EEK","Estonia Kroon","kr","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-114.gif"],["EUR","Euro Member Countries","€","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8364.gif"],["FKP","Falkland Islands (Malvinas) Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["FJD","Fiji Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["GHC","Ghana Cedi","¢","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol162.gif"],["GIP","Gibraltar Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["GTQ","Guatemala Quetzal","Q","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol81.gif"],["GGP","Guernsey Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["GYD","Guyana Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["HNL","Honduras Lempira","L","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol76.gif"],["HKD","Hong Kong Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["HUF","Hungary Forint","Ft","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol70-116.gif"],["ISK","Iceland Krona","kr","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-114.gif"],["INR","India Rupee","","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbolINR.gif"],["IDR","Indonesia Rupiah","Rp","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol82-112.gif"],["IRR","Iran Rial","﷼","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol65020.gif"],["IMP","Isle of Man Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["ILS","Israel Shekel","₪","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8362.gif"],["JMD","Jamaica Dollar","J$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol74-36.gif"],["JPY","Japan Yen","¥","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol165.gif"],["JEP","Jersey Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["KZT","Kazakhstan Tenge","лв","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1083-1074.gif"],["KPW","Korea (North) Won","₩","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8361.gif"],["KRW","Korea (South) Won","₩","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8361.gif"],["KGS","Kyrgyzstan Som","лв","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1083-1074.gif"],["LAK","Laos Kip","₭","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8365.gif"],["LVL","Latvia Lat","Ls","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol76-115.gif"],["LBP","Lebanon Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["LRD","Liberia Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["LTL","Lithuania Litas","Lt","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol76-116.gif"],["MKD","Macedonia Denar","ден","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1076-1077-1085.gif"],["MYR","Malaysia Ringgit","RM","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol82-77.gif"],["MUR","Mauritius Rupee","₨","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8360.gif"],["MXN","Mexico Peso","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["MNT","Mongolia Tughrik","₮","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8366.gif"],["MZN","Mozambique Metical","MT","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol77-84.gif"],["NAD","Namibia Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["NPR","Nepal Rupee","₨","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8360.gif"],["ANG","Netherlands Antilles Guilder","ƒ","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol402.gif"],["NZD","New Zealand Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["NIO","Nicaragua Cordoba","C$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol67-36.gif"],["NGN","Nigeria Naira","₦","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8358.gif"],["KPW","Korea (North) Won","₩","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8361.gif"],["NOK","Norway Krone","kr","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-114.gif"],["OMR","Oman Rial","﷼","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol65020.gif"],["PKR","Pakistan Rupee","₨","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8360.gif"],["PAB","Panama Balboa","B/.","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol66-47-46.gif"],["PYG","Paraguay Guarani","Gs","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol71-115.gif"],["PEN","Peru Nuevo Sol","S/.","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol83-47-46.gif"],["PHP","Philippines Peso","₱","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8369.gif"],["PLN","Poland Zloty","zł","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol122-322.gif"],["QAR","Qatar Riyal","﷼","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol65020.gif"],["RON","Romania New Leu","lei","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol108-101-105.gif"],["RUB","Russia Ruble","руб","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1088-1091-1073.gif"],["SHP","Saint Helena Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["SAR","Saudi Arabia Riyal","﷼","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol65020.gif"],["RSD","Serbia Dinar","Дин.","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1044-1080-1085-46.gif"],["SCR","Seychelles Rupee","₨","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8360.gif"],["SGD","Singapore Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["SBD","Solomon Islands Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["SOS","Somalia Shilling","S","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol83.gif"],["ZAR","South Africa Rand","R","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol82.gif"],["KRW","Korea (South) Won","₩","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8361.gif"],["LKR","Sri Lanka Rupee","₨","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8360.gif"],["SEK","Sweden Krona","kr","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol107-114.gif"],["CHF","Switzerland Franc","CHF","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol67-72-70.gif"],["SRD","Suriname Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["SYP","Syria Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["TWD","Taiwan New Dollar","NT$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol78-84-36.gif"],["THB","Thailand Baht","฿","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol3647.gif"],["TTD","Trinidad and Tobago Dollar","TT$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol84-84-36.gif"],["TRY","Turkey Lira","","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbolTRY.gif"],["TRL","Turkey Lira","₤","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8356.gif"],["TVD","Tuvalu Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["UAH","Ukraine Hryvnia","₴","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8372.gif"],["GBP","United Kingdom Pound","£","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol163.gif"],["USD","United States Dollar","$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36.gif"],["UYU","Uruguay Peso","$U","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol36-85.gif"],["UZS","Uzbekistan Som","лв","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol1083-1074.gif"],["VEF","Venezuela Bolivar","Bs","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol66-115.gif"],["VND","Viet Nam Dong","₫","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol8363.gif"],["YER","Yemen Rial","﷼","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol65020.gif"],["ZWD","Zimbabwe Dollar","Z$","http://www.xe.com/themes/xe/images/pages/curSymbols/curSymbol90-36.gif"]]');

    $.getJSON('http://api.fixer.io/latest'+$basecurr,{},function($response){
        $.each(Object.keys($response.rates).map(function(key) { return [key, $response.rates[key]] }),function(){
            $_curr = this[0];
            $currDetails = $.grep($currData,function(item){if(item[0] == $_curr)return item;});
            $('.selectpicker.widget-form-control').append(
                $("<option/>", {
                    value: this[0],
                    text: this[0]+' - '+$currDetails[0][1],
                    'data-value' : this[1],
                    'data-sign' : $currDetails[0][2],
                    'data-img' : $currDetails[0][3]
                })
            );
        });
        $('select#widget_selfrom_'+ccwidgetid).append(
            $("<option/>", {
                value: $response.base,
                text: $response.base+' - '+$.grep($currData,function(item){if(item[0] == $response.base)return item;})[0][1],
                'data-value' : 1,
                'data-sign' : $.grep($currData,function(item){if(item[0] == $response.base)return item;})[0][2],
                'data-img' : $.grep($currData,function(item){if(item[0] == $response.base)return item;})[0][3],
                selected : 'selected'
            })
        );

        if(typeof fx != 'undefined'){
            fx.base = $response.base;
            fx.rates = $response.rates;// Object.keys($response.rates).map(function(key) { return [key, $response.rates[key]] });
        }
        else{ console.log('MoneyJs has not been loaded.')}
    });
}
function selfromchange(){
   // console.log($(this)[0].id);
    $('div#ccwidget_'+ccwidgetid).data('widget-basecurr',$(this).val());
    setFxSettings();
    calRates();
}
function seltochange(){
    calRates();
}

function calRates(){
    $from = $('select#widget_selfrom_'+ccwidgetid).val();
    $to = $('select#widget_selto_'+ccwidgetid).val();
    $sign = $('select#widget_selto_'+ccwidgetid).find('option:selected').data('sign');
   /* $img = $('<img/>').attr({
        src : $('select#widget_selto_'+ccwidgetid).find('option:selected').data('img'),
        alt : $to
    });*/
    /*$imgcntr = $('<span/>').addClass('curr-sign').css({
        'background-image' : "url('"+$('select#widget_selto_'+ccwidgetid).find('option:selected').data('img')+"')"
    }); //.append($img);*/
    if($from !=0 && $to !=0 ) {
        $res = fx.convert($('input#widget_input_' + ccwidgetid).val(), {from: $from, to: $to});
        $res =  parseFloat($res, 10).toFixed(3);
        $('h2#widget_result_' + ccwidgetid).html($res + ' (' + $to+')');
       // $('h2#widget_result_' + ccwidgetid).prepend($imgcntr);
    }
}

function setFxSettings(){
    $basecurr = $('div#ccwidget_'+ccwidgetid).data('widget-basecurr');
    $basecurr = $basecurr != '0' ? "?base="+$basecurr : '';
    $.getJSON('http://api.fixer.io/latest'+$basecurr,{},function($response){
        fx.base = $response.base;
        fx.rates = $response.rates ;// Object.keys($response.rates).map(function(key) { return [key, $response.rates[key]] });
    });
}

// Only do anything if jQuery isn't defined
function getScript(url, success) {
    var script = document.createElement('script');
    script.src = url;
    var head = document.getElementsByTagName('head')[0],
        done = false;
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
            // callback function provided as param
            success();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        };
    };
    head.appendChild(script);
};
if (typeof jQuery == 'undefined') {
    //thisPageUsingOtherJSLibrary = false;
    if (typeof $ == 'function') {
        // warning, global var
        thisPageUsingOtherJSLibrary = true;
    }


    getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', function () {
        if (typeof jQuery == 'undefined') {
            console.log('Unable to load the jQuesry library');
        } else {
            // jQuery loaded! Make sure to use .noConflict just in case
            widgetscript();
            /*  if (thisPageUsingOtherJSLibrary) {
             console.log('Unable to load jQuery.')
             } else {
             // Use .noConflict(), then run your jQuery Code
             $.noConflict();
             widgetscript();
             }*/
        }
    });


} else { // jQuery was already loaded
    widgetscript();
};
function loadmoneyApi(){
    var _url = document.getElementById("ccwidget_"+ccwidgetid).getAttribute("data-widget-srv-url");
    getScript(_url+'/assets/js/lib/money.js', function () {
        var x = 1;
    });
}
loadmoneyApi();


