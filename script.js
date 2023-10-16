var input = document.querySelector("#pointsAchive")

input.addEventListener('keyup', function(){
    var pointsSmall = parseFloat(document.querySelector("#pointsSmall").value)
    var pointsBig = parseFloat(document.querySelector("#pointsBig").value)
    var pointsAchive = parseFloat(document.querySelector("#pointsAchive").value)

    if(pointsAchive > pointsSmall){
        alert("Przekoroczono maksymalną liczbę punktów!")
    }
    var result = pointsAchive/pointsSmall*pointsBig

    if(!isNaN(result)){
        result = result.toFixed(2);
        document.querySelector("#pointsLibrus").value = result  
    }
    
});