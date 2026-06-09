

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues').value;
        
        if(alphaValue == "null"){
            alert("please first select α");
        }
       else if (alphaValue === "0") {
            document.getElementById('res').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> = 0(1 , 2) = (0 , 0)</span>";
            drawCoordinates(0*grid_size,0*grid_size,"blue",3);
        } else if (alphaValue === "2") {
            document.getElementById('res').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> = 2(1 , 2) = (2 , 4)</span>";
            drawCoordinates(2*grid_size , -4*grid_size,"darkviolet",3);
        } else if (alphaValue === "-3.003") {
            document.getElementById('res').innerHTML = "<span style='color: darkorange;'>&alpha;.<i>x</i> = -3.003(1 , 2) = (-3.003 , -6.006)</span>";
            drawCoordinates(-3.003*grid_size , 6.006*grid_size,"darkorange",3);
        }

       
    }
    function handleSubmit2(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues2').value;
        
        if(alphaValue == "null"){
            alert("please first select α");
        }
        else if (alphaValue === "0") {
            document.getElementById('res2').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> = 0(0 , 0) = (0 , 0)</span>";
            drawCoordis(0*grid_size,0*grid_size,"blue",3);
        } else if (alphaValue === "6.94") {
            document.getElementById('res2').innerHTML = "<span style='color: darkorange;'>&alpha;.<i>x</i> = 6.94(0 , 0) = (0 , 0)</span>";
            drawCoordis(0*grid_size , 0*grid_size,"darkorange",2);
        } else if (alphaValue === "-7") {
            document.getElementById('res2').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> = -7(0 , 0) = (0 , 0)</span>";
            drawCoordis(0*grid_size , 0*grid_size,"darkviolet",1);
        }

       
    }
    function handleSubmit3(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues3').value;
        
        if(alphaValue == "null"){
            alert("please first select α, \u03B2.");
        }
        else if (alphaValue === "0") {
            document.getElementById('res3').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (0 , 0)</span>";
            drawCoords(0*gridsize,0*gridsize,"blue",3);
        } else if (alphaValue === "1") {
            document.getElementById('res3').innerHTML = "<span style='color: brown;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (-4 , -8)</span>";
            drawCoords(-4*gridsize , 8*gridsize,"brown",3);
        } else if (alphaValue === "2") {
            document.getElementById('res3').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (3.7 , 7.4)</span>";
            drawCoords(3.7*gridsize, -7.4*gridsize,"darkviolet",3);
        }

       
    }
    function handleSubmit4(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues4').value;
        
        if(alphaValue == "null"){
            alert("please first select α, \u03B2.");
        }
        else if (alphaValue === "0") {
            document.getElementById('res4').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (0 , 0)</span>";
            drawCoordns(0*gridsize,0*gridsize,"blue",3);
        } else if (alphaValue === "1") {
            document.getElementById('res4').innerHTML = "<span style='color: brown;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (13 , 6.4)</span>";
            drawCoordns(13*gridsize , -6.4*gridsize,"brown",3);
        } else if (alphaValue === "2") {
            document.getElementById('res4').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> + &beta;.<i>y</i> = (9.22 , 4.60)</span>";
            drawCoordns(9.22*gridsize, -4.60*gridsize,"darkviolet",3);
        }

       
    }

    function handleSubmit5(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues5').value;
        
        if(alphaValue == "null"){
            alert("please first select α, \u03B2, \u03B3.");
        }
        else if (alphaValue === "0") {
            document.getElementById('res5').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (0 , 0)</span>";
            drawCoordnts(0*grdsize,0*grdsize,"blue",3);
        } else if (alphaValue === "1") {
            document.getElementById('res5').innerHTML = "<span style='color: brown;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (4.92, 9.84)</span>";
            drawCoordnts(4.92*grdsize , -9.84*grdsize,"brown",3);
        } else if (alphaValue === "2") {
            document.getElementById('res5').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (-3.99 , -7.98)</span>";
            drawCoordnts(-3.99*grdsize, 7.98*grdsize,"darkviolet",3);
        }

       
    }

    function handleSubmit6(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const alphaValue = document.getElementById('alphavalues6').value;
        
        if(alphaValue == "null"){
            alert("please first select α, \u03B2, \u03B3.");
        }
        else if (alphaValue === "0") {
            document.getElementById('res6').innerHTML = "<span style='color: blue;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (0 , 0)</span>";
            drawCoordnes(0*grdsize,0*grdsize,"blue",3);
        } else if (alphaValue === "1") {
            document.getElementById('res6').innerHTML = "<span style='color: brown;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (-0.64, 0.12)</span>";
            drawCoordnes(-0.64*grdsize , -0.12*grdsize,"brown",3);
        } else if (alphaValue === "2") {
            document.getElementById('res6').innerHTML = "<span style='color: darkviolet;'>&alpha;.<i>x</i> + &beta;.<i>y</i> + &gamma;.<i>z</i> = (13.75 , 4.6)</span>";
            drawCoordnes(13.75*grdsize,  -4.6*grdsize,"darkviolet",3);
        }

       
    }



var grid_size = 12;
var x_axis_distance_grid_lines = 12;
var y_axis_distance_grid_lines = 5;
var x_axis_starting_point = { number: 1, suffix: '' };
var y_axis_starting_point = { number: 1, suffix: '' };

var canvas = document.getElementById("my-canvas");
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

function drawCoordinates(x,y,bg,pt){
    var pointSize = pt; // Change according to the size of the point.
   
    ctx.fillStyle = bg; 

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
    
}
drawCoordinates(1*grid_size,-2*grid_size,"red",4);
drawdashline();

function drawdashline(){
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([5, 10]);
    }
    if (ctx.mozDash !== undefined) {
      ctx.mozDash = [5, 10];
    }
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "rgb(151,151,151)";
    ctx.moveTo(-10*grid_size,20*grid_size);
    ctx.lineTo(10*grid_size,-20*grid_size);
    ctx.stroke();
}



var gridsize = 12;
var xaxis_distance_grid_lines = 12;
var yaxis_distance_grid_lines = 5;
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

function drawCoords(x,y,bg,ps){
    var pointSize = ps; // Change according to the size of the point.
   
    cntx.fillStyle = bg; 

    cntx.beginPath(); //Start path
    cntx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    cntx.fill(); // Close the path and fill.
}
drawCoords(1*grid_size,-2*grid_size,"red",3.5);
drawCoords(2*grid_size,-4*grid_size,"red",3.5);
drawdashline2();
function drawdashline2(){
    if (cntx.setLineDash !== undefined) {
      cntx.setLineDash([5, 10]);
    }
    if (cntx.mozDash !== undefined) {
      cntx.mozDash = [5, 10];
    }
    cntx.beginPath();
    cntx.lineWidth = "2";
    cntx.strokeStyle = "rgb(151,151,151)";
    cntx.moveTo(-10*grid_size,20*grid_size);
    cntx.lineTo(10*grid_size,-20*grid_size);
    cntx.stroke();
}

var grdsize = 12;
var x_dist_grid_lines = 12;
var y_dist_grid_lines = 5;
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


function drawCoordnts(x,y,bg,pt){
    var ptSize = pt; // Change according to the size of the point.
   
    cntext.fillStyle = bg; // Red color

    cntext.beginPath(); //Start path
    cntext.arc(x, y, ptSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    cntext.fill(); // Close the path and fill.
}
drawCoordnts(1*grdsize,-2*grdsize,"red",3.5);
drawCoordnts(2*grdsize,-4*grdsize,"red",3.5);
drawCoordnts(3*grdsize,-6*grdsize,"red",3.5);
drawdashline3();
function drawdashline3(){
    if (cntext.setLineDash !== undefined) {
      cntext.setLineDash([5, 10]);
    }
    if (cntext.mozDash !== undefined) {
      cntext.mozDash = [5, 10];
    }
    cntext.beginPath();
    cntext.lineWidth = "2";
    cntext.strokeStyle = "rgb(151,151,151)";
    cntext.moveTo(-10*grid_size,20*grid_size);
    cntext.lineTo(10*grid_size,-20*grid_size);
    cntext.stroke();
}



var cnva = document.getElementById("mycanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var contx = cnva.getContext("2d");


var numlines_x = Math.floor(canvaswidth/gridsize);
var numlines_y = Math.floor(canvasheight/gridsize);

// Draw grid lines along X-axis
for(var i=0; i<=numlines_x; i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == xaxis_distance_grid_lines) 
        contx.strokeStyle = "#000000";
    else
        contx.strokeStyle = "#dcdcdc";
    
    if(i == numlines_x) {
        contx.moveTo(0, grid_size*i);
        contx.lineTo(canvas_width, grid_size*i);
    }
    else {
        contx.moveTo(0, gridsize*i+0.5);
        contx.lineTo(canvaswidth, gridsize*i+0.5);
    }
    contx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=numlines_y; i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == yaxis_distance_grid_lines) 
        contx.strokeStyle = "#000000";
    else
        contx.strokeStyle = "#dcdcdc";

    if(i == numlines_y) {
        contx.moveTo(gridsize*i, 0);
        contx.lineTo(gridsize*i, window.canvasheight);
    }
    else {
        contx.moveTo(gridsize*i+0.5, 0);
        contx.lineTo(gridsize*i+0.5, canvasheight);
    }
    
    contx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
contx.translate(yaxis_distance_grid_lines*gridsize, xaxis_distance_grid_lines*gridsize);

// Ticks marks along the positive X-axis
for(i=1; i<(numlines_y - yaxis_distance_grid_lines); i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    contx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    contx.moveTo(gridsize*i+0.5, -3);
    contx.lineTo(gridsize*i+0.5, 3);
    contx.stroke();

    // Text value at that point
    contx.font = '9px Arial';
    contx.textAlign = 'start';
    contx.fillText(xaxis_starting_point.number*i + xaxis_starting_point.suffix, gridsize*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<yaxis_distance_grid_lines; i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    contx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    contx.moveTo(-gridsize*i+0.5, -3);
    contx.lineTo(-gridsize*i+0.5, 3);
    contx.stroke();

    // Text value at that point
    contx.font = '9px Arial';
    contx.textAlign = 'end';
    contx.fillText(-xaxis_starting_point.number*i + xaxis_starting_point.suffix, -gridsize*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( xaxis_distance_grid_lines); i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    contx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    contx.moveTo(-3, -grid_size*i+0.5);
    contx.lineTo(3, -grid_size*i+0.5);
    contx.stroke();

    // Text value at that point
    contx.font = '9px Arial';
    contx.textAlign = 'start';
    contx.fillText(-yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, gridsize*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(numlines_x -xaxis_distance_grid_lines); i++) {
    contx.beginPath();
    contx.lineWidth = 1;
    contx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    contx.moveTo(-3, gridsize*i+0.5);
    contx.lineTo(3, gridsize*i+0.5);
    contx.stroke();

    // Text value at that point
    contx.font = '9px Arial';
    contx.textAlign = 'start';
    contx.fillText(yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, -gridsize*i+3);
    
}

function drawCoordis(x,y,bg,ps){
    var pointSize = ps; // Change according to the size of the point.
   
    contx.fillStyle = bg; 

    contx.beginPath(); //Start path
    contx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    contx.fill(); // Close the path and fill.
}
drawCoordis(0*grid_size,0*grid_size,"red",4);




var cnv = document.getElementById("abcanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var ctex = cnv.getContext("2d");


// Draw grid lines along X-axis
for(var i=0; i<=numlines_x; i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == xaxis_distance_grid_lines) 
        ctex.strokeStyle = "#000000";
    else
        ctex.strokeStyle = "#dcdcdc";
    
    if(i == numlines_x) {
        ctex.moveTo(0, grid_size*i);
        ctex.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctex.moveTo(0, gridsize*i+0.5);
        ctex.lineTo(canvaswidth, gridsize*i+0.5);
    }
    ctex.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=numlines_y; i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == yaxis_distance_grid_lines) 
        ctex.strokeStyle = "#000000";
    else
        ctex.strokeStyle = "#dcdcdc";

    if(i == numlines_y) {
        ctex.moveTo(gridsize*i, 0);
        ctex.lineTo(gridsize*i, window.canvasheight);
    }
    else {
        ctex.moveTo(gridsize*i+0.5, 0);
        ctex.lineTo(gridsize*i+0.5, canvasheight);
    }
    
    ctex.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctex.translate(yaxis_distance_grid_lines*gridsize, xaxis_distance_grid_lines*gridsize);

// Ticks marks along the positive X-axis
for(i=1; i<(numlines_y - yaxis_distance_grid_lines); i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    ctex.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctex.moveTo(gridsize*i+0.5, -3);
    ctex.lineTo(gridsize*i+0.5, 3);
    ctex.stroke();

    // Text value at that point
    ctex.font = '9px Arial';
    ctex.textAlign = 'start';
    ctex.fillText(xaxis_starting_point.number*i + xaxis_starting_point.suffix, gridsize*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<yaxis_distance_grid_lines; i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    ctex.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctex.moveTo(-gridsize*i+0.5, -3);
    ctex.lineTo(-gridsize*i+0.5, 3);
    ctex.stroke();

    // Text value at that point
    ctex.font = '9px Arial';
    ctex.textAlign = 'end';
    ctex.fillText(-xaxis_starting_point.number*i + xaxis_starting_point.suffix, -gridsize*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( xaxis_distance_grid_lines); i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    ctex.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctex.moveTo(-3, -grid_size*i+0.5);
    ctex.lineTo(3, -grid_size*i+0.5);
    ctex.stroke();

    // Text value at that point
    ctex.font = '9px Arial';
    ctex.textAlign = 'start';
    ctex.fillText(-yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, gridsize*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(numlines_x -xaxis_distance_grid_lines); i++) {
    ctex.beginPath();
    ctex.lineWidth = 1;
    ctex.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctex.moveTo(-3, gridsize*i+0.5);
    ctex.lineTo(3, gridsize*i+0.5);
    ctex.stroke();

    // Text value at that point
    ctex.font = '9px Arial';
    ctex.textAlign = 'start';
    ctex.fillText(yaxis_starting_point.number*i + yaxis_starting_point.suffix, 8, -gridsize*i+3);
    
}

function drawCoordns(x,y,bg,ps){
    var pointSize = ps; // Change according to the size of the point.
   
    ctex.fillStyle = bg; 

    ctex.beginPath(); //Start path
    ctex.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctex.fill(); // Close the path and fill.
}
drawCoordns(1*grid_size,-2*grid_size,"red",3.5);
drawCoordns(6*grid_size,-3*grid_size,"red",3.5);

drawdashline4();
function drawdashline4(){
    if (ctex.setLineDash !== undefined) {
      ctex.setLineDash([5, 10]);
    }
    if (ctex.mozDash !== undefined) {
      ctex.mozDash = [5, 10];
    }
    ctex.beginPath();
    ctex.lineWidth = "2";
    ctex.strokeStyle = "rgb(151,151,151)";
    ctex.moveTo(-10*grid_size,20*grid_size);
    ctex.lineTo(10*grid_size,-20*grid_size);

    ctex.moveTo(-60*grid_size,30*grid_size);
    ctex.lineTo(60*grid_size,-30*grid_size);
    ctex.stroke();
}


var cavs = document.getElementById("abgcanvas");
//canvas.setAttribute("style", "position: absolute; x:0; y:0;");
//document.body.appendChild(canvas);

var cntet = cavs.getContext("2d");


var numx = Math.floor(cvs_width/grdsize);
var numy = Math.floor(cvs_height/grdsize);

// Draw grid lines along X-axis
for(var i=0; i<=numx; i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_dist_grid_lines) 
        cntet.strokeStyle = "#000000";
    else
        cntet.strokeStyle = "#e9e9e9";
    
    if(i == numx) {
        cntet.moveTo(0, grdsize*i);
        cntet.lineTo(cvs_width, grdsize*i);
    }
    else {
        cntet.moveTo(0, grdsize*i+0.5);
        cntet.lineTo(cvs_height, grdsize*i+0.5);
    }
    cntet.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=numy; i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_dist_grid_lines) 
        cntet.strokeStyle = "#000000";
    else
        cntet.strokeStyle = "#e9e9e9";

    if(i == numy) {
        cntet.moveTo(grdsize*i, 0);
        cntet.lineTo(grdsize*i, window.cvs_height);
    }
    else {
        cntet.moveTo(grdsize*i+0.5, 0);
        cntet.lineTo(grdsize*i+0.5, cvs_height);
    }
    
    cntet.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
cntet.translate(y_dist_grid_lines*grdsize, x_dist_grid_lines*grdsize);

// Ticks marks along the positive X-axis
for(i=1; i<(numy - y_dist_grid_lines); i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    cntet.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntet.moveTo(grdsize*i+0.5, -3);
    cntet.lineTo(grdsize*i+0.5, 3);
    cntet.stroke();

    // Text value at that point
    cntet.font = '9px Arial';
    cntet.textAlign = 'start';
    cntet.fillText(x_start_point.number*i + x_start_point.suffix, grdsize*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_dist_grid_lines; i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    cntet.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntet.moveTo(-grdsize*i+0.5, -3);
    cntet.lineTo(-grdsize*i+0.5, 3);
    cntet.stroke();

    // Text value at that point
    cntet.font = '9px Arial';
    cntet.textAlign = 'end';
    cntet.fillText(-x_start_point.number*i + x_start_point.suffix, -grdsize*i+3, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(x_dist_grid_lines); i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    cntet.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntet.moveTo(-3, -grdsize*i+0.5);
    cntet.lineTo(3, -grdsize*i+0.5);
    cntet.stroke();

    // Text value at that point
    cntet.font = '9px Arial';
    cntet.textAlign = 'start';
    cntet.fillText(y_start_point.number*i + y_start_point.suffix, 8, -grdsize*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<(numx - x_dist_grid_lines); i++) {
    cntet.beginPath();
    cntet.lineWidth = 1;
    cntet.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    cntet.moveTo(-3, grdsize*i+0.5);
    cntet.lineTo(3, grdsize*i+0.5);
    cntet.stroke();

    // Text value at that point
    cntet.font = '9px Arial';
    cntet.textAlign = 'start';
    cntet.fillText(-y_start_point.number*i + y_start_point.suffix, 8, grdsize*i+3);
}


function drawCoordnes(x,y,bg,pt){
    var ptSize = pt; // Change according to the size of the point.
   
    cntet.fillStyle = bg; // Red color

    cntet.beginPath(); //Start path
    cntet.arc(x, y, ptSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    cntet.fill(); // Close the path and fill.
}
drawCoordnes(1*grdsize,-2*grdsize,"red",3.5);
drawCoordnes(5*grdsize,-3*grdsize,"red",3.5);
drawCoordnes(6*grdsize,-2*grdsize,"red",3.5);
drawdashline5();
function drawdashline5(){
    if (cntet.setLineDash !== undefined) {
      cntet.setLineDash([5, 10]);
    }
    if (cntet.mozDash !== undefined) {
      cntet.mozDash = [5, 10];
    }
    cntet.beginPath();
    cntet.lineWidth = "2";
    cntet.strokeStyle = "rgb(151,151,151)";
    cntet.moveTo(-10*grid_size,20*grid_size);
    cntet.lineTo(10*grid_size,-20*grid_size);

    cntet.moveTo(-50*grid_size,30*grid_size);
    cntet.lineTo(50*grid_size,-30*grid_size);

    cntet.moveTo(-60*grid_size,20*grid_size);
    cntet.lineTo(60*grid_size,-20*grid_size);
    cntet.stroke();
}
