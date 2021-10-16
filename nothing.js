eyJ2ZXJzaW9uIjoxLjMsImZlYXR1cmVzIjp7ImxvY2F0aW9uIjp7InJvb20iOnRydWUsIm91dHNpZGUiOnRydWV9fSwic3RvcmVzIjp7Indvb2QiOjE3NCwic2NhbGVzIjoyLCJiYWl0IjowLCJmdXIiOjk0LCJtZWF0Ijo5OCwiY2xvdGgiOjEsInRlZXRoIjoxMH0sImNoYXJhY3RlciI6e30sImluY29tZSI6eyJnYXRoZXJlciI6eyJkZWxheSI6MTAsInN0b3JlcyI6eyJ3b29kIjo0fSwidGltZUxlZnQiOjl9LCJidWlsZGVyIjp7ImRlbGF5IjoxMCwic3RvcmVzIjp7Indvb2QiOjJ9LCJ0aW1lTGVmdCI6MX0sImh1bnRlciI6eyJkZWxheSI6MTAsInN0b3JlcyI6eyJmdXIiOjAsIm1lYXQiOjB9LCJ0aW1lTGVmdCI6MTB9LCJ0cmFwcGVyIjp7ImRlbGF5IjoxMCwic3RvcmVzIjp7Im1lYXQiOjAsImJhaXQiOjB9LCJ0aW1lTGVmdCI6MTB9fSwidGltZXJzIjp7fSwiZ2FtZSI6eyJidWlsZGVyIjp7ImxldmVsIjo0fSwidGVtcGVyYXR1cmUiOnsidmFsdWUiOjQsInRleHQiOiLlvojng60ifSwiZmlyZSI6eyJ2YWx1ZSI6NCwidGV4dCI6IueGiueGiueHg+eDpyJ9LCJidWlsZGluZ3MiOnsidHJhcCI6MywiaHV0IjoxLCJjYXJ0IjoxLCJsb2RnZSI6MX0sInBvcHVsYXRpb24iOjQsIndvcmtlcnMiOnsiaHVudGVyIjowLCJ0cmFwcGVyIjowfSwib3V0c2lkZSI6eyJzZWVuRm9yZXN0Ijp0cnVlfX0sInBsYXlTdGF0cyI6eyJhdWRpb0FsZXJ0U2hvd24iOnRydWV9LCJwcmV2aW91cyI6e30sIm91dGZpdCI6e30sImNvbmZpZyI6eyJzb3VuZE9uIjpmYWxzZSwibGlnaHRzT2ZmIjp0cnVlLCJoeXBlck1vZGUiOnRydWV9LCJjb29sZG93biI6e30sIm1hcmtldGluZyI6eyJwZW5yb3NlIjp0cnVlfX0=



 title="message"
 title="{{message}}"
 v-bind:title="{{message}}"
 v-bind:title="message"
 v-bind:title='message'
 v-bind:title="this.message"
 v-bind:title=message


axios.interceptors.response.use = (function(response)=>{
	

	// let config = response.config
	// let {method, url , data } = config

	let {config:{method,url,data}} = response

	if(url === '/books/1' && method === 'get'){
		response.data = {
			name :'JS 高级编程程序设计',
			number: 2,
			id: 1
		}
	} 

	var _wrap = 


	return response
})


axios.get('/books/1')
	.then(response=>{
		console.log(response)
	})





screen.width

window.innerWidth

理解viewport



export function _debounce(fn,delay) {
	var delay = delay || 200;
	var timer;
	return function() {
		var th  = this;
		var args = arguments;
		if(timer) {
			clearTimeout(timer);
		}
		time = setTimeout(function() {
			timer = null;
			fn.apply(th, args);
		},delay)
	}
}




myButton.addEventListener('click',e={
	let request = new XMLHttpRequest()
	request.open('post','/xxx')
	request.setRequestHeader('frank','18');
	request.setRequestHeader('Content-Type','x-www-form-urlencoded')
	request.send('设置第四部分')
	request.onreadystatechange = ()=>{
		if(request.readyState===4{
			console.log('请求响应完毕了')
			console.log(request.status)
			console.log(request.statusText)
			if (request.status>=200&&request.status<300) {
				console.log('请求成功')
				console.log(request.responseText)
				let string = request.responseText
				let object  = window.JSON.parse(string)
			}else if(request.status>=400){
				console.log('请求失败')
			}
		})
	}
})














var object = new object()

自有属性。空
object.__prototype__ === Object.prototype

var array = new Array('a','b','c')

自有属性。 0:'a'  1:'b'  2:'c' , length:3
array.__prototype__ === Array.prototype
Array.__prototype__ === Object.prototype


var fn = new function('x','y','return x+y')
自有属性。length：2，不可见的函数体：'reutrn x+y'
fn.__prototype__ === Function.prototype

Array is  a function
Array = function(){...}
Array.__prototype__ === Function.prototype
 

...Vuex.mapGetters(['fullName'])

 fullName(){
     return this.$store.getters.fullName
 }
// 和mapGetters。用法效果是一样的





button.onclick = function(){
	console.log(this,1)
}

1: 处理器的this值是指 触发事件的元素

button.addEventListener('click',function(){
	console.log(this,2)
})

2: 直向该元素的引用

$('ul').on('click','li'/* selector*/,function(){
	console.log(this,3)
})

3: 代表了与selector相匹配的元素




function x(){
	return object ={
		name:'object',
		f1(x){
			x.f2()
		},
		f2(){
			console.log(this) // a 
		}
	}
}


var options  ={
	name:'option',
	f1(){},
	f2(){
		console.log(this) // b
	}
}


var  x = X()
x.f1(options)









		let script = document.createElement('script')
		let functionName = 'frank' + parseInt(Math.random() * 100000, 10)
        // 前端声明一个函数, 给后端调用, 函数名通过callback传递给后端
		window[functionName] = function (result) {
            // 后端返回result, 可以是json, 可以是string
			if (result === 'success') {
				alert(`我得到的结果是${result}`)
				amount.innerText = amount.innerText - 1
			} else {
				alert('fail')
			}
		}
		script.src = 'http://jack.com:8002/pay?callback=' + functionName
		document.body.appendChild(script)
		script.onload = function (e) {
            e.currentTarget.remove() // 移除script
			delete window[functionName]
		}
		script.onerror = function () {
			alert('打钱失败')
			e.currentTarget.remove()
			delete window[functionName]
		}





// 一、原生JS
frank.com: 8001
function getJSONP(url) {
    let script = document.createElement('script') script.setAttribute('src', url) document.body.appendChild(script) script.onload = function() {
        script.remove()
    }
    script.onerror = function() {
        script.remove()
    }
}
let functionName = $ {
    parseInt(Math.random() * 100000000, 10)
}`window[functionName] = function(data) {
    console.log(data)
}
let url = `http://www.jack.com:8002?callback= functionName getJSONP(url`
frank.com: 8002...
if (path === '/') {
    response.statusCode = 200 response.setHeader('Content-Type', 'application/javascript') response.write(`$ {
        query.callback
    }.call(undefined, {
        'status': 'success',
        'date': 'hello'
    })`)
}...
// 二、jQuery
$.ajax({
    url: 'http://www.jack.com:8002',
    type: 'GET',
    dataType: 'JSONP',
    success: function(data) {
        console.log(data)
    }
})






var script = document.createElement('script')
script.src = '跨域的网址'


document.getElmementByTagName('body')[0].appendChild(script)


async function  f1(){
	try{
		var z = await promise.reject(20)
	}
	catch(e){
		console.log(e)
	}

}















































function Animal(){
	this.a = 1
}

Animal.prototype.move = function(){
	//Dog函数继承Animal
	function Dog(){
		Animal.append(this,arguments)
		//在Dog函数内调用Animal函数，并传参
		this.d = 2
	}
	let f =function(){
		f.prototype = Animal.prototype
		Dog.prototype = new f()
		Dog.prototype.constructor =Dog

		Dog.$lastCopy = function(){}
	}
}

class Animal{
	constructor(color){
		this.color = color
	}
	move(){}
}

class Dog extends Animal {
	constructor(color,name){
		super(color)
		this.name = name 
	}
	say(){}

}


ul.addEventListener('click',function(e){
	if(e.target.TagName.toLowerCase() === 'li'){
		console.log('very good')
	}
})

function delegate (element,eventType,selector,fn){
	element.addEventListener(eventType,e=>{
		let el = e.target
		while(!el.matches(selector)){
			if(element === el ){
				el = null
				break
			}
			el = el.parentNode
		}
		el  && fn.call(el,e,el)
	})
	return element
}

点击san 后 遍历span 的祖先中有咩有li，然后执行对应的操作

http 



动态创建 scritp  标签，然后插入body的child 中，使用，设置src 进行跨于的get 请求，获取路啊域de跨域的数据


对于异步请求的跨域，就是.then 之后的操作，promise 的语法糖

async await try catch。
理解其中运行的
async function
方法内部中写 是await 的




http 的缓存机制
强制缓存。
就是在访问的数据地址的时候
先行本地缓存中查看是否有缓存
如果有就直接获取

对比缓存
从本地数据中获取
对应数据的标识
然后把这个表示和服务器连接
进行对比
如果这个标识合法，是最新的数据
那么就可以直接获取
如果不是，服务器就会返回，新的数据
和新的对应的表示标识

几个产经的常见的数据时间标识


Etag 
Expire
cache-cnotrol

Get Post

Post genganquan a
哥们敢于啊
更安全全
GET 有长度限制 URL。1024字节
而Post 没有
GEt 只需要一个保文
而Post 需要啷个以上两个以上


cookie 服务器存于浏览器的数据
也就是客户端口的暂存数据
session 记录客户端和服务器的对话
存储在服务器中的
它们两个之间的关联就是
session 在数据库中的id 
存储在cookie 中，
调用session 的话需要cookie 的支持


cookie 最多4k。
localstorage 可以有5m

cookie 存储的都是用户信息
而localstorage
就是什么都存
信息并不是很重要的

还有就是cookie 会发送到服务器
一般进行验证或者，要对用户的信息的修改或者添加，就需要cookie 的验证

local 的数据
就会只在本地进行操作
不会到服务器中进行传参，但是也可能回出现调用其中数据的时候，
这个情况还是要依据业务的需求来判读啊



vue。 
watch。自带监听数据的属性

property 的中监听
computed。计算实行
生命周期函数
钩子函数。
在vue 的神民众周期和中国呢。
需要在某个节点进行
一些操作 就需要
这些函数中定义一些方法
比如获取数据要在渲染前
一些组件的调用要在渲染后
一些数据的charts 的渲染
也要在数据获取后才渲染
组件的
通信
如果是父子关系就是
痛殴v-on的饿鼠心烦就属性就行传递信息

当然也有信箱模式的传递信息
vue中实现就是
eventbuds 的功能属性完成的

还有就是强大的vuex。
只需
map。getters 获取到对应想要的功能或者数据，就直接
可以在当前也买呢或者组件直接调用方法
对数据进行操作或者获取像要的ajax 数据
和后台进行交互

object。definedProperty 
这个方法就是通在data 中初始数据的时候
进行的直接把数据的属性就行监听
还有就是



vue router 官方的路由管理器

通过如outer
来实现异步的更新或者
页面的跳转
框架带来的彼岸里
遍历span

导航守卫
还有route
一些常用的api。一般对链接本身进行的操作
route 像、、、 push
router。-link 
hits
this 调用这些api进行跳转或者洽谈的其他的一些事情


loader 

加载起
webpack 视所有的文件都为模块
进行处理打包
当然 由于原生的webpack 只解析js文件
如果需要打包其他的文件，就需要
loader 解析打包出js外的文件


plugin
就是，插件
扩展功能
子啊打包过程中不同的生命周期中进行不通的操作
例如过
一些日趋公共代码
加快打包速度的
这些插件
让我们的工程打包速度得到提升
还有按需加载
等等


转义文件
过大
如何进行性能优化
还有不同的路有 会导致
打包的时候js 文件的
打包也会不禁相同
例如路由器
vue中实现就是通过
在声明routes 的时候进行import 的话需要cookie
就会按需加载js代码
如果在文件首部直接加载所有路有的import 
import 就会溢出
导致打包的js 文件显得冗余
只要加载首页缺还要加载其他野米啊 js
就会显得功能设计不那么健全


通过路有的优化 就可以使得
js 的文件不会那么冗余
降低vue 页面之间的耦合度


代码优化的模块






# 简历的本质

在写简历之前，我们必须清楚的了解一件事情，那就是简历是什么？
它不是人生履历，不是项目清单，也不是技能大放送。
简历的存在只有一个目的 —— 帮你约到面试。只要能达到这个目的，简历可以是一段视频，一个开源项目，一张照片，甚至是一行字，比如：

```javascript
I wrote javascript
```

当然，绝大部分简历的形式，就是我们所熟知的，是一篇文章。即使你通过其他方式获得了面试，当你入职的时候，还是要有这么一份纸质简历的，所以不要想着偷懒。

其实简历不只是表现自己，更是传递以下三个信息，增强通过率。

 - 是什么（你能做什么？，擅长什么？）
 - 比别人好在哪些地方（相比其他同行，你的优势？）
 - 如果雇佣你，招聘方会得到什么好处 （能不能为企业带来效益？）

正如你抉择跳槽，思考要不要留在这个公司的时候，你也可能考虑下面三点

 - 待遇（给的钱够不够？福利好不好）
 - 环境（同事nice不？老板好不好？事少离家近？工作开心与否？是否帅哥美女多？嗯哼）
 - 个人（有晋升机会不？能否再进步？）

当然企业和你的相互选择其实正如上面几点中的考量和博弈，当然面试是平等的，是相互选择的结果，所以有你对企业的考量，也有企业对你的考量

回归到写简历，和很多人在大学写议论文写作文是不同的，过分的论证会显得自夸，反而容易引起反感，所以要点到为止。这里的技巧是，提供论据，把论点留给阅读简历的人自己去得出。放论据要具体，最基本的是要数字化，好的论据要让人印象深刻。

举个例子，下边内容是虚构的：

2015年(```时间可以具体到年月，或者经历的项目周期```)，我共同(```一般都是团队开发了，单干就别写了，除非你个人能力非常突出```)参与了XX新闻网站后端发布系统的开发（```这部分是大家都会写的```）。作为团队里面的核心程序员，我不但完成了网站界面、功能逻辑的开发工作，更提出了高效的组件化和模块化开发方案，通过模块化开发让团队成员较少编写代码时候的冲突，通过组件化让团队成员分工合作，各善其职，有效的提升了系统的的开发效率。（```这部分是很多人忘掉的，记得写出你在这个项目中具体负责的部分，以及你贡献出来的价值。```）在该系统上线后，Web前端性能从10QPS提升到200QPS，服务器由10台减少到3台（``` 通过量化的数字来增强可信度 ```）。2016年我升任WAPCMS项目负责人，带领一个3人小组支持着每天超过2亿的PV（``` 这就是你自身的优势。你能带给旧企业的价值，也就是你能带给新企业的价值。 ```）。

有同学问，如果我在项目里边没有那么显赫的成绩可以说怎么办？讲不出成绩时，就讲你的成长。因为学习能力也是每家公司都看中的东西。你可以写你在这个项目里边遇到了一个什么样的问题，别人怎么解决的，你怎么解决的，你的方案好在什么地方，最终这个方案的效果如何。

具体、量化、有说服力，是技术简历特别需要注重的地方。

（以上内容在写完简历后，对每一段进行评估，完成后再删除）

---


# 联系方式

（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 头像（如果你觉得自己长得可以，你可以放哈）
- 手机：139******** （```如果是外地手机，可注明。如经常关机，要写上最优联系时间```）
- Email：wscats@gmail.com （```虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用163，gmail也可以```）
- QQ/微信号：7*******（```提供一个通过网络可以联系到你的方式```）


## 1软通动力公司 （ 2017年 ~ 2019年）

## 2小型工作室 （ 2019年 ~ 2020年）


### 4芯片数据可视化项目 

项目中负责处理PI芯片生产数据的处理和页面渲染。因为项目大部分数据的处理方式都是用原生js，期间对js的理解和运用垫下了一个好的基础。由于前期用惯JQuery，导致很多原生Api不熟悉，通过强化原生js方面的知识点来强化开发能力

// ### 7项目进度跟踪管理可视化项目

// 我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。


### 7项集团资源数据监控可视化项目

项目是基于vue框架的开发，对集团资源(例如停车位、警报监控、进出管理等数据)进行可视化管理
工作内容包含但不仅限于vue框架的响应式页面开发、配合后台开发人员进行数据交互、迭代二期的页面优化和需求变更、组内技术栈共享、与合作方的研发会议等
此项目中遇到比较麻烦的就是数据更新频率快，某些页面数据庞大，导致页面的响应不同步或者延迟
采取的解决方案是让数据分段式请求获取，和对页面进行懒加载处理，让页面性能得到了显著提升
---

根据上面的模板你可以这样来写

```html
广州XX有限公司（2016.09 ~ 2017.03）技术部-前端工程师
这个项目目的主要以成人学历为主线开发，有大专、本科、资格证等线上销售的教育培训产品。
我在此项目负责了前期界面研究，做出原型设计，原型切图，配合后台开发人员设计界面与开发功能，并负责框架开发，封装公共组件，以及根据需要引进第三方插件。
我在项目中遇到的最大困难是实现产品前端界面效果与设计图纸在某些界面上难以绝对统一
我采用Vue+jQuery开发方案，在细节上我运用了jwplayer.js、jquery.KinSlideshow来实现幻灯片轮播效果，增强用户体验更好等。
```


# 开源项目和作品

选取你自己**Github**上的某个开源项目即可，当然开源项目最好写清楚文档，比如安装方法，核心代码的分析（这一段用于放置工作以外的、关键来证明你的能力的材料，也可以理解为其他工程师或者开源社区对你的认可度）

## 开源项目

（对于程序员来讲，没有什么比Show me the code能有说服力了）

 - [blog—share](https://stevennin.github.io/blog-share/#/)：在线博客编辑发布分享平台 
 - [cavas画板](https://stevennin.github.io/canvasBoard/)：在线画板

## 技术文章

（挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）

- [我如何用前端技术得到XXOO网站的VIP](https://github.com/Wscats/Good-text-Share/issues/62)
- [前端程序员经常忽视的一个JavaScript面试题](https://github.com/Wscats/Good-text-Share/issues/85) （ ```或者好的翻译文章可以侧证你对英文技术文档的阅读能力```）


# 技能清单

（我一般主张将技能清单写入到工作经历里边去。不过很难完整，所以有这么一段也不错）
以下均为我熟练使用的技能

- 前端框架：ReactJS/VueJS/Omi/EmberJS/Cocos2dJS/Ionic
- 前端样式库：WeUI/Bootstrap/AntDesign/ElementUI/AmazeUI
- 前端工具库：jQuery/Zepto/Lodash/Axios
- 前端调试：Postman/Charles/Vue(React) Dev Tools
- 前端插件：Swiper/Iscroll
- 前端模块工具：Webpack/Gulp/RequireJS/Fis/Grunt
- 预编译语言：Typescript/Sass/Less/Pug/Jade
- Native开发：Weex/React Native/Cordova/Uni App
- 小程序相关：Mpvue/Taro/Kbone/Wepy
- 数据库相关：MySQL/MongoDB/PgSQL/PDO/SQLite
- 版本管理、文档和自动化部署工具：SVN/Git
- 单元测试：PHPUnit/SimpleTest/Qunit/Mocha
- 云和开放平台：SAE/BAE/AWS/微博开放平台/微信应用开发
熟练用Html，div+css的页面布局开发
熟练响应式布局、弹性盒子布局、移动端适配开发
熟练使用原生javascript以及常用js库(jQuery、swiper)
熟练运用模块化加载，webpack封装优化页面性能
熟悉ajax异步数据的传递，接口的定义和Json数据交换结构
能使用Bootstrap、ElementUI、等前端样式框架进行开发
熟练使用VueJs进行模块开发，了解双向数据绑定原理，熟练编写控制器、服务、组件、辅助插件等


Gulp中不可一代的功能
控制开发的流管理
Webpack 一个模块式打包管理
对于公共库的提取
冗余代码的优化

例如你可以这样写,当然你得根据自己的个人情况进行修改

```html
1、熟练使用合理的结构和样式编写兼容主流浏览器的页面；
2、能适当运用CSS3使页面在现代浏览器上效果更佳；
3、熟练运用rem单位和flex布局实现不同浏览器宽度下的整页缩放；
4、熟练使用photoshop软件进行简单的图片处理，能根据图片特征保存成最优的格式；
5、熟练使用原生javaScript以及常用javaScript库，如jQuery、zepto；
6、能运用模块化、面向对象的方式编程；
7、了解http协议，能够根据http请求报文、响应报文和状态码排查问题；
8、熟练运用ajax实现异步数据传递，熟悉JSON等数据交换格式；了解php和数据库；
9、了解如何使用node.js搭建本地server模拟接口返回数据测试ajax接口；
10、能使用Bootstrap、WeUI、Ionic等前端样式库和框架进行开发；
11、熟练运用AngularJS，VueJS进行模块开发，了解双向数据绑定原理，熟练编写控制器、服务、组件、过滤器等
12、熟练使用Gulp对代码进行压缩合并；熟悉使用Git和SVN进行代码管理和版本控制；

```

当然再举个例子（精通慎用！熟悉可以多用，不够自信就用了解吧，额哼）

```html
1、熟练HTML、DIV+CSS的页面布局，能根据设计图完成页面制作
2、熟练响应式布局、弹性盒布局，熟悉基于HTML5的WebApp开发以及移动端适配
3、熟练主流浏览器的兼容性以及相应的适配技术，完成页面的完整兼容
4、熟练掌握HTML5、CSS3新增功能，了解Canvas动画制作
5、熟悉掌握原生JavaScript，熟悉jQuery，了解Zepto
6、熟练Bootstrap、AngularJS等前段框架，了解MUI、Vue框架
7、熟练使用AJAX进行数据交互，协助后端开发工程师完成项目
8、熟练JSON数据的使用以及处理方式
9、熟练LocalStorage、SessionStorage、Cookie等本地存储
10、熟悉使用Swiper、Font-awesome、jQueryUI以及jQuery插件等前端插件
11、熟练使用Cordova插件将WebApp打包成安卓App，实现混合App开发
12、熟练使用Visual Studio Code、SublimeText、HBulider、Git、Gulp、Scss、Photoshop 等开发工具
```

这里尽量不要重复叙述相同的技能点，保持好每一条都是独特的，每一条描述出现的英文技能点关键词尽量保持大小统一，比如`Bootstrap、WeUI、Ionic`，这样写没问题，但是不要个别大写个别小写`bootstrap、WeUI、ionic`，遇到强迫症的HR就尴尬了，不过有些还是例外的比如`jQuery`,还是第二个字母大写吧(...额，不解释)，还有这里不要出现一些“感性“的描述，比如熟悉使用PHP，能跟后端工程师愉快的合作(什么鬼)，这些句子就不要出现了

## 参考技能关键字

本技能关键字列表是在简历和招聘信息中统计出来的高频词。如果您的简历要投递给有机器（简历筛选系统）和非机器（不懂技术的HR）筛选简历环节的地方，请一定从下边高频关键词中选择5～10个适合你自己的。

| Skill        | Skill              | Skill        | Skill        | Skill     | Skill       |
| ------------ | ------------------ | ------------ | ------------ | --------- | ----------- |
| web          | javascript         | html5        | css3         | H5        | js          |
| ajax         | w3c                | div          | css          | html      | ES6         |
| vue          | angular            | react        | backbone     | jQuery    | zepto       |
| json         | xml                | xhtml        | bom          | dom       | svg         |
| ui           | photoshop          | weui         | bootstrap    | ionic     | flex        |
| atom         | visual studio code | hbuilder     | sublime text | firebug   | dreamweaver |
| asp          | jsp                | java         | ruby         | python    | php         |
| ps           | mobile             | mvc          | mvvm         | mvp       | www         |
| http         | https              | ftp          | ssl          | websocket | seo         |
| sass         | less               | AMD          | CMD          | requirejs | seajs       |
| github       | stackoverflow      | segmentFault | coding       | csdn      |             |
| linux        | mac                | windows      | ios          | android   |             |
| gulp         | grunt              | webpack      | git          | svn       |             |
| flash        | jssdk              | phonegap     | cordova      | hybrid    |             |
| firefox      | chrome             | safari       | charles      |           |             |
| express      | nodejs             | koa          |              |           |             |
| semantic     | foundation         | yui          |              |           |             |
| actionscript | coffeescript       | typescript   |              |           |             |
| mysql        | webapp             |              |              |           |             |
| 面向对象     | 闭包               | 继承         | 组件化       | 模块化    | 数据结构    |
| 正则表达式   | 兼容性             | 安全性       | 重构         | 交互      | 性能        |
| 微信小程序   | 微信公众号         | 阿里云       | 知乎         |           |             |


# 自我评价

最好突出自己的优势，比如学习能力，解决问题能力，带队能力，沟通能力和技术能力等等
想简单点可以这样写：

根据业务需求强化自身技术广度和深度
良好的代码编程风格
适应高强度的开发任务
迅速融入团队，协同解决项目开发遇到的问题
坚持锻炼，有一个好身体继续奋斗

```html
1.喜欢学习新技术，有良好的文档编写和代码书写规范，耐心打磨用户体验和用户界面
2.有良好的沟通能力和团队合作能力，性格随和，认真负责，自学能力强
```

详细的你也可以这样来

```html
1. 对前端技术具有浓厚的兴趣，喜欢逛CSDN，博客园等技术论坛；
2. 具备良好的审美能力，有良好的代码编程习惯；（说好的审美，可以和设计师好好玩耍）
3. 学习适应能力强，愿意不断学习新知识丰富自己；（学习能力大企业最看重）
4. 抗压能力强，有信心在不同的工作强度下进行开发工作；（抗压技能点加上，去常加班的公司有独特优势，额）
5. 性格随和，具有良好的团队合作精神。（性格最好能适应团队）
```






- 邹鹏     25
- 手机：18523865510 
- Email：stevenzou999@gmail.com 
- 学历：本科-重庆邮电大学-软件工程


## 软通动力公司 （ 2017.7 ~ 2019.4  ）
## UI工作室 （ 2019.4 ~ 2021.4 ）
## 重庆妙享网络技术有限公司 （ 2021.4 ~  ）


### 园区资源数据监控可视化项目
```html
项目是基于vue框架的开发，对集团资源(例如停车位、警报监控、进出管理等数据)进行可视化管理
工作内容包括但不仅限于响应式页面开发、配合后台进行数据交互、完成迭代二期的页面优化和需求变更、
组内技术栈共享、与合作方的研发会议等
此项目中遇到比较麻烦的就是数据更新频率快，某些页面数据庞大，导致页面的响应不同步或者延迟
采取的解决方案是让数据分段式请求获取，并对页面进行懒加载处理，展示的数据列表采用虚拟长列表的方案，让页面流畅度得到了显著提升
```

### 虚拟货币商城管理后台及商城移动端
```html
项目的移动端采用UniApp、管理后台采用vue+ElementUi进行开发，此项目是为了刺激用户通过虚拟货币进行交易，
正向保持虚拟货币市场的活跃度。本人负责管理后台和移动端的开发。
由于项目主要面向的是东南亚市场，移动端的所有页面都是基于多语言的环境开发，与普通的商城交易机制不同的是，
在支付界面，支持查询绑定的虚拟货币的余额，支持货币的组合支付。商城功能还包括商品分享、免二次登录、秒杀活动等。
```

### 汽研院标准法规智库系统
```html
项目是关于管理汽车标准的智库系统，支持上传和下载pdf、doc文件，并对上传文件进行识别和OCR的转化，转化后的文档采用多层级树结构的管理方案，
并支持多达数十个筛选条件联动查询。
项目中复用的页面、组件、函数比较多，所以对复用的代码都进行了耦合度较高的封装，在需求中对树级联动查询的接口参数有限制，
优化了树状控件的点击选中事件的算法逻辑。
```


---


## 开源Demo
 - [canvas在线画板](https://stevennin.github.io/canvasBoard/)：在线画板(适配移动端)
```html
一款画板工具
运用canvas技术实现的画线功能
根据移动端特性ontouch实现移动端适配
```

 - [blog—share](https://stevennin.github.io/blog-share/#/)：在线博客编辑分享平台 
```html
项目基于Vue框架开发的一款BS架构的博客系统
技术内容包含vuex、router、jwt鉴权机制等
```

## 技术文章
- [DomEvents中的冒泡和捕获](https://stevennin.github.io/post/DomEvents/) 
- [常见页面登录的session-cookie验证机制](https://stevennin.github.io/post/%E9%AA%8C%E8%AF%81%E6%9C%BA%E5%88%B6/#more)



# 技能清单

```
熟练使用Html，Div+Css的页面布局开发
熟练响应式布局、弹性盒子布局、less预编译、移动端适配
熟练使用原生Javascript以及常用js库(jQuery、swiper)
熟练运用模块化加载，Webpack封装优化页面性能
熟悉Ajax异步数据的交互，接口的定义和Json数据交换结构
常使用Bootstrap、ElementUI、等前端样式框架进行开发
熟练使用VueJs进行模块开发，了解双向数据绑定原理，熟练编写控制器、服务、组件、辅助插件等
```
  


# 自我评价

```html
可以根据业务需求强化技术栈
能写可维护性高的代码
适应高强度的开发任务
迅速融入团队，协同配合解决项目难题
喜欢锻炼，健康热情的生活态度
```







