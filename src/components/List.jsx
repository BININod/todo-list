function List (props) {
    return (
        <div className="flex justify-center items-center">
            <div className="w-96 text-center mt-5 border h-56 rounded-md"> 
                
                <div className="w-80 text-center mt-5 ml-10 flex flex-row">
                    <input type="checkbox" className="w-5 h-5" />
                    <p className="ml-3">{props.ToDo1}</p>
                </div>
                <div className="w-80 text-center mt-5 ml-10 flex flex-row">
                    <input type="checkbox" className="w-5 h-5" />
                    <p className="ml-3">{props.ToDo2}</p>
                </div>
                <div className="w-80 text-center mt-5 ml-10 flex flex-row">
                    <input type="checkbox" className="w-5 h-5"/>
                    <p className="ml-3">{props.ToDo3}</p>
                </div>
                <div className="w-80 text-center mt-5 ml-10 flex flex-row">
                    <input type="checkbox" className="w-5 h-5"/>
                    <p className="ml-3">{props.ToDo4}</p>
                </div>
                
            </div>
        </div>
    )
}

export default List;