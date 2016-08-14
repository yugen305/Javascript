//
// GLOBAL VARIABLES
//

var posX = 0;
var posY = 0;
var oldX = posX;
var oldY = posY;
var facing = "N";
var oldfacing = facing;
var obstacle1X = 2;
var obstacle1Y = 2;
var obstacle2X = 32;
var obstacle2Y = 87;


//
// WRITE POSITION FUNCTION
//

function write_pos()
{
	document.getElementById("pos").innerHTML = "<b>Rover Position: X=" + posX + " Y=" + posY + " Facing " + facing + "</b>";
}


//
// COLLISION FUNCTION
//

function collision_control()
{
	if (posX == obstacle1X && posY == obstacle1Y)
	{
		alert("Collision at [" + obstacle1X + "," + obstacle1Y + "]. Rover returns to [" + oldX + "," + oldY + "].");
		posX = oldX;
		posY = oldY;
		facing = oldfacing;
		write_pos();
	}
	else if (posX == obstacle2X && posY == obstacle2Y) 
	{
		alert("Collision at [" + obstacle2X + "," + obstacle2Y + "]. Rover returns to [" + oldX + "," + oldY + "].");
		posX = oldX;
		posY = oldY;
		facing = oldfacing;
		write_pos();
	}
	else
	{
		write_pos();
	}
}


//
// MOVEMENT FUNCTIONS
//

function position_control()
{
	if (posY > 99)
	{
		posY = 0;
	}
	if (posY < 0)
	{
		posY = 99;
	}
	if (posX > 99)
	{
		posX = 0;
	}
	if (posX < 0)
	{
		posX = 99;
	}
}

function move_forward()
{
	switch(facing)
	{
		case "N":
			posY += 1;
			position_control();
			break;
		case "S":
			posY -= 1;
			position_control();
			break;
		case "E":
			posX += 1;
			position_control();
			break;
		case "W":
			posX -= 1;
			position_control();
			break;
	}
}

function move_backward()
{
	switch(facing)
	{
		case "N":
			posY -= 1;
			position_control();
			break;
		case "S":
			posY += 1;
			position_control();
			break;
		case "E":
			posX -= 1;
			position_control();
			break;
		case "W":
			posX += 1;
			position_control();
			break;
	}
}

function move_left()
{
	switch(facing)
	{
		case "N":
			facing = "W";
			break;
		case "S":
			facing = "E";
			break;
		case "E":
			facing = "N";
			break;
		case "W":
			facing = "S";
			break;
	}
}

function move_right()
{
	switch(facing)
	{
		case "N":
			facing = "E";
			break;
		case "S":
			facing = "W";
			break;
		case "E":
			facing = "S";
			break;
		case "W":
			facing = "N";
			break;
	}
}

//
// RESET FUNCTION
//

function reset()
{
	posX = 0;
	posY = 0;
	facing = "N"
	alert("Rover initial position: X=" + posX + "  Y=" + posY + "  Facing " + facing);
	document.getElementById("instr").value = "";
	write_pos();
}



////////////////
//
// MAIN FUNCTION
//
////////////////

function move_rover()
{

	var commands = document.getElementById("instr").value;

	oldX = posX;
	oldY = posY;
	oldfacing = facing;

	for (i=0;i<commands.length;i++)
	{
		switch(commands[i])
		{
			case "f":
	  			move_forward();
	  			break;
			case "b":
	 			move_backward(); 
	  			break;
	  		case "l":
	 			move_left(); 
	  			break;
			case "r":
	 			move_right(); 
	  			break;
			default:
	  			alert("Syntax error!\nCommand -" + commands[i] + "- unkwnown.");
		}
	}

	collision_control();
}
