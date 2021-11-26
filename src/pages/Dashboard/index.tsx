import React, { useState, FormEvent, useEffect } from 'react';

//plugins
import { IoChevronForwardOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
//styles
import { Title, Form, Repository, Error} from './styles';
//images
import logoImg from '../../assets/logo.svg';

//services
import api from '../../services/api';

import CFooter from '../../components/footer/';

interface Repository {
    full_name: string,
    description: string,
    owner: {
        long: string
        avatar_url: string
    }
}

const Dashboard: React.FC = () => {
    const [getBuscaRepo, setBuscaRepo] = useState('');
    const [getApiRepo, setApiRepo] = useState<Repository[]>(() => {
        const getRepositories = localStorage.getItem('@GithubExplorer/repositories')

        if(getRepositories){
            return JSON.parse(getRepositories)
        } else {
            return []
        }
    });
    const [errorApi, setError] = useState('');

    useEffect(() => {
        localStorage.setItem("@GithubExplorer/repositories", JSON.stringify(getApiRepo),);
    },[getApiRepo]) 

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        //capturar dados do form
        //consumir api
        //atualizar estado
        event.preventDefault();

        if(!getBuscaRepo){
            setError('Digite o autor/nome repositório');
            return
        }

        try {
            const reponse = await api.get<Repository>(`repos/${getBuscaRepo}`);
            const repository = reponse.data;
            setApiRepo([...getApiRepo, repository]);

            setError('');
        } catch (error) {
            setError('Algo deu errado digite o autor/nome repositório corretamente');
        }
    }

    return (
        <>
            <div><img src={logoImg} alt="GitHub Explorer" width="215px" />
            <Title>Explore repositórios no Github (teste).</Title>

            <Form onSubmit={handleAddRepository}>
                <input type="text" placeholder="Insira 'nome usuario/repositorio', exemplo: denissouzaa/gitexplorer" onChange={e => setBuscaRepo(e.target.value)} value={getBuscaRepo} />
                <button type="submit">Pesquisar</button>
            </Form>
            <Error>{errorApi}</Error>
            <Repository>
                {getApiRepo.map(repository => (
                    <Link key={repository.full_name} to={`/explorer/${repository.full_name}`}>
                        <img src={repository.owner.avatar_url} alt="" />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <IoChevronForwardOutline size={20} />
                    </Link>
                ))}
            </Repository></div>
            <div>
                <CFooter />
            </div>
            
        
        </>
    )
}

export default Dashboard;