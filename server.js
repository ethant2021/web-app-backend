var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('XamarinProject'); // Create a table for 'XamarinProject' with default settings
mobileApp.tables.add('Users'); // Create a table for 'XamarinProject' with default settings
mobileApp.tables.add('genInfo1'); // Create a table for 'XamarinProject' with default settings
mobileApp.tables.add('MainTable'); // Create a table for 'XamarinProject' with default settings



app.use(mobileApp);
app.listen(process.env.PORT || 3000);
