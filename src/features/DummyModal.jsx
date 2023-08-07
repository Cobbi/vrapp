import React from 'react'
import {Td} from '@/src/components/TableBody'

const DummyModal = (id) => {
  const filterId = Td.find(ItemId => ItemId?.id !== id)

  console.log(filterId)

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
      <h2 className="h-10 w-20 bg-white z-50">Modal</h2>
    </div>
  );
}

export default DummyModal