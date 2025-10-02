/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"68E8BD5B-5858-474D-AF69-532F23E9230B"}
 */
var pfeil = '<span class = "fas fa-book-open" />';

/**
 * @properties={typeid:35,uuid:"C58FDAD7-2B53-401B-8517-40AFD6983A05",variableType:-4}
 */
var v_datensaetze = null;

/**
 * @properties={typeid:35,uuid:"5102EAB2-407E-4B7A-B7F4-2418704C4CC4",variableType:-4}
 */
var s_datensatz = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"E74A66EF-A470-42DA-9262-8AFB7E3E4DE5"}
 */
function OnShow_Laden (firstShow, event) {
	
	var fsTabelle = databaseManager.getFoundSet("bib_testdaten","titel");
	v_datensaetze = databaseManager.getTableCount(fsTabelle);
}
