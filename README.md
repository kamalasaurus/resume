# resume.js

### Installation Instructions

1. curl [nvm](https://github.com/creationix/nvm)
2. `nvm install iojs`
3. `npm install -g live-server`
4. `git clone` this repo
5. `live-server` in project root directory
6. navigate to `127.0.0.1:8080` in a browser of your choice, might autolaunch in a browser depending on your system.  Should autodownload a pdf on launch.

Stripped out a lot of the extraneous structure from the superb [jsPDF](https://github.com/MrRio/jsPDF) library.  This particular distribution isn't as compatible w/ IE 6-9, and has a default template to produce a 2-column document.

Like a resume, for instance :)

### How To Use

This PDF generator was designed to allow HTML+CSS formatted text to render to a PDF.  To support multiple columns, the transformation follows this pipeline:

HTML+CSS -> canvas(PNG) -> PDF

Since it becomes an image that is scaled, it will squash if it has too much content.  If you're curious why multiple columns requires such a roundabout pipeline, send me an email :)

Just replace the content in `index.html` and `resume.css` with your own resume stuff.


In general, the goal was to type-set a PDF output with CSS rules.  Without spending more effort on the project than a 1-page resume demanded.  Hope this is helpful for some!

Default included fonts are Garamond, Gill Sans, and Font Awesome.

![Kamal Resume](/resume.gif)
