// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// TAB 1
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundImage:''
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'VandalStore',
    window:win1
});

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
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Textbooks',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Textbooks page',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

// TAB 3
//
var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Appearl',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'Appearl page',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
