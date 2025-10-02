/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"AE45EF0C-7D16-4493-849B-81BA50B14878"}
 */
function onOrt_plus(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(true);
	foundset.newRecord();
	foundset.erfass_dat = new Date();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"615BEB01-1FF3-4C33-BDAB-3D94F8737DDF"}
 */
function onOrt_minus(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"CD3FA11F-C007-49EF-8D22-A6C104C6FAD6"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	return
}
//

///**

// * TODO generated, please specify type and doc for the params

// * @param event

// *

// * @properties={typeid:24,uuid:"5C98B3B7-0328-4637-9249-072462A7AC17"}

// */

//function onFocusLost(event) {

//	// TODO Auto-generated method stub

//	databaseManager.saveData();

//	application.updateUI();

//

//}

