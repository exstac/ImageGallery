// Init Google Analytics
var _gaq = _gaq || [];

if (window.location.host === 'bild.vestlife.se') {
    _gaq.push(['_setAccount', 'UA-22429777-1']);
    _gaq.push(['_trackPageview']);
    
    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}

function trackEvent(category, action, label, value) {
    var data = ['_trackEvent', category, action];

    if (label) {
        data.push(label);
    }
    if (value) {
        data.push(value);
    }

    _gaq.push(data);
}