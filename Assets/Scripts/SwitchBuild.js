#pragma strict

var BuildBaseScript : GameObject;
var BuildWallScript : GameObject;
var BuildTorchScript : GameObject;
var BuildRoofScript : GameObject;

var PreviewBaseScript : GameObject;
var PreviewWallScript : GameObject;
var PreviewTorchScript : GameObject;
var PreviewRoofScript : GameObject;


var buildmode : int = 0;

function Start () {
	BuildWallScript = GameObject.FindGameObjectWithTag("WallScript");
	BuildBaseScript = GameObject.FindGameObjectWithTag("BaseScript");
	BuildTorchScript = GameObject.FindGameObjectWithTag("TorchScript");
	BuildRoofScript = GameObject.FindGameObjectWithTag("RoofScript");
	
	PreviewWallScript = GameObject.FindGameObjectWithTag("WallPreview");
	PreviewBaseScript = GameObject.FindGameObjectWithTag("BasePreview");
	PreviewTorchScript = GameObject.FindGameObjectWithTag("TorchPreview");
	PreviewRoofScript = GameObject.FindGameObjectWithTag("RoofPreview");
	
	PreviewWallScript.SetActive(false);
    PreviewBaseScript.SetActive(false);
    PreviewTorchScript.SetActive(false);
    PreviewRoofScript.SetActive(false);
            
    BuildWallScript.SetActive(false);
    BuildBaseScript.SetActive(false);
    BuildTorchScript.SetActive(false);
    BuildRoofScript.SetActive(false);
}

function Update () {
	if(PreviewBaseScript.SetActive == true) {
		
	}
	if(Input.GetKeyDown("q")) {
	 switch (buildmode)
    {
    case 0:
        BuildWallScript.SetActive(true);
        BuildBaseScript.SetActive(false);
        BuildTorchScript.SetActive(false);
        PreviewRoofScript.SetActive(false);
        
        PreviewWallScript.SetActive(true);
        PreviewBaseScript.SetActive(false);
		PreviewTorchScript.SetActive(false);
		BuildRoofScript.SetActive(false);
        buildmode = 1;
    break;
    case 1:
    	PreviewWallScript.SetActive(false);
        PreviewBaseScript.SetActive(true);
        BuildTorchScript.SetActive(false);
        PreviewRoofScript.SetActive(false);
        
        BuildWallScript.SetActive(false);
        BuildBaseScript.SetActive(true);
		PreviewTorchScript.SetActive(false);
		BuildRoofScript.SetActive(false);
        buildmode = 2;
    break;
    case 2:
    	PreviewWallScript.SetActive(false);
        PreviewBaseScript.SetActive(false);
        BuildTorchScript.SetActive(true);
        PreviewRoofScript.SetActive(false);
        
        BuildWallScript.SetActive(false);
        BuildBaseScript.SetActive(false);
		PreviewTorchScript.SetActive(true);
		BuildRoofScript.SetActive(false);
        buildmode = 3;
    break;
    case 3:
    	PreviewWallScript.SetActive(false);
        PreviewBaseScript.SetActive(false);
        PreviewTorchScript.SetActive(false);
        PreviewRoofScript.SetActive(true);
        
        BuildWallScript.SetActive(false);
        BuildBaseScript.SetActive(false);
		BuildTorchScript.SetActive(false);
		BuildRoofScript.SetActive(true);
        buildmode = 4;
     break;
     case 4:
    	PreviewWallScript.SetActive(false);
        PreviewBaseScript.SetActive(false);
        BuildTorchScript.SetActive(false);
        PreviewRoofScript.SetActive(false);
        
        BuildWallScript.SetActive(false);
        BuildBaseScript.SetActive(false);
		PreviewTorchScript.SetActive(false);
		BuildRoofScript.SetActive(false);
        buildmode = 0;
    break;
    }
  }
}