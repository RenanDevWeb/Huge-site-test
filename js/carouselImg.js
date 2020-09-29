var imgPrincipal = document.getElementById('imgSlider');

var imgSlider1 = document.getElementById("myImgSlider1").addEventListener('click',function(){
    changePhoto('./img/imagem_perfil.png');
})
var imgSlider2 = document.getElementById("myImgSlider2").addEventListener('click',function(){
    changePhoto('./img/team1.jpg');
})
var imgSlider3 = document.getElementById("myImgSlider3").addEventListener('click',function(){
    changePhoto('./img/team2.jpg');
})
var imgSlider4 = document.getElementById("myImgSlider4").addEventListener('click',function(){
    changePhoto('./img/team3.jpg');
})
var imgSlider5 = document.getElementById("myImgSlider5").addEventListener('click',function(){
    changePhoto('./img/team4.jpg');
})
var imgSlider6 = document.getElementById("myImgSlider6").addEventListener('click',function(){
    changePhoto('./img/garotapunk.jpg');
})
var imgSlider7 = document.getElementById("myImgSlider7").addEventListener('click',function(){
    changePhoto('./img/empresario.jpg');
})



function changePhoto(url){
    imgPrincipal.setAttribute('src',url)
    
}
