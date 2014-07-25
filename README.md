Spotlight
======

If you need to highlight elements on a web page then you can't get easier than spotlight! Here's the simplest example:

`$('#wow').spotlight();`

This will add a semi-tramsparent overlay to the page, then 'punch through' the overlay with a circle exactly where your '#wow' element is. Need the spotlight to be a rectangle? No problem, just add it as an option:

`$('#wow').spotlight({ spotlightshape: 'rectangle' });`

And if you want more padding between your element and the edge of the spotlight that's easy to do as well:

`$('#wow').spotlight({ padding: 30 });`

Options
--------

Here are all the options, with their default values:

`color: "#000"`

The colour of the overlay.

`opacity: 0.6`

The amount of opacity for the overlay.

`padding: 0`

The amount of padding between the element and the edge of the spotlight.

`spotlightShape: 'circle'`

The shape of the spotlight; either 'circle' or 'rectangle'

`closeOnClick: true`

Whether the spotlight should be turned off when the overlay is clicked.

`closeOnEsc: true`

Whether the spotlight should be turned off when the escape button is pressed.