import React from 'react';
import { Heading, Flex, Text, Image} from "rebass";
import { Hero, Laptop, Phone } from "react-landing-page";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LaunchIcon from '@material-ui/icons/Launch';
import Sunflower from './Sunflower';
import { Link, Grid, Typography } from '@material-ui/core';
import "./textStyle.css";

export default function Product(props: any) {
    const features = [
        {
            header: "Build course contents.",
            img: "courseBuilder.jpg",
            content: ["Like other learning management systems, one of the biggest advantages of Sunflower is the ability to improve teaching and learning performance and efficiency.",
            "It is easier for teachers to deliver teaching content and assessments to numerous students. It is also easier for students to access to course content, assessments, and submission records with just few clicks."]
        },
        {
            header: "Build assessments.",
            img: "asm.png",
            content: [
                "Create assessments for each course section.",
                "Set assessment weight, maximum mark for the whole assessment, maximum marks for each question, number of attempts, and time limit.",
                "Various question types including multiple choices, multiple answer multiple choice, short answer and long answer.",
            ],
        },
        {
            header: "Online assessment grading and feedback.",
            content: [
                "Enables automated scoring for multiple choice and short-answer questions using regex.",
                "Enables teachers/ trainers to do marking manually and give feedback for every submission.",
            ],
            phone: "",
            img: "marking.jpg",
        },
        {
            header: "Submission records and assessment results.",
            content: [
               "Allow users to review their submission records with details of provided answers and marking result for each question."
            ],
            img: "record.jpg",
        },
        {
            header: "Discussion forum for each course.",
            content: [
                "Allows users to create and join in discussions with other learners and trainers in the course.",
                "Allows trainers/teachers to mark a thread as important.",
                "Allows trainers/teachers to lock threads.",
            ],
            laptop: "forum.jpg"
        },
        {
            header: "Data hub.",
            content: [
                "Allows users to search and filter data of courses, organisations, users, and records. ",
                "Allows users to export search results to .csv file.",
            ],
            img: "list.png",
        },
        {
            header: "Dashboard for learner.",
            content: [
                "Allow learner to track its learning progress, results, average mark and view the list of important contact."
            ],
            img: "dashboard.jpg",
        },
        {
            header: "Minimalist interface design with simple English.",
            content: [
                "Non-functional decorative elements are eliminated to make the system more friendly with low-tech people.",
                "Complex sentences are avoided in the system as a solution for issues related to language barriers that face students in non-native English speaking countries.",
            ],
            img: "courses.jpg",
        },
        {
            header: "Use anytime, anywhere, on any device.",
            content: [
                "Sunflower is empowered by responsive design, it is easily accessible anytime, from anywhere, on any device.",
                "Sunflower is optimised so it can run on the low-performance equipments, slow and unreliable internet in developing countries.",
            ],
            img: "mockup.png"
        },
    ]
    
    return (
        <Hero>
            <Grid container style={{ background: 'linear-gradient(to left, #2A5470 20%, #4C4177 80%)', height: "100vh" }}>
                <Grid container style={{ width: '85%', margin: 'auto' }}>
                    <Grid item xs={12} md={6} style={{ margin: 'auto' }}>
                        <Heading padding="2vh" color="white" backgroundColor="rgb(0,0,0, 0.3)" width="76%" textAlign="center" fontFamily={"inherit"} fontSize={[50]} fontWeight={500}>What's <Sunflower /> ?</Heading>
                        <Text fontSize="3vh" marginTop={20} color="white">
                            A web-based learning management system that aims to empower the digital education revolution.
                        </Text>
                        <Text fontSize="3vh" marginTop={20} color="white">
                            The development of Sunflower is supported by Engage Online. <Link href="https://www.engageonline.com.au/"><LaunchIcon/></Link>
                        </Text>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Laptop mt={3} src="login.png"/>
                    </Grid> 
                </Grid>
            </Grid>
            <Grid container style={{ width: '85%', marginTop: '6vh' }} spacing={5}>
                <Grid item xs={12} lg={5}>
                    <Heading fontFamily={"inherit"} fontSize={[50]} fontWeight={500} textAlign="center">Target Users</Heading>
                </Grid>
                <Grid item xs={12} lg={7} />
                <Grid item xs={12} lg={5} style={{ margin: 'auto', textAlign: 'center' }}>
                    <Image src="users1.png"></Image>
                </Grid>
                <Grid item xs={12} lg={7} style={{ margin: 'auto' }}>
                    <Typography className="targetUsers" style={{ fontSize: '3vh' }}>Academic training</Typography>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        In academic training, users can be teachers, students or school administrators.
                    </div>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        For teachers, the platform can be used to deliver and manage teaching materials, organise and mark online quizzes, and track the performance of students for whom they are responsible.
                    </div>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        Students can use the platform for online learning, completing the tasks from their enrolled courses or subjects, track their performance, and communicate with other students and teachers in their subjects.
                    </div>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        The system also allows school administrators to oversee and manage all courses and users in their organisation.
                    </div>
                    <Typography className="targetUsers" style={{ fontSize: '3vh' }}>Corporate training</Typography>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        Businesses, non-for-profit organisations, and local government units can use the system deliver knowledge and skill training programs for their staff to increase employees’ engagement as well as help them to develop relevant skills.
                    </div>
                    <Typography className="targetUsers" style={{ fontSize: '3vh' }}>Future potential users</Typography>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        In further stages of product life cycle, the system will consider individuals as the additional primary target users.
                    </div>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        At the current state, an external user who does not belong to an organisation is able to register for an account, login to the system and see the list of publicly accessible organisations and courses.
                    </div>
                    <div style={{ fontSize: '1.8vh', margin: '1.5vh' }}>
                        In the future stages of development, they can also access course materials, view teaching content and complete assignments.
                    </div>
                </Grid>
            </Grid>                
            <Flex minHeight="100vh" flexDirection="column" justifyContent="center" width="80%">
                <Flex width={[1]} justifyContent="space-evenly" alignItems="center" flexWrap="wrap" alignSelf="center"> 
                    <Flex width={[1, 1, 1/3]} justifyContent="center">
                        <Image src="student_per_teacher.png" width={300}></Image>
                    </Flex>
                    <Flex flexDirection="column" padding={20} width={[1, 1, 2/3]}>
                        <Heading fontFamily={"inherit"} fontSize={[50]} fontWeight={500} textAlign="left" marginBottom="3vh" >This project started when...</Heading>
                        <Text fontSize="2.5vh">Mental health issues are difficult to identify in less economically developed countries… </Text>
                        <Text fontSize="2.5vh" marginTop={20}>The education system is overloaded to a point where teachers are unable to identify mental health issues in their classes of children.</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex minHeight="50vh" justifyContent="center" backgroundColor="#202121" flexDirection="column" alignItems="center" padding={20}>
                <Flex fontSize="3vh" width={[1, 2/3]} alignItems="center" color="white">
                    <Text>"In just the past 3 months, our organisation has had 300+ schools, 50+ very large organisations and a large local government reach out requesting assistance in helping with these issues any way we can (approximately +2.5million people)."</Text>
                </Flex>
                <Flex marginTop="3vh" fontSize={[25, 30]} color="#F3CB3B" justifyContent="flex-end">
                    <Link href="https://www.engageonline.com.au/" color="inherit"><Text style={{fontStyle: "italic"}}>Engage Online</Text></Link>
                </Flex>
            </Flex>
            <Flex minHeight="100vh" width={[1, 2/3]} justifyContent="space-evenly" alignItems="center" flexWrap="wrap"> 
                <Image src="sunflower.png" height="30vw" margin={10}></Image>
                <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" height="100%" margin={10}>
                    <Heading fontFamily={"inherit"} fontSize={[50]} fontWeight={500} marginBottom="3vh">Features</Heading>
                    {features.map(feature => <Flex margin={10} fontSize={[20, 25]} alignItems="center">
                        <CheckCircleIcon htmlColor="#99C11F" fontSize="inherit" /><Text style={{ marginLeft: '2vh' }}>{feature.header}</Text></Flex>)}
                </Flex>
            </Flex>
            <Flex minHeight="50vh" justifyContent="center" backgroundColor="#202121" flexDirection="column" alignItems="center" padding={20}>
                <Flex marginBottom="3vh" fontSize={[25, 30]} color="#F3CB3B">
                    <Text style={{fontStyle: "italic"}}>Design methodology: Kanban</Text>
                </Flex>
                <Flex fontSize="2vh" width={[1, 2/3]} alignItems="center" color="white">
                    <Text>
                        Kanban is a popular framework used to implement agile software development, which focuses on real-time communication and full transparency of work and allows members to track on the working progress at any time.
                    </Text>
                </Flex>
                <Flex margin="4vh 0" fontSize="2vh" width={[1, 2/3]} alignItems="center" color="white">
                    <Text style={{ borderBottom: '2px dotted white' }}>
                        We choose Kanban for: 
                    </Text>
                </Flex>
                <Grid container style={{ fontSize: "2vh", width: '80%', textAlign: "center", color: "white"}}>
                    <Grid item xs={12} md={3}>
                        <Text><CheckCircleIcon style={{ margin: '0 2vh' }} htmlColor="#99C11F" fontSize="inherit" />Flexibility</Text>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Text><CheckCircleIcon style={{ margin: '0 2vh' }} htmlColor="#99C11F" fontSize="inherit" />Quick response to change</Text>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Text><CheckCircleIcon style={{ margin: '0 2vh' }} htmlColor="#99C11F" fontSize="inherit" />Focus on continuous delivery</Text>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Text><CheckCircleIcon style={{ margin: '0 2vh' }} htmlColor="#99C11F" fontSize="inherit" />Increased productivity</Text>
                    </Grid>
                </Grid>
            </Flex>
            {
                features.map((data, idx) => {
                    return (
                        <Flex width="100%" minHeight="100vh" justifyContent="space-evenly" backgroundColor={idx%2?"white":"#F6F6F6"} style={{ background: `linear-gradient(to ${idx%2? 'left' : 'right'}, #F4F4F9 20%, #fff 80%)` }} 
                            flexDirection="column" flexWrap="wrap">
                            <Flex width={.9} alignSelf="center" flexDirection={idx%2?"row":"row-reverse"} justifyContent={["center", "center","space-between"]} flexWrap={"wrap"}>
                            {
                                (data.laptop || data.phone || data.img) &&
                                <Flex width={[1, 1, 1/2]} justifyContent="center" padding={10}>
                                    {data.laptop && <Laptop src={data.laptop} alt={data.header} sx={{margin: 10}} alignSelf="center"/>}
                                    {data.phone && <Phone src={data.phone} alt={data.header} sx={{margin: 10}} alignSelf="center"/>}
                                    {data.img && <Image src={data.img} alt={data.header} sx={{margin: 10, maxHeight: '60vh'}} alignSelf="center"/>}
                                </Flex>
                            }
                            <Flex flexDirection="column" width={[1, 1, 1/2]} marginTop="20" justifyContent="center" style={{flexGrow: 1}}>

                                <Heading fontFamily={"inherit"} fontSize={[30, 40, 50]} fontWeight={500} marginBottom="4vh">{data.header}</Heading>
                                {
                                    data.content.map(line => (<Text fontFamily={"inherit"} fontSize='3vh' marginBottom="2vh" fontWeight={300}>{line}</Text>))
                                }
                            </Flex>
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Hero>
        
    )
}