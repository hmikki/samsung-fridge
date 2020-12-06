



(function($) {
    window.threedfw=function(){}
    threedfw.check3dfwvisibility = function(gltdid) {
        var elementTop = FlixjQ(gltdid).offset().top-200;
        var elementBottom = elementTop + FlixjQ(gltdid).height();
        var viewportTop = FlixjQ(window).scrollTop();
        var viewportBottom = viewportTop + FlixjQ(window).height();
        if(elementBottom<0)
            return true
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    threedfw.init3dfw=function(this3dfw){
        //log2('init3dfw');

        var fwurl=this3dfw.attr('data-fwurl');
        var Tempfwurl=this3dfw.attr('data-fwurl');

        if(location.href.search('&live=0')!=-1){
            fwurl=fwurl.replace('media.flixfacts.com/3d/3dfw/', 'dev-delivery.flix360.com/delivery/static/3dfw/index.php')
        }
        if(location.href.search('&webarlive=0')!=-1 || location.href.search('&3dfwlive=0')!=-1){
            fwurl=fwurl.replace('d3nkfb7815bs43.cloudfront.net', 'stage-eyekandyplayer.herokuapp.com');      
        }        

        //no tracking retailer - remove parameters p and d - keep language
        if (typeof FlixjQ.fn.logging!='undefined' && typeof FlixjQ.fn.logging.noTracking!='undefined' && FlixjQ.fn.logging.noTracking==true) {
            fwurl=fwurl.replace('&p=','&p-no=')
            fwurl=fwurl.replace('&d=','&d-no=')
        }

        if (fwurl.search('null')!=-1) {
            fwurl=fwurl.replace(/null/g, '');
        }

        if(this3dfw.attr('data-fwurl').search('&showWebarButton=Y')!=-1){
            fwurl+='&showWebarButton=Y'
        }

        var customWebarDistributors=['&d=75&','&d=184&','&d=664&','&d=7416&','&d=219&','&d=16295&','&d=353&','&d=179&','&d=620&','&d=4150&','&d=78&','&d=6555&','&d=13055&','&d-no=205&','&d-no=4904&'];
        if (customWebarDistributors.some(distID => fwurl.includes(distID))) {
            fwurl+='&disticon=y'
        }

         /* HP new webar */
         if(this3dfw.attr('data-fwurl').search('d=16035')!=-1){
            fwurl=fwurl.replace('&showWebarButton=N','')
            fwurl+='&showWebarButton=Y'
            fwurl+='&disticon=y'
        }

        var HpDistributors=['&d=16422&','&d=16423&','&d=16424&','&d=16425&','&d=16426&','&d=16427&','&d=16428&','&d=16591&','&d=16592&']

        if (HpDistributors.some(distID => Tempfwurl.includes(distID))) {
            fwurl=fwurl.replace('&showWebarButton=N','')
            fwurl+='&showWebarButton=Y'
            fwurl+='&disticon=y'
        }
        

        var topurl=(window.location != window.parent.location)? document.referrer : document.location.href;

            topurl=topurl.replace(/&/g, '|and');
            topurl=topurl.replace(/\/\//g, '|for');
            topurl=topurl.replace(/\?/g, '|que');
            topurl=topurl.replace(/\:/g, '|dub');
            topurl=topurl.replace(/\=/g, '|is');
            topurl=topurl.replace(/\#/g, '|hash');
            topurl=topurl.replace(/\%/g, '|per');
            fwurl+='&pn='+topurl;

        var sid=''
        if(typeof FlixjQ.fn.inPage!='undefined')
            sid=FlixjQ.fn.inPage.data.session_id
        if(typeof FlixjQ.fn.hideMinisite!='undefined')
            sid=FlixjQ.fn.hideMinisite.data.session_id

        fwurl+='&sid='+sid;


        if(FlixjQ('#flix-mbl-page').length>0)
            fwurl+='&mot=1'
        if(FlixjQ.fn.logging && FlixjQ.fn.logging.trackingDomain)
            fwurl +='&base='+FlixjQ.fn.logging.trackingDomain

        var fwcss='#flix_selector_3d.flix-3d-fw-hotspot{max-width:1000px;margin: 0 auto;}div#flix_selector_3d div#flix-3dfwcontainer{display:none;height:0;margin:40px 0 0px 0;padding-bottom:76.25%;position:relative;overflow-y:hidden;-webkit-overflow-scrolling:touch!important;width:100%}div#flix_selector_3d iframe#flix-3dfwiframe{border:0;height:100%;left:0;min-width:100%;max-width:100%;position:absolute;overflow:hidden;top:0;width:100%;width:1px;min-width:100%}@media(max-width:600px){#flix_selector_3d #flix-3dfwcontainer{margin:0}}'

        //moves the &showqrpopup=1 at the end
        if(fwurl.search('&showqrpopup=1')!=-1){
            fwurl=fwurl.replace('&showqrpopup=1','')
            fwurl=fwurl+'&showqrpopup=1'
        }

        var lan=threedfw.flixGetUrlParameter('l', fwurl)
        var newlan=threedfw.flixCheckIso(lan) || lan
        fwurl=fwurl.replace('l='+lan, 'l='+newlan)
        
        if( typeof flixhotspot!='undefined' && typeof flixhotspot.data!='undefined' &&  typeof flixhotspot.data.ab_data!='undefined' && typeof flixhotspot.data.ab_data['cookie']!='undefined' && flixhotspot.data.ab_data.expire !== 'expired') {
            fwurl +="&ab="+flixhotspot.data.ab_data.tst_id+"&abr="+flixhotspot.data.ab_data.resource_ref+"&abid="+flixhotspot.data.ab_data['cookie'].abid;      
        }

        if (location.protocol == "http:") {
            fwurl=fwurl.replace('https', 'http')
        }
        
        var css = FlixjQ("<span />", {
            html: '&shy;<style>' + fwcss + '</style>'
          }).appendTo("#flix-3dfwcontainer");

        var fwiframe='<iframe id="flix-3dfwiframe" src="'+fwurl+'" scrolling="no" allowfullscreen="true" ></iframe>'

        if(!this3dfw.parent().find('#flix-3dfwiframe').length){

            this3dfw.after(fwiframe).show();
            this3dfw.parent().show()
        }

    }


    threedfw.flixGetUrlParameter = function (sParam,inputurl) {
        inputurl=inputurl.split('?')
        
        var
            url=inputurl[1]
            ,   sPageURL=decodeURIComponent(url)
            ,   sURLVariables=sPageURL.split('&')
            ,   sParameterName
            ,   i
        ;

        for (i=0; i < sURLVariables.length; i++) {
            sParameterName=sURLVariables[i].split('=');
            if (sParameterName[0]===sParam) {
                return sParameterName[1]===undefined ? true : sParameterName[1];
            }
        }
    };
    //change language to main 
    threedfw.flixCheckIso= function(language_to_search){
        
        var languages = {
            'ar': ['ar','a1','ae',],
            'de': ['de','at','l1','s4'],
            'dk': ['dk'],
            'en': ['en','ap','au','c1','b1','d7','b5','e9','c5','e8','c6','d9','eg','t5','eu','d4','d5','gh','d1','d8','c7','e1','in','e2','ie','e3','c8','j1','ke','e4','k1','t1','l3','b3','m1','nz','c9','ng','o1','pk','p1','e5','f9','q1','d3','d2','b7','za','s7','b8','b9','e6','t4','u1','us','d6','e7','bg', 'cz', 'lv', 'lt', 'id', 'kw', 'lb'],
            'es': ['f4','bo','cl','f5','ec','f8','gu','hn','jm','t2','mx','ni','pa','py','pe','f7','tt','uy','f6', 'cr'],
            'fi': ['fi'],
            'fr': ['fr','b4','c4','l2','ma','s5'],
            'hu': ['hu'],
            'it': ['it','s6'],
            'nl': ['nl','be'],
            'no': ['no'],
            'pt': ['pt','br'],
            'pl': ['pl'],
            'ro': ['ro'],
            'rs': ['rs'],
            'ru': ['ru'],
            'sk': ['sk'],
            'sv': ['sv'],
            'tr': ['tr'],
            'zh': ['zh','hk','tw',]
        };

        //missing languages
        // al= albanian
        // il = hebrew lan
        // rs = serbian
        

        var found_iso_code = '';
        for (var iso_code in languages) {
            if(iso_code === language_to_search || languages[iso_code].indexOf(language_to_search) > -1) {
                found_iso_code = iso_code;
                //will never be called - have to use for/of! or just for loop.
                break;
            }
        }
        
        return found_iso_code
    }

    threedfw.flixDetectWebGLContext=function(){

        // Create canvas element. The canvas is not added to the
        // document itself, so it is never displayed in the
        // browser window.
        var canvas = document.createElement("canvas");
        // Get WebGLRenderingContext from canvas element.
        var gl = canvas.getContext("webgl")
            || canvas.getContext("experimental-webgl");
        // Report the result.
        if (gl && gl instanceof WebGLRenderingContext) {
            //console.log("Your browser supports WebGL.")
            if(!!window.MSInputMethodContext && !!document.documentMode){
                  //IE11 detected
                  console.log("This application does not work on IE11 as it requires more recent webGL.");
                  if(location.href.search('minisite/')!=-1) threedfw.hideMinisite();
                  return false;
            }else{
                  return true;
            }
        } else {
            console.log("Failed to get WebGL context. Your browser or device may not support WebGL.")

            //hide minisite tab
            if(location.href.search('minisite/')!=-1)
                threedfw.hideMinisite();

            return false
        }
    }

    threedfw.find3dfw=function(){
        FlixjQ('input#flix-3dfwsrc').each(function(i){
            var this3dfw=FlixjQ(this)
            var fwvisible= threedfw.check3dfwvisibility(this3dfw.parent().parent())

            if(fwvisible==true && this3dfw.parent().find('#flix-3dfwiframe').length==0){
                threedfw.init3dfw(this3dfw);
            }
        });
    }

    threedfw.hideMinisite=function(){
        var three3index=FlixjQ('#flix-3dfwcontainer').closest('.ui-tabs-panel').index()-1;
        FlixjQ('.ui-tabs-nav li:eq('+three3index+')').hide()
        if(three3index==0 && FLixjQ('.ui-tabs-nav li').length>1){
            FlixjQ('.ui-tabs-panel:eq(0)').hide()
            FlixjQ('.ui-tabs-panel:eq(1)').show()
        }

        FlixjQ('.inpage_selector_3d_fw').hide();
    }

    FlixjQ(document).ready(function(){
        if(threedfw.flixDetectWebGLContext()){



            FlixjQ(window).scroll(function() {
                threedfw.find3dfw();
            });
            FlixjQ('body').bind('touchmove', function(e) {
                threedfw.find3dfw();
            });


            threedfw.find3dfw();
            if(typeof FlixjQ.fn.on=='undefined')
                FlixjQ.fn.on=FlixjQ.fn.live;
            FlixjQ(document).on('click', '#flix_product_view3dfw, #flix_desktop_webar', function(){

                var wait3DFW = setInterval(int3DFW, 500);

                function int3DFW() {

                    if(FlixjQ('.share-bubble #flix-3dfwsrc').length){
                        FlixjQ('.share-bubble #flix-3dfwsrc').parent().show();
                        threedfw.find3dfw();
                        clearInterval(wait3DFW);
                    }
                }
            })

        }
    });



})(FlixjQ);
