!function () {
  var duration = 50;
  $(".actions").on("click", "button", function (e) {
    let $button = $(e.currentTarget);
    let speed = $button.attr("data-speed");
    $button.addClass("active").siblings(".active").removeClass("active");
    switch (speed) {
      case "slow":
        duration = 100;
        break;
      case "normal":
        duration = 50;
        break;
      case "fast":
        duration = 10;
        break;
    }
  });
  function writeCode(prefix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    let id;
    id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  let code = `/*
  	* 你好呀，我来画一只可爱的皮卡丘
	* 首先，需要准备皮卡丘的皮
	*/
   .preview{
	 background: #FEE433;
   }
   /*
	* 接下来，画皮卡丘的鼻子
	*/
   .nose{
	 width: 0px;
	 height: 0px;
	 border-style: solid;
	 border-width: 12px;
	 border-color: black transparent transparent;
	 border-radius: 11px;
	 position: absolute;
	 left: 50%;
	 top: 28px;
	 margin-left: -12px;
   }
   /*
	* 接下来，画皮卡丘的眼睛
	*/
   .eye{
	 width: 49px;
	 height: 49px;
	 background: #2E2E2E;
	 position: absolute;
	 border-radius: 50%;
	 border: 2px solid #000000;
   }
   /*
	* 眼睛里面的珠子
	*/
   .eye::before{
	 content: '';
	 display: block;
	 width: 24px;
	 height: 24px;
	 background: white;
	 position: absolute;
	 border-radius: 50%;
	 left: 6px;
	 top:-1px;
	 border: 2px solid #000;
   }
   /*
	* 左眼
	*/
   .eye.left{
	 right: 50%;
	 margin-right: 90px;
   }
   /*
	* 右眼
	*/
   .eye.right{
	 left: 50%;
	 margin-left: 90px;
   }
   /*
	* 然后，画皮卡丘的脸
	*/
   .face{
	 width: 68px;
	 height: 68px;
	 background: #FC0D1C;
	 border: 2px solid black;
	 border-radius: 50%;
	 position: absolute;
	 top: 85px;
   }
   /*
	* 将脸放到正确的位置
	*/
   .face.left{
	 right: 50%;
	 margin-right: 116px;
   }
   .face.right{
	 left: 50%;
	 margin-left: 116px;
   }
   /*
	* 上嘴唇
	*/
   .upperLip{
	 height: 25px;
	 width: 80px;
	 border: 2px solid black;
	 position: absolute;
	 top: 50px;
	 background: #FDE348;
   }
   .upperLip.left{
	 right: 50%;
	 border-bottom-left-radius: 40px 25px;
	 border-top: none;
	 border-right: none;
	 transform: rotate(-20deg);
   }
   .upperLip.right{
	 left: 50%;
	 border-bottom-right-radius: 40px 25px;
	 border-top: none;
	 border-left: none;
	 transform: rotate(20deg);
   }
   /*
	* 下嘴唇
	*/
   .lowerLip-wrapper{
	 bottom: 0;
	 position: absolute;
	 left: 50%;
	 margin-left: -150px;
	 height: 110px;
	 overflow: hidden;
	 width: 300px;
   }
   .lowerLip{
	 height: 3500px;
	 width: 300px;
	 background: #990513;
	 border-radius: 200px/2000px;
	 border: 2px solid black;
	 position: absolute;
	 bottom: 0;
	 overflow: hidden;
   }
   /*
	* 小舌头
	*/
   .lowerLip::after{
	 content: '';
	 position: absolute;
	 bottom: -20px;
	 width: 100px;
	 height: 100px;
	 background: #FC4A62;
	 left: 50%;
	 margin-left: -50px;
	 border-radius: 50px;
   }
   /*
	* 好了，这只皮卡丘送给你
	*/
   `;
  writeCode("", code);
}.call();

// 测试代码chunk

// var result = `
// 	body{
// 		background:grey;
// 	}
// 	*{
// 		transition: all 1s;
// 	}
// 	html{
// 		font-size:16px;
// 		background:grey
// 	}
// `
// var n = 0
// var id = setInterval(()=>{
// 	n+=1;
// 	code.innerHTML = result.substring(0,n);
// 	code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
// 	styleCSS.innerHTML = result.substring(0,n)
// 	if (n>result.length) {
// 		window.clearInterval(id)
// 	}
// },10)

// window.jQuery= function(nodeSelector){
// 	let nodes = []
// 	nodes.addClass = function(){}
// 	nodes.html  =function(){}
// 	return nodes
// }

// window.jQuery.ajax = function(options){
// 	let url
// 	if ( arguments.length ===1) {
// 		url = options.url
// 	}else if (arguments.length ===2) {
// 		url = arguments[0];
// 		options =arguments[1]
// 	}
// let method = options.method;
// let successFn = options.successFn;
// let body = options.body;
// let failFn  = options.failFn;
// let headers = options.headers
// let request = new XMLHttpRequest()

// es6 解构赋值
// let(method,successFn,body,failFn,headers) = options

// window.jQuery.ajax = function({url,method,body,headers}){
// 	return new Promise(function(resolve,reject){
// 		let request = new XMLHttpRequest()
// 		request.open(method,url)
// 		for(let key in headers){
// 			let value = headers[key]
// 			request.setRequestHeader(key,value)
// 		}
// 		request.onreadystatechange = ()=>{
// 			if(request.readyState===4){

// 				if (request.status>=200&&request.status<300) {
// 					resolve.call(undefined,request.responseText)
// 				}else if(request.status>=400){
// 					reject.call(undefined,request)
// 				}
// 			}
// 		}
// 		request.send(body)
// 	})
// }
// myButton.addEventListener('click',e=>{
// 	window.jQuery.ajax(
// 			{
// 				url:'/xxx',
// 				method:'get',
// 				headers:{
// 					'Content-Type':'text/json;charset=utf-8',
// 					'Steven':'18'
// 				},
// 			}
// 		).then(
// 		(text)=>{console.log(text)},
// 		(request)=>{console.log(request)}
// 	)
// })

// window.$ = window.jQuery
