import React from 'react'

const Memo = ({item}) => {
    let memoImg = `https://github.com/MystyS2/mysty-phonebook/blob/master/public/assets/memo${item.index%6+1}.png?raw=true`
  return (
    <div className='w-[300px] relative'>
        <div className='w-full align-middle'>
            <img src={memoImg} alt='memo1'/>            
        </div>
        <div className='absolute top-[70px] left-16 text-lg text-center text-[#9b2a2a] font-medium'>
            Name
        </div>
        <div className='absolute top-[110px] left-16 text-lg text-center text-white'>
            {item.name}
        </div>
        <div className='absolute top-[152px] left-16 text-lg text-center text-[#9b2a2a] font-medium'>
            Phone
        </div>
        <div className='absolute top-[195px] left-16 text-lg text-center text-white'>
            {item.phoneNumber}
        </div>
    </div>
  )
}

export default Memo