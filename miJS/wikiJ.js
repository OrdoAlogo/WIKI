
            $(document).ready(function(){
            $(".menuLetra").toggle(function(){

                $('nav ul').animate({"left":"0px"},1000);
                $(".icon-menu").css({"display":"none"});
                $(".icon-cross").css({"display":"block"});
                    $('nav ul').css({"height":"100%"});
            },
            function(){
                $('nav ul').animate({"left":"-1500px"},1000);
                $(".icon-menu").css({"display":"block"});
                $(".icon-cross").css({"display":"none"});
            })
        });
    
       
   