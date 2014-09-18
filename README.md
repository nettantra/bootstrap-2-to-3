# BootStrap 2 to 3 Porter

> This provides a drop-in CSS code to do a direct migration from BootStrap 2 to BootStrap 3 without rewriting HTML.

## Usage

  - Clone the repository to athe stylesheets directory on your document root:

        git clone https://github.com/nettantra/bootstrap-2-to-3 /path/to/your/document/root/stylesheets

  - Just put the following HTML code below the link where you include the Bootstrap 3 CSS Files:

        <link href="/stylesheets/bootstrap-2-to-3/dist/bootstrap-2-to-3.css" rel="stylesheet">

  - For example your HTML should look something like this

        <!DOCTYPE html>
        <html lang="en">
          <head>
            ...
            ...
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
            <link href="/stylesheets/bootstrap-2-to-3/dist/bootstrap-2-to-3.css" rel="stylesheet">
            ...
            ...
          </head>
          <body>
            ...
            ...
          </body>
        </html>




## License

  - [The MIT License](http://opensource.org/licenses/MIT)


Copyright (c) [NetTantra Technologies](http://www.nettantra.com/)

---
