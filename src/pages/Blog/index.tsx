import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { apiIssues } from '../../lib'
import { Profile } from './components/Profile'
import {
  Post,
  PostContainer,
  SearchContainer,
  SectionContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'markdown-to-jsx'
import { useNavigate } from 'react-router-dom'

export interface InforType {
  number: number
  title: string
  user: { login: string }
  html_url: string
  body: string
  created_at: string
  comments: number
}

export function Blog() {
  const [info, setInfo] = useState([{} as InforType])
  const [inputValue, setInputValue] = useState('')
  const [filteredInfo, setFilteredInfo] = useState([] as InforType[])

  console.log(filteredInfo)
  const navigate = useNavigate()

  function handleTheDirection(number: number) {
    navigate(`/info/${number}`)
  }
  useEffect(() => {
    async function dataPost() {
      const response = await apiIssues.get('/GitHub-Blog/issues')

      setInfo(response.data)
    }
    dataPost()
  }, [])
  useEffect(() => {
    const t = info?.filter(
      (item) =>
        item?.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
        item?.body?.toLowerCase().includes(inputValue.toLowerCase()),
    )
    setFilteredInfo(t)
  }, [info, inputValue])

  return (
    <div>
      <Header />
      <SectionContainer>
        <Profile />
        <SearchContainer>
          <div>
            <h1>Publicações</h1>
            <p>{info.length} publicações</p>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </SearchContainer>
        <PostContainer>
          {filteredInfo &&
            filteredInfo.map((info, index) => (
              <Post key={index} onClick={() => handleTheDirection(info.number)}>
                <div className="headerPost">
                  <h1>{info.title}</h1>
                  <p>
                    {info.created_at &&
                      formatDistanceToNow(
                        new Date(Date.parse(info.created_at)),
                        {
                          addSuffix: true,
                          locale: ptBR,
                        },
                      )}
                  </p>
                </div>
                <h3>{info.body && <Markdown>{info.body}</Markdown>}</h3>
              </Post>
            ))}
        </PostContainer>
      </SectionContainer>
    </div>
  )
}
