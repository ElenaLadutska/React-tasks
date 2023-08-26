import EditIcon from "@mui/icons-material/Edit";
import changeInfo from "../../changeInfo";

const ChangeInfo = () => {
  return (
    <div className="change-data"
      onClick = {() => changeInfo()}>

      <EditIcon style={{color: "black"}} />

      <span>Изменить</span>
    </div>
  )
};

export default ChangeInfo;
