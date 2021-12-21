import { colors } from "./colors.config";

const { fadeOff, fadeOn, bright, home, dark } = colors;

export const styles = {
  cardStyle: { width: "18rem", height: "17rem" },
  ImageCardStyle: {
    cursor: "pointer",
    borderRadius: "26px",
    height: "18rem",
    objectFit: "cover",
  },
  loaderStyle: {
    marginLeft: "42vw",
    marginTop: "33vh",
    fontSize: "156px",
  },
  mobileFadeStyleOff: {
    width: "12rem",
    height: "3rem",
    backgroundColor: fadeOff,
    border: "none",
    fontSize: "1.3rem",
    outline: "none",
  },
  mobileFadeStyleOn: {
    width: "12rem",
    height: "3rem",
    backgroundColor: fadeOn,
    border: "none",
    fontSize: "1.3rem",
    outline: "none",
  },
  fullWidthHeightStyle: { height: "100%", width: "100%" },
  mobileDivStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  mobileButtonStyle: {
    width: "12.5rem",
    margin: "3rem",
    flexShrink: "2",
  },
  mobileRowContainerStyle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "0rem",
  },
  mobileCardStyle: {
    width: "24rem",
    border: "none",
  },
  mobileCardImgOverlayStyle: {
    height: "7rem",
    marginLeft: "0.05rem",
    /*                               width: '22rem',
     */ color: bright,
    opacity: "0.8",
    marginTop: "8rem",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "black",
    position: "relative",
    zIndex: "2",
  },
  mobileCardTitleStyle: {
    textTransform: "uppercase",
    lineHeight: "2rem",
  },
  mobileCardImgStyle: {
    cursor: "pointer",
    objectFit: "cover",
    margin: ".05rem",
    height: "15rem",
    borderRadius: "12px",
    zIndex: "1",
    position: "relative",
  },
  showMoreButtonStyle: {
    paddingRight: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  modalItemDivStyle: { fontSize: "20px", paddingLeft: "20px" },
  modalItemCountStyle: {
    fontSize: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
  },
  postitionRelWidthFull: { position: "relative", width: "100%" },
  navBarBrandStyle: {
    cursor: "pointer",
    paddingLeft: "5rem",
    paddingBottom: "2.5rem",
    position: "relative",
  },
  navLinkBasicStyle: { width: "60px", backgroundColor: "dark" },
  navDropDownStyle: { width: "60px", marginLeft: "20px" },
  navDropDownEveStyle: { width: "50px", backgroundColor: "dark" },

  desktopFadeStyleOff: {
    width: "8rem",
    height: "3rem",
    backgroundColor: fadeOff,
    border: "none",
    fontSize: "1.3rem",
    outline: "none",
    position: "absolute",
  },
  desktopFadeStyleOn: {
    width: "8rem",
    height: "3rem",
    backgroundColor: fadeOn,
    border: "none",
    fontSize: "1.3rem",
    outline: "none",
    position: "absolute",
  },
  desktopDivStyle: {
    display: "flex",
    width: "100%",
  },
  desktopContainerCardStyle: {
    background: "none",
    border: "none",
    flexShrink: "1",
  },
  desktopRowDivStyle: {
    backgroundColor: "black",
    borderRadius: "15px",
    height: "100%",
  },
  desktopColDivStyle: {
    display: "flex",
    overflow: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  desktopButtonStyle: {
    width: "8.5rem",
    margin: "3rem",
    flexShrink: "2",
  },
  desktopRowContainerStyle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "0rem",
  },
  desktopCardStyle: {
    width: "24rem",
    border: "none",
  },
  desktopCardImgOverlayStyle: {
    height: "7rem",
    marginLeft: "0.05rem",
    /*                               width: '22rem',
     */ color: bright,
    opacity: "0.8",
    marginTop: "8rem",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "black",
    position: "relative",
    zIndex: "2",
  },
  desktopCardTitleStyle: {
    textTransform: "uppercase",
    lineHeight: "2rem",
  },
  desktopCardImgStyle: {
    cursor: "pointer",
    objectFit: "cover",
    margin: ".05rem",
    height: "15rem",
    borderRadius: "12px",
    zIndex: "1",
    position: "relative",
  },
  desktopContainerDivStyle: {
    padding: "1.5rem",
    paddingLeft: "19rem",
  },
  homeWhereCityFieldStyle: {
    position: "relative",
    zIndex: "-1",
    height: "60rem",
  },
  homeImageStyle: {
    height: "62rem",
    objectFit: "cover",
    width: "100%",
    position: "relative",
    backgroundSize: "contain",
  },
  homeConDivStyle: {
    zIndex: "2",
    width: "100%",
    height: "10rem",
    marginTop: "-55.5rem",
  },
  homeBadgeStyle: {
    fontSize: "1.6rem",
    marginLeft: "-2rem",
    lineHeight: "1.8px",
  },
  homeFontBasicStyle: {
    fontSize: "2.5rem",
    marginLeft: "2rem",
  },
  homeRowColStyle: {
    margin: "auto",
    width: "100%",
    fontSize: "1.7rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: home,
  },
  homeRowColCardStyle: {
    width: "80rem",
    backgroundColor: dark,
    opacity: "0.88",
    borderRadius: "15px",
  },
  homeFormControlStyle: { background: "grey", color: bright },
  homeInputContolStyle: {
    marginLeft: "1.5rem",
    width: "50px",
    height: "50px",
    backgroundColor: home,
    opacity: "0.88",
    border: "none",
  },
  homeControlArrowStyle: {
    marginLeft: "0px",
    backgroundColor: "none",
    fontSize: "40px",
    cursor: "pointer",
    color: bright,
  },
  homeFormInputControlStyle: {
    marginRight: "4rem",
    width: "20px",
    color: bright,
    background: "grey",
  },
  homeInputFromControlStyle: { background: "grey", color: bright },
  homeInputGroupTextStyle: {
    marginLeft: "1.5rem",
    width: "50px",
    height: "50px",
    background: "none",
    border: "none",
  },
  homeFormInputLabelStyle: {
    marginRight: "4rem",
    width: "20px",
    color: bright,
    background: "grey",
  },
  homeRowContainerStyle: { paddingRight: "4rem", paddingBottom: "15px" },
  homeSearchButtonStyle: {
    width: "7rem",
    height: "3rem",
    backgroundColor: "grey",
    border: "none",
  },
};