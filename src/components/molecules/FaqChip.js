import React from 'react'
import { LiaAngleRightSolid } from 'react-icons/lia'

function FaqChip({ data }) {
    return (
        <div>
            <label>
                <div className="bg-white peer relative group px-5 py-3 rounded-xl">
                    <input type="radio" name='faq' className='peer hidden' />
                    <div className='flex gap-4 items-center'>
                        <div className='flex-grow'>{data.question}</div>
                    </div>
                    <div className='transition absolute top-4 right-5 peer-checked:rotate-90'><LiaAngleRightSolid /></div>
                    <p className="mt-2 hidden peer-checked:block text-gray-500 text-sm">
                        {data.answer}
                    </p>
                </div>
            </label>
        </div>
    )
}

export default FaqChip