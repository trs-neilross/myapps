var dbname = 'mydb.sqlite';
var datalist=[];
exports.Wins = function(){
	Titanium.UI.setBackgroundColor('#000');
	var tabGroup = Ti.UI.createTabGroup();
	
	var windw = Ti.UI.createWindow({
			Title: 'USER DATA',
			backgroundColor:'white'
	});
	
	var adduserWindow = Ti.UI.createWindow({
		Title: 'Modify user',
		backgroundColor:'white',
		url:'WindowUI/adduser.js'
	});

	var userTab = Ti.UI.createTab({
		title:'user data',
		window: windw
	});
	
	var adduserTab = Ti.UI.createTab({
		title:'Modify user',
		window: adduserWindow
	});
	var getData = function(){
		var i=0;
		var mydb = Ti.Database.open(dbname);
		var sql= "select * from tbuser";
		var rows= mydb.execute(sql);
		if(rows.getRowCount()>0){
			while(rows.isValidRow()){
				datalist[i]={title:rows.fieldByName('username')};
				i++;
				rows.next();
			}
		}
		return datalist;
	}
	var table = Ti.UI.createTableView({
		data: getData()
	});
	
	table.addEventListener('click', function(e){
		alert(e.index);
	});
	userTab.addEventListener('click',function(e){
		getData();
	});
	
	adduserTab.addEventListener('click',function(e){
		getData();
	});
	
	
	windw.add(table);
	tabGroup.addTab(userTab);
	tabGroup.addTab(adduserTab);
	tabGroup.open();
	return windw;
}


