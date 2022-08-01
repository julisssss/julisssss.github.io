$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })
function generate() {
let minv=Number(document.querySelector('input[name="min1"]').value);
let maxv=Number(document.querySelector('input[name="max1"]').value);
let rand=Math.floor(minv + Math.random() * (maxv - minv + 1));
let res=document.querySelector('.result');
res.innerText=rand;
}