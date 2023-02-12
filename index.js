addEventListener("load",function(){

var c = document.getElementById("game")
var c2 = c.getContext("2d")
c2.imageSmoothingEnabled = false;

// variaveis \\
var lixo = [0,0,0,0,0,0]
var ivida = 10
var idefesa = 1
var iforca = 1
var inivel = 1
var vida = 10
var maxvida = 10
var defesa = 1
var defesamax = 1
var forca = 1
var forcamax = 1
var nivel = 1
var xp = 0
var inventario = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var loot = 0
var itemsloja = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var game = 2
var inimigovida = 0
var inimigoforca = 0
var luta = 0
var turno = 0
var cturno = 0
var gold = 10
var grap = false
var mousei = [0,0,0,0,0,0,]
var x = -100
var y = -100
var troca = []
var au1 = 0
var au2 = 0
var au3
var au4
var aleau = 0
var lastequp = []
//pngs
var ske = new Image()
ske.src = "imgs/goblin.png"
var ske2 = new Image()
ske2.src = "imgs/goblin2.png"
var ske3 = new Image()
ske3.src = "imgs/goblin3.png"
var fundo = new Image()
fundo.src = "imgs/fundo.png"
var telinha = new Image()
telinha.src = "imgs/telinha.png"
var shop = new Image()
shop.src = "imgs/shop.png"
var dungeon = new Image()
dungeon.src = "imgs/dungeon.png"
var fundo2 = new Image()
fundo2.src = "imgs/fundoloja.png"
var items = []
var tespada = new Image()
tespada.src = "imgs/telinhaespada.png"
var tescudo = new Image()
tescudo.src = "imgs/telinhaescudo.png"
var tpotion= new Image()
tpotion.src ="imgs/telinhapotion.png"
items[0] = new Image()
items[0].src = "imgs/itemtest.png"
items[1] = new Image()
items[1].src = "imgs/itemtesrarot.png"
items[2] = new Image()
items[2].src = "imgs/espadadeferro.png"
items[3] = new Image()
items[3].src = "imgs/escudodemadeira.png"
items[4] = new Image()
items[4].src = "imgs/escudodeferro.png"
items[5] = new Image()
items[5].src = "imgs/potiondecura.png"
items[6] = new Image()
items[6].src = "imgs/potiondedefesa.png"
items[7] = new Image()
items[7].src = "imgs/potiondeforça.png"

var numerodeitem = items.length
var t = [[390,370],[430,370],[470,370],[390,410],[430,410],[470,410],[390,450],[430,450],[470,450]]
var tshop =[[430,210],[480,210],[530,210]]
var equipamentos = [[150,370]]
var equi = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

//pngs
// functions \\
function inimigostats1(inimigovida)
{
   inimigovida = Math.ceil(Math.random() * nivel*(Math.random()*20)) + 5;
   return inimigovida;
}
function inimigostats2(inimigoforca)
{
   inimigoforca = Math.ceil(Math.random() * nivel)+Math.ceil(Math.random()*10)
   return inimigoforca;
}
function levelup(){
    maxvida+=2
    forca+=1
    defesa+=1
    nivel+=1
    forcamax+=1
    defesamax+=1

}
function aleato(){
    au4 = 0
    au3 = Math.ceil(Math.random()* 24)
    if(au3 == 1 || au3 == 2 || au3 == 3){
        itemsloja[au4] = [1,5,"Ataque",10,"Espada de madeira",10]
    }
    if(au3 == 4 || au3 == 5){
        itemsloja[au4] = [2,20,"Ataque",100,"Espada de madeira rara",45]
    }
    if(au3 == 6 || au3 == 7 || au3 == 8){
        itemsloja[au4] = [3,10,"Ataque",120,"Espada de ferro",20]
    }
    if(au3 == 9 || au3 == 10 || au3 == 11){
        itemsloja[au4] = [4,4,"Defesa",8,"Escudo de madeira",10]
    }
    if(au3 == 12 || au3 == 13 || au3 == 14){
        itemsloja[au4] = [5,8,"Defesa",50,"Escudo de ferro",10]
    }
    if(au3 == 15 || au3 == 16 || au3 == 17 || au3 == 18 || au3 == 19){
        itemsloja[au4] = [6,10,"Curamagica",5,"Poção de cura",30]
    }
    if(au3 == 20 || au3 == 21 || au3 == 22){
        itemsloja[au4] = [7,5,"DefesaMagica",16,"Poção de defesa",12]
    }
    if(au3 == 23 || au3 == 24){
        itemsloja[au4] = [8,3,"Ataquemagico",25,"Poção de Aumento de força",10]
    }
    au4 = 1
    au3 = Math.ceil(Math.random()* 24)
    if(au3 == 1 || au3 == 2 || au3 == 3){
        itemsloja[au4] = [1,5,"Ataque",10,"Espada de madeira",10]
    }
    if(au3 == 4 || au3 == 5){
        itemsloja[au4] = [2,20,"Ataque",100,"Espada de madeira rara",45]
    }
    if(au3 == 6 || au3 == 7 || au3 == 8){
        itemsloja[au4] = [3,10,"Ataque",120,"Espada de ferro",20]
    }
    if(au3 == 9 || au3 == 10 || au3 == 11){
        itemsloja[au4] = [4,4,"Defesa",8,"Escudo de madeira",10]
    }
    if(au3 == 12 || au3 == 13 || au3 == 14){
        itemsloja[au4] = [5,8,"Defesa",50,"Escudo de ferro",10]
    }
    if(au3 == 15 || au3 == 16 || au3 == 17 || au3 == 18 || au3 == 19){
        itemsloja[au4] = [6,10,"Curamagica",5,"Poção de cura",30]
    }
    if(au3 == 20 || au3 == 21 || au3 == 22){
        itemsloja[au4] = [7,5,"DefesaMagica",16,"Poção de defesa",12]
    }
    if(au3 == 23 || au3 == 24){
        itemsloja[au4] = [8,3,"Ataquemagico",25,"Poção de Aumento de força",10]
    }
    au4 = 2
    au3 = Math.ceil(Math.random()* 24)
    if(au3 == 1 || au3 == 2 || au3 == 3){
        itemsloja[au4] = [1,5,"Ataque",10,"Espada de madeira",10]
    }
    if(au3 == 4 || au3 == 5){
        itemsloja[au4] = [2,20,"Ataque",100,"Espada de madeira rara",45]
    }
    if(au3 == 6 || au3 == 7 || au3 == 8){
        itemsloja[au4] = [3,10,"Ataque",120,"Espada de ferro",20]
    }
    if(au3 == 9 || au3 == 10 || au3 == 11){
        itemsloja[au4] = [4,4,"Defesa",8,"Escudo de madeira",10]
    }
    if(au3 == 12 || au3 == 13 || au3 == 14){
        itemsloja[au4] = [5,8,"Defesa",50,"Escudo de ferro",10]
    }
    if(au3 == 15 || au3 == 16 || au3 == 17 || au3 == 18 || au3 == 19){
        itemsloja[au4] = [6,10,"Curamagica",5,"Poção de cura",30]
    }
    if(au3 == 20 || au3 == 21 || au3 == 22){
        itemsloja[au4] = [7,5,"DefesaMagica",16,"Poção de defesa",12]
    }
    if(au3 == 23 || au3 == 24){
        itemsloja[au4] = [8,3,"Ataquemagico",25,"Poção de Aumento de força",10]
    }


}
// functions \\
// funçao loop \\
function gameloop(){
    if(gold < 0){
        alert("ERRO GOLD")
    }
    c2.clearRect(0,0,1000,1000)
    
    if(game == 3){

        if(aleau == 0){
            aleato()
            aleau = 1
        }
        c2.drawImage(fundo2,0,0,800,350)
        c2.drawImage(dungeon,0,280,128,64)
        c2.drawImage(telinha,430,210,40,40)//1
        c2.drawImage(telinha,480,210,40,40)//2
        c2.drawImage(telinha,530,210,40,40)//3
        
            
            if(!(itemsloja[0][0] == 0)){
                c2.drawImage(items[itemsloja[0][0]-1],430,210,32,32)
            }
            if(!(itemsloja[1][0] == 0)){
                c2.drawImage(items[itemsloja[1][0]-1],480,210,32,32)
            }
            if(!(itemsloja[2][0] == 0)){
                c2.drawImage(items[itemsloja[2][0]-1],530,210,32,32)
                
            }
            au2 = 0
            if(x > tshop[au2][0] && x < tshop[au2][0]+50 && y > tshop[au2][1] && y < tshop[au2][1]+50 && !(itemsloja[au2][0] == 0)){
                c2.drawImage(telinha,x,y-50,128,64)
                c2.fillText(itemsloja[au2][4], x+10, y-40,150);
                c2.fillText(itemsloja[au2][2]+":"+itemsloja[au2][1], x+10, y-20,150);
                c2.fillText("preço:"+itemsloja[au2][3], x+10, y,150);
            }
            au2 = 1
            if(x > tshop[au2][0] && x < tshop[au2][0]+50 && y > tshop[au2][1] && y < tshop[au2][1]+50 && !(itemsloja[au2][0] == 0)){
                c2.drawImage(telinha,x,y-50,128,64)
                c2.fillText(itemsloja[au2][4], x+10, y-40,150);
                c2.fillText(itemsloja[au2][2]+":"+itemsloja[au2][1], x+10, y-20,150);
                c2.fillText("preço:"+itemsloja[au2][3], x+10, y,150);
            }
            au2 = 2
            if(x > tshop[au2][0] && x < tshop[au2][0]+50 && y > tshop[au2][1] && y < tshop[au2][1]+50 && !(itemsloja[au2][0] == 0)){
                c2.drawImage(telinha,x,y-50,128,64)
                c2.fillText(itemsloja[au2][4], x+10, y-40,150);
                c2.fillText(itemsloja[au2][2]+":"+itemsloja[au2][1], x+10, y-20,150);
                c2.fillText("preço:"+itemsloja[au2][3], x+10, y,150);
            }


            
        
    }
    if(game == 2){
        if(equi[0][0] == 0){
            forca = forcamax
    
        }
        if(equi[2][0] == 0){
            defesa = defesamax
    
        }
        if(xp >100)
        {
            levelup()
            xp = 0
        }
        c2.drawImage(fundo,0,0,800,350)
        c2.drawImage(shop,450,220,128,64)
        c2.drawImage(dungeon,250,220,128,64)
        vida = maxvida
    }
    if(game == 1){
        if(luta == 0){
            inimigovida = inimigostats1(inimigovida)
            inimigoforca = inimigostats2(inimigoforca)
            luta = 1;
        }
        if(luta == 1){
            if(turno == 0){
                cturno+=1
                if(cturno > 220){
                    turno = 1
                   
                }
            }
            if(turno == 1){
            inimigovida -= forca;
            if(inimigoforca-defesa < 0){
                vida-=1
            };
            if(inimigoforca-defesa > 0){
                vida-=(inimigoforca-defesa)
            }
            if(inimigoforca-defesa == 0)
            [
                vida-=1
            ]
            if(inimigovida <= 0){
                game = 2
                xp +=10
                gold = gold+Math.ceil(Math.random()*10)
            }turno = 0
            cturno = 0
            }
            if(vida <= 0){
                game = 2
            }
            }
        
            
        c2.drawImage(fundo,0,0,800,350)
        c2.drawImage(ske,350,100,128,248)
        c2.drawImage(telinha,380,60,64,64)
        c2.fillText("Vida:"+inimigovida, 400, 80,150);
        c2.fillText("força:"+inimigoforca, 400, 100,150);
        
        
        }
    c2.drawImage(telinha,0,350,800,150)
    c2.drawImage(tespada,equipamentos[0][0],equipamentos[0][1],40,40)
    c2.drawImage(tescudo,equipamentos[0][0],equipamentos[0][1]+50,40,40)
    c2.drawImage(tpotion,equipamentos[0][0]+50,equipamentos[0][1],40,40)
    if(!(equi[0][0] == 0)){
    c2.drawImage(items[equi[0][0]-1],equipamentos[0][0],equipamentos[0][1],32,32)}
    if(!(equi[2][0] == 0)){
        c2.drawImage(items[equi[2][0]-1],equipamentos[0][0],equipamentos[0][1]+50,32,32)}
        if(!(equi[1][0] == 0)){
            c2.drawImage(items[equi[1][0]-1],equipamentos[0][0]+50,equipamentos[0][1],32,32)}
    c2.drawImage(telinha,430,410,40,40)//5
    c2.drawImage(telinha,430,370,40,40)//2
    c2.drawImage(telinha,470,370,40,40)//3
    c2.drawImage(telinha,390,370,40,40)//1
    c2.drawImage(telinha,390,410,40,40)//4
    c2.drawImage(telinha,390,450,40,40)//7
    c2.drawImage(telinha,430,450,40,40)//8
    c2.drawImage(telinha,470,410,40,40)//6
    c2.drawImage(telinha,470,450,40,40)//9
    c2.fillText("Vida:"+vida, 70, 380,150);
    c2.fillText("força:"+forca, 70, 400,150);
    c2.fillText("defesa:"+defesa, 70, 420,150);
    c2.fillText("nivel:"+nivel, 70, 440,150);
    c2.fillText("xp:"+xp+"/100", 70, 460,150);
    c2.fillText("gold:"+gold, 70, 480,150);
    if(!(inventario[0][0] == 0)){
        c2.drawImage(items[(inventario[0][0])-1],390,370,32,32)
    }
    if(!(inventario[1][0] == 0)){
        c2.drawImage(items[(inventario[1][0])-1],430,370,32,32)
    }
    if(!(inventario[2][0] == 0)){
        c2.drawImage(items[(inventario[2][0])-1],470,370,32,32)
    }
    if(!(inventario[3][0] == 0)){
        c2.drawImage(items[(inventario[3][0])-1],390,410,32,32)
    }
    if(!(inventario[4][0] == 0)){
        c2.drawImage(items[(inventario[4][0])-1],430,410,32,32)
    }
    if(!(inventario[5][0] == 0)){
        c2.drawImage(items[(inventario[5][0])-1],470,410,32,32)
    }
    if(!(inventario[6][0] == 0)){
        c2.drawImage(items[(inventario[6][0])-1],390,450,32,32)
    }
    if(!(inventario[7][0] == 0)){
        c2.drawImage(items[(inventario[7][0])-1],430,450,32,32)
    }
    if(!(inventario[8][0] == 0)){
        c2.drawImage(items[(inventario[8][0])-1],470,450,32,32)
    }
    if(!(mousei[0] == 0)){
        c2.drawImage(items[(mousei[0])-1],x-50,y-50,60,60)
    }
    if(x > t[0][0] && x <  t[0][0]+40 && y >  t[0][1] && y <  t[0][1]+40 && !(inventario[0][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[0][4], x+10, y-40,150);
        c2.fillText(inventario[0][2]+":"+inventario[0][1], x+10, y-20,150);
    }
    if(x > t[1][0] && x <  t[1][0]+40 && y >  t[1][1] && y <  t[1][1]+40 && !(inventario[1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[1][4], x+10, y-40,150);
        c2.fillText(inventario[1][2]+":"+inventario[1][1], x+10, y-20,150);
    }
    au1 = 2
    if(x > t[au1][0] && x <  t[au1][0]+40 && y >  t[au1][1] && y <  t[au1][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 3
    if(x > t[3][0] && x < t[3][0]+40 && y > t[3][1] && y < t[3][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 4
    if(x > t[4][0] && x < t[4][0]+40 && y > t[4][1] && y < t[4][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 5
    if(x > t[5][0] && x < t[5][0]+40 && y > t[5][1] && y < t[5][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 6
    if(x > t[6][0] && x < t[6][0]+40 && y > t[6][1] && y < t[6][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 7
    if(x > t[7][0] && x < t[7][0]+40 && y > t[7][1] && y < t[7][1]+40 && !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    au1 = 8
    if(x > t[8][0] && x < t[8][0]+40 && y > t[8][1] && y < t[8][1]+40&& !(inventario[au1][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(inventario[au1][4], x+10, y-40,150);
        c2.fillText(inventario[au1][2]+":"+inventario[au1][1], x+10, y-20,150);
    }
    if(x > equipamentos[0][0] && x < equipamentos[0][0]+40 && y > equipamentos[0][1] && y < equipamentos[0][1]+40 && !(equi[0][0] == 0)){
        c2.drawImage(telinha,x,y-50,128,64)
        c2.fillText(equi[0][4], x+10, y-40,150);
        c2.fillText(equi[0][2]+":"+equi[0][1], x+10, y-20,150);}
        if(x > 150 && x < 150+40 && y > 420 && y < 420+40  && !(equi[2][0] == 0)){
            c2.drawImage(telinha,x,y-50,128,64)
            c2.fillText(equi[2][4], x+10, y-40,150);
            c2.fillText(equi[2][2]+":"+equi[2][1], x+10, y-20,150);}
    requestAnimationFrame(gameloop)
}
gameloop()
// funçao loop \\
addEventListener("click",function(){
    
    if(game == 2 && event.x > 450 && event.x < 450+128 && event.y > 220 && event.y < 220+64 ){
    game = 3
    aleau = 0
    }
    if(game == 2 && event.x > 250 && event.x < 250+128 && event.y > 220 && event.y < 220+64 || game == 3 && event.x > 0 && event.x < 128 && event.y > 280 && event.y < 280+64  ){
        game = 1
        inimigovida = inimigostats1()
        inimigoforca = inimigostats2()
        }
        //shop
        if(game == 3){
        if(event.x > tshop[0][0] && event.x <  tshop[0][0]+40 && event.y >  tshop[0][1] && event.y <  tshop[0][1]+40 && mousei[0] == 0 && gold >= itemsloja[0][3] && game == 3){
            troca = itemsloja[0]
            itemsloja[0] = mousei
            mousei = troca
            gold -= mousei[3]
                }
            if(event.x > tshop[1][0] && event.x <  tshop[1][0]+40 && event.y >  tshop[1][1] && event.y <  tshop[1][1]+40 && mousei[1] == 0 && gold >= itemsloja[1][3] && game == 3 ){

                troca = itemsloja[1]
                itemsloja[1] = mousei
                mousei = troca
                gold -= mousei[3]
            }
                if(event.x > tshop[2][0] && event.x <  tshop[2][0]+40 && event.y >  tshop[2][1] && event.y <  tshop[2][1]+40 && mousei[2] == 0 && gold >= itemsloja[2][3] && game == 3 ){
                    troca = itemsloja[2]
                     itemsloja[2]= mousei
                    mousei = troca
                    gold -= mousei[3]
                }
    }
    //invetario
    
    if(event.x > t[0][0] && event.x <  t[0][0]+40 && event.y >  t[0][1] && event.y <  t[0][1]+40){
        troca = inventario[0]
        inventario[0] = mousei
        mousei = troca


        }
        if(event.x > t[1][0] && event.x <  t[1][0]+40 && event.y >  t[1][1] && event.y <  t[1][1]+40){
            troca = inventario[1]
            inventario[1] = mousei
            mousei = troca
    
    
            }
            if(event.x > t[2][0] && event.x < t[2][0]+40 && event.y > t[2][1] && event.y < t[2][1]+40){
                troca = inventario[2]
                inventario[2] = mousei
                mousei = troca
        
        
                }
                if(event.x > t[3][0] && event.x < t[3][0]+40 && event.y > t[3][1] && event.y < t[3][1]+40){
                    troca = inventario[3]
                    inventario[3] = mousei
                    mousei = troca
            
            
                    }
                    if(event.x > t[4][0] && event.x < t[4][0]+40 && event.y > t[4][1] && event.y < t[4][1]+40){
                        troca = inventario[4]
                        inventario[4] = mousei
                        mousei = troca
                
                
                        }
                        if(event.x > t[5][0] && event.x < t[5][0]+40 && event.y > t[5][1] && event.y < t[5][1]+40){
                            troca = inventario[5]
                            inventario[5] = mousei
                            mousei = troca
                    
                    
                            }
                            if(event.x > t[6][0] && event.x < t[6][0]+40 && event.y > t[6][1] && event.y < t[6][1]+40){
                                troca = inventario[6]
                                inventario[6] = mousei
                                mousei = troca
                        
                        
                                }
                                if(event.x > t[7][0] && event.x < t[7][0]+40 && event.y > t[7][1] && event.y < t[7][1]+40){
                                    troca = inventario[7]
                                    inventario[7] = mousei
                                    mousei = troca
                            
                            
                                    }
                                    if(event.x > t[8][0] && event.x < t[8][0]+40 && event.y > t[8][1] && event.y < t[8][1]+40){
                                        troca = inventario[8]
                                        inventario[8] = mousei
                                        mousei = troca
                                
                                
                                        }
            //equip
            if(event.x > equipamentos[0][0] && event.x < equipamentos[0][0]+40 && event.y > equipamentos[0][1] && event.y < equipamentos[0][1]+40 && mousei[2] == "Ataque" || event.x > equipamentos[0][0] && event.x < equipamentos[0][0]+40 && event.y > equipamentos[0][1] && event.y < equipamentos[0][1]+40 && mousei[0] == 0){
                troca = equi[0]
                equi[0] = mousei
                mousei = troca
                if(!(equi[0][0] == 0)){
                    forca = forcamax
                    forca += equi[0][1]
                }

            }
            if(event.x > 150 && event.x < 150+40 && event.y > 420 && event.y < 420+40 && mousei[2] == "Defesa" || event.x > equipamentos[0][0] && event.x > 150 && event.x < 150+40 && event.y > 420 && event.y < 420+40 && mousei[0] == 0){
                troca = equi[2]
                equi[2] = mousei
                mousei = troca
                if(!(equi[2][0] == 0)){
                    defesa = defesamax
                    defesa += equi[2][1]
                }}
                if(event.x > 150+50 && event.x < 150+40+50 && event.y > 370 && event.y < 370+40){
                    if(mousei[2] == "Curamagica"){ 
                    troca = equi[1]
                    equi[1] = mousei
                    mousei = troca
                    vida+=equi[1][1]
                    equi[1] = lixo}

                    
                    if(mousei[2] == "DefesaMagica"){ 
                        troca = equi[1]
                        equi[1] = mousei
                        mousei = troca
                        defesa+=equi[1][1]
                        equi[1] = lixo}
                        
                    if(mousei[2] == "Ataquemagico"){ 
                        troca = equi[1]
                        equi[1] = mousei
                        mousei = troca
                        forca+=equi[1][1]
                        equi[1] = lixo}
                        
                        }
                    }
            
                    
            
    
    

)
addEventListener("mousemove",function(){
 x = event.x 
 y = event.y
})
}) 