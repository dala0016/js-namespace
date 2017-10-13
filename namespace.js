var DALA0016 = {
    <div id="boxes" class="box">dala0016</div>
    init: function(){
        console.log("script in DALA0016 called");
    }
};

document.addEventListener('DOMContentLoaded',init);

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