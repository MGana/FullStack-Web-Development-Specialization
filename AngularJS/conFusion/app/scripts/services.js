'use strict';

angular.module('confusionApp')

        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            
            
            this.getDishes = function(){

                return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

            };
            
            //with getDishes, if I do a query on that it'll return me the entire array. If I use get with an ID, then it will return me the specific item that I am looking for. So, I can go ahead and get rid of the getDish method it is not longer needed. 
            

            // implement a function named getPromotion
            // that returns a selected promotion.
            this.getPromotion = function () {

                return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
            };    
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};
    
            corpfac.getLeaders = function() {

                return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});

            };

            // Remember this is a factory not a service
            return corpfac;
    
    
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var feedbackfac = {};
    
            feedbackfac.getFeedbacks = function() {

                return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});

            };

            return feedbackfac;
    
        }])

;
