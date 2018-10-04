# Feed Reader Testing

The script files for this website check to make sure the app.js file runs correctly for the
website to operate the way it was designed to operate. Each of the functions in the app.js are
tested to ensure they work correctly.

## How it works

The feedreader.js file will run automatically upon loading of the index.html file.
To remove the testing from the website when it goes live all you have to do is remove
the jasmine link, and the three jasmine scripts inside the <head> of the index.html file.

## Tests Included

The tests included in the feedreader file ensure the RSS feeds function as designed are return
values. The menu is tested to make sure it is hidden by default and then hides and returns
upon clicking on the menu icon. Lastly the entries of each of the pages are tested to make sure they work and that they return values they are supposed to return.
