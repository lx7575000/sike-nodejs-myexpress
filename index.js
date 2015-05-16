module.exports = myexpress;
function myexpress(){
	return function(req, res, next){
		res.statusCode = 404;
		res.end();
	};
};