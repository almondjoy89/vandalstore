// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// TAB 1
//
var win1 = Titanium.UI.createWindow({  
    title:'VandalStore Home',
    backgroundImage:''
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'VandalStore',
    window:win1
});

//could not get the image to upload properly but still left the code in here

//win1.backgroundColor = 'white';
//var image = Ti.UI.createImageView({
  //image:'\VandalstoreHours.png'
//});

//win1.add(image);
//win1.open();

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'VandalStore Home',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//var pdfViewer = Ti.UI.createWebView({
	//url:  
//});


win1.add(label1);

//
// TAB 2
//
var win2 = Titanium.UI.createWindow({  
    title:'Technology',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Technology',
    window:win2
});

//var label2 = Titanium.UI.createLabel({
	//color:'#999',
	//text:'Textbooks page',
	//font:{fontSize:20,fontFamily:'Helvetica Neue'},
	//textAlign:'center',
	//width:'auto'
//});

//This should really be a drop-down selection list instead of table, but I don't have that sort of functionality or data
win2.backgroundColor = 'white';
var tableData = [ {title: 'Apple', hasChild:true}, {title: 'Accessories', hasChild:true}, {title: 'Software', hasChild:true}, {title: 'Go Pro', hasChild:true} ];

var table = Ti.UI.createTableView({
  data: tableData,
  top: 5,
  left: 5
});

win2.add(table);
win2.open();

//win2.add(label2);

// TAB 3
//
var win3 = Titanium.UI.createWindow({  
    title:'Apparel',
    backgroundColor:'#fff'
});

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Apparel',
    window:win3
});

//var label3 = Titanium.UI.createLabel({
	//color:'#999',
	//text:'Apparel page',
	//font:{fontSize:20,fontFamily:'Helvetica Neue'},
	//textAlign:'center',
	//width:'auto'
//});

win3.backgroundColor = 'white';
var tableData = [ {title: 'All Apparel', hasChild:true}, {title: 'Kids Apparel', hasChild:true}, {title: 'Ladies Apparel', hasChild:true}, {title: 'Mens Apparel', hasChild:true} ];

var table = Ti.UI.createTableView({
  data: tableData,
  top: 5,
  left: 5
});

win3.add(table);
win3.open();

//win3.add(label3);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
