// $(".table-link1").click(function(){
//    $("#edu").slideUp(function(){
//     $("#proj").addClass("edu");
//    }); 
// });

// $(".table-link2").click(function(){
//     $("#proj").slideUp(function(){
//      $("#proj").addClass("edu");
//     }); 
//  });

//  $(".table-link3").click(function(){
//     $("#hob").slideUp(function(){
//      $("#hob").addClass("edu");
//     }); 
//  });

$(".table-link1").hover(function(){
   
   $("#edu").removeClass("tab-body1");
   $("#proj").addClass("tab-body1");
   $("#hob").addClass("tab-body1");
});

$(".table-link3").hover(function(){
   
   $("#proj").removeClass("tab-body1");
   $("#edu").addClass("tab-body1");
   $("#hob").addClass("tab-body1");
});

$(".table-link2").hover(function(){
   
   $("#hob").removeClass("tab-body1");
   $("#proj").addClass("tab-body1");
   $("#edu").addClass("tab-body1");
});


$(".l2").click(function openmenu(){
$("nav ul").css("right","0px");

})

$(".l1").click(function closemenu(){
   $("nav ul").css("right","-200px");
   
   })