/*mon tableau de fruits*/
const card = ["🍏", "🍐", "🍋", "🍑", "🍓", "🥑", "🍍", "🍒 ", "🍈", "🍉"];

/* Je récupère ma div html memory qui contiendra l'ensemble du jeu*/               
let memory  = document.getElementById('memory');

/*attribue un noeud enfant de mémory(index0)*/
const blockChild = memory.childNodes;

/* concaténation de card*/ 
carde = card.concat(card);
carde.sort(() => Math.random() -0.5);
let cardReturn = [];
let cardOk = [];
let nbClics = 0;
let point = 0;

/*ma boucle de 20 éléments*/
for(let i = 0; i < 20; i++ ) {
  
    /* div parent pour contenir le front et le back */
    let parent = document.createElement('div');

    /*je crée mes deux div front et back*/
    /* un = carte vide
       deux = carte fruit*/
    let un = document.createElement('div');

    let deux = document.createElement('div');

    /*parent récupère un*/
    parent.prepend(un);

    /*on attribue a deux la valeur de card i*/
    deux.innerHTML = card[i]; 

    /*parent récupère deux*/
    parent.prepend(deux);
    deux.innerHTML = carde[i]; 
    /*parent est ajouté a memory*/
    memory.prepend(parent);
    
    
    un.classList.add('front');
    deux.classList.add('back');
    un.innerHTML = 'GO'
    
    parent.classList.add('parent');
    
    
    let motifsCartes=['front'];
    
    
   //au clic la div parent fait une rotation//
   //cardReturn récupère chaque carte retournée//
    
    parent.addEventListener('click', function() {
    parent.classList.toggle('rotate')
    cardReturn.push(parent)
     
    /*si mon nombre de cartes retournées = 2*/
    /*si mes 2 cartes retournées ne sont pas identiques elles se retournent au bout de 1s*/
    if(cardReturn.length == 2){
      if(cardReturn[0] !== cardReturn[1] ){
        setTimeout(function(){
          for (const c of cardReturn){
            c.classList.toggle('rotate');
            cardReturn = [];
            console.log();
          }
        },600);
       
      } if(cardReturn[0].innerHTML == cardReturn[1].innerHTML){
        cardOk.push(cardReturn)
        cardReturn= [];
        const result = document.getElementById('result');
        point++;
        result.innerHTML = 'Score : ' + point
        console.log(cardOk);
      }
      if(cardOk.length == 10 ){
       alert('gagné');
       
      }
    
    }
    
  })

}
    
    

    
    
    
    
    
  
    

 


    
    
    
    
  
    
    
   
    
    
    
   
   
   
    
   
    
    

    
  
   

     
   
    
   
    
   
    
 
   


 
 
      
   
    
   


 



    




 
