const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extensión: String,
    número_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    email: String
}, {
    versionKey: false,
    timestamps: true,//fecha de creacion y fecha de update
    toObject: { virtuals: true },
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            // ret.id = ret._id;
            delete ret.id;
        }
    }
});

module.exports = model('inmueble', inmuebleSchema);