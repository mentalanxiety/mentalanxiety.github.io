var app = new Vue({
    el: "#article",
    data: {
        products: [
            { id: 1, title: "Medium maturing Alligator dill", short_text: '.', image: 'images/eggplant1.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 2, title: "Mid-early dill Gribovsky", short_text: '', image: 'images/eggplant2.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 3, title: "Mid-maturing dill Abundantly leafy", short_text: '', image: 'images/eggplant3.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 4, title: "Medium maturing dill Hercules", short_text: '.', image: 'images/eggplant4.jpg', desc:{
                plant:{p1:"Strong sweet taste.",
                       p2:"Very high productivity with good fruit set.",
                       p3:"Early ripening variety."},
                fruit:{f1:"Shelf life of the fruit is 2.5-3 months.",
                       f2:"Beautiful shiny attractive dark purple color.",
                       f3:"Average fruit size: 0.5 kg."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            } },
            { id: 5, title: "Medium-late Gladiator dill", short_text: '', image: 'images/eggplant5.jpg', desc:{
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
        product: [],
		cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
		cartVisible:0,
        formSubmitted: false,
        formVisible: 1
    },
   mounted:function(){
        this.getProduct();
        this.checkInCart();
		this.getCart();
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
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Ваш запит надіслано. Натисніть OK, щоб оновити сторінку.");
        }
    },
});