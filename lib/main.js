try {
    const data = require("self").data;
const pp = function(o) { return JSON.stringify(o,null,'  ')};
const nw = require('nativewindow');	


// test menu item that shows a toast

nw.addMenu({
	label: 'Toast?',
	callback: function() {
		nw.showToast({ message: 'Toasting!' });
		// console.log('toasting...');
	}
});

// test context menu
var context = {
	matches: function(el) {
		return true;
	}
}

nw.addContextMenu({
	name: 'Anywhere?',
	context: context,
	callback: function() {
		console.log('clicked!')
	}
});


// test context menu
var context2 = nw.textContext;

nw.addContextMenu({
	name: 'Text Context',
	context: context2,
	callback: function() {
		console.log('clicked!')
	}
});

} catch (e) {
   console.log('Error: '+e);
}