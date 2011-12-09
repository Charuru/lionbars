# LionBars

LionBars is a jQuery plugin that styles default scrollbars to look and behave like in OSX Lion.
Please check out the demo at http://nikolaydyankov.github.com/lionbars/

1. Main features
2. How to use
3. Options
4. Other things to note

## Main features

- Browser support - IE8, Safari, Firefox, Chrome, Opera (Win & OSX)
- Scrollbars look exactly the same in all browsers and OS
- The content doesn't get shrunk when scrollbars are added, just like in OSX
- Option to auto-hide scrollbars
- Dark and light style
- EndlessScroll functionality

## How to use

1. Download LionBars
2. Include the script right after jquery
    <script type="text/javascript" src="lionbars.js"></script>
3. Include the css however you prefer. For example, in the main stylesheet
    @include 'lionbars.css';
4. Call .lionbars() on all elements that have scrollbars
    $('#box1, #box2').lionbars();
5. You're done!

## Options

LionBars has some options that you can use to do some useful things. They will be explained here. All options are passed as an object to the constructor.

    $('div').lionbars({
        autohide: true
    });

### Autohide scrollbars

LionBars gives you the opporunity to autohide the scrollbars so that they will only appear if you scroll the content. To enable the feature you only have to set *autohide* to *true*.

### EndlessScroll

This feature makes it possible to react on reaching either to bottom o the right of the scrolled content. If you pass some handlers to the options they will be called and you can modify the content and update it. Important is that you call the *callback* function so that lionbars can update its scrollbars and sliders.

    $('div').lionbars({
        reachedBottom: function (callback) {
            // do something with the content
            $(this).append('your html');
            
            callback.call();
        },
        reachedRight: function (callback) {
            // do something with the content
            $(this).append('your html');
            
            callback.call();
        }
    });

## Other notes

This is a relatively new plugin, that I'm currently rewriting from the ground up and It's about 80% complete. Some of the features like auto-hiding the scrollbars etc. haven't been added yet. I appreciate everyone's patience and thank you all for using LionBars!

If you wish to contribute, make sure you contact me at me@nikolaydyankov.com

Developers
<a href="http://www.nikolaydyankov.com">Nikolay Dyankov</a>
<a href="http://github.com/kersten">Kersten Burkhardt</a>