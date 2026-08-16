import React from 'react'

function Card({
  title = 'Bored ape nft accidental',
  image = 'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif',
}) {
  return (
    <div
      className="flex flex-col rounded-xl p-4 bg-[#0f1724]/40 border border-[#2e3440]"
      style={{
        backdropFilter: 'saturate(180%) blur(10px)',
      }}
    >
      <div className="w-full flex justify-center">
        <img src={image} alt="card-img" className="rounded-xl w-full h-auto max-h-[320px] object-cover" />
      </div>

      <div className="flex flex-col rounded-b-xl py-6 items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-white">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Card
