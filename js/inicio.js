var animal = {
    name: 'Karl',
    type: 'cat',
    color: 'black',
    age: 7
   };
   
   //convert JSON animal into a string
   var dehydratedAnimal = JSON.stringify(animal);
   
   //save it with local storage
   window.localStorage.setItem('animal', dehydratedAnimal);
   
   //get 'animal' and rehydrate it  (convert it back JSON)
   var rehydratedAnimal = JSON.parse(window.localStorage.getItem('animal'));

   console.log(rehydratedAnimal); 