import styles from "./MenuOptions.module.css";
import { Link } from "react-router-dom";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import client from "../ApiClient";
import { getUsername, removeUsername } from "../SessionStorage";
import { useNavigate } from "react-router-dom";
import DeviceChecker from "../DeviceChecker";

const MenuOptions = ({ items, isLoginModalOpen, logout }) => {
	const navigate = useNavigate();

	const callLogoutApi = async () => {
		const details = {
			username: getUsername(),
		};
		await client
			.post("/db/logout/user", details)
			.then(() => {
				removeUsername();
				logout();
				navigate("/home");
			})
			.catch((error) => console.error(error));
	};

	const handleOnClick = (value) => {
		if (value.toLowerCase() === "login") {
			isLoginModalOpen(true);
		} else if (value.toLowerCase() === "logout") {
			callLogoutApi();
		} else if (value.toLowerCase() === "admin dashboard") {
			navigate("/admin");
		} else {
			isLoginModalOpen(false);
		}
	};

	const device = DeviceChecker();

	return (
		<Accordion
			key={items.name}
			expanded={!items.isDropDown ? false : undefined}
		>
			{items.haslink && (
				<Link to={items.link} className={styles.link}>
					<AccordionSummary
						expandIcon={items.isDropDown ? <ExpandMoreIcon /> : null}
					>
						<Typography
							style={{
								fontFamily: "unset",
								fontSize: `${device === "tablet" ? "larger" : ""}`,
							}}
						>
							{items.name}
						</Typography>
					</AccordionSummary>
				</Link>
			)}

			{!items.haslink && (
				<AccordionSummary
					expandIcon={items.isDropDown ? <ExpandMoreIcon /> : null}
					onClick={() => handleOnClick(items.name)}
				>
					<Typography
						style={{
							fontFamily: "unset",
							fontSize: `${device === "tablet" ? "larger" : ""}`,
						}}
					>
						{items.name}
					</Typography>
				</AccordionSummary>
			)}

			{items.subOptions.map((items) => {
				return (
					<Accordion
						key={items.brand}
						expanded={!items.isDropDown ? false : undefined}
					>
						<AccordionSummary
							expandIcon={items.isDropDown ? <ExpandMoreIcon /> : null}
							style={{
								backgroundColor: "#E8E8E8",
							}}
						>
							<span
								style={{
									marginLeft: "5%",
									fontSize: `${device === "tablet" ? "larger" : ""}`,
								}}
							>
								{items.brand}
							</span>
						</AccordionSummary>
						{items.shoes.map((items) => {
							const templink = items.replace(" ", "");
							const link = templink.toLowerCase();
							return (
								<Link
									to={`/view?shoes=${link}`}
									key={items}
									className={styles.link}
									reloadDocument
								>
									<AccordionDetails className={styles.shoesOption}>
										<span
											style={{
												marginLeft: "10%",
												fontSize: `${device === "tablet" ? "larger" : ""}`,
											}}
										>
											{items}
										</span>
									</AccordionDetails>
								</Link>
							);
						})}
					</Accordion>
				);
			})}
		</Accordion>
	);
};

export default MenuOptions;
