var dbname = 'mydb.sqlite';
var db = null;
var open   = function(){ db = Ti.Database.open(dbname); }; 
var close  = function(){ db.close();};

exports.InsertNewUser = function(_user,_pass){
	open();
	db.execute('INSERT INTO tbuser values(?,?)',_user,_pass);
}
