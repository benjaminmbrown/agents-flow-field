var Flowfield = function(width, height) {

    this.resolution = 10;
    this.cols = width / resolution;
    this.rows = height / resolution;

    this.create2DArray = function(n) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array[i] = 0;
        }
    }
    this.field = this.create2DArray(this.cols);

    this.init = function() {

    }
    this.lookup = function(lookup) {

    }

   var drawVector = function(v, x, y, scayl) {

    }
    this.update = function() {

    }


    this.display = function() {

    }
}
