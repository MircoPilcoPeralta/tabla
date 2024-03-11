const DeleteTalkButton = (props: any) => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        console.log(props.props.row.original.id)
      }}
    >
      Eliminar
    </button>
  )
}

const EditTalkButton = (props: any) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log(props.props.row.original.id)
      }}
    >
      Editar
    </button>
  )
}

export const OptionsColumn = (props: any) => {
  return (
    <div className="d-flex flex-col gap-3">
      <EditTalkButton props={props} />
      <DeleteTalkButton props={props} />
    </div>
  )
}
