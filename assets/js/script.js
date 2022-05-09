let div1 = document.querySelector(".test1");
let body = document.querySelector("body");
let div2 = document.querySelector(".test2");
let perso = document.getElementById("perso");
let reset = document.getElementById("reset");
let presse = document.getElementById("presse");
let vendeuse = document.getElementById("vendeusemei");
let goldtotal = document.querySelector(".variablegold");
let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");
let enemy1 = document.getElementById("enemy1");
let hors = document.querySelector(".hc")
let en_combats = document.querySelector(".ec");
walk = 0;


// Les combats
let combats = document.querySelector(".persocombats");
let in_fight = 0;

// bouton boutique
let oui = document.querySelector(".oui");
let non = document.querySelector(".non");
let oui2 = document.querySelector(".oui2");
let non2 = document.querySelector(".non2");
let oui3 = document.querySelector(".oui3");
let non3 = document.querySelector(".non3");
let oui4 = document.querySelector(".oui4");
let non4 = document.querySelector(".non4");

// Les article
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");
let article3 = document.getElementById("article3");
let article4 = document.getElementById("article4");

let validation1 = document.getElementById("validation1");
let validation2 = document.getElementById("validation2");
let validation3 = document.getElementById("validation3");
let validation4 = document.getElementById("validation4");
let valonoff = 0;
let move_gif = 0;

let collition = 0;

let x = 900;
let y = 840;
let xenemy1 = 900;
let yenemy1 = 400;
div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;

let standin = 0;
let gold = 0;

div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
perso.style.top = y + "px";
perso.style.left = x + "px";
function resetbtn() {
    x = 900;
    y = 840;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    perso.style.top = y + "px";
    perso.style.left = x + "px";
}
reset.addEventListener("click", resetbtn)


function keyup() {
    if (collition === 0){
        if (y <= 0 || x <= 1030 && x >= 770 && y === 190 || x >= 20 && x <= 170 && y === 380){
            y+=10;
            perso.style.top = x + "px";
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
        }
    }
    else if (collition === 1){
        if (y <= 0){
            y+=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = x + "px";
        }
    }
    y-=10;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    perso.style.top = y + "px";

}
function keydown() {
    if (collition === 0){
        if (y >= 840 || y === 190 && x >= 20 && x <= 170){
            y-=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = x + "px";
        }
    }
    else if (collition === 1){
        if (y >= 840){
            y-=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = x + "px";
        }
    }
    y+=10;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    perso.style.top = y + "px";
}
function keyright() {
    if (collition === 0){
        if (x >= 1830 || x === 760 && y <= 180 || x === 10 && y <= 370 && y >= 200){
            x-=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = y + "px";
        }
    }
    else if (collition === 1){
        if (x >= 1830){
            x-=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = y + "px";
        }
    }
    x+=10;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    perso.style.left = x + "px";
}
function keyleft() {
    if (collition === 0){
        if (x <= -10 || x === 1040 && y <= 180 || x === 180 && y >= 200 && y <= 370){
            x+=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = y + "px";
        }
    }
    else if (collition === 1){
        if (x <= -10){
            x+=10;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            perso.style.top = y + "px";
        }
    }
    x-=10;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    perso.style.left = x + "px";
}
function forest1(){
    if (x === -10 && collition === 0){
        main1.style.display = "none";
        main2.style.display = "block";
        x = 1820;
        perso.style.left = x + "px";
        div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
        collition = 1;
    }
}
function ville(){
    if (x === 1830 && collition === 1){
        main1.style.display = "block";
        main2.style.display = "none";
        x = 0;
        perso.style.left = x + "px";
        div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
        collition = 0;
    }
}
function enemy1move() {
    div2.textContent = "enemy en x = " + xenemy1 + " et en y = "  + yenemy1;
    let random = Math.floor(Math.random() * 8)+1;
    enemy1.style.top = yenemy1 + "px";
    enemy1.style.left = xenemy1 + "px";
    if (random === 1 || random === 5){
        yenemy1 -= 20;
    }
    else if(random === 2 || random === 6){
        yenemy1 += 20;
    }
    else if(random === 3 || random === 7){
        xenemy1 -= 20;
        if (move_gif === 0){
            enemy1.src = "assets/img/enemy/slime/slime_left_gif.gif";
            move_gif++;
        }
    }
    else{
        xenemy1 += 20;
        if (move_gif === 1){
            enemy1.src = "assets/img/enemy/slime/slime_gif.gif";
            move_gif--;
        }
    }
    if(x < xenemy1 + 90 && x >= xenemy1 - 30 && y <= yenemy1 && y >= yenemy1 - 100){
        if (collition === 1){
            hors.style.display = "none";
            body.style.backgroundImage = "none";
            en_combats.style.display = "block";
            in_fight = 1;
            combats.src = "assets/img/liste_perso/perso_1/up/perso_2.png";
            clearInterval(interval1);
        }
    }
}

function animmove(){
    document.addEventListener("keyup", function (press){
        if (press.key === "ArrowUp" && standin === 0 || press.key === "z" && standin === 0 || press.key === "Z" && standin === 0){
            document.getElementById("perso").src="assets/img/liste_perso/perso_1/up/perso_2.png";
            walk = 0;
        }
        else if (press.key === "ArrowDown" && standin === 0 || press.key === "s"  && standin === 0 || press.key === "S" && standin === 0){
            document.getElementById("perso").src="assets/img/liste_perso/perso_1/down/perso_1.png";
            walk = 0;
        }
        else if (press.key === "ArrowRight" && standin === 0 || press.key === "d"  && standin === 0 || press.key === "D" && standin === 0){
            document.getElementById("perso").src="assets/img/liste_perso/perso_1/right/perso_2.png";
            walk = 0;
        }
        else if (press.key === "ArrowLeft" && standin === 0 || press.key === "q" && standin === 0 || press.key === "Q" && standin === 0){
            document.getElementById("perso").src="assets/img/liste_perso/perso_1/left/perso_1.png";
            walk = 0;
        }
    })
}
function movement(){
    document.addEventListener("keydown", function (move) {
        if (in_fight === 0){
            if (move.key === "ArrowUp" && standin === 0 || move.key === "z" && standin === 0 || move.key === "Z" && standin === 0){
                keyup()
                if (walk === 0){
                    document.getElementById("perso").src="assets/img/liste_perso/perso_1/perso_up.gif";
                    walk = 1;
                }
            }
            else if (move.key === "ArrowDown" && standin === 0 || move.key === "s"  && standin === 0 || move.key === "S" && standin === 0){
                keydown()
                if (walk === 0){
                    document.getElementById("perso").src="assets/img/liste_perso/perso_1/perso_down.gif";
                    walk = 1;
                }
            }
            else if (move.key === "ArrowRight" && standin === 0 || move.key === "d"  && standin === 0 || move.key === "D" && standin === 0){
                keyright()
                if (walk === 0){
                    document.getElementById("perso").src="assets/img/liste_perso/perso_1/perso_right.gif";
                    walk = 1;
                }
            }
            else if (move.key === "ArrowLeft" && standin === 0 || move.key === "q" && standin === 0 || move.key === "Q" && standin === 0){
                keyleft()
                if (walk === 0){
                    document.getElementById("perso").src="assets/img/liste_perso/perso_1/perso_left.gif";
                    walk = 1;
                }
            }
            if (move.key === "1" && move.key === "2" && move.key === "3"){
                perso.style.display = "none"
            }
            if (x <= 970 && x >= 820 && y === 190){
                goldtotal.textContent = "Vous Avez " + gold + " gold";
                presse.style.display = "block";
                presse.style.top = (y + 100) + "px";
                presse.style.left = x + "px";
                if (move.key === "f" && standin === 0){
                    vendeuse.style.display = "block";
                    standin++;
                }
                else if (move.key === "f" && standin === 1){
                    vendeuse.style.display = "none";
                    validation1.style.display = "none";
                    validation2.style.display = "none";
                    validation3.style.display = "none";
                    validation4.style.display = "none";
                    standin--;
                    valonoff = 0;
                }
            }
            else {
                presse.style.display = "none";
            }
            if(x < xenemy1 + 90 && x >= xenemy1 - 30 && y <= yenemy1 && y >= yenemy1 - 100){
                if (collition === 1){
                    hors.style.display = "none";
                    body.style.backgroundImage = "none";
                    en_combats.style.display = "block";
                    in_fight = 1;
                    combats.src = "assets/img/liste_perso/perso_1/up/perso_2.png";
                    clearInterval(interval1);
                }
            }
            forest1();
            ville();
        }
    })
}

animmove();
let interval1 = setInterval(enemy1move, 1000);
movement();
oui.addEventListener("click", function () {
    if (gold >= 50){
        gold -= 50;
        goldtotal.textContent = "Vous Avez " + gold + " gold";
    }
    else {
        alert("pas assez d'agent")
    }
})
non.addEventListener("click", function () {
    validation1.style.display = "none"
    valonoff = 0;
})
oui2.addEventListener("click", function () {
    if (gold >= 50){
        gold -= 50;
        goldtotal.textContent = "Vous Avez " + gold + " gold";
    }
    else {
        alert("pas assez d'agent")
    }
})
non2.addEventListener("click", function () {
    validation2.style.display = "none"
    valonoff = 0;
})
oui3.addEventListener("click", function () {
    if (gold >= 50){
        gold -= 50;
        goldtotal.textContent = "Vous Avez " + gold + " gold";
    }
    else {
        alert("pas assez d'agent")
    }
})
non3.addEventListener("click", function () {
    validation3.style.display = "none"
    valonoff = 0;
})
oui4.addEventListener("click", function () {
    if (gold >= 50){
        gold -= 50;
        goldtotal.textContent = "Vous Avez " + gold + " gold";
    }
    else {
        alert("pas assez d'agent")
    }
})
non4.addEventListener("click", function () {
    validation4.style.display = "none"
    valonoff = 0;
})
function article1event() {
    if (valonoff === 0){
        validation1.style.display = "block";
        valonoff++;
    }
    else{
        if (valonoff === 1){
            validation1.style.display = "none";
            valonoff--;
        }
    }
}
function article2event() {
    if (valonoff === 0){
        validation2.style.display = "block";
        valonoff++;
    }
    else{
        if (valonoff === 1){
            validation2.style.display = "none";
            valonoff--;
        }
    }

}
function article3event() {
    if (valonoff === 0){
        validation3.style.display = "block";
        valonoff++;
    }
    else{
        if (valonoff === 1){
            validation3.style.display = "none";
            valonoff--;
        }
    }
}
function article4event() {
    if (valonoff === 0){
        validation4.style.display = "block";
        valonoff++;
    }
    else{
        if (valonoff === 1){
            validation4.style.display = "none";
            valonoff--;
        }
    }
}
article1.addEventListener("click", article1event)
article2.addEventListener("click", article2event);
article3.addEventListener("click", article3event);
article4.addEventListener("click", article4event);

