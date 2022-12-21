
let confirmButton = document.getElementById("confirm-button");
let resetButton = document.getElementById("reset-button");


confirmButton.onclick = function(){
    const name = document.getElementById("name").value;
    const km = document.getElementById("km").value;
    const age = document.getElementById("age").value;
    

    if (name==null || name==="" || km==null || km===""|| age==null || age===""){
        console.log("dati");
        alert("Dati non corretti")
    }


    else{
        document.getElementById("ticket").style.display = "block";
        const priceForKm = 0.21; 
        let price = km * priceForKm;
        if (age == "Under-18"){
            discount20 = price/100*20;
            price = price - discount20;
        }
    
        else if (age == "Over-65"){
            discount40 = price/100*40;
            price = price - discount40;
        }
    
        else{
    
        }
        
        let coach = Math.floor(Math.random() * 10) + 1;
        let cp = Math.floor(Math.random() * (99999 - 90000)) + 90000;
        document.getElementById("price").innerText = price + "€";
        document.getElementById("passenger-name").innerText = name;
        document.getElementById("rate").innerText = age;
        document.getElementById("coach").innerText = coach;
        document.getElementById("cp").innerText = cp;
    }
}

resetButton.onclick = function(){
    document.getElementById("ticket").style.display = "none";
}