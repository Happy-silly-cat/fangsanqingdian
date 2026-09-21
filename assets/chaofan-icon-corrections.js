// 超凡幻化头像校对表：优先选择与对应完整人物立绘一致的头像。
// 新增或更换超凡幻化时，先核对 DB_Heros_dress 的头像字段与完整立绘，再在这里记录视觉校对结果。
(function () {
  const corrections = {
    312: 'assets/chaofan-items/heads/head_diaochan_6.png'
  };

  const skins = window.chaofanHuanhuaData?.skins || [];
  skins.forEach((skin) => {
    if (corrections[skin.id]) skin.headIcon = corrections[skin.id];
  });
})();
