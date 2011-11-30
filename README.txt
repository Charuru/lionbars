LionBars

LionBars is a jQuery plugin that styles default scrollbars to look and behave like in OSX Lion.

1. Main features.
2. How to use?
3. Other things to note.

Main features:

- Browser support - IE8, Safari, Firefox, Chrome, Opera (Win & OSX).
- Scrollbars look exactly the same in all browsers and OS;
- The content doesn't get shrunk when scrollbars are added, just like in OSX;
- Option to auto-hide scrollbars;
- Dark and light style.

2. How to use?

	1) Download LionBars
	2) Include the script right after jquery:

<script type="text/javascript" src="lionbars.js"></script>

	3) Include the css however you prefer. For example, in the main stylesheet:

@include 'lionbars.css';

	4) Call .lionbars() on all elements that have scrollbars.

$('#box1, #box2').lionbars();

	5) You're done!

3. Other notes

This is a relatively new plugin, that I'm currently rewriting from the ground up and It's about 80% complete. Some of the features like auto-hiding the scrollbars etc. haven't been added yet. I appreciate everyone's patience and thank you all for using LionBars!

If you wish to contribute, make sure you contact me at me@nikolaydyankov.com

Developer
www.nikolaydyankov.com