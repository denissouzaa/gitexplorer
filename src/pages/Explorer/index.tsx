import React, { useEffect, useState } from 'react';

//plugins 
import { useRouteMatch, Link } from 'react-router-dom';
import { IoCaretBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
//styles
import { Header, RepositoryInfo, RepositoryLista, Footer } from './styles';
//images
import logoImg from '../../assets/logo.svg';
//services
import api from '../../services/api';

import CFooter from '../../components/footer';

interface RepositoryParams {
    repository: string;
}

interface Repo {
    full_name: string,
    description: string,
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number,
    owner: {
        avatar_url: string,
    }
}

interface Issues {
    id: number,
    html_url: string,
    title: string,
    user: {
        login: string,
    }
}

const Explorer: React.FC = () => {

    const [repo, setRepo] = useState<Repo | null>(null);
    const [issues, setIssues] = useState<Issues[]>([]);
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepo(response.data);
        })
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        })
    }, [params.repository])


    return (
        <> 
            <div>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" width="215px" />
                <Link to="../">
                    <IoCaretBackOutline size="20" />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src={repo?.owner.avatar_url} alt="" />
                    <div>
                        <strong>{params.repository}</strong>
                        <p>{repo?.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repo?.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repo?.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repo?.open_issues_count}</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <RepositoryLista>
                {issues.map(issues => (
                    <a key={issues.id} href={issues.html_url} target="_blank" rel="noreferrer">
                    <div>
                        <strong>{issues.title}</strong>
                        <p>{issues.user.login}</p>
                    </div>
                    <IoChevronForwardOutline size={20} />
                </a>
                ))}
                
            </RepositoryLista>
            </div>
            <div>
                <CFooter />
            </div>

        

        </>
    )
}

export default Explorer;