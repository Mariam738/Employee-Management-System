import { useState } from "react";
import api from "../api";
import { data, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN, ROLE } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import { useUserStore } from "../store/user";

import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const { user, setUser } = useUserStore();
    const handleSubmit = async (e) => { 
        setLoading(true)
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            
            console.log("login res:" + res)
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                const getMe = () => {
                    api.get("/api/me/")
                        .then((res) => res.data)
                        .then((data) => {
                            setUser(data)
                            console.log("user")
                            console.log(user)
                            console.log(data)
                            localStorage.setItem(ROLE, data.role)
                            if (data.role === 'admin')
                                navigate("/admin");
                            else if (data.role === 'hr')
                                navigate("/hr");
                            else if (data.role === 'employee')
                                navigate("/employee")
                            
                        }).catch((err) => alert(err));
                }
                getMe();
                
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container maxW={"container.sm"} mt={4}>
            <VStack spacing={4}>
                <Heading as={"h1"} size={"lg"} textAlign={"center"}>
                    {name}
                </Heading>
                
                <Box w={"full"} bg={"white"} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Username'
                            name='name'type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        
                        />
                        
						<Input
							placeholder='Password'
							name='price'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

						<Button colorScheme='blue' onClick={handleSubmit} w='full'>
							{name}
						</Button>
					</VStack>
				</Box>
                
                {/* {loading && <LoadingIndicator></LoadingIndicator>} */}
                
            </VStack>
        </Container>
    )
}

export default Form;