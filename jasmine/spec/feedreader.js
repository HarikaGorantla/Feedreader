"use strict";
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* I am  placing all of my  tests within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is my first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is my first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  A test that loops through each feed in the allFeeds object and
         *  ensures it has a URL defined and that the URL is not empty.
         */
         it('loop',function(){

           for(var i=0;i<allFeeds.length;i++){
             expect(allFeeds[i].url).toBeDefined();
             expect((allFeeds[i].url).length).not.toBe(0);
           }

         });


        /*  A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('loop1',function(){
           for(var i=0;i<allFeeds.length;i++){
             expect(allFeeds[i].name).toBeDefined();
             expect((allFeeds[i].name).length).not.toBe(0);
           }
         });
    });


    /*  a new test suite named "The menu" */
    describe("The menu",function(){



        /*  a test that ensures the menu element is
         * hidden by default. And  analyzing the HTML and
         * the CSS to determine  performance of
         * hiding/showing of the menu element.
         */
         it("hidden",function(){
           expect($("body").hasClass("menu-hidden")).toBe(true);
         });

         /*  a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("visible",function(){
          $(".menu-icon-link").trigger("click");
          expect($("body").hasClass("menu-hidden")).toBe(false);
          $(".menu-icon-link").trigger("click");
          expect($("body").hasClass("menu-hidden")).not.toBe(false);
        });
  });
    /*  a new test suite named "Initial Entries" */
    describe("Initial Entries",function(){
      beforeEach(function(done){
        loadFeed(3,done);
        done();
      });


        /*  a test that ensures when the loadFeed function is called
         *  and completes its work, there is at least
         * a single .entry element within the .feed container.
         *  loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it("loadfeed",function(){
           expect($(".feed").length).not.toBe(0);

         });
  });

    /*  a new test suite named "New Feed Selection" */
     describe("New Feed Selection",function(){
       var first,second;
       beforeEach(function(done){
         loadFeed(0,function(){
           first=$(".feed").html();
           done();
         });
         loadFeed(1,function(){
           second=$(".feed").html();
           done();
         });

         });



        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         *  loadFeed() is asynchronous.
         */
          it("content actually changes",function(){

           expect(first).not.toEqual(second);
          })
        });
}());
