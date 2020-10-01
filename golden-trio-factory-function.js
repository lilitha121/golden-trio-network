module.exports = function Golden() {


    var storedNames = {};

    function namesStored(name) {
        if (storedNames[name] === undefined) {
            storedNames[name] = 0;
            
        }
        storedNames[name]++

    }

   function client(){
        return storedNames;
    }



return{

namesStored,
client
}
}