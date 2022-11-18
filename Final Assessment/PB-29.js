// JavaScript function to sort the following array of objects by title value

const library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function sortByTitle(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(sortByTitle)); //used Sort methd of array