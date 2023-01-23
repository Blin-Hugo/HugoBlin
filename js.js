function a() {
    const element = document.documentElement;
    let y = element.scrollTop;
    let a = window.innerHeight;
    let b = window.innerWidth;

    let scrollRightWidth = 8000;
    let c = (61/100*a) + scrollRightWidth-b;
    



    if(y > c ) {
        document.getElementById("a").style.position = "fixed";
        document.getElementById("a").style.top =  -y + c +"px";
        document.getElementById("a").style.left =  -scrollRightWidth+b +"px";
        
        
        
    }else if (y>scrollRightWidth- b +61/100*a){
        document.getElementById("a").style.top =  0;
        document.getElementById("a").style.left =  -scrollRightWidth+b +"px";
        document.getElementById("a").style.position = "fixed";
    }else if (y> 61/100*a ){
        document.getElementById("a").style.left = (61/100*a) -y +"px";
        document.getElementById("a").style.top =  0;
        document.getElementById("a").style.position = "fixed";
    
    }else{
        document.getElementById("a").style.top =  61/100*a+"px";
        document.getElementById("a").style.position = "absolute";
    }


    
    

    
    if (y>1500){
        let h = -200 - 1500 + y;
        document.getElementById("1").style.transform = "translateY(" + h + "px )";
    }else if (y>1000){
        let g = 300 + 1000 - y;
        document.getElementById("1").style.transform = "translateY(" + g + "px )";
    }

    if (y>1600){
        let j = -300 - 1600 + y;
        document.getElementById("2").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1100){
        let i = 250 + 1100 - y;
        document.getElementById("2").style.transform = "translateY(" + i + "px )";
    }

    if (y>1700){
        let j = -400 - 1700 + y;
        document.getElementById("3").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1200){
        let i = 200 + 1200 - y;
        document.getElementById("3").style.transform = "translateY(" + i + "px )";
    }

    if (y>1800){
        let j = -500 - 1800 + y;
        document.getElementById("4").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1300){
        let i = 150 + 1300 - y;
        document.getElementById("4").style.transform = "translateY(" + i + "px )";
    }

    if (y>1900){
        let j = -600 - 1900 + y;
        document.getElementById("5").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1400){
        let i = 100 + 1400 - y;
        document.getElementById("5").style.transform = "translateY(" + i + "px )";
    }

    if (y>2000){
        let j = -700 - 2000 + y;
        document.getElementById("6").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1500){
        let i = 50 + 1500 - y;
        document.getElementById("6").style.transform = "translateY(" + i + "px )";
    }

    if (y>2100){
        let j = -800 - 2100 + y;
        document.getElementById("7").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1600){
        let i = 0 + 1600 - y;
        document.getElementById("7").style.transform = "translateY(" + i + "px )";
    }

    if (y>2200){
        let j = -900 - 2200 + y;
        document.getElementById("8").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1700){
        let i = -50 + 1700 - y;
        document.getElementById("8").style.transform = "translateY(" + i + "px )";
    }

    if (y>2300){
        let j = -1000 - 2300 + y;
        document.getElementById("9").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1800){
        let i = -100 + 1800 - y;
        document.getElementById("9").style.transform = "translateY(" + i + "px )";
    }

    if (y>2400){
        let j = -1100 - 2400 + y;
        document.getElementById("10").style.
        transform = "translateY(" + j + "px )";
    }else if (y>1900){
        let i = -150 + 1900 - y;
        document.getElementById("10").style.transform = "translateY(" + i + "px )";
    }

    if (y>2500){
        let j = -1200 - 2500 + y;
        document.getElementById("11").style.
        transform = "translateY(" + j + "px )";
    }else if (y>2000){
        let i = -200 + 2000 - y;
        document.getElementById("11").style.transform = "translateY(" + i + "px )";
    }
}


    
