var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoosePaginate = require('mongoose-paginate');

var DataPointSchema = new Schema({
	timestamp: { type: Date, default: Date.now },
	isManualEntry: Boolean,

	accelaration: {
		accelarationX: { type: Number },
		accelarationY: { type: Number },
		accelarationZ: { type: Number }
	},

	location: mongoose.Schema.Types.Point,

	motion: {
		speed: { type: Number },
		course: { type: Number }
	}
});
DataPointSchema.plugin(mongoosePaginate);

var DataPoint = module.exports = mongoose.model('DataPoint', DataPointSchema);

module.exports.saveDataPoint = function (newDataPoint, next) {
	newDataPoint.save(next);
};
