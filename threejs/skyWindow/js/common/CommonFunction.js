function CommonFcuntion(){
}

// 确定当前对象不能为空

CommonFcuntion.hasObj = function (obj){
    if(obj != null && typeof(obj)  !=  'undefined'){
        return true;
    }else{
        return false
    }
}
/* 
l: 材质长
w: 材质款
style： 材质特性
 */
CommonFcuntion.createMaterial = function(length,width,style) {
    var color = 0XFF0000,
        image = null, // 材质是否有存在贴图
        texture = null,
        ifRepeat = 0,
        transparent = 0,
        opacity = 0,
        depthTest = 1; // 材质深度测试 
    
    if(CommonFcuntion.hasObj(style)){
        color = style.color || 0xFF0000;
        image = style.image || null;
        ifRepeat = style.ifRepeat || 0;
        transparent = style.transparent || 0;
        opacity = style.opacity || 0;
        depthTest = style.depthTest;
    }
    let material = new THREE.MeshPhongMaterial({map: texture,color:color})

    if (image != null) {
        texture = new THREE.TextureLoader().load(image);
        if (ifRepeat == 1) {
            texture.repeat.x = length / 128
            texture.repeat.y = width / 128
            // texture.repeat.y = 5
            texture.wrapS  = texture.wrapT = THREE.RepeatWrapping
        }
        material = new THREE.MeshBasciMaterial({map:texture })
    }
    if (transparent == 1 ) {
        material.transparent = true
    }
    if (depthTest == 0 ) {
        material.depthTest = false
    }
}

