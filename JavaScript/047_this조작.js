// call()
var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

// var peter = {
//     name : 'Bruce Wayne',
//     sayName : function(){    
//         console.log(this.name);
//     }
// }

peter.sayName() // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne
peter.sayName.call(bruce, '!'); // Bruce Wayne!



// apply() - call과의 차이 인자 1개? 2개?
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);



// bind()
function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName : sayName
}

var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
}

peter.sayName();
bruce.sayName();
