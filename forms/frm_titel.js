//////////////////////////////////////////////////////////////////////////////////////

// Declaration von diversen Variablen

//////////////////////////////////////////////////////////////////////////////////////

/**
 * @properties={typeid:35,uuid:"2B930E3B-2F81-4329-947E-CE04DC92740F",variableType:-4}
 */
var fsTabelle = databaseManager.getFoundSet("bib_testdaten","titel");

/**
 * @properties={typeid:35,uuid:"64B46047-885F-4255-A164-22E657401F0D",variableType:-4}
 */
var ln_datensaetze = databaseManager.getTableCount(fsTabelle);

/**
 * @properties={typeid:35,uuid:"C73ECA93-AF16-4BDA-9C24-3B8751FBF635",variableType:-4}
 */
var v_datensaetze = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4AFB4C6-285A-450C-94E9-3A380A167E90",variableType:4}
 */
var s_datensatz = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E6575E94-9DEB-4EE0-BF26-F98FB305FD5C"}
 */
var lc_titel = controller.getDataProviderValue('titel');

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"17EEB7B6-9E81-4531-9AAA-8C3E9785A15E"}
 */
var lc_schlagworte = " ";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"736EDCB4-61DC-485C-9907-A3ED75024612"}
 */
var lc_anmerkung = " ";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BAA1465-DC10-4BE4-9840-75FBE2C52ECA"}
 */
var lc_verlag = " ";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6131C8B-0E96-4A63-BE24-617965F923A2",variableType:4}
 */
var ln_jahr = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E850A74D-5346-4C05-9027-23FDF1D5F5A4"}
 */
var lc_isbn = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40193049-1A6B-4466-90C1-8093CD8FFDFB"}
 */
var lc_einband = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C19CA04-D228-4B04-B43E-C3411B70E02A"}
 */
var lc_lgruppe = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E0426D06-1187-47C9-AE34-071F016DFC5A",variableType:4}
 */
var ln_wert = 0;

///////////////////////////////////////////////////////////////////////////////////////

// Start-Routine

//////////////////////////////////////////////////////////////////////////////////////

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"42FADF3C-F2A3-428C-94E1-80EE5CCF3D05"}
 */
function OnShow_Laden (firstShow, event) {
	
	fsTabelle = databaseManager.getFoundSet("bib_testdaten","titel");
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
	
//	databaseManager.setAutoSave(false);

	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
	
	elements.btn_Delete.visible = true;
	elements.btn_Editieren.visible = true;
	elements.btn_Cancel.visible = false;
    elements.btn_Speichern.visible = false;
	elements.btn_Speichern_weiter.visible = false;
	elements.btn_Alle.visible = true;
	elements.btn_Drucken.visible = true;
	elements.btn_kuenstler_hinzu.visible = false;
	elements.btn_orte_hinzu.visible = false;
	elements.btn_cover.visible = false;
	elements.btn_alteWerte.visible = false;
	
// Datenfelder nicht editierbar
	elements.chbox_gewidmet.enabled = false;
	elements.chbox_signiert.enabled = false;
	elements.chbox_neu.enabled = false;
	elements.chbox_geloescht.enabled = false;
	
	elements.combobox_einb.editable = false;
	elements.combobox_lg.editable = false;
	elements.combobox_verlag.editable = false;

	elements.textarea_titel.editable = false;
	elements.textarea_anmerkung.editable = false;
	elements.textarea_schlagworte.editable = false;
	elements.txt_ISBN.editable = false;
	elements.txt_jahr.editable = false;
	elements.txt_wert.editable = false;

	
}

////////////////////////////////////////////////////////////////////////////////

//   DATENSATZZEIGER CODE

///////////////////////////////////////////////////////////////////////////////

/**
 * @properties={typeid:24,uuid:"34AE1D36-7200-4421-9A59-6BB76BA31573"}
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
 * @properties={typeid:24,uuid:"7C26C910-91DD-40F3-AACA-C76CFE2E35C9"}
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
 * @properties={typeid:24,uuid:"32DBA294-DA17-47E2-A993-1854AA991B94"}
 */
function GO_first() {
	controller.setSelectedIndex(1);
	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
}

/**
 * @properties={typeid:24,uuid:"535CF599-53B2-4CA0-9CE7-D26A3B744C32"}
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

///////////////////////////////////////////////////////////////////////////////////

////  BUTTON CODE, zum Starten diverser Aktivitäten wie Löschen, neue Daten etc.

///////////////////////////////////////////////////////////////////////////////////

/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"70126588-32E6-4CF0-90F2-C16E7D29637F"}
 */
function NeuerDatensatz(event)
//  SOLL Ausblenden:  Neuer Titel, Speichern und Neuer Datensatz,Titel bearbeiten, Löschen,Alle Datensätze laden, Drucken" 
//  SOLL Einblenden:  Speichern und Abrechen
{
	databaseManager.setAutoSave(true);
		
	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = false;
	elements.btn_last.enabled = false;

	elements.btn_first.visible = false;
	elements.btn_back.visible = false;
	elements.btn_vor.visible = false;
	elements.btn_last.visible = false;

	
	elements.btn_neuerDatensatz.visible = false;
	elements.btn_Editieren.visible = false;
	elements.btn_Delete.visible = false;
	elements.btn_Speichern.visible = true;
	elements.btn_Speichern_weiter.visible = true;
	elements.btn_Alle.visible = false;
	elements.btn_Drucken.visible = false;
	elements.btn_Cancel.visible = true;
    elements.lb_Datensatzzaehlung.visible = false;
	elements.btn_kuenstler_hinzu.visible = true;
	elements.btn_orte_hinzu.visible = true;
	elements.btn_cover.visible = true;
	elements.btn_alteWerte.visible = false;
		
// Datenfelder editierbar machen
	elements.chbox_gewidmet.enabled = true;
	elements.chbox_signiert.enabled = true;
	elements.combobox_einb.editable = true;
	elements.combobox_lg.editable = true;
	elements.combobox_verlag.editable = true;
	elements.textarea_titel.editable = true;
	elements.textarea_anmerkung.editable = true;
	elements.textarea_schlagworte.editable = true;
	elements.txt_ISBN.editable = true;
	elements.txt_jahr.editable = true;
	elements.txt_wert.editable = true;

foundset.createRecord()
   	
	
var lc_bildname = foundset.titel_nr;
lc_bildname = "BIB-BILD-0" + lc_bildname + ".JPG";
foundset.bild_datei = lc_bildname;

foundset.flag = 1;


}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"9EA3BB56-73FE-4F95-B3DE-2930E872152A"}
 */
function onActionSave(event) {
	// TODO Auto-generated method stub
	
databaseManager.setAutoSave(true);
	
//// Werte für evtl. Wiederverwendung des nächsten Datensatzes werden gespeichert
//	lc_titel = forms.frm_titel.titel;
//	lc_stichworte = forms.frm_titel.stichworte;
//	lc_anmerkungen = forms.frm_titel.anmerkung;
//	lc_verlag = forms.frm_titel.verlag_id;
//	ln_jahr = forms.frm_titel.jahr;
//	lc_isbn = forms.frm_titel.isbn;
//	lc_einband = forms.frm_titel.einband_id;
//	lc_lgruppe = forms.frm_titel.lgruppe_id;
//	ln_wert = forms.frm_titel.wert;


	elements.btn_first.enabled = true;
	elements.btn_back.enabled = true;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
	
	elements.btn_first.visible = true;
	elements.btn_back.visible = true;
	elements.btn_vor.visible = true;
	elements.btn_last.visible = true;
	
	elements.btn_neuerDatensatz.visible = true;
	elements.btn_Editieren.visible = true;
	elements.btn_Delete.visible = true;
	elements.btn_Speichern.visible = false;
	elements.btn_Speichern_weiter.visible = false;
	elements.btn_Alle.visible = true;
	elements.btn_Drucken.visible = true;
	elements.btn_Cancel.visible = false;
	elements.lb_Datensatzzaehlung.visible = true;
	
	elements.btn_kuenstler_hinzu.visible = false;
	elements.btn_orte_hinzu.visible = false;
	elements.btn_cover.visible = false;
	elements.btn_alteWerte.visible = false;
	elements.btn_titel.visible = false;
	elements.btn_schlagworte.visible = false;
	elements.btn_anmerkung.visible = false;
	elements.btn_verlag.visible = false;
	elements.btn_jahr.visible = false;
	elements.btn_isbn.visible = false;
	elements.btn_einband.visible = false;
	elements.btn_lgruppe.visible = false;
	elements.btn_jahr.visible = false;
	elements.btn_wert.visible = false;
	foundset.loadAllRecords();
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
	
databaseManager.saveData();
	
	plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatzänderung wurde gesichert');
	
}

/**
 * @properties={typeid:24,uuid:"FE95D034-A73D-4DFC-AD2A-0E56E41F3316"}
 */
function Datensatz_loeschen() {

	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = false;
	elements.btn_last.enabled = false;
	
	elements.chbox_geloescht.enabled = true;
	

var theButton = plugins.dialogs.showQuestionDialog('Loesch-Info','Wollen Sie wirklich den Datensatz als gelöscht markieren? ','JA','NEIN')
	
if (theButton == 'JA'){

// foundset.deleteRecord();

foundset.geloescht = "1"


elements.btn_first.enabled = true;
elements.btn_back.enabled = true;
elements.btn_vor.enabled = true;
elements.btn_last.enabled = true;


elements.btn_neuerDatensatz.visible = true;
elements.btn_Editieren.visible = true;
elements.btn_Delete.visible = true;
elements.btn_Speichern.visible = false;
elements.btn_Speichern_weiter.visible = false;
elements.btn_Alle.visible = true;
elements.btn_Drucken.visible = true;
elements.btn_Cancel.visible = false;
elements.lb_Datensatzzaehlung.visible = true;

plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatz wurde gelöscht')

}

else {

return;

}

}

/**
 * @properties={typeid:24,uuid:"D33042BE-19EB-4D6A-BE69-A2D5722B6ED0"}
 */
function Start_Editing() {

// Soll: 2 Button anzeigen (Cancel und Sichern), andere ausblenden 

//databaseManager.setAutoSave(false);

elements.btn_first.enabled = false;
elements.btn_back.enabled = false;
elements.btn_vor.enabled = false;
elements.btn_last.enabled = false;

elements.btn_first.visible = false;
elements.btn_back.visible = false;
elements.btn_vor.visible = false;
elements.btn_last.visible = false;

elements.btn_neuerDatensatz.visible = false;
elements.btn_Editieren.visible = false;
elements.btn_Delete.visible = false;
elements.btn_Speichern.visible = true;
elements.btn_Speichern_weiter.visible = false;
elements.btn_Alle.visible = false;
elements.btn_Drucken.visible = false;
elements.btn_Cancel.visible = true;
elements.lb_Datensatzzaehlung.visible = false;
elements.btn_kuenstler_hinzu.visible = true;
elements.btn_orte_hinzu.visible = true;
elements.btn_cover.visible = true;
elements.btn_alteWerte.visible = false;
	
//Datenfelder editierbar machen
elements.chbox_gewidmet.enabled = true;
elements.chbox_signiert.enabled = true;
elements.combobox_einb.editable = false;
elements.combobox_lg.editable = false;
elements.combobox_verlag.editable = false;
elements.textarea_titel.editable = true;
elements.textarea_anmerkung.editable = true;
elements.textarea_schlagworte.editable = true;
elements.txt_ISBN.editable = true;
elements.txt_jahr.editable = true;
elements.txt_wert.editable = true;
		

}

//

/**
 * @properties={typeid:24,uuid:"5208E901-C30B-41E0-95B0-614E9434FC06"}
 */
function Cancel_Editing() {

	// TODO Auto-generated method stub
	

elements.btn_first.enabled = false;
elements.btn_back.enabled = false;
elements.btn_vor.enabled = false;
elements.btn_last.enabled = false;

elements.btn_first.visible = false;
elements.btn_back.visible = false;
elements.btn_vor.visible = false;
elements.btn_last.visible = false;

elements.btn_neuerDatensatz.visible = true;
elements.btn_Editieren.visible = true;
elements.btn_Delete.visible = true;
elements.btn_Speichern.visible = false;
elements.btn_Speichern_weiter.visible = false;
elements.btn_Alle.visible = true;
elements.btn_Drucken.visible = true;
elements.btn_Cancel.visible = false;
elements.lb_Datensatzzaehlung.visible = true;
elements.btn_kuenstler_hinzu.visible = false;
elements.btn_orte_hinzu.visible = false;
elements.btn_cover.visible = false;
elements.btn_alteWerte.visible = false;

	
//Datenfelder sperren
elements.chbox_gewidmet.enabled = false;
elements.chbox_signiert.enabled = false;
elements.chbox_neu.enabled = false;
elements.chbox_geloescht.enabled = false;
elements.combobox_einb.editable = false;
elements.combobox_lg.editable = false;
elements.combobox_verlag.editable = false;
elements.textarea_titel.editable = false;
elements.textarea_anmerkung.editable = false;
elements.textarea_schlagworte.editable = false;
elements.txt_ISBN.editable = false;
elements.txt_jahr.editable = false;
elements.txt_wert.editable = false;

// Übernahme - Buttons unsichtbar machen
	elements.btn_titel.visible = false;
	elements.btn_schlagworte.visible = false;
	elements.btn_anmerkung.visible = false;
	elements.btn_verlag.visible = false;
	elements.btn_jahr.visible = false;
	elements.btn_isbn.visible = false;
	elements.btn_einband.visible = false;
	elements.btn_lgruppe.visible = false;
	elements.btn_wert.visible = false;

	
databaseManager.revertEditedRecords();
//databaseManager.setAutoSave(false);


elements.btn_first.enabled = true;
elements.btn_back.enabled = true;
elements.btn_vor.enabled = true;
elements.btn_last.enabled = true;

elements.btn_first.visible = true;
elements.btn_back.visible = true;
elements.btn_vor.visible = true;
elements.btn_last.visible = true;


	
plugins.dialogs.showErrorDialog('Sicherungs-Information','Datensatzänderungen wurden nicht gesichert')

}

/**
 * @properties={typeid:24,uuid:"77D87772-CAFE-4464-BBDB-176AF8DEFAB9"}
 */
function Save_and_New() {

// TODO Auto-generated method stub

databaseManager.setAutoSave(true);
	
	
	elements.btn_first.enabled = false;
	elements.btn_back.enabled = false;
	elements.btn_vor.enabled = false;
	elements.btn_last.enabled = false;
	
	elements.btn_first.visible = false;
	elements.btn_back.visible = false;
	elements.btn_vor.visible = false;
	elements.btn_last.visible = false;

	
	elements.btn_neuerDatensatz.visible = false;
	elements.btn_Editieren.visible = false;
	elements.btn_Delete.visible = false;
	elements.btn_Speichern.visible = true;
	elements.btn_Speichern_weiter.visible = true;
	elements.btn_Alle.visible = false;
	elements.btn_Drucken.visible = false;
	elements.btn_Cancel.visible = true;
    elements.lb_Datensatzzaehlung.visible = false;
	elements.btn_kuenstler_hinzu.visible = true;
	elements.btn_orte_hinzu.visible = true;
	elements.btn_cover.visible = true;
	elements.btn_alteWerte.visible = false;
		
// Datenfelder editierbar machen
	elements.chbox_gewidmet.enabled = true;
	elements.chbox_signiert.enabled = true;
	elements.combobox_einb.editable = false;
	elements.combobox_lg.editable = false ;
	elements.combobox_verlag.editable = false;
	elements.textarea_titel.editable = true;
	elements.textarea_anmerkung.editable = true;
	elements.textarea_schlagworte.editable = true;
	elements.txt_ISBN.editable = true;
	elements.txt_jahr.editable = true;
	elements.txt_wert.editable = true;

//	Gesicherte Werte der letzten Neu-Aufnahme zur Verfügung stellen
	lc_titel = foundset.titel;
	lc_schlagworte = foundset.schlagworte;
	lc_anmerkung = foundset.anmerkung;
	lc_verlag = foundset.verlag_id;
	ln_jahr = foundset.jahr;
	lc_isbn = foundset.isbn;
	lc_einband = foundset.einband_id;
	lc_lgruppe = foundset.lgruppe_id;
	ln_wert = foundset.wert;
	
	
databaseManager.saveData();

application.updateUI();

foundset.newRecord();

elements.btn_first.enabled = false;
elements.btn_back.enabled = false;
elements.btn_vor.enabled = false;
elements.btn_last.enabled = false;

elements.btn_first.visible = false;
elements.btn_back.visible = false;
elements.btn_vor.visible = false;
elements.btn_last.visible = false;

elements.chbox_gewidmet.enabled = true;
elements.chbox_signiert.enabled = true;
elements.combobox_einb.editable = false;
elements.combobox_lg.editable = false;
elements.combobox_verlag.editable = false;
elements.textarea_titel.editable = true;
elements.textarea_anmerkung.editable = true;
elements.textarea_schlagworte.editable = true;
elements.txt_ISBN.editable = true;
elements.txt_jahr.editable = true;
elements.txt_wert.editable = true;

elements.btn_alteWerte.visible = true;
elements.btn_titel.visible = true;
elements.btn_schlagworte.visible = true;
elements.btn_anmerkung.visible = true;
elements.btn_verlag.visible = true;
elements.btn_jahr.visible = true;
elements.btn_isbn.visible = true;
elements.btn_einband.visible = true;
elements.btn_lgruppe.visible = true;
elements.btn_wert.visible = true;

foundset.flag = 1;
var lc_bildname = foundset.titel_nr;
lc_bildname = "BIB-BILD-0" + lc_bildname + ".JPG";
foundset.bild_datei = lc_bildname;

databaseManager.saveData();
databaseManager.setAutoSave(true);


elements.btn_neuerDatensatz.visible = false;
elements.btn_Editieren.visible = false;
elements.btn_Delete.visible = false;
elements.btn_Speichern.visible = true;
elements.btn_Speichern_weiter.visible = true;
elements.btn_Alle.visible = false;
elements.btn_Drucken.visible = false;
elements.btn_Cancel.visible = true;
elements.lb_Datensatzzaehlung.visible = false;
elements.btn_kuenstler_hinzu.visible = true;
elements.btn_orte_hinzu.visible = true;
elements.btn_cover.visible = true;
elements.btn_alteWerte.visible = true;

//Datenfelder sperren
//elements.chbox_gewidmet.enabled = false;
//elements.chbox_signiert.enabled = false;
//elements.chbox_neu.enabled = false;
//elements.chbox_geloescht.enabled = false;
//elements.combobox_einb.editable = false;
//elements.combobox_lg.editable = false;
//elements.combobox_verlag.editable = false;
//elements.textarea_titel.editable = false;
//elements.textarea_anmerkung.editable = false;
//elements.textarea_schlagworte.editable = false;
//elements.txt_ISBN.editable = false;
//elements.txt_jahr.editable = false;
//elements.txt_wert.editable = false;


application.updateUI(5);

}

///**

// * TODO generated, please specify type and doc for the params

// * @param event

// *

// * @properties={typeid:24,uuid:"38955FC1-03F1-4CEF-B658-07C9BF70B22F"}

// */

//function Alle_Anzeigen(event) {

//

//	// TODO Auto-generated method stub

//

//	foundset.loadAllRecords();

//

//	searchText = "";

//

//	ln_datensaetze = databaseManager.getTableCount(fsTabelle);

//

//	

//

//}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"98E0CF96-1B1E-46A9-81ED-E67C92E72C8C"}
 */
function Cancel(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords();
	databaseManager.setAutoSave(false);
	elements.btn_neuerDatensatz.visible = true;
	elements.btn_Delete.visible = true;
	elements.btn_Editieren.visible = true;
	elements.btn_Cancel.visible = false;
	elements.btn_Speichern.visible = false;
	elements.btn_Speichern_weiter.visible = false;
	elements.btn_Alle.visible = true;
	elements.btn_kuenstler_hinzu.visible = false;
	elements.btn_orte_hinzu.visible = false;
	elements.btn_cover.visible = false;
	elements.btn_alteWerte.visible = false;
	elements.btn_titel.visible = false;
	elements.btn_schlagworte.visible = false;
	elements.btn_anmerkung.visible = false;
	elements.btn_verlag.visible = false;
	elements.btn_jahr.visible = false;
	elements.btn_isbn.visible = false;
	elements.btn_einband.visible = false;
	elements.btn_lgruppe.visible = false;
	elements.btn_wert.visible = false;
	
	elements.btn_first.enabled = true;
	elements.btn_back.enabled = true;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;
	
	plugins.dialogs.showErrorDialog('Sicherungs-Information','Neuaufnahme oder Datensatzänderungen wurden nicht gesichert')

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CD09FA2C-47DC-4989-B8BC-394D171E92DE"}
 */
function Alle_Datensaetze(event) {
	// TODO Auto-generated method stub
	foundset.loadAllRecords();
	searchText = "";
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
	
	elements.btn_first.enabled = true;
	elements.btn_back.enabled = true;
	elements.btn_vor.enabled = true;
	elements.btn_last.enabled = true;

	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"32E4121A-5513-4215-8D77-D4D7A64BCE00"}
 */
function onActionDrucken(event) {
//	// TODO Auto-generated method stub
////
////		var DataSource = ReportDS.createDataSource("SrcReportDS");
////		 var ReportFS = databaseManager.getFoundSet(DataSource);
////		ReportFS.loadAllRecords();
////		  result = plugins.jasperPluginRMI.runReport(ReportFS,lcReport,null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,jasperParameter,globals.lcJasper_CountrySetting);
////
////		var clonefs = forms.frm_titel.foundset;
////		var result = plugins.jasperPluginRMI.runReport(clonefs,'Bib-Test-1.jrxml',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,null);
////		if (result){
////			 /* @type {Array<byte>} */
////			 var bytes
////			 /* @type {String} */
////			 var txt
////			 if (result instanceof Array) {
////			  bytes = result;
////			 } else {
////			  txt = result;
////			 }
////			 var jsFile = plugins.file.createTempFile("jogi", "PDF");
////			plugins.file.writeFile(jsFile, bytes);
////			   var desktop = Packages.java.awt.Desktop;
////			   var jFile = new Packages.java.io.File(jsFile);
////			    desktop.getDesktop().open(jFile);	
////
////
//		
//		var laProdKeys = new Array();
//		var recProd = null;
//		for (var i = 1; i <= foundset.getSize(); i++){
//			recProd = foundset.getRecord(i);
//			laProdKeys.push("'" + recProd.titel_id.toString() + "'" )
//			}
//		
//			lcProdKeys = laProdKeys.join(",");
//			var lcWhere = "";
//			lcWhere += "(" + lcProdKeys + ")";
//			lcQuery = "";
//			lcQuery += "SELECT DISTINCT ON (titel.titel_id) titel.titel_id,titel.titel,titel.titel_nr,titel.verlag_id,titel.jahr,";
//			lcQuery += "titel.einband_id,titel.lgruppe_id,titel.gewidmet,titel.signiert,titel.anmerkung,";
//			lcQuery += "titel.flag,titel.erfass_dat,titel.aender_dat,titel.wert,titel.bild_datei,titel.cover_klein,";
//			lcQuery += "titel.geloescht,titel.isbn,titel.schlagworte,verlag.verlagsname,einband.einb_besch,";
//			lcQuery += "lgruppe.lgru_besch,titel_autor.autor_rolle,titel_autor.autor_id,autor.name_match,titel_ort.ort_id,";
//			lcQuery += "verlagsort.verlagsort";
//			lcQuery += " FROM titel ";
//			lcQuery = lcQuery + " FULL OUTER JOIN titel_autor ON titel.titel_id = titel_autor.titel_id";
//			lcQuery = lcQuery + " FULL OUTER JOIN titel_ort ON titel.titel_id = titel_ort.titel_id";
//			lcQuery = lcQuery + " FULL OUTER JOIN autor ON titel_autor.autor_id = autor.autor_id";
//			lcQuery = lcQuery + " FULL OUTER JOIN verlagsort ON titel_ort.ort_id = verlagsort.ort_id";
//			lcQuery = lcQuery + " INNER JOIN verlag ON titel.verlag_id = verlag.verlag_id";
//			lcQuery = lcQuery + " INNER JOIN einband ON titel.einband_id = einband.einband_id";
//			lcQuery = lcQuery + " INNER JOIN lgruppe ON titel.lgruppe_id = lgruppe.lgruppe_id";
//			lcQuery = lcQuery + " WHERE titel.titel_id IN " + lcWhere + " ORDER BY titel.titel_id";
//
//
//		var jasperParameter = new Object();
//		jasperParameter.query = lcQuery;
//
//		//var clonefs = forms.frm_titel.foundset;
//		var result = plugins.jasperReports.runReport("bib-testdaten",'TEST-Bib-Allg.jrxml',null,plugins.jasperReports.OUTPUT_FORMAT.PDF,jasperParameter);
//		// var result = plugins.jasperReports.runReport("bib_testdaten",'Bib-Allg.jrxml',null,plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF,jasperParameter);
//		//var result = plugins.jasperReports.runReport("bib_testdaten",'TEST-bib-Allg.jrxml','c:/Arbeit/Test-Druck.pdf',plugins.jasperReports.OUTPUT_FORMAT.PDF,null);
//		if (result){
//			 /* @type {Array<byte>} */
//			 var bytes
//			 /* @type {String} */
//			 var txt
//			 if (result instanceof Array) {
//			  bytes = result;
//			 } else {
//			  txt = result;
//			 }
//			 var jsFile = plugins.file.createTempFile("Titel_", ".PDF");
//			plugins.file.writeFile(jsFile, bytes);
//			   var desktop = Packages.java.awt.Desktop;
//			   var jFile = new Packages.java.io.File(jsFile);
//			    desktop.getDesktop().open(jFile);	
//
//		}
//
//
//	}


	var result = plugins.jasperReports.runReport("bib_testdaten","TEST-8.jrxml","",plugins.jasperReports.OUTPUT_FORMAT.PDF,null,"de_DE");

	if (result){
		 /* @type {Array<byte>} */
		 var bytes
		 /* @type {String} */
		 var txt
		 if (result instanceof Array) {
		  bytes = result;
		 } else {
		  txt = result;
		 }
		 var jsFile = plugins.file.createTempFile("Jahres-Übersicht_", ".PDF");
		plugins.file.writeFile(jsFile, bytes);
		   var desktop = Packages.java.awt.Desktop;
		   var jFile = new Packages.java.io.File(jsFile);
		    desktop.getDesktop().open(jFile);		
	}	

	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4D8174F3-82F5-407C-A3D0-59ADDD551EA1"}
 */
function on_btn_titel(event) {
	// TODO Auto-generated method stub
	foundset.titel = lc_titel;
}

//////////////////////////////////////////////////////////////////////////////////////////

///    Funktionen zur Übernahme der alten Werte, bei der Erfassung mehrerer Datensätze

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"BEAF2078-10E4-4AA5-976F-AD12CB442D9F"}
 */
function on_btn_schlagworte(event) {
	// TODO Auto-generated method stub
	foundset.schlagworte = lc_schlagworte;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"6B327B4F-A3B5-4ABE-98B2-34CD9065DDC3"}
 */
function on_btn_anmerkungen(event) {
	// TODO Auto-generated method stub
	foundset.anmerkung = lc_anmerkung;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E582C2C6-4735-402C-AB81-CFAF23260090"}
 */
function on_btn_verlag(event) {
	// TODO Auto-generated method stub
	foundset.verlag_id = lc_verlag;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"715EDD1E-EB75-456D-BFA4-11BB2D75A5E1"}
 */
function on_btn_jahr(event) {
	// TODO Auto-generated method stub
	foundset.jahr = ln_jahr;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C7965BFB-E152-43CE-BDC1-979AE19B45F0"}
 */
function on_btn_isbn(event) {
	// TODO Auto-generated method stub
	foundset.isbn = lc_isbn;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C732DF7E-3963-46E6-818A-2CF5BE05C97C"}
 */
function on_btn_einband(event) {
	// TODO Auto-generated method stub
	foundset.einband_id = lc_einband;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C7A7CE57-E70E-4A93-981B-F67CCE1BC221"}
 */
function on_btn_lgruppe(event) {
	// TODO Auto-generated method stub
	foundset.lgruppe_id = lc_lgruppe;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"61A1B506-3EAE-452E-9F1A-DB426325E566"}
 */
function on_btn_wert(event) {
	// TODO Auto-generated method stub
	foundset.wert = ln_wert;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"92452E87-2133-4496-8F75-5D814835BB9D"}
 */
function on_btn_alteWerte(event) {
	// TODO Auto-generated method stub
	titel = lc_titel;
	schlagworte = lc_schlagworte;
	anmerkung = lc_anmerkung;
	verlag_id = lc_verlag;
	jahr = ln_jahr;
	isbn = lc_isbn;
	einband_id = lc_einband;
	lgruppe_id = lc_lgruppe;
	wert = ln_wert;
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DC8D6A5-6BA3-4D13-B163-5F84D30F5C11"}
 */
var searchText = '';

/**
 * @properties={typeid:24,uuid:"D9A8C965-24FA-487A-9A0D-BA86912B689A"}
 */
function T_onSearch(){
	
	//	 load all records when search is cleared
	if(!searchText){
		foundset.loadAllRecords();
		return;
	}
	
	//	create search object and add search providers
	var search = scopes.svySearch.createSimpleSearch(foundset);
	
	
	// set the search text
	search.setSearchText(searchText);
	
	//	list of data providers to include in search
	var searchProviders = [
		'titel',
		'erfass_dat',
		'anmerkung',
		'isbn',
		'schlagworte',
				
		// related data providers
		'titel_to_einband.einb_besch',
		'titel_to_verlag.verlagsname',
		
		//	N-levels depth on relations
		'titel_to_titel_autor.titel_autor_to_autor.nachname',
		'titel_to_titel_autor.titel_autor_to_autor.vorname',
		'titel_to_titel_ort.titel_ort_to_verlagsort.verlagsort',
		'titel_to_titel_autor.titel_autor_to_kuenstlerart.kuenstler_art',
	];
	
	// add search providers
	for(var i in searchProviders){
		search.addSearchProvider(searchProviders[i]);
	}
	
	//	add order date as an explicit search
	search.addSearchProvider('titel_nr')
		.setAlias('Bibnummer')			//	specify the alias which may be used	
		.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified

		search.addSearchProvider('jahr')
		.setAlias('Jahr')			//	specify the alias which may be used	
		.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified	
		
		search.addSearchProvider('titel_to_lgruppe.lgru_besch')
		.setAlias('Literaturgruppe')			//	specify the alias which may be used	
		.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified	
		
		search.addSearchProvider('titel_to_titel_autor.titel_autor_to_autor.name_match')
		.setAlias('Autor')			//	specify the alias which may be used	
		.setImpliedSearch(false)		//	specify that the column is not searched unless explicitly specified
		
				
	//	execute search
	search.loadRecords(foundset);
	
	ln_datensaetze = foundset.getSize();
	v_datensaetze = ln_datensaetze;

}

/**
 * @properties={typeid:24,uuid:"D4652A86-7061-428C-A3D1-0B490F0FEC11"}
 */
function T_onSearch$basic(){
	scopes.svySearch.createSimpleSearch(foundset)
		.setSearchAllColumns()
		.setSearchText(searchText)
		.loadRecords(foundset);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DB5C89AE-A944-490B-A4E8-DFB7F2C741A8"}
 */
function On_Suchhilfe(event) {
	// TODO Auto-generated method stub
	plugins.dialogs.showInfoDialog('Suchhilfe','Geben Sie einfach einen Autor, Titel, Verlag etc. ein. Für Erscheinungsjahr geben Sie "Jahr:xxxx", für die Bib-Titelnummer "Bibnummer:xxxx", für Literaturgruppe "Literaturgruppe:tttttttttttt" ein','ok');

}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"865F3857-EFAF-4072-8E81-5AD968D501FF"}
 */
function onOrtehinzufuegen(event) {
	// TODO Auto-generated method stub
	var _form_titel_ort = application.createWindow("Ort_ zu_Titel_hinzufügen", JSWindow.MODAL_DIALOG);
	forms.frm_titel_ort_verknuepfung.controller.loadRecords(titel_to_titel_ort);
	_form_titel_ort.show(forms.frm_titel_ort_verknuepfung);
	application.output(forms.frm_titel_ort_verknuepfung.foundset.getRelationName());
}
