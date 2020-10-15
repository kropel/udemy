"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedListCollection = /** @class */ (function () {
    function LinkedListCollection() {
        this.head = null;
    }
    LinkedListCollection.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            var counter = 0;
            if (this.head) {
                var tail = this.head;
                counter++;
                while (tail.next) {
                    counter++;
                    tail = tail.next;
                }
            }
            return counter;
        },
        enumerable: false,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedListCollection.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        console.log('\n');
        while (node) {
            console.log(node.data);
            node = node.next;
        }
        console.log('\n');
    };
    return LinkedListCollection;
}());
exports.LinkedListCollection = LinkedListCollection;
