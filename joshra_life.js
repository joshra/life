//繪製30x30表格
//var birth=535420800;
    function setCookie(cname,cvalue,exdays)
    {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    function getCookie(cname)
    {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) 
        {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }

    function checkCookie()
    {
    var user=getCookie("username");
    if (user!="")
      {
        setTimeout('$("#greeting .nice-day").fadeIn("slow");',1500 );
        //alert("Welcome again " + user);
      }
    else 
      {
      user = prompt("Please enter your birth e.g. 1986.12.20:","");
      if (user!="" && user!=null)
        {
            setCookie("username",user,365);
            $("#greeting .name").text(user);
            $("#greeting .nice-day").fadeIn("slow");
        }
      }
    }
    function del_cookie(name)
    {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

checkCookie();
var birth = new Date(getCookie('username')).getTime();
var month=2592000000; //60x60x24*30*1000
var now=Date.now();
//alert(birth);
var blocks=parseInt((now-birth)/month);
//alert(blocks);
    jQuery(document).ready(function(){
            i=0;
            while(i<30){
               jQuery("table").append("<tr></tr>");
               i++;
            }
            j=0;
            while(j<30){
                jQuery("tr").append("<td></td>");
                j++;
            }
                //jQuery("td:lt("+blocks+")").css("background-color","#666");
                           jQuery("td:lt("+blocks+")").each(function(i){
                                var _this =this;
                                setTimeout(function(){
                                    jQuery(_this).css("background-color","#666")
                                    }, 10*i);
                                });
    });
