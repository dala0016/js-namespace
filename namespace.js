var DALA0016 = { 
    init: function(){
        let div_box = document.createElement("div");
        div_box.classList.add("box");
        div_box.textContent = "dala0016";
        let div_boxes = document.querySelector("#boxes");
        div_box.addEventListener("click", DALA0016.mClick);
        div_box.addEventListener("mouseover", DALA0016.mOver);
        div_box.addEventListener("mouseout", DALA0016.mOut);
        div_boxes.appendChild(div_box);
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