import React from 'react'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className='mb-2 border rounded-lg border-neutral-200'>
            <button
                onClick={onClick}
                className='flex items-center justify-between w-full p-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors'
            >
                <span className='font-medium text-neutral-800'>{title}</span>
                <span className='text-xl text-neutral-600'>
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className='p-2 text-neutral-600'>
                    {content.map((item, index) => (
                        <div key={index} className="border-s-2 border-black p-2 mt-2">
                            {item}
                        </div>
                    ))}
            </div>
                </div>
        </div>
    )
}

export default AccordionItem