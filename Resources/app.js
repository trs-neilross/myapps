/*// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group

var num;
var temp;
var temp1;
var result;
var win1 = Ti.UI.createWindow({  
    Title:'My Apps',
    backgroundColor:'#E6B85C'
});
var itemField = Ti.UI.createTextField({
		width: '300dp',
		height: '45dp',
		top: '40dp',
		hintText: 'Click Number',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		returnKeyType: Ti.UI.RETURNKEY_DONE,
		enabled:false
	});
	
	
var label1 = Ti.UI.createLabel({
	color:'#999',
	text:'Calculator',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top: '10dp'

});

var button_7 = Ti.UI.createButton({
	 Title: '7',
	 left:10, width:40, top: 90
});

button_7.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var button_8 = Ti.UI.createButton({
	 Title: '8',
	 left:55, width:40, top: 90
});
button_8.addEventListener('click', function(e) {
	itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});


var button_9 = Ti.UI.createButton({
	 Title: '9',
	 left:100, width:40, top: 90
});
button_9.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});
var button_4 = Ti.UI.createButton({
	 Title: '4',
	 left:10, width:40, top: 135
});

button_4.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});
var button_5 = Ti.UI.createButton({
	 Title: '5',
	 left:55, width:40, top: 135
});
button_5.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var button_6 = Ti.UI.createButton({
	 Title: '6',
	 left:100, width:40, top: 135
});
button_6.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var button_1 = Ti.UI.createButton({
	 Title: '1',
	 left:10, width:40, top: 180
});
button_1.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var button_2 = Ti.UI.createButton({
	 Title: '2',
	 left:55, width:40, top: 180
});
button_2.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var button_3 = Ti.UI.createButton({
	 Title: '3',
	 left:100, width:40, top: 180
});
button_3.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});
var button_0 = Ti.UI.createButton({
	 Title: '0',
	 left:10, width:85, top: 225
});
button_0.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});


var button_dot = Ti.UI.createButton({
	 Title: '.',
	 left:100, width:40, top: 225
});
button_dot.addEventListener('click', function(e) {
		itemField.value='';
		itemField.value= itemField.value + e.source.Title;
});

var clr = Ti.UI.createButton({
	 Title: 'clear',
	 left:10, width:40, top:270
});
clr.addEventListener('click', function(e) {
	temp=0;
	temp1=0;
	result=0;
	itemField.value= '';
});

var button_plus = Ti.UI.createButton({
	Title: '+',
	left:145, width:40, top: 90
});
button_plus.addEventListener('click',function(e){
	  temp=itemField.value;
	  num=1;
	  itemField.value = '';
});	  
var button_min= Ti.UI.createButton({
	Title: '-',
	left:145, width:40, top: 135
});

button_min.addEventListener('click',function(e){
	temp=itemField.value;
	num=2;
	itemField.value = '';
});

var button_mul = Ti.UI.createButton({
	Title: '*',
	left:145, width:40, top: 180
});
button_mul.addEventListener('click',function(e){
	temp=itemField.value;
	num=3;
	itemField.value = '';
});

var button_div = Ti.UI.createButton({
	Title: '/',
	left:145, width:40, top: 225
});

button_div.addEventListener('click',function(e){
	temp=itemField.value;
	num=4;
	itemField.value = '';
});

var eql= Ti.UI.createButton({
	Title: '=',
	left: 55, width:125, top: 270
	
});
eql.addEventListener('click',function(e){
	if(num==1){
		itemField.value= parseFloat(temp) + parseFloat(itemField.value);
	}else if(num==2){
		itemField.value= parseFloat(temp) - parseFloat(itemField.value);
	}else if(num==3){
		itemField.value= parseFloat(temp) * parseFloat(itemField.value);
	}else if(num==4){
		itemField.value= parseFloat(temp) / parseFloat(itemField.value);
	}
	
});



win1.add(button_1);
win1.add(button_2);
win1.add(button_3);
win1.add(button_4);
win1.add(button_5);
win1.add(button_6);
win1.add(button_7);
win1.add(button_8);
win1.add(button_9);
win1.add(button_0);
win1.add(button_dot);
win1.add(clr);
win1.add(button_plus);
win1.add(button_min);
win1.add(button_mul);
win1.add(button_div);
win1.add(eql);
win1.add(itemField);
win1.add(label1);
win1.open();
*/

Titanium.UI.setBackgroundColor('#000');

var db = require('db');
var wind = Ti.UI.createWindow({
		Title: 'login',
		backgroundColor:'white'
});


var txtuser= Ti.UI.createTextField({
	width:'250dp',
	height:'45dp',
    top:180,
	hintText: 'Username',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE
});


var txtpass= Ti.UI.createTextField({
	width:'250dp',
	height:'45dp',
	top: 230,
	hintText: 'Password',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE
});

var btlogin=Ti.UI.createButton({
	Title: 'Login',
	width:'100', height:40, top:280,
	color:'blue'
});
var View = Ti.UI.createView({
	top:140,
	left:10,
	width:300,
	height:210,
	backgroundImage:'backgroundLogin.jpeg',
	borderColor: 'white',
	borderRadius: 10
});


btlogin.addEventListener('click', function(e){
	searchUser(txtuser.value,txtpass.value);
});

var searchUser = function(user,pass){
	db.searchItem(user,pass);

};
wind.add(View);
wind.add(txtuser);
wind.add(txtpass);
wind.add(btlogin);
wind.open();


