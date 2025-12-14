var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Sawah_1 = new ol.format.GeoJSON();
var features_Sawah_1 = format_Sawah_1.readFeatures(json_Sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_1.addFeatures(features_Sawah_1);
var lyr_Sawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_1, 
                style: style_Sawah_1,
                popuplayertitle: 'Sawah',
                interactive: true,
                title: '<img src="styles/legend/Sawah_1.png" /> Sawah'
            });
var format_Lapang_2 = new ol.format.GeoJSON();
var features_Lapang_2 = format_Lapang_2.readFeatures(json_Lapang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapang_2.addFeatures(features_Lapang_2);
var lyr_Lapang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapang_2, 
                style: style_Lapang_2,
                popuplayertitle: 'Lapang',
                interactive: true,
                title: '<img src="styles/legend/Lapang_2.png" /> Lapang'
            });
var format_batasdesa_3 = new ol.format.GeoJSON();
var features_batasdesa_3 = format_batasdesa_3.readFeatures(json_batasdesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_3.addFeatures(features_batasdesa_3);
var lyr_batasdesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_3, 
                style: style_batasdesa_3,
                popuplayertitle: 'batas desa',
                interactive: true,
                title: '<img src="styles/legend/batasdesa_3.png" /> batas desa'
            });
var format_RT013RW05_4 = new ol.format.GeoJSON();
var features_RT013RW05_4 = format_RT013RW05_4.readFeatures(json_RT013RW05_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT013RW05_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT013RW05_4.addFeatures(features_RT013RW05_4);
var lyr_RT013RW05_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT013RW05_4, 
                style: style_RT013RW05_4,
                popuplayertitle: 'RT 01-3 RW 05',
                interactive: true,
                title: '<img src="styles/legend/RT013RW05_4.png" /> RT 01-3 RW 05'
            });
var format_RT0104RW04_5 = new ol.format.GeoJSON();
var features_RT0104RW04_5 = format_RT0104RW04_5.readFeatures(json_RT0104RW04_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0104RW04_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0104RW04_5.addFeatures(features_RT0104RW04_5);
var lyr_RT0104RW04_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0104RW04_5, 
                style: style_RT0104RW04_5,
                popuplayertitle: 'RT 01-04 RW 04',
                interactive: true,
                title: '<img src="styles/legend/RT0104RW04_5.png" /> RT 01-04 RW 04'
            });
var format_RT0105RW03_6 = new ol.format.GeoJSON();
var features_RT0105RW03_6 = format_RT0105RW03_6.readFeatures(json_RT0105RW03_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0105RW03_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0105RW03_6.addFeatures(features_RT0105RW03_6);
var lyr_RT0105RW03_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0105RW03_6, 
                style: style_RT0105RW03_6,
                popuplayertitle: 'RT 01-05 RW 03',
                interactive: true,
                title: '<img src="styles/legend/RT0105RW03_6.png" /> RT 01-05 RW 03'
            });
var format_RT0107Rw02_7 = new ol.format.GeoJSON();
var features_RT0107Rw02_7 = format_RT0107Rw02_7.readFeatures(json_RT0107Rw02_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0107Rw02_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0107Rw02_7.addFeatures(features_RT0107Rw02_7);
var lyr_RT0107Rw02_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0107Rw02_7, 
                style: style_RT0107Rw02_7,
                popuplayertitle: 'RT 01-07 Rw 02',
                interactive: true,
                title: '<img src="styles/legend/RT0107Rw02_7.png" /> RT 01-07 Rw 02'
            });
var format_RT0107RW01_8 = new ol.format.GeoJSON();
var features_RT0107RW01_8 = format_RT0107RW01_8.readFeatures(json_RT0107RW01_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT0107RW01_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT0107RW01_8.addFeatures(features_RT0107RW01_8);
var lyr_RT0107RW01_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT0107RW01_8, 
                style: style_RT0107RW01_8,
                popuplayertitle: 'RT 01-07 RW 01',
                interactive: true,
                title: '<img src="styles/legend/RT0107RW01_8.png" /> RT 01-07 RW 01'
            });
var format_BatasWilayahRw05_9 = new ol.format.GeoJSON();
var features_BatasWilayahRw05_9 = format_BatasWilayahRw05_9.readFeatures(json_BatasWilayahRw05_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw05_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw05_9.addFeatures(features_BatasWilayahRw05_9);
var lyr_BatasWilayahRw05_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw05_9, 
                style: style_BatasWilayahRw05_9,
                popuplayertitle: 'Batas Wilayah Rw 05',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw05_9.png" /> Batas Wilayah Rw 05'
            });
var format_BatasWilayahRw04_10 = new ol.format.GeoJSON();
var features_BatasWilayahRw04_10 = format_BatasWilayahRw04_10.readFeatures(json_BatasWilayahRw04_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw04_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw04_10.addFeatures(features_BatasWilayahRw04_10);
var lyr_BatasWilayahRw04_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw04_10, 
                style: style_BatasWilayahRw04_10,
                popuplayertitle: 'Batas Wilayah Rw 04',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw04_10.png" /> Batas Wilayah Rw 04'
            });
var format_BatasWilayahRw03_11 = new ol.format.GeoJSON();
var features_BatasWilayahRw03_11 = format_BatasWilayahRw03_11.readFeatures(json_BatasWilayahRw03_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw03_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw03_11.addFeatures(features_BatasWilayahRw03_11);
var lyr_BatasWilayahRw03_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw03_11, 
                style: style_BatasWilayahRw03_11,
                popuplayertitle: 'Batas Wilayah Rw 03',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw03_11.png" /> Batas Wilayah Rw 03'
            });
var format_BatasWilayahRw02_12 = new ol.format.GeoJSON();
var features_BatasWilayahRw02_12 = format_BatasWilayahRw02_12.readFeatures(json_BatasWilayahRw02_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw02_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw02_12.addFeatures(features_BatasWilayahRw02_12);
var lyr_BatasWilayahRw02_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw02_12, 
                style: style_BatasWilayahRw02_12,
                popuplayertitle: 'Batas Wilayah Rw 02',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw02_12.png" /> Batas Wilayah Rw 02'
            });
var format_BatasWilayahRw01_13 = new ol.format.GeoJSON();
var features_BatasWilayahRw01_13 = format_BatasWilayahRw01_13.readFeatures(json_BatasWilayahRw01_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahRw01_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahRw01_13.addFeatures(features_BatasWilayahRw01_13);
var lyr_BatasWilayahRw01_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahRw01_13, 
                style: style_BatasWilayahRw01_13,
                popuplayertitle: 'Batas Wilayah Rw 01',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahRw01_13.png" /> Batas Wilayah Rw 01'
            });
var format_RumahRT06_14 = new ol.format.GeoJSON();
var features_RumahRT06_14 = format_RumahRT06_14.readFeatures(json_RumahRT06_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT06_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT06_14.addFeatures(features_RumahRT06_14);
var lyr_RumahRT06_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRT06_14, 
                style: style_RumahRT06_14,
                popuplayertitle: 'Rumah RT 06',
                interactive: true,
                title: '<img src="styles/legend/RumahRT06_14.png" /> Rumah RT 06'
            });
var format_Rumahrt6_15 = new ol.format.GeoJSON();
var features_Rumahrt6_15 = format_Rumahrt6_15.readFeatures(json_Rumahrt6_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumahrt6_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumahrt6_15.addFeatures(features_Rumahrt6_15);
var lyr_Rumahrt6_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumahrt6_15, 
                style: style_Rumahrt6_15,
                popuplayertitle: 'Rumah rt 6',
                interactive: true,
                title: '<img src="styles/legend/Rumahrt6_15.png" /> Rumah rt 6'
            });
var format_RumahRW02_16 = new ol.format.GeoJSON();
var features_RumahRW02_16 = format_RumahRW02_16.readFeatures(json_RumahRW02_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRW02_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRW02_16.addFeatures(features_RumahRW02_16);
var lyr_RumahRW02_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRW02_16, 
                style: style_RumahRW02_16,
                popuplayertitle: 'Rumah RW 02',
                interactive: true,
                title: '<img src="styles/legend/RumahRW02_16.png" /> Rumah RW 02'
            });
var format_LapanganDesaBantarwuni_17 = new ol.format.GeoJSON();
var features_LapanganDesaBantarwuni_17 = format_LapanganDesaBantarwuni_17.readFeatures(json_LapanganDesaBantarwuni_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganDesaBantarwuni_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganDesaBantarwuni_17.addFeatures(features_LapanganDesaBantarwuni_17);
var lyr_LapanganDesaBantarwuni_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganDesaBantarwuni_17, 
                style: style_LapanganDesaBantarwuni_17,
                popuplayertitle: 'Lapangan Desa Bantarwuni',
                interactive: true,
                title: '<img src="styles/legend/LapanganDesaBantarwuni_17.png" /> Lapangan Desa Bantarwuni'
            });
var format_RumahWarga_18 = new ol.format.GeoJSON();
var features_RumahWarga_18 = format_RumahWarga_18.readFeatures(json_RumahWarga_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahWarga_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahWarga_18.addFeatures(features_RumahWarga_18);
var lyr_RumahWarga_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahWarga_18, 
                style: style_RumahWarga_18,
                popuplayertitle: 'Rumah Warga ',
                interactive: true,
                title: '<img src="styles/legend/RumahWarga_18.png" /> Rumah Warga '
            });
var format_TPU_19 = new ol.format.GeoJSON();
var features_TPU_19 = format_TPU_19.readFeatures(json_TPU_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPU_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_19.addFeatures(features_TPU_19);
var lyr_TPU_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_19, 
                style: style_TPU_19,
                popuplayertitle: 'TPU',
                interactive: true,
                title: '<img src="styles/legend/TPU_19.png" /> TPU'
            });
var format_FasilitasLain_20 = new ol.format.GeoJSON();
var features_FasilitasLain_20 = format_FasilitasLain_20.readFeatures(json_FasilitasLain_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasLain_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasLain_20.addFeatures(features_FasilitasLain_20);
var lyr_FasilitasLain_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasLain_20, 
                style: style_FasilitasLain_20,
                popuplayertitle: 'Fasilitas Lain',
                interactive: true,
                title: '<img src="styles/legend/FasilitasLain_20.png" /> Fasilitas Lain'
            });
var format_UMKM_21 = new ol.format.GeoJSON();
var features_UMKM_21 = format_UMKM_21.readFeatures(json_UMKM_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_21.addFeatures(features_UMKM_21);
var lyr_UMKM_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_21, 
                style: style_UMKM_21,
                popuplayertitle: 'UMKM',
                interactive: true,
                title: '<img src="styles/legend/UMKM_21.png" /> UMKM'
            });
var format_TmptIbadah_22 = new ol.format.GeoJSON();
var features_TmptIbadah_22 = format_TmptIbadah_22.readFeatures(json_TmptIbadah_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TmptIbadah_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TmptIbadah_22.addFeatures(features_TmptIbadah_22);
var lyr_TmptIbadah_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TmptIbadah_22, 
                style: style_TmptIbadah_22,
                popuplayertitle: 'Tmpt Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TmptIbadah_22.png" /> Tmpt Ibadah'
            });
var format_FslitasPendidikan_23 = new ol.format.GeoJSON();
var features_FslitasPendidikan_23 = format_FslitasPendidikan_23.readFeatures(json_FslitasPendidikan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FslitasPendidikan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FslitasPendidikan_23.addFeatures(features_FslitasPendidikan_23);
var lyr_FslitasPendidikan_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FslitasPendidikan_23, 
                style: style_FslitasPendidikan_23,
                popuplayertitle: 'Fslitas Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/FslitasPendidikan_23.png" /> Fslitas Pendidikan'
            });
var format_FasilitasKesehatan_24 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_24 = format_FasilitasKesehatan_24.readFeatures(json_FasilitasKesehatan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_24.addFeatures(features_FasilitasKesehatan_24);
var lyr_FasilitasKesehatan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_24, 
                style: style_FasilitasKesehatan_24,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_24.png" /> Fasilitas Kesehatan'
            });
var format_RumahEkarisma_25 = new ol.format.GeoJSON();
var features_RumahEkarisma_25 = format_RumahEkarisma_25.readFeatures(json_RumahEkarisma_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahEkarisma_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahEkarisma_25.addFeatures(features_RumahEkarisma_25);
var lyr_RumahEkarisma_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahEkarisma_25, 
                style: style_RumahEkarisma_25,
                popuplayertitle: 'Rumah Ekarisma',
                interactive: true,
                title: '<img src="styles/legend/RumahEkarisma_25.png" /> Rumah Ekarisma'
            });
var format_KantorBalaiDesa_26 = new ol.format.GeoJSON();
var features_KantorBalaiDesa_26 = format_KantorBalaiDesa_26.readFeatures(json_KantorBalaiDesa_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorBalaiDesa_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBalaiDesa_26.addFeatures(features_KantorBalaiDesa_26);
var lyr_KantorBalaiDesa_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorBalaiDesa_26, 
                style: style_KantorBalaiDesa_26,
                popuplayertitle: 'Kantor Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/KantorBalaiDesa_26.png" /> Kantor Balai Desa'
            });
var format_RumahKepalaDesa_27 = new ol.format.GeoJSON();
var features_RumahKepalaDesa_27 = format_RumahKepalaDesa_27.readFeatures(json_RumahKepalaDesa_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKepalaDesa_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKepalaDesa_27.addFeatures(features_RumahKepalaDesa_27);
var lyr_RumahKepalaDesa_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKepalaDesa_27, 
                style: style_RumahKepalaDesa_27,
                popuplayertitle: 'Rumah Kepala Desa',
                interactive: true,
                title: '<img src="styles/legend/RumahKepalaDesa_27.png" /> Rumah Kepala Desa'
            });
var format_AliranSungai_28 = new ol.format.GeoJSON();
var features_AliranSungai_28 = format_AliranSungai_28.readFeatures(json_AliranSungai_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AliranSungai_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AliranSungai_28.addFeatures(features_AliranSungai_28);
var lyr_AliranSungai_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AliranSungai_28, 
                style: style_AliranSungai_28,
                popuplayertitle: 'AliranSungai',
                interactive: true,
                title: '<img src="styles/legend/AliranSungai_28.png" /> AliranSungai'
            });
var format_JalanKecil_29 = new ol.format.GeoJSON();
var features_JalanKecil_29 = format_JalanKecil_29.readFeatures(json_JalanKecil_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKecil_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKecil_29.addFeatures(features_JalanKecil_29);
var lyr_JalanKecil_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKecil_29, 
                style: style_JalanKecil_29,
                popuplayertitle: 'Jalan Kecil',
                interactive: true,
                title: '<img src="styles/legend/JalanKecil_29.png" /> Jalan Kecil'
            });
var format_JalanPerum_30 = new ol.format.GeoJSON();
var features_JalanPerum_30 = format_JalanPerum_30.readFeatures(json_JalanPerum_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerum_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerum_30.addFeatures(features_JalanPerum_30);
var lyr_JalanPerum_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerum_30, 
                style: style_JalanPerum_30,
                popuplayertitle: 'Jalan Perum',
                interactive: true,
                title: '<img src="styles/legend/JalanPerum_30.png" /> Jalan Perum'
            });
var format_JlDesa_31 = new ol.format.GeoJSON();
var features_JlDesa_31 = format_JlDesa_31.readFeatures(json_JlDesa_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlDesa_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlDesa_31.addFeatures(features_JlDesa_31);
var lyr_JlDesa_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlDesa_31, 
                style: style_JlDesa_31,
                popuplayertitle: 'Jl.Desa',
                interactive: true,
                title: '<img src="styles/legend/JlDesa_31.png" /> Jl.Desa'
            });
var format_JlUtamaashp_32 = new ol.format.GeoJSON();
var features_JlUtamaashp_32 = format_JlUtamaashp_32.readFeatures(json_JlUtamaashp_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlUtamaashp_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlUtamaashp_32.addFeatures(features_JlUtamaashp_32);
var lyr_JlUtamaashp_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlUtamaashp_32, 
                style: style_JlUtamaashp_32,
                popuplayertitle: 'Jl.Utamaashp',
                interactive: true,
                title: '<img src="styles/legend/JlUtamaashp_32.png" /> Jl.Utamaashp'
            });
var format_desa_bantarwuni_poly_33 = new ol.format.GeoJSON();
var features_desa_bantarwuni_poly_33 = format_desa_bantarwuni_poly_33.readFeatures(json_desa_bantarwuni_poly_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_bantarwuni_poly_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_bantarwuni_poly_33.addFeatures(features_desa_bantarwuni_poly_33);
var lyr_desa_bantarwuni_poly_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_bantarwuni_poly_33, 
                style: style_desa_bantarwuni_poly_33,
                popuplayertitle: 'desa_bantarwuni_poly',
                interactive: true,
                title: '<img src="styles/legend/desa_bantarwuni_poly_33.png" /> desa_bantarwuni_poly'
            });
var format_BatasKecamatanKembaran_34 = new ol.format.GeoJSON();
var features_BatasKecamatanKembaran_34 = format_BatasKecamatanKembaran_34.readFeatures(json_BatasKecamatanKembaran_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanKembaran_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanKembaran_34.addFeatures(features_BatasKecamatanKembaran_34);
var lyr_BatasKecamatanKembaran_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanKembaran_34, 
                style: style_BatasKecamatanKembaran_34,
                popuplayertitle: 'Batas Kecamatan Kembaran',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanKembaran_34.png" /> Batas Kecamatan Kembaran'
            });
var group_Line = new ol.layer.Group({
                                layers: [lyr_AliranSungai_28,lyr_JalanKecil_29,lyr_JalanPerum_30,lyr_JlDesa_31,lyr_JlUtamaashp_32,],
                                fold: 'close',
                                title: 'Line'});
var group_Pointt = new ol.layer.Group({
                                layers: [lyr_LapanganDesaBantarwuni_17,lyr_RumahWarga_18,lyr_TPU_19,lyr_FasilitasLain_20,lyr_UMKM_21,lyr_TmptIbadah_22,lyr_FslitasPendidikan_23,lyr_FasilitasKesehatan_24,lyr_RumahEkarisma_25,lyr_KantorBalaiDesa_26,lyr_RumahKepalaDesa_27,],
                                fold: 'close',
                                title: 'Pointt'});
var group_RumahRW = new ol.layer.Group({
                                layers: [lyr_RumahRW02_16,],
                                fold: 'close',
                                title: 'Rumah RW'});
var group_RumahRT = new ol.layer.Group({
                                layers: [lyr_RumahRT06_14,lyr_Rumahrt6_15,],
                                fold: 'close',
                                title: 'Rumah RT'});
var group_RW = new ol.layer.Group({
                                layers: [lyr_BatasWilayahRw05_9,lyr_BatasWilayahRw04_10,lyr_BatasWilayahRw03_11,lyr_BatasWilayahRw02_12,lyr_BatasWilayahRw01_13,],
                                fold: 'close',
                                title: 'RW'});
var group_RT = new ol.layer.Group({
                                layers: [lyr_RT013RW05_4,lyr_RT0104RW04_5,lyr_RT0105RW03_6,lyr_RT0107Rw02_7,lyr_RT0107RW01_8,],
                                fold: 'open',
                                title: 'RT'});

lyr_GoogleMaps_0.setVisible(true);lyr_Sawah_1.setVisible(true);lyr_Lapang_2.setVisible(true);lyr_batasdesa_3.setVisible(true);lyr_RT013RW05_4.setVisible(true);lyr_RT0104RW04_5.setVisible(true);lyr_RT0105RW03_6.setVisible(true);lyr_RT0107Rw02_7.setVisible(true);lyr_RT0107RW01_8.setVisible(true);lyr_BatasWilayahRw05_9.setVisible(true);lyr_BatasWilayahRw04_10.setVisible(true);lyr_BatasWilayahRw03_11.setVisible(true);lyr_BatasWilayahRw02_12.setVisible(true);lyr_BatasWilayahRw01_13.setVisible(true);lyr_RumahRT06_14.setVisible(true);lyr_Rumahrt6_15.setVisible(true);lyr_RumahRW02_16.setVisible(true);lyr_LapanganDesaBantarwuni_17.setVisible(true);lyr_RumahWarga_18.setVisible(true);lyr_TPU_19.setVisible(true);lyr_FasilitasLain_20.setVisible(true);lyr_UMKM_21.setVisible(true);lyr_TmptIbadah_22.setVisible(true);lyr_FslitasPendidikan_23.setVisible(true);lyr_FasilitasKesehatan_24.setVisible(true);lyr_RumahEkarisma_25.setVisible(true);lyr_KantorBalaiDesa_26.setVisible(true);lyr_RumahKepalaDesa_27.setVisible(true);lyr_AliranSungai_28.setVisible(true);lyr_JalanKecil_29.setVisible(true);lyr_JalanPerum_30.setVisible(true);lyr_JlDesa_31.setVisible(true);lyr_JlUtamaashp_32.setVisible(true);lyr_desa_bantarwuni_poly_33.setVisible(true);lyr_BatasKecamatanKembaran_34.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Sawah_1,lyr_Lapang_2,lyr_batasdesa_3,group_RT,group_RW,group_RumahRT,group_RumahRW,group_Pointt,group_Line,lyr_desa_bantarwuni_poly_33,lyr_BatasKecamatanKembaran_34];
lyr_Sawah_1.set('fieldAliases', {'id': 'id', 'Pemilik': 'Pemilik', 'Luas': 'Luas', });
lyr_Lapang_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_batasdesa_3.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', 'Kode Pos': 'Kode Pos', });
lyr_RT013RW05_4.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RT0104RW04_5.set('fieldAliases', {'Nama': 'Nama', 'RW': 'RW', });
lyr_RT0105RW03_6.set('fieldAliases', {'RW': 'RW', 'Nama': 'Nama', });
lyr_RT0107Rw02_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Rw': 'Rw', });
lyr_RT0107RW01_8.set('fieldAliases', {'Nama': 'Nama', 'Rw': 'Rw', });
lyr_BatasWilayahRw05_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah Rt': 'Jumlah Rt', });
lyr_BatasWilayahRw04_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_BatasWilayahRw03_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah rt': 'Jumlah rt', });
lyr_BatasWilayahRw02_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_BatasWilayahRw01_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jumlah RT': 'Jumlah RT', });
lyr_RumahRT06_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_Rumahrt6_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_RumahRW02_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_LapanganDesaBantarwuni_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_RumahWarga_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TPU_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_FasilitasLain_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', });
lyr_UMKM_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_TmptIbadah_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kode Pos': 'Kode Pos', });
lyr_FslitasPendidikan_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp.': 'No Tlp.', 'Kode Pos': 'Kode Pos', });
lyr_FasilitasKesehatan_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_RumahEkarisma_25.set('fieldAliases', {'id': 'id', 'Alamat': 'Alamat', });
lyr_KantorBalaiDesa_26.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Email': 'Email', 'No Tlp': 'No Tlp', 'Kode Pos': 'Kode Pos', });
lyr_RumahKepalaDesa_27.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'No. Tlp': 'No. Tlp', 'Kode Pos': 'Kode Pos', });
lyr_AliranSungai_28.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanKecil_29.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JalanPerum_30.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlDesa_31.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_JlUtamaashp_32.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_desa_bantarwuni_poly_33.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access_roo': 'access_roo', 'name': 'name', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', });
lyr_BatasKecamatanKembaran_34.set('fieldAliases', {'Nama': 'Nama', 'Desa/Kel.': 'Desa/Kel.', 'Kabupaten': 'Kabupaten', 'Kode Bps': 'Kode Bps', });
lyr_Sawah_1.set('fieldImages', {'id': 'TextEdit', 'Pemilik': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Lapang_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', });
lyr_batasdesa_3.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RT013RW05_4.set('fieldImages', {'RW': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT0104RW04_5.set('fieldImages', {'Nama': '', 'RW': '', });
lyr_RT0105RW03_6.set('fieldImages', {'RW': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT0107Rw02_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Rw': 'TextEdit', });
lyr_RT0107RW01_8.set('fieldImages', {'Nama': 'TextEdit', 'Rw': 'TextEdit', });
lyr_BatasWilayahRw05_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah Rt': 'TextEdit', });
lyr_BatasWilayahRw04_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_BatasWilayahRw03_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah rt': 'TextEdit', });
lyr_BatasWilayahRw02_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_BatasWilayahRw01_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jumlah RT': 'TextEdit', });
lyr_RumahRT06_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_Rumahrt6_15.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'Kode Pos': '', });
lyr_RumahRW02_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_LapanganDesaBantarwuni_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_RumahWarga_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TPU_19.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', });
lyr_FasilitasLain_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', });
lyr_UMKM_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_TmptIbadah_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_FslitasPendidikan_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp.': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_FasilitasKesehatan_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RumahEkarisma_25.set('fieldImages', {'id': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_KantorBalaiDesa_26.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Email': 'TextEdit', 'No Tlp': 'TextEdit', 'Kode Pos': 'TextEdit', });
lyr_RumahKepalaDesa_27.set('fieldImages', {'id': '', 'Nama': '', 'Alamat': '', 'No. Tlp': '', 'Kode Pos': '', });
lyr_AliranSungai_28.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanKecil_29.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JalanPerum_30.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JlDesa_31.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_JlUtamaashp_32.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_desa_bantarwuni_poly_33.set('fieldImages', {'osm_id': '', 'osm_type': '', 'building': '', 'access_roo': '', 'name': '', 'roof_mater': '', 'building_m': '', 'addr_house': '', 'addr_stree': '', });
lyr_BatasKecamatanKembaran_34.set('fieldImages', {'Nama': 'TextEdit', 'Desa/Kel.': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kode Bps': 'TextEdit', });
lyr_Sawah_1.set('fieldLabels', {'id': 'no label', 'Pemilik': 'no label', 'Luas': 'no label', });
lyr_Lapang_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_batasdesa_3.set('fieldLabels', {'Nama': 'no label', 'Kecamatan': 'no label', 'Kode Pos': 'no label', });
lyr_RT013RW05_4.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RT0104RW04_5.set('fieldLabels', {'Nama': 'no label', 'RW': 'no label', });
lyr_RT0105RW03_6.set('fieldLabels', {'RW': 'no label', 'Nama': 'no label', });
lyr_RT0107Rw02_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Rw': 'no label', });
lyr_RT0107RW01_8.set('fieldLabels', {'Nama': 'no label', 'Rw': 'no label', });
lyr_BatasWilayahRw05_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah Rt': 'no label', });
lyr_BatasWilayahRw04_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_BatasWilayahRw03_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah rt': 'no label', });
lyr_BatasWilayahRw02_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_BatasWilayahRw01_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jumlah RT': 'no label', });
lyr_RumahRT06_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_Rumahrt6_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_RumahRW02_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_LapanganDesaBantarwuni_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_RumahWarga_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TPU_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', });
lyr_FasilitasLain_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', });
lyr_UMKM_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_TmptIbadah_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kode Pos': 'no label', });
lyr_FslitasPendidikan_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp.': 'no label', 'Kode Pos': 'no label', });
lyr_FasilitasKesehatan_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_RumahEkarisma_25.set('fieldLabels', {'id': 'no label', 'Alamat': 'no label', });
lyr_KantorBalaiDesa_26.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Email': 'no label', 'No Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_RumahKepalaDesa_27.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'No. Tlp': 'no label', 'Kode Pos': 'no label', });
lyr_AliranSungai_28.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JalanKecil_29.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JalanPerum_30.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlDesa_31.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_JlUtamaashp_32.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_desa_bantarwuni_poly_33.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access_roo': 'no label', 'name': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', });
lyr_BatasKecamatanKembaran_34.set('fieldLabels', {'Nama': 'no label', 'Desa/Kel.': 'no label', 'Kabupaten': 'no label', 'Kode Bps': 'header label - visible with data', });
lyr_BatasKecamatanKembaran_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});