import React from 'react'

const ResultsD = () => {
  return (
    <div className="results-div-depressed">
      <p className="results-message">
        So here's the deal. Based on your test results, we think it might be in your best interest to go see a therapist. Luckily, we have some great recommendations! Choose from one of these options to automatically schedule a consultation. Best of luck to you!
      </p>

      <div className="dr-list-enclosing">
        <form className="pick-a-doctor">
          <div className="drs-names">
            <input className='radio-select' type='radio' id='drmcauliffe' name='doctor-response' value='Dr. Mcauliffe' />
            <label className='doctor-response' htmlFor='drmcauliffe'>Dr. Mcauliffe</label>

            <input className='radio-select' type='radio' id='drhesterberg' name='doctor-response' value='Dr. Hesterberg' />
            <label className='doctor-response' htmlFor='drhesterberg' checked='checked'>Dr. Hesterberg</label>

            <input className='radio-select' type='radio' id='drdemeke' name='doctor-response' value='Dr. Demeke' />
            <label className='doctor-response' htmlFor='drdemeke' >Dr. Demeke</label>
          </div>

          <div className='submit-button doctors-button'>
            <button type="submit" className="button">Choose</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResultsD;


