# other

fun times with code.


## ES6 => Babel ... ?

ES6 has many "*cool*" features; some of which are (*potentially*) *useful*.
If you need an intro to these have a look at https://github.com/benjaminlees/Es6

The focus of this post, *however*, is Babel.

Tower of Babel: https://en.wikipedia.org/wiki/Tower_of_Babel


https://babeljs.io/

Why do all babel tutorials install the module globally?


+ Eric Elliott's intro to Babel:
https://medium.com/javascript-scene/how-to-use-es6-for-isomorphic-javascript-apps-2a9c3abe5ea2#.equvzgaoy

Browser Compatibility Chart: http://kangax.github.io/compat-table/es6/


## Sending Email From Node.js

NodeMailer https://github.com/andris9/Nodemailer does a good job
of sending email from your node.js script/app.
The only drawback is that if your IP address gets
blocked (*because a handfull of people mark the email you send as "spam"*),
then you need to re-configure your settings.
If you're sending thousands of emails and don't want to spend your life
trawling through logs to figure out why they are getting blocked,
opt to use an email service company.
We opted to use [**Mandrill**](https://www.mandrill.com/features/)
and produced a helper package: https://github.com/dwyl/sendemail
(*which will help you get started quickly*).



## ListDirs

In my quest to find the perfect module to list all
directories in a project, I tested:

+ **dir**: https://github.com/jonschlinkert/dirs
sadly, my suspicions were confirmed that `dirs` calls
the isDir method synchronously.
Issue noted: https://github.com/jonschlinkert/dirs/issues/1
(otherwise it works as advertised...)

## Switching to QUnit *Full Stack*!

Which QUnit Node.js Module should we use...?

> The official qunitjs module (maintained by the jquery foundation): https://github.com/jquery/qunit
works with istanbul. simply run: `istanbul cover your-test-filename.js`
> see: http://ariya.ofilabs.com/2012/12/javascript-code-coverage-with-istanbul.html
> I'm a *little* worried that the 1.18 release has only 84% coverage ... it doesn't make any sense.
