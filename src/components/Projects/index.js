import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Personal Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to API's. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'api' ?
            <ToggleButton active value="api" onClick={() => setToggle('api')}>API'S</ToggleButton>
            :
            <ToggleButton value="api" onClick={() => setToggle('api')}>API'S</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APP'S</ToggleButton>
            :
            <ToggleButton value="mobile app" onClick={() => setToggle('mobile app')}> MOBILE APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          <CardContainer>
            {projects.length < 1 && <Desc>Soon more projects!</Desc>}

            {toggle === 'all'
              ? projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
              : projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
          </CardContainer>

        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects