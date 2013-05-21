var win = Ti.UI.currentWindow;
var InsertWindow = require('WindowUI/Window_add');
win.orientationModes = [Ti.UI.PORTRAIT];
var addUser = Ti.UI.createButton({
	Title: 'Add new user',
	width:300, height:40, top:80,
	color:'blue'
});

var EditUser = Ti.UI.createButton({
	Title: 'Edit user',
	width:300, height:40, top:120,
	color:'blue'
});

var DeleteUser = Ti.UI.createButton({
	Title: 'Delete User',
	width:300, height:40, top:160,
	color:'blue'
});

addUser.addEventListener('click',function(e){
	win.add(shadow)
	win.add(frmLog);
});

var frmLog = Ti.UI.createView({
	top : 60,
	left: 30,
	right: 30,
	bottom: 210,
	opacity: 1,
	borderRadius: 10,
	height: 250,
	backgroundColor: 'gray',
	borderColor:'white',
	layout: "vertical"
});
var blur = Ti.UI.createAnimation({
	opacity: 0.50
})
var shadow = Ti.UI.createView({
	opacity: 0.50,
	height: '100%',
	width: '100%',
	backgroundColor: 'black',
	borderColor: 'black'
});

var txtuser = Ti.UI.createTextField({
	hintText: "Enter Username",
	top: 10,
	left: 30,
	right: 30,
	height:50,
	borderRadius: 10,
	borderColor:'blue',
	backgroundColor: 'white',
	txtID : "txtuser"
});

var txtpass = Ti.UI.createTextField({
	hintText: "Enter Password",
	top:10,
	left: 30,
	right: 30,
	height:50,
	borderRadius: 10,
	borderColor:'blue',
	backgroundColor: 'white',
	txtID : "txtpass"
});

var btnAdd = Ti.UI.createButton({
	title: "Add",
	btnID : "btnAdd",
	top:15,
	height:40,
	width: 100
});
var btnCancel = Ti.UI.createButton({
	title: "Cancel",
	btnID : "btncancel",
	top:15,
	height:40,
	width: 100
});

btnAdd.addEventListener('click',function(e){
	if(txtuser.value == '' || txtpass.value == ''){
		alert('no value');
	}else{
		InsertWindow.InsertNewUser(txtuser.value,txtpass.value);
		win.remove(frmLog);
		win.remove(shadow);
	}
});

btnCancel.addEventListener('click',function(e){
	win.remove(frmLog);
	win.remove(shadow);
});

frmLog.add(txtuser);
frmLog.add(txtpass);
frmLog.add(btnAdd);
frmLog.add(btnCancel);
shadow.animate(blur);
win.add(addUser);
win.add(EditUser);
win.add(DeleteUser);