var h5pullDown = true;




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

mui.plusReady(function() {
	//系统状态栏
	plus.navigator.setStatusBarBackground("#259cf0");
	plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
})

