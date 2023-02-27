import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsFileText, BsEnvelope } from "react-icons/bs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import Link from "next/link"
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function SideBar() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const router = useRouter();
  const theme = useTheme();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const sideBarLink = [
    {
      id: 0,
      name: "Dashboard",
      icon: <i className="fa-solid fa-table-cells-large" />,
      path: "/",
    },
    {
      id: 1,
      name: "Resumes/Cv's",
      icon: <i className="fa-regular fa-file" />,
      path: "/resumes",
    },
    {
      id: 2,
      name: "Cover Letters",
      icon: <i className="fa-regular fa-envelope" />,
      path: "/cover-letters",
    },
  ];
  const activeStyles = {
    marginBottom: "10px",
    borderRadius: "9px",
    color: "white",
    // backgroundColor:"rgb(3, 201, 215) !important"
    //2245819564
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.main,
  };

  const inactiveStyles = {
    fontWeight: 700,
    marginBottom: "10px",
    borderRadius: "9px",
  };
  return (
    <Box sx={{ padding: "24px 16px 8px 16px" }}>
      <Box>
        <img
          style={{ width: "165px", marginLeft:"10px" }}
          src="https://firebasestorage.googleapis.com/v0/b/career-awesome-351619.appspot.com/o/Logo%20Version%202%20(2).png?alt=media&token=0673c5dd-9f1b-4200-af4f-23eae119740f"
          alt="company-logo"
        />
      </Box>
      <Box sx={{ padding: "1.5rem 0" }}>
        <Box>
          {sideBarLink.map((link) => (
           <Link key={link.id} href={link.path}>
             <ListItem
              sx={router.pathname == link.path ? activeStyles : inactiveStyles}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon
                  sx={
                    router.pathname == link.path
                      ? { color: "white", minWidth: "30px", fontWeight: 700 }
                      : { color: "inherit", minWidth: "30px", fontWeight: 700 }
                  }
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    sx={
                      router.pathname == link.path
                        ? { color: "white" }
                        : { color: "inherit" }
                    }
                    variant="subtitle2"
                  >
                    {link.name}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
           </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;