/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        // Tests to make sure that the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensures it has a URL defined and isn't empty.
        it('has a url that is not empty', function() {
            for(var i = 0 ; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Ensures it has a name defined and that the name is not empty.
        it('has a name that is not empty', function() {
            for(var i = 0 ; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        // Ensures the menu element is
        it('menu icon is not visible by default', function() {
             expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Ensures the menu changes visibility when the menu icon is clicked.
        it('menu icon can be clicked to toggle hidden off, then back on', function() {
            $('.menu-icon-link').click();  //toggle hidden off
            expect($('body').hasClass('menu-hidden')).toEqual(false);

            $('.menu-icon-link').click();  //toggle hidden back on
            expect($('body').hasClass('menu-hidden')).toEqual(true);

        });
    });

    describe('Initial Entries', function() {
        // Ensures when the loadFeed function is called and completes its work, there is at least a single feed.
        beforeEach(function(done) {
            loadFeed(0, function () {
                done();
              });
        });

        it('loadFeed is working correctly', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var feedOne, feedTwo;

        // Sets variables for the feeds using beforeEach and "done" because code is asynchronous.
        beforeEach(function(done) {
            loadFeed(0, function () {
                // Get content of feed container
                feedAfterFirstLoad = $('.feed').html();
                loadFeed(1, function () {
                    // Get content of feed container again
                    feedAfterSecondLoad = $('.feed').html();
                    done();
               });
             });
        });

        // Ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        it('each loadFeed is different than the one before', function(done) {
            expect(feedAfterFirstLoad === feedAfterSecondLoad).toBe(false);
            done();
         });
    });
}());
