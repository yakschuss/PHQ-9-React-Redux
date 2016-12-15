import React from 'react'

const MainWrapper = (props) => {
  return (
    <div className="main-wrapper">
      { props.children }
    </div>
  )
}

const { element } = React.PropTypes

MainWrapper.propTypes = {
  children: element.isRequired
}


export default MainWrapper;

