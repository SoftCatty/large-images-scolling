// 创建回调函数，当元素进入或离开视口时触发

var visibleImgs = new Set();
var lastViewingMin = 0;
var lastViewingMax = 0;
const leadingCount = 5;
const missingCount = 15;

const callback = (entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) {
    //   visibleImgs.add(entry.target.id);
    //   entry.target.src = entry.target.getAttribute("data_src");
    // } else {
    //   visibleImgs.delete(entry.target.id);
    // }

    // const startLen = "sl-img-".length;
    // lastViewingMin = lastViewingMax = entry.target.id.substring(startLen);

    // // info
    // let visibleIds = [];
    // for (const sid of visibleImgs) {
    //   visibleIds.push(sid.substring(startLen));
    // }
    // visibleIds.sort();
    // if (visibleIds.length > 0) {
    //   $(".sl-img").each((i, v) => {
    //     if (v.getAttribute('src')) {
    //       const imgId = v.getAttribute("imgId");
    //       if (
    //         imgId > visibleIds[visibleIds.length - 1] + missingCount ||
    //         imgId < visibleIds[0] - missingCount
    //       ) {
    //         v.src = "";
    //       }
    //     }
    //   });
    //   lastViewingMin = visibleIds[0];
    //   lastViewingMax = visibleIds[visibleIds.length - 1];
    // }
    // //
    // console.log(`viewing ${visibleIds}`);
  });
};
//创建并配置Intersection Observer实例
const options = {
  root: null, // 使用视口作为参考区域
  threshold: 0, // 当至少有1像素在视口内时触发回调
};
const observer = new IntersectionObserver(callback, options);

function watchImageItems() {
  const count = getImgCount();
  console.log(`watch ${count} elements`);
  for (let i = 0; i < count; i++) {
    const ele = document.getElementById(`sl-img-${i}`);
    observer.observe(ele);
  }
}

$("#img-con").scroll(function () {
  console.log("scrolling...");
});

// const _LoadInterval = setInterval(function () {
//   if (visibleImgs.size < 3) {
//     const minIdx = lastViewingMin - leadingCount;
//     const maxIdx = lastViewingMax + leadingCount;
//     lastViewingMin = lastViewingMax = -1;
//     $(".sl-img").each((i, v) => {
//       if (!v.getAttribute('src')) {
//         const imgId = v.getAttribute("imgId");
//         if (imgId >= minIdx && imgId <= maxIdx) {
//           v.src = v.getAttribute("data_src");
//         }
//         if(lastViewingMin < 0)
//         {
//           lastViewingMin = imgId;
//         }else{
//           lastViewingMin = Math.min(lastViewingMin, imgId);
//         }
//         //
//         if(lastViewingMax < 0)
//         {
//           lastViewingMax = imgId;
//         }else{
//           lastViewingMax = Math.max(lastViewingMax, imgId);
//         }
//       }
//     });
//   }
// }, 1000);
