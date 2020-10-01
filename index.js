const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const Golden = require('./golden-trio-factory-function');
const golden = Golden();
let app = express();


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render("index", {
  });
});

app.post('/', function (req, res) {

  const { buyer } = req.body;
  console.log({ buyer });

  if (req.body.buyer == 'client') {
    res.redirect('/client')
    return
  } else {
    res.redirect('/business')
  }

});

app.get('/client/:clientType', function (req, res) {
  const clientType = res.params.clientType;

  if (clientType === "Mover") {
  }else if(clientType === "Nail Technician"){
  }else{
    clientType === "Plumber"
  res.redirect('/client/:clientType')
  }

  }


);

app.get('/client', function (req, res) {

  var plumbers = [
    { business: "Plumber", name: "Avela", surname: "Bhinqa" },
    { business: "Plumber", name: "Jacob", surname: "Lubisi" },
    { business: "Plumber", name: "Isriel", surname: "Sontonga" },
    { business: "Plumber", name: "Menzi", surname: "Johnson" },
    { business: "Plumber", name: "Xolani", surname: "Thimla" },
  ];

  var nails = [
    { business: "Nail Technician", name: "Zinzi", surname: "Nxele" },
    { business: "Nail Technician", name: "Bongiwe", surname: "Zweni" },
    { business: "Nail Technician", name: "Bulelwa", surname: "Mkhize" },
    { business: "Nail Technician", name: "Candice", surname: "Mayers" },
    { business: "Nail Technician", name: "Julia", surname: "Bidoli" },
    { business: "Nail Technician", name: "Hazel", surname: "Peter" },
    { business: "Nail Technician", name: "Zenande", surname: "Moya" },
  ];

  var movers = [

    { business: "Mover", name: "Senzo", surname: "Sithole" },
    { business: "Mover", name: "Mzwamadoda", surname: "Sikhweyiya" },
    { business: "Mover", name: "Mzwamadoda", surname: "Sikhweyiya" },
    { business: "Mover", name: "Mandla", surname: "Sithole" },

  ];

  res.render("client", {
    serviceProviders: [...movers, ...nails, ...plumbers]

  });

});

app.get('/business', function (req, res) {
  res.render("business-owner", {
  });
});

let PORT = process.env.PORT || 3030;


app.listen(PORT, function () {

  console.log('App starting on port', PORT);
});
