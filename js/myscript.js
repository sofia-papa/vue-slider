
var app = new Vue(
{
  el: "#app",

  data: {
      images: [
          {
              source : "https://www.tennisitaliano.it/files/articoli/4/8/5/48523/B_13fa91e7-7b3b-4d9a-9360-9fabce49cb49.jpeg",
              alt : "Federer"
          },
          {
              source : "https://s.france24.com/media/display/e8cf202e-01b9-11ec-a495-005056a90284/970835e4f2f9ed0e71594dff0804d46832272763.jpg",
              alt : "Nadal"
          },
          {
              source : "https://pbs.twimg.com/media/EuMLsV6XEAMZnjR.jpg",
              alt: "Djokovic"
          },
          {
              source : "https://www.atptour.com/-/media/images/news/2021/02/07/08/14/sinner-great-ocean-road-open-2021-sunday-final.jpg",
              alt : "Sinner"
          },
          {
              source : "https://cdn-3.expansion.mx/dims4/default/9c973f7/2147483647/strip/true/crop/1000x666+0+0/resize/1800x1199!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff7%2F94%2F2242edcf4bf492a230a5a226aaa4%2Fgettyimages-1202657076.jpg",
              alt: "Zverev"
          },
          {
              source : "https://img.gruporeforma.com/imagenes/960x640/6/99/5098356.jpg",
              alt : "Tsitsipas"
          },
          {
              source : "https://www.guardian-series.co.uk/resources/images/12783820/",
              alt : "Berrettini"
          }
      ],

      imageIndex : 0,
  },

  methods: {
   
    previousImage: function(){
        this.imageIndex --;

        if(this.imageIndex < 0){
            this.imageIndex = this.images.length - 1;
        }

    },

      nextImage: function(){
          this.imageIndex ++;

          if(this.imageIndex >= this.images.length){
            this.imageIndex = 0;
        }
      },

  }
     
});