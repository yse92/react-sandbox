import Avatar from "./Avatar";
import Heart from './Heart'
function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
        <Heart></Heart>
      </div>
    );
  }

  export default UserInfo