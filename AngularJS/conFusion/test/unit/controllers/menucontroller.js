//describe = jasmine syntax

describe('Controller: MenuController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));
  //the beforeEach is a way of specifying in Jasmine what needs to be set up. Before the test is run. And specify the module as confusionApp. So, this way of specifying says that this is Angular.mocks.module. So, this is a mock module of confusionApp that is set up so that the control can be tested.

  //specify a few variable names here which I'm going to make use of in configuring the test.     
  var MenuController, scope, $httpBackend;
    
    
  // Initialize the controller and a mock scope (The underscores will be automatically removed by angular when the test is being run.)
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory) {

      // place here mocked dependencies
      $httpBackend = _$httpBackend_;

      //when it gets a get request are this particular URL here, local host 3,000 slash dishes. It will respond with this Json object here.
      $httpBackend.expectGET("http://localhost:3000/dishes").respond([
          {
          "id": 0,
          "name": "Uthapizza",
          "image": "images/uthapizza.png",
          "category": "mains",
          "label": "Hot",
          "price": "4.99",
          "description": "A",
          "comments":[{}]
          },
          {
          "id": 1,
          "name": "Zucchipakoda",
          "image": "images/zucchipakoda.png",
          "category": "mains",
          "label": "New",
          "price": "4.99",
          "description": "A",
          "comments":[{}]
          }
      ]);
      
    // initialize the scope variable to $rootScope.$new(). So, this is how you can create a new scope. Under the root scope and then use that when you're carrying out tests.   
    scope = $rootScope.$new();
      
    //Then you specify the menu controller by using the dollar controller and specify the menu controller name and then you are injecting the parameter scope as scope, the scope variable that you just created. And menuFactory is the same is the menuFactory you got in as the parameter for the injection.   
    MenuController = $controller('MenuController', {
      $scope: scope, menuFactory: menuFactory
    });
      
    //$httpBackend.flush, meaning that when the request was received, the flush will cause the reply to flashback to their module so the test can be carried out immediately.   
    $httpBackend.flush();

  }));    
    
  //Tests (jasmine syntax)    
  it('should have showDetails as false', function () {

    expect(scope.showDetails).toBeFalsy();

  });

  it('should create "dishes" with 2 dishes fetched from xhr', function(){

      expect(scope.showMenu).toBeTruthy();
      expect(scope.dishes).toBeDefined();
      expect(scope.dishes.length).toBe(2);

  });

  it('should have the correct data order in the dishes', function() {

      expect(scope.dishes[0].name).toBe("Uthapizza");
      expect(scope.dishes[1].label).toBe("New");

  });

  it('should change the tab selected based on tab clicked', function(){
      // at the start, the scope tab value should be equal to one. So that's the first test I'm carrying out.
      expect(scope.tab).toEqual(1);

      scope.select(3);

      expect(scope.tab).toEqual(3);
      expect(scope.filtText).toEqual('mains');

  });    

    
});

//when you're writing your code, you would first configure all the tests, then you will go and start writing the code in order to pass these tests, so that's why we call test driven development.

//So if you had designed your tests properly then you can ensure that when you write your code your code is properly written. If it passes on the test that means that you must have completed everything correctly. If you have completed partially the code then your tests will keep failing and you keep modifying your implementation until the tests pass. So this is what we call a test driven development.