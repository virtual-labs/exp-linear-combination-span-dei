function showgraphs2(){
        document.getElementById("showgraphs2").style.display = '';
    }
    function showgraphsn(){
        document.getElementById("showgraphsn").style.display = '';
    }

var grid_size = 12;
var x_axis_distance_grid_lines = 12;
var y_axis_distance_grid_lines = 5;
var x_axis_starting_point = { number: 1, suffix: '' };
var y_axis_starting_point = { number: 1, suffix: '' };

var canvas = document.getElementById("oecanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_width/grid_size);
var num_lines_y = Math.floor(canvas_height/grid_size);

// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#dcdcdc";
    
    if(i == num_lines_x) {
        ctx.moveTo(0, grid_size*i);
        ctx.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctx.moveTo(0, grid_size*i+0.5);
        ctx.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#dcdcdc";

    if(i == num_lines_y) {
        ctx.moveTo(grid_size*i, 0);
        ctx.lineTo(grid_size*i, window.canvas_height);
    }
    else {
        ctx.moveTo(grid_size*i+0.5, 0);
        ctx.lineTo(grid_size*i+0.5, canvas_height);
    }
    
    ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(num_lines_x -x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, grid_size*i+0.5);
    ctx.lineTo(3, grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
    
}

function drawCoordinates(x,y,bg){
    var pointSize = 3; // Change according to the size of the point.
   
    ctx.fillStyle = bg; 

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
}

cd1=Math.floor(Math.random() * 10);
cd2=Math.floor(Math.random() * 10);
cdd1=-50*cd1
cdd2=-50*cd2
cdd3=50*cd1
cdd4=50*cd2
function point1(){
    drawCoordinates(cd1*grid_size,cd2*grid_size,'green');
    ctx.beginPath();
    ctx.moveTo(cdd1*grid_size,cdd2*grid_size);
    ctx.lineTo(cdd3*grid_size,cdd4*grid_size);
    ctx.strokeStyle="red";
    ctx.stroke();
    document.getElementById('oespan').innerHTML="<i>S</i> = { (" + Number(cd1) + " , " + -Number(cd2) + ") }";

    document.getElementById("note1").innerHTML="Note: Please reload the page, to consider another <i>S</i>."
}

/*------------------------------First Graph End---------------------------------------------------------------*/

/*------------------------------Second Graph ---------------------------------------------------------------*/




var canvas2 = document.getElementById("twocanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var ctx2 = canvas2.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_width/grid_size);
var num_lines_y = Math.floor(canvas_height/grid_size);

// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctx2.strokeStyle = "#000000";
    else
        ctx2.strokeStyle = "#dcdcdc";
    
    if(i == num_lines_x) {
        ctx2.moveTo(0, grid_size*i);
        ctx2.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctx2.moveTo(0, grid_size*i+0.5);
        ctx2.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctx2.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx2.strokeStyle = "#000000";
    else
        ctx2.strokeStyle = "#dcdcdc";

    if(i == num_lines_y) {
        ctx2.moveTo(grid_size*i, 0);
        ctx2.lineTo(grid_size*i, window.canvas_height);
    }
    else {
        ctx2.moveTo(grid_size*i+0.5, 0);
        ctx2.lineTo(grid_size*i+0.5, canvas_height);
    }
    
    ctx2.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx2.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx2.moveTo(grid_size*i+0.5, -3);
    ctx2.lineTo(grid_size*i+0.5, 3);
    ctx2.stroke();

    // Text value at that point
    ctx2.font = '9px Arial';
    ctx2.textAlign = 'start';
    ctx2.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx2.moveTo(-grid_size*i+0.5, -3);
    ctx2.lineTo(-grid_size*i+0.5, 3);
    ctx2.stroke();

    // Text value at that point
    ctx2.font = '9px Arial';
    ctx2.textAlign = 'end';
    ctx2.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( x_axis_distance_grid_lines); i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx2.moveTo(-3, -grid_size*i+0.5);
    ctx2.lineTo(3, -grid_size*i+0.5);
    ctx2.stroke();

    // Text value at that point
    ctx2.font = '9px Arial';
    ctx2.textAlign = 'start';
    ctx2.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(num_lines_x -x_axis_distance_grid_lines); i++) {
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx2.moveTo(-3, grid_size*i+0.5);
    ctx2.lineTo(3, grid_size*i+0.5);
    ctx2.stroke();

    // Text value at that point
    ctx2.font = '9px Arial';
    ctx2.textAlign = 'start';
    ctx2.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
    
}

function drawCrds(x,y,bg){
    var pointSize = 3; // Change according to the size of the point.
   
    ctx2.fillStyle = bg; 

    ctx2.beginPath(); //Start path
    ctx2.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx2.fill(); // Close the path and fill.
}
/*------------------------------Second Graph End---------------------------------------------------------------*/




/*------------------------------Third Graph---------------------------------------------------------------*/


var ncanvas = document.getElementById("multicanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var ctxn = ncanvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_width/grid_size);
var num_lines_y = Math.floor(canvas_height/grid_size);

// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctxn.strokeStyle = "#000000";
    else
        ctxn.strokeStyle = "#dcdcdc";
    
    if(i == num_lines_x) {
        ctxn.moveTo(0, grid_size*i);
        ctxn.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctxn.moveTo(0, grid_size*i+0.5);
        ctxn.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctxn.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctxn.strokeStyle = "#000000";
    else
        ctxn.strokeStyle = "#dcdcdc";

    if(i == num_lines_y) {
        ctxn.moveTo(grid_size*i, 0);
        ctxn.lineTo(grid_size*i, window.canvas_height);
    }
    else {
        ctxn.moveTo(grid_size*i+0.5, 0);
        ctxn.lineTo(grid_size*i+0.5, canvas_height);
    }
    
    ctxn.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctxn.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    ctxn.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxn.moveTo(grid_size*i+0.5, -3);
    ctxn.lineTo(grid_size*i+0.5, 3);
    ctxn.stroke();

    // Text value at that point
    ctxn.font = '9px Arial';
    ctxn.textAlign = 'start';
    ctxn.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    ctxn.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxn.moveTo(-grid_size*i+0.5, -3);
    ctxn.lineTo(-grid_size*i+0.5, 3);
    ctxn.stroke();

    // Text value at that point
    ctxn.font = '9px Arial';
    ctxn.textAlign = 'end';
    ctxn.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( x_axis_distance_grid_lines); i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    ctxn.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxn.moveTo(-3, -grid_size*i+0.5);
    ctxn.lineTo(3, -grid_size*i+0.5);
    ctxn.stroke();

    // Text value at that point
    ctxn.font = '9px Arial';
    ctxn.textAlign = 'start';
    ctxn.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(num_lines_x -x_axis_distance_grid_lines); i++) {
    ctxn.beginPath();
    ctxn.lineWidth = 1;
    ctxn.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxn.moveTo(-3, grid_size*i+0.5);
    ctxn.lineTo(3, grid_size*i+0.5);
    ctxn.stroke();

    // Text value at that point
    ctxn.font = '9px Arial';
    ctxn.textAlign = 'start';
    ctxn.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
    
}

function drwCrds(x,y,bg){
    var pointSize = 3; // Change according to the size of the point.
   
    ctxn.fillStyle = bg; 

    ctxn.beginPath(); //Start path
    ctxn.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctxn.fill(); // Close the path and fill.
}

/*------------------------------Third Graph End---------------------------------------------------------------*/



var gridsize = 10;
var xaxis_distance_grid_lines =7;
var yaxis_distance_grid_lines = 4;
var xaxis_starting_point = { number: 1, suffix: '' };
var yaxis_starting_point = { number: 1, suffix: '' };

var canva = document.getElementById("canvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var cntx = canva.getContext("2d");

var canvaswidth = canva.width;
var canvasheight = canva.height;

var numlines_x = Math.floor(canvaswidth/gridsize);
var numlines_y = Math.floor(canvasheight/gridsize);


//this is in second graphs first sub graph
// Draw grid lines along X-axis 

for(var i=0; i<=numlines_x; i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == xaxis_distance_grid_lines) 
        cntx.strokeStyle = "#000000";
    else
        cntx.strokeStyle = "#dcdcdc";
    
    if(i == numlines_x) {
        cntx.moveTo(0, grid_size*i);
        cntx.lineTo(canvas_width, grid_size*i);
    }
    else {
        cntx.moveTo(0, gridsize*i+0.5);
        cntx.lineTo(canvaswidth, gridsize*i+0.5);
    }
    cntx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=numlines_y; i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == yaxis_distance_grid_lines) 
        cntx.strokeStyle = "#000000";
    else
        cntx.strokeStyle = "#dcdcdc";

    if(i == numlines_y) {
        cntx.moveTo(gridsize*i, 0);
        cntx.lineTo(gridsize*i, window.canvasheight);
    }
    else {
        cntx.moveTo(gridsize*i+0.5, 0);
        cntx.lineTo(gridsize*i+0.5, canvasheight);
    }
    
    cntx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
cntx.translate(yaxis_distance_grid_lines*gridsize, xaxis_distance_grid_lines*gridsize);

// Ticks marks along the positive X-axis
for(i=1; i<(numlines_y - yaxis_distance_grid_lines); i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    cntx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntx.moveTo(gridsize*i+0.5, -3);
    cntx.lineTo(gridsize*i+0.5, 3);
    cntx.stroke();

    // Text value at that point
    cntx.font = '9px Arial';
    cntx.textAlign = 'start';
    cntx.fillText(xaxis_starting_point.number*i + xaxis_starting_point.suffix, gridsize*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<yaxis_distance_grid_lines; i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    cntx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntx.moveTo(-gridsize*i+0.5, -3);
    cntx.lineTo(-gridsize*i+0.5, 3);
    cntx.stroke();

    // Text value at that point
    cntx.font = '9px Arial';
    cntx.textAlign = 'end';
    cntx.fillText(-xaxis_starting_point.number*i + xaxis_starting_point.suffix, -gridsize*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( xaxis_distance_grid_lines); i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    cntx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntx.moveTo(-3, -grid_size*i+0.5);
    cntx.lineTo(3, -grid_size*i+0.5);
    cntx.stroke();

    // Text value at that point
    cntx.font = '9px Arial';
    cntx.textAlign = 'start';
    cntx.fillText(-yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, gridsize*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(numlines_x -xaxis_distance_grid_lines); i++) {
    cntx.beginPath();
    cntx.lineWidth = 1;
    cntx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntx.moveTo(-3, gridsize*i+0.5);
    cntx.lineTo(3, gridsize*i+0.5);
    cntx.stroke();

    // Text value at that point
    cntx.font = '9px Arial';
    cntx.textAlign = 'start';
    cntx.fillText(yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, -gridsize*i+3);
    
}

function drawCoords(x,y,bg){
    var pointSize = 3; // Change according to the size of the point.
   
    cntx.fillStyle = bg; 

    cntx.beginPath(); //Start path
    cntx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    cntx.fill(); // Close the path and fill.
}
document.getElementById("btn1").disabled=true;
document.getElementById("btn2").disabled=true;
c1=Math.floor(Math.random() * (8-1)+1);
c2=Math.floor(Math.random() * (8-1)+1);
cc1=0.2*c1
cc2=0.2*c2
c3=Math.floor(Math.random() * (5-1)+1);
c4=Math.floor(Math.random() * (5-1)+1);

c5=cc1*c3
c6=cc2*c3
c7=-50*c1
c8=-50*c2
c9=50*c1
c10=50*c2
function pnt1(){
    drawCoords(c1*gridsize,-c2*gridsize,'green');
    cntx.beginPath();
    cntx.moveTo(c9*gridsize,-c10*gridsize);
    cntx.lineTo(c7*gridsize,-c8*gridsize);

    //cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    cntx.strokeStyle = "red";
    cntx.stroke();

    drawCrds(c1*grid_size,-c2*grid_size,'green');
    ctx2.beginPath();
    ctx2.moveTo(c9*grid_size,-c10*grid_size);
    ctx2.lineTo(c7*grid_size,-c8*grid_size);

    cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    ctx2.strokeStyle = "red";
    ctx2.stroke();

    drawCoordnt(c1*gridsize,-c2*gridsize,'green');
    context.beginPath();
    context.moveTo(c9*gridsize,-c10*gridsize);
    context.lineTo(c7*gridsize,-c8*gridsize);

    //cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    context.strokeStyle = "red";
    context.stroke();
    document.getElementById("btn1").disabled=false;
    document.getElementById("btn2").disabled=false;
    document.getElementById("note2").innerHTML="Note: Please reload the page, to consider another <i>x</i>."
}


function pnt2(){
    //drawCoords(c1*gridsize,-c2*gridsize,'green');
    //cntx.beginPath();
    //cntx.moveTo(c9*gridsize,-c10*gridsize);
    //cntx.lineTo(c7*gridsize,-c8*gridsize);

    //cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    //cntx.strokeStyle = "red";
    //cntx.stroke();
    drawCoords(c5*gridsize,-c6*gridsize,'blue');
    document.getElementById('span2line').innerHTML=("<i>L(S)</i> = line");
    
}
function fill(){
    //drawCoordnt(c1*gridsize,-c2*gridsize,'green');
    //context.beginPath();
    //context.moveTo(c9*gridsize,-c10*gridsize);
    //context.lineTo(c7*gridsize,-c8*gridsize);

    ////cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    //context.strokeStyle = "red";
    //context.stroke();
    context.fillStyle = "rgba(0, 100, 200, 0.1)";
    context.fillRect(-5*gridsize,-12*gridsize,canvas.width, canvas.height);
}
c11=Math.floor(Math.random() * (8-1)+1);
c12=Math.floor(Math.random() * (8-1)+1);
function pnt3(){
    
    drawCoordnt(c11*gridsize,c12*gridsize,'indigo');
    fill();
    document.getElementById('span2R2').innerHTML=("<i>L(S) = R</i><sup>2</sup>");
}









 
var grdsize = 10;
var x_dist_grid_lines = 7;
var y_dist_grid_lines = 4;
var x_start_point = { number: 1, suffix: '' };
var y_start_point = { number: 1, suffix: '' };

var cvs = document.getElementById("mecanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var cntext = cvs.getContext("2d");

var cvs_width = cvs.width;
var cvs_height = cvs.height;

var numx = Math.floor(cvs_width/grdsize);
var numy = Math.floor(cvs_height/grdsize);

// Draw grid lines along X-axis
for(var i=0; i<=numx; i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_dist_grid_lines) 
        cntext.strokeStyle = "#000000";
    else
        cntext.strokeStyle = "#e9e9e9";
    
    if(i == numx) {
        cntext.moveTo(0, grdsize*i);
        cntext.lineTo(cvs_width, grdsize*i);
    }
    else {
        cntext.moveTo(0, grdsize*i+0.5);
        cntext.lineTo(cvs_height, grdsize*i+0.5);
    }
    cntext.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=numy; i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_dist_grid_lines) 
        cntext.strokeStyle = "#000000";
    else
        cntext.strokeStyle = "#e9e9e9";

    if(i == numy) {
        cntext.moveTo(grdsize*i, 0);
        cntext.lineTo(grdsize*i, window.cvs_height);
    }
    else {
        cntext.moveTo(grdsize*i+0.5, 0);
        cntext.lineTo(grdsize*i+0.5, cvs_height);
    }
    
    cntext.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
cntext.translate(y_dist_grid_lines*grdsize, x_dist_grid_lines*grdsize);

// Ticks marks along the positive X-axis
for(i=1; i<(numy - y_dist_grid_lines); i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    cntext.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntext.moveTo(grdsize*i+0.5, -3);
    cntext.lineTo(grdsize*i+0.5, 3);
    cntext.stroke();

    // Text value at that point
    cntext.font = '9px Arial';
    cntext.textAlign = 'start';
    cntext.fillText(x_start_point.number*i + x_start_point.suffix, grdsize*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_dist_grid_lines; i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    cntext.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntext.moveTo(-grdsize*i+0.5, -3);
    cntext.lineTo(-grdsize*i+0.5, 3);
    cntext.stroke();

    // Text value at that point
    cntext.font = '9px Arial';
    cntext.textAlign = 'end';
    cntext.fillText(-x_start_point.number*i + x_start_point.suffix, -grdsize*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(x_dist_grid_lines); i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    cntext.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntext.moveTo(-3, -grdsize*i+0.5);
    cntext.lineTo(3, -grdsize*i+0.5);
    cntext.stroke();

    // Text value at that point
    cntext.font = '9px Arial';
    cntext.textAlign = 'start';
    cntext.fillText(y_start_point.number*i + y_start_point.suffix, 8, -grdsize*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<(numx - x_dist_grid_lines); i++) {
    cntext.beginPath();
    cntext.lineWidth = 1;
    cntext.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntext.moveTo(-3, grdsize*i+0.5);
    cntext.lineTo(3, grdsize*i+0.5);
    cntext.stroke();

    // Text value at that point
    cntext.font = '9px Arial';
    cntext.textAlign = 'start';
    cntext.fillText(-y_start_point.number*i + y_start_point.suffix, 8, grdsize*i+3);
}


function drawCoordnts(x,y,bg){
    var ptSize = 3; // Change according to the size of the point.
   
    cntext.fillStyle = bg; // Red color

    cntext.beginPath(); //Start path
    cntext.arc(x, y, ptSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    cntext.fill(); // Close the path and fill.
}
document.getElementById("btn3").disabled=true;
document.getElementById("btn4").disabled=true;
cdn1=Math.floor(Math.random() * (6-1)+1);
cdn2=Math.floor(Math.random() * (6-1)+1);

function pt1(){
    cdn7=-50*cdn1
    cdn8=-50*cdn2
    cdn9=50*cdn1
    cdn10=50*cdn2
    cntext.beginPath();
    cntext.moveTo(0*grdsize,0*grdsize);
    cntext.lineTo(cdn9*grdsize,-cdn10*grdsize);
    cntext.moveTo(0*grid_size,0*grid_size);
    cntext.lineTo(cdn7*grdsize,-cdn8*grdsize);

    //cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    cntext.strokeStyle = "red";
    cntext.stroke();
    drawCoordnts(cdn1*grdsize,-cdn2*grdsize,'green');


    ctxn.beginPath();
    ctxn.moveTo(0*grid_size,0*grid_size);
    ctxn.lineTo(cdn9*grdsize,-cdn10*grdsize);
    ctxn.moveTo(0*grid_size,0*grid_size);
    ctxn.lineTo(cdn7*grid_size,-cdn8*grid_size);

    ////cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    ctxn.strokeStyle = "red";
    ctxn.stroke();
    drwCrds(cdn1*grid_size,-cdn2*grid_size,'green');
    ctxt.beginPath();
    ctxt.moveTo(0*grdsize,0*grdsize);
    ctxt.lineTo(cdn9*grdsize,-cdn10*grdsize);
    ctxt.moveTo(0*grid_size,0*grid_size);
    ctxt.lineTo(cdn7*grdsize,-cdn8*grdsize);

    //cntx.strokeStyle = "rgba(0, 100, 200, 0.3)";
    ctxt.strokeStyle = "red";
    ctxt.stroke();
    drawCoordt(cdn1*grdsize,-cdn2*grdsize,'green');
    document.getElementById("btn3").disabled=false;
    document.getElementById("btn4").disabled=false;

    document.getElementById("note3").innerHTML="Note: Please reload the page, to consider another <i>x</i>."
    
    
}



function pt2(){

    cdn3=Math.floor(Math.random() * (30-1)+1);
    cdn4=Math.floor(Math.random() * (30-1)+1);
    ccdn1=0.1*cdn1
    ccdn2=0.1*cdn2
    cdn5=ccdn1*cdn3
    cdn6=ccdn2*cdn3
    
    drawCoordnts(cdn5*grdsize,-cdn6*grdsize,'blue');
    document.getElementById('spannline').innerHTML=("<i>L(S)</i> = line");
    

}



// Declare globally
var m2 = 0;
var c2 = 0;
var pt3ClickCount = 0;

function pt3() {
    var min = -10;
    var max = 10;
    var threshold = 0.5; // how far from line counts as "not on line"
    var crd5, crd6;

    pt3ClickCount++;

    if (pt3ClickCount === 1) {
        // First click: NOT on the line
        do {
            crd5 = Math.floor(Math.random() * (max - min + 1) + min);
            crd6 = Math.floor(Math.random() * (max - min + 1) + min);
        } while (Math.abs(crd6 - (m2 * crd5 + c2)) < threshold);

    } else if (pt3ClickCount === 2) {
        // Second click: ON the line
        crd5 = Math.floor(Math.random() * (max - min + 1) + min);
        crd6 = Math.round(m2 * crd5 + c2); // force onto the line

    } else {
        // Later clicks: random anywhere
        crd5 = Math.floor(Math.random() * (max - min + 1) + min);
        crd6 = Math.floor(Math.random() * (max - min + 1) + min);
    }

    drawCoordt(crd5 * grd_size, crd6 * grd_size, 'indigo');
    document.getElementById('spannRn').innerHTML = "<i>L(S) = R</i><sup>2</sup>";
    fillarea();
}

 
var grd_size = 10;
var x_grid_lines = 7;
var y_grid_lines = 4;
var x_start = { number: 1, suffix: '' };
var y_start = { number: 1, suffix: '' };

var cnvs = document.getElementById("tecanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var context = cnvs.getContext("2d");

var cnvs_width = cnvs.width;
var cnvs_height = cnvs.height;

var nux = Math.floor(cnvs_width/grd_size);
var nuy = Math.floor(cnvs_height/grd_size);
//this is second graphs second sub graph
// Draw grid lines along X-axis
for(var i=0; i<=nux; i++) {
    context.beginPath();
    context.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_grid_lines) 
        context.strokeStyle = "#000000";
    else
        context.strokeStyle = "#e9e9e9";
    
    if(i == nux) {
        context.moveTo(0, grd_size*i);
        context.lineTo(cnvs_width, grd_size*i);
    }
    else {
        context.moveTo(0, grd_size*i+0.5);
        context.lineTo(cnvs_height, grd_size*i+0.5);
    }
    context.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=nuy; i++) {
    context.beginPath();
    context.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_grid_lines) 
        context.strokeStyle = "#000000";
    else
        context.strokeStyle = "#e9e9e9";

    if(i == nuy) {
        context.moveTo(grd_size*i, 0);
        context.lineTo(grd_size*i, window.cnvs_height);
    }
    else { 
        context.moveTo(grd_size*i+0.5, 0);
        context.lineTo(grd_size*i+0.5, cnvs_height);
    }
    
    context.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
context.translate(y_grid_lines*grd_size, x_grid_lines*grd_size);

// Ticks marks along the positive X-axis
for(i=1; i<(nuy - y_grid_lines); i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    context.moveTo(grd_size*i+0.5, -3);
    context.lineTo(grd_size*i+0.5, 3);
    context.stroke();

    // Text value at that point
    context.font = '9px Arial';
    context.textAlign = 'start';
    context.fillText(x_start.number*i + x_start.suffix, grd_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_grid_lines; i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    context.moveTo(-grd_size*i+0.5, -3);
    context.lineTo(-grd_size*i+0.5, 3);
    context.stroke();

    // Text value at that point
    context.font = '9px Arial';
    context.textAlign = 'end';
    context.fillText(-x_start.number*i + x_start.suffix, -grd_size*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(x_grid_lines); i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    context.moveTo(-3, -grd_size*i+0.5);
    context.lineTo(3, -grd_size*i+0.5);
    context.stroke();

    // Text value at that point
    context.font = '9px Arial';
    context.textAlign = 'start';
    context.fillText(y_start.number*i + y_start.suffix, 8, -grd_size*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<(nux - x_grid_lines); i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    context.moveTo(-3, grd_size*i+0.5);
    context.lineTo(3, grd_size*i+0.5);
    context.stroke();

    // Text value at that point
    context.font = '9px Arial';
    context.textAlign = 'start';
    context.fillText(-y_start.number*i + y_start.suffix, 8, grd_size*i+3);
}

//this is second graphs second sub graph funct
function drawCoordnt(x,y,bg){
    var ptSize = 3; // Change according to the size of the point.
   
    context.fillStyle = bg; // Red color

    context.beginPath(); //Start path
    context.arc(x, y, ptSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    context.fill(); // Close the path and fill.
}

var grdsze = 10;
var x_distance_grid_lines = 7;
var y_distance_grid_lines =4;
var x_start_pt = { number: 1, suffix: '' };
var y_start_pt = { number: 1, suffix: '' };

var canv = document.getElementById("mtecanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var ctxt = canv.getContext("2d");

var canv_width = canv.width;
var canv_height = canv.height;

var nx = Math.floor(canv_width/grdsze);
var ny = Math.floor(canv_height/grdsze);





// Draw grid lines along X-axis
for(var i=0; i<=nx; i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_distance_grid_lines) 
        ctxt.strokeStyle = "#000000";
    else
        ctxt.strokeStyle = "#e9e9e9";
    
    if(i == nx) {
        ctxt.moveTo(0, grd_size*i);
        ctxt.lineTo(canv_width, grdsze*i);
    }
    else {
        ctxt.moveTo(0, grdsze*i+0.5);
        ctxt.lineTo(canv_height, grdsze*i+0.5);
    }
    ctxt.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=ny; i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_distance_grid_lines) 
        ctxt.strokeStyle = "#000000";
    else
        ctxt.strokeStyle = "#e9e9e9";

    if(i == ny) {
        ctxt.moveTo(grdsze*i, 0);
        ctxt.lineTo(grdsze*i, window.canv_height);
    }
    else { 
        ctxt.moveTo(grdsze*i+0.5, 0);
        ctxt.lineTo(grdsze*i+0.5, canv_height);
    }
    
    ctxt.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctxt.translate(y_distance_grid_lines*grdsze, x_distance_grid_lines*grdsze);

// Ticks marks along the positive X-axis
for(i=1; i<(ny - y_distance_grid_lines); i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    ctxt.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxt.moveTo(grdsze*i+0.5, -3);
    ctxt.lineTo(grdsze*i+0.5, 3);
    ctxt.stroke();

    // Text value at that point
    ctxt.font = '9px Arial';
    ctxt.textAlign = 'start';
    ctxt.fillText(x_start_pt.number*i + x_start_pt.suffix, grdsze*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_distance_grid_lines; i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    ctxt.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxt.moveTo(-grdsze*i+0.5, -3);
    ctxt.lineTo(-grdsze*i+0.5, 3);
    ctxt.stroke();

    // Text value at that point
    ctxt.font = '9px Arial';
    ctxt.textAlign = 'end';
    ctxt.fillText(-x_start_pt.number*i + x_start_pt.suffix, -grdsze*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(x_distance_grid_lines); i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    ctxt.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxt.moveTo(-3, -grdsze*i+0.5);
    ctxt.lineTo(3, -grdsze*i+0.5);
    ctxt.stroke();

    // Text value at that point
    ctxt.font = '9px Arial';
    ctxt.textAlign = 'start';
    ctxt.fillText(y_start_pt.number*i + y_start_pt.suffix, 8, -grdsze*i+3);
}

//imp needed
// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<(nx - x_distance_grid_lines); i++) {
    ctxt.beginPath();
    ctxt.lineWidth = 1;
    ctxt.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctxt.moveTo(-3, grdsze*i+0.5);
    ctxt.lineTo(3, grdsze*i+0.5);
    ctxt.stroke();

    // Text value at that point
    ctxt.font = '9px Arial';
    ctxt.textAlign = 'start';
    ctxt.fillText(-y_start_pt.number*i + y_start_pt.suffix, 8, grdsze*i+3);
}

//imp needed
function drawCoordt(x,y,bg){
    var ptSize = 3; // Change according to the size of the point.
   
    ctxt.fillStyle = bg; // Red color

    ctxt.beginPath(); //Start path
    ctxt.arc(x, y, ptSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctxt.fill(); // Close the path and fill.
}
