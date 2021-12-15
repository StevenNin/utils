function Store3D(){
    this.screen = null;
    this.camera  =  null;
    this.renderer = null;
    this.objects = []
}


// 初始化仓库插件

Store3D.prototype.initMain = function() {
    this.initScene()     // 场景
    this.initCamera()
    this.initRenderer()     // 渲染器
    this.initBuilding()   
    this.initLight()   // 灯光参数
}

// 仓库运行

Store3D.prototype.start = function(){
    this.initMain()
    this.animate()
}

// 初始化一个场景。 只需要一句代码生成即可

Store3D.prototype.initScene = function(){
    this.scene = new THREE.Scene();
}

// 初始化场景，尽可能接近真实的的情况

Store3D.prototype.initCamera = function(){
    /* 声明一个相机  这次声明的是一个透明相机
    视角 ： 60
    纵横比aspect 全屏  默认使用的是 浏览器的的宽度/ 高度
    近平面near : 0.1
    近平面的视角： far 10000 */
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1,10000)

    // 设置摄像机的位置， 注意 threejs 用的是右手坐标系

    this.camera.position.x = 0
    this.camera.position.y = 1600
    this.camera.position.z = 1600
    // 相机的朝向
    this.camera.lookAt(0,0,0)
    // 在场景中加入 我们 设置好默认数据的相机
    this.scene.add(this.camera)
}

// 声明一个渲染器

Store3D.prototype.initRenderer  = function(){
    this.renderer = new THREE.WebGLRenderer({
        antialias : true,   // 反锯齿
        alpha: true, // 设置背景色 透明
        logarithmicDepthBuffer: true // 模型重叠的部分闪烁 起因是 z-fighting  需要设置这个参数来解决
    });
    this.renderer.setSize(window.innerWidth,window.innerHeight) // 渲染尺寸
    this.renderer.setClearColor(0x39609B)  // 渲染的背景色
    this.renderer.setPixelRatio(window.devicePixelRatio) // 渲染器的分辨率和浏览器的分辨率保持一致

    let container = document.getElementById("container")
    container.appendChild(this.renderer.domElement)

    
}

// 声明渲染灯管的 环境光，光源 等 特效 效果
Store3D.prototype.initLight = function() {
    let ambient  = new THREE.DirectionalLight(0xFFFFFF,1)
    ambient.position.set(0,0,0)
    this.addObject(ambient)
    // 平行光 类似太阳光
    let directionalLight = new THREE.DirectionalLight(0xFFFFFF,0.3)  // 远光源  类似于太阳相当于地球的光源

    directionalLight.position.set(0,200,0)
    this.addObject(directionalLight)

    // 点光源
    let pointLight1  =  new THREE.PointLight(0xFFFFFF,0.3)
    pointLight1.position.set(-500,200,0)
    this.addObject(pointLight1)
    let pointLight2  = new THREE.PointLight(0xFFFFFF,0.3)
    pointLight2.position.set(500,200,0)
    this.addObject(pointLight2)
}

// 场景中添加物体
Store3D.prototype.addObject = function(object) {
    this.scene.add(object)
    this.objects.push(object)
}

// 建筑物

Store3D.prototype.initBuilding = function(){
    let builddingData = builddingObjects.objects;
    for(let i = 0; i < builddingData.length; i++) {
        let object = builddingData[i]
        switch(object.objectsType){
            case 'cube':
                let cube = new Cube(obeject)
                this.addObject(cube)
        }
    }
}

// 定时刷新
Store3D.prototype.animate = function(){
    requestAnimationFrame(this.animate.bind(this))
    this.renderer.render(this.scene,this.camera)
}
