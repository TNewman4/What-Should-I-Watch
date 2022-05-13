let x = Math.floor(Math.random() * 3);

let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {

   $(".horror-recommend").append("<p>" + horror[2] + "");     
    

});

let action = ["The Hitman's Bodyguard","The Suicide Squad","Avengers: Endgame"];

$(".action").click(function() {
  for (let explosion of action){
  $(".action-recommend").append("<p>" + explosion + "");    
  }
    
});

let comedy = ["Deadpool","Minions","Baywatch"];

$(".comedy").click(function() {
  for (let laugh of comedy){
  $(".comedy-recommend").append("<p>" + laugh + "");    
  }
});

let sciFi = ["I am Mother","Upgrade","The Matrix"];

$(".sciFi").click(function() {
  for (let science of sciFi){
  $(".sciFi-recommend").append("<p>" + science + "");    
  }
});
