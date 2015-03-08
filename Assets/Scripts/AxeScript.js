#pragma strict

var DoChop : int;

function Start () {
	GetComponent.<Animation>().Stop();
	DoChop = 1;
}

function Update () {
	Chop();
}

function Chop () {
	if (DoChop == 1) {
		if (Input.GetButton ("Fire1")) {
		    GetComponent.<Animation>().CrossFade("Chop");
		    DoChop = 0;
		    yield WaitForSeconds(0.4);
		    DoChop = 1;
		}
	}
}