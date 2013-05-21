var dbname = 'mydb.sqlite';
var mainW = require('WindowUI/mainwindow').Wins;

Ti.Database.install('mydb.sqlite',dbname);
exports.searchItem= function(_username,_password){
	var mydb = Ti.Database.open(dbname);
	var sql= "select * from tbuser where username = '" + _username + "' and password= '" + _password + "'";
	try{
		var rows = mydb.execute(sql);
		if(rows.rowCount>0){
			new mainW().open();
		}else{
			alert('wrong password');
		}
		
		mydb.close();
	}catch(e){
		Titanium.API.info(e);
	}
};

