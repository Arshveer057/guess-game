let randomm = Math.floor(Math.random () * 40 ) +1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () =>{
    const guess = Number(document.querySelector('.guess').value);


 if(!guess){
    document.querySelector('.message').textContent = "Please enter a number..."
 }

 else if(guess == randomm){
  document.querySelector('.message').textContent = "correct number"
  document.querySelector('.number').textContent = randomm;
  document.querySelector('body').style.backgroundColor = 'SKYBLUE';

 if( score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
 
 }

 else if (guess > randomm){
   if(score > 1){
    document.querySelector('.message').textContent= 'Entered number is higher';
    score--;
    document.querySelector('.score').textcontent = score;
   }
   else{
    document.querySelector('.message').textContent = 'sorry you loss'
    document.querySelector('.score').textContent = 0;
   }
    }
    
    else if (guess < randomm){
        
        if(score > 1){
            document.querySelector('.message').textContent = 'Entered number is lower'
            score--;
            document.querySelector('.score').textcontent = score;
           }
           else{
            document.querySelector('.message').textContent = 'sorry you loss'
            document.querySelector('.score').textContent = 0;
           }
    }


    // document.querySelector('.btn').addEventListener('click',() =>{
    //     score = 20;
    //  randomm = Math.floor(Math.random () * 40 ) +1;
    //  document.querySelector('.message').textContent = "Please enter a number..."
    //  document.querySelector('.score').textContent = "score"
    //  document.querySelector('.guess').textContent = 0;
    //  document.querySelector('.number').textContent = '?';
    //  document.querySelector('body').style.backgroundColor = 'grey';
    // }
     
})