'use strict';

/* 
var app = angular.module('confusionApp',[]);
app.controller('menuController', function() {..}
One change that you'll notice is that I am simply declaring it as an angular module. And note that I don't have a semi-colon there, because I am using chaining to declare the controller immediately thereafter. So the angular module and them I'm saying .controller and menuController. And inside the menuController function definition here, I have included all the code from the menu html file that I have defined earlier. 
*/


angular.module('confusionApp', [])

    .controller('MenuController', ['$scope', function($scope) {

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;    

        $scope.dishes = [
            {
                name:'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },

            {
                name:'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comment: ''
            },

            {
                name:'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },

            {
                name:'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            }
        ]; 


        $scope.select = function(setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } 
            else if (setTab === 3) {
                $scope.filtText = "mains";
            }
            else if (setTab === 4) {
                $scope.filtText = "dessert";
            }
            else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };  

    }])

    //the feedback controller is nested inside the contact control. So by the way scope works whatever I define in the ContactController will also be accessible inside the FeedbackController
    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function() {
            //FeedbackController has complete access to feedback. This is an aspect of scope nesting
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                //every thing is OK
                $scope.invalidChannelSelection = false;
                //re-set the variables to their empty form state (when click on send feedback all field are cleared)
                $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                $scope.feedback.mychannel="";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };
    }])                                   
;