function Button (props) {
    return (
        <div className='w-96 h-auto px-14 py-7 flex justify-end ml-158'>
        <button className='w-auto bg-blue-600 px-4 rounded-md mr-61 cursor-pointer text-white hover:bg-blue-700'>{props.button1}</button>
        <button className='w-auto bg-red-600 px-4 py-2 rounded-md cursor-pointer text-white hover:bg-red-700'>{props.button2}</button>
    </div>
    )
}

export default Button;