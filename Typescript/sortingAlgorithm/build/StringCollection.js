"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
var StringCollection = /** @class */ (function () {
    function StringCollection(collection) {
        this.collection = collection;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.collection[leftIndex].toLowerCase() >
            this.collection[rightIndex].toLowerCase());
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charsArray = this.collection.split('');
        var leftHand = charsArray[leftIndex];
        charsArray[leftIndex] = charsArray[rightIndex];
        charsArray[rightIndex] = leftHand;
        this.collection = charsArray.join('');
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
