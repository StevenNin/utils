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