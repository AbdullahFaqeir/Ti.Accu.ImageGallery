[![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/ti.accu.imagegallery)

# Ti.Accu.ImageGallery

A simple yet effective widget to display an image gallery with, next, previouse and zoom which supports loading images in url, path and base64 string.

# Preview

![screenshot](https://user-images.githubusercontent.com/1428547/102090915-bd449580-3e26-11eb-9e28-3e4a6c11f351.png)


# Installation 
you can install the widget directly by downloading a zip file from this repo. or you can download it usign [gitTio](http://gitt.io) package manager using the following command

```sh
$ gittio install ti.accu.imagegallery
```

# Usage & Implementation

You can easily use the widget with the following way.

```js
var ImageGallery = Alloy.createWidget('ti.accu.imagegallery',{
  images:[
  {
    image:""//url, path or base64 string
    type:""//image or base64
  }
  ]
}).getView();

ImageGallery.open();
```

# Contribution 
Pull request are welcome to add any new features to the widget.

License
----

Apache License, Version 2.0

# Author 
 - Abdullah Al-Faqeir (abdullah@accusolutions.net) AccuSolutions LLC 2020

