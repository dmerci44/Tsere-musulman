var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tseremus_1 = new ol.format.GeoJSON();
var features_tseremus_1 = format_tseremus_1.readFeatures(json_tseremus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tseremus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tseremus_1.addFeatures(features_tseremus_1);
var lyr_tseremus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tseremus_1, 
                style: style_tseremus_1,
                popuplayertitle: 'tsere mus',
                interactive: true,
                title: '<img src="styles/legend/tseremus_1.png" /> tsere mus'
            });
var format_num_2 = new ol.format.GeoJSON();
var features_num_2 = format_num_2.readFeatures(json_num_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_num_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_num_2.addFeatures(features_num_2);
var lyr_num_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_num_2, 
                style: style_num_2,
                popuplayertitle: 'num',
                interactive: true,
                title: '<img src="styles/legend/num_2.png" /> num'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_tseremus_1.setVisible(true);lyr_num_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_tseremus_1,lyr_num_2];
lyr_tseremus_1.set('fieldAliases', {'g': 'g', });
lyr_num_2.set('fieldAliases', {'su': 'su', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_tseremus_1.set('fieldImages', {'g': '', });
lyr_num_2.set('fieldImages', {'su': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_tseremus_1.set('fieldLabels', {'g': 'no label', });
lyr_num_2.set('fieldLabels', {'su': 'no label', });
lyr_num_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});