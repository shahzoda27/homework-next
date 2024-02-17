import React from 'react'

export default function Login() {
  return (
    <div className='container '>
    <div className='row mt-4'>
      <div className='col-6 offset-3'>
        <div className='card'>
            <div className='card-header'>
              <h1 className='text-center'>Login</h1>
            </div>
            <div className="card-body">
              <input type="text" className='form-control my-2'placeholder='Username' />
              <input type="text" className='form-control my-2'  placeholder='Password' />
            </div>
            <div className='card-footer d-flex justify-content-center'>
                <div className='row'>
                <button className='btn btn-success'>Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
