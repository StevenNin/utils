
var result = `
	body{
		background:grey;
	}
	*{
		transition: all 1s;
	}
	html{
		font-size:16px;
		background:grey
	}
`
var n = 0
var id = setInterval(()=>{
	n+=1;
	code.innerHTML = result.substring(0,n)
	styleCSS.innerHTML = result.substring(0,n)
	console.log('oneTIme')
	if (n>result.length) {
		window.clearInterval(id)
	}

},10)






window.jQuery= function(nodeSelector){
	let nodes = []
	nodes.addClass = function(){}
	nodes.html  =function(){}
	return nodes
}

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


window.jQuery.ajax = function({url,method,body,headers}){
	return new Promise(function(resolve,reject){	
		let request = new XMLHttpRequest()
		request.open(method,url)
		for(let key in headers){
			let value = headers[key]
			request.setRequestHeader(key,value)
		}
		request.onreadystatechange = ()=>{
			if(request.readyState===4){
				
				if (request.status>=200&&request.status<300) {
					resolve.call(undefined,request.responseText)
				}else if(request.status>=400){
					reject.call(undefined,request)
				}
			}
		}
		request.send(body)
	})
}

myButton.addEventListener('click',e=>{
	window.jQuery.ajax(
			{
				url:'/xxx',
				method:'get',
				headers:{
					'Content-Type':'text/json;charset=utf-8',
					'Steven':'18'
				},
			}
		).then(
		(text)=>{console.log(text)},
		(request)=>{console.log(request)}
	)
})

window.$ = window.jQuery