import React from 'react'

const Main = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={`https://dummyimage.com/72${index + 1}x40${index + 1}`} alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Location {index + 1}</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Main