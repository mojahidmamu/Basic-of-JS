console.log( 'Mojahid');
// option-1
//  <button onclick="document.body.style.backgroundColor='Yellow' ">Make Yellow </button>

// option-2
function makered(){
  document.body.style.backgroundColor = 'red';
}
// option-3
const makeblueButton = document.getElementById('make-blue');
      makeblueButton.onclick = makeBlue;

      function makeBlue(){
        document.body.style.backgroundColor = 'blue';
      }
// option-3 another
 const PurpleButton = document.getElementById('make-purple');
      PurpleButton.onclick = function makepurple(){
        document.body.style.backgroundColor = 'purple';
      }

      // option-3
      const pinkbutton = document.getElementById('make-pink');
       pinkbutton.addEventListener('click', makepink);

       function makepink(){
        document.body.style.backgroundColor = 'pink';
       }

      //  option-4 another
      const makegreenbutton = document.getElementById('make-green');
       makegreenbutton.addEventListener('click', function makegreen(){
        document.body.style.backgroundColor = 'green';
       }
      )

      // option-4 Final
      document.getElementById('make-orange').addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange';
       })