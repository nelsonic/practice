/**
see: http://thisplace.com/puzzler.html
A totally optional puzzler draws near! 

Within this string of 2015 characters there is a sequence of 
7 characters which is repeated. But there's a problem! 
There's a typo in one of the sequences. 

You're looking for two strings of 7 characters which share 
6 of those characters. Send us the 6 shared characters as part of your 
application if you'd really like to impress us.


dfb405e61975801480e9350fc34dc7dab45e35656a025507004aa93a43004d26c24650f06aad0ee5891b033114a6a93c85a80ef986bc2195582a69d8b45ab468b51b4616048c63c6130e87dab2bd0559277e95a8f60419138f0983a302222c5c81cd7a29c7535a6f6cfe5c1bf59c442fdf7fe4bffb30f82193945a000e48c969358d368a79cc87a10aae384da16296f624b0478a8f98a9ba55de72a77203854f1161a2c48287948cb1c19452df3a364844f9fc1cdc7d57014af2ca4cc163fe4bbe33611b7fc762f6ad7d6bf3f1b3b4a40333e0eb7b5fdb48ae3297a25ae1122202bb9dd7b76319f6c7ab6e8b27895d08a2c475d5e5158299c6d5018a0027f78b09fadd061a71f315fd7cab65104ba238cf34e67bec230ba1d390253ec52a597ff4c230dc60c5f39f91cce97fc036c85b40eae1dccb3e3403dc9bc7427e521424825c12c13beb52e8b1a76b4517bddfc54b067734a1c3ee0b30aceba53059fd9b780dfb5e462e7afb31c64e3d3b11459ef029df6062ac91e11ffcf9504aae6b135646101d168ee437144d5a6f09dc1458df9f4ac987123ced878a580f21838163c8bd578144b2b9120e57404fe0b3838e8e3ded58f6ae22922e16245398a55fc5649861f3cf4a333f91e5d32dd9be320d127a4c123d9054bb7c84e87c8afa5a6e220aa240720bd5c4398e5d74ac63667df50fbf7f0e79eca7e505e6cfc6e4d05bfef70e40879df10107d7dc8d4bb09fc348c25a0b07b3446a679765a082db4ebf21c24a26ca37ac98518f1952cc2389283391b66dd6184ee394d3b783477e74eea7feb75c5496b42310c981e41a47453ba9c3b7b86259c7753f1cdca2a890ce3005ab4ba376047cdb7346b4bff554f4c5d76c63f221efc07f342cdc8aea01d2034f0a1ea2c9f122bacef94c24e226d53af46a0a1da0151798028caa735f6f58652b2ab3a6b6854afe29904b4da17bdc015da38dd4c5038bd88188e0a35e412231d1c88b97d9fd7fd97b0b6a339145d547184cdcee5b91c9b7d2511bd6f1a2c46cf7d6941306b5a215fd8f9d8b7bddbe59287d83af10f64ba1180a317910cbc6f47f4bba88707274a621ce7adb2e600bb1a730f38802c94fc1c2072361f88e19ced830fdd4402bae2c77263e41229d9356e28b26aba68371728e834235c1db08bb3db253150285af0199933bad8db782cb7ca0a52270fbc2996a9eb319bbb8bb9403138e92baaa09d31f333e52d616a2f4c778665e9c1a3b2a010a860a2cfe3e31a6fe5aedba61204fa2955ee31304c1b92e1eb79cf085d59f2bb3963af49f45058b2cd7be53179108a1c2faf5e40781b0fd828a42703ef4b42684b1cdac92ce997c96d1bfb87f10df0e4b339090137dabb886652914de7f40d91c7a655cf93cd67e21559c4d01128617dd75813e1ac5c

 */
var c = require('chalk');

var s = 'dfb405e61975801480e9350fc34dc7dab45e35656a025507004aa93a43004d26c24650f06aad0ee5891b033114a6a93c85a80ef986bc2195582a69d8b45ab468b51b4616048c63c6130e87dab2bd0559277e95a8f60419138f0983a302222c5c81cd7a29c7535a6f6cfe5c1bf59c442fdf7fe4bffb30f82193945a000e48c969358d368a79cc87a10aae384da16296f624b0478a8f98a9ba55de72a77203854f1161a2c48287948cb1c19452df3a364844f9fc1cdc7d57014af2ca4cc163fe4bbe33611b7fc762f6ad7d6bf3f1b3b4a40333e0eb7b5fdb48ae3297a25ae1122202bb9dd7b76319f6c7ab6e8b27895d08a2c475d5e5158299c6d5018a0027f78b09fadd061a71f315fd7cab65104ba238cf34e67bec230ba1d390253ec52a597ff4c230dc60c5f39f91cce97fc036c85b40eae1dccb3e3403dc9bc7427e521424825c12c13beb52e8b1a76b4517bddfc54b067734a1c3ee0b30aceba53059fd9b780dfb5e462e7afb31c64e3d3b11459ef029df6062ac91e11ffcf9504aae6b135646101d168ee437144d5a6f09dc1458df9f4ac987123ced878a580f21838163c8bd578144b2b9120e57404fe0b3838e8e3ded58f6ae22922e16245398a55fc5649861f3cf4a333f91e5d32dd9be320d127a4c123d9054bb7c84e87c8afa5a6e220aa240720bd5c4398e5d74ac63667df50fbf7f0e79eca7e505e6cfc6e4d05bfef70e40879df10107d7dc8d4bb09fc348c25a0b07b3446a679765a082db4ebf21c24a26ca37ac98518f1952cc2389283391b66dd6184ee394d3b783477e74eea7feb75c5496b42310c981e41a47453ba9c3b7b86259c7753f1cdca2a890ce3005ab4ba376047cdb7346b4bff554f4c5d76c63f221efc07f342cdc8aea01d2034f0a1ea2c9f122bacef94c24e226d53af46a0a1da0151798028caa735f6f58652b2ab3a6b6854afe29904b4da17bdc015da38dd4c5038bd88188e0a35e412231d1c88b97d9fd7fd97b0b6a339145d547184cdcee5b91c9b7d2511bd6f1a2c46cf7d6941306b5a215fd8f9d8b7bddbe59287d83af10f64ba1180a317910cbc6f47f4bba88707274a621ce7adb2e600bb1a730f38802c94fc1c2072361f88e19ced830fdd4402bae2c77263e41229d9356e28b26aba68371728e834235c1db08bb3db253150285af0199933bad8db782cb7ca0a52270fbc2996a9eb319bbb8bb9403138e92baaa09d31f333e52d616a2f4c778665e9c1a3b2a010a860a2cfe3e31a6fe5aedba61204fa2955ee31304c1b92e1eb79cf085d59f2bb3963af49f45058b2cd7be53179108a1c2faf5e40781b0fd828a42703ef4b42684b1cdac92ce997c96d1bfb87f10df0e4b339090137dabb886652914de7f40d91c7a655cf93cd67e21559c4d01128617dd75813e1ac5c'

var a = s.split('');
// find PAIRS of characters
console.log(a.length);
// for (var i =1; i < a.length; i) {
// 	a[i]
// };
var group_size = 3;
var i = 0;
var groups = [];
while(i < a.length) {
	var g = a[i];
	while(g.length < group_size) {
		i++;
		g = g + a[i];
	}
	groups.push(g);
}
// console.log(groups);
var sorted = 
i = 0;
var m = [];
while(i < groups.length) {
	if(groups.lastIndexOf(groups[i]) !== i){
		console.log(groups.indexOf(groups[i]) + " | " + groups.lastIndexOf(groups[i]))
		console.log(" - - - - - - - - - - - - - -MATCH: "+groups[i] + " at index: "+i);
		m.push(groups[i])
	}
	i++;
}
var colors = ['blue', 'red', 'white'];
var j = 0;
m.map(function(find){
	var re = new RegExp(find, 'gm');
	var match = re.exec(s);
	// var o = s.match(new RegExp(needle, "g"));
	// console.log(match.index);
	// s.replace(re, ' '+find+' ');
	var rep = c.white.inverse(find)
	// console.log(rep);
	s = s.replace(re, rep)
	j++;
});

// console.log(m);
var found = m[2];
var regex = new RegExp(found, 'gm');

console.log(s)
console.log("MATCH m.length: "+ m.length);
console.log("groups.length: "+ groups.length);

// var re = /bar/g,
//     str = "foobarfoobar";
// while ((match = re.exec(str)) != null) {
//     alert("match found at " + match.index);
// }

// get 4 characters each side of the string
