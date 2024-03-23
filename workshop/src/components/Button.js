export default function Button(props){
    return(
        <button className = "text-x1 mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md disbled:bg-gray-300 disabled: cursor-not-allowed" type={props.type}>{props.name}</button>
    )
}