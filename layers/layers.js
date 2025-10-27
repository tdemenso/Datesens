var wms_layers = [];

var lyr_ESRIBaseMap_20251027_103500_0 = new ol.layer.Group({
  title: 'ESRI World Imagery (Hybrid)',
  opacity: 0.7,
  layers: [
    // Satellite imagery (base)
    new ol.layer.Tile({
      opacity: 1,
      title: 'ESRI World Imagery (satellite)',
      source: new ol.source.XYZ({
        attributions: 'Tiles © Esri',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        projection: 'EPSG:3857',
        maxZoom: 19,
        crossOrigin: 'anonymous'
      })
    }),
    // Labels / reference layer on top
    new ol.layer.Tile({
      opacity: 1,
      title: 'ESRI Reference (labels)',
      source: new ol.source.XYZ({
        attributions: 'Labels © Esri',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        projection: 'EPSG:3857',
        maxZoom: 19,
        crossOrigin: 'anonymous'
      }),
      declutter: true
    })
  ]
});
var format_ProcenteSENS_1 = new ol.format.GeoJSON();
var features_ProcenteSENS_1 = format_ProcenteSENS_1.readFeatures(json_ProcenteSENS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProcenteSENS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProcenteSENS_1.addFeatures(features_ProcenteSENS_1);
var lyr_ProcenteSENS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProcenteSENS_1, 
                style: style_ProcenteSENS_1,
                popuplayertitle: 'Procente SENS',
                interactive: true,
    title: 'Procente SENS<br />\
    <img src="styles/legend/ProcenteSENS_1_0.png" /> 3 - 4<br />\
    <img src="styles/legend/ProcenteSENS_1_1.png" /> 4 - 5<br />\
    <img src="styles/legend/ProcenteSENS_1_2.png" /> 5 - 6<br />\
    <img src="styles/legend/ProcenteSENS_1_3.png" /> 6 - 9<br />\
    <img src="styles/legend/ProcenteSENS_1_4.png" /> 9 - 14<br />' });
var format_Seciidevot_2 = new ol.format.GeoJSON();
var features_Seciidevot_2 = format_Seciidevot_2.readFeatures(json_Seciidevot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seciidevot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seciidevot_2.addFeatures(features_Seciidevot_2);
var lyr_Seciidevot_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seciidevot_2, 
                style: style_Seciidevot_2,
                popuplayertitle: 'Secții de vot',
                interactive: false,
                title: '<img src="styles/legend/Seciidevot_2.png" /> Secții de vot'
            });
var format_Limitesectoare_3 = new ol.format.GeoJSON();
var features_Limitesectoare_3 = format_Limitesectoare_3.readFeatures(json_Limitesectoare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesectoare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesectoare_3.addFeatures(features_Limitesectoare_3);
var lyr_Limitesectoare_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesectoare_3, 
                style: style_Limitesectoare_3,
                popuplayertitle: 'Limite sectoare',
                interactive: false,
                title: '<img src="styles/legend/Limitesectoare_3.png" /> Limite sectoare'
            });
var format_Metrou_4 = new ol.format.GeoJSON();
var features_Metrou_4 = format_Metrou_4.readFeatures(json_Metrou_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metrou_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metrou_4.addFeatures(features_Metrou_4);
var lyr_Metrou_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metrou_4, 
                style: style_Metrou_4,
                popuplayertitle: 'Metrou',
                interactive: true,
                title: '<img src="styles/legend/Metrou_4.png" /> Metrou'
            });
var format_Clip_5 = new ol.format.GeoJSON();
var features_Clip_5 = format_Clip_5.readFeatures(json_Clip_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clip_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clip_5.addFeatures(features_Clip_5);
var lyr_Clip_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clip_5, 
                style: style_Clip_5,
                popuplayertitle: 'Clip',
                interactive: false,
                title: '<img src="styles/legend/Clip_5.png" /> Clip'
            });

lyr_ESRIBaseMap_20251027_103500_0.setVisible(true);lyr_ProcenteSENS_1.setVisible(true);lyr_Seciidevot_2.setVisible(true);lyr_Limitesectoare_3.setVisible(true);lyr_Metrou_4.setVisible(true);lyr_Clip_5.setVisible(true);
var layersList = [lyr_ESRIBaseMap_20251027_103500_0,lyr_ProcenteSENS_1,lyr_Seciidevot_2,lyr_Limitesectoare_3,lyr_Metrou_4,lyr_Clip_5];
lyr_ProcenteSENS_1.set('fieldAliases', {'fid': 'fid', 'PRECINT': 'PRECINT', 'TOTAL': 'TOTAL', 'UDMR': 'UDMR', 'PNL': 'PNL', 'FD': 'FD', 'AUR': 'AUR', 'USR': 'USR', 'PSD': 'PSD', 'POT': 'POT', 'REPER': 'REPER', 'SOS': 'SOS', 'SENS': 'SENS', 'DREPT': 'DREPT', 'UDMRproc': 'UDMRproc', 'PNLproc': 'PNLproc', 'Fdproc': 'Fdproc', 'AURproc': 'AURproc', 'USRproc': 'USRproc', 'PSDproc': 'PSDproc', 'POTproc': 'POTproc', 'REPERproc': 'REPERproc', 'SOSproc': 'SOSproc', 'SENSproc': 'SENSproc', 'DREPTproc': 'DREPTproc', 'x': 'x', 'y': 'y', 'prc': 'prc', 'SENSvsUSR': 'SENSvsUSR', 'SENSvsAUR': 'SENSvsAUR', 'SENSvsPSD': 'SENSvsPSD', 'SENSvsPNL': 'SENSvsPNL', 'Compare': 'Compare', });
lyr_Seciidevot_2.set('fieldAliases', {'fid': 'fid', 'PRECINT': 'PRECINT', 'TOTAL': 'TOTAL', 'UDMR': 'UDMR', 'PNL': 'PNL', 'FD': 'FD', 'AUR': 'AUR', 'USR': 'USR', 'PSD': 'PSD', 'POT': 'POT', 'REPER': 'REPER', 'SOS': 'SOS', 'SENS': 'SENS', 'DREPT': 'DREPT', 'UDMRproc': 'UDMRproc', 'PNLproc': 'PNLproc', 'Fdproc': 'Fdproc', 'AURproc': 'AURproc', 'USRproc': 'USRproc', 'PSDproc': 'PSDproc', 'POTproc': 'POTproc', 'REPERproc': 'REPERproc', 'SOSproc': 'SOSproc', 'SENSproc': 'SENSproc', 'DREPTproc': 'DREPTproc', 'x': 'x', 'y': 'y', });
lyr_Limitesectoare_3.set('fieldAliases', {'natcode': 'natcode', 'name': 'name', 'natLevName': 'natLevName', 'countyId': 'countyId', 'countyCode': 'countyCode', 'county': 'county', 'countyMn': 'countyMn', 'regionId': 'regionId', 'regionCode': 'regionCode', 'region': 'region', 'pop2011': 'pop2011', 'pop2012': 'pop2012', 'pop2013': 'pop2013', 'pop2014': 'pop2014', 'pop2015': 'pop2015', 'pop2020': 'pop2020', 'version': 'version', });
lyr_Metrou_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Clip_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ProcenteSENS_1.set('fieldImages', {'fid': 'TextEdit', 'PRECINT': 'TextEdit', 'TOTAL': 'Range', 'UDMR': 'Range', 'PNL': 'Range', 'FD': 'Range', 'AUR': 'Range', 'USR': 'Range', 'PSD': 'Range', 'POT': 'Range', 'REPER': 'Range', 'SOS': 'Range', 'SENS': 'Range', 'DREPT': 'Range', 'UDMRproc': 'TextEdit', 'PNLproc': 'TextEdit', 'Fdproc': 'TextEdit', 'AURproc': 'TextEdit', 'USRproc': 'TextEdit', 'PSDproc': 'TextEdit', 'POTproc': 'TextEdit', 'REPERproc': 'TextEdit', 'SOSproc': 'TextEdit', 'SENSproc': 'TextEdit', 'DREPTproc': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'prc': 'Range', 'SENSvsUSR': 'Range', 'SENSvsAUR': 'Range', 'SENSvsPSD': 'Range', 'SENSvsPNL': 'Range', 'Compare': 'Range', });
lyr_Seciidevot_2.set('fieldImages', {'fid': 'TextEdit', 'PRECINT': 'TextEdit', 'TOTAL': 'Range', 'UDMR': 'Range', 'PNL': 'Range', 'FD': 'Range', 'AUR': 'Range', 'USR': 'Range', 'PSD': 'Range', 'POT': 'Range', 'REPER': 'Range', 'SOS': 'Range', 'SENS': 'Range', 'DREPT': 'Range', 'UDMRproc': 'TextEdit', 'PNLproc': 'TextEdit', 'Fdproc': 'TextEdit', 'AURproc': 'TextEdit', 'USRproc': 'TextEdit', 'PSDproc': 'TextEdit', 'POTproc': 'TextEdit', 'REPERproc': 'TextEdit', 'SOSproc': 'TextEdit', 'SENSproc': 'TextEdit', 'DREPTproc': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Limitesectoare_3.set('fieldImages', {'natcode': 'TextEdit', 'name': 'TextEdit', 'natLevName': 'TextEdit', 'countyId': 'TextEdit', 'countyCode': 'TextEdit', 'county': 'TextEdit', 'countyMn': 'TextEdit', 'regionId': 'TextEdit', 'regionCode': 'TextEdit', 'region': 'TextEdit', 'pop2011': 'TextEdit', 'pop2012': 'TextEdit', 'pop2013': 'TextEdit', 'pop2014': 'TextEdit', 'pop2015': 'TextEdit', 'pop2020': 'TextEdit', 'version': 'DateTime', });
lyr_Metrou_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Clip_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_ProcenteSENS_1.set('fieldLabels', {'fid': 'hidden field', 'PRECINT': 'hidden field', 'TOTAL': 'hidden field', 'UDMR': 'hidden field', 'PNL': 'hidden field', 'FD': 'hidden field', 'AUR': 'hidden field', 'USR': 'no label', 'PSD': 'hidden field', 'POT': 'hidden field', 'REPER': 'hidden field', 'SOS': 'hidden field', 'SENS': 'hidden field', 'DREPT': 'hidden field', 'UDMRproc': 'hidden field', 'PNLproc': 'hidden field', 'Fdproc': 'hidden field', 'AURproc': 'inline label - always visible', 'USRproc': 'inline label - always visible', 'PSDproc': 'inline label - always visible', 'POTproc': 'inline label - always visible', 'REPERproc': 'inline label - always visible', 'SOSproc': 'inline label - always visible', 'SENSproc': 'inline label - always visible', 'DREPTproc': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', 'prc': 'hidden field', 'SENSvsUSR': 'inline label - always visible', 'SENSvsAUR': 'inline label - always visible', 'SENSvsPSD': 'inline label - always visible', 'SENSvsPNL': 'inline label - always visible', 'Compare': 'hidden field', });
lyr_Seciidevot_2.set('fieldLabels', {'fid': 'no label', 'PRECINT': 'no label', 'TOTAL': 'no label', 'UDMR': 'no label', 'PNL': 'no label', 'FD': 'no label', 'AUR': 'no label', 'USR': 'no label', 'PSD': 'no label', 'POT': 'no label', 'REPER': 'no label', 'SOS': 'no label', 'SENS': 'no label', 'DREPT': 'no label', 'UDMRproc': 'no label', 'PNLproc': 'no label', 'Fdproc': 'no label', 'AURproc': 'no label', 'USRproc': 'no label', 'PSDproc': 'no label', 'POTproc': 'no label', 'REPERproc': 'no label', 'SOSproc': 'no label', 'SENSproc': 'no label', 'DREPTproc': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Limitesectoare_3.set('fieldLabels', {'natcode': 'no label', 'name': 'no label', 'natLevName': 'no label', 'countyId': 'no label', 'countyCode': 'no label', 'county': 'no label', 'countyMn': 'no label', 'regionId': 'no label', 'regionCode': 'no label', 'region': 'no label', 'pop2011': 'no label', 'pop2012': 'no label', 'pop2013': 'no label', 'pop2014': 'no label', 'pop2015': 'no label', 'pop2020': 'no label', 'version': 'no label', });
lyr_Metrou_4.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'inline label - always visible', });
lyr_Clip_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Clip_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
