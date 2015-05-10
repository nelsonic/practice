# other

## Sending Email From Node.js

+ NodeMailer: https://github.com/andris9/Nodemailer


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