/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.1
build: 47
*/
YUI.add("lang/datatype-date-format_ja",function(A){A.Intl.add("datatype-date-format","ja",{"a":["日","月","火","水","木","金","土"],"A":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"b":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"B":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"c":"%Y年%m月%d日(%a)%k时%M分%S秒 %Z","p":["午前","午後"],"P":["午前","午後"],"x":"%y/%m/%d","X":"%k时%M分%S秒"});},"3.1.1");YUI.add("lang/datatype-date_ja",function(A){},"3.1.1",{use:["lang/datatype-date-format_ja"]});YUI.add("lang/datatype_ja",function(A){},"3.1.1",{use:["lang/datatype-date_ja"]});