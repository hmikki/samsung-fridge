;(function(){
    var 
      _flixLoader = {
        mappingTable:{
          'data-flix-distributor' : {'inpage':'','button':'d','value':null,'hotspot':'d'},
          'data-flix-language' : {'inpage':'','button':'l','value':null,'hotspot':'l'},
          'data-flix-mpn' : {'inpage':'mpn','button':'mpn','value':null,'hotspot':'mpn'},
          'data-flix-ean' : {'inpage':'ean','button':'ean','value':null,'hotspot':'ean'},
          'data-flix-url' : {'inpage':'url','button':'url','value':null, 'hotspot':'url'},
          'data-flix-sku' : {'inpage':null,'button':'sku','value':null, 'hotspot':'sku'},
          'data-flix-button' : {'inpage':null,'button':'dom','value':null, 'hotspot':null},
          'data-flix-inpage' : {'inpage':null,'button':null,'value':null, 'hotspot':null},
          'data-flix-button-image' : {'inpage':null,'button':'img','value':null, 'hotspot':null},
          'data-flix-energylabel' : {'inpage':'energylabel','button':'energylabel','value':null, 'hotspot':null},
          'data-flix-embed' : {'inpage':null,'button':'embed','value':null, 'hotspot':null},
          'data-flix-brand' : {'inpage':'brand','button':'brand','value':null, 'hotspot':'brand'},
          'data-flix-fallback-language' : {'inpage':'fl','button':'fl','value':null, 'hotspot':'fl'},
          'data-flix-price' : {'inpage':null,'button':'p','value':null, 'hotspot':'p'},
          'data-flix-hotspot': {'inpage': null, 'button': null, 'value': null, 'hotspot':'hotspot'},
          'data-flix-autoload': {'inpage': null, 'button': null, 'value': null, 'hotspot':null},
          'data-flix-mobilesite' : {'inpage':'ms','button':'ms','value':null, 'hotspot':null},
          'data-flix-rec' : {'inpage':null,'button':null,'value':null, 'hotspot':null,'model':{"alternative":"m3","crossell":"m5","upsell":"m6"}}
        },
        instance:null,
    ab: {"d":{"78":"1","145":"1","161":"1","174":"1","179":"1","184":"1","219":"1","228":"1","291":"1","353":"1","523":"1","604":"1","741":"1","859":"1","944":"1","986":"1","1324":"1","1326":"1","1764":"1","2522":"1","2754":"1","3924":"1","3926":"1","3986":"1","4124":"1","4132":"1","4874":"1","5293":"1","5375":"1","5758":"1","5759":"1","5828":"1","5848":"1","5950":"1","6050":"1","6305":"1","6453":"1","6753":"1","6772":"1","6793":"1","6834":"1","6881":"1","7434":"1","7435":"1","7454":"1","8692":"1","9198":"1","9223":"1","9269":"1","10589":"1","11100":"1","11346":"1","11731":"1","12529":"1","12530":"1","12959":"1","13131":"1","13603":"1","13707":"1","13829":"1","14549":"1","14813":"1","15119":"1"},"d_hotspot":{"795":"1","15274":"1","5759":"1","4124":"1"},"button":{"mpn":{},"ean":{}},"inpage":{"mpn":{"ga00439-es":"1","ga00439-no":"1","ga00439-fr":"1","googlechromecast":"1","ga3a00459a65":"1","ga00823-no":"1","4924989":"1","ga00822-no":"1","ga00341-no":"1","c1088078":"1","ga3a00407a56":"1","ga00595-no":"1","ga00216-fr":"1","ga00210":"1","s3000bwno":"1","ga00516-no":"1","ga00515-no":"1","ga00516-es":"1","ga3a00411a12":"1","ga3a00239-a65-z01":"1","ga00515-es":"1","nc4100no":"1","goo0842776111388":"1","nc5100no":"1","google home":"1","ga00781-no":"1","ga00210-es":"1","ga00516-fr":"1","ga00638-es":"1","nc2100no":"1","nc1102no":"1","ga00638-no":"1","chromecast-ultra":"1","goo0811571018338":"1","goo0842776102386":"1","ga3a00486a06":"1","goo0842776110152":"1","ga3a00483a04":"1","ga00210-no":"1","goo0842776115430":"1","goo0193575000831":"1","goo0842776116376":"1","ga00158-nl":"1","ga00157-nl":"1","s3003lwno":"1","googlehomehuban":"1","nc5100gb":"1","goo0193575000923":"1","ga00216-no":"1","goo0842776115669":"1","goo0842776107633":"1","ga00781-es":"1","googlega00217cor":"1","hp14db0010nf":"1","hp15de0002nf":"1","m3109354":"1","hp14bca0004nf":"1","hp14db0005nf":"1","m2060834":"1","c423nabv0051v2":"1","m3363761":"1","ace4710180507546":"1","c1304831":"1","c1304826":"1","m3218118":"1","hp7141141004465":"1","ace0652733067067":"1","m3070954":"1","m3454075":"1","c523naa20007":"1","drx822w":"1","7188301220":"1","7188234370":"1","mkbr220000754":"1","7188285370":"1","7188234330":"1","dn162232djizx":"1","8293748781":"1","wty101434ci":"1","7712287640":"1","mkbr220000753":"1","bdf1410w":"1","60246":"1","g33500_i71612561650tiw10s_521":"1","nh.q8jer.004":"1","gx701lv-ds76":"1","90nr03b1-m02120":"1","nh.q7psa.002":"1","90nr03b1-m02110":"1","g512li-ss74":"1","nh.q82er.003":"1","90nr04d1-m02940":"1","nh.q7zsa.001":"1","g512lu-rs74":"1","nh.q7mer.003":"1","nh.q7yeb.007":"1","nh.q7jer.004":"1","90nr04a1-m01950":"1","82aw002uau":"1","g512lw-ws74":"1","g712lu-h7015t":"1","ph315-53-75xg":"1","gp65047":"1","9s7-17e822-023":"1","i7501-7623slv-pus":"1","nh.q7zaa.001":"1","81yt0017ru":"1","g515se_i7165121660tiw10s_121":"1","g515se_i785121650tiw10s_121":"1","msi4719072700058":"1","81y4006xru":"1","nh.q7mer.002":"1","nh.q80er.003":"1","81y4009crk":"1","g515se_i7165122060w10s_121":"1","9s7-16u822-023":"1","82d4004jsp":"1","nh.q7aaa.001":"1","9s7-17e822-021":"1","g512lv-hn090":"1","81y6004sru":"1","9s7-17e822-019":"1","9s7-17e722-252":"1","gu502lv-az058t":"1","9s7-16u822-019":"1","nhq8jef003":"1","9700-7281":"1","9700-6710":"1","9500-3825":"1","fx506lh-bq031t":"1","9s7-16u711-254":"1","1c2a9pa":"1","nhq8kef004":"1","9s7-16u711-204":"1","nh.q6wsa.001":"1","nh.q8ker.004":"1","a15viw_i7165122060w10s_121":"1","g315-5874":"1","a17fr_i716151270ww10s_121":"1","a15viw_i7165122070w10s_121":"1","g515-5973":"1","g315-5812":"1","81y6004xru":"1","nh.q7qaa.001":"1","g512lu-ds71-ca":"1","9s7-16r412-835":"1","g315-5829":"1","19a55ea":"1","9s7-16v112-403":"1","g712lv-rs74":"1","9500-3566":"1","9s7-17e711-018":"1","g515-5959":"1","gp75026":"1","208117":"1","9700-6703":"1","9s7-16w124-641":"1","msi9s716r412085":"1","9s7-17g321-466":"1","nh.q8jaa.001":"1","a15viw_i7325122080w10s_121":"1","pt315-52-7703":"1","g512li-ds71-ca":"1","9s7-16v211-056":"1","g712lv-h7007t":"1","9s7-17g321-465":"1","g512lv-hn037t":"1","9s7-16u822-017":"1","msi9s716r412693":"1","9s7-16u822-021":"1","rz09-03286e22":"1","g315-5935":"1","22v21ea":"1","nbinfo510r6888":"1","nh.q7yaa.001":"1","msi9s717e722401":"1","tuf506li-db71-ca":"1","1b9f4pa":"1","ned3080u19ia-1020g":"1","ned3080h19ia-1020g":"1","90yv0f93-m0nm00":"1","ne63070019p2-1041a":"1","ned3090s19sb-132ba":"1","ne63070s19p2-1041a":"1","fx571gtbq691t":"1","vcg20606dfppbo":"1","msi4719072623302":"1","hptg010008nf":"1","gv-n2060oc-6gd":"1","vcg16606sdfppb":"1","msi9s716w112693":"1","tuf505dt-hn459t":"1","meg4260568821103":"1","meg4260568821066":"1","auc4719331304683":"1","meg4260568821059":"1","gvn166soc6gd":"1","meg4423686711989":"1","meg0618119351151":"1","meg0729378242989":"1","gig4719331305505":"1","81sx00xvfr":"1","msi9s717f412283":"1","81ll00cbfr":"1","meg0725163666206":"1","fx571gtal692":"1","auc0727612232048":"1","meg0750875401913":"1","hp17cd0077nf":"1","meg4423980010269":"1","81ll001ufr":"1","rtx2070sgamingxt":"1","aoc4038986146494":"1","meg4260568822964":"1","gvn1650oc4gd":"1","meg0767578623184":"1","10g-p5-3883-kr":"1","81sx014qfr":"1","pny0751492634753":"1","m3648120":"1","gmo3701127503562":"1","c1332285":"1","gfgtx1660x6g":"1","c1304833":"1","81sx012ffr":"1","tuf705dtau040t":"1","c1304720":"1","112960520g":"1","acenhq5cef012":"1","nhq9bef00a":"1","meg4260568821127":"1","meg0727612232000":"1","meg4260568820991":"1","tuf505dval062t":"1","meg4260568821639":"1","sed4056763302512":"1","c1304891":"1","auc0748388901198":"1","nhq54ef03t":"1","hptg010032nf":"1","gv-n1656oc-4gd":"1","9s6b91551647":"1","gvn166sgamgoc6gd":"1","90yv0al1-m0na00":"1","acedge0hef10f":"1","vcg309024tfxmpb":"1","vcg16606sdfmpbo":"1","c1304917":"1","bunhptg010008nf":"1","gtx1650gamx4g":"1","ace4710180610963":"1","meg4260568821110":"1","ace4710180328073":"1","hp17cd1116nf":"1","90yv0cj1-m0na00":"1","444410493":"1","ik8951ap2":"1","ms148w":"1","rz83ap2":"1","rz245ap2":"1","ik3633ap2":"1","rz109ap2":"1","rz203ap2":"1","444410795":"1","tf40w":"1"},"ean":{"0842776104793":"1","0842776106186":"1","0842776106261":"1","0842776106193":"1","0842776106179":"1","0842776106445":"1","0811571018345":"1","0811571018321":"1","0842776106483":"1","0193575000237":"1","0842776111388":"1","0811571018895":"1","0193575004624":"1","0842776107275":"1","0193575004631":"1","0842776107015":"1","0193575004655":"1","3540260179643":"1","0193575000893":"1","0842776101945":"1","0813917020838":"1","0193575000244":"1","0193575000138":"1","0811571018369":"1","0811571016587":"1","0193575000183":"1","0842776105417":"1","0813917021224":"1","0813917021347":"1","0811571019465":"1","0193575000909":"1","0842776105424":"1","0193575000213":"1","0193575000800":"1","0811571018338":"1","0813917020869":"1","0813917020661":"1","0813917020852":"1","0193575000817":"1","0813917020418":"1","0842776105387":"1","0842776102386":"1","0842776111623":"1","0842776110152":"1","0842776107312":"1","0842776111005":"1","0811571019434":"1","0842776106896":"1","0842776111241":"1","0842776100665":"1","0842776115430":"1","0842776102393":"1","0193575004600":"1","0193575000831":"1","0842776116376":"1","0842776103451":"1","0842776102379":"1","0842776107633":"1","0842776100672":"1","0813917020845":"1","0193575004617":"1","0193575000169":"1","0842776104700":"1","0193575000923":"1","0842776106919":"1","0842776104441":"1","0842776115669":"1","0193575002040":"1","0811571016648":"1","0854448003907":"1","0854448003778":"1","4718017484398":"1","4718017495509":"1","4713883987370":"1","0193905913039":"1","0194441933864":"1","0194721148711":"1","0194721407283":"1","0193386637745":"1","3615993663995":"1","4718017407403":"1","4718017300902":"1","0193905646265":"1","0193808969058":"1","4713392793325":"1","4710180313734":"1","4718017595315":"1","4710180507546":"1","4713883987387":"1","4710180507478":"1","4710886017783":"1","4710180950120":"1","4710180358339":"1","4710180877618":"1","0194850305603":"1","7141141004465":"1","0193905305698":"1","0652733067067":"1","4718017477147":"1","4710180796179":"1","4718017106535":"1","5702016616958":"1","8690842157172":"1","8690842157134":"1","8690842108464":"1","8690842283178":"1","8690842186233":"1","8690842114533":"1","8690842367311":"1","8690842283161":"1","8690769371057":"1","8690842259487":"1","8690842161124":"1","8690842164149":"1","8690842076978":"1","8690842072543":"1","8690842057434":"1","8690842164163":"1","8690769371071":"1","8690769372115":"1","5944008918194":"1","8690842081057":"1","8690842041587":"1","8690842039997":"1","8690842236617":"1","8690842239311":"1","8690842161230":"1","8690842128493":"1","8690842257476":"1","8690842292989":"1","5944008914615":"1","8690842269363":"1","8690842086489":"1","8690842043529":"1","8690842072468":"1","8690842240263":"1","8690842283444":"1","8690842190469":"1","8690842108495":"1","8690842120848":"1","8690842229824":"1","8690842208133":"1","8690842095382":"1","8690842368868":"1","8690842111167":"1","8690842207822":"1","8690842018633":"1","8690842904981":"1","8690842207976":"1","8690842347665":"1","5944008918521":"1","5702016617214":"1","5702016604115":"1","5702016617481":"1","5702016369915":"1","5702016111828":"1","5702016109795":"1","5702016617801":"1","5702016618181":"1","5702016368260":"1","0195042499858":"1","0884116376514":"1","0194850719554":"1","4718017657396":"1","4719072720315":"1","4719072746995":"1","0195122259112":"1","4718017714242":"1","4710180884906":"1","4719072746988":"1","4710180869361":"1","0195122221140":"1","4718017714235":"1","4710180898323":"1","4710180930948":"1","0194850690709":"1","4718017711012":"1","0884116372912":"1","0195042384604":"1","4718017714266":"1","4718017694957":"1","4718017753937":"1","0193199852366":"1","0195042620153":"1","4719072720322":"1","4718017714259":"1","4719072720469":"1","4719072737849":"1","4718017718479":"1","0884116373001":"1","4719072700058":"1","0195122259051":"1","0884116373018":"1","4710180922103":"1","4718017711029":"1","0195042881646":"1","4718017670029":"1","4718017718486":"1","4710180864403":"1","4718017829205":"1","4719072720308":"1","4710886001928":"1","4718017829427":"1","4710180951929":"1","4710180869163":"1","4718017829373":"1","0195122255503":"1","4710180869200":"1","4710180869347":"1","0884116368649":"1","4719072707774":"1","4719072739041":"1","0884116368595":"1","4719072746964":"1","0884116368656":"1","4719072747398":"1","0195122189556":"1","4719072702311":"1","4719072709280":"1","0884116368663":"1","0193199775115":"1","4718017718042":"1","4718017708937":"1","4719072744052":"1","4719072737856":"1","8886419365204":"1","4710180995046":"1","0728238776022":"1","4719072739980":"1","4719072747787":"1","0195122241162":"1","4710562242102":"1","4710562242133":"1","4718017928618":"1","4710562241983":"1","4710562242027":"1","4710562242089":"1","4718017710473":"1","0751492624624":"1","4719072623302":"1","0194441693881":"1","4719331304263":"1","0751492632827":"1","4719072738945":"1","4718017693950":"1","4260568821103":"1","4260568821066":"1","4719331304683":"1","4260568821059":"1","4719331305888":"1","4423686711989":"1","0618119351151":"1","0729378242989":"1","4719331305505":"1","0194778245869":"1","4719072739577":"1","0194632922905":"1","0725163666206":"1","4718017710497":"1","0727612232048":"1","0750875401913":"1","0194850215742":"1","4423980010269":"1","0193386709480":"1","4719072658762":"1","4038986146494":"1","4260568822964":"1","4719331304645":"1","0767578623184":"1","4250812438317":"1","0195235080412":"1","0751492634753":"1","0194778620604":"1","3701127503562":"1","4718017875158":"1","4719072626686":"1","4710180286366":"1","0194778589246":"1","4718017670494":"1","0194850891588":"1","4895106289086":"1","4710180475906":"1","4710180967111":"1","4260568821127":"1","0727612232000":"1","4260568820991":"1","4718017589932":"1","4260568821639":"1","4056763302512":"1","4718017710534":"1","0748388901198":"1","4710886109815":"1","0194721314468":"1","4719331306922":"1","4719072627164":"1","4719331305932":"1","4712900744118":"1","4710180686593":"1","0751492639536":"1","0751492632698":"1","4718017707053":"1","4719072629298":"1","4710180610963":"1","4260568821110":"1","4710180328073":"1","0195122401986":"1","4718017262293":"1"}},"hotspot":{"mpn":{"125088803":"1","981-000812":"1","125200355":"1","910-005470":"1","941-000123":"1","910-005710":"1","5k45ssewh":"1","5k45ssbwh":"1","5ksm175pseca":"1","859991566430":"1","869991000860":"1","132106177":"1","ec685.m":"1","c1160061":"1","c1133113":"1","c1159956":"1","c1313565":"1","c1160056":"1","c1160157":"1","c1084841":"1","c1160062":"1","c1313143":"1","41395":"1","c1160163":"1","c1313519":"1","c1160095":"1","10913":"1","75273":"1","42095":"1","75257":"1","c1160151":"1","41392":"1","c1160162":"1","10915":"1","c1160089":"1","41394":"1","75271":"1","ep2220/10":"1","bre224/00":"1","hr2375/05":"1","c1009627":"1","gc6704/30":"1","phi8710103877424":"1","bhs377/00":"1","bhd029/00":"1","ep3246/70":"1","lm8012/60":"1","385566":"1","385567":"1","100-99091004-60":"1","elite active 75t navy":"1","elite 75t titanium black":"1","100-99091000-60":"1","100-99091003-60":"1","100-99091002-60":"1","elite active 75t mint":"1","100-99090001-60":"1","jab75t-er":"1","jabraeliteact75t-blk":"1","100-99090002-60":"1","jabraelite75t":"1","100-99091005-60":"1","100-99090000-60":"1","elite active 75t sienna":"1","75t":"1"},"ean":{"5099206085718":"1","5099206080263":"1","8697445992360":"1","5099206057302":"1","5099206085701":"1","5099206058996":"1","5099206066748":"1","5099206086944":"1","5099206087217":"1","5413184200701":"1","5413184200787":"1","5413184201609":"1","5413184200480":"1","8003437236365":"1","8003437203114":"1","0193015507258":"1","0193015507128":"1","0193015507388":"1","0192545603720":"1","8004399331198":"1","8004399331204":"1","8021098280312":"1","8004399331181":"1","8004399331167":"1","7332543660421":"1","7332543610891":"1","7332543658626":"1","7332543650408":"1","7332543621033":"1","7332543662449":"1","7332543546152":"1","7332543606313":"1","7332543510900":"1","7332543662418":"1","7332543705504":"1","7332543693603":"1","7332543650521":"1","7332543510566":"1","5702016618822":"1","5702016370799":"1","5702016617191":"1","5702016617245":"1","5702016616989":"1","5702016618792":"1","5702016368062":"1","5702016618815":"1","5702016616354":"1","5702016617740":"1","5702016687200":"1","5702016616446":"1","5702016618808":"1","5702016617177":"1","5702016617764":"1","5702016619300":"1","8710103877424":"1","8710103911609":"1","8710103910664":"1","8710103602002":"1","8710103890928":"1","8710103879237":"1","8710103824480":"1","8710103888451":"1","8710103871644":"1","5707055048142":"1","5707055048111":"1","5707055048173":"1","5707055049941":"1","5707055048203":"1","5707055048296":"1","5707055050619":"1","5707055048265":"1","5707055048326":"1"}}},
        isAb:function(type){
          try{
            if (!this.ab.d.hasOwnProperty(this.mappingTable['data-flix-distributor']['value'])) { return false; }
            if (this.ab[type]['mpn'].hasOwnProperty((this.mappingTable['data-flix-mpn']['value'] != null ? this.mappingTable['data-flix-mpn']['value'] : '').toLowerCase())) { return true; }
            if (this.ab[type]['ean'].hasOwnProperty((this.mappingTable['data-flix-ean']['value'] != null ? this.mappingTable['data-flix-ean']['value'] : '').toLowerCase())) { return true; }
          }
          catch(e){
              this.log(e.message);
          }
          return false;
        },
        ismobile: function() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
        },
        getAutoloadedModules: function() {
              var autoloaded_modules = this.mappingTable['data-flix-autoload']['value'] == null ? []
              : this.mappingTable['data-flix-autoload']['value'].replace(' ','').split(',');
          return autoloaded_modules;
        },
        mobileDistributorIds : {"2754":1,"2162":1,"370":1},
        abc: {"7109":[2]},
        init:function() {
          try {
            var scs = document.getElementsByTagName('script');
            for(var i=0;i<scs.length;i++){
              if (scs[i].src.indexOf('dev-delivery')>0 || scs[i].src.indexOf('flixfacts.com/js/loader')>0 || scs[i].src.indexOf('flixsyndication.net/minisite/ssl/js/loader')>0 || scs[i].src.indexOf('flixsyndication.net/minisite/ssl/logo/code/js/l.js')>0 || scs[i].src.indexOf('flixsyndication.net/js/loader')>0 || scs[i].src.indexOf('logo.flixfacts.co.uk/code/js/l.js')>0 || scs[i].src.indexOf('flixfacts.co.uk/link.php')>0) {
                this.instance=scs[i];
                break;
              }
            }
            this.errLog();
            this.parse();
            this.setGvid();

              var d_id = this.mappingTable['data-flix-distributor']['value'];
              var ab_res_id = 'ab_'+d_id;
              window.flixJsCallbacks[ab_res_id] = null;
              if(typeof URLSearchParams == 'function') {
                  var urlParams = new URLSearchParams(window.location.search);
                  var ab_url = 'https://dkht7e625fi95.cloudfront.net/track/';
                  if (location.href.search('flix-local') !== -1) ab_url = 'http://localhost/hotspot-ab/';
                  var dt_ids = {};

                  if(this.abc && typeof this.abc[d_id] != "undefined") {dt_ids[d_id] = this.abc[d_id];}
                  if(urlParams.get('ab_d_id') && urlParams.get('ab_t_id')) {d_id = urlParams.get('ab_d_id'); dt_ids[d_id] = [urlParams.get('ab_t_id')];}
                  if (typeof dt_ids[d_id] !== "undefined") {
                      for (var i = 0; i < dt_ids[d_id].length; i++) {
                          var xhr = new XMLHttpRequest();
                          xhr.onreadystatechange = function() {
                              if (xhr.readyState === 4 && xhr.status === 200) window.flixJsCallbacks[ab_res_id] = JSON.parse(xhr.responseText);
                          };
                          xhr.open('GET', ab_url + d_id + '-' + dt_ids[d_id][i] +'.json?v=1.1', false);
                          xhr.send();
                      }
                  }
              }

              var autoloaded_modules = this.mappingTable['data-flix-autoload']['value'] == null ? [] : this.mappingTable['data-flix-autoload']['value'].replace(' ','').split(',');
              if(["0","false"].indexOf(this.mappingTable['data-flix-autoload']['value']) === -1) {
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('minisite') > -1) this.load('button');
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('inpage') > -1) this.load('inpage');
                  if(autoloaded_modules.length === 0 || autoloaded_modules.indexOf('hotspot') > -1) this.load('hotspot');
              }

          } 
          catch(e) {
            this.log(e.message);
          }
        },
        setValue:function(name,value){
          if(name == "data-flix-ean" && value != "" && value.length<13) {
            value = Array(13 + 1 - value.length).join('0') + value;
          }
      try{
        if(name == "data-flix-rec" && value != "") {
          var prws = value.split(",");
          var res ={};
          for (var i=0;i<prws.length;i++){
            var itm = prws[i].split(":");
            if(itm.length>1){
              var model_name = this.mappingTable[name].model[itm[0]] || "m3";
              res[model_name]=itm[1]
            }else{
              var model_name = "m3";
              res[model_name]=itm[0]
            }
           }
           value = res;
        }
      }catch(e){}
          var fname = (this.mappingTable[name]!=undefined ) ? this.mappingTable[name] : this.mappingTable[this.mapOldParam(name)];
          if (fname!=undefined && value) {
            fname['value']=value;
          }
        },
        mapOldParam:function(name){
          try
          {
            for (var i in this.mappingTable){
              if (this.mappingTable[i]['button']==name) {
                return i;
              }
            }
          }
          catch (e) {
            this.log(e.message);
          }
        },
        validate:function(){
          if(this.mappingTable['data-flix-button']['value'] == null && this.mappingTable['data-flix-inpage']['value']==null){
            this.mappingTable['data-flix-button']['value'] = 'flix-minisite';
          }
          
          if(this.mappingTable['data-flix-distributor']['value'] == null){
            this.log('distributor is not set');
            return false;
          }

          if (this.mappingTable['data-flix-language']['value']==null){
            this.log('language is not set');
            return false;
          }

          if( !! this.ab.d_hotspot[this.mappingTable['data-flix-distributor']['value']] && ! this.mappingTable['data-flix-hotspot']['value']) {
            this.mappingTable['data-flix-hotspot']['value'] = 'flix-hotspot';
          }
          else if( this.ab.d[ this.mappingTable['data-flix-distributor']['value']] && 
          ( (this.mappingTable['data-flix-ean']['value'] != null ? this.mappingTable['data-flix-ean']['value'] : '').toLowerCase() in this.ab.hotspot.ean || (this.mappingTable['data-flix-mpn']['value'] != null ? this.mappingTable['data-flix-mpn']['value'] : '').toLowerCase() in this.ab.hotspot.mpn )) {
            this.mappingTable['data-flix-hotspot']['value'] = 'flix-hotspot';
          }
          return true;
        },
        _s : function(url,append_dom,options){
            var _fscript = document.createElement('script');
            _fscript.setAttribute("type","text/javascript");
            _fscript.setAttribute("src", url);
            _fscript.async = "true";
            for (var i in options) {i=="id" ? _fscript.id=options[i] : _fscript.setAttribute(i,options[i]);}
            append_dom.appendChild(_fscript);
            _fscript.addEventListener('error', function(){              
              var i = new Image();
              var det = window.location.href;              
              i.src=location.protocol+"//rt.flix360.com/jserr?f="+encodeURIComponent(url)+"&d="+encodeURIComponent(det)+"&m="+encodeURIComponent('Flix domain blocked');
            },false);
            return _fscript;
        },
        _jx : function( url, append_dom, et_type ) {
          try{
            var
                u = "//media.flixcar.com/perf/log.gif" 
              , payload = {
                  et: et_type,
                  age: null,
                  ip_address: null,
                  d: this.mappingTable['data-flix-distributor']['value'],
                  f_xp: "inpage",
                  pn: window.location.href,
                  perf: {
                      "startTime": null,
                      "duration": null,
                      "fetchStart": null,
                      "domainLookupStart": null,
                      "domainLookupEnd": null,
                      "connectStart": null,
                      "connectEnd": null,
                      "secureConnectionStart": null,
                      "requestStart": null,
                      "responseStart": null,
                      "responseEnd": null,
                      "transferSize": null
                  }
                }
              , xhr = this._xhr()
              , _fscript = document.createElement('script')
              , img = new Image()
            ;
            xhr.onreadystatechange = function() {
              var perf = performance.getEntriesByType('resource');
              var maxSize = 150;
              var iters = 3;
              if( !! perf ){
                (function parsePerf(){
                  perf.forEach(function(d){
                    if( "xmlhttprequest" === d.initiatorType && !! d.name.match(/media\.flixcar\.com/)) {
                      for( var p in payload.perf ){
                        if( payload.perf.hasOwnProperty(p)){
                          payload.perf[p] = d[p];
                        }
                      }
                    }
                    else if( --iters >= 0 ) {
                      maxSize =( maxSize + 150);
                      performance.setResourceTimingBufferSize(maxSize);
                      parsePerf();
                    }
                  });     
                }());
              }
              if (xhr.readyState === 4) {
                payload.age = xhr.getResponseHeader("Age");
                payload.ip_address = xhr.getResponseHeader("X-IP-Address");
                _fscript.setAttribute("type","text/javascript");
                _fscript.textContent = xhr.responseText;
                append_dom.appendChild(_fscript);
                img.src = u + "?payload=" + encodeURIComponent( JSON.stringify( payload ));
              }
            }
            xhr.open('GET', url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send();
          }
          catch( e ) {
            console.info(e.message);
          }
        },
        log: function(msg){
          try{
            console.log(msg);
          }catch(e){}
        },
        _xhr: function(){
          var xhr;
          if (window.ActiveXObject) {
            try {
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e) {
              console.info(e.message);
              xhr = null;
            }
          }
          else {
            xhr = new XMLHttpRequest();
          }
          return xhr;
        },
        load:function(type){
          var autoloaded_modules =  this.getAutoloadedModules();
          if( this.ismobile() && ( type == 'button'  || type == 'hotspot' ) ) {
              if(autoloaded_modules && autoloaded_modules.length>0 && autoloaded_modules.indexOf('hotspot') > -1){}else{
                return false;
              }
          }        
          if ( ! this.validate() ) return false;
          var elem = this.mappingTable['data-flix-'+type]['value'];
          if (elem==null) return false;
          var dom = document.getElementById(elem);

          if (!dom && type != 'hotspot'){
            try {
              var div = document.createElement('div');
              div.id=elem;
              this.instance.parentNode.appendChild(div);
            } 
            catch(e) {
              this.log(e.message);
              return false;
            }
          }

          try {
            var url = this.getUrl(type);
            var options={};
            var scache = this.isAb(type) ? "&fcache="+Math.random() : "";
            scache+="&ext=.js";
       

            if (!this.isAb(type)) options.crossorigin = "true";
            if (type=='button') {
              this._s(url+scache,document.getElementById(elem),options);
              var styleElement = document.createElement("style");
              var cssCode="#"+elem+" a img {padding-right:3px;}";
              styleElement.type = "text/css";
              if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = cssCode;
              } 
              else {
                styleElement.appendChild(document.createTextNode(cssCode));
              }
              document.getElementsByTagName("head")[0].appendChild(styleElement);
            }
            else if (type == 'inpage'){
              var 
                  perf_ean = this.mappingTable['data-flix-ean']['value']
                , perf_mpn = this.mappingTable['data-flix-mpn']['value']
                , perf_d = this.mappingTable['data-flix-distributor']['value']
                , perf = []
              ;
              if( perf.indexOf( perf_d ) >= 0 && !! window.performance && typeof window.performance.getEntriesByType === 'function') {
                var et = ( !! this.ismobile() ) ? "pagemobile" : "page";
                this._jx(url+scache, document.getElementById( elem ), et);
              }
              else {
                this._s(url+scache,document.getElementById(elem),options);
              }
            } 
            else if (type == 'hotspot'){
                this._s(url+scache,document.getElementsByTagName('head')[0],options);
            }
          }
          catch (e) {
            this.log(e.message);
            return false;
          }
        },
        getUrl:function(btype) {
          var url = '';
          var url_in = '';
          var url_mn = '';
          var url_hs = '';
          for (var i in this.mappingTable)
          {
            if (this.mappingTable[i]['value']==null) continue;
            if (this.mappingTable[i][btype]==null) continue;

            value_m = this.mappingTable[i]['value'];

            value_n = value_m.replace(/'/g, "%27");

            url+="&"+ this.mappingTable[i][btype]+"="+encodeURIComponent(value_n);

            if (i=='data-flix-inpage') continue;
            if (i=='data-flix-price') continue;
            if (i=='data-flix-button-image') continue;
            if (i=='data-flix-button') continue;
            if (i=='data-flix-price') continue;
            if (i=='data-flix-button-image') continue;
            if (i=='data-flix-fallback-language') continue;
            if (i=='data-flix-brand') continue;
            if (i=='data-flix-energylabel') continue;
            if (i=='data-flix-mobilesite') continue;

            url_in+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";
            url_mn+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";
            url_hs+= ((this.mappingTable[i]['inpage']=='') ? '' : this.mappingTable[i]['inpage']+"/" ) + escape(this.mappingTable[i]['value'])+"/";

          }

          url+=('https:' == document.location.protocol) ? "&ssl=1":"";

          if (this.mappingTable['data-flix-mpn']['value']==null && this.mappingTable['data-flix-ean']['value']==null) {
            var uc = encodeURIComponent(window.location.pathname); /*get a unique url*/
            this.setValue('data-flix-url', uc.replace(/\W/g,""));
            url_in+=uc.replace(/\W/g,"");
            url_mn+=uc.replace(/\W/g,"");
            url_hs+=uc.replace(/\W/g,"");
          }

          var minisite_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/minisite/' : 'http://media.flixcar.com/delivery/js/minisite/';
          var inpage_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/inpage/' : 'http://media.flixcar.com/delivery/js/inpage/';
          var hotspot_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/js/hotspot/' : 'http://media.flixcar.com/delivery/js/hotspot/';

          var distributorIds = {"8772":1};
          if ( distributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value'])) {
                minisite_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/minisite/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/minisite/';
                inpage_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/inpage/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/inpage/';
                hotspot_url = ('https:' == document.location.protocol) ? 'https://d20d8a0b518lq3.cloudfront.net/delivery/js/hotspot/' : 'http://d20d8a0b518lq3.cloudfront.net/delivery/js/hotspot/';
          }

          if( this.ismobile() /*&& this.mobileDistributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value']) */ ){
              inpage_url = ('https:' == document.location.protocol) ? 'https://media.flixcar.com/delivery/mobile/js/' : 'http://media.flixcar.com/delivery/mobile/js/';
            if( this.isAb("inpage")) {
              inpage_url = "//media.flixcar.com/ab/mobile/js/";
            }
            url=( url.replace("&ms=Yes", "") ) +"&forcedstop=bymobile" ;
            var autoloaded_modules =  this.getAutoloadedModules();
            if(autoloaded_modules && autoloaded_modules.length>0 && autoloaded_modules.indexOf('hotspot') > -1){
                 url=url.replace("&forcedstop=bymobile", "&forcedstop=false&mobileHotspot=Y")
            }
          }



          //url = (btype=='button') ? minisite_url + url_mn.substr(0,url_mn.length-1) + '?' + url.substr(1) : inpage_url + url_in.substr(0,url_in.length-1) + "?" + url;

          if (btype == 'button')
              url = minisite_url + url_mn.substr(0, url_mn.length - 1) + '?' + url.substr(1);
          if (btype == 'inpage')
              url = inpage_url + url_in.substr(0, url_in.length - 1) + "?" + url;
          if (btype == 'hotspot')
              url = hotspot_url + url_hs.substr(0, url_hs.length - 1) + "?" + url;


          return url;
        },
        parse:function(){
          var qmark = this.instance.src.indexOf('?');
          if(qmark != -1) {
            var itms =  this.instance.src.substr(qmark+1).split("&");
            for (var i=0;i<itms.length;i++ ) {
              var kv = itms[i].split("=");
              this.setValue(kv[0],decodeURIComponent(kv[1]));
            }
          }else{
            for (var i in this.mappingTable ) {
              try{
                this.setValue(i,this.instance.getAttribute(i));
              }catch(e){ this.log(e.message);}
            }
          }
        },
        errLog: function(){
          try {
            window.addEventListener('error', function (err) {
              if (!err) return;
              if(err.filename && /flix(facts|car|syndication)\./g.test(err.filename)) {
                var det = err.colno ? 'l:' + err.lineno +', c:'+ err.colno : 'l:' + err.lineno;
                det+=" "+window.location.href;
                var i = new Image;
                i.src="//rt.flix360.com/jserr?f="+encodeURIComponent(err.filename)+"&d="+encodeURIComponent(det)+"&m="+encodeURIComponent(err.message);
              }
            });
          } catch(e){
              this.log(e.message);
          }
        },
        getCookieValue:function(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        },
        setGvid:function() {
          if(this.getCookieValue('flixgvid')){            
            window.flixJsCallbacks['gvid'] = this.getCookieValue('flixgvid');            
            return
          }
          if ( document.getElementById('data-flix-t-script') ) return;
          window['flixgvid'] = function(obj){
            try{
              delete window['flixgvid'];
              window.flixJsCallbacks['gvid'] = obj['gvid'];
              document.cookie = 'flixgvid='+obj['gvid']+'; path=/; SameSite=None;Secure';
            }catch(e){}
          };
          var lambdaDistributorIds = {"3986":1,"6933":1,"13395":1};
          var switch_base = lambdaDistributorIds.hasOwnProperty(this.mappingTable['data-flix-distributor']['value']) ? '//media.flixcar.com/gvid':'//media.flixcar.com/gvid'; 
          this._s(switch_base,document.getElementsByTagName('head')[0],{"id":"data-flix-t-script"});

        }
      };
    var 
      flixJsCallbacks = {
        _loadCallback:null,
        _loadInpageCallback:null,
        _loadMinisiteCallback:null,
        _loadNoshowCallback:null,
        _loadMouseFlowCallback: null,

        setLoadCallback:function(cFunction,ftype){
          try{
            if (cFunction && typeof(cFunction) === "function" ) {
              switch(ftype) {
                case "inpage": this._loadInpageCallback = cFunction;  break;
                case "minisite" : this._loadMinisiteCallback = cFunction; break;
                case "noshow" : this._loadNoshowCallback = cFunction; break;
                case "mouseflow": this._loadMouseFlowCallback = cFunction; break;
                default:  this._loadCallback = cFunction; break;
              }
            }
            else { throw cFunction+" is not a function";}
          }
          catch(e) {
            try {console.log(e);}catch(e1){}
          }
        },
        loadService:function(ftype) {
            switch(ftype) {
                case "inpage": _flixLoader.load('inpage');  break;
                case "minisite" : _flixLoader.load('button'); break;
                case "hotspot" : _flixLoader.load('hotspot'); break;
            }
        }
    };
    var getFlixCallback = function(){
      return flixJsCallbacks;
    };
    window['flixJsCallbacks'] = getFlixCallback();
    _flixLoader.init();
})();
