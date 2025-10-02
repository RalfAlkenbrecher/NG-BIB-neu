/**
 * @properties={type:12,typeid:36,uuid:"812568AC-D80B-407A-8BFB-0B3DE96E974A"}
 */
function alle_namen()
 {
 	var lcRetName = "";
 	if(utils.hasRecords(titel_to_titel_autor)){	
 		var r_wert = ""
 		for (var index = 1; index <= titel_to_titel_autor.getSize(); index++) {
 			var record = titel_to_titel_autor.getRecord(index);
 			if (utils.hasRecords(record.titel_autor_to_autor)){
 				// r_wert = r_wert + "; " + record.titel_autor_to_autor.name_match + " (" + record.foundset.autor_rolle + ")";
 				r_wert = r_wert + "; " + record.titel_autor_to_autor.name_match + " (" + record.autor_rolle + ")";
 			}
 		}
 		lcRetName = r_wert.substr(2);
 	}
 	return lcRetName;
 }

/**
 * @properties={type:12,typeid:36,uuid:"A0D0FCDC-BE2B-45B4-951E-30A3FFE49BC7"}
 */
function all_orte()
{
	var lcRetOrte = "";
	if(utils.hasRecords(titel_to_titel_ort)){	
		var r_ort = ""
		for (var index = 1; index <= titel_to_titel_ort.getSize(); index++) {
			var record = titel_to_titel_ort.getRecord(index);
			if (utils.hasRecords(record.titel_ort_to_verlagsort)){
				r_ort = r_ort + "; " + record.titel_ort_to_verlagsort.verlagsort;
			}
		}
		lcRetOrte = r_ort.substr(2);
	}
	return lcRetOrte;
}
