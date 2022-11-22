SystemUtil.Run "chrome.exe", "www.advantageonlineshopping.com"
AIUtil.SetContext Window("regexpwndtitle:=Google Chrome")
wait 2
AIUtil("profile", micAnyText, micFromTop, 2).Click
AIUtil("input", "Username").Type "aidemo"
AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "SIGN IN").Click


