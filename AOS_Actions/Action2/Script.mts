AIUtil.SetContext Window("regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
AIUtil.FindTextBlock("POPULAR ITEMS").Click
AIUtil("right_triangle", micAnyText, micFromRight, 1).Click
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil.FindText("CHECKOUT", micFromBottom, 1).Click
AIUtil("button", "NEXT").Click
AIUtil.FindText("PAY NOW").Click
wait 3
AIUtil.SetContext Window("regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
xText = AIUtil.FindTextBlock(micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Order Summary")).GetText
Parameter("OrderNumber")= Right(xText, 10)
DataTable.GlobalSheet.AddParameter "OrderNumber", Parameter("OrderNumber")

SystemUtil.CloseProcessByName "chrome.exe"





