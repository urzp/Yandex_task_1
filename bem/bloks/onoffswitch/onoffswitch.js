    
function switch_theme(){
    var rng=document.getElementById('slider'); 
    var element = document.getElementById("switch_theme");
    var theme_color_inverse = false;

    if((rng.value>50)&&(theme_color_inverse == false)){           
       element.classList.add("theme_color_project-inverse");
        theme_color_inverse = true;
    }else{
        element.classList.remove("theme_color_project-inverse");
        theme_color_inverse = false;
    }
}