const writeFileSync = require('fs').writeFileSync;

const exporter = require('highcharts-export-server');

const options = {
  "type": "png",
  "scale": 1,
  "height": 320,
  "width": 420,
  "outfile": "./options_puppeteer.jpeg",
  "options": {
    "chart": {
      "marginRight": null,
      "events": {},
      "animation": false,
      "marginTop": 50,
      "plotBorderWidth": 1,
      "zooming": {
        "type": "xy"
      }
    },
    "title": {
      "text": "",
      "align": "left",
      "style": {
        "color": "rgb(91, 91, 91)",
        "fontSize": 18,
        "fontWeight": "normal",
        "wordWrap": "break-word",
        "fontFamily": "Tahoma,Geneva,sans-serif"
      }
    },
    "subtitle": {
      "text": "Frequency",
      "x": -30,
      "style": {
        "color": "rgb(51, 51, 51)",
        "fontSize": 12,
        "fontWeight": "normal",
        "wordWrap": "break-word",
        "fontFamily": "Arial"
      }
    },
    "credits": {
      "enabled": false
    },
    "plotOptions": {
      "boxplot": {
        "pointWidth": 12,
        "fillColor": "transparent",
        "lineWidth": 2,
        "whiskerWidth": 2,
        "medianWidth": 3,
        "stemWidth": 2,
        "pointPadding": 0.5,
        "events": {
          "lineWidth": 2
        },
        "animation": false
      },
      "scatter": {
        "events": {},
        "pointRange": 1,
        "marker": {
          "radius": 2
        },
        "animation": false
      }
    },
    "xAxis": {
      "categories": [
        "L230702",
        " L230701"
      ],
      "title": {
        "text": "Lot",
        "style": {
          "color": "rgb(51, 51, 51)",
          "fontSize": "12px",
          "fontFamily": "Arial"
        },
        "offset": 40
      },
      "plotLines": [],
      "lineColor": "rgb(170,170,170)",
      "tickColor": "rgb(170,170,170)",
      "gridLineWidth": 1,
      "gridLineDashStyle": "Solid",
      "visible": true,
      "tickWidth": 1,
      "tickmarkPlacement": "on",
      "tickLength": 6,
      "labels": {
        "rotation": 0,
        "style": {
          "color": "rgb(102, 102, 102)",
          "fontSize": "12px",
          "fontFamily": "Arial"
        }
      },
      "scrollbar": {
        "enabled": false
      }
    },
    "yAxis": {
      "title": {
        "text": "MHz",
        "align": "high",
        "rotation": 0,
        "offset": 15,
        "margin": 0,
        "y": -25,
        "style": {
          "color": "rgb(51, 51, 51)",
          "fontSize": 12,
          "fontWeight": "normal",
          "wordWrap": "break-word",
          "fontFamily": "Arial"
        }
      },
      "lineColor": "rgb(170,170,170)",
      "tickColor": "rgb(170,170,170)",
      "tickWidth": 1,
      "gridLineWidth": 1,
      "plotLines": [
        {
          "color": "red",
          "width": 1,
          "name": "high limit",
          "zIndex": 5
        },
        {
          "color": "red",
          "width": 1,
          "name": "low limit",
          "zIndex": 5
        },
        {
          "color": "green",
          "width": 1,
          "name": "test target"
        }
      ],
      "gridLineDashStyle": "Solid",
      "tickLength": 6,
      "startOnTick": true,
      "endOnTick": true,
      "labels": {
        "rotation": 0,
        "style": {
          "color": "rgb(102, 102, 102)",
          "fontSize": "12px",
          "fontFamily": "Arial"
        }
      }
    },
    "legend": {
      "enabled": true,
      "align": "right",
      "verticalAlign": "middle",
      "layout": "vertical",
      "title": {
        "text": "CellType",
        "style": {
          "fontWeight": "normal",
          "fontSize": "13px",
          "fontFamily": "Arial",
          "color": "rgb(102, 102, 102)"
        }
      },
      "itemStyle": {
        "color": "rgb(102, 102, 102)",
        "fontFamily": "Arial",
        "fontSize": "13px"
      },
      "width": "20%"
    },
    "series": [
      {
        "name": "BUF",
        "id": "obs0",
        "type": "boxplot",
        "color": "#826e9f",
        "whiskerLength": "50%",
        "data": [
          [
            442.21616,
            587.25006,
            668.43463,
            739.76874,
            961.6821
          ],
          [
            512.7559,
            655.1181,
            734.17316,
            791.81104,
            965.6693
          ]
        ]
      },
      {
        "name": "BUF",
        "type": "scatter",
        "color": "#826e9f",
        "linkedTo": "obs0",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "fillColor": "#826e9f"
        },
        "data": []
      },
      {
        "name": "BUF",
        "type": "scatter",
        "color": "#826e9f",
        "linkedTo": "obs0",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "lineColor": "#826e9f",
          "lineWidth": 2
        },
        "data": []
      },
      {
        "name": "BUF",
        "type": "scatter",
        "color": "#826e9f",
        "linkedTo": "obs0",
        "relativeXValue": true,
        "marker": {
          "symbol": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVQokWNgwAL+MzD8/8/A8B+bHBM2QXxgEGpgxOU5qtmAFQz3YAUA8zgKCs5appcAAAAASUVORK5CYII=)",
          "width": 6,
          "height": 6
        },
        "data": [
          [
            1,
            721.7245
          ],
          [
            0,
            664.4536
          ]
        ]
      },
      {
        "name": "INV",
        "id": "obs1",
        "type": "boxplot",
        "color": "#fc2512",
        "whiskerLength": "50%",
        "data": [
          [
            168.67091,
            591.24915,
            759.20416,
            929.32904,
            1436.1346
          ],
          [
            205.80392,
            649.4488,
            828.9764,
            1003.46454,
            1529.4489
          ]
        ]
      },
      {
        "name": "INV",
        "type": "scatter",
        "color": "#fc2512",
        "linkedTo": "obs1",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "fillColor": "#fc2512"
        },
        "data": []
      },
      {
        "name": "INV",
        "type": "scatter",
        "color": "#fc2512",
        "linkedTo": "obs1",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "lineColor": "#fc2512",
          "lineWidth": 2
        },
        "data": [
          [
            1,
            1536.3779
          ],
          [
            1,
            1537.0078
          ],
          [
            1,
            1542.6771
          ],
          [
            1,
            1546.4567
          ],
          [
            1,
            1554.0157
          ],
          [
            1,
            1555.9055
          ],
          [
            1,
            1559.6852
          ],
          [
            1,
            1563.4646
          ],
          [
            1,
            1565.9843
          ],
          [
            1,
            1567.2441
          ],
          [
            1,
            1569.1339
          ],
          [
            1,
            1572.9133
          ],
          [
            1,
            1573.5433
          ],
          [
            1,
            1575.4331
          ],
          [
            1,
            1576.6929
          ],
          [
            1,
            1579.8425
          ],
          [
            1,
            1582.3622
          ],
          [
            1,
            1584.252
          ],
          [
            1,
            1588.6614
          ],
          [
            1,
            1591.811
          ],
          [
            1,
            1598.7401
          ],
          [
            1,
            1601.2599
          ],
          [
            1,
            1602.5197
          ],
          [
            1,
            1603.1497
          ],
          [
            1,
            1604.4094
          ],
          [
            1,
            1605.6692
          ],
          [
            1,
            1606.2992
          ],
          [
            1,
            1610.0787
          ],
          [
            1,
            1610.7086
          ],
          [
            1,
            1616.3779
          ],
          [
            1,
            1617.6378
          ],
          [
            1,
            1618.2677
          ],
          [
            1,
            1618.8976
          ],
          [
            1,
            1619.5276
          ],
          [
            1,
            1621.4174
          ],
          [
            1,
            1626.4567
          ],
          [
            1,
            1627.7166
          ],
          [
            1,
            1630.2362
          ],
          [
            1,
            1630.8661
          ],
          [
            1,
            1632.7559
          ],
          [
            1,
            1633.3859
          ],
          [
            1,
            1635.2756
          ],
          [
            1,
            1635.9055
          ],
          [
            1,
            1639.0552
          ],
          [
            1,
            1649.1339
          ],
          [
            1,
            1650.3937
          ],
          [
            1,
            1652.9133
          ],
          [
            1,
            1667.4016
          ],
          [
            1,
            1671.1812
          ],
          [
            1,
            1695.1182
          ],
          [
            1,
            1703.937
          ],
          [
            1,
            1742.9922
          ],
          [
            1,
            1749.2914
          ],
          [
            1,
            1773.8583
          ],
          [
            0,
            1436.6216
          ],
          [
            0,
            1438.1134
          ],
          [
            0,
            1438.4437
          ],
          [
            0,
            1444.2454
          ],
          [
            0,
            1445.2217
          ],
          [
            0,
            1449.472
          ],
          [
            0,
            1449.6984
          ],
          [
            0,
            1451.299
          ],
          [
            0,
            1451.4979
          ],
          [
            0,
            1452.7488
          ],
          [
            0,
            1452.8019
          ],
          [
            0,
            1455.1985
          ],
          [
            0,
            1459.5486
          ],
          [
            0,
            1460.1912
          ],
          [
            0,
            1460.6991
          ],
          [
            0,
            1460.9482
          ],
          [
            0,
            1460.9819
          ],
          [
            0,
            1464.0719
          ],
          [
            0,
            1465.0165
          ],
          [
            0,
            1466.4054
          ],
          [
            0,
            1472.0238
          ],
          [
            0,
            1474.955
          ],
          [
            0,
            1475.9263
          ],
          [
            0,
            1477.0607
          ],
          [
            0,
            1477.5916
          ],
          [
            0,
            1480.0743
          ],
          [
            0,
            1480.3014
          ],
          [
            0,
            1482.5643
          ],
          [
            0,
            1489.2881
          ],
          [
            0,
            1492.3154
          ],
          [
            0,
            1493.1455
          ],
          [
            0,
            1495.2527
          ],
          [
            0,
            1496.0753
          ],
          [
            0,
            1496.8372
          ],
          [
            0,
            1500.9222
          ],
          [
            0,
            1505.4994
          ],
          [
            0,
            1509.5582
          ],
          [
            0,
            1509.5846
          ],
          [
            0,
            1511.5746
          ],
          [
            0,
            1514.1863
          ],
          [
            0,
            1517.0966
          ],
          [
            0,
            1521.8993
          ],
          [
            0,
            1525.6896
          ],
          [
            0,
            1527.6703
          ],
          [
            0,
            1530.6079
          ],
          [
            0,
            1532.428
          ],
          [
            0,
            1533.8619
          ],
          [
            0,
            1563.0736
          ],
          [
            0,
            1568.2173
          ],
          [
            0,
            1572.2264
          ],
          [
            0,
            1574.3767
          ],
          [
            0,
            1584.2709
          ],
          [
            0,
            1593.2562
          ],
          [
            0,
            1611.6688
          ],
          [
            0,
            1629.175
          ],
          [
            0,
            1665.7218
          ],
          [
            0,
            1742.725
          ],
          [
            0,
            1746.992
          ]
        ]
      },
      {
        "name": "INV",
        "type": "scatter",
        "color": "#fc2512",
        "linkedTo": "obs1",
        "relativeXValue": true,
        "marker": {
          "symbol": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVQokWNgwAL+MzD8/8/A8B+bHBM2QXxgEGpgxOU5qtmAFQz3YAUA8zgKCs5appcAAAAASUVORK5CYII=)",
          "width": 6,
          "height": 6
        },
        "data": [
          [
            1,
            825.0663
          ],
          [
            0,
            758.7178
          ]
        ]
      },
      {
        "name": "NAND",
        "id": "obs2",
        "type": "boxplot",
        "color": "#abae18",
        "whiskerLength": "50%",
        "data": [
          [
            234.7826,
            492.227,
            625.58453,
            792.42163,
            1242.2566
          ],
          [
            274.33072,
            538.66144,
            684.4094,
            859.44885,
            1339.2126
          ]
        ]
      },
      {
        "name": "NAND",
        "type": "scatter",
        "color": "#abae18",
        "linkedTo": "obs2",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "fillColor": "#abae18"
        },
        "data": []
      },
      {
        "name": "NAND",
        "type": "scatter",
        "color": "#abae18",
        "linkedTo": "obs2",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "lineColor": "#abae18",
          "lineWidth": 2
        },
        "data": [
          [
            1,
            1342.9922
          ],
          [
            1,
            1343.6221
          ],
          [
            1,
            1345.5118
          ],
          [
            1,
            1346.7716
          ],
          [
            1,
            1349.2914
          ],
          [
            1,
            1349.9213
          ],
          [
            1,
            1350.5511
          ],
          [
            1,
            1351.811
          ],
          [
            1,
            1353.0709
          ],
          [
            1,
            1359.3701
          ],
          [
            1,
            1360.6299
          ],
          [
            1,
            1363.7795
          ],
          [
            1,
            1365.6692
          ],
          [
            1,
            1391.4961
          ],
          [
            1,
            1406.6141
          ],
          [
            1,
            1431.1812
          ],
          [
            1,
            1451.3386
          ],
          [
            1,
            1453.2284
          ],
          [
            0,
            1251.1884
          ],
          [
            0,
            1253.0886
          ],
          [
            0,
            1254.3467
          ],
          [
            0,
            1262.758
          ],
          [
            0,
            1262.9738
          ],
          [
            0,
            1265.9023
          ],
          [
            0,
            1272.2733
          ],
          [
            0,
            1275.0304
          ],
          [
            0,
            1277.1539
          ],
          [
            0,
            1280.5715
          ],
          [
            0,
            1283.718
          ],
          [
            0,
            1298.2567
          ],
          [
            0,
            1306.2356
          ],
          [
            0,
            1309.4912
          ],
          [
            0,
            1315.3374
          ],
          [
            0,
            1316.1514
          ],
          [
            0,
            1326.1244
          ],
          [
            0,
            1339.0144
          ],
          [
            0,
            1357.6285
          ],
          [
            0,
            1386.0237
          ],
          [
            0,
            1402.7069
          ],
          [
            0,
            1411.3386
          ],
          [
            0,
            1443.2766
          ]
        ]
      },
      {
        "name": "NAND",
        "type": "scatter",
        "color": "#abae18",
        "linkedTo": "obs2",
        "relativeXValue": true,
        "marker": {
          "symbol": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVQokWNgwAL+MzD8/8/A8B+bHBM2QXxgEGpgxOU5qtmAFQz3YAUA8zgKCs5appcAAAAASUVORK5CYII=)",
          "width": 6,
          "height": 6
        },
        "data": [
          [
            1,
            711.70575
          ],
          [
            0,
            654.7
          ]
        ]
      },
      {
        "name": "NOR",
        "id": "obs3",
        "type": "boxplot",
        "color": "#6c1ec7",
        "whiskerLength": "50%",
        "data": [
          [
            222.74484,
            437.54584,
            557.91815,
            711.8959,
            1110.6649
          ],
          [
            257.6378,
            485.1181,
            615.43304,
            772.9134,
            1204.4094
          ]
        ]
      },
      {
        "name": "NOR",
        "type": "scatter",
        "color": "#6c1ec7",
        "linkedTo": "obs3",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "fillColor": "#6c1ec7"
        },
        "data": []
      },
      {
        "name": "NOR",
        "type": "scatter",
        "color": "#6c1ec7",
        "linkedTo": "obs3",
        "relativeXValue": true,
        "marker": {
          "symbol": "circle",
          "lineColor": "#6c1ec7",
          "lineWidth": 2
        },
        "data": [
          [
            1,
            1208.8188
          ],
          [
            1,
            1211.3386
          ],
          [
            1,
            1212.5984
          ],
          [
            1,
            1215.1182
          ],
          [
            1,
            1215.748
          ],
          [
            1,
            1217.0078
          ],
          [
            1,
            1217.6378
          ],
          [
            1,
            1218.8976
          ],
          [
            1,
            1219.5276
          ],
          [
            1,
            1223.3071
          ],
          [
            1,
            1225.1969
          ],
          [
            1,
            1225.8268
          ],
          [
            1,
            1227.0867
          ],
          [
            1,
            1228.3464
          ],
          [
            1,
            1231.4961
          ],
          [
            1,
            1237.1654
          ],
          [
            1,
            1237.7953
          ],
          [
            1,
            1238.4252
          ],
          [
            1,
            1241.5748
          ],
          [
            1,
            1244.7244
          ],
          [
            1,
            1245.9843
          ],
          [
            1,
            1246.6141
          ],
          [
            1,
            1247.2441
          ],
          [
            1,
            1251.0238
          ],
          [
            1,
            1252.9133
          ],
          [
            1,
            1253.5433
          ],
          [
            1,
            1254.1732
          ],
          [
            1,
            1255.4331
          ],
          [
            1,
            1256.063
          ],
          [
            1,
            1258.5826
          ],
          [
            1,
            1260.4724
          ],
          [
            1,
            1263.6221
          ],
          [
            1,
            1264.8818
          ],
          [
            1,
            1272.4409
          ],
          [
            1,
            1305.8268
          ],
          [
            1,
            1310.8661
          ],
          [
            1,
            1337.3229
          ],
          [
            1,
            1339.2126
          ],
          [
            1,
            1351.1812
          ],
          [
            0,
            1127.622
          ],
          [
            0,
            1130.7512
          ],
          [
            0,
            1133.393
          ],
          [
            0,
            1135.6744
          ],
          [
            0,
            1138.4993
          ],
          [
            0,
            1138.6874
          ],
          [
            0,
            1141.7103
          ],
          [
            0,
            1145.0829
          ],
          [
            0,
            1145.3044
          ],
          [
            0,
            1152.7443
          ],
          [
            0,
            1155.2628
          ],
          [
            0,
            1161.5793
          ],
          [
            0,
            1167.8744
          ],
          [
            0,
            1171.2947
          ],
          [
            0,
            1176.2997
          ],
          [
            0,
            1183.3093
          ],
          [
            0,
            1184.2081
          ],
          [
            0,
            1188.4487
          ],
          [
            0,
            1193.29
          ],
          [
            0,
            1194.5197
          ],
          [
            0,
            1194.9015
          ],
          [
            0,
            1196.7963
          ],
          [
            0,
            1208.0673
          ],
          [
            0,
            1212.8861
          ],
          [
            0,
            1217.9905
          ],
          [
            0,
            1218.9722
          ],
          [
            0,
            1219.9508
          ],
          [
            0,
            1220.0991
          ],
          [
            0,
            1234.058
          ],
          [
            0,
            1234.6113
          ],
          [
            0,
            1239.1318
          ],
          [
            0,
            1243.5022
          ],
          [
            0,
            1248.7255
          ],
          [
            0,
            1254.5161
          ],
          [
            0,
            1255.2478
          ],
          [
            0,
            1296.7583
          ]
        ]
      },
      {
        "name": "NOR",
        "type": "scatter",
        "color": "#6c1ec7",
        "linkedTo": "obs3",
        "relativeXValue": true,
        "marker": {
          "symbol": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVQokWNgwAL+MzD8/8/A8B+bHBM2QXxgEGpgxOU5qtmAFQz3YAUA8zgKCs5appcAAAAASUVORK5CYII=)",
          "width": 6,
          "height": 6
        },
        "data": [
          [
            1,
            646.3546
          ],
          [
            0,
            592.84705
          ]
        ]
      }
    ]
  }
};
// Export settings with new options structure (Puppeteer)
const exportSettings = {
  pool: {
    minWorkers: 1,
    maxWorkers: 1
  },
  export: options,
  customLogic: {
    allowCodeExecution: true,
    allowFileResources: true,
    customCode: './custom_code.js',
    resources: {
      js: "Highcharts.charts[0].update({xAxis: {title: {text: 'Resources axis title'}}});",
      css: '.highcharts-yaxis .highcharts-axis-line { stroke-width: 2px; } .highcharts-color-0 { fill: #f7a35c; stroke: #f7a35c; }'
    }
  }
};

const start = async () => {
  try {
    // Set the new options
    const options = exporter.setOptions(exportSettings);

    // Init a pool for one export
    await exporter.initExport(options);

    // Perform an export
    await exporter.startExport(options, async (error, info) => {
      // Exit process and display error
      if (error) {
        throw error;
      }
      const { outfile, type } = info.options.export;

      // Save the base64 from a buffer to a correct image file
      writeFileSync(
        outfile,
        type !== 'svg' ? Buffer.from(info.result, 'base64') : info.result
      );

      // Kill the pool
      await exporter.killPool();
    });
  } catch (error) {
    // Log the error with stack
    exporter.logWithStack(1, error);

    // Gracefully shut down the process
    await exporter.shutdownCleanUp(1);
  }
};

start();