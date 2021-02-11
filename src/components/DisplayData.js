import React from 'react'
import Loading from './Loading'
import '../App.css'

function DisplayData(props) {
    const {data} = props
    if (!data || data.length === 0) return <Loading />
    return (
      <div className="data-container">
          
        <section className="national-data">
          <div className="data-container-heading">
            <h3>COVID-19 STATISTICS IN NIGERIA</h3>
          </div>
            <article>
              <h5>Total Sample Collected</h5>
              <p>{data.data.totalSamplesTested}</p>
            </article>
            <article>
              <h5>Total Confirm Cases</h5>
              <p>{data.data.totalConfirmedCases}</p>
            </article>
            <article>
              <h5>Total Active Cases</h5>
              <p>{data.data.totalActiveCases}</p>
            </article>
            <article>
              <h5>Total Number Discharged</h5>
              <p>{data.data.discharged}</p>
            </article>
            <article>
            <h5>Total Death</h5>
            <p>{data.data.death}</p>
          </article>
        </section>
        
        <section className="state-data">
            <div className="data-container-heading">
              <h3>Covid Statistics in Nigeria Based on State</h3>
            </div>
            
            <article className="data-heading">
              <div>
                <h5>State</h5>
              </div>
              <div>
                <h5>Number of confirmed cases</h5>
              </div>
              <div>
                <h5>Number admitted</h5>
              </div>
              <div>
                <h5>Number discharged</h5>
              </div>
              <div>
                <h5>Number of death recorded</h5>
              </div>
            </article>
            {
                data.data.states.map(state => (
                  <article className="data-collected" key={state._id}>
                      <div>
                        <p>{state.state}</p>
                      </div>
                      <div>
                        {/* <p>Number of confirmed Cases</p> */}
                        <p>{state.confirmedCases}</p>
                      </div>
                      <div>
                        {/* <h5>Number Admitted</h5> */}
                        <p>{state.casesOnAdmission}</p>
                      </div>
                      <div>
                        {/* <h5>Number Discharged</h5> */}
                        <p>{state.discharged}</p>
                      </div>
                      <div>
                        {/* <h5>Number of Death Recorded</h5> */}
                        <p>{state.casesOnAdmission}</p>
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
