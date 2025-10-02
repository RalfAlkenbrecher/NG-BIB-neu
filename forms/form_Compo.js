/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B9B315AE-0EA8-462E-894C-B28CFDFF98BA"}
 */
function onActionBack(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.back();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E6E3EFE8-A897-4901-9D10-BDF7A8F3B992"}
 */
function onActionNext(event) {
	// TODO Auto-generated method stub
	scopes.svyNavigationHistory.next();

}

/**
 * TODO generated, please specify type and doc for the params
 * @param searchText
 *
 * @properties={typeid:24,uuid:"E9DCB00A-E52A-4554-BB4D-C46490478868"}
 */
function OnSearch(searchText)  {
	//  Alle Datensätze werden geladen
	if(!searchText) {
		foundset.loadAllRecords();
		return
	}
	
	// Einfache Suche über alle Felder
	var search = scopes.svySearch.createSimpleSearch(foundset)
	.setSearchText(searchText)
	.setSearchAllColumns();
	search.loadRecords(foundset);
	
}
