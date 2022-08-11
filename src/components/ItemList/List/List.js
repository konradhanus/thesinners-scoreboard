import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import { scoreData } from "../../ScoreBoard/scoreData";
// import { ListContainer } from "../../ScoreBoard/style";
import { TitleListContainer } from "../../ScoreBoard/Styles/tableStyles";
import { listData } from "./listData";
import avatarTemoporaryImage from "../../../assets/backgroundImage.png";

export default function ItemList() {
  // const date = new Date().toLocaleTimeString();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <section
        className="hero"
        style={{
          width: "100%",
          marginBottom: 40,
          alignItems: "center",
          minWidth: 320,
          padding: 20,
        }}
        data-aos="fade-right"
      >
        <div className="hero-body">
          <p className="title" style={{ color: "white" }}>
            Welcome on Dog Ranking App
          </p>
          <p className="subtitle" style={{ color: "white" }}>
            Fight against other players and earn points to win.
          </p>
        </div>
        <button className="button is-danger">
          <a
            href="https://psiaapka.web.app"
            rel="noreferrer"
            target="_blank"
            style={{ color: "white" }}
          >
            Get Started!
          </a>
        </button>
      </section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          width: "80%",
          padding: "1vh",
          marginBottom: "14vh",
        }}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div
          className="columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            padding: 0,
            marginLeft: -40,
            marginRight: -40,
            borderRadius: 10,
            backgroundImage: "linear-gradient(to bottom, #abb8c3, #d9e3f0)",
          }}
        >
          <TitleListContainer>
            <h4 className="title is-4">Dog Ranking</h4>
          </TitleListContainer>
          {/* map here */}
          {listData.map((list, id) => {
            return (
              <React.Fragment key={id}>
                <div className="column">
                  <div
                    className="box"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      padding: 10,

                      // "@media (maxWidth: 320px)": {
                      //   display: "flex",
                      //   flexDirection: "column",
                      // },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div>
                        {list.icon}
                        <h4 className="title is-6" style={{ minWidth: 40 }}>
                          {list.place}
                        </h4>
                      </div>
                    </div>

                    <div
                      style={{
                        marginLeft: "2vw",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      <figure className="image is-48x48">
                        <img
                          className="is-rounded"
                          src={avatarTemoporaryImage}
                          alt="avatar"
                        />
                      </figure>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexGrow: 1,
                        marginLeft: "4vw",
                      }}
                    >
                      {list.name}
                      <h4 className="title is-6">{list.level}</h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        alignContent: "flex-end",
                        minWidth: 60,
                      }}
                    >
                      {/* <div style={{ flexGrow: 1, marginRight: "4vw" }}>
                name
                </div> */}
                      <h4 className="title is-6">{list.points}</h4>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          <div className="column" style={{ textAlign: "center" }}>
            Player 4
          </div>
          <div className="column" style={{ textAlign: "center" }}>
            Player 5
          </div>
          <div className="column" style={{ textAlign: "center" }}>
            Player 6
          </div>
          <div className="column" style={{ textAlign: "center" }}>
            Player 7
          </div>
          <div className="column" style={{ textAlign: "center" }}>
            Player 8
          </div>
        </div>
      </div>
      {/* <footer
        className="footer"
        style={{backgroundColor: "#7490c0", width: "100%", marginTop: 80, alignItems: "center", minWidth: 320, padding: 20}}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="content has-text-centered">
          <p className="subtitle" style={{ color: "white" }}>
            &copy; Powered by <b>Kotek999</b> &copy;
          </p>
        </div>
      </footer> */}
    </div>
  );
}
