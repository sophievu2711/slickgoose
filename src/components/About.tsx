import React from 'react';
import { Hero } from 'react-landing-page';
import { Heading, Flex, Text, Image} from 'rebass';
import { SocialIcon } from 'react-social-icons';
import { Typography, Grid, Box, IconButton} from '@material-ui/core';  
import SingleModal from './simpleModal';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function About(props: any) {

    const team = [{
        name: "NGA VU",
        title: "Project Manager",
        title2: "Frontend Developer",
        img: "Nga.jpg",
        socials: ["https://github.com/sophievu2711/", "https://www.linkedin.com/in/sophie-vu/", "https://www.behance.net/ngav3"],
        something: "I am a Business Information Systems student who is always willing to learn new things and eager to please and enjoy challenge. Having strong passion for system analysis and UI/UX development, I love doing things in a logical, innovative and beautiful way. I love the way technology can bring the world together and everyone can feel better.",
        responsible: "For Sunflower, I plan the development schedule and communicate with our project stakeholders to bring all the ideas together. Apart from managing the overall project, I also work as a member in the Frontend Developer team."
    }, {
        name: "KIEU MY NGUYEN",
        title: "User Experience Designer",
        img: "my.jpg",
        socials: ["https://www.github.com/rainbowlemonade"],
        something: "I am currently completing a degree in Information Technology with a major in Web Design and Development. I believe in the potentials of technology and being able to make meaningful impacts with use of technology is my goal. I am also very much interested in the creative side of things. My other passion is photography. ",
        responsible: "I am responsible for analysing the system to make sure it meets all requirements and creating meaningful experiences through UX/UI design."
    }, {
        name: "XUEQI ZHANG",
        title: "System analyst",
        img: "xueqi.jpg",
        socials: ["https://www.facebook.com/xueqio.zhang"],
        something: "My name is Xueqi, and you can call me Vicky as well. I from China, and currently working on my major, Big Data. Love listening to music and watching moive in my free time.",
        responsible: "My responsibilities are analysing system requirements and testing the system to verify that it meets all the requirements."
    }, {
        name: "THIEN BUI",
        title: "Fullstack Developer",
        img: "Thien.png",
        socials: ["https://github.com/ducthienbui97", 'https://www.linkedin.com/in/ducthienbui/'],
        something: "I am a part-time software engineer, a full-time Computer Science student, and a lifelong learner. I am a computer enthusiast, a software developer with the dream of using technology to make the world a better place. ",
        responsible: "I'm responsible for the overall technical architecture design and development of Sunflower."
    }, {
        name: "DANIEL NICHOLS",
        title: "Site Reliable Engineer",
        title2: "Frontend Developer",
        img: "daniel.jpg",
        socials: ['https://github.com/Hexellate', 'https://www.linkedin.com/in/daniel-nichols-040384196'],
        responsible: "I am tasked with setting up and maintaining the CD/CI pipeline of the website as well as working on the development of the website.",
        something: "As long as I can remember, I've had a passion for everything computers. Whether it's building them, programming them, or just using them, I'm interested. Now, studying Computer Science at UOW, I have an opportunity to pursue a career in a field that I'm passionate about, where computers can be used to build a better future for all."
    }, {
        name: "PETER KUSCH",
        title: "Frontend Developer",
        img: "peter.jpg",
        socials: ["https://github.com/plk243", "https://www.linkedin.com/in/peter-kusch-705383196"],
        responsible: "I work on developing frontend in Sunflower project.",
        something: "Born in Germany in 1998 and finished my HSC in 2016 with a passion in Chemistry and Programming. I am currently completing a Computer Science degree majoring in Digital System Security and have an interest in social justice issues such as ethical consumerism, domestic violence and equitable education. I also love travel and hiking."
    }]

    const content = [{
            heading:"Our Story", 
            para: "We’re an agile team run by students from Faculty of Engineering and Information Sciences at University of Wollongong. The team was founded for our degree final project that started in August 2019.",
            photo: "uow.jpg"
        }, {
            heading: "Our Vision",
            para: "We are dedicated to developing software and applications that provide people with convenient and intelligent solutions to solve current issues caused by the lack of resources such as work force and facilities, as well as the barriers of time and space.",
            photo: "vision.png"
        },  {
            heading: "Our Mission",
            para: "We are assigned to Developing Nations Dashboard (now known as Sunflower), which focuses on developing a Web-based platform for online education and learning.",
            photo: "mission.png"
        }
    ]

    return (
        <Hero>
            <Flex minHeight="50vh" width="100%" style={{backgroundImage:'url("aboutus.jpg")', backgroundSize: "cover", backgroundPosition: "center"}}>
                <Flex style={{background: "rgba(0, 0, 0, 0.5)"}} minHeight="50vh" width="100%" justifyContent="center" alignItems="center">
                    <Heading textAlign="center" fontFamily={"inherit"} fontSize={[50, 60, 70]} fontWeight={500} color="white">ABOUT US</Heading>
                </Flex>
            </Flex>
            {
                content.map((data, idx) => {
                    return (
                        <Flex width="100%" minHeight="50vh" padding="10vh" justifyContent="space-evenly" backgroundColor={idx%2?"white":"#E5E5E5"} 
                            flexDirection="column" flexWrap="wrap">
                            <Flex width={.9} alignSelf="center" flexDirection={idx%2?"row":"row-reverse"} justifyContent= "space-around"  flexWrap="wrap">
                            <Image src={data.photo} alt={data.heading} sx={{margin: 10}} width={["200px", "300px", "400px"]} 
                                        height={["200px", "300px", "400px"]} alignSelf="center"/>
                            <Flex flexDirection="column" width={[1, 1/2, 1/2]} marginTop="20" justifyContent="center">
                                <Heading textAlign={idx%2? "right" : "left"} fontFamily={"inherit"} fontSize={[30, 40, 50]} fontWeight={500} style={{ marginBottom: '3vh' }}>{data.heading}</Heading>
                                <Text textAlign={idx%2? "right" : "left"} fontFamily={"inherit"} fontSize={[25, 30, 35]} fontWeight={300}>{data.para}</Text>
                            </Flex>
                            </Flex>
                        </Flex>
                    )
                })
            }
            <Box width="80%" marginBottom="10vh" >
                <Grid container style={{ padding: '10vw 0 5vw 0', textAlign: 'center'}}>
                    <Grid item xs={12}>
                        <Heading fontFamily={"inherit"} fontSize='5vh' fontWeight={500} paddingBottom="8vh" >Project Team</Heading>
                        <Image src="./supervisor.jpg" alt="supervisor" sx={{marginBottom: '8vh', borderRadius: 9999}} width={["120px", "200px", "300px"]} height={["120px", "200px", "300px"]}/>
                        <Text fontFamily={"inherit"} fontSize='3vh' fontWeight={500} paddingBottom="1.5vh">
                            Vlahu-Gjorgievska, Elena Dr
                        </Text>
                        <Text textAlign='center' fontSize='2vh' mb={3} style={{opacity: 3 / 4}}>Project Supervisor</Text>
                        <IconButton href="https://scholars.uow.edu.au/display/elena_vlahu-gjorgievska"><OpenInNewIcon /></IconButton>
                    </Grid>
                </Grid>
                <Grid container style={{ textAlign: 'center' }} spacing={1}>
                    {
                        team.map(member => {
                            return (
                                <Grid item lg={4} md={6} xs={12}>
                                    <SingleModal modalTitle={member.name} buttonTitle={
                                        <Box width="40vh" minHeight="40vh">
                                            <Image src={member.img} alt={member.name} sx={{margin: 10, borderRadius: 9999}} width={["120px", "150px", "200px"]} height={["120px", "150px", "200px"]}/>
                                            <Typography style={{ fontWeight: 'bold', fontSize: '2vh' }}>{member.name}</Typography> 
                                            <Text textAlign='center' style={{opacity: 3 / 4}}>{member.title}</Text>
                                            {
                                                member.title2 && <Text textAlign='center' mb={3} style={{opacity: 3 / 4}}>{member.title2}</Text>
                                            }
                                        </Box>
                                    }>
                                        <Image src={member.img} alt={member.name} sx={{borderRadius: 9999}} width={["120px", "150px", "200px"]} height={["120px", "150px", "200px"]}/>
                                        <Text textAlign='center' mt={3} style={{ fontSize: '3vh', fontWeight: 'bold' }}>{member.name}</Text>
                                        <Text textAlign='center' style={{opacity: 3 / 4}}>{member.title}</Text>
                                        {
                                            member.title2 && <Text textAlign='center' mb={3} style={{opacity: 3 / 4}}>{member.title2}</Text>
                                        }
                                        <Box style={{ margin: '1vh' }}>
                                            {member.socials.map(url => <SocialIcon url={url} style={{margin: 3, height: 30, width: 30}}></SocialIcon>)}
                                        </Box>
                                        <Typography style={{ margin: '2vh 0' }}>
                                            {member.something}
                                        </Typography>
                                        <Typography style={{ margin: '2vh 0' }}>
                                            {member.responsible}
                                        </Typography>
                                    </SingleModal>
                                </Grid>
                            )
                        })
                    }
                </Grid> 
            </Box>
           
        </Hero>
    );
}