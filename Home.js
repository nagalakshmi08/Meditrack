import React from 'react'

const Home = () => {
  return (
    <div className='my-4 flex flex-col'>
      <div style={{marginTop:"140px"}}className='items-center flex flex-col mt-9 pt-9'>
      <p className='text-4xl font-bold font-sans'>Empowering Health, Eliminating Waste</p><br/>
      <p className='text-3xl font-sans pl-5'>From Shelf to Health, We've Got You Covered.</p><br/>
      </div><br/>
      <div className="divs pl-100 max-w-sm rounded overflow-hidden flex flex-row items-center px-40  mx-0 min-w-full">
  <div style={{marginLeft:"200px"}} className="px-40 flex flex-row">
  <button style={{display:"inline-block"}} className="btn btn-blue bg-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Login for User
</button>
  {/* </div> */}
  {/* <div className="pt-4 pb-2 mr-6 flex flex-row" style={{marginRight:"250px"}}> */}
  <button style={{display:"inline-block",marginLeft:"85px"}} className="btn btn-blue bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 border-b-4 border-blue-700 hover:border-blue-500 rounded flex">
  Signup for User
</button>
  </div>
  </div><br/>
  <div className="divs pl-100 max-w-sm rounded overflow-hidden flex flex-row items-center px-40  mx-0 min-w-full">
  <div style={{marginLeft:"320px"}} className="px-10 flex flex-col">
  <button className="btn btn-blue bg-500 hover:bg-blue-400 text-white font-bold py-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Login for Pharma
</button>
  </div>
  <div className="mx-30 pt-4 pb-2 mr-6 flex flex-row ml-5" style={{marginRight:"320px"}}>
  <button className="btn btn-blue bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded flex">
  Signup for Pharma
</button>
  </div>
  </div><br/>
  
</div>

  )
}

export default Home
