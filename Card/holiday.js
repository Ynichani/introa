var imageArray = [
    // list of url in quotes, separated by commas between the brackets 
    "http://static.boredpanda.com/blog/wp-content/uploads/2015/12/i-took-christmas-themed-dog-portraits-to-wish-you-happy-holidays__880.jpg", "https://mangomath.com/wp-content/uploads/2015/12/holidays.jpg", "http://192.163.240.212/~careerk8/wp-content/uploads/2014/01/holiday-season-1.jpg", "https://websitesdepot.com/wp-content/uploads/2015/12/happy-holidays-wishes-from-Websitesdepot.jpg", "https://thumb7.shutterstock.com/display_pic_with_logo/1997819/233954575/stock-vector-happy-holidays-vector-illustration-for-holiday-design-party-poster-greeting-card-banner-or-233954575.jpg"
   

];
var currentIndex = 0; 

function renderImage() {
    if (currentIndex < 0) { 
        currentIndex = imageArray.length - 1; 
    } else if (currentIndex >= imageArray.length) {
        currentIndex = 0;
    }
    $('#thePhoto').attr('src', imageArray[currentIndex]); 
}
renderImage();

$('#forwardBtn').on('click', function(){
    //this is what happens when it's clicked!
    currentIndex++;
    renderImage();
    
});
$('#backBtn').on('click', function(){
    currentIndex--;
    renderImage();
});


var name = prompt("What's your name?"); 
var outputString = "Happy Holdiays, " + name + "!"; 
$("h1").html(outputString)

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Cheerfulness');
        data.addRows([
          ['Yuv', 8],
          ['Daksha', 10],
          ['Ravi', 6],
          ['Sahib', 2],
        ]);

    var chartWidth = $(window).width()*0.5;        
    
        // Set chart options
        var options = {'title':'Cheerfulness of My Family',
                       'width':chartWidth,
                       'height':300, 
            'backgroundColor': 'grey',
            'colors': ['white']
            
           };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }