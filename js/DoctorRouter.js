scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: '/html/Index_Slider.html',
            controller: 'indexSlider'
        })

        // route for the home page
        .when('/home', {
            templateUrl: '/html/Index_Slider.html',
            controller: 'indexSlider'
        })

        // route for Search
        .when('/search', {
            templateUrl: '/html/DoctorSearch.html',
            controller: 'doctorSearch'
        })

        // route for the About page
        .when('/about', {
            templateUrl: 'html/about.html',
            controller: 'about'
        })

        // route for the Contact page
    // /QA/html/contact.html url for deploy
        .when('/contact', {
            templateUrl: 'html/contact.html',
            controller: 'contact'
        })

        .when('/searchFunctionality', {
            templateUrl: '/html/SearchFunctionality/DoctorSearch.html',
            controller: 'functionalitySearch'
        })
    
    .when('/terms&conditions', {
            templateUrl: '/html/Terms&conditions.html',
            controller: 'terms&conditions'
        })

});
