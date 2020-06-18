1) add class 'itom-preloader-overflow-hidden' to BODY tag<br/>
2) include style.css in head
3) include index.js before body closing tag
4) init iTomPreloader:<br/><br/>
iTomPreloader.check({<br/>
    timeout: 3000,<br/>
    backgroundColor: '#15648c',<br/>
    dotColor: '#FFFFFF',<br/>
    alwaysShow: false,<br/>
    images: [...]<br/>
});<br/><br/>
	
Options:<br/>
timeout: milliseconds (default = 3000);<br/>
backgroundColor: any background color (default = '#FFFFFF');<br/>
dotColor: any dots color (default = '#111111');<br/>
images: you can set array of images to preload and cache them,<br/>relative path from your public root (default = []);<br/>
alwaysShow: show preloader every time;<br/><br/>

Codepen editor page:<br/>
https://codepen.io/itom-needforjamaica/pen/jjojMB<br/><br/>

Codepen fullwidth page:<br/>
https://codepen.io/itom-needforjamaica/full/jjojMB