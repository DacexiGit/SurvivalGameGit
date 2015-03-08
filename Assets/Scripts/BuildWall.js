#pragma strict

import UnityEngine.Quaternion;

var WallPreview : GameObject;
var WallBuild : GameObject;
var hit : RaycastHit;
var angleOfHit : float;
var selectedBuildingToAddOn : GameObject;
var WallToChange : GameObject;

var angle : float;
var cross : Vector3;

var IsVisable : int;

var Side : Vector3;

var fwd = transform.TransformDirection (Vector3.forward);
var ray : Ray;
var RotateAngle : float;

var quaRot : Quaternion;

var hitpoint : Vector3;
function Start () {
 	
}

function Update () {
	 angle = Vector3.Angle(hit.normal,Vector3.forward);
	 cross = Vector3.Cross(Vector3.forward,hit.normal);
	 if(Mathf.Approximately(angle, 0)) {Side = Vector3.forward; RotateAngle = 0;}// back
 	 if(Mathf.Approximately(angle, 180)) {Side = Vector3.back; RotateAngle = 180;}// front
 	 if(Mathf.Approximately(angle, 90)) {Side = Vector3.left; RotateAngle = 90;}// left
 	 if(cross.y > 0) {Side = Vector3.right; RotateAngle = 270;}// right
 	 quaRot = Quaternion.AngleAxis(RotateAngle, Vector3.up);
 	 
	 WallToChange = GameObject.FindGameObjectWithTag("Wall");
	 WallPreview = GameObject.FindGameObjectWithTag("WallPreview");
	 angleOfHit = Vector3.Angle(hit.normal,transform.forward);
	 hitpoint = ray.direction * hit.distance + this.transform.position;
	 ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	 if (Physics.Raycast (ray, hit, 20)) {
			 
				
			 if(hit.collider.gameObject.tag == "Building") {
			 	selectedBuildingToAddOn = hit.collider.gameObject;
			 	WallPreview.transform.rotation = quaRot;
			 	WallPreview.transform.position = Vector3.Lerp(WallPreview.transform.position, selectedBuildingToAddOn.transform.position + Side * 1.5 + Vector3(0,2,0), 10 * Time.deltaTime);
			 	if(Input.GetKeyDown("e")) {
						Instantiate(WallBuild, selectedBuildingToAddOn.transform.position + Side * 1.55 + Vector3(0,2,0), quaRot);
						WallToChange.transform.rotation.y = RotateAngle;
					}
			 }
				
      }
}
