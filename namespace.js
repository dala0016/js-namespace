var DALA0016 = { 
    init: function(){
        let box = document.createElement("dala0016");
        box.classList.add("boxes");
        console.log("script in DALA0016 called");
        box.addEventListener("click", this.mClick);
        box.addEventListener("mouseover", this.mOver);
        box.addEventListener("mouseout", this.mOut);
    },
    mClick: function (ev){
        let target = ev.currentTarget;
        target.style.color = #CCB200;
        target.style.backgroundColor = #FFF9D4;
    },
    mOver: function(ev){
        ev.currentTarget.classList.toggle("highlight");
    },
    mOut: function (ev){
    ev.currentTarget.classList.toggle("highlight");
    } };


    //<div id="boxes" class="box">dala0016</div>
/*
function init(ev){
    let div = document.querySelector("#theDiv");
    div.addEventListener("click", this.mClick);
    div.addEventListener("mouseover", this.mOver);
    div.addEventListener("mouseout", this.mOut);   
}

function mClick(ev){
    //box.style.color = #CCB200;
    DALA0016.style.color = #CCB200;
    DALA0016.style.backgroundColor = #FFF9D4;
}
function mOver(ev){
    ev.currentTarget.classList.toggle("highlight");
}
function mOut(ev){
    ev.currentTarget.classList.toggle("highlight");
}
*/