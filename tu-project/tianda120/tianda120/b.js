var BDBridge = window.BDBridge || (function(){

    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN : 1,
        BD_BRIDGE_ROOT : "http://qiao.baidu.com/v3/"
    };

    document.cookie = 'VERSION=2,0,0,0';
    
    if ((CONFIG.BD_BRIDGE_OPEN == 1) && (typeof window["BD_BRIDGE_LOADED"] == "undefined")) {
        window["BD_BRIDGE_LOADED"] = 1;
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/js/bw.js?v=20131213";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    
    return self = {
    
        BD_BRIDGE_OPEN : CONFIG.BD_BRIDGE_OPEN,
        BD_BRIDGE_ROOT : CONFIG.BD_BRIDGE_ROOT,
        BD_BRIDGE_RCV_ROOT : "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA : {mainid : "120238648", SITE_ID : "f210b30f28be6bd7de6414242eb63a13", siteid : "3331380", userName: '天大医疗'},
        OPEN_MODULAR : 11111,
                BD_BRIDGE_SPECIAL :  [] ,
        
                BD_BRIDGE_STYLE_ITEM : 
        [        {
            pageid : "0",
            
           
                        BD_BRIDGE_GROUP:  [ '1' - 0 ] ,
            
            BD_BRIDGE_ICON_CONFIG : {
                iconlvtype : "0" - 0,
                background : {
                    color : "",
                    url   : "iconbg.jpg.gif"/*tpa=http://qiao.baidu.com/style/648/120238648/2/iconbg.jpg*/,
                    bgcolor : "#2990be"
                },
                head : {
                    url    : "",
                    width  : "100" - 0,
                    height : "94" - 0
                },
                button : {
                    color : "",
                    url   : "02.png"/*tpa=http://qiao.baidu.com/v3/res/iconbtn/02.png*/,
                    text  : "#1182ae"
                },
                flow     : "0" - 0,
                position : "2" - 0,
                special : "15"
            },
            BD_BRIDGE_INVITE_CONFIG : {
                on : "0" - 0,
                show : {
                    pos : "0" - 0,
                    width : "320" - 0,
                    height : "150" - 0,
                    font : "宋体",
                    fontsize : "12",
                    fontcolor : "#000000",
                    type : "0" - 0
                },
                background : {
                    color : "",
                    url   : "16.jpg"/*tpa=http://qiao.baidu.com/v3/res/invitebg/16.jpg*/
                },
                head : {
                    show : "0" - 0,
                    size : "1" - 0,
                    url  : "11_big.jpg"/*tpa=http://qiao.baidu.com/v3/res/invitehead/11_big.jpg*/
                },
                text   : "上海天大欢迎您，真诚为您解答所有疑问！",
                button : "#f63525",
                mode   : "0" - 0,
                special : "16" - 0
            },
            BD_BRIDGE_INVITE : {
                inviteauto : "0" - 0,
                invitemanual : "0" - 0,
                invitetype   : "1" - 0,
                inviterepeat : "0" - 0,
                invitetime   : "10" - 0,
                invitedisaptype : "0" - 0,
                invitedisaptime : "20" - 0
            },
            BD_BRIDGE_WEBIM : {
                webimopentype : "0" - 0,
                webimbgcolor  : "#d5d5d5",
                floatposition : "0" - 0,
                floatChatName : "2" - 0,
                floatCustomname : ""
            },
                        BD_BRIDGE_PIGEON_SOUL : {
                disableMess     : "1" - 0,
                messType        : 1,
                messFloatType   : "0" - 0,
                language        : "0" - 0,
                position        : "0" - 0,
                backgroundColor : "#3399CC",
                backgroundUrl       : "", 
                messItemName    : "0",
                messItemPhone   : "0",
                messItemAddress : "0",
                messItemEmail   : "0",
                extraMessItems  :  [] 
            }
        }        ]
        
    }
   


})();
