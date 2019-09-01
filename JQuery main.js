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
        
        $("#bg").delay(200).animate({opacity:"1",fontSize:'8em'});
        $("#bg").css("visibility","visible");
    }); 
    
            $("#bg").click(function(){
        $("#main").animate({height:'50px',width:'50px'});
        $("#icon").fadeIn();
        $("#menu ul").animate({opacity:"0"});
        $("#menu ul").css("visibility","hidden");
        $("#menu_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#social_media").animate({height:'0px',width:'0px'});
        $("#container").animate({opacity:"0"});
        $("#container").css("visibility","visible");
        $("#social_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#bg").animate({opacity:"1",fontSize:'16em'});
        $("#bg").css("visibility","visible");       
    });
    
 });
