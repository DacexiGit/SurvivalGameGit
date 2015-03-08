#pragma strict

var Base : GameObject;
var BaseBuild : GameObject;
var hit : RaycastHit;
var angleOfHit : float;
var selectedBuildingToAddOn : GameObject;

var angle : float;
var cross : Vector3;

var IsVisable : int;

var Side : Vector3;

var fwd = transform.TransformDirection (Vector3.forward);
var ray : Ray;

var hitpoint : Vector3;
function Start () {
 	
}

function Update () {
	 angle = Vector3.Angle(hit.normal,Vector3.forward);
	 cross = Vector3.Cross(Vector3.forward,hit.normal);
	 if(Mathf.Approximately(angle, 0)) {Side = Vector3.forward;}// back
 	 if(Mathf.Approximately(angle, 180)) {Side = Vector3.back;}// front
 	 if(Mathf.Approximately(angle, 90)) {Side = Vector3.left;}// left
 	 if(cross.y > 0) {Side = Vector3.right;}// right
 	 

	 Base = GameObject.FindGameObjectWithTag("BasePreview");
	 angleOfHit = Vector3.Angle(hit.normal,transform.forward);
	 hitpoint = ray.direction * hit.distance + this.transform.position;
	 ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	 if (Physics.Raycast (ray, hit, 20)) {
			 if(hit.collider.gameObject.tag != "Building") {
					Base.transform.position = Vector3.Lerp(Base.transform.position, hitpoint + Vector3(0,1.6,0), 5 * Time.deltaTime);
					if(Input.GetKeyDown("e")) {
						Instantiate(BaseBuild, hitpoint + Vector3(0,1.6,0), Base.transform.rotation);
					}
				}
				
			 if(hit.collider.gameObject.tag == "Building") {
			 	selectedBuildingToAddOn = hit.collider.gameObject;
			 	Base.transform.position = Vector3.Lerp(Base.transform.position, selectedBuildingToAddOn.transform.position + Side * 3.2, 10 * Time.deltaTime);
			 	if(Input.GetKeyDown("e")) {
						Instantiate(BaseBuild, selectedBuildingToAddOn.transform.position + Side * 3.2, Base.transform.rotation);
					}
			 }
				
      }
}