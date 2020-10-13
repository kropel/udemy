"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    };
    NumberCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = leftHand;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
