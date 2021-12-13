/* 
立方体类
 */

function cube(option){
    this.length =  option.length || 1;
    this.width =  option.width || 1;
    this.height =  option.height || 1;

    this.Name =  option.objName || 1;
    this.postitionX =  option.position.x || 0;
    
    this.postitionY =  option.position.y || 0;
    
    this.postitionZ =  option.position.z || 0;
    
    this.style = option.style||{color: 0xFF0000};
    
    let curmaterial = CommonFunction.createMaterial(this.width,this.height,this.style) 

    let cubeGeometry  = new THREE.BoxGeometry(this.length,this.height,this.style)
    
    let cube = new THREE.Mesh(cubeGeometry,curmaterial)
    cube.name =  this.name;
    cube.postitionX  = this.postitionX
    cube.postitionY =  this.postitionY
    cube.postitionZ = this.postitionZ
    return cube
}