const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const Golden = require('./golden-trio-factory-function');
const golden = Golden();
let app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
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

app.get('/client/:clientId', function (req, res) {
  //const clientType = res.params.clientType;

  const serviceProvider = golden.getServiceProvider(req.params.clientId);
  res.render('clientType', {
    clientType: [serviceProvider]
  })
  //res.redirect('/client/:clientType')
}




);

app.get('/client', function (req, res) {

 

  res.render("client", {
    serviceProviders: golden.getServiceProviders()
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
