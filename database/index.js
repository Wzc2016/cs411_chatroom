var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : '35.225.226.226', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'moviemovie' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(8000,  "localhost", function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all reviews
app.get('/reviews', function (req, res) {
   connection.query('select * from reviews', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.get('/reviews/group', function (req, res) {
   connection.query('select Movie, COUNT(*) AS count from reviews group by Movie', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to get a single review data
app.get('/reviews/:id', function (req, res) {
   connection.query('select * from reviews where MovieId = ?', req.params.id, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});


//rest api to create a new review record into mysql database
app.post('/reviews', function (req, res) {
   var params  = req.body;
   // console.log(params);
   connection.query('INSERT INTO reviews SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.post('/reviews/union', function (req, res) {
  connection.query('select * from reviews where Movie = ? union select * from reviews where Movie = ?', [req.body.Movie1, req.body.Movie2], function(error, results, fields) {
    if(error) throw error;
    res.end(JSON.stringify(results));
  });
});

//rest api to update record into mysql database
app.put('/reviews', function (req, res) {
   connection.query('UPDATE `reviews` SET `Num_likes`=?,`Num_dislikes`=? where `Id`=?', [req.body.Num_likes, req.body.Num_dislikes, req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/reviews', function (req, res) {
   // console.log(req.body);
   connection.query('DELETE FROM `reviews` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});

app.get('/search/movies/:prefix',function (req, res) {
   // console.log(req.body);
   connection.query('select * FROM `movies` where title like ?', '%' + req.params.prefix + '%', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/search/movieid/:id',function (req, res) {
   // console.log(req.body);
   connection.query('select * FROM `movies` where id = ?', req.params.id, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.post('/users', function (req, res) {
   var params  = req.body;
   // console.log(params);
   connection.query('INSERT INTO users SET ?', params, function (error, results, fields) {
    if (error) throw error;
    // console.log(results);
    connection.query('SELECT * from users where uid=?', results.insertId, (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
     })
  });
});

app.get('/users', (req, res)=>{
  let aa = 0;
  connection.query('select * from users', (error, results, fields) => {
    if(error) throw error;
    a = results.insertId;
    res.end(JSON.stringify(results));
  })
})

app.get('/username/:username',function (req, res) {
   // console.log(req.body);
   connection.query('select * FROM `users` where user_name = ?', req.params.username, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.get('/userid/:id',function (req, res) {
   // console.log(req.body);
   connection.query('select * FROM `users` where uid = ?', req.params.id, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

app.put('/users', (req, res)=> {
    connection.query('UPDATE `users` SET `movie_list`=CONCAT(`movie_list`, ?) where `uid`=?', [ "," + req.body.movie_id, req.body.uid], function (error, results, fields) {
    if (error) throw error;
    // res.end(JSON.stringify(results));
    connection.query('SELECT * from users where uid=?', req.body.uid, (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
     })
  });
});