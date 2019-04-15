const age = 25;
//let i=0;
// while (i<1000) {
//     if (i % age ===0) {
//         console.log (i)
//     } i++;
// }

// do {
//     if (i % age ===0) {
//              console.log (i);}
//      i++;
// } while (i<1000);

// for(let i=0; i<1000; i+=2){
//     if (i % age ===0) {
//     console.log (i);
// }
// }





// const sidea = 5;
// const h = 4;


// const othersidea = 50;
// const otherh = 44;


// //let s = sidea*h/2;
// //squere (sidea,h);
// console.log(squere (sidea, h));
// console.log(squere (othersidea, otherh));
// console.log(squere (5, 10));


// function squere (a,h)
// {
// return a*h/2;
// }

// function sumPeriod (from, to) {
//     let sum = 0;
//     for( let i = from; i<to; i++ ){
//         sum +=i;
//     }
//     console.log(sum);

// }
// sumPeriod(2,5);
// sumPeriod(0,5);

// sumPeriod(7,5);
// sumPeriod('2',5);
// sumPeriod('fgdfgs',5);
 const list = ['хліб','молоко', 'сир', 'апельсин' ];
 const list2 = ['хліб','молоко', 'апельсин' ];

 const list3 = ['хліб','молоко', 'Aпельсин' ];


 function createlist (array){
     for (let i=0; i<array.length; i++) {
         console.log (`${i}. ${array[i].toUpperCase()}`);

     }

 }
 createlist(list);
 createlist(list2);
 createlist(list3);







