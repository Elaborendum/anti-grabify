browser.webRequest.onBeforeRequest.addListener(function(details) { 
	browser.tabs.update({
 url: "blocked.html"
});
	return {cancel: true};

},
{urls: ["https://grabify.link/*", "http://grabify.link/*",  "https://bmwforum.co/*", "https://bmwforum.co/*", "https://leancoding.co/*", "https://spottyfly.com/*", "https://stopify.co/*", "https://yoütu.be/*", "https://discörd.com/*", "https://minecräft.com/*", "https://freegiftcards.co/*", "https://disçordapp.com/*", "https://xda-developers.us/*", "https://quickmessage.us/*", "https://fortnight.space/*", "https://fortnitechat.site/*", "https://youshouldclick.us/*", "https://joinmy.site/*", "https://crabrave.pw/*", "https://grabify.link/*", "https://xn--yotu-1ra.be/*", "https://xn--disordapp-s3a.com/*", "https://xn--minecrft-5za.com/*", "https://xn--discrd-zxa.com/*", "https://iplogger.org/*", "https://2no.co/*", "https://iplogger.com/*", "https://iplogger.ru/*", "https://yip.su/*","https://bmwforum.co/*", "https://bmwforum.co/*", "https://curiouscat.club/*", "https://catsnthings.com/*", "https://catsnthings.fun/*", "https://www.ps3cfw.com/*", "http://www.ps3cfw.com/*","http://blasze.tk/", "https://blasze.tk/", "http://api.grabify.link/*", "https://api.grabify.link/*", "https://iplis.org/*","https://02ip.ru/*", "https://iplogger.co/*","https://iplogger.info/*", "https://ipgraber.ru/*", "https://lovebird.guru/*", "https://trulove.guru/*", "https://dateing.club/*", "https://otherhalf.life/*", "https://shrekis.life/*", "https://datasig.io/*", "https://datauth.io/*", "https://headshot.monster/*", "https://gaming-at-my.best/*", "https://programing.monster/*", "https://screenshare.host/*", "https://gamingfun.me/*", "https://ipgrabber.ru/*", "https://iplist.ru/*", "https://ezstat.ru/*"]},
["blocking"]);
