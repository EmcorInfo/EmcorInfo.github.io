import axios from 'axios'; // eslint-disable-next-line
import React, { PureComponent, useState, useEffect } from 'react';
import { PieChart, Pie, Sector, BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [saidas, setSaidas] = useState([]);
  const [items, setItems] = useState([]);
  const [deps, setDeps] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchSaidas();
    fetchItemsList();
    fetchDepList();
  }, []);

  const fetchSaidas = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=saidaitems');
      setSaidas(response.data);
    } catch (error) {
      console.error('Error fetching Saidas:', error);
    }
  };

  const fetchItemsList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching Items:', error);
    }
  };

  const fetchDepList = async () => {
    try {
      const response = await axios.get('https://hospitalemcor.com.br/api/index.php?table=departamentos');
      setDeps(response.data);
    } catch (error) {
      console.error('Error fetching Deps:', error);
    }
  };

  const handleItemChange = (e) => {
    const selectedItemId = e.target.value;
    console.log('Selected Item ID:', selectedItemId);
    setSelectedItem(selectedItemId);
  };
  
  const handleMonthChange = (e) => {
    const selectedMonthValue = e.target.value;
    console.log('Selected Month:', selectedMonthValue);
    setSelectedMonth(selectedMonthValue);
  };

  const meses = [
    { nome: 'Janeiro', valor: '01' },
    { nome: 'Fevereiro', valor: '02' },
    { nome: 'Março', valor: '03' },
    { nome: 'Abril', valor: '04' },
    { nome: 'Maio', valor: '05' },
    { nome: 'Junho', valor: '06' },
    { nome: 'Julho', valor: '07' },
    { nome: 'Agosto', valor: '08' },
    { nome: 'Setembro', valor: '09' },
    { nome: 'Outubro', valor: '10' },
    { nome: 'Novembro', valor: '11' },
    { nome: 'Dezembro', valor: '12' }
  ];

  const coresDepartamentos = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", 
    "#82C91E", "#FFBB28", "#FF8042", "#00C49F", "#FFBB28",
    "#AF19FF", "#00C49F", "#FF8042", "#0088FE", "#00C49F", 
    "#FFBB28", "#FF8042", "#AF19FF", "#82C91E", "#FFBB28",
    "#FF8042", "#00C49F", "#FFBB28", "#AF19FF", "#00C49F", 
    "#FF8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", 
    "#AF19FF", "#82C91E", "#FFBB28", "#FF8042", "#00C49F", 
    "#FFBB28", "#AF19FF", "#00C49F", "#FF8042", "#0088FE", 
    "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#82C91E", 
    "#FFBB28", "#FF8042", "#00C49F", "#FFBB28", "#AF19FF", 
    "#00C49F", "#FF8042", "#0088FE"
  ];
  // Adicione cores conforme a quantidade de departamentos
 
  // Filtrar saídas com base no item e mês selecionados
  
  const filteredSaidas = saidas.filter((saida) => { 
     // eslint-disable-next-line
    const isItemSelected = selectedItem ? saida.item_id == selectedItem : true;
    const dataSaida = saida.data_saida;
    const mesSaida = dataSaida.split('-')[1];
    const isMonthSelected = selectedMonth ? mesSaida === selectedMonth : true;
    return isItemSelected && isMonthSelected;
  });

  const selectedItemData = items.find(item => item.id == selectedItem);
  const selectedNome = selectedItemData ? selectedItemData.nome : '';

  // Calcular a quantidade de saídas por departamento
  const datachart = deps.map((dep) => {
    const quantidade = filteredSaidas.reduce((acc, saida) => {
      if (saida.departamento_id === dep.id) {
        return acc + saida.quantidade;
      }
      return acc;
    }, 0);
    return { name: dep.nome, value: quantidade };
  });

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  



  const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{value}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

return (<div>
  <div className="d-flex flex-row justify-content-center mb-2 ">
      <div className="d-flex justify-content-center me-3">
        <label className="text-white" htmlFor="itemSelect">Selecione um item:</label>
        <select id="itemSelect" onChange={handleItemChange} value={selectedItem || ''}>
          <option value="">Todos os itens</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-left">
        <label className="text-white" htmlFor="monthSelect">Selecione um mês:</label>
        <select id="monthSelect" onChange={handleMonthChange} value={selectedMonth || ''}>
        <option value="">Todos os meses</option>
            {meses.map((mes) => (
              <option key={mes.valor} value={mes.valor}>
                {mes.nome}
              </option>
            ))}
        </select>
      </div>
    </div>
  <div>
    
  <div className='my-3 w-50 d-flex flex-column justify-content-center'>
  <h4 className='text-center text-white'>{selectedNome}</h4>
  <PieChart width={500} height={350}>
    <Pie
      activeIndex={activeIndex}
      activeShape={renderActiveShape}
      data={datachart}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      onMouseEnter={onPieEnter}
    >
      {datachart.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={coresDepartamentos[index % coresDepartamentos.length]} />
      ))}
    </Pie>
  </PieChart>
</div>
<div>
  <BarChart
    width={1000}
    height={300}
    data={datachart}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <Bar dataKey="value" barSize={30}>
      {datachart.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={coresDepartamentos[index % coresDepartamentos.length]} />
      ))}
    </Bar>
    <XAxis angle={90} dataKey="name" />
    <YAxis />
    <Tooltip dataKey="name" wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
  </BarChart>
</div>
    
  </div>
  </div>
);
};

export default Dashboard;