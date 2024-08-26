import React, { useState, useEffect } from 'react';
import Memo from './Memo';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const { contactList, searchWord } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
      if (searchWord !== "") {
        let list = contactList.filter((item) => item.name.includes(searchWord));
        setFilteredList(list);
      } else {
        setFilteredList(contactList);
      }
    }, [searchWord, contactList]);
  return (
    <div className='flex flex-col items-center mx-4 my-4 gap-1'>
        <div>저장된 연락처 : {contactList.length} 개</div>
        <div className='grid grid-cols-5 mx-4 my-4 gap-1 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {filteredList.map((item, index) => (<Memo item={item} key={index} />))}
        </div>        
    </div>

  )
}

export default ContactList