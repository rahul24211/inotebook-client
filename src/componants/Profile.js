import React from 'react'
import { Container, Card, Avatar, Text, Group, Button } from "@mantine/core";
import { motion } from "framer-motion";
const Profile = () => {
    const user = {
        name: "Rahul Kumar",
        role: "React Developer",
        email: "rahul@example.com",
        location: "India",
        avatar: "https://i.pravatar.cc/150?img=8",
    }
    return (
        <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
            <motion.div
               initial={{ opacity: 0, x: 300 }}   // 👉 right side se bahar
  animate={{ opacity: 1, x: 0 }}     // 👉 apni jagah aa jaye
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="col-12 col-md-5 col-lg-4"
            >
                <Card shadow="md" radius="lg" padding="xl">
                    <Group position="center" mb="md">
                        <Avatar src={user.avatar} size={120} radius={120} />
                    </Group>

                    <Text align="center" fw={600} size="xl">
                        {user.name}
                    </Text>
                    <Text align="center" c="dimmed">
                        {user.role}
                    </Text>

                    <Text size="sm" align="center" mt="sm">
                        📧 {user.email}
                    </Text>
                    <Text size="sm" align="center">
                        📍 {user.location}
                    </Text>

                    <Group position="center" mt="md">
                        <Button>Edit Profile</Button>
                    </Group>
                </Card>
            </motion.div>
        </Container>
    )
}

export default Profile
