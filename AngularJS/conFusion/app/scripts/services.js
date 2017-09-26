/*one of the reasons for moving this data away into the service is, eventually, the data will be moved from the service itself to a back end server. And then, from the service, I will be able to contact the back end server, and then download the data on the fly when it is required. So, you see that when we first started, we had all the data in the HTML page itself. Then, I move the data into the JavaScript code. Now, I'm gonna move the data into the services. And then finally, we'll push the data away to a back end server.  So, you see the progression of how we are separating the model from our view as far as possible.*/

'use strict';

angular.module('confusionApp')
    
    // This factory, which is going to be named menuFactory is going to serve up the information about the items in the menu.
    
    //implement as a service not a factory:
    //.factory('menuFactory', function() {
    .service('menuFactory', function() {

        //implement as a service not a factory:
        //var menufac = {};
        
    
        var dishes=[
            {
                name:'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comments: [
                    {
                        rating:5,
                        comment:"Imagine all the eatables, living in conFusion!",
                        author:"John Lemon",
                        date:"2012-10-16T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        author:"Paul McVites",
                        date:"2014-09-05T17:57:28.556094Z"
                    },
                    {
                        rating:3,
                        comment:"Eat it, just eat it!",
                        author:"Michael Jaikishan",
                        date:"2015-02-13T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Ultimate, Reaching for the stars!",
                        author:"Ringo Starry",
                        date:"2013-12-02T17:57:28.556094Z"
                    },
                    {
                        rating:2,
                        comment:"It's your birthday, we're gonna party!",
                        author:"25 Cent",
                        date:"2011-12-02T17:57:28.556094Z"
                    }                                                          ]
            },
            {
                name:'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comments: [
                    {
                        rating:5,
                        comment:"Imagine all the eatables, living in conFusion!",
                        author:"John Lemon",
                        date:"2012-10-16T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        author:"Paul McVites",
                        date:"2014-09-05T17:57:28.556094Z"
                    },
                    {
                        rating:3,
                        comment:"Eat it, just eat it!",
                        author:"Michael Jaikishan",
                        date:"2015-02-13T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Ultimate, Reaching for the stars!",
                        author:"Ringo Starry",
                        date:"2013-12-02T17:57:28.556094Z"
                    },
                    {
                        rating:2,
                        comment:"It's your birthday, we're gonna party!",
                        author:"25 Cent",
                        date:"2011-12-02T17:57:28.556094Z"
                    }                                                          ]
            },
            {
                name:'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comments: [
                    {
                        rating:5,
                        comment:"Imagine all the eatables, living in conFusion!",
                        author:"John Lemon",
                        date:"2012-10-16T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        author:"Paul McVites",
                        date:"2014-09-05T17:57:28.556094Z"
                    },
                    {
                        rating:3,
                        comment:"Eat it, just eat it!",
                        author:"Michael Jaikishan",
                        date:"2015-02-13T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Ultimate, Reaching for the stars!",
                        author:"Ringo Starry",
                        date:"2013-12-02T17:57:28.556094Z"
                    },
                    {
                        rating:2,
                        comment:"It's your birthday, we're gonna party!",
                        author:"25 Cent",
                        date:"2011-12-02T17:57:28.556094Z"
                    }
                ]
            },
            {
                name:'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comments: [
                    {
                        rating:5,
                        comment:"Imagine all the eatables, living in conFusion!",
                        author:"John Lemon",
                        date:"2012-10-16T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                        author:"Paul McVites",
                        date:"2014-09-05T17:57:28.556094Z"
                    },
                    {
                        rating:3,
                        comment:"Eat it, just eat it!",
                        author:"Michael Jaikishan",
                        date:"2015-02-13T17:57:28.556094Z"
                    },
                    {
                        rating:4,
                        comment:"Ultimate, Reaching for the stars!",
                        author:"Ringo Starry",
                        date:"2013-12-02T17:57:28.556094Z"
                    },
                    {
                        rating:2,
                        comment:"It's your birthday, we're gonna party!",
                        author:"25 Cent",
                        date:"2011-12-02T17:57:28.556094Z"
                    }                                                          ]
            }
        ];
        
        //implement as a service not a factory:
        //menufac.getDishes = function(){
        this.getDishes = function(){
            return dishes;
        };
    
        //implement as a service not a factory:
        //menufac.getDish = function (index) {
        this.getDish = function (index) {
            return dishes[index];
        };
    
        //implement as a service not a factory:
        //return menufac;



    });