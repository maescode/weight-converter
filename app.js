function Converter(m) {
    this.m = m
}

Converter.prototype.convertTokilo = function() {
    return this.m / 1000
}

Converter.prototype.convertTogram = function() {
    return this.m * 1000;
}



// let conv = new Converter(234);
//console.log(conv.convertTokilo());