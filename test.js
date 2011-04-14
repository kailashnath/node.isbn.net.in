var isbn = require('./isbn');

isbn.lookup('142000280').on('err',
    function(err) { 
        console.log("ERROR :", err);
     }).on('success',
     function(books) {
         console.log("BOOKS :", books.count());
     });
