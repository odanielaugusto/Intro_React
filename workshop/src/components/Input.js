// props: Props são argumentos que podem ser passados para um componente React para personalizar sua aparência ou comportamento.
export default function Input(props) {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-white">{props.name}</label>
      <span className="text-sm text-gray-200">{props.description}</span>
      <input className="p-2 text-black rounded-md shadow-md" placeholder={props.placeholder}></input>
    </div>
  )
}