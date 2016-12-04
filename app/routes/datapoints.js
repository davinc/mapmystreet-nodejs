var DataPoint = require('../models/datapoint');

module.exports = {
	getPage: function (request, response) {
		DataPoint.paginate({}, {
			page: request.params.page,
			limit: request.params.count
		},
		function (error, datapoints) {
			if (error) {
				response.send(error);
			}
			response.json({
				resultCount: datapoints.length,
				resultPage: request.params.page,
				results: datapoints
			});
		});
	},


};