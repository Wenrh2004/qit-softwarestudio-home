import React, { useEffect, useRef } from 'react';

const MountainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小为窗口大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground(); // 重新绘制背景
    };

    // 初始化并在窗口大小变化时调整画布大小
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 绘制背景
    function drawBackground() {
      if (!ctx || !canvas) return;
      
      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 加载背景图片
      const bgImage = new Image();
      bgImage.src = '/bg1.jpg'; // 确保图片路径正确
      
      bgImage.onload = () => {
        // 计算如何填充画布
        const scale = Math.max(
          canvas.width / bgImage.width,
          canvas.height / bgImage.height
        );
        
        // 计算缩放后的尺寸
        const scaledWidth = bgImage.width * scale;
        const scaledHeight = bgImage.height * scale;
        
        // 计算居中位置
        const x = (canvas.width - scaledWidth) / 2;
        const y = (canvas.height - scaledHeight) / 2;
        
        // 绘制图片
        ctx.drawImage(bgImage, x, y, scaledWidth, scaledHeight);
        
        // 添加轻微的暗色叠加，使内容更易读
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      
      // 如果图片加载失败，绘制一个渐变背景作为备用
      bgImage.onerror = () => {
        console.error('背景图片加载失败');
        
        // 创建渐变背景作为备用
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#f0d9c0');
        gradient.addColorStop(1, '#d9e6f7');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
    }

    // 初始绘制
    drawBackground();

    // 清理函数
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ 
        background: 'transparent'
      }}
    />
  );
};

export default MountainBackground;