/**
 * @properties={typeid:35,uuid:"11CDB4D2-663E-48B3-90B6-640B49E0BFA3",variableType:-4}
 */
var v_datensaetze = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"B36BCCEE-5393-40D2-BD15-380ED09BC0CC"}
 */
function OnShow_Laden (firstShow, event) {
	
	var fsTabelle = databaseManager.getFoundSet("bib_testdaten","verlag");
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
	
	scopes.svyNavigationUX.addGlobalSearchListener(OnSearch);

		
	elements.btn_first.enabled;
	elements.btn_back.enabled;
	elements.btn_vor.enabled;
	elements.btn_last.enabled;
	
}

//   DATENSATZZEIGER CODE

/**
 * @properties={typeid:24,uuid:"3C804E6F-89A5-4DA7-9FD9-63553FD9B709"}
 */
function GO_back() {
	var _recno =controller.getSelectedIndex();
	controller.setSelectedIndex(_recno -1 )
	var _reccount = 1 
	if (_reccount == _recno-1)
	{	
		elements.btn_first.enabled = false;
		elements.btn_back.enabled = false;
		elements.btn_vor.enabled = true;
		elements.btn_last.enabled = true;
	}
	else
	{	
		elements.btn_first.enabled = true;
		elements.btn_back.enabled = true;
		elements.btn_vor.enabled = true;
		elements.btn_last.enabled = true;
	}
}

/**
 * @properties={typeid:24,uuid:"E71A7B24-665E-4826-9B3C-05B44960450A"}
 */
function GO_next() {
	var _recno =controller.getSelectedIndex();
	controller.setSelectedIndex(_recno +1 );
	//var _reccount = foundset.getSize()
	var _reccount = v_datensaetze;
	if ( _reccount > _recno+1)
	{	
		elements.btn_first.enabled = true;
		elements.btn_back.enabled = true;
		elements.btn_vor.enabled = true;
		elements.btn_last.enabled = true;
	}
	else
	{	
		elements.btn_first.enabled = true;
		elements.btn_back.enabled = true;
		elements.btn_vor.enabled = false;
		elements.btn_last.enabled = false;
	}
		
}

/**
 * @properties={typeid:24,uuid:"BAAD6193-9A47-46DF-8754-877C50A3B42F"}
 */
function GO_first() {
	controller.setSelectedIndex(1);
	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
}

/**
 * @properties={typeid:24,uuid:"1704D6DE-E895-4B36-91CF-C9F970E2DFD9"}
 */
function GO_last() {

	var _nRecCount = databaseManager.getFoundSetCount(foundset);
	foundset.getRecord(_nRecCount);
	controller.setSelectedIndex(_nRecCount);
	
	elements.btn_first.enabled = true;
	elements.btn_back.enabled = true;
	elements.btn_vor.enabled = false;
	elements.btn_last.enabled = false;
}

////  BUTTON CODE

//

//

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"DDFFEBCD-136E-4A53-9883-008E400626B6"}
 */
function NeuerDatensatz(event) {

elements.btn_neuerDatensatz.visible = true;
	databaseManager.setAutoSave(true);
//	elements.btn_Delete.visible = false;
//	elements.btn_Editieren.visible = false;
//	elements.btn_Canceln.visible = true;
elements.btn_Speichern.visible = true;
//	elements.btn_Speichern_weiter.visible = true;
//	elements.btn_Alle.visible = false;
//	forms.frm_titel.elements.btn_kuenstler_hinzu.visible = true;
//	forms.frm_titel.elements.btn_orte_hinzu.visible = true;
//	forms.frm_titel.elements.btn_cover.visible = true;
//	
foundset.newRecord();
//	forms.frm_titel.flag = 1;
//	var lc_bildname = forms.frm_titel.titel_nr;
//	lc_bildname = "BIB-BILD-0" + lc_bildname + ".JPG";
//	forms.frm_titel.bild_datei = lc_bildname;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9527C074-7B4E-4C69-A900-A64ED5C275CC"}
 */
function onActionSave(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
//	databaseManager.setAutoSave(false);
	elements.btn_neuerDatensatz.visible = true;
//	elements.btn_Delete.visible = true;
//	elements.btn_Editieren.visible = true;
//	elements.btn_Canceln.visible = false;
	elements.btn_Speichern.visible = false;
//	elements.btn_Speichern_weiter.visible = false;
//	elements.btn_Alle.visible = true;
//	forms.frm_titel.elements.btn_kuenstler_hinzu.visible = false;
//	forms.frm_titel.elements.btn_orte_hinzu.visible = false;
//	forms.frm_titel.elements.btn_cover.visible = false;
//	forms.frm_titel.elements.btn_alte_werte.visible = false;
//	forms.frm_titel.elements.btn_titel.visible = false;
//	forms.frm_titel.elements.btn_stichworte.visible = false;
//	forms.frm_titel.elements.btn_anmerkungen.visible = false;
//	forms.frm_titel.elements.btn_verlag.visible = false;
//	forms.frm_titel.elements.btn_jahr.visible = false;
//	forms.frm_titel.elements.btn_isbn.visible = false;
//	forms.frm_titel.elements.btn_einband.visible = false;
//	forms.frm_titel.elements.btn_lgruppe.visible = false;
//	forms.frm_titel.elements.btn_wert.visible = false;
	plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatzänderung wurde gesichert');
}

///**

// * @properties={typeid:24,uuid:"F8892DCA-BBEE-42B1-AF33-D93843E95897"}

// */

/**
 * @properties={typeid:24,uuid:"006EED68-83B8-46EA-9CB0-C80611092963"}
 */
function Datensatz_loeschen() {

var theButton = plugins.dialogs.showQuestionDialog('Loesch-Info','Wollen Sie wirklich den Datensatz löschen? ','JA','NEIN'); 
//- ACHTUNG: um einen Titel zu löschen, müssen Sie vorher die Titel-Ort-  und Titel-Autor-Beziehungen löschen !

if (theButton == 'JA'){

foundset.deleteRecord();

databaseManager.setAutoSave(true);

//	elements.btn_neuerDatensatz.visible = true;

//	elements.btn_Delete.visible = true;

//	elements.btn_Editieren.visible = true;

//	elements.btn_Canceln.visible = false;

//	elements.btn_Speichern.visible = false;

//	elements.btn_Speichern_weiter.visible = false;

//	elements.btn_Alle.visible = true;

plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatz wurde gelöscht')

}

else {

return;

}

}

/**
 * @properties={typeid:24,uuid:"07916962-C8D8-44EC-93F3-21998F63EE41"}
 */
function Start_Editing() {

// Soll: 2 Button anzeigen (Cancel und Sichern), andere Ausblenden 

databaseManager.setAutoSave(true);

elements.btn_neuerDatensatz.visible = false;

//	elements.btn_Delete.visible = false;

//	elements.btn_Editieren.visible = false;

//	elements.btn_Canceln.visible = true;

elements.btn_Speichern.visible = true;

//	elements.btn_Speichern_weiter.visible = true;

//	elements.btn_Alle.visible = false;

//	forms.frm_titel.elements.btn_kuenstler_hinzu.visible = true;

//	forms.frm_titel.elements.btn_orte_hinzu.visible = true;

//	forms.frm_titel.elements.btn_cover.visible = true;

//		

}

//

///**

// * @properties={typeid:24,uuid:"ABE8EBC9-EE48-4356-8AFF-450EEE57F1BB"}

// */

//function Cancel_Editing() {

//	// TODO Auto-generated method stub

//	databaseManager.revertEditedRecords();

//	databaseManager.setAutoSave(false);

//	elements.btn_neuerDatensatz.visible = true;

//	elements.btn_Delete.visible = true;

//	elements.btn_Editieren.visible = true;

//	elements.btn_Canceln.visible = false;

//	elements.btn_Speichern.visible = false;

//	elements.btn_Speichern_weiter.visible = false;

//	elements.btn_Alle.visible = true;

//	forms.frm_titel.elements.btn_kuenstler_hinzu.visible = false;

//	forms.frm_titel.elements.btn_orte_hinzu.visible = false;

//	forms.frm_titel.elements.btn_cover.visible = false;

//	forms.frm_titel.elements.btn_alte_werte.visible = false;

//	forms.frm_titel.elements.btn_titel.visible = false;

//	forms.frm_titel.elements.btn_stichworte.visible = false;

//	forms.frm_titel.elements.btn_anmerkungen.visible = false;

//	forms.frm_titel.elements.btn_verlag.visible = false;

//	forms.frm_titel.elements.btn_jahr.visible = false;

//	forms.frm_titel.elements.btn_isbn.visible = false;

//	forms.frm_titel.elements.btn_einband.visible = false;

//	forms.frm_titel.elements.btn_lgruppe.visible = false;

//	forms.frm_titel.elements.btn_wert.visible = false;

//	plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatzänderungen wurden nicht gesichert')

//}

//

//}

//

///**

/**
 * @properties={typeid:24,uuid:"C10D5CF4-F532-44C0-AC62-5D766381F262"}
 */
function Save_and_New() {

// TODO Auto-generated method stub

//	lc_titel = forms.frm_titel.titel;

//	lc_stichworte = forms.frm_titel.stichworte;

//	lc_anmerkungen = forms.frm_titel.anmerkung;

//	lc_verlag = forms.frm_titel.verlag_id;

//	ln_jahr = forms.frm_titel.jahr;

//	lc_isbn = forms.frm_titel.isbn;

//	lc_einband = forms.frm_titel.einband_id;

//	lc_lgruppe = forms.frm_titel.lgruppe_id;

//	ln_wert = forms.frm_titel.wert;

databaseManager.saveData();

application.updateUI();

foundset.newRecord();

//	forms.frm_titel.flag = 1;

//	forms.frm_titel.elements.btn_alte_werte.visible = true;

//	forms.frm_titel.elements.btn_titel.visible = true;

//	forms.frm_titel.elements.btn_stichworte.visible = true;

//	forms.frm_titel.elements.btn_anmerkungen.visible = true;

//	forms.frm_titel.elements.btn_verlag.visible = true;

//	forms.frm_titel.elements.btn_jahr.visible = true;

//	forms.frm_titel.elements.btn_isbn.visible = true;

//	forms.frm_titel.elements.btn_einband.visible = true;

//	forms.frm_titel.elements.btn_lgruppe.visible = true;

//	forms.frm_titel.elements.btn_wert.visible = true;

//	var lc_bildname = forms.frm_titel.titel_nr;

//	lc_bildname = "BIB-BILD-0" + lc_bildname + ".JPG";

//	forms.frm_titel.bild_datei = lc_bildname;

databaseManager.saveData();

databaseManager.setAutoSave(false);

application.updateUI(5);


}

//

/////**

//// * @properties={typeid:24,uuid:"D3D4C603-66A6-4A1E-9373-E6A130D33006"}

//// */

////function Toolbar_Start() {

////	// TODO Auto-generated method stub

////	controller.setSelectedIndex(1);

////	elements.btn_first.enabled = false;

////	elements.btn_back.enabled = false;

////	elements.btn_vor.enabled = true;

////	elements.btn_last.enabled = true;

////	elements.btn_Alle.visible = true;

////	//scopes.globals.gc_foundset = databaseManager.getFoundSet("bib","Titel");

////	//scopes.globals.gn_datensaetze = databaseManager.getTableCount(scopes.globals.gc_foundset);

////}

//

///**

// * TODO generated, please specify type and doc for the params

// * @param event

// *

// * @properties={typeid:24,uuid:"AA907E9C-72B7-4453-B1E2-9EDC5A60503E"}

// */

//function Alle_Anzeigen(event) {

//	// TODO Auto-generated method stub

//	foundset.loadAllRecords();

//	searchText = "";

//	ln_datensaetze = databaseManager.getTableCount(fsTabelle);

//	

//}

//

///**

// * TODO generated, please specify type and doc for the params

// * @param event

// *

// * @properties={typeid:24,uuid:"BFEE50CB-C266-4A73-BBC4-36C0D82FB3E3"}

// */

//function onSucheLetzten(event) {

//	// TODO Auto-generated method stub

//	for (var i = 1; i <= foundset.getSize(); i++){

//		var newIdx = foundset.getRecord(i);

////		newIdx = scopes.globals.gn_datensaetze;

//	}

//	foundset.setSelectedIndex(scopes.globals.gn_datensaetze);

//	elements.btn_first.enabled = true;

//	elements.btn_back.enabled = true;

//	elements.btn_vor.enabled = false;

//	elements.btn_last.enabled = false;

//	return newIdx

//}

/**
 * TODO generated, please specify type and doc for the params
 * @param searchText
 *
 * @properties={typeid:24,uuid:"6327191F-9376-4712-9CC4-DDF5650A5537"}
 */
function OnSearch(searchText)  {
	//  Alle Datensätze werden geladen
	if(!searchText) {
		foundset.loadAllRecords();
		v_datensaetze = databaseManager.getFoundSetCount(foundset);
		controller.setSelectedIndex(1 );
		return
	}
	
	// Einfache Suche über alle Felder
	var search = scopes.svySearch.createSimpleSearch(foundset)
	.setSearchText(searchText)
	//.setSearchAllColumns();
	
	// Definition der abgefragten Felder
	search.addSearchProvider("verlagsname");
	search.addSearchProvider("isbnkurz");
	
//	search.addSearchProvider("alt_vlg_id")
//	.setImpliedSearch(false);
//	search.addSearchProvider("erfass_dat")
//	.setImpliedSearch(false);
//	search.addSearchProvider("aender_dat")
//	.setImpliedSearch(false);
	
	
	
	search.loadRecords(foundset);
	v_datensaetze = databaseManager.getFoundSetCount(foundset);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D7AA7163-1551-442D-969C-72E18B6428B1"}
 */
function onActionBack(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.back();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B2FAF21B-6FBC-4711-A78F-E4C3216C686E"}
 */
function onActionNext(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.next();

}
///**

// * @properties={typeid:24,uuid:"B29B2B27-0261-4AC7-AE5A-0B94DD8AACDC"}

// */

//function onReadySort() {

//	// TODO Auto-generated method stub

//	//elements.Kuenstler_Titel_Liste.columns.sort('autor_to_titel_autor.titel_autor_to_titel.titel desc');

//

//}

