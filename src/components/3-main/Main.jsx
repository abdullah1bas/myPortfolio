import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import {
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ArrowRightAltOutlined,
  GitHub,
  InsertLink,
} from "@mui/icons-material";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [projects, setProjects] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });

    setProjects(newArr);
  };

  return (
    <main className="flex" id="projects">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setProjects(myProjects);
          }}
          className={currentActive == "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive == "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("CSSBootstrap");
          }}
          className={currentActive == "CSSBootstrap" ? "active" : null}
        >
          CSS & BS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive == "js" ? "active" : null}
        >
          Game JS
        </button>

        <button
          onClick={() => {
            handleClick("JSBootstrap");
          }}
          className={currentActive == "JSBootstrap" ? "active" : null}
        >
          JavaScript & BS
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive == "react" ? "active" : null}
        >
          React & MUI
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {projects.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.projectTitle}
                className="card"
              >
                <IconButton href={item.linkPath} target="_blank" sx={{p: '0'}}>
                  <img
                    style={{ borderRadius: "5px", width: 266 }}
                    src={item.imgPath}
                    alt="image website"
                  />
                </IconButton>

                <Stack sx={{ width: "266px", padding: "1rem 0.6rem" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--title)",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.projectTitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--subtitle)",
                      fontSize: "0.8rem",
                      mt: "0.7rem",
                      mb: "1.1rem",
                      height: "80px",
                      overflow: "auto",
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack gap={"11px"} direction={"row"}>
                      <Tooltip title="website">
                        <IconButton
                          href={item.linkPath}
                          target="_blank"
                          sx={{
                            color: "var(--subtitle)",
                            ":hover .css-i4bv87-MuiSvgIcon-root": {
                              fontSize: "1.6rem",
                              color: "var(--icon-hover)",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <InsertLink />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="github">
                        <IconButton
                          href={item.githubPath}
                          target="_blank"
                          sx={{
                            color: "var(--subtitle)",
                            ":hover .css-i4bv87-MuiSvgIcon-root": {
                              fontSize: "1.6rem",
                              color: "var(--icon-hover)",
                              cursor: "pointer",
                            },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <Button
                      href={item.githubPath}
                      target="_blank"
                      sx={{
                        fontSize: "0.9rem",
                        color: "var(--blue)",
                        mr: "12px",
                        border: "none",
                        textTransform: "lowerCase",

                        ":hover": {
                          backgroundColor: "inherit",
                        },
                        ":hover .css-i4bv87-MuiSvgIcon-root": {
                          transition: ".3s",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      more
                      <ArrowRightAltOutlined />
                    </Button>
                  </Stack>
                  
                </Stack>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
