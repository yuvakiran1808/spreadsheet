import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/navbar.scss";
import companylogo from "../assets/zeotap.png";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import RestoreIcon from "@mui/icons-material/Restore";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Navbar = () => {
  return (
    <Grid container className="nav-bar-main">
      <Grid size={0.3}>
        <img src={companylogo} alt="brand-logo" className="company-logo" />
      </Grid>
      <Grid size={8} className="nav-bar">
        <div className="spreadsheet-input-name">
          <input
            className="spreadsheet-input-type"
            placeholder="Untitled spreadsheet"
          />
        </div>
        <Tabs sx={{ minHeight: 10 }} className="nav-tab-con">
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="File"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="Edit"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="View"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="Insert"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="Format"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 80, padding: "4px" }}
            label="Data"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 60, padding: "4px" }}
            label="Tools"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 120, padding: "4px" }}
            label="Extensions"
            className="nav-tab"
          ></Tab>
          <Tab
            sx={{ minWidth: 60, padding: "4px" }}
            label="Help"
            className="nav-tab"
          ></Tab>
        </Tabs>
      </Grid>
      <Grid display="flex" alignItems="center" size={0.6}>
        <div className="icons-con">
          <RestoreIcon className="icons" />
        </div>
      </Grid>
      <Grid display="flex" alignItems="center" size={0.6}>
        <div className="icons-con">
          <CommentOutlinedIcon className="icons" />
        </div>
      </Grid>
      <Grid display="flex" alignItems="center" size={0.6}>
        <div className="icons-con">
          <VideocamOutlinedIcon className="icons" />
        </div>
      </Grid>
      <Grid display="flex" alignItems="center" size={0.6}>
        <button className="share-btn">
          <LockOutlinedIcon className="share-icon" />
          <p>Share</p>
        </button>
      </Grid>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        size={1}
      >
        <Avatar
          sx={{ width: 45, height: 45, backgroundColor: "blue" }}
          alt="Zeotap"
          src="/static/images/avatar/1.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default Navbar;
