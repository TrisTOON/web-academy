scale=1
a=document.createElement("canvas")
a.width=a.height=(256-28*2)*scale
b=a.getContext("2d")
b.scale(scale,scale)
b.translate(-28,-28)
b.lineCap="square"
b.lineJoin="bevel"
b.beginPath()
b.arc(128,128,96,0,Math.PI*2,true)
b.closePath()
b.save()
b.clip()
b.beginPath()
b.moveTo(0,96)
b.lineTo(160,256)
b.lineTo(0,256)
b.closePath()
b.miterLimit="2"
b.lineWidth="2"
b.fillStyle="#158700"
b.fill()
b.strokeStyle="#333333"
b.stroke()
b.beginPath()
b.moveTo(0,0)
b.lineTo(12,0)
b.lineTo(256,244)
b.lineTo(256,256)
b.lineTo(220,256)
b.lineTo(0,36)
b.closePath()
b.miterLimit="2"
b.lineWidth="2"
b.fillStyle="#1a5e9a"
b.fill()
b.strokeStyle="#333333"
b.stroke()
b.beginPath()
b.moveTo(76,0)
b.lineTo(256,0)
b.lineTo(256,180)
b.closePath()
b.miterLimit="2"
b.lineWidth="2"
b.fillStyle="#ff7b00"
b.fill()
b.strokeStyle="#333333"
b.stroke()
b.beginPath()
b.moveTo(32+24-2,128)
b.lineTo(64+16,224)
b.lineTo(96+8,128)
b.moveTo(96+8,128)
b.lineTo(128,224)
b.lineTo(160-8,128)
b.moveTo(160-8,224)
b.lineTo(192-16,128)
b.moveTo(192-16,128)
b.lineTo(224-24,224)
b.moveTo(176-12,192)
b.lineTo(208-20,192)
b.miterLimit="2"
b.lineWidth="20"
b.strokeStyle="#333333"
b.stroke()
b.miterLimit="2"
b.lineWidth="16"
b.strokeStyle="#ffffff"
b.stroke()
b.restore()
b.beginPath()
b.arc(128,128,96,0,Math.PI*2,true)
b.closePath()
b.miterLimit="2"
b.lineWidth="6"
b.strokeStyle="#333333"
b.stroke()
b.miterLimit="2"
b.lineWidth="2"
b.strokeStyle="#ffffff"
b.stroke()
document.body.append(a)