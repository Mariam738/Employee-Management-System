import { Container, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md"
import { useAuthStore } from "../store/auth.js"

const Navbar = () => {
const { isAuthorized } = useAuthStore();

	return (
		<Container maxW="100%" px={4} bg='gray.900'>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
			<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
                    textAlign={"center"}
					bgGradient={"linear(to-r, white, gray.400)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Employee Management System 💼</Link>
			</Text>
			
        		{/* <Button >
          			<MdLogout />
        	</Button> */}
</Flex>
				
		</Container>
	);
};
export default Navbar;