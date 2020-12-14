var args = arguments[0] || {};

console.log('args => ', args);

var Images = args.images || [];
var ImageViews = [];
var i = 0;
var BtnsVisible = true;

$.AccuImageSliderView.addEventListener('scrollend', ScrollEnd);
$.CloseBtn.addEventListener('click', ClosePage);
$.PrevBtn.addEventListener('click', PrevImageClicked);
$.NextBtn.addEventListener('click', NextImageClicked)
$.AccuImageSliderHolder.addEventListener('click', ShowHideBtns);

init()

function init() {
  let j = 0;
  for (var image of Images) {
    var imageView = Ti.UI.createImageView({
      id: "AccuImageSliderImageView" + j,
      width: Ti.UI.SIZE,
      height: Ti.UI.SIZE
    });
    if (image.type === 'base64') {
      imageView.image = Ti.Utils.base64decode(image.image);
    } else if (image.type === 'image') {
      imageView.src = image.image;
    } else {
      throw new Error('Invalid image type ' + image.type + '.');
    }
    var zoomView = createZoomView("AccuImageSliderImageViewZoom" + j);
    zoomView.add(imageView);
    ImageViews.push(zoomView);
    $.AccuImageSliderView.addView(zoomView);
    j++;
  }
  if (Images.length === 1) {
    $.AccuImageSliderHolder.remove($.PrevBtn);
    $.AccuImageSliderHolder.remove($.NextBtn);
  }
}

function createZoomView(id) {
  return Titanium.UI.createScrollView({
    id: id,
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 0,
    bottom: 0,
    showVerticalScrollIndicator: false,
    showHorizontalScrollIndicator: false,
    maxZoomScale: 100,
    minZoomScale: 1,
    zoomScale: 1
  });
}

function ShowHideBtns(e) {
  var SourceId = e.source.id || "";
  if (SourceId === 'AccuImageSliderHolder' || SourceId.indexOf('AccuImageSliderImageView') === 0) {
    if (BtnsVisible) {
      var animation = Ti.UI.createAnimation({
        duration: 400,
        opacity: 0
      });
      $.CloseBtn.animate(animation);
      $.PrevBtn.animate(animation);
      $.NextBtn.animate(animation);
      BtnsVisible = false;
    } else {
      var animation = Ti.UI.createAnimation({
        duration: 400,
        opacity: 1
      });
      $.CloseBtn.animate(animation);
      $.PrevBtn.animate(animation);
      $.NextBtn.animate(animation);
      BtnsVisible = true;
    }
  }
}

function ScrollEnd(e) {
  i = e.source.currentPage;
}

function ClosePage(e) {
  $.AccuImageSlider.close({
    animated: true
  });
}

function PrevImageClicked(e) {
  --i;
  if (i < 0) {
    i = ImageViews.length - 1;
  }
  $.AccuImageSliderView.scrollToView(ImageViews[i]);
}

function NextImageClicked(e) {
  ++i;
  if (i > ImageViews.length) {
    i = 0;
  }
  $.AccuImageSliderView.scrollToView(ImageViews[i]);
}