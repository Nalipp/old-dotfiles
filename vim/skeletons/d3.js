
// bar graph css

  <script>
    var data = [20, 12, 56, 34, 66, 34, 22, 1, 9, 44, 22, 90, 43, 78, 22];

    var x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 420]);    
    
    var div = d3.select(".chart")
        .selectAll("div")
          .data(data)

        div.enter().append("div")
          .transition().duration(2200)
          .style("width", function(d) { return x(d) + "px"; } )
          .text(function(d) {return d} );

        div.exit().remove();
  </script>


// bar graph svg


  // <svg class="chart" width="420" height="120">
  //   <g transform="translate(0,0)">
  //     <rect width="40" height="19"></rect>
  //     <text x="37" y="9.5" dy=".35em">4</text>
  //   </g>
  // </svg>
  
  <script>
    var data = [4, 8, 15, 16, 23, 42];

    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0, " + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  </script>


  // loading data from tsv(tab seperated value) into graph
  // requires to run a server
  // http://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local
  // npm install -g http-server
  // http-server -c-1 (from the file with an .html extension you want to run
  
  // data.tsv 
    // name	value
    // Locke	9
    // Reyes	8
    // Ford	15
    // Jarrah	16
    // Shephard	23
    // Kwon	42

  <script>
    var width = 420,
        barHeight = 20;

    var x = d3.scaleLinear()
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width);

    d3.tsv("data.tsv", type, function(error, data) {
      x.domain([0, d3.max(data, function(d) { return d.value; })]);

      chart.attr("height", barHeight * data.length);

      var bar = chart.selectAll("g")
          .data(data)
        .enter().append("g")
          .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

      bar.append("rect")
          .attr("width", function(d) { return x(d.value); })
          .attr("height", barHeight - 1);

      bar.append("text")
          .attr("x", function(d) { return x(d.value) - 3; })
          .attr("y", barHeight / 2)
          .attr("dy", ".35em")
          .text(function(d) { return d.value; });
    });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }
  </script>

