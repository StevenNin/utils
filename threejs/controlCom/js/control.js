var stats

function initStats() {
    stats = new stats()
    document.body.appendChild(stats.dom)
}

function animate() {
    // 更新控制器
    controls.update()
    // 更新性能控件
    redner()
    stats.update()
    requestAnimationFrame(animate)
}

