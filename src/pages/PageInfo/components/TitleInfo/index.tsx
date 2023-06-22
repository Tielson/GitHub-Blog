import { BsGithub } from 'react-icons/bs'
import { InfoContainer, ProfileContainer } from './styles'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
} from '@phosphor-icons/react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface SectionHeaderType {
  login: string
  title: string
  htmlUrl: string
  createdAt: string
  comments: number
}

export function TitleInfo({
  login,
  title,
  htmlUrl,
  createdAt,
  comments,
}: SectionHeaderType) {
  console.log(createdAt)
  return (
    <ProfileContainer>
      <InfoContainer>
        <div className="fistDiv">
          <div>
            <a href="/">
              <CaretLeft size={12} />
              Voltar
            </a>

            <a href={htmlUrl} target="_blank" rel="noreferrer">
              <p>ver no github</p>
              <ArrowSquareOut size={12} weight="bold" />
            </a>
          </div>
          <h1>{title}</h1>
        </div>

        <div className="lastDiv">
          <div>
            <BsGithub size={18} />
            {login}
          </div>
          <div>
            <Calendar size={18} weight="fill" />

            {formatDistanceToNow(new Date(Date.parse(createdAt)), {
              addSuffix: true,
              locale: ptBR,
            })}
          </div>
          <div>
            <ChatCircle size={18} weight="fill" />
            {comments}
          </div>
        </div>
      </InfoContainer>
    </ProfileContainer>
  )
}
