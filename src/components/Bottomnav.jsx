import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../styles/Bottomnav.scss";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Bottomnav = ({ addNewSheet, setActiveSheet, activeSheet, sheets }) => {
  return (
    <div className="bottom-nav-main-div">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          zIndex: 10,
        }}
      >
        <div className="icons-con"  onClick={addNewSheet}>
          <AddOutlinedIcon className="icons" />
        </div>
        <div className="bottom-nav-con">
          {sheets.map((sheet) => (
            <div
              className="bottom-nav-subcon"
              onClick={() => setActiveSheet(sheet.id)}
              key={sheet.id}
              style={{
                backgroundColor: activeSheet === sheet.id ? "#EDF2FA" : "",
                color:activeSheet === sheet.id ? "#0b57d0" : "black"
              }}
            >
              {sheet.name} <ArrowDropDownOutlinedIcon  className="icons1"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottomnav;
