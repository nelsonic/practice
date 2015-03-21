# other



## ListDirs

In my quest to find the perfect module to list all
directories in a project, I tested:

+ **dir**: https://github.com/jonschlinkert/dirs
sadly, my suspicions were confirmed that `dirs` calls
the isDir method synchronously. 
Issue noted: https://github.com/jonschlinkert/dirs/issues/1
(otherwise it works as advertised...)