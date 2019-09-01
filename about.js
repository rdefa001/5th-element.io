$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'700px',width:'700px'});
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:"1"});
        $("#menu ul").css("visibility","visible");
        $("#menu_circle_layer").animate({height:'750px',width:'750px'});
        
        $("#social_media").animate({height:'400px',width:'400px'});
        $("#container").delay(300).animate({opacity:"1"});
        $("#container").css("visibility","visible");
        $("#social_circle_layer").animate({height:'430px',width:'430px'});
        
        $("#bg2").delay(200).animate({opacity:"1",fontSize:'3em'});
        $("#bg2").css("visibility","visible");
        
    }); 
    
            $("#bg2").click(function(){
        $("#main").animate({height:'50px',width:'50px'});
        $("#icon").fadeIn();
        $("#menu ul").animate({opacity:"0"});
        $("#menu ul").css("visibility","hidden");
        $("#menu_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#social_media").animate({height:'0px',width:'0px'});
        $("#container").animate({opacity:"0"});
        $("#container").css("visibility","visible");
        $("#social_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#bg2").animate({opacity:"0",fontSize:'16em'});
        $("#bg2").css("visibility","hidden");       
    });
    
});

var tl = new TimelineMax();
tl
.to(".screen-wipe-top", 0.5,{y: "50%", repeat: 1, yoyo:true})
.to(".screen-wipe-bottom", 0.5,{y: "-50%", repeat: 1, yoyo:true}, "-=1")









