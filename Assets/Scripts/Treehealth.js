#pragma strict

var TreeHealth : float;

var SpawnPos : GameObject;
var FallingTree : GameObject;


function Start () {

}

function OnTriggerEnter(c : Collider) {
	if(c.GetComponent.<Collider>().gameObject.tag == "Axe") {
		TreeHealth = TreeHealth - 10;
	}
	
	if(TreeHealth <= 0) {
		Destroy (this.gameObject);
		Instantiate(FallingTree, SpawnPos.transform.position, SpawnPos.transform.rotation);
	}
}