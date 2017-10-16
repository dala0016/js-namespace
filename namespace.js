var DALA0016 = { 
    init: function(){
        let div_box = document.createElement("div");
        div_box.classList.add("box");
        divBox.textContent = "dala0016";
        document.getElementById("boxes").appendChild(div_boxox);
        box.addEventListener("click", DALA0016.mClick);
        box.addEventListener("mouseover", DALA0016.mOver);
        box.addEventListener("mouseout", DALA0016.mOut);
    },
    mClick: function(ev){
        ev.currentTarget.style.color = "#CCB200";
        ev.currentTarget.style.backgroundColor = "#FFF9D4";
    },
    mOver: function(ev){
        ev.currentTarget.classList.toggle("highlight");
    },
    mOut: function (ev){
    ev.currentTarget.classList.toggle("highlight");
    } };