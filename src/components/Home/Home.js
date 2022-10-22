import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import './home.scss';

export default function Home() {
  const globalCases = useFetch('https://api.covidtracking.com/v2/states.json');

  // if (!globalCases.cases) return <h1 className='status'>Loading...</h1>;

  return (
    <div className='home'>
      <div className='view-countries'>
        <Link to='/countries'>view by country</Link>
      </div>

      <h1>Global Cases</h1>

      <div className='top'>
        <section>
          <h2>Coronavirus Cases:</h2>

          <NumberFormat
            // working on fixing API endpoints
            value={632322148}
            displayType={'text'}
            thousandSeparator={true}
            renderText={value => <span className='cases'>{value}</span>}
          />
        </section>

        <section>
          <h2>Deaths:</h2>

          <NumberFormat
            // working on fixing API endpoints
            value={6580926}
            displayType={'text'}
            thousandSeparator={true}
            renderText={value => <span className='deaths'>{value}</span>}
          />
        </section>
      </div>

      <div className='bottom'>
        <section>
          <h2>Recovered:</h2>

          <NumberFormat
            // working on fixing API endpoints
            value={611122967}
            displayType={'text'}
            thousandSeparator={true}
            renderText={value => <span className='recovered'>{value}</span>}
          />
        </section>

        <section>
          <h2>Active Cases:</h2>

          <NumberFormat
            // working on fixing API endpoints
            value={14618275}
            displayType={'text'}
            thousandSeparator={true}
            renderText={value => <span className='active-cases'>{value}</span>}
          />
        </section>
      </div>
    </div>
  );
}
