var h5pullDown = true;


var apiUrl = "http://116.62.232.164:9898/";

//html转义
function html_decode(str) {
	var s = "";
	if(str.length == 0) return "";
	s = str.replace(/&amp;/g, "&");
	s = s.replace(/&lt;/g, "<");
	s = s.replace(/&gt;/g, ">");
	s = s.replace(/&nbsp;/g, " ");
	s = s.replace(/&#39;/g, "\'");
	s = s.replace(/&quot;/g, "\"");
	s = s.replace(/<br\/>/g, "\n");
	return s;
}

function html_clean(str) {
	var s = "";
	if(str.length == 0) return "";
	s = str.replace(/&amp;nbsp;/g, "");
	s = s.replace(/&lt;(.*?)&gt;/g, "");
	return s;
}
function removeHtmlTab(tab) { 
 	tab = tab.replace(/</g,'');//删除所有HTML标签 
 	return tab.replace(/>/g,'');
} 

mui.plusReady(function() {
	//系统状态栏
	plus.navigator.setStatusBarBackground("#259cf0");
	plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");



	//plus.storage.setItem("UserId", 'admin');
	//plus.storage.setItem("Password", '96E79218965EB72C92A549DD5A330112'); 
	plus.storage.setItem("Ran", '123');
	plus.storage.setItem("Sign", '4297F44B13955235245B2497399D7A93');
	
	if(plus.storage.getItem('UserId')==null&&plus.webview.currentWebview().id!='login'){ 
		mui.openWindow({
			url: 'login.html',
			id: 'login',
			createNew: true,
			show: {
				autoShow: true,
				aniShow: false,
				duration: 200
			},
			waiting: {
				autoShow: false
			}
		}) 
		return false; 
	}
})