#pragma strict
import UnityEngine.UI;

var Health : int = 100;
var Hunger : int = 100;
var Water : int = 100;

var HealthSlider : Slider;
var HungerSlider : Slider;
var WaterSlider : Slider;

function Start () {

}

function Update () {
	HungerSlider.value = Hunger;
	WaterSlider.value = Water;
	HealthSlider.value = Health;
}