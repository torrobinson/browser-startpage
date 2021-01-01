# browser-startpage
![Image of Yaktocat](https://github.com/torrobinson/browser-startpage/raw/master/browser-startpage-preview.png)
Basic page displaying the date, time, and weather.
Inspired by [MiguelRAvila](https://github.com/MiguelRAvila/Bento).
For use as either a new-tab page or a homepage in your web browser.

## [View Demo](https://www.torrobinson.com/browser-startpage/?weatherApiKey=your%20key&name=your%20name&location=your%20location&lat=00.00000&long=00.00000)

## Usage:
- Get an API key from https://openweathermap.org/ (it's free). It may take up to an hour for your key to become valid, so do this in advance
- Point your browser's homepage to your hosted instance,
  - OR use this plugin for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search) or [Chrome](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia) to set it as the new tab page (preferred)
-  In the URL, include query string parameters:
   -  `name` (optional) - your name for a customized greeting
   -  `location` (required) - your location that will be displayed
   -  `lat` (required), `lat` (required) - your location coordinates for fetching weather 
   -  `weatherApiKey` (required) - the API key you generated for yourself, as mentioned above
   -  `col1` (optional) - The primary background gradient color to use (system light mode) (remember to URL-escape the # hex color codes to `%23`)
   -  `col2` (optional) - The secondary background gradient color to use (system light mode) (remember to URL-escape the # hex color codes to `%23`)
   -  `dark-col1` (optional) - The primary background gradient color to use (system dark mode) (remember to URL-escape the # hex color codes to `%23`)
   -  `dark-col2` (optional) - The secondary background gradient color to use (system dark mode) (remember to URL-escape the # hex color codes to `%23`)
   
## Sample Querystring:
```
.../browser-startpage/index.html?
&weatherApiKey=[your key here]
&name=John
&location=New York
&lat=40.7128
&long=74.0060
&dark-col1=%23ff0048
&dark-col2=%233A2B7B
&col1=%23ff5777
&col2=%23ca58a3
```
