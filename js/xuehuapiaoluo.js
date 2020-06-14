/ *镙峰纺*€* / 
//鑳纺* * 晥
（晥函数（函数（$）{ 
	$ .fn.snow =函数（选项）{ 
	var $ flake = $（'<div id =“（snowbox” />/>).css({'position'：'absolute'，'z-index'：'9999'，'top'：'-50px'}）。html（'＆＃10052;'） ，
	documentHeight = $（document）.height（），
	documentWidth = $（document）.width（），
	默认值= { 
		minSize：10，
		maxSize：20，
		newOn：1000，
		flakeColor：“ #AFDAEF” / * F互F氢F板F F F F F F＃FFFFFF * / 
	}，
	选项= $ .extend（{}，默认值，选项）；
	var interval = setInterval（函数（）{ 
	var startPositionLeft = Math.random（）* documentWidth-100，
	startOpacity = 0。5 + Math.random（），
	sizeFlake = options.minSize + Math.random（）* options.maxSize，
	endPositionTop = documentHeight-200，
	endPositionLeft = startPositionLeft-500 + Math.random（）* 500，
	durationFall = documentHeight * 10 + Math.random（）* 5000; 
	$ flake.clone（）。appendTo（'body'）。css（{ 
		左：startPositionLeft，
		不透明度：startOpacity，
		'font-size'：sizeFlake，
		颜色：options.flakeColor 
	}）。动画（{ 
		top：endPositionTop，
		left： endPositionLeft，
		opacity：0.2 
	}，durationFall，'linear'，function（）{ 
		$（this）.remove（）
	}）; 
	}，options.newOn）; 
    }; 
}）（jQuery）; 
$（function（）{ 
    $ .fn.snow（{
	    minSize：5，/ * *最大大小
	    ：50，/ *氢板昂昂昂* * * * / 
	    newOn：500 / *氢new昂昂昂氢氢氢氢瀵嗛泦绋嫔锛屾暟楄/瀵瀵/ / * / 
    }）; 
}）;