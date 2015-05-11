georgian webfonts
================

####install with bower
`bower install --save georgian-webfonts`

you can use [Preen][4] to include only fonts that you need ([but how?][5])

####don't want to use bower?
use [rawgit.com CDN][2] this way you don't need to install anything just replace
`/bower_components/georgian-webfonts/` with `https://rawgit.com/thecotne/georgian-webfonts/master/`
in following examples

this is a free service, so there are no [uptime or support guarantees.][3]

####how to use
include font you need with link tag

```html
<link rel="stylesheet" href="/bower_components/georgian-webfonts/<font name>.css">
```

or css import

```css
@import "/bower_components/georgian-webfonts/<font name>.css";
```

to use font write some css with selector and `font-family` like this

```css
body {
	font-family: "BPG Arial";
}
```

####find bug?

[submit issue][1]

####font is missing?

[submit issue][1]

[1]: https://github.com/thecotne/georgian-webfonts/issues/new "New Issue · thecotne/square-file-icons"
[2]: https://rawgit.com/ "rawgit.com CDN"
[3]: https://rawgit.com/faq#no-uptime-guarantee "no uptime or support guarantees"
[4]: https://github.com/BradDenver/Preen "Preen"
[5]: https://github.com/thecotne/georgian-webfonts/wiki/How-to-use-Preen "How to use Preen"
