const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active-panel'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active-panel');
    setTimeout(resizeCharts, 50);
  });
});

const charts = [];
function makeChart(id, option) {
  const el = document.getElementById(id);
  if (!el || typeof echarts === 'undefined') return;
  const chart = echarts.init(el);
  chart.setOption(option);
  charts.push(chart);
}
function resizeCharts() { charts.forEach((chart) => chart.resize()); }
window.addEventListener('resize', resizeCharts);

makeChart('dependencyChart', {
  tooltip: {},
  series: [{
    type: 'graph', layout: 'force', roam: true, draggable: true,
    force: { repulsion: 220, edgeLength: [90, 180] },
    label: { show: true, color: '#e6eefc' },
    lineStyle: { color: '#97a7c4', opacity: .65 },
    data: [
      { name: 'ICC Ops', symbolSize: 70, category: 0 },
      { name: 'Move Money', symbolSize: 54, category: 1 },
      { name: 'ClientWorks Login', symbolSize: 46, category: 1 },
      { name: 'Advisor Email', symbolSize: 48, category: 1 },
      { name: 'Account View 2.0', symbolSize: 44, category: 1 },
      { name: 'NAO', symbolSize: 42, category: 1 },
      { name: 'Trading', symbolSize: 50, category: 2 },
      { name: 'SOLR Cache', symbolSize: 48, category: 2 },
      { name: 'Cloud DB', symbolSize: 46, category: 2 }
    ],
    links: [
      { source: 'ICC Ops', target: 'Move Money' }, { source: 'ICC Ops', target: 'Advisor Email' },
      { source: 'Move Money', target: 'Trading' }, { source: 'Move Money', target: 'Cloud DB' },
      { source: 'ClientWorks Login', target: 'SOLR Cache' }, { source: 'Account View 2.0', target: 'SOLR Cache' },
      { source: 'NAO', target: 'Cloud DB' }
    ],
    categories: [{ name: 'Ops' }, { name: 'VCT' }, { name: 'Shared Service' }]
  }]
});

makeChart('pcardChart', {
  tooltip: {},
  xAxis: { type: 'category', data: ['Move Money','Advisor Email','Trading','SOLR','Login'], axisLabel: { color: '#97a7c4' } },
  yAxis: { type: 'value', axisLabel: { color: '#97a7c4' }, splitLine: { lineStyle: { color: 'rgba(255,255,255,.08)' } } },
  series: [{ type: 'bar', data: [6,5,12,8,3] }]
});

makeChart('automationChart', {
  tooltip: {},
  radar: { indicator: [
    { name: 'Repeatability', max: 10 }, { name: 'Risk Reduction', max: 10 }, { name: 'Manual Effort', max: 10 },
    { name: 'Runbook Ready', max: 10 }, { name: 'Frequency', max: 10 }
  ], axisName: { color: '#e6eefc' } },
  series: [{ type: 'radar', data: [{ value: [8,7,9,6,8], name: 'SOLR Recovery' }, { value: [6,8,7,5,6], name: 'Teams Update Generator' }] }]
});
