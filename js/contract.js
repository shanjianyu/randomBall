

"use strict";

var BallItem = function(date,number,author) {
	this.date = date;
	this.number = number;
	this.author = author;
};

BallItem.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var RandomBall = function () {
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (text) {
            return new BallItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

RandomBall.prototype = {
    init: function () {
        // todo
    },

    save: function (date, number,author) {

        date = date.trim();
        number = number.trim();
        author = author.trim();

        var from = Blockchain.transaction.from;
   

        ballItem = new BallItem(date,number.author);

        this.repo.put(author, number);
    },

    get: function (author) {
        author = author.trim();
        if ( author === "" ) {
            throw new Error("empty author")
        }
        return this.repo.get(author);
    }
};
module.exports = RandomBall;