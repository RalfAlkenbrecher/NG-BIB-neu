/**
 * @properties={typeid:35,uuid:"A465475D-B0D6-4B6E-BD2E-F389BF2A9A17",variableType:-4}
 */
var v_datensaetze = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"30189DE9-0D97-4BF3-9A77-953BFD9515D7"}
 */
function OnShow_Laden (firstShow, event) {
	
	var fsTabelle = databaseManager.getFoundSet("bib_testdaten","autor");
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
	
	scopes.svyNavigationUX.addGlobalSearchListener(OnSearch);

		
	elements.btn_first.enabled;
	elements.btn_back.enabled;
	elements.btn_vor.enabled;
	elements.btn_last.enabled;
	
}

//   DATENSATZZEIGER CODE

/**
 * @properties={typeid:24,uuid:"93665B6E-E3C8-4748-BAFB-DD7DCBFF40F4"}
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
 * @properties={typeid:24,uuid:"C2450FF8-C292-43C3-B9FB-0D81CFBED76F"}
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
 * @properties={typeid:24,uuid:"1E4A43D4-8F5A-4551-A6C6-8A43E9D433DE"}
 */
function GO_first() {
	controller.setSelectedIndex(1);
	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
}

/**
 * @properties={typeid:24,uuid:"1FB26F2B-9C15-41BF-9623-B8FEAB0EFBFD"}
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
 * @properties={typeid:24,uuid:"FCF09157-437B-4611-BF5D-EA50C988CA79"}
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
 * @properties={typeid:24,uuid:"1899A63A-9279-4AF3-AD9C-33AC7EB1AFFF"}
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

//function Datensatz_loeschen() {

//	var theButton = plugins.dialogs.showQuestionDialog('Loesch-Info','Wollen Sie wirklich den Datensatz löschen? - ACHTUNG: um einen Titel zu löschen, müssen Sie vorher die Titel-Ort-  und Titel-Autor-Beziehungen löschen !','JA','NEIN');

//	if (theButton == 'JA'){

//	foundset.deleteRecord();

//	databaseManager.setAutoSave(true);

//	elements.btn_neuerDatensatz.visible = true;

//	elements.btn_Delete.visible = true;

//	elements.btn_Editieren.visible = true;

//	elements.btn_Canceln.visible = false;

//	elements.btn_Speichern.visible = false;

//	elements.btn_Speichern_weiter.visible = false;

//	elements.btn_Alle.visible = true;

//	plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatz wurde gelöscht')

//	}

//else {

//	return;

//	}

//}

//

///**

// * @properties={typeid:24,uuid:"CF94BA6C-1B88-4C6E-A5F3-819ABA623EFF"}

// */

//function Start_Editing() {

//	// Soll: 2 Button anzeigen (Cancel und Sichern), andere Ausblenden 

//	databaseManager.setAutoSave(true);

//	elements.btn_neuerDatensatz.visible = false;

//	elements.btn_Delete.visible = false;

//	elements.btn_Editieren.visible = false;

//	elements.btn_Canceln.visible = true;

//	elements.btn_Speichern.visible = true;

//	elements.btn_Speichern_weiter.visible = true;

//	elements.btn_Alle.visible = false;

//	forms.frm_titel.elements.btn_kuenstler_hinzu.visible = true;

//	forms.frm_titel.elements.btn_orte_hinzu.visible = true;

//	forms.frm_titel.elements.btn_cover.visible = true;

//		

//}

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

// * @properties={typeid:24,uuid:"1BDCA920-9509-4014-B958-BEDDFAA61E95"}

// */

//function Save_and_New() {

//	// TODO Auto-generated method stub

//	lc_titel = forms.frm_titel.titel;

//	lc_stichworte = forms.frm_titel.stichworte;

//	lc_anmerkungen = forms.frm_titel.anmerkung;

//	lc_verlag = forms.frm_titel.verlag_id;

//	ln_jahr = forms.frm_titel.jahr;

//	lc_isbn = forms.frm_titel.isbn;

//	lc_einband = forms.frm_titel.einband_id;

//	lc_lgruppe = forms.frm_titel.lgruppe_id;

//	ln_wert = forms.frm_titel.wert;

//	databaseManager.saveData();

//	application.updateUI();

//	controller.newRecord();

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

//	databaseManager.saveData();

//	databaseManager.setAutoSave(false);

//	application.setStatusText('');

//	application.updateUI(5);

//

//}

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
 * @properties={typeid:24,uuid:"22A27202-D378-4FE8-B12C-61297A61BA29"}
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
	search.addSearchProvider("name_match");
	search.addSearchProvider("vorname");
	search.addSearchProvider("nachname");

	search.loadRecords(foundset);
	v_datensaetze = databaseManager.getFoundSetCount(foundset);
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"62E5BDAB-A949-4A72-BA71-F961D6D96A22"}
 */
function onActionBack(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.back();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D4629872-6A2B-4DAF-ACA0-DD7A511B4965"}
 */
function onActionNext(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.next();

}

/**
 * Called when the columns data is changed.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param [oldvalue]
 * @param [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6AD38209-5265-4C58-93BD-EEF380FD1CE6"}
 */
function onColumnDataChange(foundsetindex, columnindex, oldvalue, newvalue, event, record) {
	// TODO Auto-generated method stub
	foundset.sort('titel asc');
	return true;
}
