var fs = require('fs');

var content = fs.readFileSync('text.txt','utf-8');
console.log(content);

fs.appendFile('text.txt','\nIt\'s my string ',function(err) {
		if(err) throw error;
		var data = fs.readFileSync('text.txt', 'utf-8');
		console.log('Файл дополнен:\n', data);
});
