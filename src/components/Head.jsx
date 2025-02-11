function Head (props) {
    return (
        <div className="flex justify-center items-center mt-5 ">
           
            <div className=" w-96 text-center mt-5 border rounded-md">
                <h1 className="text-4xl font-bold ">{props.letter}</h1>
            </div>

        </div>
    )
}

export default Head;