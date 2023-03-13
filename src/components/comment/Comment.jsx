import "./comment.scss"
const Comment = ({item}) => {
    const {movieName,comment,userName,id} = item
  return (
    <div className="comment">
        <h6>Film Adı: <span>{movieName}</span></h6>
        <p>{comment}</p>
        <span>Kullanıcı: <span>{userName}</span></span>
    </div>
  )
}

export default Comment