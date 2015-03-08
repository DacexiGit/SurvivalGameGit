#pragma strict

var LogPos1 : GameObject;
var LogPos2 : GameObject;
var LogPos3 : GameObject;
var Log : GameObject;

var TimeToSpawn : float;



function Start () {
	SpawnLogsAfterTime();
}

function Update () {

}

function SpawnLogsAfterTime () {
	yield WaitForSeconds(TimeToSpawn);
	Destroy (this.gameObject);
	Instantiate(Log, LogPos1.transform.position, LogPos1.transform.rotation);
	Instantiate(Log, LogPos2.transform.position, LogPos2.transform.rotation);
	Instantiate(Log, LogPos3.transform.position, LogPos3.transform.rotation);
}