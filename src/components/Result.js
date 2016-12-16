import React from 'react'
import ResultsND from './ResultsND'
import ResultsD from './ResultsD'
import { connect } from 'react-redux'

const Result = React.createClass({
  render() {
    let resultPage;

    if (this.props.testScore >= 10) {
      resultPage = <ResultsD />
    } else {
      resultPage = <ResultsND />
    }


    return (
    <div className="page-overlay grey-background">
      {resultPage}
    </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testScore: state.testScore
  }
}

export default connect(mapStateToProps)(Result);


