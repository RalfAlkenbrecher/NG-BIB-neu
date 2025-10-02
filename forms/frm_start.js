/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"39D072A2-41C8-4411-8D27-A8AB69C4C8F0"}
 */
function onHistory_neu(event) {
    var fileName = 'F:\\Eigene Dateien\\servoy_workspace_Arbeit\\NG_BIB\\medias\\\Historie.pdf';

    openFile(fileName);
}

/**
 * Opens a file from the file system using the default viewer for the fileType on the current platform. (.txt with editor, .pdf with pdf reader, .doc with word, etc.)
 * 
 * @param {String} filePath The file that will be opened
 *
 * @properties={typeid:24,uuid:"F06D0071-2AC7-457F-9833-F46BC5716B03"}
 */
function openFile(filePath) {
    var osName = application.getOSName();

    if (/Windows/.test(osName)) {
        application.executeProgram('rundll32', ['url.dll,FileProtocolHandler', filePath]);
    } else if (/Linux|Freebsd/.test(osName)) {
        application.executeProgram('mozilla', [filePath]);
    } else if (/Mac/.test(osName)) {
        application.executeProgram('open', [filePath]);
    }
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"F559DB6B-90E9-41D6-9CD0-7F352805F580"}
 */
function onDoku_neu(event) {
    var fileName = 'F:\\Eigene Dateien\\servoy_workspace_Arbeit\\NG_BIB\\medias\\\Dokumentation_NG-BIB_Servoy.xlsx';

    openFile(fileName);
}
