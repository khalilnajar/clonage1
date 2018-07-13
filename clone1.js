
$(document).ready(function(){
    $("#img1").click(function(){
        $("#p1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#img2").click(function(){
        $("#p2").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#img3").click(function(){
        $("#p3").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#design").hover(function(){
        $("#design").css("transform","translate(200px,0)");
        $("#design").css("opacity", 1);

    });
});
$(document).ready(function(){
    $("#developement").hover(function(){
        $("#developement").css("transform","translate(200px,0)");
        $("#developement").css("opacity", 1);

    });
});
$(document).ready(function(){
    $("#marketing").hover(function(){
        $("#marketing").css("transform","translate(200px,0)");
        $("#marketing").css("opacity", 1);

    });
});

$(document).ready(function(){
        $("#img11").click(function(){
    var src=document.getElementById("img11").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });
    $(document).ready(function(){
        $("#img22").click(function(){
    var src=document.getElementById("img22").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });$(document).ready(function(){
        $("#img33").click(function(){
    var src=document.getElementById("img33").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });$(document).ready(function(){
        $("#img11").click(function(){
    var src=document.getElementById("img11").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });$(document).ready(function(){
        $("#img44").click(function(){
    var src=document.getElementById("img44").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });
    $(document).ready(function(){
        $("#img55").click(function(){
    var src=document.getElementById("img55").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"

        });
    });
    $(document).ready(function(){
        $("#img66").click(function(){
    var src=document.getElementById("img66").src
    document.getElementById("img123").src=src
    document.getElementById("galerie").style.visibility="visible"
    document.getElementById("hidden").style.display="none"



        });
    });
    $(document).ready(function(){
        $("#logohide").click(function(){
            $("#galerie").hide();
            document.getElementById("hidden").style.display="block"

        });
    });
    