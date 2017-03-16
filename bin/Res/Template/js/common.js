//常量定义
function getAddress(){
	return "http://gameBox.kuwo.cn";
}
//常量定义
function getFlashHtmlName(){
	return "flash_new.html";
}
//获得图片cdn的路径
function getImgCdnPath(){
	return "http://star.kwcdn.kuwo.cn:81/star/NewKwGameBox/";
}
function getFLASH_URL(id,name){
	var FLASH_URL = getAddress() + "/NewKwGameBox/FlashGame.html?gameId=" + id + "&gameName=" + name;
	FLASH_URL = encodeURI(FLASH_URL);
	return FLASH_URL;
}
function getWEB_URL(gameId){
	var WEB_URL = getAddress() + "/NewKwGameBox/smallIndex_10?gid=" + gameId;
	return WEB_URL;
}

//判断是否为IE6
function isIe6(){
	var arVersion = navigator.appVersion.split("MSIE");
	var version = parseFloat(arVersion[1]);
	if ((version >= 5.5) && (version < 7)){
		return true;
	}else{
		return false;
	}
}

//获得随机数
function getRandom(){
	var number = Math.random();
	number = number * 1000000000;
	number = Math.ceil(number);
	return number;
}
//----------------------------调用外部接口--------------------------------------------
/**
 * 打开注册框
 */
function openD_Reg(){
	try{
		window.external.CallKWGameBox("User/?src=LobbyLogin_Web&action=reg");
	}catch(error){}
}

/**
 * 打开登录框
 */
function openD_Login(){
	try{
		window.external.CallKWGameBox("User/?src=LobbyLogin_Web&action=login");
	}catch(error){}
}

/**
 * 通知游戏盒退出登录
 */
function CallGBoxLogout(){
	try{
		window.external.CallKWGameBox("User/?Logout");
	}catch(error){}
}
/**
 * 通知游戏盒开始登陆
 */
function CallGBoxBeginLogin(){
	try{
		window.external.CallKWGameBox("User/?BeginLogin");
	}catch(error){}
}
/**
 * 通知游戏盒登陆结束（异常登录）
 */
function CallGBoxLoginFailed(){
	try{
		window.external.CallKWGameBox("User/?LoginFailed");
	}catch(error){}
}
/**
 * 左上角用户区登录
 * @param uname
 * @param pwd
 * @param uid
 * @param autologin
 * @return
 */
function LobbyLogin_Web(uname,pwd,uid,uph,autologin,t3,uname3,uhead3){
	try{
		uname = window.external.CallKWGameBox("Base64/?encode=" + uname);
		if(pwd != null && pwd.length > 1) {
			pwd = window.external.CallKWGameBox("Base64/?encode=" + pwd);			
		}
		if(typeof t3 != undefined && t3 != null) {
			t3 = window.external.CallKWGameBox("Base64/?encode=" + t3);
		}
		if(typeof uname3 != undefined && uname3 != null) {
			uname3 = window.external.CallKWGameBox("Base64/?encode=" + uname3);
		}
		if(typeof uhead3 != undefined && uhead3 != null) {
			uhead3 = window.external.CallKWGameBox("Base64/?encode=" + uhead3);
		} else {
			uhead3 = '';
		}
		if(typeof t3 != undefined && typeof uname3 != undefined && t3 != null && uname3 != null) {
			window.external.CallKWGameBox("User/?src=LobbyLogin_Web&account=" + uname + "&pwd=" + pwd + "&uid="+ encodeURI(uid) + "&uph=" + encodeURI(uph) + "&autologin=" + autologin + "&action=login&thirdtype=" + t3 + "&thirdname=" + uname3 + "&thirdhead=" + uhead3);
		} else {
			window.external.CallKWGameBox("User/?src=LobbyLogin_Web&account=" + uname + "&pwd=" + pwd + "&uid="+ encodeURI(uid) + "&uph=" + encodeURI(uph) + "&autologin=" + autologin + "&action=login");
		}

		var uinf = window.external.CallKWGameBox("User/?GetUserInfo");
		
		//登陆后发送统计
		SendStat("Login","GameBox");
		
//		alert(uinf);
	}catch(error){}
}
/**
 * 左上角用户区登录
 * @param uname
 * @param pwd
 * @param uid
 * @param autologin
 * @return
 */
function LobbyLogin_Web_10(uname,pwd,uid,uph,uimg,autologin,t3,uname3,uhead3){
	try{
		uname = window.external.CallKWGameBox("Base64/?encode=" + uname);
		if(pwd != null && pwd.length > 1) {
			pwd = window.external.CallKWGameBox("Base64/?encode=" + pwd);			
		}else{
			pwd='';
		}
		if(t3!=null && t3!="undefined" && t3.length>1){
			t3 = window.external.CallKWGameBox("Base64/?encode=" + t3);
			uname3 = window.external.CallKWGameBox("Base64/?encode=" + uname3);
			uhead3 = window.external.CallKWGameBox("Base64/?encode=" + uhead3);
		}else{
			t3='';
			uname3='';
			if(uimg != null && uimg.length > 1) {
				uimg = window.external.CallKWGameBox("Base64/?encode=" + uimg);			
			}
			uhead3 = uimg;
		}
		//alert("User/?src=LobbyLogin_Web&account=" + uname + "&pwd=" + pwd + "&uid="+ encodeURI(uid) + "&uph=" + encodeURI(uph) + "&autologin=" + autologin + "&action=login&thirdtype=" + t3 + "&thirdname=" + uname3 + "&thirdhead=" + uhead3);
		window.external.CallKWGameBox("User/?src=LobbyLogin_Web&account=" + uname + "&pwd=" + pwd + "&uid="+ encodeURI(uid) + "&uph=" + encodeURI(uph) + "&autologin=" + autologin + "&action=login&thirdtype=" + t3 + "&thirdname=" + uname3 + "&thirdhead=" + uhead3);

		//登陆后发送统计
		//SendStat("Login","GameBox");
		
//		alert(uinf);
	}catch(error){}
}
/**
 * 弹出登录框登录
 * @param uname
 * @param pwd
 * @param uid
 * @param uph
 * @param autologin
 * @return
 */
function Login_Web(uname,pwd,uid,uph,autologin){
	try{
		uname = window.external.CallKWGameBox("Base64/?encode=" + uname);
		pwd = window.external.CallKWGameBox("Base64/?encode=" + pwd);
		window.external.CallKWGameBox("User/?src=Login_Web&account=" + uname + "&pwd=" + pwd + "&uid="+ encodeURI(uid) + "&uph=" + encodeURI(uph) + "&autologin=" + autologin + "&rempwd=false&action=login");
	}catch(error){}
}

/**
 * 获取本地存储的用户信息
 * @return
 */
function GetUserInfo(){
	var userInfo = window.external.CallKWGameBox("User/?GetUserInfo");
	return userInfo;
}


/**
 * 获取当前被打开的游戏类型的数量
 * @param gameType
 * @return
 */
function GetOpenGameNum(gameType){
	var num = window.external.CallKWGameBox("GameBox/?GetOpenGameNum=" + gameType);
	return num;
}

/**
 * (调用游戏盒)打开标签或刷新标签
 * @param opentab－在那个窗口打开。 New 、 UserList 、 Home 、其他
 * @param url－网页的 URL
 * @param tabname －标签名
 * @param tabdisplay－标签显示名
 * @param tabtip －标签提示信息。默认和 tabdisplay 一致
 * @param gametype－游戏类型WebGame、FlashGame
 * @param gameid－游戏ID
 * @param serverid
 * @param htmltype-模版类型（flash、flashlist）
 * @param loadtype-loading类型（true,false）
 * @return
 */
function OpenWeb(opentab,url,tabname,tabdisplay,tabtip,gametype,gameid,serverid,htmltype,loadtype,intr,oper){
	try{
		if(htmltype == undefined){
			htmltype ="";
		}
		if(opentab == "New"){
			url = window.external.CallKWGameBox("Base64/?encode=" + url);
			tabname = window.external.CallKWGameBox("Base64/?encode=" + tabname);
			tabdisplay = window.external.CallKWGameBox("Base64/?encode=" + tabdisplay);
			tabtip = window.external.CallKWGameBox("Base64/?encode=" + tabtip);
			var callParameter = "OpenWeb/" +
					"?opentab="+opentab+
					"&url="+url+ 
					"&tabname=" + tabname + 
					"&tabdisplay=" + tabdisplay + 
					"&tabtip=" + tabtip + 
					"&gametype=" + gametype + 
					"&gameid=" + gameid +
					"&serverid=" + serverid +
					"&htmltype=" + htmltype;
			//不显示loading页面
			if(loadtype=="false"){callParameter+="&loadtype=false"}
			if(intr != undefined && oper != undefined){
				//intr = window.external.CallKWGameBox("Base64/?encode=" + intr);
				//oper = window.external.CallKWGameBox("Base64/?encode=" + oper);
				callParameter=callParameter+"&gamebrief="+intr;
				callParameter=callParameter+"&opintroduce="+oper;
			}
			window.external.CallKWGameBox(callParameter);
		}else if(opentab == "UserList" || opentab == "Home"){
			url = window.external.CallKWGameBox("Base64/?encode=" + url);
			window.external.CallKWGameBox("OpenWeb/?opentab="+opentab+"&url="+url);
		}
	}catch(error){}
}

/**
 * 打开一个提示框
 * @param tips
 * @param btnname0
 * @param btnname1
 * @return
 */
function OpenTipDlg(tips,btnname0,btnname1){
	try{
		tips = window.external.CallKWGameBox("Base64/?encode=" + tips);
		window.external.CallKWGameBox("OpenTipDlg/?btnname0="+btnname0+"&btnname1="+btnname1+"&tips="+tips);
	}catch(error){}
}

/**
 * 打开一个有确定和取消的提示框
 * @param tips
 * @param btnname0
 * @param btnname1
 * @return
 */
function OpenConfirmTipDlg(tips,btnok,btncancel){
	var bool = true;
	try{
		tips = window.external.CallKWGameBox("Base64/?encode=" + tips);
		var returnStr = window.external.CallKWGameBox("OpenTipDlg/?btnok="+btnok+"&btncancel="+btncancel+"&tips="+tips);
		bool = returnStr == "ok" ? true : false;
	}catch(error){}
	return bool;
}

/**
 * 自定义格式解析
 */
function ParseUdf(udfStr,form){
	//发送统计
	if(form == "NEW_SERVER_INFO"){
		form = "Index_NEW_SERVER_INFO";
	}else if(form == "Index_WELTER_IMAGES"){
		form = "Index_WELTER_IMAGES";
	}
	//解析数据
	var array = udfStr.split("|");
	if(array[0] == "openGame"){
		var gameId = array[1];
		if(gameId == undefined){
			return;
		}
		var gameServerId = array[2];
		if(gameServerId == undefined){
			gameServerId = 0;
		}
		//请求游戏信息并打开游戏
		reqAndOpenGameById(gameId,gameServerId);
	}else if(array[0] == "openWebDetail"){
		var gameId = array[1];
		var url = getWEB_URL(gameId);
		
		//发送统计
		var jsparam = "openWebDetail_" + gameId + "|" + form;
		callJScript("UserList","callJsSendStat",jsparam);
		
		
		OpenWeb("Home",url,"","","");
	}else if(array[0] == "openWebPage"){
		var url = array[1];
		
		//发送统计
		var jsparam = "openWebPage_" + url + "|" + form;
		callJScript("UserList","callJsSendStat",jsparam);
		
		window.open(url);
	}
}

/**
 * 通过游戏ID和服务器ID获取打开游戏所需要的网址等信息
 * @param GID
 * @param SID
 * @return
 */
function reqAndOpenGameById(GID,SERVER_ID,form){
 	$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/getOpenGameInfoBy_B?path=byId&GID="+GID+"&SERVER_ID="+SERVER_ID+"&jsoncallback=?",
	 	function(result){
 			if(form!= undefined){
 				beginGame(result.TYPE,form,result.NAME,result.GID,result.S_ID);
 			}else{
 				//开始游戏
 	 			beginGame(result.TYPE,result.S_URL,result.NAME,result.GID,result.S_ID);
 			}
 		}
 	);
}
/**
 * 通过游戏ID获取打开游戏所需要的网址等信息（flash游戏专用）
 * @param GID
 * @param SID
 * @return
 */
function reqAndOpenFlashGameById(GID){
 	$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/getOpenGameInfoBy_B?path=flash&GID="+GID+"&jsoncallback=?",
	 	function(result){
 			beginGame(result.TYPE,result.LINK,result.NAME,result.GID,0,getAddress(),result.INTR,result.OPER);
 		}
 	);
}
/**
 * 小号通过游戏ID和服务器ID获取打开游戏所需要的网址等信息（闹钟进游戏专用）
 * @param GID
 * @param SID
 * @return
 */
function reqAndOpenGameByIdByClock(GID,SERVER_ID,uid,uname,uph){
 	$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/getOpenGameInfoBy_B?path=byId&GID="+GID+"&SERVER_ID="+SERVER_ID+"&jsoncallback=?",
	 	function(result){
 			//开始游戏
 			smallBeginGame("1",uname,uid,uph,result.TYPE,result.S_URL,result.NAME,result.GID,result.S_ID);
 		}
 	);
}

/**
 * 通过游戏官网获取打开游戏所需要的网址等信息(打开小官网)
 * @param webStr
 * @return
 */
function reqAndOpenGameByWeb(webStr){
	$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/getOpenGameInfoBy_B?path=byWeb&webStr="+webStr+"&jsoncallback=?",
		 	function(result){
				if(result.GID != undefined){
					var url = getWEB_URL(result.GID);
					OpenWeb("Home",url,"","","");
				}else{
					OpenTipDlg("解析URL出错!","确定","");
				}
	 		}
	 	);
}


/**
 * 打开游戏(判断是网页游戏还是小游戏)
 * @param obj : gameType,url,gameName,gameId,gameServerId
 */
function verdictGameAndOpen(obj){
	if(obj.gameType == "WebGame"){
		var url = getWEB_URL(obj.gameId);
		OpenWeb("Home",url,"","","");
	}else if(obj.gameType == "FlashGame"){
		url = getFLASH_URL(obj.gameId,obj.gameName);
		beginGame(obj.gameType,url,obj.gameName,obj.gameId,0);
	}
}

/**
 * 开始游戏
 * @param gameType				游戏类型
 * @param url					打开的URL			
 * @param gameName				游戏名	
 * @param gameId－标签显示名		游戏ID
 * @param gameServerId			服务器ID(小游戏填写0)
 * @return
 */
function beginGame(gameType,url,gameName,gameId,gameServerId,host,intr,oper){
	var tabText = "";
	var loadtype = "";
	
	if(gameType == "xiu"){
		$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/checkClientGame?gid="+gameId+"&jsoncallback=?",function(result){
			var version = result[0].version;
			var result = checkAppAndRun(version+".exe","MicroGame",url);
			if(result=="false"){
				var url64 = window.external.CallKWGameBox("Base64/?encode=" + url);
				url="http://gamebox.kuwo.cn/NewKwGameBox/number10/clientLoading.html?version="+version+"&gameId=0&type=1&url="+url64;
				tabText = "酷我秀场";
				//打开游戏
				OpenWeb('New',url,tabText,tabText,tabText,"WebGame",gameId,gameServerId,"","false");
			}
		});
	}else if(gameType == "WebGame"){
		if(url == "" || gameId == "" || gameServerId == ""){
			OpenTipDlg("打开出错,没有找到对应的服务器信息!","确定","");
			return;
		}
		//判断是不是微端/插件游戏
		$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/checkClientGame?gid="+gameId+"&jsoncallback=?",function(result){
			if(result[0].gid==gameId){
				var url64 = window.external.CallKWGameBox("Base64/?encode=" + url);
				url="http://gamebox.kuwo.cn/NewKwGameBox/number10/clientLoading.html?version="+result[0].version+"&gameId="+gameId+"&url="+url64+"&type="+result[0].type;
				loadtype="false";
			}
			tabText = gameName + " " + gameServerId + "服";
			url = url + "&box_flag=gamebox";//后缀一个参数标识游戏盒登陆
			//打开游戏
			OpenWeb('New',url,tabText,tabText,tabText,gameType,gameId,gameServerId,"",loadtype);
		});
	}else{
		tabText = gameName;
		gameServerId = 0;
		url = getFlashHtmlName()+"?url="+url;
		//打开游戏
		OpenWeb('New',url,tabText,tabText,tabText,gameType,gameId,gameServerId,"flash","false",intr,oper);
	}
	
	
	
	
	//发送统计
	var action = "openGame_" + gameId + "_" + gameServerId;
	SendStat(action,"all");
		
		
	//如果已经登录的话,则记录游戏历史(开始游戏)
	var users =window.external.CallKWGameBox("User/?GetUserInfo");
	var uid ="";
	users = eval( "(" + users + ")");
	$.each(users,function(idx){
		uid = users[idx].uid;
	});
	if(uid != "" && gameServerId!="0"){
		reqPlayGame(uid,gameId,gameServerId,gameType,host);
	}
}
/**
 * 开始游戏（小号打开游戏）
 * @param accnum				帐号总数
 * @param account[0~n]			账号名
 * @param uid[0~n]				帐号id
 * @param uph[0~n]				帐号密码
 * @param gameType				游戏类型
 * @param url					打开的URL			
 * @param gameName				游戏名	
 * @param gameId－标签显示名		游戏ID
 * @param gameServerId			服务器ID(小游戏填写0)
 * @return
 */
function smallBeginGame(accnum,accounts,uids,uphs,gameType,url,gameName,gameId,gameServerId,host){
	var tabText = "";
	if(url == "" || gameId == "" || gameServerId == ""){
		OpenTipDlg("打开出错,没有找到对应的服务器信息!","确定","");
		return;
	}
	if(accnum=="1" || accnum==1){
		var accounts1 = encodeURIComponent(accounts);
		var uphs1 = encodeURIComponent(uphs);
		$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/checkUserLoginByUph?username="+accounts1+"&uph="+uphs1+"&jsoncallback=?",
			function(result){
				if(result.jsonstr==1){
					tabText = gameName + " " + gameServerId + "服";
					//打开游戏
					SmallOpenWeb('New',url,tabText,tabText,tabText,gameType,gameId,gameServerId,accnum,accounts,uids,uphs);
						
						
					//发送统计
					var action = "openGame_" + gameId + "_" + gameServerId;
					SendStat(action,"all");
							
							
					//记录游戏历史(开始游戏)
					if(uids != "" && gameServerId!="0"){
						reqPlayGame(uids,gameId,gameServerId,gameType,host);
					}
				}else{
					OpenTipDlg("密码错误！请解除关联重新绑定!","确定","");
				}
		});
	}else{
		tabText = gameName + " " + gameServerId + "服";
		//打开游戏
		SmallOpenWeb('New',url,tabText,tabText,tabText,gameType,gameId,gameServerId,accnum,accounts,uids,uphs);
		
		
		//发送统计
		var action = "openGame_" + gameId + "_" + gameServerId;
		SendStat(action,"all");
			
			
		//记录游戏历史(开始游戏)
		if(uids[0] != "" && gameServerId!="0"){
			reqPlayGame(uids[0],gameId,gameServerId,gameType,host);
		}
	}
}
/**
 * (调用游戏盒)打开标签或刷新标签-------------------------------------(小号专用)
 * @param opentab－在那个窗口打开。 New 、 UserList 、 Home 、其他
 * @param url－网页的 URL
 * @param tabname －标签名
 * @param tabdisplay－标签显示名
 * @param tabtip －标签提示信息。默认和 tabdisplay 一致
 * @param gametype－游戏类型WebGame、FlashGame
 * @param gameid－游戏ID
 * @param serverid
 * @param htmltype-模版类型（flash、flashlist）
 * @param accnum				帐号总数
 * @param account[0~n]			账号名
 * @param uid[0~n]				帐号id
 * @param uph[0~n]				帐号密码
 * @return
 */
function SmallOpenWeb(opentab,url,tabname,tabdisplay,tabtip,gametype,gameid,serverid,accnum,accounts,uids,uphs,htmltype){
	try{
		if(htmltype == undefined){
			htmltype ="";
		}
		if(opentab == "New"){
			//拼接小号信息
			var params="&accnum="+accnum;
			if(accnum==1){
				accounts = window.external.CallKWGameBox("Base64/?encode=" + accounts);
				params+="&account0="+accounts+"&uid0="+uids+"&uph0="+uphs;
			}else{
				for(var i=0;i<accnum;i++){
					var account=window.external.CallKWGameBox("Base64/?encode=" + accounts[i]);
					params+="&account"+i+"="+account+"&uid"+i+"="+uids[i]+"&uph"+i+"="+uphs[i];
				}
			}
			
			url = window.external.CallKWGameBox("Base64/?encode=" + url);
			tabname = window.external.CallKWGameBox("Base64/?encode=" + tabname);
			tabdisplay = window.external.CallKWGameBox("Base64/?encode=" + tabdisplay);
			tabtip = window.external.CallKWGameBox("Base64/?encode=" + tabtip);
			var callParameter = "OpenWeb/" +
					"?opentab="+opentab+
					"&url="+url+ 
					"&tabname=" + tabname + 
					"&tabdisplay=" + tabdisplay + 
					"&tabtip=" + tabtip + 
					"&gametype=" + gametype + 
					"&gameid=" + gameid +
					"&serverid=" + serverid +
					"&htmltype=" + htmltype + params;
			window.external.CallKWGameBox(callParameter);
		}else if(opentab == "UserList" || opentab == "Home"){
			url = window.external.CallKWGameBox("Base64/?encode=" + url);
			window.external.CallKWGameBox("OpenWeb/?opentab="+opentab+"&url="+url);
		}
	}catch(error){}
}
/**
 * 通知服务器开始游戏
 * @param UID
 * @param GID
 * @param SERVER_ID
 */
function reqPlayGame(UID,GID,SERVER_ID,gameType,host){
	var number = Math.random();
	number = number * 1000000000;
	number = Math.ceil(number);
	var reqhost = "http://gamebox.kuwo.cn/NewKwGameBox/playGame";
	var dttype ="jsonp";
 	$.ajax({
 		url:reqhost,
 		data:{UID:UID,GID:GID,SERVER_ID:SERVER_ID,randomNumber:number},
 		dataType:dttype,
	 	success:function(result){
 			callJScript("UserList","updatePlayedGame",gameType);
 		},
	 	error:function(XMLHttpRequest,textStatus){}
 	});
}

/**
 * 调用游戏盒窗口中的js脚本
 * @param webname  UserList/Home
 * @param jsapi
 * @param jsparam
 * @return
 */
function callJScript(webname,jsapi,jsparam){
	try{
		jsparam = window.external.CallKWGameBox("Base64/?encode=" + jsparam);
		window.external.CallKWGameBox("CallJScript/?webname="+webname+"&jsapi="+jsapi+"&jsparam="+jsparam);
	}catch(error){}
}


/**
 * 发送统计
 * @param ACTION
 * @param FROM
 * @param GBOX_VER
 * @return
 */
var GBOX_VER = "";
var SOFTID = "";
var statPath = "http://stat.pet.kuwo.cn/gbox.stat?";
function SendStat(ACTION,FROM){
	if(GBOX_VER == ""){
		try{
			GBOX_VER = window.external.CallKWGameBox("GameBox/?GetVer");
		}catch(e){}
	}
	if(SOFTID == ""){
		try{
			SOFTID = window.external.CallKWGameBox("GameBox/?GetSoftID");
		}catch(e){}
	}
	//得到用户id
	var users =window.external.CallKWGameBox("User/?GetUserInfo");
	var uid ="";
	users = eval( "(" + users + ")");
	$.each(users,function(idx){
		uid = users[idx].uid;
	});
	
	
	var number = Math.random();
	number = number * 1000000000;
	number = Math.ceil(number);
	var url = statPath + "WEB_VER=NewKwGameBox" + "&ACTION=" + ACTION + "&USERID=" + uid+ "&SOFTID=" + SOFTID + "&FROM=" + FROM + "&GBOX_VER=" + GBOX_VER + "&RNUM=" + number;
	var img=new Image();
	img.src= url;
	img.style.display="none";
	document.body.appendChild(img);
	
	//document.getElementById("statIf").src = url;
}



//-------------------动态加载图片----------------------------
//原img图片写法改为:<em name="webImg" src="" class="tgPs"></em>  通过调用transformationImg传入name进行显示图片
function transformationImg(name){
	var spanImgs = $("[name="+name+"]");
	for(var i = 0 ; i < spanImgs.length ; i++){
		var htmlStr = $(spanImgs[i]).outerHTML();
		htmlStr = htmlStr.replaceAll("<em","<img");
		htmlStr = htmlStr.replaceAll("</em>","</img>");
		$(spanImgs[i]).outerHTML(htmlStr);
	}
}
jQuery.fn.outerHTML = function() {
	if(arguments.length == 0){
		return $($('<div></div>').html(this.clone())).html();
	}else{
		var s = arguments[0];
		return (s) ? this.before(s).remove() : jQuery("&lt;p&gt;").append(this.eq(0).clone()).html();
	}
};
String.prototype.replaceAll = function(s1,s2) {
	//因为要兼容IE和FF和chrome,所以用大小写各转换一次
	var returnStr = this;
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	returnStr = returnStr.replace(new RegExp(s1,"gm"),s2);
	s1 = s1.toUpperCase();
	s2 = s2.toUpperCase();
	returnStr = returnStr.replace(new RegExp(s1,"gm"),s2);
	return returnStr;
};
//URL删除参数
function UrlDelParameter(URLString,queryStringName){
	try{
		var returnValue=""; 
		//URLString=URLString.toLowerCase();//转换为小写
		var serachLocation=-1; 
		var queryStringLength=queryStringName.length; 
		do { serachLocation=URLString.indexOf(queryStringName+"\="); 
			if (serachLocation!=-1) {
				if ((URLString.charAt(serachLocation-1)=='?') || (URLString.charAt(serachLocation-1)=='&')) {
					URLString=URLString.substr(serachLocation);
					break; 
				}
				URLString=URLString.substr(serachLocation+queryStringLength+1); 
			}  
		}while (serachLocation!=-1);
		if (serachLocation!=-1) { 
			var seperatorLocation=URLString.indexOf("&"); 
			if (seperatorLocation==-1) { 
			   returnValue=URLString.substr(queryStringLength+1); 
			} else { 
			   returnValue=URLString.substring(queryStringLength+1,seperatorLocation); 
			}
		}
		var p = queryStringName + "=" + returnValue;
		var symbol = URLStr.charAt(URLStr.indexOf(p)-1);
		if(symbol == "?"){
			p += "&";
		}else if(symbol == "&"){
			p = "&" + p;
		}
		URLStr = URLStr.replace(p,"");
		return URLStr;
	}catch(e){
		return URLString;
	}
}

/**
 * 获取本地存储的flash游戏列表
 * @return
 */
function GetAllLocalFalsh(type,size){
	var flashdata = window.external.CallKWGameBox("FlashGame/?type="+type+"&size="+size);
	return flashdata;
}
/**
 * 游戏加载到缓存后，获取本地存储的flash游戏
 * @return
 */
function GetLocalFalshById(type,gameid,gamename,filename){
	gamename = window.external.CallKWGameBox("Base64/?encode=" + gamename);
	var flashdata = window.external.CallKWGameBox("FlashGame/?type="+type+"&gameid="+gameid+"&gamename="+gamename+"&filename="+filename);
	return flashdata;
}

/**
 * 删除指定的flash游戏
 * @return
 */
function DelLocalFalsh(type,gameid){
	var flashdata = window.external.CallKWGameBox("FlashGame/?type="+type+"&gameid="+gameid);
	return flashdata;
}

/**
 * 刷新和加载接口
 * @return
 */
function gameCMD(type){
	try{
		window.external.CallKWGameBox("WebCMD/?type="+type);
	}catch(error){}
}

/**
 * 维护闹钟接口
 * alarmclock/?type=add/del&...............
	id=主键
	hour=
	min=
	inter_time= 0/1-
	repeat_day=10000001
	ext=base64()
 */
function AddClock(type,id,hour,min,inter_time,repeat_day,ext){
	try{
		if(type=="add"){
			window.external.CallKWGameBox("AlarmClock/?type="+type+"&id="+id+
					"&hour="+hour+"&min="+min+"&inter_time="+inter_time+"&inter_num=1&repeat_day="+repeat_day+
					"&ext="+ext);
		}
	}catch(error){}
}
/**
 * 删除闹钟
 */
function DelClock(type,id){
	try{
		if(type=="del"){
			window.external.CallKWGameBox("AlarmClock/?type="+type+"&id="+id);
		}
	}catch(error){}
}
/**
 * 关闭窗体
 * @return
 */
function closeForm(){
	try{
		window.external.CallKWGameBox("POPDLGCLOS");
	}catch(error){}
}
/**
 * 得到有效的闹钟
 */
function getTrueClock(uid){
	$.getJSON("http://gamebox.kuwo.cn/NewKwGameBox/getEffectiveClock?uid="+uid+"&jsoncallback=?",
		function(result){
			if(result!=null && result.length>0){
				if(result[0].uid!="-1" && result[0].uid!="-2" && result[0].uid!="-3"){
					var date = new Date();
					var time = parseInt(date.getTime()/1000);
					for(var i=0;i<result.length;i++){
						if(result[i].is_week == 0 || time < result[i].is_week){
							var ext = "ext="+result[i].uname+"-"+result[i].uid+"-"+result[i].gname+"-"+result[i].gid+"-"+result[i].sid+"-"+result[i].remark+"-"+result[i].uph+"-"+result[i].is_voice;
							ext = window.external.CallKWGameBox("Base64/?encode=" + ext);
							AddClock("add",result[i].id,result[i].hour,result[i].min,result[i].inter_time,result[i].repeat_day,ext);
						}
					}
				}
			}
	});
}
/**
 * 弹窗页面之前的切换
 * @param type
 * @param paras
 */
function PageJump(type,paras){
	try{
		if(paras==undefined){
			window.external.CallKWGameBox("GameBox/?OpenDialog="+type);
		}else{
			paras = window.external.CallKWGameBox("Base64/?encode=" + paras);
			window.external.CallKWGameBox("GameBox/?OpenDialog="+type+"&ExtInfo="+paras);
		}
		closeForm();
	}catch(error){}
	
}
/**
 * 检查微端是否安装，安装就直接启动
 */
function checkAppAndRun(filename,filepath,appparam){
	filepath = window.external.CallKWGameBox("Base64/?encode=" + filepath);
	filename = window.external.CallKWGameBox("Base64/?encode=" + filename);
	var result="";
	if(appparam == undefined){
		result = window.external.CallKWGameBox("MicroGame/?type=checkrun&filepath="+filepath+"&filename="+filename);
	}else{
		appparam = window.external.CallKWGameBox("Base64/?encode=" + appparam);
		result = window.external.CallKWGameBox("MicroGame/?type=checkrun&filepath="+filepath+"&filename="+filename+"&appparam="+appparam);
	}
	return result;
}
/**
 * 启动微端/插件下载
 */
function MicroGameDownload(type,url,filepath,filename){
	url = window.external.CallKWGameBox("Base64/?encode=" + url);
	filepath = window.external.CallKWGameBox("Base64/?encode=" + filepath);
	filename = window.external.CallKWGameBox("Base64/?encode=" + filename);
	var id = window.external.CallKWGameBox("Download/?type="+type+"&url="+url+"&filepath="+filepath+"&filename="+filename);
	
	return id;
}
/**
 * 执行本地的exe应用
 * @returns
 */
function execMicroGame(filename,filepath,appparam){
	filename = window.external.CallKWGameBox("Base64/?encode=" + filename);
	filepath = window.external.CallKWGameBox("Base64/?encode=" + filepath);
	if(appparam == undefined){
		window.external.CallKWGameBox("MicroGame/?type=exec&filename="+filename+"&filepath="+filepath);
	}else{
		appparam = window.external.CallKWGameBox("Base64/?encode=" + appparam);
		window.external.CallKWGameBox("MicroGame/?type=exec&filename="+filename+"&filepath="+filepath+"&appparam="+appparam);
	}
}
/**
 * 通知游戏盒用户签到信息
 * @param action
 * @param sign
 * @param sum
 * @param addscore
 */
function execSign(action,sign,sum,addscore){
	var execStr = "Sign/?action="+action+"&sign="+sign;
	if(sum != undefined){
		execStr+="&sum="+sum;
	}
	if(addscore != undefined){
		execStr+="&addscore="+addscore;
	}
	window.external.CallKWGameBox(execStr);
	
}
//URL进游戏
function OpenGameOfPageURL(url){
	   if(url.indexOf("gameid")!=-1 && url.indexOf("serverid")!=-1 ){
			var begin=url.indexOf("gameid=");
			var url1 = url.substr(begin);
			url1 = url1.replaceAll("&","=");
			var strs= new Array();   
			strs=url1.split("=");
			reqAndOpenGameById(strs[1],strs[3],url);
	   }else{
		   OpenTipDlg("抱歉，无法进入游戏","确定","");
	   }
}