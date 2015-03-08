#pragma strict

var TorchPreview : GameObject;
var TorchBuild : GameObject;
var hit : RaycastHit;
var selectedBuildingToAddOn : GameObject;

var IsVisable : int;

var fwd = transform.TransformDirection (Vector3.forward);
var ray : Ray;

var hitpoint : Vector3;
function Start () {
 	
}

function Update () {
	 TorchPreview = GameObject.FindGameObjectWithTag("TorchPreview");
	 hitpoint = ray.direction * hit.distance + this.transform.position;
	 ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	 if (Physics.Raycast (ray, hit, 20)) {
	 		
			 if(hit.collider.gameObject.tag == "Building") {
			 	selectedBuildingToAddOn = hit.collider.gameObject;
			 	TorchPreview.transform.position = Vector3.Lerp(TorchPreview.transform.position, selectedBuildingToAddOn.transform.position + Vector3(0,1,0), 10 * Time.deltaTime);
			 	if(Input.GetKeyDown("e")) {
						Instantiate(TorchBuild, selectedBuildingToAddOn.transform.position + Vector3(0,1,0), Quaternion.identity);
					}
			 }
				
      }
}