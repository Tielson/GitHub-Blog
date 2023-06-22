import { InfoContainer, ProfileContainer } from './styles'
import { ArrowSquareOut, Users } from '@phosphor-icons/react'
import { BsGithub } from 'react-icons/bs'
import { SlRocket } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { apiUser } from '../../../../lib'

export interface UserType {
  name: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  blog: string
  followers: number
}

export function Profile() {
  const [dataUser, setDataUser] = useState({} as UserType)
  useEffect(() => {
    async function dataPost() {
      await apiUser.get('').then((response) => {
        setDataUser(response.data)
      })
    }
    dataPost()
  }, [])
  return (
    <ProfileContainer>
      <img src={dataUser.avatar_url} alt="" />
      <InfoContainer>
        <div className="fistDiv">
          <h1>{dataUser.name}</h1>
          <a href={dataUser.html_url} target="_blank" rel="noreferrer">
            <p>GitHub</p>
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <div className="secondDiv">
          <p>{dataUser.bio}</p>
        </div>
        <div className="lastDiv">
          <div>
            <BsGithub size={18} />
            {dataUser.login}
          </div>
          <div className="port">
            <SlRocket size={18} weight="fill" />
            <a href={dataUser.blog} target="_blank" rel="noreferrer">
              Portifolio
            </a>
          </div>
          <div>
            <Users size={18} weight="fill" />
            {dataUser.followers}
          </div>
        </div>
      </InfoContainer>
    </ProfileContainer>
  )
}
