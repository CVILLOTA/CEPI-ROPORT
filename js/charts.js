var styleChartsTitle = {
  "font-size" : "1.6rem;",
  "color" :"#87868A;",
  "font-family": "Bebas-Bold !important;"
};
var styleChartsSubTitle = {"font-size" : "1rem;"};

window.onload = function() {
  chartKeySnapshot();
};

function chartKeySnapshot(){
  var title = document.getElementById("chartsSnapshot").innerHTML =
  "<br><tspan>Key Figures</tspan><br><br>"
  +"<text x='486' text-anchor='middle' class='highcharts-subtitle' style='color:#666666;fill:#666666;'' y='45'>"
  +"<tspan>CEPI Statistics - Status as of 2015</tspan><br>"
  +"</text>"
  +"<br><div id='table-snapshot'></div><br>";
  var table = document.getElementById("table-snapshot").innerHTML =
  "<table class='striped'>"
    +"<thead>"
      +"<tr>"
        +"<th data-field='id'><h1></h1></th>"
        +"<th data-field='id'><h1>2000</h1></th>"
        +"<th data-field='id'><h1>2005</h1></th>"
        +"<th data-field='id'><h1>2010</h1></th>"
        +"<th data-field='id'><h1>2014</h1></th>"
        +"<th data-field='id'><h1>2015</h1></th>"
      +"</tr>"
    +"</thead>"
    +"<tbody>"
      +"<tr>"
        +"<th><h1>Turnover (Million €)</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>P&B Production ('000 tonnes)</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Market Pulp ('000 tonnes)</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Share of global production</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Companies</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Mills</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Employment</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Added Value (Million €)</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Investments (Million €)</h1></th>"
        +"<th>79,388</th>"
        +"<th>74,537</th>"
        +"<th>75,790</th>"
        +"<th>78,437</th>"
        +"<th>80,241</th>"
      +"</tr>"
    +"</tbody>"
  +"</table>";

  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";

}

function chartmanufacturingSnapshot(){
  var title = document.getElementById("chartsSnapshot").innerHTML =
  "<br><tspan>Direct manufacturing cost structure of the European pulp & paper industry in 2015</tspan><br><br>"
  +"<text x='486' text-anchor='middle' class='highcharts-subtitle' style='color:#666666;fill:#666666;'' y='45'>"
  +"<tspan>CEPI Statistics - Status as of 2015</tspan><br>"
  +"</text>"
  +"<br><div id='table-snapshot'></div><br>";
  var table = document.getElementById("table-snapshot").innerHTML =
  "<table class='striped'>"
    +"<thead>"
      +"<tr>"
        +"<th data-field='id'><h1>Consumable</h1></th>"
        +"<th data-field='id'><h1>€/Tn</h1></th>"
        +"<th data-field='id'><h1>M€/Y</h1></th>"
        +"<th data-field='id'><h1>%</h1></th>"
      +"</tr>"
    +"</thead>"
    +"<tbody>"
      +"<tr>"
        +"<th><h1>Capital Cost</h1></th>"
        +"<th>47.8</th>"
        +"<th> 5,629.4 </th>"
        +"<th>9.3%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Maintenance</h1></th>"
        +"<th>40.1</th>"
        +"<th> 4,723.5 </th>"
        +"<th>7.8%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Labour</h1></th>"
        +"<th>52.1</th>"
        +"<th> 6,130.6 </th>"
        +"<th>10.2%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Electricity</h1></th>"
        +"<th>20.8</th>"
        +"<th> 2,446.5 </th>"
        +"<th>4.1%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Fuels</h1></th>"
        +"<th>45.4</th>"
        +"<th> 5,337.7 </th>"
        +"<th>8.9%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Chemicals</h1></th>"
        +"<th>67.2</th>"
        +"<th> 7,909.8 </th>"
        +"<th>13.1%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Market Pulp</h1></th>"
        +"<th>110.9</th>"
        +"<th> 13,047.7</th>"
        +"<th>21.7%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Recovered Paper</h1></th>"
        +"<th>61.6</th>"
        +"<th> 7,248.7 </th>"
        +"<th>12.0%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Wood</h1></th>"
        +"<th>66.1</th>"
        +"<th> 7,776.8 </th>"
        +"<th>12.9%</th>"
      +"</tr>"
      +"<tr>"
        +"<th><h1>Sum</h1></th>"
        +"<th>512.1</th>"
        +"<th>60,250.7</th>"
        +"<th>100.0%</th>"
      +"</tr>"
    +"</tbody>"
  +"</table>";
  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";
}

function chartprofitabilitySnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
          chart: {
              type: 'column',
              events: {
                  load: function () {
                      var label = this.renderer.label("European pulp & paper industry: EU15 + Norway+Switzerland, with around two thirds of the <br> European pulp and paper capacities represented <br>" +
                          "ROCE: Return on Capital Employed <br>" +
                          "EBITDA: Earnings Before Interest, Taxes, Depreciation and Amortization = sales - operating expenses <br> (= operating margins)")
                      .css({
                          width: 'auto',
                          fontSize: '0.7rem',
                          color:'#87868A'
                      })
                      .add();

                      label.align(Highcharts.extend(label.getBBox(), {
                          align: 'center',
                          x: 20, // offset
                          verticalAlign: 'bottom',
                          y: 0 // offset
                      }), null, 'spacingBox');

                  }
              },
              marginBottom: 120
          },
          title: {
              text: 'Profitability European Pulp & Paper Industry',
              style : styleChartsTitle
          },
          subtitle: {
            text: 'CEPI Statistics - Status as of 2015',
            style : styleChartsSubTitle
          },
          xAxis: {
              categories: [
                  '1996',
                  '2001',
                  '2006',
                  '2007',
                  '2008',
                  '2009',
                  '2010',
                  '2011',
                  '2012',
                  '2013',
                  '2014',
                  '2015'
              ],
              crosshair: true
          },
          yAxis: {
              title: {
                  text: 'In %'
              }
          },
          tooltip: {
            valueSuffix: '%'
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          series: [{
              name: 'ROCE',
              color: '#8CC640',
              data: [8.4, 10.7, 4.3, 4.6, 1.5, 1.2, 8.0, 5.3, 3.2, 5.7, 7.9, 10.6]

          }, {
              name: 'EBITDA',
              color: '#009347',
              data: [13.5, 17.6, 12.3, 13.9, 10.3, 10.0, 13.2, 12.1, 11.4, 10.8, 12.7, 14.5]

          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
         });
  });
}

function chartinvestmentSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
          chart: {
              type: 'column',
              events: {
                  load: function () {
                      var label = this.renderer.label("*Estimated Capital Expenditures")
                      .css({
                          width: 'auto',
                          fontSize: '0.7rem',
                          color:'#87868A'
                      })
                      .add();

                      label.align(Highcharts.extend(label.getBBox(), {
                          align: 'center',
                          x: 20, // offset
                          verticalAlign: 'bottom',
                          y: 0 // offset
                      }), null, 'spacingBox');

                  }
              },
              marginBottom: 120
          },
          title: {
              text: 'Investment* / Turnover Ratio in the Pulp & Paper Industry - CEPI countries',
              style : styleChartsTitle
          },
          subtitle: {
              text: 'CEPI Statistics - Status as of 2015',
              style: styleChartsSubTitle
          },
          xAxis: {
              categories: [
                  '2000',
                  '2001',
                  '2002',
                  '2003',
                  '2004',
                  '2005',
                  '2006',
                  '2007',
                  '2008',
                  '2009',
                  '2010',
                  '2011',
                  '2012',
                  '2013',
                  '2014',
                  '2015'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'In %'
              }
          },
          tooltip: {
              shared: true,
              useHTML: true,
              valueSuffix: '%'
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: 'Investment/Turnover',
              color: '#8CC640',
              data: [7.1, 8.8, 6.5, 6.6, 7.2, 7.1, 6.5, 6.5, 6.0, 5.2, 3.8, 4.0, 3.9, 4.4, 4.1, 4.4]
          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
}

function chartlabourSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
        chart: {
            events: {
                load: function () {
                    var label = this.renderer.label("Source: RISI")
                    .css({
                        width: 'auto',
                        fontSize: '0.7rem',
                        color:'#87868A'
                    })
                    .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'center',
                        x: 20, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                }
            },
            marginBottom: 120
        },
          title: {
              text: 'Labour Productivity: Comparision between Europe and Competing Countries',
              x: -20, //center
              style : styleChartsTitle
          },
          subtitle: {
            text: 'CEPI Statistics - Status as of 2015',
            style: styleChartsSubTitle
          },
          xAxis: {
              categories: ['2000', '2001', '2002', '2003', '2004', '2005',
                  '2006', '2007', '2008', '2009', '2010', '2011','2012']
          },
          yAxis: {
              title: {
                  text: 'Finished metric tonnes / man hour'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              valueSuffix: ''
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          series: [{
              name: 'Europe',
              color: '#005EB8',
              data: [0.40,0.41,0.41,0.41,0.42,0.44,0.46,0.48,0.50,0.53,0.56,0.55,0.57]
          }, {
              name: 'USA',
              color: '#26B6CC',
              data: [0.33,0.33,0.34,0.35,0.37,0.38,0.39,0.42,0.45,0.45,0.46,0.47,0.45]
          }, {
              name: 'Canada',
              color:'red',
              data: [0.31,0.32,0.32,0.33,0.34,0.35,0.36,0.36,0.41,0.43,0.44,0.44,0.48]
          }, {
              name: 'Japan',
              color: '#51A332',
              data: [0.41,0.41,0.41,0.47,0.48,0.51,0.58,0.61,0.70,0.71,0.71,0.71,0.67]
          }, {
              name: 'Brazil',
              color:'#009347',
              data: [0.23,0.23,0.24,0.25,0.28,0.29,0.30,0.32,0.37,0.37,0.36,0.34,0.32]
          }, {
              name: 'Indonesia',
              color: 'orange',
              data: [0.21,0.20,0.21,0.22,0.22,0.26,0.27,0.27,0.38,0.39,0.38,0.39,0.37]
          }, {
              name: 'China',
              color:'gray',
              data: [0.20,0.20,0.20,0.20,0.20,0.25,0.24,0.32,0.41,0.42,0.46,0.44,0.44]
          }, {
              name: 'Russia',
              color: 'violet',
              data: [0.12,0.13,0.12,0.13,0.13,0.13,0.14,0.14,0.14,0.16,0.15,0.15,0.15]
          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
}

function chartaccidentSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
        chart: {
            events: {
                load: function () {
                    var label = this.renderer.label("Source: RISI")
                    .css({
                        width: 'auto',
                        fontSize: '0.7rem',
                        color:'#87868A'
                    })
                    .add();

                    label.align(Highcharts.extend(label.getBBox(), {
                        align: 'center',
                        x: 20, // offset
                        verticalAlign: 'bottom',
                        y: 0 // offset
                    }), null, 'spacingBox');

                }
            },
            marginBottom: 120
        },
          title: {
              text: 'Accident Rate',
              style : styleChartsTitle,
              x: -20 //center
          },
          subtitle: {
            text: 'CEPI Statistics - Status as of 2015',
            style: styleChartsSubTitle
          },
          xAxis: {
              categories: ['2000', '2001', '2002', '2003', '2004', '2005',
                  '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015']
          },
          yAxis: {
              title: {
                  text: ''
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              valueSuffix: ''
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          series: [{
              name: 'Accident Rate',
              color:'#009347',
              data: [44.9,44.4,40.4,32.1,27.0,24.3,24.8,23.7,23.1,19.8,19.5,18.5,16.9,16.5,15.7,16.0]
          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";
}

function chartEvolutionSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
          title: {
              text: 'Evolution of Paper & Board Production by Region',
              style : styleChartsTitle,
              x: -20 //center
          },
          subtitle: {
            text: 'CEPI Statistics - Status as of 2015',
            style: styleChartsSubTitle
          },
          xAxis: {
              categories: ['2000', '2001', '2002', '2003', '2004', '2005',
                  '2006', '2007', '2008', '2009', '2010', '2011','2012','2013','2014','2015']
          },
          yAxis: {
              title: {
                  text: 'Finished metric tonnes / man hour'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              valueSuffix: ''
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
          },
          series: [{
              name: 'Total Europe',
              color: '#009347',
              data: [100,98,102,105,110,110,114,115,111,100,108,107,106,105,105,105]
          }, {
              name: 'CEPI Countries',
              color: '#26B6CC',
              data: [100,97,101,103,108,108,112,112,108,97,105,103,102,100,100,100]
          }, {
              name: 'Other Europe',
              data: [100,106,110,118,124,129,132,136,138,130,136,139,141,142,145,149]
          }, {
              name: 'North America',
              color: '#6CBD56',
              data: [100,94,95,94,98,96,96,95,90,79,83,82,80,79,79,78]
          }, {
              name: 'Asia',
              color:'#005EB8',
              data: [100,101,106,113,122,130,142,153,159,161,172,179,183,187,191,193]
          }, {
              name: 'Latin America',
              data: [100,102,106,109,117,120,124,129,131,132,137,140,141,143,143,145]
          }, {
              name: 'Africa',
              color: 'red',
              data: [100,105,110,112,121,123,127,135,142,121,133,129,136,139,139,142]
          }, {
              name: 'Oceania',
              data: [100,102,110,111,114,115,112,113,114,111,116,116,114,106,106,107]
          }, {
              name: 'World',
              data: [100,98,101,104,110,112,117,120,119,113,120,122,122,123,124,125]
          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";
}

function chartPaperSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Paper & Board Consumption per Capita',
              style : styleChartsTitle
          },
          subtitle: {
            text: 'CEPI Statistics - Status as of 2015',
            style: styleChartsSubTitle
          },
          xAxis: {
              categories: [
                  'Unites States',
                  'Japan',
                  'CEPI countries',
                  'Hong-Kong',
                  'South Africa',
                  'Brazil',
                  'China',
                  'Russia',
                  'India'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          series: [{
              name: '2000',
              color:'#8CC640',
              data: [328.9,253.1,182.3,0.0,39.5,39.8,29.7,22.7,5.1]

          }, {
              name: '2005',
              color:'#26B6CC',
              data: [303.5,248.3,188.3,154.9,47.8,40.1,45.7,37.4,7.1]

          }, {
              name: '2010',
              color:'#6CBD56',
              data: [240.5,218.8,174.4,147.6,49.0,49.5,68.7,46.8,9.2]

          }, {
              name: '2014',
              color:'#2F7CBA',
              data: [224.0,215.1,163.5,123.5,42.6,49.1,77.0,46.6,9.8]

          }, {
              name: '2015',
              color:'#009347',
              data: [220.6,210.8,163.7,114.7,44.0,45.7,78.4,44.3,10.0]

          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";
}

function chartBoardSnapshot(){
  $(function () {
      Highcharts.chart('chartsSnapshot', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'CEPI Paper & Board Production by Grade in 2015',
              style : styleChartsTitle
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      }
                  }
              }
          },
          series: [{
              name: '',
              colorByPoint: true,
              data: [{
                  name: 'Newsprint',
                  y: 7.019
              }, {
                  name: 'Uncoated Mechanical',
                  y: 5.503,
                  sliced: true,
                  selected: true
              }, {
                  name: 'Coated Mechanical',
                  y: 6.789
              }, {
                  name: 'Uncoated Woodfree',
                  y: 8.934
              }, {
                  name: 'Coated Woodfree',
                  y: 7.020
              }, {
                  name: 'Sanitary and Household',
                  y: 7.153
              }, {
                  name: 'Case Materials',
                  y: 27.059
              }, {
                  name: 'Carton Board',
                  y: 8.710
              }, {
                  name: 'Wrappings',
                  y: 4.071
              }, {
                  name: 'Other Paper & Board for Packaging',
                  y: 4.733
              }, {
                  name: 'Other Paper & Board',
                  y: 3.881
              }]
          }],
          exporting: {
          buttons: {
            contextButton: {
              menuItems: 'print',
                onclick: function () {
                  this.print();
                }
              }
            }
          }
      });
  });
  //Anexamos pié de página
  var pieDePagina = document.getElementById("pie-pagina").innerHTML =
  "<p>"
  +"</p>";
}
