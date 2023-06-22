import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { TitleInfo } from './components/TitleInfo'
import { Content, PageInfoContainer } from './styles'
import { apiIssues } from '../../lib'
import Markdown from 'markdown-to-jsx'
import { useParams } from 'react-router-dom'

export interface InforType {
  title: string
  user: { login: string }
  html_url: string
  body: string
  created_at: string
  comments: number
}

export function PageInfo() {
  const [info, setInfo] = useState({} as InforType)

  const params = useParams()
  console.log(params)
  useEffect(() => {
    async function dataPost() {
      await apiIssues
        .get(`GitHub-Blog/issues/${params.id}`)
        .then((response) => {
          setInfo(response.data)
        })
    }
    dataPost()
  }, [params])
  return (
    <div>
      <Header />
      <PageInfoContainer>
        {info && info.created_at && (
          <TitleInfo
            login={info.user?.login}
            title={info?.title}
            htmlUrl={info?.html_url}
            createdAt={info?.created_at}
            comments={info?.comments}
          />
        )}
        <Content>{info.body && <Markdown>{info.body}</Markdown>}</Content>
      </PageInfoContainer>
    </div>
  )
}
