// Data types
// string

var string = "This is a tutorial to aid Nick in his overall life before I have to leave forever this is getting kindof long but you get my drift, I think.";
console.log(string);
console.log("String Length: " + string.length);

// number

var number = 7.09;
console.log("My number is " + number);

// function

var convertBooleanYesNo = function(boolean) {
    // conditionals, if-else
    if (boolean == true) {
        return "yes";
    }
    else {
        return "no";
    }
};

// boolean

var serverReadyAvailableForClients = false;
console.log("Allowing clients? " + convertBooleanYesNo(serverReadyAvailableForClients));

// object
/*
var object = {};
object.subobject = {};
object.subobject.nick = "Nick is cool";

console.log(object);

var custom_array = function() {
    var result = {};
    var index = 0;
    
    result.push = function(item) {
        result[index] = item;
        index = index + 1;
    };
    result.pop = function() {
        index = index - 1;
        var last_item = result[index];
        delete result[index];
        
        return last_item;
    };
    
    return result;
};

var my_array = custom_array();

my_array.push("steven");
my_array.push("isn't");
my_array.push("cool");
my_array.push("stuff");

var last_item = my_array.pop();

console.log(my_array, last_item);
*/

var a = {
    "b": {
        "danger_zone": "something that warns you against doing this type of thing"
    },
    "nick": "nick is generally a great person, have you met him? like so great :b"
};
var b = a["b"];


console.log(a, b);