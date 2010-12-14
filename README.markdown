# JQuery Navigable

`jquery.navigable` is a simple plugin for quickly adding keyboard navigation to your website. It allows you to quickly and easily provide next/prev, select, and cancel actions from the keyboard in a style similar to Google Reader or Twitter.

## Installation

Navigable requires jQuery 1.4 or later. After that, simply include `jquery.navigable.js` in your HTML page and you are ready to use it!

## Basic Usage

Let's say I have a list of items I want to be able to navigate through:

    <ul id='navlist'>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
    
Here I can activate navigation for this list like so:

    $('#navlist').navigable();
    
By default, navigable will look for list elements inside the specified container and allow you to navigate using `j` for next, `k` for previous, `Enter` for select and `Esc` for cancel. When an item is navigated to, a few things happen:

1. A "focus" class is applied to the element (default: `focused`).
2. A `focus.navigable` event is triggered on the element (with `blur.navigable` triggered on navigating away from an element).

So if I wanted to display the currently selected option, I could write:

    $('#navlist li').bind('focus.navigable', function() {
      alert("You have selected " + $(this).text());
    });
    
## Options

The following configuration options may be passed into the initialization function:

* `tag` - The CSS selector for which to search inside the container element for navigable elements. Defaults to `li`.
* `focusClass` - The class that will be applied to an element when it is focused. Defaults to `focused`.
* `scroll` - When true, the window will scroll to make sure that the currently selected element is always on screen. Defaults to `true`
* `keyNext`, `keyPrev`, `keySelect`, and `keyCancel` - The key codes for the next, previous, select, and cancel actions. Defaults to `j`, `k`, `Enter`, and `Esc`
* `blurOnCancel` - Whether or not to automatically blur the currently selected element when the cancel key is pressed. Defaults to `true`

## License and Copyright

Copyright &copy; 2010 Michael Bleigh and Intridea, Inc.

Permission is hereby granted, free of charge, to any person obtaining a 
of this software and associated documentation files (the "Software"), to 
in the Software without restriction, including without limitation the 
to use, copy, modify, merge, publish, distribute, sublicense, and/or 
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
THE SOFTWARE.