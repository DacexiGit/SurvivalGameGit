var Health : float;
var damage : int;

function Start () {

}

function OnTriggerEnter(c : Collider) {
	if(c.GetComponent.<Collider>().gameObject.tag == "Axe") {
		Health = Health - damage;
	}
	
	if(Health <= 0) {
		Destroy (this.gameObject);
	}
}