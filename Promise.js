Class Promise2{
	// 封装队列1 来存储promise成功后的resolve操作的函数们
	queue1 = []
	// 封装队列2 来存储promise失败后的reject操作的函数们
	queue2 = []

	// 构造函数。new一个promise
	constructor(fn){
		// 声明resolve函数操作，即成功后的操作传值为获取的数据 作用域只在当前区域
		const resolve = (data)=>{
			// 定时函数,先把。then 中的函数放入队列中，之后再按顺序执行resolve或者reject
			setTimeout(()=>{
				// 循环遍历要插入数组的数据
				for(let i = 0 ; i < this.queue1.length; i++){
					// 插入resolve函数到队列中
					this.queue1[i](data)
				}
			})
		}
		// 声明reject函数，并定义其内部进行的操作，传值一般为报错的信息
		const reject = (reason)=>{
			// 不设置就查询不到这个reject 对应的队列，要等一会儿，否则queue1，queue2为空
			setTimeout(()=>{
				// 循环遍历要插入数组的数据
				for(let i = 0;i<this.queue2.length;i++){
					// 插入reject函数到队列中
					this.queue2[i](reason)
				}
			})
		}
		// 声明函数调用的方法函数构造完成后进行两个函数的操作
		fn(resolve,reject)
	}
	// 声明.then后进行的操作，把多次调用的。then 中的回调函数按顺序插入到对应的resolve或者reject的队列中
	then(s,e){
		// 插入回调函数到resolve中
		this.queue1.push(s)
		// 插入回调函数到reject中
		this.queue2.push(e)
		// 返回当前环境的this，当前函数功能需求就是我调用用.then这个api后，还想继续调用它，那么就需要返回当前的this。就可以重复接连调用。then 这个接口了
		return this
	}
}
p1 = new Promise2((resolve,reject)=>{
	console.log('hi2');
	if (Math.random()>0.5){
		resolve('成功')
	}else{
		reject('成功之母')
	}
})
p1.then((data)=>{console.log('成功2')}, (reason)=>{console.log('失败1')})
.then(()=>{console.log('成功3')},  ()=>{console.log('失败2')})

.then(()=>{console.log('成功4')},  ()=>{console.log('失败3')})

