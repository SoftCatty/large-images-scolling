const myModal = document.getElementById("myModal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");


var computedModalImageScale = 1;
// Declare global variables to swiped correct distance
var modalImagedeltaX = 0;
var modalImagedeltaY = 0;
function resetModelImage() {
  computedModalImageScale = 1;
  modalImage.style.transform = `scale(1.0)`;
  modalImagedeltaX = modalImagedeltaY = 0;
}

// 点击关闭按钮时隐藏模态框
closeBtn.onclick = function () {
  myModal.style.display = "none";
  resetModelImage();
};

// 点击模态框外部时隐藏模态框
window.onclick = function (event) {
  if (event.target === myModal ||  (myModal.style.display !== 'none' && event.target !== modalImage) ) {
    myModal.style.display = "none";
  }
};

document.addEventListener("dbClickSLImage", (e) => {
  const flag = myModal.style.display === "block";
  myModal.style.display = "block";
  if (!flag) {
    resetModelImage();
  }
  modalImage.src = e.detail.e.target.src;
});

// const hammer = new Hammer(myModal);
// const maxModalImageScale = 10;
// const minModalImageScale = 0.1;
// const pinchDelta = 0.001;
// hammer.get('pinch').set({ enable: true });
// hammer.on('pinchin pinchout', function (event) {
//   event.preventDefault();
//   if (event.type === 'pinchin') {
//     computedModalImageScale = Math.max(minModalImageScale, Math.min(computedModalImageScale - pinchDelta,  maxModalImageScale));
//   } else if (event.type === 'pinchout') {
//     computedModalImageScale = Math.max(minModalImageScale, Math.min(computedModalImageScale + pinchDelta, maxModalImageScale));
//   }
//   modalImage.style.transform = `scale(${computedModalImageScale})`;
// });

// // Create a manager to manager the element
// var manager = new Hammer.Manager(modalImage);
// // Create a recognizer
// var Swipe = new Hammer.Swipe();
// // Add the recognizer to the manager
// manager.add(Swipe);
// const moveDeltaScale = 1.5;
// // Subscribe to a desired event
// manager.on('swipe', function (e) {
//   modalImagedeltaX = modalImagedeltaX + e.deltaX;
//   modalImagedeltaY = modalImagedeltaY + e.deltaY;
//   // const tx = e.velocityX * moveDeltaScale * deltaX;
//   // const ty = e.velocityY * moveDeltaScale * deltaY;
//   const tx = modalImagedeltaX * moveDeltaScale;
//   const ty = modalImagedeltaY * moveDeltaScale;
//   let translate3d = `translate3d(${tx}px, ${ty}px, 0)`;
//   e.target.style.transform = translate3d;
// });

document.addEventListener('DOMContentLoaded', function () {
  // const rotateImage = modalImage;

  // const imageHammer = new Hammer(rotateImage);
  // imageHammer.add(new Hammer.Tap({event: 'tripletap', taps: 3 }));

  // let rotation = 0;
  // imageHammer.on('tripletap', function (event) {
  //   rotation += 90;
  //   rotateImage.style.transform = `rotate(${rotation}deg)`;
  // });
});
