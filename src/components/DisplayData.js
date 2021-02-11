import React from 'react'
import Loading from './Loading'

function DisplayData(props) {
    const {data} = props
    if (!data || data.length === 0) return <Loading />
    return (
      <div>
          <h3>COVID-19 STATISTICS in NIGERIA</h3>
          <section>
            <article>
              <h3>Total Sample Collected</h3>
              <p>{data.data.totalSamplesTested}</p>
            </article>
            <article>
              <h3>Total Confirm Cases</h3>
              <p>{data.data.totalConfirmedCases}</p>
            </article>
            <article>
              <h3>Total Active Cases</h3>
              <p>{data.data.totalActiveCases}</p>
            </article>
            <article>
              <h3>Total Number Discharged</h3>
              <p>{data.data.discharged}</p>
            </article>
            <article>
              <h3>Total Death</h3>
              <p>{data.data.death}</p>
            </article>
          </section>
          <section>
            <h3>Statistics based on state</h3>
            {
                data.data.states.map(state=> (
                  <article>
                    <div key={state._id}>
                      <h3>{state.state}</h3>
                      <div>
                        <h5>Number of confirmed Cases</h5>
                        <p>{state.confirmedCases}</p>
                      </div>
                      <div>
                        <h5>Number Admitted</h5>
                        <p>{state.casesOnAdmission}</p>
                      </div>
                      <div>
                        <h5>Number Discharged</h5>
                        <p>{state.discharged}</p>
                      </div>
                      <div>
                        <h5>Number of Death Recorded</h5>
                        <p>{state.casesOnAdmission}</p>
                      </div>
                    </div>
                  </article>
                )  
                )
              }
          </section>
          
      </div>
    )
}

export default DisplayData
