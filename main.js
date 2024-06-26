var app = new Vue({
    el: "#article",
    data: {
        products: [
            { id: 1, title: "Eggplant Black Beauty", short_text: 'Large, glossy, and deep purple-black in color.', image: 'images/eggplant1.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 2, title: "Eggplant Japanese Eggplant", short_text: 'Slender and elongated with a vibrant purple skin', image: 'images/eggplant2.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 3, title: "Eggplant Rosa Bianca", short_text: 'Round, creamy white with lavender streaks', image: 'images/eggplant3.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 4, title: "Eggplant Pingtung Long", short_text: 'Slim, dark purple Asian variety.', image: 'images/eggplant4.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 5, title: "Eggplant Listada de Gandia", short_text: 'Striped in shades of violet and white.', image: 'images/eggplant5.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } }
        ],
        product: {},
        btnVisible: 0
    },
   mounted:function(){
        this.getProduct();
        this.checkInCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart=window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        }
    },
});