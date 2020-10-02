module.exports = function Golden() {

    var plumbers = [
        { business_name: "Plumber", first_name: "Avela", last_name: "Bhinqa" },
        { business_name: "Plumber", first_name: "Jacob", last_name: "Lubisi" },
        { business_name: "Plumber", first_name: "Isriel", last_name: "Sontonga" },
        { business_name: "Plumber", first_name: "Menzi", last_name: "Johnson" },
        { business_name: "Plumber", first_name: "Xolani", last_name: "Thimla" },
    ];

    var nails = [
        { business_name: "Nail Technician", first_name: "Zinzi", last_name: "Nxele" },
        { business_name: "Nail Technician", first_name: "Bongiwe", last_name: "Zweni" },
        { business_name: "Nail Technician", first_name: "Bulelwa", last_name: "Mkhize" },
        { business_name: "Nail Technician", first_name: "Candice", last_name: "Mayers" },
        { business_name: "Nail Technician", first_name: "Julia", last_name: "Bidoli" },
        { business_name: "Nail Technician", first_name: "Hazel", last_name: "Peter" },
        { business_name: "Nail Technician", first_name: "Zenande", last_name: "Moya" },
    ];

    var movers = [

        { business_name: "Mover", first_name: "Senzo", last_name: "Sithole" },
        { business_name: "Mover", first_name: "Mzwamadoda", last_name: "Sikhweyiya" },

    ];

    const serviceProviders = [...movers, ...nails, ...plumbers];
    let id = 1;
    serviceProviders.forEach(function(serviceProvider){
      
        serviceProvider.id = id++;
    })


    var storedNames = {};

    function namesStored(name) {
        if (storedNames[name] === undefined) {
            storedNames[name] = 0;

        }
        storedNames[name]++

    }

    function client() {
        return storedNames;
    }

    function clentType(clientType) {

        if (clientType === "Mover") {
            return "true"
        } else if (clientType === "Nail Technician") {
            return "..."
        } else if (clientType === "Plumber") {
            return "."
        }

        // }else if(namesStored === "Nail Technician"){
        // }else{
        //     namesStored === "Plumber"

    }

    function getServiceProvider(id) {
        return serviceProviders.find(function(serviceProvider) {
            return serviceProvider.id == id;
        });
    }


    function getServiceProviders() {
        return serviceProviders;
    }

    return {

        namesStored,
        client,
        clentType,
        getServiceProvider,
        getServiceProviders
    }
}