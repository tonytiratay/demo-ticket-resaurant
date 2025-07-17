function App() {
  const [hourlyRate, setHourlyRate] = React.useState('');
  const [hoursPerDay, setHoursPerDay] = React.useState('');
  const [daysWorked, setDaysWorked] = React.useState('');

  const toNumber = value => parseFloat(value) || 0;

  const gross = toNumber(hourlyRate) * toNumber(hoursPerDay) * toNumber(daysWorked);
  const employerCharges = gross * 0.42;
  const employeeCharges = gross * 0.22;
  const net = gross - employeeCharges;

  return (
    <div className="container">
      <h1>Simulateur de Salaire Mensuel</h1>
      <div className="inputs">
        <div>
          <label>Taux horaire (€)</label>
          <input type="number" step="0.01" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} />
        </div>
        <div>
          <label>Heures par jour</label>
          <input type="number" step="0.1" value={hoursPerDay} onChange={e => setHoursPerDay(e.target.value)} />
        </div>
        <div>
          <label>Jours travaillés</label>
          <input type="number" value={daysWorked} onChange={e => setDaysWorked(e.target.value)} />
        </div>
      </div>
      <div className="results">
        <h2>Résultats</h2>
        <p>Salaire brut: {gross.toFixed(2)} €</p>
        <p>Charges employeur: {employerCharges.toFixed(2)} €</p>
        <p>Charges salarié: {employeeCharges.toFixed(2)} €</p>
        <p>Salaire net: {net.toFixed(2)} €</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
