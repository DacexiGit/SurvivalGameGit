#pragma strict

import UnityEngine.UI;

var InventoryOpen : int;

var BtnToMove : GameObject;

var Slot1 : GameObject;
var Slot2 : GameObject;
var Slot3 : GameObject;
var Slot4 : GameObject;
var Slot5 : GameObject;
var Slot6 : GameObject;

var ItemIn1 : GameObject;
var ItemIn2 : GameObject;
var ItemIn3 : GameObject;
var ItemIn4 : GameObject;
var ItemIn5 : GameObject;
var ItemIn6 : GameObject;

var PickUpText : Text;

var Log : GameObject;
var LogInvBtn : GameObject;

var InvBtnType : GameObject;

var ItemPickedUp : GameObject;

var Inventory : GameObject;

var PlayerController : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;

function Start () {
	PickUpText.enabled = false;
	Inventory.SetActive(false);
	Screen.lockCursor = true;
	InventoryOpen = 1;
	yield WaitForSeconds(0.05);
	InventoryOpen = 0;
	PlayerController = GetComponent(UnityStandardAssets.Characters.FirstPerson.FirstPersonController);
	ItemIn1 = Log;
	Instantiate(LogInvBtn, Slot1.transform.position, Slot1.transform.rotation);
	yield WaitForSeconds(0.05);
	BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
	yield WaitForSeconds(0.05);
	BtnToMove.transform.parent = Inventory.transform;
}

function Update () {
	
	if(Input.GetKeyDown("tab")) {
		switch (InventoryOpen) {
			case 0:
				Inventory.SetActive(false);
				Debug.Log("Inventory Closed");
				InventoryOpen = 1;
				Screen.lockCursor = true;
				PlayerController.enabled = true;
			break;
			case 1:
				Inventory.SetActive(true);
				Screen.lockCursor = false;
				PlayerController.enabled = false;
				BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
				BtnToMove.transform.parent = Inventory.transform;
				Debug.Log("Inventory Opened");
				BtnToMove.transform.parent = Inventory.transform;
				InventoryOpen = 0;
			break;
		}
	}
}

function OnTriggerStay(c : Collider) {
	if(c.GetComponent.<Collider>().gameObject.tag == "Item") {
		//now we know it's an item!
		PickUpText.enabled = true;
		
		if(c.GetComponent.<Collider>().gameObject.name == "Log(Clone)") {
			InvBtnType = LogInvBtn;
			ItemPickedUp = Log;
		}
		
			if(Input.GetKeyDown("e")) {
				
				if(ItemIn1 == null) {
					ItemIn1 = ItemPickedUp;
					Destroy (c.GetComponent.<Collider>().gameObject);
					Instantiate(InvBtnType, Slot1.transform.position, Slot1.transform.rotation);
					BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
					BtnToMove.transform.parent = Inventory.transform;
				} else if(ItemIn2 == null) {
					ItemIn2 = ItemPickedUp;
					Destroy (c.GetComponent.<Collider>().gameObject);
					Instantiate(InvBtnType, Slot2.transform.position, Slot2.transform.rotation);
					BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
					BtnToMove.transform.parent = Inventory.transform;
				} else if(ItemIn3 == null) {
					ItemIn3 = ItemPickedUp;
					Destroy (c.GetComponent.<Collider>().gameObject);
					Instantiate(InvBtnType, Slot3.transform.position, Slot3.transform.rotation);
					BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
					BtnToMove.transform.parent = Inventory.transform;
				} else if(ItemIn3 != null) {
						
							if(ItemIn4 == null) {
								ItemIn4 = ItemPickedUp;
								Destroy (c.GetComponent.<Collider>().gameObject);
								Instantiate(InvBtnType, Slot4.transform.position, Slot4.transform.rotation);
								BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
								BtnToMove.transform.parent = Inventory.transform;
							} else if(ItemIn5 == null) {
								ItemIn5 = ItemPickedUp;
								Destroy (c.GetComponent.<Collider>().gameObject);
								Instantiate(InvBtnType, Slot5.transform.position, Slot5.transform.rotation);
								BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
								BtnToMove.transform.parent = Inventory.transform;
							} else if(ItemIn6 == null) {
								ItemIn6 = ItemPickedUp;
								Destroy (c.GetComponent.<Collider>().gameObject);
								Instantiate(InvBtnType, Slot6.transform.position, Slot6.transform.rotation);
								BtnToMove = GameObject.FindGameObjectWithTag ("InvBtnToMove");
								BtnToMove.transform.parent = Inventory.transform;
								
							}
					}
			}
		}
	else {
	PickUpText.enabled = false;
	}
}