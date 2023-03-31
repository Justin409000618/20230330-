// 為漸變顏色和線寬定義一些變量
let c1, c2;
let weight;

//定義層數和每層之間的間隙
let numLayers = 5;
let layerGap = 50;

function setup() {
  createCanvas(800, 600);
  
  // 設置漸變顏色
  c1 = color(255, 255, 0);
  c2 = color(255, 0, 0);
  
  // 設置初始線寬
  weight = 1;
}

function draw() {
  background(255);
  
  // 根據鼠標位置計算比例因子
  let scaleFactor = map(mouseX, 0, width, 1, 5);
  
  // 用漸變顏色繪製線條層
  for (let i = 0; i < numLayers; i++) {
    // 根據圖層索引和比例因子計算線寬
    let w = (i + 1) * weight * scaleFactor;
    
    // 根據圖層索引和漸變顏色計算漸變顏色
    let c = lerpColor(c1, c2, i / (numLayers - 1));
    
    // 設置描邊粗細和顏色
    strokeWeight(w);
    stroke(c);
    
    // 畫線
    for (let x = 0; x < width; x += 10) {
      line(x, i * layerGap, x + 10, (i + 1) * layerGap);
    }
  }
  
  // 在畫布底部添加文字
  textSize(32);
  textAlign(CENTER, BOTTOM);
  text("教育科技學系,陳昱廷", width / 2, height - 10);
}

function mouseMoved() {
  // 根據鼠標位置更新線寬
  weight = map(mouseX, 0, width, 1, 10);
}
