import React, { Component } from 'react'
import loading from '../assets/loading.gif'

class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading gif" />
      </div>
    )
  }
}
export default Spinner