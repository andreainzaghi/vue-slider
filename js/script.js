new Vue(
  {
  el:'#app',
  data: {

    images:[
      "https://th.bing.com/th/id/R0225855b2d84ed75edee72d336db94a7?rik=HYvA33ugcDFk1w&pid=ImgRaw",
      "https://www.bing.com/images/search?view=detailV2&ccid=3ljDRSWO&id=A7186807CA644E75421383531580AF56A9E24525&thid=OIP.3ljDRSWOyQ5Va_tDg9PNDgHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fRde58c345258ec90e556bfb4383d3cd0e%3frik%3dJUXiqVavgBVTgw%26riu%3dhttp%253a%252f%252fthewowstyle.com%252fwp-content%252fuploads%252f2015%252f07%252fNatural-World-Wallpaper-HD-.jpg%26ehk%3dMJNXCUUTL0dktIg%252bJ1g93w%252fpxgVCLYefE1rBAa6X9Gk%253d%26risl%3d%26pid%3dImgRaw&exph=720&expw=1280&q=images&simid=608024124158445418&ck=842B56C817DEAFD8F716F29EC4BAAC32&selectedIndex=1&FORM=IRPRST",

    ],
    imageIndex:0
  },
  methods: {
    nextSlide: function() {
        this.slideIndex++;
        if (this.slideIndex == this.images.length) {
          this.slideIndex = 0;
        }
      },
    prevSlide: function() {
     this.slideIndex--;
     if (this.slideIndex < 0) {
       this.slideIndex = this.images.length -1;
     }
   }
 }
}
);
