function Button({title, onSelect, isActive}) {
  return (
    <div className={`btn mx-1 ${isActive ? 'btn-warning' : 'btn-primary'}`} onClick={() => onSelect()}>{title}</div>
  )
}

export default Button