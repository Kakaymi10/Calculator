let opera = document.querySelector('.opera');
let result = document.querySelector('.result')

let n = [];

const show = (a) =>{
    opera.value+=a;
    showing();
    auto();
}
function auto(){
    let res = eval(opera.value);
    result.innerText = res;
}

function reset() {
    opera.value="";
    result.innerText = '';
    showing()
};
function pop(){
    let valu = opera.value;
    valu = valu.substring(0, valu.length - 1);
    opera.value = valu;
    if(valu.length > 0){
        auto()
    }else{
        result.innerText = '';
    }
}
function change(){
    let res = eval(opera.value);
    if(res < 0){
        result.innerText = res;
    }else{
        result.innerText = -res;
    }
}
$("#final").click(function(){
    $(".opera").hide(1000);
    $('.result').css({"border":"none"})
})

function showing(){
    $('.opera').show(1000);
}
